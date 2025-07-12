# 5e Artisanal Database

The 5e Artisanal Database (5eADB) is a self-contained set of rules, datasets, tools, and generators for running 5e-based tabletop roleplaying games.

This project can run either on a private web server or locally in one's web browser. You can download the zip file for the project, double-click "index.html" in the root directory, and then navigate the 5eADB without a web server.

The 5eADB is a reward for patrons of Sly Flourish and built from their support. If you are not a patron and use this tool, please join here:

<https://www.patreon.com/c/slyflourish>

By joining the patreon, you'll support future updates of the 5eADB, support the rest of the work I do, and get access to a whole pile of other rewards!

## Using the 5eADB

The 5eADB can be used in four ways:

### Use the Copy Hosted at Sly Flourish

You can find the link to the current version of the 5e Artisanal Database on the Sly Flourish Patreon rewards page located at:

<https://www.patreon.com/posts/sly-flourish-34953933>

### Run it locally in your own desktop web browser

On a desktop or laptop computer, download the zip file and click on "index.html" in the top level directory of the 5eADB. It launches in your default web browser and you can access all features there just like you were navigating it on the web.

### Copy "md" directories to your Obsidian Vault

Navigate down the folder hierarchy under the root directory to find "md" directories for any given ruleset or dataset. Copy those md directories into your Obsidian vault directory to copy over all the markdown files for those sources. Rename them so you can see what they are in your vault. This lets you acces all of the resources offline.

### Host it on your own private web server

Copy the whole directory and all subdirectories to the web directory of your web server. There is no server-side code for the 5eADB – it's all HTML with some javascript and markdown files.

## Architecture

The 5eADB is a set of directories, HTML files, and Javascript. Each tool or source sits in a directory with an "index.html" file to run that particular tool. The homepage index.html file has links to each of the sources, datasets, tools, and generators.

**Sources** include markdown and HTML versions of four versions of 5e including the 5.1 SRD (D&D 2014), 5.2 SRD (D&D 2024), Level Up Advanced 5e, and Black Flag (Tales of the Valiant). Each source has a main directory and subdirectories containing the markdown and HTML versions of each of the sources along with individual licensing descriptions.

**Datasets** include markdown and HTML files for monsters, magic items, and spells. Top-level index.html files for these datasets use the [DataTables javascript library](https://datatables.net). They use their own local copy of these javascript libraries so the whole package remains self-contained. See "Adding Custom Monsters, Spells, and Magic Items" for information on adding your own custom content.

**Tools** include things like a dice roller, an encounter calculator, a combat tracker, a monster builder, a token maker, and a map annotator.

**Generators** include random generators for NPCs, items, monuments, locations, treasure, and more. They include links to items contained in the datasets. These generators use a syntax similar to perchance and can be modified to add other random elements without having to modify the javascript directly. See the generator template to build your own stand-alone generator.

**Search**. The search feature of this application uses [lunr.js](https://lunrjs.com). It has a pre-cached index loaded by the search page the first time it's loaded. The index is already pre-built so it loads fast once the index is downloaded. Like the rest of the site, the search feature executes in your local browser – either online or offline. The search page includes filters that update the URL so you can copy and share the URL to a specific search with specific filters. Add a &lucky=1 to the URL to have it jump to the first hit.

**Markdown and HTML files**. The whole 5eADB includes markdown and HTML files for sources and datasets. The directory structure separates HTML and markdown files into separate directories for each source so users can copy the markdown directory into another application like [Obsidian](https://obsidian.md). Each source and dataset page includes a link to show the markdown version of that page making it easy to copy and paste into a markdown application like Obsidian or Notion. When run locally, one needs to "view source" to see the formatted markdown version or all linebreaks are stripped out.

**Mobile Friendly**. This entire app has been built to work well on mobile platforms.

## Adding Custom Monsters, Spells, and Magic Items

You can add your own custom items to the three databases for monsters, spells, and magic items. Look for the /custom/ folder under monsters, magic_items, or spells. Each contains a README.md with details for adding your own material.

You'll want to be comfortable working with Markdown and with using a text editor to modify the configuration file. Knowing a little bit of javascript can help too.

Add custom content by:

- Copying, renaming, and editing one of the existing custom content javascript files.
- Editing the custom index javascript file with a text editor.
- Copying one of the existing sets of metadata in the custom index file, pasting it, and then editing it with the metadata for your new item.

Once complete, the monsters, magic items, and spell database pages automatically load the custom index javascript file with the added elements of data.

For monsters, the encounter calculator and combat tracker pull from the custom index file as well.

## Running Offline

The index page, the generators, and the tools are provisioned as a Progressive Web App. This means if you add the 5e Artisanal Database to your home screen on your phone, those pages will remain on your phone even offline. However, spells, monsters, magic items, and the search will not. They're too big to force into a progressive web app.

I recommend using [Obsidian](https://obsidian.md) for offline retrieval of spells, monsters, magic items, and rulesets. Add the markdown directories of monsters, magic items, spells, and rulesets you want to have offline to your Obsidian vault and if your vault is shared across platforms, you can access it on each platform even offline. See "Markdown and HTML files" above for details.

## Licensing

See the "licensing.html" file in the root directory for licensing information. Outside of lunr.js and datatables.js, all javascript code in this application is released under a [CC0 1.0 Universal license](https://creativecommons.org/publicdomain/zero/1.0/). You can copy, modify, and distribute the code for these tools, even for commercial purposes, all without asking permission. 

lunr.js and datatables.js are both released under MIT licenses as described in the licensing.html file.

Each set of content in the 5e Artisanal Database is licensed under its own license. See licensing.html for details.