// Common spell generator utilities and data
// Used by scroll and relic generators

// Spell scroll statistics by level
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

// Rarity to spell level mapping
const rarityToLevels = {
    "common": ["0", "1"],
    "uncommon": ["2", "3"],
    "rare": ["4", "5"],
    "very-rare": ["6", "7", "8"],
    "legendary": ["9"],
    "any": ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
};

// Source to spell path mapping
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

// Get spells from a specific source and level
function getSpellsFromSource(source, level) {
    if (!spellIndex[source] || !spellIndex[source][level]) {
        return [];
    }
    return spellIndex[source][level];
}

// Helper function to convert spell name to URL format
function spellNameToUrl(spellName) {
    return spellName
        .toLowerCase()
        .replace(/'/g, '')
        .replace(/\//g, '')
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '');
}

// Generate spell link
function getSpellLink(spellName, source) {
    let urlName = spellNameToUrl(spellName);
    
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

// Common utility functions
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function formatPrice(price) {
    return price.toLocaleString() + " GP";
}

function getOrdinalSuffix(num) {
    const j = num % 10;
    const k = num % 100;
    if (j == 1 && k != 11) return "st";
    if (j == 2 && k != 12) return "nd";
    if (j == 3 && k != 13) return "rd";
    return "th";
}