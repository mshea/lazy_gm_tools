---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob3
- monster/cr/7
- monster/size/Large
- monster/type/Giant
statblock: inline
aliases: ["troll-breakwater", "Troll, Breakwater-tob3"]
---
# Troll, Breakwater Tob3
*Source: Tome of Beasts 3 Page 372*

```statblock
"dice": false
"name": "Troll, Breakwater Tob3"
"size": "Large"
"type": "Giant"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "105"
"hit_dice": "10d10+50"
"stats":
- !!int "18"
- !!int "14"
- !!int "20"
- !!int "9"
- !!int "14"
- !!int "7"
"speed": "walk 30 ft. swim 30 ft."
"senses": darkvision 60', passive Perception 15
"skillsaves":
  "perception": !!int "2"
"languages": "understands Giant but can’t speak"
"cr": "7"
"damage_resistances": "acid; nonmagic B/P/S attacks"
"traits":
- "desc": "Can breathe air and water."
  "name": "Amphibious"
- "desc": "Regains 10 hp at start of its turn. If it takes lightning or force this doesn’t work at its next turn start. Dies only if it starts turn with 0 hp and doesn’t regenerate."
  "name": "Regeneration"
"actions":
- "desc": "Three Slam or Water Blast attacks. If it hits one Large or smaller creature with two Slam attacks the target must make DC 15 Str save or be flung up to 15 ft. to an unoccupied space the troll can see and knocked prone."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +7 to hit, 5 ft., one target, 14 (3d6+4) bludgeoning damage."
  "name": "Slam"
- "desc": "Ranged Spell Attack: +5 to hit, 60 ft., one target, 11 (2d8+2) bludgeoning damage + 3 (1d6) cold. "
  "name": "Water Blast"
- "desc": "Pushes water surge in 30' line × 10 ft. wide. Each creature in line: 28 (8d6) bludgeoning damage and pushed up to 15 ft. from troll in direction following line (DC 15 Str half not pushed). Surge lasts until start of troll’s next turn and any creature in line must spend 2 feet of move per 1 foot it moves when moving closer to troll. If troll uses this while underwater creatures in line have disadvantage on the save and any creature in line must spend 4 feet of move per 1 foot it moves when moving closer to troll."
  "name": "Surge (Recharge 5–6)"
source:
- [Tome of Beasts 3](https://koboldpress.com/kpstore/product/tome-of-beasts-3-for-5th-edition/)
```
