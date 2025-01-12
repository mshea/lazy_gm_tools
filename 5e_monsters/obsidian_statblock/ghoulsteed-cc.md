---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/cc
- monster/cr/3
- monster/size/Large
- monster/type/Undead
statblock: inline
aliases: ["ghoulsteed", "Ghoulsteed-cc"]
---
# Ghoulsteed Cc
*Source: Creature Codex Page 177*

```statblock
"dice": false
"name": "Ghoulsteed Cc"
"size": "Large"
"type": "Undead"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "85"
"hit_dice": "10d10+30"
"stats":
- !!int "18"
- !!int "10"
- !!int "16"
- !!int "6"
- !!int "10"
- !!int "6"
"speed": "walk 30 ft."
"senses": darkvision 60 ft., passive Perception 12
"skillsaves":
  "perception": !!int "2"
"languages": "Common, Darakhul"
"cr": "3"
"damage_immunities": "poison"
"traits":
- "desc": "If the ghoulsteed moves at least 20 feet straight toward a creature and then hits it with a bite attack on the same turn, that target must succeed on a DC 14 Strength saving throw or be knocked prone. If the target is prone, the ghoulsteed can make one bite attack against it as a bonus action."
  "name": "Pounce"
- "desc": "When the ghoulsteed uses the Dash action, it can Dash again as a bonus action."
  "name": "Sprint (3/Day)"
- "desc": "If damage reduces the ghoulsteed to 0 hp, it makes a Constitution saving throw with a DC of 5 + the damage taken, unless the damage is radiant or from a critical hit. On a success, the ghoulsteed drops to 1 hp instead."
  "name": "Undead Fortitude"
"actions":
- "desc": "A ghoulsteed makes two bite attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) piercing damage and the ghoulsteed gains 5 (1d10) temporary hp. These temporary hp stack with each other, but the ghoulsteed can only have a maximum of 10 temporary hp at one time."
  "name": "Bite"
source:
- [Creature Codex](https://koboldpress.com/kpstore/product/creature-codex-for-5th-edition-dnd)
```
