const spells = [
  {
    "name": "Acid Arrow",
    "slug": "acid-arrow",
    "level_int": 2,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Acid Splash",
    "slug": "acid-splash",
    "level_int": 0,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Alarm",
    "slug": "alarm",
    "level_int": 1,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Alter Self",
    "slug": "alter-self",
    "level_int": 2,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Animate Dead",
    "slug": "animate-dead",
    "level_int": 3,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Animate Objects",
    "slug": "animate-objects",
    "level_int": 5,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Antimagic Field",
    "slug": "antimagic-field",
    "level_int": 8,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Antipathy/Sympathy",
    "slug": "antipathysympathy",
    "level_int": 8,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Arcane Eye",
    "slug": "arcane-eye",
    "level_int": 4,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Arcane Hand",
    "slug": "arcane-hand",
    "level_int": 5,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Arcane Lock",
    "slug": "arcane-lock",
    "level_int": 2,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Arcane Sword",
    "slug": "arcane-sword",
    "level_int": 7,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Arcanist's Magic Aura",
    "slug": "arcanists-magic-aura",
    "level_int": 2,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Astral Projection",
    "slug": "astral-projection",
    "level_int": 9,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Banishment",
    "slug": "banishment",
    "level_int": 4,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Bestow Curse",
    "slug": "bestow-curse",
    "level_int": 3,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Black Tentacles",
    "slug": "black-tentacles",
    "level_int": 4,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Blight",
    "slug": "blight",
    "level_int": 4,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Blindness/Deafness",
    "slug": "blindnessdeafness",
    "level_int": 2,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Blink",
    "slug": "blink",
    "level_int": 3,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Blur",
    "slug": "blur",
    "level_int": 2,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Burning Hands",
    "slug": "burning-hands",
    "level_int": 1,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Chain Lightning",
    "slug": "chain-lightning",
    "level_int": 6,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Charm Person",
    "slug": "charm-person",
    "level_int": 1,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Chill Touch",
    "slug": "chill-touch",
    "level_int": 0,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Circle of Death",
    "slug": "circle-of-death",
    "level_int": 6,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Clairvoyance",
    "slug": "clairvoyance",
    "level_int": 3,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Clone",
    "slug": "clone",
    "level_int": 8,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Cloudkill",
    "slug": "cloudkill",
    "level_int": 5,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Color Spray",
    "slug": "color-spray",
    "level_int": 1,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Comprehend Languages",
    "slug": "comprehend-languages",
    "level_int": 1,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Cone of Cold",
    "slug": "cone-of-cold",
    "level_int": 5,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Confusion",
    "slug": "confusion",
    "level_int": 4,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Conjure Elemental",
    "slug": "conjure-elemental",
    "level_int": 5,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Conjure Minor Elementals",
    "slug": "conjure-minor-elementals",
    "level_int": 4,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Contact Other Plane",
    "slug": "contact-other-plane",
    "level_int": 5,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Contingency",
    "slug": "contingency",
    "level_int": 6,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Continual Flame",
    "slug": "continual-flame",
    "level_int": 2,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Control Water",
    "slug": "control-water",
    "level_int": 4,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Control Weather",
    "slug": "control-weather",
    "level_int": 8,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Counterspell",
    "slug": "counterspell",
    "level_int": 3,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Create Undead",
    "slug": "create-undead",
    "level_int": 6,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Creation",
    "slug": "creation",
    "level_int": 5,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Dancing Lights",
    "slug": "dancing-lights",
    "level_int": 0,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Darkness",
    "slug": "darkness",
    "level_int": 2,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Darkvision",
    "slug": "darkvision",
    "level_int": 2,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Delayed Blast Fireball",
    "slug": "delayed-blast-fireball",
    "level_int": 7,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Demiplane",
    "slug": "demiplane",
    "level_int": 8,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Detect Magic",
    "slug": "detect-magic",
    "level_int": 1,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Detect Thoughts",
    "slug": "detect-thoughts",
    "level_int": 2,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Dimension Door",
    "slug": "dimension-door",
    "level_int": 4,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Disguise Self",
    "slug": "disguise-self",
    "level_int": 1,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Disintegrate",
    "slug": "disintegrate",
    "level_int": 6,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Dispel Magic",
    "slug": "dispel-magic",
    "level_int": 3,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Dominate Monster",
    "slug": "dominate-monster",
    "level_int": 8,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Dominate Person",
    "slug": "dominate-person",
    "level_int": 5,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Dream",
    "slug": "dream",
    "level_int": 5,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Enlarge/Reduce",
    "slug": "enlargereduce",
    "level_int": 2,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Etherealness",
    "slug": "etherealness",
    "level_int": 7,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Expeditious Retreat",
    "slug": "expeditious-retreat",
    "level_int": 1,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Eyebite",
    "slug": "eyebite",
    "level_int": 6,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Fabricate",
    "slug": "fabricate",
    "level_int": 4,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Faithful Hound",
    "slug": "faithful-hound",
    "level_int": 4,
    "document__slug": "wotc-srd"
  },
  {
    "name": "False Life",
    "slug": "false-life",
    "level_int": 1,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Fear",
    "slug": "fear",
    "level_int": 3,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Feather Fall",
    "slug": "feather-fall",
    "level_int": 1,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Feeblemind",
    "slug": "feeblemind",
    "level_int": 8,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Find Familiar",
    "slug": "find-familiar",
    "level_int": 1,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Finger of Death",
    "slug": "finger-of-death",
    "level_int": 7,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Fire Bolt",
    "slug": "fire-bolt",
    "level_int": 0,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Fire Shield",
    "slug": "fire-shield",
    "level_int": 4,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Fireball",
    "slug": "fireball",
    "level_int": 3,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Flaming Sphere",
    "slug": "flaming-sphere",
    "level_int": 2,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Flesh to Stone",
    "slug": "flesh-to-stone",
    "level_int": 6,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Floating Disk",
    "slug": "floating-disk",
    "level_int": 1,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Fly",
    "slug": "fly",
    "level_int": 3,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Fog Cloud",
    "slug": "fog-cloud",
    "level_int": 1,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Forcecage",
    "slug": "forcecage",
    "level_int": 7,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Foresight",
    "slug": "foresight",
    "level_int": 9,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Freezing Sphere",
    "slug": "freezing-sphere",
    "level_int": 6,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Gaseous Form",
    "slug": "gaseous-form",
    "level_int": 3,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Gate",
    "slug": "gate",
    "level_int": 9,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Geas",
    "slug": "geas",
    "level_int": 5,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Gentle Repose",
    "slug": "gentle-repose",
    "level_int": 2,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Globe of Invulnerability",
    "slug": "globe-of-invulnerability",
    "level_int": 6,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Glyph of Warding",
    "slug": "glyph-of-warding",
    "level_int": 3,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Grease",
    "slug": "grease",
    "level_int": 1,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Greater Invisibility",
    "slug": "greater-invisibility",
    "level_int": 4,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Guards and Wards",
    "slug": "guards-and-wards",
    "level_int": 6,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Gust of Wind",
    "slug": "gust-of-wind",
    "level_int": 2,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Hallucinatory Terrain",
    "slug": "hallucinatory-terrain",
    "level_int": 4,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Haste",
    "slug": "haste",
    "level_int": 3,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Hideous Laughter",
    "slug": "hideous-laughter",
    "level_int": 1,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Hold Monster",
    "slug": "hold-monster",
    "level_int": 5,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Hold Person",
    "slug": "hold-person",
    "level_int": 2,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Hypnotic Pattern",
    "slug": "hypnotic-pattern",
    "level_int": 3,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Ice Storm",
    "slug": "ice-storm",
    "level_int": 4,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Identify",
    "slug": "identify",
    "level_int": 1,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Illusory Script",
    "slug": "illusory-script",
    "level_int": 1,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Imprisonment",
    "slug": "imprisonment",
    "level_int": 9,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Incendiary Cloud",
    "slug": "incendiary-cloud",
    "level_int": 8,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Instant Summons",
    "slug": "instant-summons",
    "level_int": 6,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Invisibility",
    "slug": "invisibility",
    "level_int": 2,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Irresistible Dance",
    "slug": "irresistible-dance",
    "level_int": 6,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Jump",
    "slug": "jump",
    "level_int": 1,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Knock",
    "slug": "knock",
    "level_int": 2,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Legend Lore",
    "slug": "legend-lore",
    "level_int": 5,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Levitate",
    "slug": "levitate",
    "level_int": 2,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Light",
    "slug": "light",
    "level_int": 0,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Lightning Bolt",
    "slug": "lightning-bolt",
    "level_int": 3,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Locate Creature",
    "slug": "locate-creature",
    "level_int": 4,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Locate Object",
    "slug": "locate-object",
    "level_int": 2,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Longstrider",
    "slug": "longstrider",
    "level_int": 1,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Mage Armor",
    "slug": "mage-armor",
    "level_int": 1,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Mage Hand",
    "slug": "mage-hand",
    "level_int": 0,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Magic Circle",
    "slug": "magic-circle",
    "level_int": 3,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Magic Jar",
    "slug": "magic-jar",
    "level_int": 6,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Magic Missile",
    "slug": "magic-missile",
    "level_int": 1,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Magic Mouth",
    "slug": "magic-mouth",
    "level_int": 2,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Magic Weapon",
    "slug": "magic-weapon",
    "level_int": 2,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Magnificent Mansion",
    "slug": "magnificent-mansion",
    "level_int": 7,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Major Image",
    "slug": "major-image",
    "level_int": 3,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Mass Suggestion",
    "slug": "mass-suggestion",
    "level_int": 6,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Maze",
    "slug": "maze",
    "level_int": 8,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Mending",
    "slug": "mending",
    "level_int": 0,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Message",
    "slug": "message",
    "level_int": 0,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Meteor Swarm",
    "slug": "meteor-swarm",
    "level_int": 9,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Mind Blank",
    "slug": "mind-blank",
    "level_int": 8,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Minor Illusion",
    "slug": "minor-illusion",
    "level_int": 0,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Mirage Arcane",
    "slug": "mirage-arcane",
    "level_int": 7,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Mirror Image",
    "slug": "mirror-image",
    "level_int": 2,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Mislead",
    "slug": "mislead",
    "level_int": 5,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Misty Step",
    "slug": "misty-step",
    "level_int": 2,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Modify Memory",
    "slug": "modify-memory",
    "level_int": 5,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Move Earth",
    "slug": "move-earth",
    "level_int": 6,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Nondetection",
    "slug": "nondetection",
    "level_int": 3,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Passwall",
    "slug": "passwall",
    "level_int": 5,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Phantasmal Killer",
    "slug": "phantasmal-killer",
    "level_int": 4,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Phantom Steed",
    "slug": "phantom-steed",
    "level_int": 3,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Planar Binding",
    "slug": "planar-binding",
    "level_int": 5,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Plane Shift",
    "slug": "plane-shift",
    "level_int": 7,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Poison Spray",
    "slug": "poison-spray",
    "level_int": 0,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Polymorph",
    "slug": "polymorph",
    "level_int": 4,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Power Word Kill",
    "slug": "power-word-kill",
    "level_int": 9,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Power Word Stun",
    "slug": "power-word-stun",
    "level_int": 8,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Prestidigitation",
    "slug": "prestidigitation",
    "level_int": 0,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Prismatic Spray",
    "slug": "prismatic-spray",
    "level_int": 7,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Prismatic Wall",
    "slug": "prismatic-wall",
    "level_int": 9,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Private Sanctum",
    "slug": "private-sanctum",
    "level_int": 4,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Programmed Illusion",
    "slug": "programmed-illusion",
    "level_int": 6,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Project Image",
    "slug": "project-image",
    "level_int": 7,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Protection from Energy",
    "slug": "protection-from-energy",
    "level_int": 3,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Protection from Evil and Good",
    "slug": "protection-from-evil-and-good",
    "level_int": 1,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Ray of Enfeeblement",
    "slug": "ray-of-enfeeblement",
    "level_int": 2,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Ray of Frost",
    "slug": "ray-of-frost",
    "level_int": 0,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Remove Curse",
    "slug": "remove-curse",
    "level_int": 3,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Resilient Sphere",
    "slug": "resilient-sphere",
    "level_int": 4,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Reverse Gravity",
    "slug": "reverse-gravity",
    "level_int": 7,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Rope Trick",
    "slug": "rope-trick",
    "level_int": 2,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Scorching Ray",
    "slug": "scorching-ray",
    "level_int": 2,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Scrying",
    "slug": "scrying",
    "level_int": 5,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Secret Chest",
    "slug": "secret-chest",
    "level_int": 4,
    "document__slug": "wotc-srd"
  },
  {
    "name": "See Invisibility",
    "slug": "see-invisibility",
    "level_int": 2,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Seeming",
    "slug": "seeming",
    "level_int": 5,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Sending",
    "slug": "sending",
    "level_int": 3,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Sequester",
    "slug": "sequester",
    "level_int": 7,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Shapechange",
    "slug": "shapechange",
    "level_int": 9,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Shatter",
    "slug": "shatter",
    "level_int": 2,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Shield",
    "slug": "shield",
    "level_int": 1,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Shocking Grasp",
    "slug": "shocking-grasp",
    "level_int": 0,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Silent Image",
    "slug": "silent-image",
    "level_int": 1,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Simulacrum",
    "slug": "simulacrum",
    "level_int": 7,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Sleep",
    "slug": "sleep",
    "level_int": 1,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Sleet Storm",
    "slug": "sleet-storm",
    "level_int": 3,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Slow",
    "slug": "slow",
    "level_int": 3,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Spider Climb",
    "slug": "spider-climb",
    "level_int": 2,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Stinking Cloud",
    "slug": "stinking-cloud",
    "level_int": 3,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Stone Shape",
    "slug": "stone-shape",
    "level_int": 4,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Stoneskin",
    "slug": "stoneskin",
    "level_int": 4,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Suggestion",
    "slug": "suggestion",
    "level_int": 2,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Sunbeam",
    "slug": "sunbeam",
    "level_int": 6,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Sunburst",
    "slug": "sunburst",
    "level_int": 8,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Symbol",
    "slug": "symbol",
    "level_int": 7,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Telekinesis",
    "slug": "telekinesis",
    "level_int": 5,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Telepathic Bond",
    "slug": "telepathic-bond",
    "level_int": 5,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Teleport",
    "slug": "teleport",
    "level_int": 7,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Teleportation Circle",
    "slug": "teleportation-circle",
    "level_int": 5,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Thunderwave",
    "slug": "thunderwave",
    "level_int": 1,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Time Stop",
    "slug": "time-stop",
    "level_int": 9,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Tiny Hut",
    "slug": "tiny-hut",
    "level_int": 3,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Tongues",
    "slug": "tongues",
    "level_int": 3,
    "document__slug": "wotc-srd"
  },
  {
    "name": "True Polymorph",
    "slug": "true-polymorph",
    "level_int": 9,
    "document__slug": "wotc-srd"
  },
  {
    "name": "True Seeing",
    "slug": "true-seeing",
    "level_int": 6,
    "document__slug": "wotc-srd"
  },
  {
    "name": "True Strike",
    "slug": "true-strike",
    "level_int": 0,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Unseen Servant",
    "slug": "unseen-servant",
    "level_int": 1,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Vampiric Touch",
    "slug": "vampiric-touch",
    "level_int": 3,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Wall of Fire",
    "slug": "wall-of-fire",
    "level_int": 4,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Wall of Force",
    "slug": "wall-of-force",
    "level_int": 5,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Wall of Ice",
    "slug": "wall-of-ice",
    "level_int": 6,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Wall of Stone",
    "slug": "wall-of-stone",
    "level_int": 5,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Water Breathing",
    "slug": "water-breathing",
    "level_int": 3,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Web",
    "slug": "web",
    "level_int": 2,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Weird",
    "slug": "weird",
    "level_int": 9,
    "document__slug": "wotc-srd"
  },
  {
    "name": "Wish",
    "slug": "wish",
    "level_int": 9,
    "document__slug": "wotc-srd"
  }
];
