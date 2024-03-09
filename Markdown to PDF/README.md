# Markdown to PDF scripts

The files in this directory are intended to be run with the Mac's Automator application to let you select a markdown file and output a PDF to your desktop formatted nicely for a single page two-column set of notes for your RPG game.

## Setting Up Automator to run this script

To create an application in Automator that applies this script to selected files via a Finder window, follow these steps:

1. Open Automator on your Mac.
2. Choose "Application" as the type for your new Automator document.
3. Search for the "Ask for Finder Items" action in the Actions library on the left side and drag it to the workflow area. You can configure this action to your preferences, such as setting "Start at" to a specific directory.
4. Search for the "Run Shell Script" action and drag it into the workflow area below the "Ask for Finder Items" action.
5. In the "Run Shell Script" action, change "Pass input" to "as arguments".
6. Copy and paste the shell script into the textarea of the "Run Shell Script" action. Ensure the script is correctly set to use the input argument from Automator, which it already does with `file="$1"`.
7. Save your Automator application with a relevant name, e.g., "Generate PDF with Pandoc.app".

To use your application:

- Double-click the application icon. A Finder window will appear asking you to select a file.
- After selecting a file, the application runs your shell script on it, generating the PDF to your desktop.

This creates a standalone application that you can place anywhere in your system for easy access.

