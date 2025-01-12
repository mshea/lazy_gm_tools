---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/cc
- monster/cr/2
- monster/size/Small
- monster/type/Fiend
statblock: inline
aliases: ["wind-demon", "Wind Demon-cc"]
---
# Wind Demon Cc
*Source: Creature Codex Page 381*

```statblock
"dice": false
"name": "Wind Demon Cc"
"size": "Small"
"type": "Fiend"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "28"
"hit_dice": "8d6"
"stats":
- !!int "10"
- !!int "18"
- !!int "10"
- !!int "10"
- !!int "7"
- !!int "8"
"speed": "fly 60 ft. walk 30 ft."
"senses": darkvision 60 ft., passive Perception 8
"skillsaves":
  "stealth": !!int "8"
"languages": "Abyssal, Common, Void Speech"
"cr": "2"
"damage_immunities": "cold, poison"
"damage_resistances": "fire, lightning"
"traits":
- "desc": "When the wind demon is targeted by an attack or spell that requires a ranged attack roll, roll a d6. On a 1 to 5, the attacker has disadvantage on the attack roll. On a 6, the wind demon is unaffected, and the attack is reflected back at the attacker as though it originated from the wind demon, turning the attacker into the target."
  "name": "Arrow Bane"
- "desc": "The wind demon has advantage on saving throws against spells and other magical effects."
  "name": "Magic Resistance"
"actions":
- "desc": "The wind demon makes two frost claw attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d4 + 4) slashing damage plus 3 (1d6) cold damage."
  "name": "Frost Claw"
"reactions":
- "desc": "After a creature the wind demon can see damages it with an attack, the wind demon can move up to its speed without provoking opportunity attacks."
  "name": "Swift as Frost"
source:
- [Creature Codex](https://koboldpress.com/kpstore/product/creature-codex-for-5th-edition-dnd)
```
