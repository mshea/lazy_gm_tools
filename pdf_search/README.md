# PDF Search

Full-text search over a local PDF library with a web interface. Uses SQLite FTS5 for fast searching and `pdftotext` for text extraction. Search results link directly to the PDF files, served through Flask from your configured PDF directory. Disclaimer: This was totally vibe coded with Claude Code.

## Features

- Full-text search across thousands of PDFs
- Folder browsing sidebar with filter and resizable width
- Filename matches ranked above content matches
- Mobile-friendly responsive layout
- Sort results by relevance, name, or date (toggle ascending/descending)
- Search syntax: `path:"folder name"`, `filename:term`
- AJAX-powered results (no page reloads)
- Parallel PDF extraction (defaults to 3 workers, configure in the config)
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

Install on macOS:

```bash
brew install poppler
pip install flask
```

## Setup

1. Clone this repo.
2. Copy `config.py.sample` to `config.py` and update it with your settings. This config is shared by the extractor, the web server, and the CLI search tool.

```bash
cp config.py.sample config.py
```

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
| `PDF_SEARCH_MAX_WORKERS` | `3` | Parallel workers for PDF extraction |

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
