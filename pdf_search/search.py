#!/usr/bin/env python3
"""
Command-line full-text search over indexed PDFs.
"""

import os
import sqlite3
import sys

import config


def format_size(size_bytes):
    """Format bytes to human-readable size."""
    if size_bytes is None:
        return "0 B"
    for unit in ['B', 'KB', 'MB', 'GB']:
        if size_bytes < 1024.0:
            return f"{size_bytes:.1f} {unit}"
        size_bytes /= 1024.0
    return f"{size_bytes:.1f} TB"


def search(query, limit=10):
    """Run an FTS5 search and print results."""
    if not os.path.exists(config.DB_PATH):
        print(f"Error: database not found at {config.DB_PATH}")
        return

    conn = sqlite3.connect(config.DB_PATH)
    conn.row_factory = sqlite3.Row
    c = conn.cursor()

    c.execute("""
        SELECT
            d.id, d.filename, d.pdf_path, d.file_size,
            snippet(documents_fts, 1, '**', '**', '...', 50) as snippet,
            bm25(documents_fts, 500.0, 1.0) as score
        FROM documents_fts
        JOIN documents d ON d.id = documents_fts.rowid
        WHERE documents_fts MATCH ?
        ORDER BY score
        LIMIT ?
    """, (query, limit))

    results = c.fetchall()
    conn.close()

    if not results:
        print(f"No results found for: {query}")
        return

    print(f"\nFound {len(results)} result(s) for: {query}\n")
    print("=" * 80)

    for i, row in enumerate(results, 1):
        print(f"\n{i}. {row['filename']}")
        print(f"   Path: {row['pdf_path']}")
        print(f"   Size: {format_size(row['file_size'])}")
        print(f"   Match: {row['snippet']}")
        print("-" * 80)


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python3 search.py <query> [limit]")
        print("Example: python3 search.py 'magic items' 20")
        sys.exit(1)

    query = sys.argv[1]
    limit = int(sys.argv[2]) if len(sys.argv) > 2 else 10
    search(query, limit)
