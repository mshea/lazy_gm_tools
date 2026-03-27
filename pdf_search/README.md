# PDF Search

Full-text search over a local PDF library with a web interface. Uses SQLite FTS5 for fast searching and `pdftotext` for text extraction. Disclaimer: this was totally vibe coded with Claude Code.

## Features

- Full-text search across thousands of PDFs
- Folder browsing sidebar with filter and resizable width
- Filename matches ranked above content matches
- Sort results by relevance, name, or date (toggle ascending/descending)
- Search syntax: `path:"folder name"`, `filename:term`
- Breadcrumb navigation across the top of the page
- AJAX-powered results (no page reloads)
- Mobile-friendly responsive layout
- Parallel PDF extraction (3 workers)
- Stale record cleanup on re-index
- CLI search tool

## Requirements

- Python 3.8+
- Flask (`pip install flask`)
- `pdftotext` (from `poppler-utils`)

Install on Debian/Ubuntu:

```bash
sudo apt install poppler-utils
pip install flask
```

## Setup

1. Clone this repo.
2. Edit `config.py` and set `PDF_DIR` to the directory containing your PDFs (or set the `PDF_SEARCH_PDF_DIR` environment variable).
3. Index your PDFs:

```bash
python3 extractor.py /path/to/your/pdfs
```

4. Start the web server:

```bash
cd web
python3 app.py
```

5. Open `http://localhost:5000` in a browser.

## Configuration

Edit `config.py` or set environment variables:

| Variable | Default | Description |
|---|---|---|
| `PDF_SEARCH_PDF_DIR` | `./pdfs` | Directory containing PDFs |
| `PDF_SEARCH_DB` | `./pdf_search.db` | SQLite database path |
| `PDF_SEARCH_HOST` | `0.0.0.0` | Web server bind address |
| `PDF_SEARCH_PORT` | `5000` | Web server port |
| `PDF_SEARCH_TITLE` | `PDF Search` | Site title in the web UI |

## CLI Search

```bash
python3 search.py "search terms" [limit]
```

## Re-indexing

Run the extractor again to pick up new or changed PDFs. Already-indexed files are skipped (tracked by file size and modification time). Deleted PDFs are automatically removed from the index.

```bash
python3 extractor.py
```

## License

CC0 1.0 Universal. See [LICENSE](LICENSE).
