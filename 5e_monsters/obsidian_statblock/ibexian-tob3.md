---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob3
- monster/cr/6
- monster/size/Large
- monster/type/Fiend
statblock: inline
aliases: ["ibexian", "Ibexian-tob3"]
---
# Ibexian Tob3
*Source: Tome of Beasts 3 Page 238*

```statblock
"dice": false
"name": "Ibexian Tob3"
"size": "Large"
"type": "Fiend"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "119"
"hit_dice": "14d10+42"
"stats":
- !!int "19"
- !!int "17"
- !!int "17"
- !!int "6"
- !!int "14"
- !!int "7"
"speed": "walk 50 ft."
"saves":
  "Strength": !!int "7"
  "Constitution": !!int "6"
"senses": darkvision 120', passive Perception 15
"skillsaves":
  "perception": !!int "2"
"languages": "understands Abyssal but can’t speak"
"cr": "6"
"damage_immunities": "fire, poison"
"damage_resistances": "cold, lightning; nonmagic B/P/S attacks"
"traits":
- "desc": "When it takes damage each creature within 5 ft. of it: DC 15 Dex save or take 3 (1d6) fire. The fire ignites flammable objects within 5 ft. of ibexian that aren’t being worn or carried."
  "name": "Fiery Blood"
- "desc": "If it moves 20'+ straight toward a target and then hits it with Ram attack on the same turn target takes extra 7 (2d6) fire. If target is a creature it must make DC 15 Str save or be pushed up to 10 ft. away and knocked prone."
  "name": "Fiery Charge"
- "desc": "Advantage on attacks vs. creature if 1+ unincapacitated attacker ally is within 5 ft. of target."
  "name": "Pack Tactics"
"actions":
- "desc": "One Ram and one Hooves or two Spit Fires."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +7 to hit, 10 ft., one target, 13 (2d8+4) bludgeoning damage + 7 (2d6) fire."
  "name": "Ram"
- "desc": "Melee Weapon Attack: +7 to hit, 5 ft., one target, 9 (2d4+4) bludgeoning damage + 7 (2d6) fire."
  "name": "Hooves"
- "desc": "Ranged Spell Attack: +5 to hit, 60 ft., one target, 16 (4d6+2) fire."
  "name": "Spit Fire"
- "desc": "Moves up to 30' in straight line to creature and can move through space of any Med or smaller creature stopping when it moves within 5 ft. of target. Each friendly ibexian within 50' of ibexian can use its reaction to also move up to its speed in straight line to target stopping when it moves within 5 ft. of target. This move doesn’t provoke opportunity attacks. Target and each creature within 20' of it: 14 (4d6) fire (DC 15 Dex half damage). For each ibexian in Pyroclasm after 1st fire increases by 3 (1d6) max (28) 8d6."
  "name": "Pyroclasm (1/Day)"
source:
- [Tome of Beasts 3](https://koboldpress.com/kpstore/product/tome-of-beasts-3-for-5th-edition/)
```
