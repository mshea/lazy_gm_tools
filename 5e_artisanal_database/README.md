# 5e Artisanal Database Download

The 5e Artisanal Database (5eADB) is a self-contained set of rules, datasets, tools, and generators for running 5e-based tabletop roleplaying games.

This project is intended to run either on a private web server or locally in one's web browser without having to host it. One can download the zip file for the project, double-click "index.html" in the root directory, and then navigate the 5eADB just like they could on a web server.

Please note, the 5eADB is a reward for patrons of Sly Flourish. If you are not a patron, please join up here:

<https://www.patreon.com/c/slyflourish>

By joining the patreon, you'll support future updates of the 5eADB, support the rest of the work I do, and get access to a whole pile of other rewards!

## Using the 5eADB

The 5eADB can be used in four ways:

### Use the Copy Hosted at Sly Flourish

You can find the link to the current version of the 5e Artisanal Database on the Sly Flourish Patreon rewards page located at:

<https://www.patreon.com/posts/sly-flourish-34953933>

### Run it locally in your own web browser

Click on "index.html" in the top level directory of the 5eADB. It should launch in your default web browser and you can access all features there just like you were navigating it on the web.

### Copy "md" directories to your Obsidian Vault

Navigate down the folders under the root directory to find "md" directories for any given ruleset or dataset. Copy those md directories to your Obsidian vault directory to copy over all the markdown files for those sources. Rename them so you can see what they are in your vault.

### Host it on your own private web server

Copy the whole directory and all subdirectories to the directory you use to host HTML files. There is no server-side code for the 5eADB – it's all HTML with some javascript and markdown files.

### Licensing

See the "licensing.html" file in the root directory for licensing information.

### Architecture

The 5eADB is a set of directories, HTML files, and some Javascript. Each tool or source sits in a directory with an "index.html" file to run that particular tool. The homepage index.html file has links to each of the sources, datasets, tools, and generators.

**Sources** include markdown and HTML versions of four versions of 5e including the 5.1 SRD (D&D 2014), 5.2 SRD (D&D 2024), Level Up Advanced 5e, and Black Flag (Tales of the Valiant). Each source has a main directory and subdirectories containing the markdown and HTML versions of each of the sources along with individual licensing descriptions.

**Datasets** include markdown and HTML files for monsters, magic items, and spells. Top-level index.html files for these datasets use the [DataTables javascript library](https://datatables.net). They use their own local copy of these libraries so the whole package remains self-contained.

**Tools** include things like a dice roller, the Forge of Foes monster builder, and a stand-alone token maker. Each of these are self-contained HTML files with embedded javascript and don't connect to any other portion of the 5eADB.

**Generators** include random generators for NPCs, items, monuments, locations, treasure, and more. They include links to items contained in the datasets. Each includes embedded Javascript inside HTML and either an embedded or external data file. These generators use a syntax similar to perchance and can be modified to add other random elements without having to modify the javascript directly. Like the rest of this application, these generators are self-contained and can run locally or remotely.

**Markdown and HTML files**. The whole 5eADB includes markdown and HTML files for sources and datasets. The directory structure separates HTML and markdown files into separate directories for each source so users can copy the markdown directory into another application like [Obsidian](https://obsidian.md). Each source and dataset page includes a link to show the markdown version of that page making it easy to copy and paste into a markdown application like Obsidian or Notion. When run locally, one needs to "view source" to see the formatted markdown version or all linebreaks are stripped out.

**Mobile Friendly**. This entire app has been built to work well on small devices like mobile phones. It should work well on both big and small screens.

