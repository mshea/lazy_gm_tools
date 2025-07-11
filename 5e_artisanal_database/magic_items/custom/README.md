# Custom Magic Item Support

You can add your own custom magic items in this folder in the 5eADB. To do so, you'll want to be comfortable working with markdown files and comfortable editing configuration files with a text editor.

Because the 5eADB runs without a web server, it cannot load markdown files locally. Thus, everything is a javascript ".js" file, including the magic item files.

To add a custom magic item:

- Copy one of the existing magic item files like "ring-of-minor-teleportation.js" and give it a new name. Remember this name so you can add it to the index.

- Add your own magic item markdown between the first and last line of the file. Preserve the " window.magicItemMarkdown = \`" on the first line and the "\`;" on the last line. If these aren't there, it won't load your magic item description.

- Update the "custom_magic_items_index.js" file in this directory. Copy one of the existing records and be sure to include all the fields for your new magic item. This index is what loads the magic item in the main magic items index table. Make sure your record has a "}," at the end. Javascript doesn't like missing commas.

## Warning – Back Up Before You Re-Download

If you redownload the 5eADB, be sure to back up your custom_magic_items_index.js file or it will overwrite it with the default one from the 5eADB. Your other magic item files won't be deleted but, to be careful, be sure to back up or copy any of your custom magic items and the custom_magic_items_index somewhere safe before replacing your existing copy of the 5eADB with a new one.