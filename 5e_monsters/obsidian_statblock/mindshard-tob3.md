---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob3
- monster/cr/4
- monster/size/Small
- monster/type/Aberration
statblock: inline
aliases: ["mindshard", "Mindshard-tob3"]
---
# Mindshard Tob3
*Source: Tome of Beasts 3 Page 271*

```statblock
"dice": false
"name": "Mindshard Tob3"
"size": "Small"
"type": "Aberration"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "81"
"hit_dice": "18d6+18"
"stats":
- !!int "1"
- !!int "16"
- !!int "12"
- !!int "11"
- !!int "15"
- !!int "19"
"speed": "walk 0 ft. fly 40 ft."
"senses": blindsight 60' (blind beyond), passive Perception 12
"skillsaves":
  "perception": !!int "2"
"languages": "Deep Speech, telepathy 60'"
"cr": "4"
"damage_immunities": "poison"
"traits":
- "desc": "When a charmed creature enters a space within 15 ft. of the mindshard on a turn or starts its turn within 15 ft. of the mindshard that creature takes 7 (2d6) psychic."
  "name": "Mindleech Aura"
- "desc": "Is invisible to creatures more than 60' away from it."
  "name": "Translucent"
"actions":
- "desc": "Two Refracted Light Beam attacks."
  "name": "Multiattack"
- "desc": "Melee or Ranged Spell Attack: +6 to hit 5 ft. or range 60' one target 10 (2d6+3) radiant."
  "name": "Refracted Light Beam"
- "desc": "Bends light toward a point it can see within 60' of it creating a colorful pattern on that point. Each creature within 20' of that point: 14 (4d6) psychic and is charmed and incapacitated for 1 min (DC 14 Wis half damage and isn’t charmed or incapacitated). A charmed and incapacitated creature can re-save at end of each of its turns success ends effect on itself."
  "name": "Light Construction (Recharge 5–6)"
- "desc": "Pulls a Humanoid with 0 hp into its body refracting creature into fragments of itself. Humanoid dies and 2d4 cultists appear in unoccupied spaces within 15 ft. of mindshard. The cultists which share Humanoid’s appearance and memories act as allies of mindshard and obey its telepathic commands. A Humanoid must have an Int score of 5 or higher to be refracted."
  "name": "Refract Mind (1/Day)"
"reactions":
- "desc": "When a creature the mindshard can see within 30' of it hits it with an attack that creature must make DC 14 Cha save or be charmed until end of its next turn."
  "name": "Enthralling Defense"
source:
- [Tome of Beasts 3](https://koboldpress.com/kpstore/product/tome-of-beasts-3-for-5th-edition/)
```
