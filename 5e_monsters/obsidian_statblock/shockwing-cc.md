---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/cc
- monster/cr/1
- monster/size/Small
- monster/type/Beast
statblock: inline
aliases: ["shockwing", "Shockwing-cc"]
---
# Shockwing Cc
*Source: Creature Codex Page 179*

```statblock
"dice": false
"name": "Shockwing Cc"
"size": "Small"
"type": "Beast"
"ac": !!int "12"
"ac_class": "None"
"hp": !!int "27"
"hit_dice": "5d6+10"
"stats":
- !!int "11"
- !!int "15"
- !!int "14"
- !!int "3"
- !!int "10"
- !!int "7"
"speed": "fly 30 ft. walk 25 ft."
"senses": darkvision 60 ft., passive Perception 12
"skillsaves":
  "perception": !!int "2"
  "stealth": !!int "4"
"languages": "-"
"cr": "1"
"damage_immunities": "lightning"
"traits":
- "desc": "The giant moth has advantage on Wisdom (Perception) checks that rely on smell."
  "name": "Antennae"
- "desc": "At the start of each of the shockwing's turns, each creature within 5 feet of it must succeed on a DC 12 Constitution saving throw or take 2 (1d4) lightning damage. This trait doesn't function if the shockwing has used its Fulminating Wings in the last 24 hours."
  "name": "Charged"
"actions":
- "desc": "The shockwing makes two proboscis attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage and 2 (1d4) lightning damage."
  "name": "Proboscis"
- "desc": "A 20-foot radius burst of electricity releases from the shockwing. Each creature in that area must succeed on a DC 12 Constitution saving throw or be stunned until the end of its next turn."
  "name": "Fulminating Wings (1/Day)"
source:
- [Creature Codex](https://koboldpress.com/kpstore/product/creature-codex-for-5th-edition-dnd)
```
