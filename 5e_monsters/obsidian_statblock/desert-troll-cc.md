---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/cc
- monster/cr/6
- monster/size/Large
- monster/type/Giant
statblock: inline
aliases: ["desert-troll", "Desert Troll-cc"]
---
# Desert Troll Cc
*Source: Creature Codex Page 356*

```statblock
"dice": false
"name": "Desert Troll Cc"
"size": "Large"
"type": "Giant"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "105"
"hit_dice": "10d10+50"
"stats":
- !!int "20"
- !!int "13"
- !!int "20"
- !!int "9"
- !!int "12"
- !!int "7"
"speed": "burrow 30 ft. walk 30 ft."
"senses": darkvision 60 ft., passive Perception 14
"skillsaves":
  "perception": !!int "4"
  "stealth": !!int "4"
"languages": "Common, Giant"
"cr": "6"
"damage_immunities": "fire"
"traits":
- "desc": "The desert troll has advantage on Dexterity (Stealth) checks made to hide in desert terrain."
  "name": "Desert Camouflage"
- "desc": "If the desert troll burrows at least 15 feet straight toward a creature, it can burst out of the ground, harming those above it. Each creature in its space when it erupts must make a DC 16 Strength saving throw. On a failure, the creature takes 10 (3d6) bludgeoning damage, is pushed out of the troll's space, and is knocked prone. On a success, the creature takes half the damage and is pushed out of the troll's space, but isn't knocked prone."
  "name": "Erupt"
- "desc": "The desert troll has advantage on Wisdom (Perception) checks that rely on smell."
  "name": "Keen Smell"
- "desc": "The troll regains 10 hp at the start of its turn. If the troll takes acid damage, this trait doesn't function at the start of the troll's next turn. The troll dies only if it starts its turn with 0 hp and doesn't regenerate."
  "name": "Regeneration"
- "desc": "The desert troll takes 1 acid damage for every 5 feet it moves in water or for every gallon of water splashed on it."
  "name": "Water Susceptibility"
"actions":
- "desc": "The desert troll makes three attacks: one with its bite and two with its claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 8 (1d6 + 5) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) slashing damage."
  "name": "Claws"
source:
- [Creature Codex](https://koboldpress.com/kpstore/product/creature-codex-for-5th-edition-dnd)
```
