# Custom Spell Support

You can add your own custom spells in this folder in the 5eADB. To do so, you'll want to be comfortable working with markdown files and comfortable editing configuration files with a text editor.

Because the 5eADB runs without a web server, it cannot load markdown files locally. Thus, everything is a javascript ".js" file, including the spell files.

To add a custom spell:

- Copy one of the existing spell files like "arcane-feedback.js" and give it a new name. Remember this name so you can add it to the index.

- Add your own spell markdown between the first and last line of the file. Preserve the " window.spellMarkdown = \`" on the first line and the "\`;" on the last line. If these aren't there, it won't load your spell description.

- Update the "custom_spells_index.js" file in this directory. Copy one of the existing records and be sure to include all the fields for your new spell. This index is what loads the spell in the main spells index table. Make sure your record has a "}," at the end. Javascript doesn't like missing commas.

## Warning – Back Up Before You Re-Download

If you redownload the 5eADB, be sure to back up your custom_spells_index.js file or it will overwrite it with the default one from the 5eADB. Your other spell files won't be deleted but, to be careful, be sure to back up or copy any of your custom spells and the custom_spells_index somewhere safe before replacing your existing copy of the 5eADB with a new one.