---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob3
- monster/cr/4
- monster/size/Small
- monster/type/Monstrosity
statblock: inline
aliases: ["slithy-tove", "Slithy Tove-tob3"]
---
# Slithy Tove Tob3
*Source: Tome of Beasts 3 Page 347*

```statblock
"dice": false
"name": "Slithy Tove Tob3"
"size": "Small"
"type": "Monstrosity"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "91"
"hit_dice": "14d6+42"
"stats":
- !!int "10"
- !!int "20"
- !!int "16"
- !!int "5"
- !!int "14"
- !!int "9"
"speed": "walk 40 ft. burrow 10 ft."
"senses": darkvision 60', passive Perception 14
"skillsaves":
  "perception": !!int "2"
"languages": "understands Common but can’t speak"
"cr": "4"
"traits":
- "desc": "Each creature with Int 5+ that starts its turn within 5 ft. of the slithy tove must make DC 13 Wis save or be incapacitated until start of its next turn as it hears imaginary murmurings and sees movement in its peripheral vision. On success creature has advantage on saves vs. the Distraction of all slighty toves for the next 24 hrs."
  "name": "Distraction"
"actions":
- "desc": "Two Claws or one Claw and one Lick."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +7 to hit, 5 ft., one creature,. 12 (3d4+5) slashing damage."
  "name": "Claw"
- "desc": "Melee Weapon Attack: +7 to hit, 15 ft., one target, 9 (1d8+5) bludgeoning damage and target must make DC 13 Str save or be pulled up to 10 ft. toward the slithy tove."
  "name": "Lick"
- "desc": "Discharges musk in 30' cone. Each creature in area: 10 (3d6) poison and poisoned 1 min (DC 13 Con half damage and isn’t poisoned). When poisoned creature moves 5 ft.+ on its turn it must make DC 13 Dex save or fall prone stepping in a hole hitting its head on a branch tripping over a rock bumping into an ally or some other clumsy act. Poisoned creature can re-save at end of each of its turns success ends effect on itself."
  "name": "Musk of Clumsiness (Recharge 5–6)"
"bonus_actions":
- "desc": "Magically teleports along with any equipment it is wearing or carrying up to 30' to an unoccupied space it can see and takes the Hide action."
  "name": "Hidden Step"
source:
- [Tome of Beasts 3](https://koboldpress.com/kpstore/product/tome-of-beasts-3-for-5th-edition/)
```
