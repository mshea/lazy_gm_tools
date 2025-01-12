---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob3
- monster/cr/4
- monster/size/Medium
- monster/type/Undead
statblock: inline
aliases: ["relentless-hound", "Relentless Hound-tob3"]
---
# Relentless Hound Tob3
*Source: Tome of Beasts 3 Page 331*

```statblock
"dice": false
"name": "Relentless Hound Tob3"
"size": "Medium"
"type": "Undead"
"ac": !!int "12"
"ac_class": ""
"hp": !!int "52"
"hit_dice": "8d8+16"
"stats":
- !!int "17"
- !!int "14"
- !!int "15"
- !!int "4"
- !!int "11"
- !!int "6"
"speed": "walk 40 ft. fly 20 ft."
"senses": darkvision 60 ft, passive Perception 14
"skillsaves":
  "perception": !!int "0"
"languages": "—"
"cr": "4"
"damage_immunities": "cold, necrotic, poison"
"damage_resistances": "acid, fire, lightning, thunder; nonmagic B/P/S attacks"
"traits":
- "desc": "If a Humanoid that hasn’t harmed hound in last 24 hrs and takes action to offer it bit of food or speak kind words to it hound must make DC 12 Wis save or be charmed by that Humanoid for 1 hr or until Humanoid or its companions do anything harmful to hound. Also hound has disadvantage on saves vs. command spell."
  "name": "Good Dog"
- "desc": "Move through others/objects as difficult terrain. Takes 5 (1d10) force if it ends turn in object."
  "name": "Incorporeal Movement"
- "desc": "Advantage on attacks vs. creature if 1+ unincapacitated attacker ally is within 5 ft. of target."
  "name": "Pack Tactics"
- "desc": "Doesn't require air food drink or sleep."
  "name": "Undead Nature"
"actions":
- "desc": "Two Spectral Bites. If both hit same target it takes 10 (3d6) necrotic and hp max is reduced by that amount (DC 13 Con negates damage and hp max). Reduction lasts until target finishes a long rest. Target dies if this reduces its hp max to 0."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +5 to hit, 5 ft., one creature,. 10 (2d6+3) necrotic."
  "name": "Spectral Bite"
"reactions":
- "desc": "When it takes damage while below half its hp max it creates a spectral hound. Spectral hound uses the stats of a shadow except it doesn’t have Sunlight Weakness trait and can’t make new shadows when it kills Humanoids. It appears in an unoccupied space within 5 ft. of the relentless hound and acts on same initiative as that hound. After spectral hound finishes a long rest it becomes a relentless hound."
  "name": "Multiply (3/Day)"
source:
- [Tome of Beasts 3](https://koboldpress.com/kpstore/product/tome-of-beasts-3-for-5th-edition/)
```
