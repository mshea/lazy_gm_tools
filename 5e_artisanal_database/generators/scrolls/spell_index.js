// Minimal spell index for scroll generation
// Only contains name, level, and source - much smaller than full spell data

const spellIndex = {
  "srd-2024": {
    "0": ["Acid Splash", "Blade Ward", "Chill Touch", "Dancing Lights", "Druidcraft", "Eldritch Blast", "Fire Bolt", "Guidance", "Light", "Mage Hand", "Mending", "Message", "Minor Illusion", "Poison Spray", "Prestidigitation", "Produce Flame", "Ray of Frost", "Resistance", "Sacred Flame", "Shillelagh", "Spare the Dying", "Thaumaturgy", "Thorn Whip", "True Strike", "Vicious Mockery"],
    "1": ["Absorb Elements", "Alarm", "Animal Friendship", "Armor of Agathys", "Arms of Hadar", "Bane", "Bless", "Burning Hands", "Charm Person", "Chromatic Orb", "Color Spray", "Command", "Comprehend Languages", "Create or Destroy Water", "Cure Wounds", "Detect Evil and Good", "Detect Magic", "Detect Poison and Disease", "Disguise Self", "Dissonant Whispers", "Divine Favor", "Entangle", "Expeditious Retreat", "Faerie Fire", "False Life", "Feather Fall", "Find Familiar", "Fog Cloud", "Goodberry", "Grease", "Guiding Bolt", "Healing Word", "Hellish Rebuke", "Hex", "Hunter's Mark", "Identify", "Inflict Wounds", "Jump", "Longstrider", "Mage Armor", "Magic Missile", "Protection from Evil and Good", "Purify Food and Drink", "Ray of Sickness", "Sanctuary", "Shield", "Shield of Faith", "Silent Image", "Sleep", "Speak with Animals", "Spiritual Weapon", "Thunderwave", "Unseen Servant", "Witch Bolt"],
    "2": ["Aid", "Animal Messenger", "Arcane Lock", "Augury", "Barkskin", "Beast Sense", "Blindness/Deafness", "Blur", "Calm Emotions", "Cloud of Daggers", "Continual Flame", "Crown of Madness", "Darkness", "Darkvision", "Detect Thoughts", "Enhance Ability", "Enlarge/Reduce", "Enthrall", "Find Steed", "Find Traps", "Flame Blade", "Flaming Sphere", "Gentle Repose", "Gust of Wind", "Heat Metal", "Hold Person", "Invisibility", "Knock", "Lesser Restoration", "Levitate", "Locate Animals or Plants", "Locate Object", "Magic Weapon", "Melf's Acid Arrow", "Mirror Image", "Misty Step", "Moonbeam", "Pass without Trace", "Prayer of Healing", "Protection from Poison", "Ray of Enfeeblement", "Rope Trick", "Scorching Ray", "See Invisibility", "Shatter", "Shield of Faith", "Silence", "Spider Climb", "Spike Growth", "Spiritual Weapon", "Suggestion", "Warding Bond", "Web", "Zone of Truth"],
    "3": ["Animate Dead", "Beacon of Hope", "Bestow Curse", "Blink", "Call Lightning", "Clairvoyance", "Conjure Animals", "Conjure Barrage", "Counterspell", "Create Food and Water", "Daylight", "Dispel Magic", "Fear", "Feign Death", "Fireball", "Fly", "Gaseous Form", "Glyph of Warding", "Haste", "Hunger of Hadar", "Hypnotic Pattern", "Lightning Bolt", "Magic Circle", "Major Image", "Mass Healing Word", "Meld into Stone", "Nondetection", "Plant Growth", "Protection from Energy", "Remove Curse", "Revivify", "Sending", "Sleet Storm", "Slow", "Speak with Dead", "Speak with Plants", "Spirit Guardians", "Stinking Cloud", "Tongues", "Vampiric Touch", "Water Breathing", "Water Walk", "Wind Wall"],
    "4": ["Arcane Eye", "Banishment", "Blight", "Charm Monster", "Compulsion", "Confusion", "Conjure Minor Elementals", "Conjure Woodland Beings", "Control Water", "Death Ward", "Dimension Door", "Divination", "Dominate Beast", "Fabricate", "Fire Shield", "Freedom of Movement", "Giant Insect", "Greater Invisibility", "Guardian of Faith", "Hallucinatory Terrain", "Ice Storm", "Locate Creature", "Polymorph", "Private Sanctum", "Resilient Sphere", "Secret Chest", "Stone Shape", "Stoneskin", "Wall of Fire"],
    "5": ["Animate Objects", "Antilife Shell", "Awaken", "Banishing Smite", "Bigby's Hand", "Circle of Power", "Cloudkill", "Commune", "Commune with Nature", "Cone of Cold", "Conjure Elemental", "Contagion", "Creation", "Destructive Wave", "Dispel Evil and Good", "Dominate Person", "Dream", "Flame Strike", "Geas", "Greater Restoration", "Hallow", "Hold Monster", "Insect Plague", "Legend Lore", "Mass Cure Wounds", "Mislead", "Modify Memory", "Passwall", "Planar Binding", "Raise Dead", "Reincarnate", "Scrying", "Seeming", "Telekinesis", "Teleportation Circle", "Tree Stride", "Wall of Force", "Wall of Stone"],
    "6": ["Arcane Gate", "Blade Barrier", "Chain Lightning", "Circle of Death", "Conjure Fey", "Contingency", "Create Undead", "Disintegrate", "Eyebite", "Find the Path", "Flesh to Stone", "Forbiddance", "Globe of Invulnerability", "Guards and Wards", "Harm", "Heal", "Heroes' Feast", "Magic Jar", "Mass Suggestion", "Move Earth", "Otto's Irresistible Dance", "Planar Ally", "Programmed Illusion", "Sunbeam", "Transport via Plants", "True Seeing", "Wall of Ice", "Wall of Thorns", "Wind Walk", "Word of Recall"],
    "7": ["Conjure Celestial", "Delayed Blast Fireball", "Divine Word", "Etherealness", "Finger of Death", "Fire Storm", "Forcecage", "Mirage Arcane", "Mordenkainen's Magnificent Mansion", "Plane Shift", "Prismatic Spray", "Project Image", "Regenerate", "Resurrection", "Reverse Gravity", "Sequester", "Simulacrum", "Symbol", "Teleport"],
    "8": ["Antimagic Field", "Antipathy/Sympathy", "Clone", "Control Weather", "Demiplane", "Dominate Monster", "Earthquake", "Feeblemind", "Holy Aura", "Incendiary Cloud", "Maze", "Mind Blank", "Power Word Stun", "Sunburst"],
    "9": ["Astral Projection", "Foresight", "Gate", "Imprisonment", "Mass Heal", "Meteor Swarm", "Power Word Kill", "Prismatic Wall", "Shapechange", "Storm of Vengeance", "Time Stop", "True Polymorph", "True Resurrection", "Weird", "Wish"]
  },
  "wotc-srd": {
    "0": ["Acid Splash", "Blade Ward", "Chill Touch", "Dancing Lights", "Druidcraft", "Eldritch Blast", "Fire Bolt", "Guidance", "Light", "Mage Hand", "Mending", "Message", "Minor Illusion", "Poison Spray", "Prestidigitation", "Produce Flame", "Ray of Frost", "Resistance", "Sacred Flame", "Shillelagh", "Spare the Dying", "Thaumaturgy", "Thorn Whip", "True Strike", "Vicious Mockery"],
    "1": ["Alarm", "Animal Friendship", "Armor of Agathys", "Arms of Hadar", "Bane", "Bless", "Burning Hands", "Charm Person", "Chromatic Orb", "Color Spray", "Command", "Comprehend Languages", "Create or Destroy Water", "Cure Wounds", "Detect Evil and Good", "Detect Magic", "Detect Poison and Disease", "Disguise Self", "Dissonant Whispers", "Divine Favor", "Entangle", "Expeditious Retreat", "Faerie Fire", "False Life", "Feather Fall", "Find Familiar", "Fog Cloud", "Goodberry", "Grease", "Guiding Bolt", "Healing Word", "Hellish Rebuke", "Hex", "Hunter's Mark", "Identify", "Inflict Wounds", "Jump", "Longstrider", "Mage Armor", "Magic Missile", "Protection from Evil and Good", "Purify Food and Drink", "Ray of Sickness", "Sanctuary", "Shield", "Shield of Faith", "Silent Image", "Sleep", "Speak with Animals", "Thunderwave", "Unseen Servant", "Witch Bolt"],
    "2": ["Aid", "Animal Messenger", "Arcane Lock", "Augury", "Barkskin", "Beast Sense", "Blindness/Deafness", "Blur", "Calm Emotions", "Cloud of Daggers", "Continual Flame", "Crown of Madness", "Darkness", "Darkvision", "Detect Thoughts", "Enhance Ability", "Enlarge/Reduce", "Enthrall", "Find Steed", "Find Traps", "Flame Blade", "Flaming Sphere", "Gentle Repose", "Gust of Wind", "Heat Metal", "Hold Person", "Invisibility", "Knock", "Lesser Restoration", "Levitate", "Locate Animals or Plants", "Locate Object", "Magic Weapon", "Melf's Acid Arrow", "Mirror Image", "Misty Step", "Moonbeam", "Pass without Trace", "Prayer of Healing", "Protection from Poison", "Ray of Enfeeblement", "Rope Trick", "Scorching Ray", "See Invisibility", "Shatter", "Silence", "Spider Climb", "Spike Growth", "Spiritual Weapon", "Suggestion", "Warding Bond", "Web", "Zone of Truth"],
    "3": ["Animate Dead", "Beacon of Hope", "Bestow Curse", "Blink", "Call Lightning", "Clairvoyance", "Conjure Animals", "Conjure Barrage", "Counterspell", "Create Food and Water", "Daylight", "Dispel Magic", "Fear", "Feign Death", "Fireball", "Fly", "Gaseous Form", "Glyph of Warding", "Haste", "Hunger of Hadar", "Hypnotic Pattern", "Lightning Bolt", "Magic Circle", "Major Image", "Mass Healing Word", "Meld into Stone", "Nondetection", "Plant Growth", "Protection from Energy", "Remove Curse", "Revivify", "Sending", "Sleet Storm", "Slow", "Speak with Dead", "Speak with Plants", "Spirit Guardians", "Stinking Cloud", "Tongues", "Vampiric Touch", "Water Breathing", "Water Walk", "Wind Wall"],
    "4": ["Arcane Eye", "Banishment", "Blight", "Charm Monster", "Compulsion", "Confusion", "Conjure Minor Elementals", "Conjure Woodland Beings", "Control Water", "Death Ward", "Dimension Door", "Divination", "Dominate Beast", "Fabricate", "Fire Shield", "Freedom of Movement", "Giant Insect", "Greater Invisibility", "Guardian of Faith", "Hallucinatory Terrain", "Ice Storm", "Locate Creature", "Polymorph", "Private Sanctum", "Resilient Sphere", "Secret Chest", "Stone Shape", "Stoneskin", "Wall of Fire"],
    "5": ["Animate Objects", "Antilife Shell", "Awaken", "Banishing Smite", "Bigby's Hand", "Circle of Power", "Cloudkill", "Commune", "Commune with Nature", "Cone of Cold", "Conjure Elemental", "Contagion", "Creation", "Destructive Wave", "Dispel Evil and Good", "Dominate Person", "Dream", "Flame Strike", "Geas", "Greater Restoration", "Hallow", "Hold Monster", "Insect Plague", "Legend Lore", "Mass Cure Wounds", "Mislead", "Modify Memory", "Passwall", "Planar Binding", "Raise Dead", "Reincarnate", "Scrying", "Seeming", "Telekinesis", "Teleportation Circle", "Tree Stride", "Wall of Force", "Wall of Stone"],
    "6": ["Arcane Gate", "Blade Barrier", "Chain Lightning", "Circle of Death", "Conjure Fey", "Contingency", "Create Undead", "Disintegrate", "Eyebite", "Find the Path", "Flesh to Stone", "Forbiddance", "Globe of Invulnerability", "Guards and Wards", "Harm", "Heal", "Heroes' Feast", "Magic Jar", "Mass Suggestion", "Move Earth", "Otto's Irresistible Dance", "Planar Ally", "Programmed Illusion", "Sunbeam", "Transport via Plants", "True Seeing", "Wall of Ice", "Wall of Thorns", "Wind Walk", "Word of Recall"],
    "7": ["Conjure Celestial", "Delayed Blast Fireball", "Divine Word", "Etherealness", "Finger of Death", "Fire Storm", "Forcecage", "Mirage Arcane", "Mordenkainen's Magnificent Mansion", "Plane Shift", "Prismatic Spray", "Project Image", "Regenerate", "Resurrection", "Reverse Gravity", "Sequester", "Simulacrum", "Symbol", "Teleport"],
    "8": ["Antimagic Field", "Antipathy/Sympathy", "Clone", "Control Weather", "Demiplane", "Dominate Monster", "Earthquake", "Feeblemind", "Holy Aura", "Incendiary Cloud", "Maze", "Mind Blank", "Power Word Stun", "Sunburst"],
    "9": ["Astral Projection", "Foresight", "Gate", "Imprisonment", "Mass Heal", "Meteor Swarm", "Power Word Kill", "Prismatic Wall", "Shapechange", "Storm of Vengeance", "Time Stop", "True Polymorph", "True Resurrection", "Weird", "Wish"]
  },
  "dmag": {
    "0": ["Arcane Weapon", "Blade Ward", "Bless Weapon", "Eldritch Blast", "Force Punch", "Mending", "Poison Spray", "Shadow Bite", "True Strike"],
    "1": ["Chaos Bolt", "Detect Evil and Good", "False Life", "Hex", "Hunter's Mark", "Magic Weapon", "Shield", "Unseen Servant"],
    "2": ["Darkness", "Detect Thoughts", "Enlarge/Reduce", "Hold Person", "See Invisibility", "Web"],
    "3": ["Animate Dead", "Bestow Curse", "Fear", "Gaseous Form", "Slow"],
    "4": ["Confusion", "Greater Invisibility", "Hallucinatory Terrain", "Polymorph"],
    "5": ["Cloudkill", "Cone of Cold", "Hold Monster", "Scrying"],
    "6": ["Chain Lightning", "Circle of Death", "Disintegrate", "Eyebite"],
    "7": ["Finger of Death", "Plane Shift", "Prismatic Spray"],
    "8": ["Feeblemind", "Mind Blank", "Power Word Stun"],
    "9": ["Gate", "Power Word Kill", "Wish"]
  },
  "a5e": {
    "0": ["Guidance", "Resistance", "Spare the Dying", "Thaumaturgy", "Druidcraft"],
    "1": ["Bless", "Command", "Sanctuary", "Divine Favor", "Purify Food and Drink"],
    "2": ["Aid", "Augury", "Calm Emotions", "Enhance Ability", "Lesser Restoration"],
    "3": ["Beacon of Hope", "Create Food and Water", "Daylight", "Protection from Energy", "Remove Curse"],
    "4": ["Death Ward", "Guardian of Faith", "Locate Creature", "Stone Shape"],
    "5": ["Circle of Power", "Flame Strike", "Greater Restoration", "Mass Cure Wounds"],
    "6": ["Forbiddance", "Harm", "Heal", "Word of Recall"],
    "7": ["Divine Word", "Fire Storm", "Regenerate", "Resurrection"],
    "8": ["Antimagic Field", "Holy Aura"],
    "9": ["Gate", "Mass Heal", "True Resurrection"]
  }
};

// Source mapping and other data stays the same
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

const rarityToLevels = {
    "common": ["0", "1"],
    "uncommon": ["2", "3"],
    "rare": ["4", "5"],
    "very-rare": ["6", "7", "8"],
    "legendary": ["9"],
    "any": ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
};

function spellNameToUrl(spellName) {
    return spellName
        .toLowerCase()
        .replace(/'/g, '')
        .replace(/\//g, '')
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '');
}

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

function getSpellsFromSource(source, level) {
    if (!spellIndex[source] || !spellIndex[source][level]) {
        return [];
    }
    return spellIndex[source][level];
}