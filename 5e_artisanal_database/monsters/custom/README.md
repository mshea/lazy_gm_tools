# Custom Monster Support

You can add your own custom monsters in this folder in the 5eADB. To do so, you'll want to be comfortable working with markdown files and comfortable editing configuration files with a text editor.

Because the 5eADB runs without a web server, it cannot load markdown files locally. Thus, everything is a javascript ".js" file, including the monster files.

To add a custom monster:

- Copy one of the existing monster files like "champion.js" and give it a new name. Remember this name so you can add it to the index.

- Add your own monster markdown between the first and last line of the file. Preserve the " window.monsterMarkdown = \`" on the first line and the "\`;" on the last line. If these aren't there, it won't load your stat block.

- Update the "custom_monster_index.js" file in this directory. Copy one of the existing records and be sure to include all the fields for your new monster. This index is what loads the monster in the main monster index table, the encounter calculator, and the combat tracker. Make sure your record has a "}," at the end. Javascript doesn't like missing commas.



