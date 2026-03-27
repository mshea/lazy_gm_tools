#!/usr/bin/env python3
"""
PDF text extractor and indexer.
Extracts text from PDFs using pdftotext and stores it in SQLite with FTS5.
"""

import hashlib
import os
import sqlite3
import subprocess
import sys
from concurrent.futures import ProcessPoolExecutor, as_completed
from datetime import datetime
from pathlib import Path

import config

BATCH_SIZE = 50
MAX_WORKERS = 3


def init_db(db_path):
    """Initialize SQLite database with FTS5."""
    conn = sqlite3.connect(db_path)
    c = conn.cursor()
    c.execute("""
        CREATE TABLE IF NOT EXISTS documents (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            pdf_path TEXT UNIQUE NOT NULL,
            filename TEXT NOT NULL,
            file_hash TEXT,
            extracted_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            file_size INTEGER
        )
    """)
    # Add modified_date column if missing
    c.execute("PRAGMA table_info(documents)")
    columns = {row[1] for row in c.fetchall()}
    if 'modified_date' not in columns:
        c.execute("ALTER TABLE documents ADD COLUMN modified_date TIMESTAMP")
        conn.commit()

    c.execute("""
        CREATE VIRTUAL TABLE IF NOT EXISTS documents_fts USING fts5(
            filename,
            content,
            content_rowid=id
        )
    """)
    conn.commit()
    conn.close()


def get_file_hash(filepath):
    """Get MD5 hash of a file."""
    md5 = hashlib.md5()
    with open(filepath, 'rb') as f:
        for chunk in iter(lambda: f.read(8192), b''):
            md5.update(chunk)
    return md5.hexdigest()


def extract_text(pdf_path):
    """Extract text from a PDF using pdftotext."""
    try:
        result = subprocess.run(
            ['pdftotext', '-enc', 'UTF-8', pdf_path, '-'],
            capture_output=True, text=True, timeout=300
        )
        if result.returncode == 0:
            return result.stdout
        return None
    except (subprocess.TimeoutExpired, Exception):
        return None


def _extract_worker(pdf_path):
    """Worker function for parallel extraction. Runs in a subprocess."""
    pdf_path = str(Path(pdf_path).resolve())
    filename = os.path.basename(pdf_path)
    text = extract_text(pdf_path)
    if text is None:
        return None

    file_hash = get_file_hash(pdf_path)
    file_size = os.path.getsize(pdf_path)
    modified_date = os.path.getmtime(pdf_path)
    return {
        'pdf_path': pdf_path, 'filename': filename, 'text': text,
        'file_hash': file_hash, 'file_size': file_size,
        'modified_date': modified_date,
    }


def scan_directory(directory, db_path):
    """Scan a directory tree for PDFs and index them."""
    conn = sqlite3.connect(db_path)
    c = conn.cursor()

    # Bulk-load existing records into memory for fast skip-checks
    c.execute("SELECT pdf_path, id, file_hash, file_size FROM documents")
    known = {row[0]: (row[1], row[2], row[3]) for row in c.fetchall()}
    known_paths = set(known.keys())

    # Collect all PDFs on disk
    pdf_files = []
    disk_paths = set()
    for root, dirs, files in os.walk(directory):
        for f in files:
            if f.lower().endswith('.pdf'):
                p = str(Path(os.path.join(root, f)).resolve())
                pdf_files.append(p)
                disk_paths.add(p)

    print(f"Found {len(pdf_files)} PDF files")

    # Filter to only files that need processing
    to_process = []
    for pdf_path in pdf_files:
        existing = known.get(pdf_path)
        if existing:
            _, _, existing_size = existing
            try:
                current_size = os.path.getsize(pdf_path)
            except OSError:
                continue
            if current_size == existing_size:
                continue
            # Size changed — check hash
            file_hash = get_file_hash(pdf_path)
            if file_hash == existing[1]:
                continue
        to_process.append(pdf_path)

    if to_process:
        print(f"Processing {len(to_process)} new/updated PDFs")
    else:
        print("No new or updated PDFs to process")

    # Parallel extraction + serial DB writes
    processed = 0
    batch_count = 0
    with ProcessPoolExecutor(max_workers=MAX_WORKERS) as pool:
        futures = {pool.submit(_extract_worker, p): p for p in to_process}
        for future in as_completed(futures):
            result = future.result()
            if result is None:
                src = futures[future]
                print(f"  Failed: {os.path.basename(src)}")
                continue

            pdf_path = result['pdf_path']
            existing = known.get(pdf_path)
            mdate = datetime.fromtimestamp(result['modified_date']).strftime('%Y-%m-%d %H:%M:%S')
            print(f"  Indexed: {result['filename']}")

            if existing:
                doc_id = existing[0]
                c.execute("""
                    UPDATE documents
                    SET file_hash = ?, extracted_date = CURRENT_TIMESTAMP,
                        file_size = ?, modified_date = ?
                    WHERE id = ?
                """, (result['file_hash'], result['file_size'], mdate, doc_id))
                c.execute("DELETE FROM documents_fts WHERE rowid = ?", (doc_id,))
            else:
                c.execute("""
                    INSERT INTO documents (pdf_path, filename, file_hash, file_size, modified_date)
                    VALUES (?, ?, ?, ?, ?)
                """, (pdf_path, result['filename'],
                      result['file_hash'], result['file_size'], mdate))
                doc_id = c.lastrowid

            c.execute("""
                INSERT INTO documents_fts (rowid, filename, content)
                VALUES (?, ?, ?)
            """, (doc_id, result['filename'], result['text']))

            processed += 1
            batch_count += 1
            if batch_count >= BATCH_SIZE:
                conn.commit()
                batch_count = 0

    if batch_count > 0:
        conn.commit()

    # Remove stale records for PDFs no longer on disk
    stale = known_paths - disk_paths
    if stale:
        print(f"Removing {len(stale)} stale records")
        for path in stale:
            doc_id = known[path][0]
            c.execute("DELETE FROM documents_fts WHERE rowid = ?", (doc_id,))
            c.execute("DELETE FROM documents WHERE id = ?", (doc_id,))
        conn.commit()

    conn.close()
    print(f"\nProcessed {processed} new/updated PDFs")
    if stale:
        print(f"Removed {len(stale)} stale records")
    print(f"Database: {db_path}")


if __name__ == "__main__":
    pdf_dir = sys.argv[1] if len(sys.argv) > 1 else config.PDF_DIR

    if not os.path.isdir(pdf_dir):
        print(f"Error: directory not found: {pdf_dir}")
        sys.exit(1)

    init_db(config.DB_PATH)

    print(f"Scanning: {pdf_dir}\n")
    scan_directory(pdf_dir, config.DB_PATH)
