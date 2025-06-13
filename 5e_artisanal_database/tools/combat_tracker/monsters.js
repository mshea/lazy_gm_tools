const customMonsters = [
  {
    "name": "Aboleth",
    "hp": 150,
    "ac": 17,
    "init": 3
  },
  {
    "name": "Adult Black Dragon",
    "hp": 195,
    "ac": 19,
    "init": 6
  },
  {
    "name": "Adult Blue Dragon",
    "hp": 212,
    "ac": 19,
    "init": 4
  },
  {
    "name": "Adult Brass Dragon",
    "hp": 172,
    "ac": 18,
    "init": 4
  },
  {
    "name": "Adult Bronze Dragon",
    "hp": 212,
    "ac": 18,
    "init": 4
  },
  {
    "name": "Adult Copper Dragon",
    "hp": 184,
    "ac": 18,
    "init": 5
  },
  {
    "name": "Adult Gold Dragon",
    "hp": 243,
    "ac": 19,
    "init": 6
  },
  {
    "name": "Adult Green Dragon",
    "hp": 207,
    "ac": 19,
    "init": 5
  },
  {
    "name": "Adult Red Dragon",
    "hp": 256,
    "ac": 19,
    "init": 4
  },
  {
    "name": "Adult Silver Dragon",
    "hp": 216,
    "ac": 19,
    "init": 4
  },
  {
    "name": "Adult White Dragon",
    "hp": 200,
    "ac": 18,
    "init": 4
  },
  {
    "name": "Air Elemental",
    "hp": 90,
    "ac": 15,
    "init": 5
  },
  {
    "name": "Ancient Black Dragon",
    "hp": 367,
    "ac": 22,
    "init": 6
  },
  {
    "name": "Ancient Blue Dragon",
    "hp": 481,
    "ac": 22,
    "init": 4
  },
  {
    "name": "Ancient Brass Dragon",
    "hp": 332,
    "ac": 20,
    "init": 4
  },
  {
    "name": "Ancient Bronze Dragon",
    "hp": 444,
    "ac": 22,
    "init": 4
  },
  {
    "name": "Ancient Copper Dragon",
    "hp": 367,
    "ac": 21,
    "init": 5
  },
  {
    "name": "Ancient Gold Dragon",
    "hp": 546,
    "ac": 22,
    "init": 6
  },
  {
    "name": "Ancient Green Dragon",
    "hp": 402,
    "ac": 21,
    "init": 5
  },
  {
    "name": "Ancient Red Dragon",
    "hp": 507,
    "ac": 22,
    "init": 4
  },
  {
    "name": "Ancient Silver Dragon",
    "hp": 468,
    "ac": 22,
    "init": 4
  },
  {
    "name": "Ancient White Dragon",
    "hp": 333,
    "ac": 20,
    "init": 4
  },
  {
    "name": "Animated Armor",
    "hp": 33,
    "ac": 18,
    "init": 2
  },
  {
    "name": "Animated Flying Sword",
    "hp": 14,
    "ac": 17,
    "init": 4
  },
  {
    "name": "Animated Rug of Smothering",
    "hp": 27,
    "ac": 12,
    "init": 4
  },
  {
    "name": "Ankheg",
    "hp": 45,
    "ac": 14,
    "init": 0
  },
  {
    "name": "Archmage",
    "hp": 170,
    "ac": 17,
    "init": 6
  },
  {
    "name": "Assassin",
    "hp": 97,
    "ac": 16,
    "init": 10
  },
  {
    "name": "Awakened Shrub",
    "hp": 10,
    "ac": 9,
    "init": -1
  },
  {
    "name": "Awakened Tree",
    "hp": 59,
    "ac": 13,
    "init": -2
  },
  {
    "name": "Axe Beak",
    "hp": 19,
    "ac": 11,
    "init": 1
  },
  {
    "name": "Azer Sentinel",
    "hp": 39,
    "ac": 17,
    "init": 1
  },
  {
    "name": "Balor",
    "hp": 287,
    "ac": 19,
    "init": 14
  },
  {
    "name": "Bandit Captain",
    "hp": 52,
    "ac": 15,
    "init": 3
  },
  {
    "name": "Bandit",
    "hp": 11,
    "ac": 12,
    "init": 1
  },
  {
    "name": "Barbed Devil",
    "hp": 110,
    "ac": 15,
    "init": 3
  },
  {
    "name": "Basilisk",
    "hp": 52,
    "ac": 15,
    "init": -1
  },
  {
    "name": "Bearded Devil",
    "hp": 58,
    "ac": 13,
    "init": 2
  },
  {
    "name": "Behir",
    "hp": 168,
    "ac": 17,
    "init": 3
  },
  {
    "name": "Berserker",
    "hp": 67,
    "ac": 13,
    "init": 1
  },
  {
    "name": "Black Dragon Wyrmling",
    "hp": 33,
    "ac": 17,
    "init": 4
  },
  {
    "name": "Black Pudding",
    "hp": 68,
    "ac": 7,
    "init": -3
  },
  {
    "name": "Blink Dog",
    "hp": 22,
    "ac": 13,
    "init": 3
  },
  {
    "name": "Blue Dragon Wyrmling",
    "hp": 65,
    "ac": 17,
    "init": 2
  },
  {
    "name": "Bone Devil",
    "hp": 161,
    "ac": 16,
    "init": 7
  },
  {
    "name": "Brass Dragon Wyrmling",
    "hp": 22,
    "ac": 15,
    "init": 2
  },
  {
    "name": "Bronze Dragon Wyrmling",
    "hp": 39,
    "ac": 15,
    "init": 2
  },
  {
    "name": "Bugbear Stalker",
    "hp": 65,
    "ac": 15,
    "init": 2
  },
  {
    "name": "Bugbear Warrior",
    "hp": 33,
    "ac": 14,
    "init": 2
  },
  {
    "name": "Bulette",
    "hp": 94,
    "ac": 17,
    "init": 0
  },
  {
    "name": "Centaur Trooper",
    "hp": 45,
    "ac": 16,
    "init": 2
  },
  {
    "name": "Chain Devil",
    "hp": 85,
    "ac": 15,
    "init": 5
  },
  {
    "name": "Chimera",
    "hp": 114,
    "ac": 14,
    "init": 0
  },
  {
    "name": "Chuul",
    "hp": 76,
    "ac": 16,
    "init": 0
  },
  {
    "name": "Clay Golem",
    "hp": 123,
    "ac": 14,
    "init": 3
  },
  {
    "name": "Cloaker",
    "hp": 91,
    "ac": 14,
    "init": 5
  },
  {
    "name": "Cloud Giant",
    "hp": 200,
    "ac": 14,
    "init": 4
  },
  {
    "name": "Cockatrice",
    "hp": 22,
    "ac": 11,
    "init": 1
  },
  {
    "name": "Commoner",
    "hp": 4,
    "ac": 10,
    "init": 0
  },
  {
    "name": "Copper Dragon Wyrmling",
    "hp": 22,
    "ac": 16,
    "init": 3
  },
  {
    "name": "Couatl",
    "hp": 60,
    "ac": 19,
    "init": 5
  },
  {
    "name": "Cultist Fanatic",
    "hp": 44,
    "ac": 13,
    "init": 2
  },
  {
    "name": "Cultist",
    "hp": 9,
    "ac": 12,
    "init": 1
  },
  {
    "name": "Darkmantle",
    "hp": 22,
    "ac": 11,
    "init": 3
  },
  {
    "name": "Death Dog",
    "hp": 39,
    "ac": 12,
    "init": 2
  },
  {
    "name": "Deva",
    "hp": 229,
    "ac": 17,
    "init": 4
  },
  {
    "name": "Djinni",
    "hp": 218,
    "ac": 17,
    "init": 2
  },
  {
    "name": "Doppelganger",
    "hp": 52,
    "ac": 14,
    "init": 4
  },
  {
    "name": "Dragon Turtle",
    "hp": 356,
    "ac": 20,
    "init": 6
  },
  {
    "name": "Dretch",
    "hp": 18,
    "ac": 11,
    "init": 0
  },
  {
    "name": "Drider",
    "hp": 123,
    "ac": 19,
    "init": 4
  },
  {
    "name": "Druid",
    "hp": 44,
    "ac": 13,
    "init": 1
  },
  {
    "name": "Dryad",
    "hp": 22,
    "ac": 16,
    "init": 1
  },
  {
    "name": "Dust Mephit",
    "hp": 17,
    "ac": 12,
    "init": 2
  },
  {
    "name": "Earth Elemental",
    "hp": 147,
    "ac": 17,
    "init": -1
  },
  {
    "name": "Efreeti",
    "hp": 212,
    "ac": 17,
    "init": 1
  },
  {
    "name": "Erinyes",
    "hp": 178,
    "ac": 18,
    "init": 7
  },
  {
    "name": "Ettercap",
    "hp": 44,
    "ac": 13,
    "init": 2
  },
  {
    "name": "Ettin",
    "hp": 85,
    "ac": 12,
    "init": -1
  },
  {
    "name": "Fire Elemental",
    "hp": 93,
    "ac": 13,
    "init": 3
  },
  {
    "name": "Fire Giant",
    "hp": 162,
    "ac": 18,
    "init": 3
  },
  {
    "name": "Flesh Golem",
    "hp": 127,
    "ac": 9,
    "init": -1
  },
  {
    "name": "Frost Giant",
    "hp": 149,
    "ac": 15,
    "init": 2
  },
  {
    "name": "Gargoyle",
    "hp": 67,
    "ac": 15,
    "init": 2
  },
  {
    "name": "Gelatinous Cube",
    "hp": 63,
    "ac": 6,
    "init": -4
  },
  {
    "name": "Ghast",
    "hp": 36,
    "ac": 13,
    "init": 3
  },
  {
    "name": "Ghost",
    "hp": 45,
    "ac": 11,
    "init": 1
  },
  {
    "name": "Ghoul",
    "hp": 22,
    "ac": 12,
    "init": 2
  },
  {
    "name": "Gibbering Mouther",
    "hp": 52,
    "ac": 9,
    "init": -1
  },
  {
    "name": "Glabrezu",
    "hp": 189,
    "ac": 17,
    "init": 6
  },
  {
    "name": "Gladiator",
    "hp": 112,
    "ac": 16,
    "init": 5
  },
  {
    "name": "Gnoll Warrior",
    "hp": 27,
    "ac": 15,
    "init": 1
  },
  {
    "name": "Goblin Boss",
    "hp": 21,
    "ac": 17,
    "init": 2
  },
  {
    "name": "Goblin Minion",
    "hp": 7,
    "ac": 12,
    "init": 2
  },
  {
    "name": "Goblin Warrior",
    "hp": 10,
    "ac": 15,
    "init": 2
  },
  {
    "name": "Gold Dragon Wyrmling",
    "hp": 60,
    "ac": 17,
    "init": 4
  },
  {
    "name": "Gorgon",
    "hp": 114,
    "ac": 19,
    "init": 0
  },
  {
    "name": "Gray Ooze",
    "hp": 22,
    "ac": 9,
    "init": -2
  },
  {
    "name": "Green Dragon Wyrmling",
    "hp": 38,
    "ac": 17,
    "init": 3
  },
  {
    "name": "Green Hag",
    "hp": 82,
    "ac": 17,
    "init": 1
  },
  {
    "name": "Grick",
    "hp": 54,
    "ac": 14,
    "init": 2
  },
  {
    "name": "Griffon",
    "hp": 59,
    "ac": 12,
    "init": 2
  },
  {
    "name": "Grimlock",
    "hp": 11,
    "ac": 11,
    "init": 1
  },
  {
    "name": "Guard Captain",
    "hp": 75,
    "ac": 18,
    "init": 4
  },
  {
    "name": "Guardian Naga",
    "hp": 136,
    "ac": 18,
    "init": 4
  },
  {
    "name": "Guard",
    "hp": 11,
    "ac": 16,
    "init": 1
  },
  {
    "name": "Half-Dragon",
    "hp": 105,
    "ac": 18,
    "init": 5
  },
  {
    "name": "Harpy",
    "hp": 38,
    "ac": 11,
    "init": 1
  },
  {
    "name": "Hell Hound",
    "hp": 58,
    "ac": 15,
    "init": 1
  },
  {
    "name": "Hezrou",
    "hp": 157,
    "ac": 18,
    "init": 6
  },
  {
    "name": "Hill Giant",
    "hp": 105,
    "ac": 13,
    "init": 2
  },
  {
    "name": "Hippogriff",
    "hp": 26,
    "ac": 11,
    "init": 1
  },
  {
    "name": "Hobgoblin Captain",
    "hp": 58,
    "ac": 17,
    "init": 4
  },
  {
    "name": "Hobgoblin Warrior",
    "hp": 11,
    "ac": 18,
    "init": 3
  },
  {
    "name": "Homunculus",
    "hp": 4,
    "ac": 13,
    "init": 2
  },
  {
    "name": "Horned Devil",
    "hp": 199,
    "ac": 18,
    "init": 7
  },
  {
    "name": "Hydra",
    "hp": 184,
    "ac": 15,
    "init": 4
  },
  {
    "name": "Ice Devil",
    "hp": 228,
    "ac": 18,
    "init": 7
  },
  {
    "name": "Ice Mephit",
    "hp": 21,
    "ac": 11,
    "init": 1
  },
  {
    "name": "Imp",
    "hp": 21,
    "ac": 13,
    "init": 3
  },
  {
    "name": "Incubus",
    "hp": 66,
    "ac": 15,
    "init": 3
  },
  {
    "name": "Invisible Stalker",
    "hp": 97,
    "ac": 14,
    "init": 7
  },
  {
    "name": "Iron Golem",
    "hp": 252,
    "ac": 20,
    "init": 9
  },
  {
    "name": "Knight",
    "hp": 52,
    "ac": 18,
    "init": 0
  },
  {
    "name": "Kobold Warrior",
    "hp": 7,
    "ac": 14,
    "init": 2
  },
  {
    "name": "Kraken",
    "hp": 481,
    "ac": 18,
    "init": 4
  },
  {
    "name": "Lamia",
    "hp": 97,
    "ac": 13,
    "init": 1
  },
  {
    "name": "Lemure",
    "hp": 9,
    "ac": 9,
    "init": -3
  },
  {
    "name": "Lich",
    "hp": 315,
    "ac": 20,
    "init": 7
  },
  {
    "name": "Mage",
    "hp": 81,
    "ac": 15,
    "init": 2
  },
  {
    "name": "Magma Mephit",
    "hp": 18,
    "ac": 11,
    "init": 1
  },
  {
    "name": "Magmin",
    "hp": 13,
    "ac": 14,
    "init": 2
  },
  {
    "name": "Manticore",
    "hp": 68,
    "ac": 14,
    "init": 3
  },
  {
    "name": "Marilith",
    "hp": 220,
    "ac": 16,
    "init": 10
  },
  {
    "name": "Medusa",
    "hp": 127,
    "ac": 15,
    "init": 6
  },
  {
    "name": "Merfolk Skirmisher",
    "hp": 11,
    "ac": 11,
    "init": 1
  },
  {
    "name": "Merrow",
    "hp": 45,
    "ac": 13,
    "init": 2
  },
  {
    "name": "Mimic",
    "hp": 58,
    "ac": 12,
    "init": 3
  },
  {
    "name": "Minotaur of Baphomet",
    "hp": 85,
    "ac": 14,
    "init": 0
  },
  {
    "name": "Minotaur Skeleton",
    "hp": 45,
    "ac": 12,
    "init": 0
  },
  {
    "name": "Mummy Lord",
    "hp": 187,
    "ac": 17,
    "init": 4
  },
  {
    "name": "Mummy",
    "hp": 58,
    "ac": 11,
    "init": -1
  },
  {
    "name": "Nalfeshnee",
    "hp": 184,
    "ac": 18,
    "init": 5
  },
  {
    "name": "Night Hag",
    "hp": 112,
    "ac": 17,
    "init": 5
  },
  {
    "name": "Nightmare",
    "hp": 68,
    "ac": 13,
    "init": 2
  },
  {
    "name": "Noble",
    "hp": 9,
    "ac": 15,
    "init": 1
  },
  {
    "name": "Ochre Jelly",
    "hp": 52,
    "ac": 8,
    "init": -2
  },
  {
    "name": "Ogre",
    "hp": 68,
    "ac": 11,
    "init": -1
  },
  {
    "name": "Ogre Zombie",
    "hp": 85,
    "ac": 8,
    "init": -2
  },
  {
    "name": "Oni",
    "hp": 119,
    "ac": 17,
    "init": 0
  },
  {
    "name": "Otyugh",
    "hp": 104,
    "ac": 14,
    "init": 0
  },
  {
    "name": "Owlbear",
    "hp": 59,
    "ac": 13,
    "init": 1
  },
  {
    "name": "Pegasus",
    "hp": 59,
    "ac": 12,
    "init": 2
  },
  {
    "name": "Phase Spider",
    "hp": 45,
    "ac": 14,
    "init": 3
  },
  {
    "name": "Pirate Captain",
    "hp": 84,
    "ac": 17,
    "init": 7
  },
  {
    "name": "Pirate",
    "hp": 33,
    "ac": 14,
    "init": 5
  },
  {
    "name": "Pit Fiend",
    "hp": 337,
    "ac": 21,
    "init": 14
  },
  {
    "name": "Planetar",
    "hp": 262,
    "ac": 19,
    "init": 10
  },
  {
    "name": "Priest Acolyte",
    "hp": 11,
    "ac": 13,
    "init": 0
  },
  {
    "name": "Priest",
    "hp": 38,
    "ac": 13,
    "init": 0
  },
  {
    "name": "Pseudodragon",
    "hp": 10,
    "ac": 14,
    "init": 2
  },
  {
    "name": "Purple Worm",
    "hp": 247,
    "ac": 18,
    "init": 3
  },
  {
    "name": "Quasit",
    "hp": 25,
    "ac": 13,
    "init": 3
  },
  {
    "name": "Rakshasa",
    "hp": 221,
    "ac": 17,
    "init": 8
  },
  {
    "name": "Red Dragon Wyrmling",
    "hp": 75,
    "ac": 17,
    "init": 2
  },
  {
    "name": "Remorhaz",
    "hp": 195,
    "ac": 17,
    "init": 5
  },
  {
    "name": "Roc",
    "hp": 248,
    "ac": 15,
    "init": 8
  },
  {
    "name": "Roper",
    "hp": 93,
    "ac": 20,
    "init": 5
  },
  {
    "name": "Rust Monster",
    "hp": 33,
    "ac": 14,
    "init": 1
  },
  {
    "name": "Sahuagin Warrior",
    "hp": 22,
    "ac": 12,
    "init": 0
  },
  {
    "name": "Salamander",
    "hp": 90,
    "ac": 15,
    "init": 2
  },
  {
    "name": "Satyr",
    "hp": 31,
    "ac": 13,
    "init": 3
  },
  {
    "name": "Scout",
    "hp": 16,
    "ac": 13,
    "init": 2
  },
  {
    "name": "Sea Hag",
    "hp": 52,
    "ac": 14,
    "init": 1
  },
  {
    "name": "Shadow",
    "hp": 27,
    "ac": 12,
    "init": 2
  },
  {
    "name": "Shambling Mound",
    "hp": 110,
    "ac": 15,
    "init": -1
  },
  {
    "name": "Shield Guardian",
    "hp": 142,
    "ac": 17,
    "init": -1
  },
  {
    "name": "Shrieker Fungus",
    "hp": 13,
    "ac": 5,
    "init": -5
  },
  {
    "name": "Silver Dragon Wyrmling",
    "hp": 45,
    "ac": 17,
    "init": 2
  },
  {
    "name": "Skeleton",
    "hp": 13,
    "ac": 14,
    "init": 3
  },
  {
    "name": "Solar",
    "hp": 297,
    "ac": 21,
    "init": 20
  },
  {
    "name": "Specter",
    "hp": 22,
    "ac": 12,
    "init": 2
  },
  {
    "name": "Sphinx of Lore",
    "hp": 170,
    "ac": 17,
    "init": 6
  },
  {
    "name": "Sphinx of Valor",
    "hp": 199,
    "ac": 17,
    "init": 4
  },
  {
    "name": "Sphinx of Wonder",
    "hp": 24,
    "ac": 13,
    "init": 3
  },
  {
    "name": "Spirit Naga",
    "hp": 135,
    "ac": 17,
    "init": 3
  },
  {
    "name": "Sprite",
    "hp": 10,
    "ac": 15,
    "init": 4
  },
  {
    "name": "Spy",
    "hp": 27,
    "ac": 12,
    "init": 4
  },
  {
    "name": "Steam Mephit",
    "hp": 17,
    "ac": 10,
    "init": 0
  },
  {
    "name": "Stirge",
    "hp": 5,
    "ac": 13,
    "init": 3
  },
  {
    "name": "Stone Giant",
    "hp": 126,
    "ac": 17,
    "init": 5
  },
  {
    "name": "Stone Golem",
    "hp": 220,
    "ac": 18,
    "init": 3
  },
  {
    "name": "Storm Giant",
    "hp": 230,
    "ac": 16,
    "init": 7
  },
  {
    "name": "Succubus",
    "hp": 71,
    "ac": 15,
    "init": 3
  },
  {
    "name": "Tarrasque",
    "hp": 697,
    "ac": 25,
    "init": 18
  },
  {
    "name": "Tough Boss",
    "hp": 82,
    "ac": 16,
    "init": 2
  },
  {
    "name": "Tough",
    "hp": 32,
    "ac": 12,
    "init": 1
  },
  {
    "name": "Treant",
    "hp": 138,
    "ac": 16,
    "init": 3
  },
  {
    "name": "Troll Limb",
    "hp": 14,
    "ac": 13,
    "init": 1
  },
  {
    "name": "Troll",
    "hp": 94,
    "ac": 15,
    "init": 1
  },
  {
    "name": "Unicorn",
    "hp": 97,
    "ac": 12,
    "init": 8
  },
  {
    "name": "Vampire Familiar",
    "hp": 65,
    "ac": 15,
    "init": 5
  },
  {
    "name": "Vampire",
    "hp": 195,
    "ac": 16,
    "init": 8
  },
  {
    "name": "Vampire Spawn",
    "hp": 90,
    "ac": 16,
    "init": 3
  },
  {
    "name": "Violet Fungus",
    "hp": 18,
    "ac": 5,
    "init": -5
  },
  {
    "name": "Vrock",
    "hp": 152,
    "ac": 15,
    "init": 2
  },
  {
    "name": "Warhorse Skeleton",
    "hp": 22,
    "ac": 13,
    "init": 1
  },
  {
    "name": "Warrior Infantry",
    "hp": 9,
    "ac": 13,
    "init": 0
  },
  {
    "name": "Warrior Veteran",
    "hp": 65,
    "ac": 17,
    "init": 3
  },
  {
    "name": "Water Elemental",
    "hp": 114,
    "ac": 14,
    "init": 2
  },
  {
    "name": "Werebear",
    "hp": 135,
    "ac": 15,
    "init": 3
  },
  {
    "name": "Wereboar",
    "hp": 97,
    "ac": 15,
    "init": 2
  },
  {
    "name": "Wererat",
    "hp": 60,
    "ac": 13,
    "init": 3
  },
  {
    "name": "Weretiger",
    "hp": 120,
    "ac": 12,
    "init": 2
  },
  {
    "name": "Werewolf",
    "hp": 71,
    "ac": 15,
    "init": 4
  },
  {
    "name": "White Dragon Wyrmling",
    "hp": 32,
    "ac": 16,
    "init": 2
  },
  {
    "name": "Wight",
    "hp": 82,
    "ac": 14,
    "init": 4
  },
  {
    "name": "Will-o'-Wisp",
    "hp": 27,
    "ac": 19,
    "init": 9
  },
  {
    "name": "Winter Wolf",
    "hp": 75,
    "ac": 13,
    "init": 1
  },
  {
    "name": "Worg",
    "hp": 26,
    "ac": 13,
    "init": 1
  },
  {
    "name": "Wraith",
    "hp": 67,
    "ac": 13,
    "init": 3
  },
  {
    "name": "Wyvern",
    "hp": 127,
    "ac": 14,
    "init": 0
  },
  {
    "name": "Xorn",
    "hp": 84,
    "ac": 19,
    "init": 0
  },
  {
    "name": "Young Black Dragon",
    "hp": 127,
    "ac": 18,
    "init": 5
  },
  {
    "name": "Young Blue Dragon",
    "hp": 152,
    "ac": 18,
    "init": 4
  },
  {
    "name": "Young Brass Dragon",
    "hp": 110,
    "ac": 17,
    "init": 3
  },
  {
    "name": "Young Bronze Dragon",
    "hp": 142,
    "ac": 17,
    "init": 3
  },
  {
    "name": "Young Copper Dragon",
    "hp": 119,
    "ac": 17,
    "init": 4
  },
  {
    "name": "Young Gold Dragon",
    "hp": 178,
    "ac": 18,
    "init": 6
  },
  {
    "name": "Young Green Dragon",
    "hp": 136,
    "ac": 18,
    "init": 4
  },
  {
    "name": "Young Red Dragon",
    "hp": 178,
    "ac": 18,
    "init": 4
  },
  {
    "name": "Young Silver Dragon",
    "hp": 168,
    "ac": 18,
    "init": 4
  },
  {
    "name": "Young White Dragon",
    "hp": 123,
    "ac": 17,
    "init": 3
  },
  {
    "name": "Zombie",
    "hp": 15,
    "ac": 8,
    "init": -2
  },
  {
    "name": "Swarm of Crawling Claws",
    "hp": 49,
    "ac": 12,
    "init": 2
  },
  {
    "name": "Allosaurus",
    "hp": 51,
    "ac": 13,
    "init": 1
  },
  {
    "name": "Ankylosaurus",
    "hp": 68,
    "ac": 15,
    "init": 0
  },
  {
    "name": "Ape",
    "hp": 19,
    "ac": 12,
    "init": 2
  },
  {
    "name": "Archelon",
    "hp": 90,
    "ac": 17,
    "init": 3
  },
  {
    "name": "Baboon",
    "hp": 3,
    "ac": 12,
    "init": 2
  },
  {
    "name": "Bat",
    "hp": 1,
    "ac": 12,
    "init": 2
  },
  {
    "name": "Black Bear",
    "hp": 19,
    "ac": 11,
    "init": 1
  },
  {
    "name": "Badger",
    "hp": 5,
    "ac": 11,
    "init": 0
  },
  {
    "name": "Blood Hawk",
    "hp": 7,
    "ac": 12,
    "init": 2
  },
  {
    "name": "Boar",
    "hp": 13,
    "ac": 11,
    "init": 0
  },
  {
    "name": "Brown Bear",
    "hp": 22,
    "ac": 11,
    "init": 1
  },
  {
    "name": "Camel",
    "hp": 17,
    "ac": 10,
    "init": -1
  },
  {
    "name": "Cat",
    "hp": 2,
    "ac": 12,
    "init": 2
  },
  {
    "name": "Constrictor Snake",
    "hp": 13,
    "ac": 13,
    "init": 2
  },
  {
    "name": "Crab",
    "hp": 3,
    "ac": 11,
    "init": 0
  },
  {
    "name": "Crocodile",
    "hp": 13,
    "ac": 12,
    "init": 0
  },
  {
    "name": "Deer",
    "hp": 4,
    "ac": 13,
    "init": 3
  },
  {
    "name": "Dire Wolf",
    "hp": 22,
    "ac": 14,
    "init": 2
  },
  {
    "name": "Draft Horse",
    "hp": 15,
    "ac": 10,
    "init": 0
  },
  {
    "name": "Eagle",
    "hp": 4,
    "ac": 12,
    "init": 2
  },
  {
    "name": "Elephant",
    "hp": 76,
    "ac": 12,
    "init": -1
  },
  {
    "name": "Elk",
    "hp": 11,
    "ac": 10,
    "init": 0
  },
  {
    "name": "Flying Snake",
    "hp": 5,
    "ac": 14,
    "init": 2
  },
  {
    "name": "Frog",
    "hp": 1,
    "ac": 11,
    "init": 1
  },
  {
    "name": "Giant Ape",
    "hp": 168,
    "ac": 12,
    "init": 5
  },
  {
    "name": "Giant Badger",
    "hp": 15,
    "ac": 13,
    "init": 0
  },
  {
    "name": "Giant Bat",
    "hp": 22,
    "ac": 13,
    "init": 3
  },
  {
    "name": "Giant Boar",
    "hp": 42,
    "ac": 13,
    "init": 0
  },
  {
    "name": "Giant Centipede",
    "hp": 9,
    "ac": 14,
    "init": 2
  },
  {
    "name": "Giant Constrictor Snake",
    "hp": 60,
    "ac": 12,
    "init": 2
  },
  {
    "name": "Giant Crab",
    "hp": 13,
    "ac": 15,
    "init": 1
  },
  {
    "name": "Giant Crocodile",
    "hp": 85,
    "ac": 14,
    "init": -1
  },
  {
    "name": "Giant Eagle",
    "hp": 26,
    "ac": 13,
    "init": 3
  },
  {
    "name": "Giant Elk",
    "hp": 42,
    "ac": 14,
    "init": 6
  },
  {
    "name": "Giant Fire Beetle",
    "hp": 4,
    "ac": 13,
    "init": 0
  },
  {
    "name": "Giant Frog",
    "hp": 18,
    "ac": 11,
    "init": 1
  },
  {
    "name": "Giant Goat",
    "hp": 19,
    "ac": 11,
    "init": 1
  },
  {
    "name": "Giant Hyena",
    "hp": 45,
    "ac": 12,
    "init": 2
  },
  {
    "name": "Giant Lizard",
    "hp": 19,
    "ac": 12,
    "init": 1
  },
  {
    "name": "Giant Octopus",
    "hp": 45,
    "ac": 11,
    "init": 1
  },
  {
    "name": "Giant Owl",
    "hp": 19,
    "ac": 12,
    "init": 2
  },
  {
    "name": "Giant Rat",
    "hp": 7,
    "ac": 13,
    "init": 3
  },
  {
    "name": "Giant Scorpion",
    "hp": 52,
    "ac": 15,
    "init": 1
  },
  {
    "name": "Giant Seahorse",
    "hp": 16,
    "ac": 14,
    "init": 1
  },
  {
    "name": "Giant Shark",
    "hp": 92,
    "ac": 13,
    "init": 3
  },
  {
    "name": "Giant Spider",
    "hp": 26,
    "ac": 14,
    "init": 3
  },
  {
    "name": "Giant Toad",
    "hp": 39,
    "ac": 11,
    "init": 1
  },
  {
    "name": "Giant Venomous Snake",
    "hp": 11,
    "ac": 14,
    "init": 4
  },
  {
    "name": "Giant Vulture",
    "hp": 25,
    "ac": 10,
    "init": 0
  },
  {
    "name": "Giant Wasp",
    "hp": 22,
    "ac": 13,
    "init": 2
  },
  {
    "name": "Giant Weasel",
    "hp": 9,
    "ac": 13,
    "init": 3
  },
  {
    "name": "Giant Wolf Spider",
    "hp": 11,
    "ac": 13,
    "init": 3
  },
  {
    "name": "Goat",
    "hp": 4,
    "ac": 10,
    "init": 0
  },
  {
    "name": "Hawk",
    "hp": 1,
    "ac": 13,
    "init": 3
  },
  {
    "name": "Hippopotamus",
    "hp": 82,
    "ac": 14,
    "init": -2
  },
  {
    "name": "Hunter Shark",
    "hp": 45,
    "ac": 12,
    "init": 2
  },
  {
    "name": "Hyena",
    "hp": 5,
    "ac": 11,
    "init": 1
  },
  {
    "name": "Jackal",
    "hp": 3,
    "ac": 12,
    "init": 2
  },
  {
    "name": "Killer Whale",
    "hp": 90,
    "ac": 12,
    "init": 2
  },
  {
    "name": "Lion",
    "hp": 22,
    "ac": 12,
    "init": 2
  },
  {
    "name": "Lizard",
    "hp": 2,
    "ac": 10,
    "init": 0
  },
  {
    "name": "Mammoth",
    "hp": 126,
    "ac": 13,
    "init": 2
  },
  {
    "name": "Mastiff",
    "hp": 5,
    "ac": 12,
    "init": 2
  },
  {
    "name": "Mule",
    "hp": 11,
    "ac": 10,
    "init": 0
  },
  {
    "name": "Owl",
    "hp": 1,
    "ac": 11,
    "init": 1
  },
  {
    "name": "Panther",
    "hp": 13,
    "ac": 13,
    "init": 3
  },
  {
    "name": "Piranha",
    "hp": 1,
    "ac": 13,
    "init": 3
  },
  {
    "name": "Plesiosaurus",
    "hp": 68,
    "ac": 13,
    "init": 2
  },
  {
    "name": "Polar Bear",
    "hp": 42,
    "ac": 12,
    "init": 2
  },
  {
    "name": "Pony",
    "hp": 11,
    "ac": 10,
    "init": 0
  },
  {
    "name": "Pteranodon",
    "hp": 13,
    "ac": 13,
    "init": 2
  },
  {
    "name": "Rat",
    "hp": 1,
    "ac": 10,
    "init": 0
  },
  {
    "name": "Raven",
    "hp": 2,
    "ac": 12,
    "init": 2
  },
  {
    "name": "Reef Shark",
    "hp": 22,
    "ac": 12,
    "init": 2
  },
  {
    "name": "Rhinoceros",
    "hp": 45,
    "ac": 13,
    "init": -1
  },
  {
    "name": "Riding Horse",
    "hp": 13,
    "ac": 11,
    "init": 1
  },
  {
    "name": "Saber-Toothed Tiger",
    "hp": 52,
    "ac": 13,
    "init": 3
  },
  {
    "name": "Scorpion",
    "hp": 1,
    "ac": 11,
    "init": 0
  },
  {
    "name": "Seahorse",
    "hp": 1,
    "ac": 12,
    "init": 1
  },
  {
    "name": "Spider",
    "hp": 1,
    "ac": 12,
    "init": 2
  },
  {
    "name": "Swarm of Bats",
    "hp": 11,
    "ac": 12,
    "init": 2
  },
  {
    "name": "Swarm of Insects",
    "hp": 19,
    "ac": 11,
    "init": 1
  },
  {
    "name": "Swarm of Piranhas",
    "hp": 28,
    "ac": 13,
    "init": 3
  },
  {
    "name": "Swarm of Rats",
    "hp": 14,
    "ac": 10,
    "init": 0
  },
  {
    "name": "Swarm of Ravens",
    "hp": 11,
    "ac": 12,
    "init": 2
  },
  {
    "name": "Swarm of Venomous Snakes",
    "hp": 36,
    "ac": 14,
    "init": 4
  },
  {
    "name": "Tiger",
    "hp": 30,
    "ac": 13,
    "init": 3
  },
  {
    "name": "Triceratops",
    "hp": 114,
    "ac": 14,
    "init": -1
  },
  {
    "name": "Tyrannosaurus Rex",
    "hp": 136,
    "ac": 13,
    "init": 3
  },
  {
    "name": "Venomous Snake",
    "hp": 5,
    "ac": 12,
    "init": 2
  },
  {
    "name": "Vulture",
    "hp": 5,
    "ac": 10,
    "init": 0
  },
  {
    "name": "Warhorse",
    "hp": 19,
    "ac": 11,
    "init": 1
  },
  {
    "name": "Weasel",
    "hp": 1,
    "ac": 13,
    "init": 3
  },
  {
    "name": "Wolf",
    "hp": 11,
    "ac": 12,
    "init": 2
  }
];