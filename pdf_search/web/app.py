#!/usr/bin/env python3
"""
PDF Search web interface.
Flask app with full-text search, folder browsing, and PDF serving.
"""

import os
import re
import sqlite3
import sys

from flask import Flask, render_template, request, send_file, jsonify

# Allow imports from the project root
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
import config

app = Flask(__name__)

STOPWORDS = frozenset({
    'a', 'an', 'and', 'are', 'as', 'at', 'be', 'by', 'for', 'from',
    'has', 'he', 'in', 'is', 'it', 'its', 'of', 'on', 'that', 'the',
    'to', 'was', 'will', 'with'
})


def get_db():
    conn = sqlite3.connect(config.DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn


def format_size(size_bytes):
    if size_bytes is None:
        return "0 B"
    for unit in ['B', 'KB', 'MB', 'GB']:
        if size_bytes < 1024.0:
            return f"{size_bytes:.1f} {unit}"
        size_bytes /= 1024.0
    return f"{size_bytes:.1f} TB"


def _make_result(row):
    """Build a result dict from a database row."""
    return {
        'id': row['id'], 'filename': row['filename'],
        'path': _rel_path(row['pdf_path']),
        'size': format_size(row['file_size']),
        'modified': row['modified_date'] or '',
        'snippet': row['snippet'] if 'snippet' in row.keys() else ''
    }


def _pdf_dir_with_slash():
    """Return PDF_DIR ending with /."""
    d = config.PDF_DIR
    return d if d.endswith('/') else d + '/'


def _rel_path(pdf_path):
    """Strip the configured PDF_DIR prefix to get a relative path."""
    return pdf_path.replace(_pdf_dir_with_slash(), '')


def _escape_like(value):
    """Escape LIKE wildcard characters in a value."""
    return value.replace('\\', '\\\\').replace('%', '\\%').replace('_', '\\_')


def _filter_stopwords(query):
    words = [w for w in query.split() if w.lower() not in STOPWORDS and len(w) > 1]
    return words if words else query.split()


def _parse_query(query):
    """Parse search query. Returns (search_words, path_filter, filename_only)."""
    words = []
    path_filter = None
    filename_only = False

    path_match = re.search(r'path:"([^"]+)"|path:(\S+)', query)
    if path_match:
        path_filter = path_match.group(1) or path_match.group(2)
        query = re.sub(r'path:"[^"]+"', '', query)
        query = re.sub(r'path:\S+', '', query)

    for token in query.split():
        if token.startswith('filename:'):
            words.append(token[9:])
            filename_only = True
        elif token.strip():
            words.append(token)

    return words, path_filter, filename_only


def do_search(query):
    """Run a full-text search. Returns a list of result dicts."""
    search_words, path_filter, filename_only = _parse_query(query)
    words = _filter_stopwords(' '.join(search_words))
    words = [w.replace('"', '') for w in words]
    words = [w for w in words if w]
    if not words:
        return []
    fts_query = ' '.join(f'"{w}"' for w in words)
    filename_query = ' '.join(f'filename:"{w}"' for w in words)

    path_clause = ""
    params_extra = []
    if path_filter:
        path_clause = " AND d.pdf_path LIKE ? ESCAPE '\\'"
        params_extra = [f'%{_escape_like(path_filter)}%']

    conn = get_db()
    c = conn.cursor()
    results = []
    seen_ids = set()

    try:
        # Filename matches (highest priority)
        c.execute(f"""
            SELECT d.id, d.filename, d.pdf_path, d.file_size, d.modified_date,
                   snippet(documents_fts, 1, '<mark>', '</mark>', '...', 50) as snippet,
                   -1000.0 as score
            FROM documents_fts
            JOIN documents d ON d.id = documents_fts.rowid
            WHERE documents_fts MATCH ?{path_clause}
            ORDER BY score LIMIT 500
        """, [filename_query] + params_extra)

        for row in c.fetchall():
            seen_ids.add(row['id'])
            results.append(_make_result(row))

        # Content matches
        if not filename_only:
            c.execute(f"""
                SELECT d.id, d.filename, d.pdf_path, d.file_size, d.modified_date,
                       snippet(documents_fts, 1, '<mark>', '</mark>', '...', 50) as snippet,
                       bm25(documents_fts, 10000.0, 1.0) as score
                FROM documents_fts
                JOIN documents d ON d.id = documents_fts.rowid
                WHERE documents_fts MATCH ?{path_clause}
                ORDER BY score LIMIT 500
            """, [fts_query] + params_extra)

            for row in c.fetchall():
                if row['id'] not in seen_ids:
                    results.append(_make_result(row))
    except sqlite3.OperationalError:
        pass
    finally:
        conn.close()

    return results


# --- Routes ---

@app.route('/')
def index():
    conn = get_db()
    c = conn.cursor()
    c.execute("SELECT COUNT(*) as count FROM documents")
    total_docs = c.fetchone()['count']
    conn.close()
    return render_template('index.html', total_docs=total_docs,
                           site_title=config.SITE_TITLE)


@app.route('/search')
def search():
    query = request.args.get('q', '').strip()
    if not query:
        return jsonify({'results': [], 'count': 0, 'query': ''})
    results = do_search(query)
    return jsonify({'results': results, 'count': len(results), 'query': query})


@app.route('/browse')
def browse():
    path = request.args.get('path', '').strip()
    base = _pdf_dir_with_slash()
    full_path = base + path + '/' if path else base

    conn = get_db()
    c = conn.cursor()
    c.execute("""
        SELECT id, filename, pdf_path, file_size, modified_date
        FROM documents WHERE pdf_path LIKE ? ESCAPE '\\'
        ORDER BY filename
    """, (_escape_like(full_path) + '%',))

    results = []
    for row in c.fetchall():
        rel_from_folder = row['pdf_path'][len(full_path):]
        if '/' not in rel_from_folder:
            results.append(_make_result(row))
    conn.close()
    return jsonify({'results': results, 'count': len(results), 'path': path})


@app.route('/pdf/<int:doc_id>')
def serve_pdf(doc_id):
    conn = get_db()
    c = conn.cursor()
    c.execute("SELECT pdf_path, filename FROM documents WHERE id = ?", (doc_id,))
    row = c.fetchone()
    conn.close()
    if not row:
        return "PDF not found", 404
    if not os.path.exists(row['pdf_path']):
        return "PDF file not found on disk", 404
    return send_file(row['pdf_path'], mimetype='application/pdf', as_attachment=False)


@app.route('/stats')
def stats():
    conn = get_db()
    c = conn.cursor()
    c.execute("SELECT COUNT(*) as count FROM documents")
    total_docs = c.fetchone()['count']
    c.execute("SELECT SUM(file_size) as total_size FROM documents")
    total_size = c.fetchone()['total_size'] or 0
    conn.close()
    return jsonify({'total_documents': total_docs, 'total_size': format_size(total_size)})


@app.route('/folders')
def folders():
    path = request.args.get('path', '').strip()
    base = _pdf_dir_with_slash()
    full_base = base + path + '/' if path else base

    conn = get_db()
    c = conn.cursor()
    c.execute("SELECT pdf_path FROM documents WHERE pdf_path LIKE ? ESCAPE '\\'",
              (_escape_like(full_base) + '%',))

    folders_dict = {}
    for row in c.fetchall():
        rel = row['pdf_path'][len(full_base):]
        if '/' in rel:
            folder = rel.split('/')[0]
            folders_dict[folder] = folders_dict.get(folder, 0) + 1

    conn.close()
    folders_list = [{'name': k, 'count': v} for k, v in sorted(folders_dict.items())]
    return jsonify({'folders': folders_list, 'current_path': path})


if __name__ == '__main__':
    app.run(host=config.HOST, port=config.PORT, debug=True)
