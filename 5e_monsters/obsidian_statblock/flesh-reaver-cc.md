---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/cc
- monster/cr/0.5
- monster/size/Medium
- monster/type/Undead
statblock: inline
aliases: ["flesh-reaver", "Flesh Reaver-cc"]
---
# Flesh Reaver Cc
*Source: Creature Codex Page 160*

```statblock
"dice": false
"name": "Flesh Reaver Cc"
"size": "Medium"
"type": "Undead"
"ac": !!int "12"
"ac_class": "None"
"hp": !!int "19"
"hit_dice": "3d8+6"
"stats":
- !!int "14"
- !!int "14"
- !!int "14"
- !!int "5"
- !!int "10"
- !!int "8"
"speed": "walk 40 ft."
"senses": blindsight 60 ft. (blind beyond this radius), passive Perception 12
"skillsaves":
  "perception": !!int "2"
"languages": "understands Common and Darakhul but can't speak"
"cr": "1/2"
"damage_immunities": "poison"
"damage_resistances": "necrotic"
"traits":
- "desc": "The flesh reaver has advantage on Wisdom (Perception) checks that rely on sight, hearing, or smell."
  "name": "Keen Senses"
- "desc": "If the flesh reaver moves at least 15 feet, it can jump up to 20 feet in any direction. If it lands within 5 feet of a creature, the creature must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the flesh reaver can make one Consume Flesh attack against it as a bonus action."
  "name": "Leap"
- "desc": "The flesh reaver has advantage on attack rolls against a creature if at least one of the flesh reaver's allies is within 5 feet of the creature and the ally isn't incapacitated."
  "name": "Pack Tactics"
"actions":
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) slashing damage."
  "name": "Claw"
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one prone creature. Hit: 4 (1d4 + 2) piercing damage, and the creature must make a DC 13 Constitution saving throw, taking 7 (2d6) necrotic damage on a failed save, or half as much damage on a successful one."
  "name": "Consume Flesh"
source:
- [Creature Codex](https://koboldpress.com/kpstore/product/creature-codex-for-5th-edition-dnd)
```
