#!/bin/bash

if [ "$#" -ne 1 ]; then
    echo "Usage: $0 <input_pdf>"
    exit 1
fi

input_pdf="$1"

if [ ! -f "$input_pdf" ]; then
    echo "Error: File '$input_pdf' not found!"
    exit 1
fi

# Get the directory and base name of the input file
input_dir=$(dirname "$input_pdf")
base_name=$(basename "$input_pdf" .pdf)

# Set the paths for the output files
txt_file="$input_dir/${base_name}.txt"
temp_file="$input_dir/${base_name}_temp.txt"
epub_file="$input_dir/${base_name}.epub"

# Convert PDF to text using pdftotext
pdftotext "$input_pdf" "$txt_file"

# Remove all non-printable characters and ensure proper encoding
iconv -c -f utf-8 -t utf-8 "$txt_file" | tr -cd '[:print:]\n\t' > "$temp_file"
mv "$temp_file" "$txt_file"

# Add double line breaks to short sentences
sed -i '' -e 's/^\(.{1,19}\)$/\1\n/' "$txt_file"

# Convert single line breaks to spaces
awk '{
    if (NR == 1) {
        printf "%s", $0
    } else if ($0 ~ /^$/) {
        printf "\n\n"
    } else {
        printf " %s", $0
    }
}' "$txt_file" > "$temp_file"
mv "$temp_file" "$txt_file"

# Remove leading and trailing whitespace from each line
awk '{$1=$1;print}' "$txt_file" > "$temp_file"
mv "$temp_file" "$txt_file"

# Remove page numbers (1 to 4 digits)
awk '!/^[0-9]{1,4}$/' "$txt_file" > "$temp_file"
mv "$temp_file" "$txt_file"

# Convert any number of line breaks greater than two to just two
awk 'BEGIN{RS="\n\n\n+"; ORS="\n\n"} {print}' "$txt_file" > "$temp_file"
mv "$temp_file" "$txt_file"

# Remove any remaining non-printable characters
sed -i '' -e 's/[^[:print:]\t]//g' "$txt_file"

# Convert the cleaned text file to epub using Pandoc
pandoc "$txt_file" -o "$epub_file"

echo "Output EPUB file: $epub_file"
