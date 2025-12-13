#!/usr/bin/env python3
"""
Split markdown files at ## headers into smaller atomic rule files.
"""

import os
import re
from pathlib import Path

def slugify(text):
    """Convert text to a safe filename."""
    # Remove special characters and replace spaces with underscores
    text = re.sub(r'[^\w\s-]', '', text)
    text = re.sub(r'[-\s]+', '_', text)
    return text.strip('_')

def extract_chapter_number(filename):
    """Extract chapter number from filename like '01_PlayingTheGame.md'."""
    match = re.match(r'^(\d+)', filename)
    return match.group(1) if match else ''

def split_markdown_file(input_path, output_dir):
    """Split a markdown file at ## headers."""
    with open(input_path, 'r', encoding='utf-8') as f:
        content = f.read()

    filename = os.path.basename(input_path)
    chapter_num = extract_chapter_number(filename)

    # Split on ## headers, keeping the header with its content
    sections = re.split(r'\n(?=## )', content)

    files_created = []

    for section in sections:
        section = section.strip()
        if not section:
            continue

        # Extract the ## header title
        header_match = re.match(r'^## (.+?)$', section, re.MULTILINE)
        if not header_match:
            # This is content before the first ## header (like the # main title)
            # Skip it or handle separately if needed
            continue

        section_title = header_match.group(1).strip()

        # Special handling for sections with #### subsections
        if section_title == "Spell Descriptions":
            subsection_files = split_subsections(section, chapter_num, output_dir, "spell")
            files_created.extend(subsection_files)
        elif section_title == "Rules Definitions":
            subsection_files = split_subsections(section, chapter_num, output_dir, "rule")
            files_created.extend(subsection_files)
        elif section_title == "Magic Items A–Z":
            subsection_files = split_subsections(section, chapter_num, output_dir, "item")
            files_created.extend(subsection_files)
        else:
            safe_title = slugify(section_title)

            # Create filename: chapter_number + section_title
            if chapter_num:
                output_filename = f"{chapter_num}_{safe_title}.md"
            else:
                output_filename = f"{safe_title}.md"

            output_path = output_dir / output_filename

            with open(output_path, 'w', encoding='utf-8') as f:
                f.write(section.strip() + '\n')

            files_created.append(output_filename)

    return files_created

def split_subsections(section_content, chapter_num, output_dir, content_type):
    """Split sections with #### headers into individual files.

    Args:
        section_content: The markdown content to split
        chapter_num: Chapter number prefix
        output_dir: Output directory
        content_type: Type of content ('spell', 'rule', 'item') for logging
    """
    files_created = []

    # Split on #### headers
    subsections = re.split(r'\n(?=#### )', section_content)

    for subsection in subsections:
        subsection = subsection.strip()
        if not subsection:
            continue

        # Extract the #### header title (removing bold/italic markdown)
        match = re.match(r'^#### \*?\*?(.+?)\*?\*?$', subsection, re.MULTILINE)
        if not match:
            # This is the intro content before first item, skip it
            continue

        item_name = match.group(1).strip()
        safe_name = slugify(item_name)

        # Create filename: chapter_number + item_name
        if chapter_num:
            output_filename = f"{chapter_num}_{safe_name}.md"
        else:
            output_filename = f"{safe_name}.md"

        output_path = output_dir / output_filename

        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(subsection.strip() + '\n')

        files_created.append(output_filename)

    return files_created

def main():
    # Set up paths
    current_dir = Path(__file__).parent
    output_dir = current_dir / 'rules'

    # Create output directory
    output_dir.mkdir(exist_ok=True)

    # Find all markdown files (except LICENSE.md and the script itself)
    md_files = [f for f in current_dir.glob('*.md')
                if f.name not in ['LICENSE.md', 'README.md']]

    print(f"Found {len(md_files)} markdown files to process")
    print(f"Output directory: {output_dir}")
    print()

    total_files_created = 0

    for md_file in sorted(md_files):
        print(f"Processing: {md_file.name}")
        files_created = split_markdown_file(md_file, output_dir)
        total_files_created += len(files_created)
        print(f"  Created {len(files_created)} files")

    print()
    print(f"Done! Created {total_files_created} atomic rule files in {output_dir}")

if __name__ == '__main__':
    main()
