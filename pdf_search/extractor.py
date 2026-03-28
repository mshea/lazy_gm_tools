#!/usr/bin/env python3
"""
PDF text extractor and indexer.
Extracts text from PDFs using pdftotext and stores it in SQLite with FTS5.
"""

import os
import sqlite3
import subprocess
import sys
from concurrent.futures import ProcessPoolExecutor, as_completed
from datetime import datetime
from pathlib import Path

import config

BATCH_SIZE = 50


def init_db(db_path):
    """Initialize SQLite database with FTS5."""
    conn = sqlite3.connect(db_path)
    c = conn.cursor()
    c.execute("""
        CREATE TABLE IF NOT EXISTS documents (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            pdf_path TEXT UNIQUE NOT NULL,
            filename TEXT NOT NULL,
            extracted_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            file_size INTEGER,
            modified_date TIMESTAMP
        )
    """)
    # Add modified_date column if missing (for existing databases)
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

    stat = os.stat(pdf_path)
    return {
        'pdf_path': pdf_path, 'filename': filename, 'text': text,
        'file_size': stat.st_size,
        'modified_date': datetime.fromtimestamp(stat.st_mtime).strftime('%Y-%m-%d %H:%M:%S'),
    }


def scan_directory(directory, db_path):
    """Scan a directory tree for PDFs and index them."""
    conn = sqlite3.connect(db_path)
    c = conn.cursor()

    # Bulk-load existing records into memory for fast skip-checks
    c.execute("SELECT pdf_path, id, file_size, modified_date FROM documents")
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
            _, existing_size, existing_mdate = existing
            try:
                stat = os.stat(pdf_path)
            except OSError:
                continue
            mdate = datetime.fromtimestamp(stat.st_mtime).strftime('%Y-%m-%d %H:%M:%S')
            if stat.st_size == existing_size and mdate == existing_mdate:
                continue
        to_process.append(pdf_path)

    if to_process:
        print(f"Processing {len(to_process)} new/updated PDFs")
    else:
        print("No new or updated PDFs to process")

    # Parallel extraction + serial DB writes
    processed = 0
    batch_count = 0
    with ProcessPoolExecutor(max_workers=config.MAX_WORKERS) as pool:
        futures = {pool.submit(_extract_worker, p): p for p in to_process}
        for future in as_completed(futures):
            result = future.result()
            if result is None:
                src = futures[future]
                print(f"  Failed: {os.path.basename(src)}")
                continue

            pdf_path = result['pdf_path']
            existing = known.get(pdf_path)
            print(f"  Indexed: {result['filename']}")

            if existing:
                doc_id = existing[0]
                c.execute("""
                    UPDATE documents
                    SET extracted_date = CURRENT_TIMESTAMP,
                        file_size = ?, modified_date = ?
                    WHERE id = ?
                """, (result['file_size'], result['modified_date'], doc_id))
                c.execute("DELETE FROM documents_fts WHERE rowid = ?", (doc_id,))
            else:
                c.execute("""
                    INSERT INTO documents (pdf_path, filename, file_size, modified_date)
                    VALUES (?, ?, ?, ?)
                """, (pdf_path, result['filename'],
                      result['file_size'], result['modified_date']))
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
