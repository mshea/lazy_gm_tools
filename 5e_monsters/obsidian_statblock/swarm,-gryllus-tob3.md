---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob3
- monster/cr/6
- monster/size/Large
- monster/type/Construct
statblock: inline
aliases: ["swarm-gryllus", "Swarm, Gryllus-tob3"]
---
# Swarm, Gryllus Tob3
*Source: Tome of Beasts 3 Page 361*

```statblock
"dice": false
"name": "Swarm, Gryllus Tob3"
"size": "Large"
"type": "Construct"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "110"
"hit_dice": "17d10+17"
"stats":
- !!int "14"
- !!int "18"
- !!int "13"
- !!int "6"
- !!int "13"
- !!int "10"
"speed": "walk 30 ft."
"senses": darkvision 60', passive Perception 14
"skillsaves":
  "perception": !!int "1"
"languages": "understands those of its creature but can’t speak"
"cr": "6"
"damage_resistances": "bludgeoning, piercing, slashing"
"traits":
- "desc": "Hp max is reduced by 1 every min it is more than 60' from its book. When hp max reaches 0 dies. If its book is destroyed or moved to another plane of existence separate from swarm must make DC 11 Con save or be reduced to 10 hp. Swarm can bind itself to new book by spending a short rest in contact with the new book."
  "name": "Book Bound"
- "desc": "Doesn’t require air food drink or sleep."
  "name": "Construct Nature"
- "desc": "Immune: form-altering spells/effects."
  "name": "Immutable Form"
- "desc": "Can spend half its move to enter/exit its book. While inside its book it is indistinguishable from illustrations on a page."
  "name": "In the Margins"
- "desc": "Can occupy another creature’s space and vice versa; can move through opening large enough for Tiny construct. Can’t regain hp or gain temp hp."
  "name": "Swarm"
"actions":
- "desc": "Two Go for the Knees or Go for the Eyes attacks. It can replace one attack with use of Timber."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +7 to hit 0' 1 tgt in the swarm’s space. 18 (4d8) slashing damage or 8 (2d4+3) slashing damage if swarm has half of its hp or fewer. Target must make DC 15 Con save or its speed is reduced by 10 ft. until end of its next turn."
  "name": "Go for the Knees"
- "desc": "Ranged Weapon Attack: +7 to hit 20/60' one target 18 (4d8) piercing damage or 8 (2d4+3) piercing damage if swarm has half of its hp or fewer. Target must make DC 15 Wis save or be blinded until end of its next turn."
  "name": "Go for the Eyes"
- "desc": "Calls out in synchronous tiny voices before chopping away at the feet of one creature in the swarm’s space. Target knocked prone (DC 15 Str negates). If target is knocked prone swarm can then make one Go for the Knees attack vs. it as a bonus action."
  "name": "Timber"
source:
- [Tome of Beasts 3](https://koboldpress.com/kpstore/product/tome-of-beasts-3-for-5th-edition/)
```
