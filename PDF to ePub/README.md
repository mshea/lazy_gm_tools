# PDF to EPUB Conversion Script

Digital RPG products are almost always published in PDF but PDF is a terribly inflexible format. It sucks on mobile for example.

This shell script can do a moderately decent job of converting PDFs to ePub, a flexible and open format for reading books on mobile devices.

Steel yourself – the output is still going to suck. There's no magic here. PDFs are just terrible to convert to other formats. Still, this might do a decent enough job to give you something useful – or maybe not. It particularly blows at rendering tables. I mean really blows.

I wish you luck.

This script requires that you have `pdftotext` and `pandoc` installed and in your path.

### Installing pdftotext

#### On Ubuntu/Debian:

```sh
sudo apt update
sudo apt install poppler-utils
```

#### On macOS (using Homebrew):

```sh
brew install poppler
```

### Installing Pandoc

#### On Ubuntu/Debian:

```sh
sudo apt update
sudo apt install pandoc
```

#### On macOS (using Homebrew):

```sh
brew install pandoc
```

## Usage

1. Save the script to a file, e.g., `pdf_to_epub.sh`.
2. Make the script executable:

    ```sh
    chmod +x pdf_to_epub.sh
    ```

3. Run the script with a PDF file as an argument:

    ```sh
    ./pdf_to_epub.sh <input_pdf>
    ```

Replace `<input_pdf>` with the path to the PDF file you want to convert.

### Example

```sh
./pdf_to_epub.sh my_document.pdf
```

This will generate an EPUB file in the same directory as the input PDF.
