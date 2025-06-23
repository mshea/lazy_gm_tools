// Multi-source spell data for scroll generation
// This will be populated by loading and parsing spells.json

let spellsBySourceAndLevel = {};
let sourceInfo = {};

// Source mapping from document__slug to directory and display name
const sourceMapping = {
    "wotc-srd": {
        directory: "5.1_srd_(d&d_2014)",
        displayName: "D&D 2014 (5.1 SRD)"
    },
    "srd-2024": {
        directory: "5.2_srd_(d&d_2024)", 
        displayName: "D&D 2024 (5.2 SRD)"
    },
    "dmag": {
        directory: "deep_magic_5e",
        displayName: "Deep Magic 5e"
    },
    "a5e": {
        directory: "level_up_advanced_5e",
        displayName: "Level Up Advanced 5e"
    }
};

// Spell level to rarity/DC/attack mapping (unchanged)
const scrollStats = {
    "0": { rarity: "Common", dc: 13, attack: 5, price: 30 },
    "1": { rarity: "Common", dc: 13, attack: 5, price: 50 },
    "2": { rarity: "Uncommon", dc: 13, attack: 5, price: 200 },
    "3": { rarity: "Uncommon", dc: 15, attack: 7, price: 300 },
    "4": { rarity: "Rare", dc: 15, attack: 7, price: 2000 },
    "5": { rarity: "Rare", dc: 17, attack: 9, price: 3000 },
    "6": { rarity: "Very Rare", dc: 17, attack: 9, price: 20000 },
    "7": { rarity: "Very Rare", dc: 18, attack: 10, price: 25000 },
    "8": { rarity: "Very Rare", dc: 18, attack: 10, price: 30000 },
    "9": { rarity: "Legendary", dc: 19, attack: 11, price: 100000 }
};

// Rarity to spell levels mapping
const rarityToLevels = {
    "common": ["0", "1"],
    "uncommon": ["2", "3"],
    "rare": ["4", "5"],
    "very-rare": ["6", "7", "8"],
    "legendary": ["9"],
    "any": ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
};

// Function to convert spell name to URL-friendly format
function spellNameToUrl(spellName) {
    return spellName
        .toLowerCase()
        .replace(/'/g, '') // Remove apostrophes
        .replace(/\//g, '') // Remove slashes
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/[^a-z0-9-]/g, ''); // Remove any other special characters
}

// Function to get spell link based on source
function getSpellLink(spellName, source) {
    let urlName = spellNameToUrl(spellName);
    
    // Add source-specific suffixes
    if (source === 'a5e') {
        urlName += '-a5e';
    }
    
    const sourceData = sourceMapping[source];
    if (!sourceData) {
        console.warn(`Unknown source: ${source}`);
        return '#';
    }
    return `../../spells/html/${sourceData.directory}/${urlName}.html`;
}

// Function to load and parse spells from included JavaScript data
function loadSpellData() {
    try {
        console.log('Loading spell data from included JavaScript...');
        
        // Check if spellsData is available (loaded from spells_data.js)
        if (typeof spellsData === 'undefined') {
            throw new Error('Spell data not loaded. Make sure spells_data.js is included.');
        }
        
        console.log('Spells data loaded, count:', spellsData.length);
        
        // Initialize the data structure
        spellsBySourceAndLevel = {};
        
        // Process each spell
        spellsData.forEach(spell => {
            const source = spell.document__slug;
            const level = spell.level_int.toString();
            const name = spell.name;
            
            // Skip if we don't support this source
            if (!sourceMapping[source]) {
                return;
            }
            
            // Initialize source if needed
            if (!spellsBySourceAndLevel[source]) {
                spellsBySourceAndLevel[source] = {};
            }
            
            // Initialize level if needed
            if (!spellsBySourceAndLevel[source][level]) {
                spellsBySourceAndLevel[source][level] = [];
            }
            
            // Add spell to the appropriate source/level
            spellsBySourceAndLevel[source][level].push(name);
        });
        
        console.log('Spell data loaded successfully');
        return true;
        
    } catch (error) {
        console.error('Failed to load spell data:', error);
        console.log('Falling back to embedded spell data...');
        
        // Fallback to embedded basic spell data
        return loadFallbackSpellData();
    }
}

// Fallback spell data when fetch fails (e.g., local file access)
function loadFallbackSpellData() {
    // Basic spell set for each source - this could be expanded
    const fallbackSpells = {
        "srd-2024": {
            "0": ["Acid Splash", "Chill Touch", "Dancing Lights", "Fire Bolt", "Light", "Mage Hand", "Minor Illusion", "Prestidigitation", "Ray of Frost", "Sacred Flame"],
            "1": ["Cure Wounds", "Magic Missile", "Shield", "Healing Word", "Detect Magic", "Charm Person", "Sleep", "Thunderwave", "Burning Hands", "Faerie Fire"],
            "2": ["Scorching Ray", "Misty Step", "Web", "Hold Person", "Invisibility", "Acid Arrow", "Mirror Image", "Suggestion", "Heat Metal", "Spiritual Weapon"],
            "3": ["Fireball", "Lightning Bolt", "Counterspell", "Dispel Magic", "Fly", "Haste", "Hypnotic Pattern", "Spirit Guardians", "Mass Healing Word", "Revivify"],
            "4": ["Polymorph", "Greater Invisibility", "Wall of Fire", "Ice Storm", "Dimension Door", "Banishment", "Death Ward", "Guardian of Faith", "Stoneskin", "Confusion"],
            "5": ["Cone of Cold", "Fireball", "Hold Monster", "Scrying", "Telekinesis", "Wall of Force", "Mass Cure Wounds", "Raise Dead", "Flame Strike", "Insect Plague"],
            "6": ["Disintegrate", "Chain Lightning", "Heal", "Harm", "True Seeing", "Circle of Death", "Mass Suggestion", "Sunbeam", "Wall of Ice", "Find the Path"],
            "7": ["Finger of Death", "Plane Shift", "Teleport", "Prismatic Spray", "Resurrection", "Fire Storm", "Divine Word", "Reverse Gravity", "Project Image", "Forcecage"],
            "8": ["Power Word Stun", "Sunburst", "Earthquake", "Feeblemind", "Mind Blank", "Clone", "Maze", "Incendiary Cloud", "Control Weather", "Dominate Monster"],
            "9": ["Wish", "Meteor Swarm", "Time Stop", "Gate", "Power Word Kill", "True Polymorph", "Mass Heal", "Prismatic Wall", "Shapechange", "Storm of Vengeance"]
        },
        "wotc-srd": {
            "0": ["Acid Splash", "Chill Touch", "Dancing Lights", "Fire Bolt", "Light", "Mage Hand", "Minor Illusion", "Prestidigitation", "Ray of Frost", "Sacred Flame"],
            "1": ["Cure Wounds", "Magic Missile", "Shield", "Healing Word", "Detect Magic", "Charm Person", "Sleep", "Thunderwave", "Burning Hands", "Faerie Fire"],
            "2": ["Scorching Ray", "Misty Step", "Web", "Hold Person", "Invisibility", "Acid Arrow", "Mirror Image", "Suggestion", "Heat Metal", "Spiritual Weapon"],
            "3": ["Fireball", "Lightning Bolt", "Counterspell", "Dispel Magic", "Fly", "Haste", "Hypnotic Pattern", "Spirit Guardians", "Mass Healing Word", "Revivify"]
        },
        "dmag": {
            "0": ["Blade Ward", "Eldritch Blast", "Mending", "Poison Spray", "True Strike"],
            "1": ["Chaos Bolt", "Detect Evil and Good", "False Life", "Hex", "Hunter's Mark"],
            "2": ["Darkness", "Detect Thoughts", "Enlarge/Reduce", "Hold Person", "See Invisibility"],
            "3": ["Animate Dead", "Bestow Curse", "Fear", "Gaseous Form", "Slow"]
        },
        "a5e": {
            "0": ["Guidance", "Resistance", "Spare the Dying", "Thaumaturgy", "Druidcraft"],
            "1": ["Bless", "Command", "Sanctuary", "Divine Favor", "Purify Food and Drink"],
            "2": ["Aid", "Augury", "Calm Emotions", "Enhance Ability", "Lesser Restoration"],
            "3": ["Beacon of Hope", "Create Food and Water", "Daylight", "Protection from Energy", "Remove Curse"]
        }
    };
    
    spellsBySourceAndLevel = fallbackSpells;
    
    console.log('Fallback spell data loaded successfully');
    return true;
}

// Get all spells from a source at a specific level
function getSpellsFromSource(source, level) {
    if (!spellsBySourceAndLevel[source] || !spellsBySourceAndLevel[source][level]) {
        return [];
    }
    return spellsBySourceAndLevel[source][level];
}

// Get all spells from all sources at a specific level
function getAllSpellsAtLevel(level) {
    const allSpells = [];
    Object.keys(spellsBySourceAndLevel).forEach(source => {
        if (spellsBySourceAndLevel[source][level]) {
            spellsBySourceAndLevel[source][level].forEach(spell => {
                allSpells.push({ name: spell, source: source });
            });
        }
    });
    return allSpells;
}

