---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob2
- monster/cr/5
- monster/size/Medium
- monster/type/Aberration
statblock: inline
aliases: ["quoreq", "Quoreq-tob2"]
---
# Quoreq Tob2
*Source: Tome of Beasts 2 Page 304*

```statblock
"dice": false
"name": "Quoreq Tob2"
"size": "Medium"
"type": "Aberration"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "93"
"hit_dice": "11d8+44"
"stats":
- !!int "17"
- !!int "13"
- !!int "18"
- !!int "11"
- !!int "14"
- !!int "8"
"speed": "walk 40 ft."
"senses": blindsight 60 ft. (blind beyond this radius), passive Perception 15
"skillsaves":
  "perception": !!int "5"
"languages": "understands Common but can’t speak, telepathy 60 ft."
"cr": "5"
"damage_immunities": "poison"
"traits":
- "desc": "The quoreq regains 10 hp at the start of its turn. If the quoreq takes acid or fire damage, this trait doesn’t function at the start of the quoreq’s next turn. The quoreq dies only if it starts its turn with 0 hp and doesn’t regenerate."
  "name": "Regeneration"
- "desc": "A creature that starts its turn within 30 feet of the quoreq and can see it must succeed on a DC 14 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature’s saving throw is successful or the effect ends for it, the creature is immune to the quoreq’s Unsettling Appearance for the next 24 hours."
  "name": "Unsettling Appearance"
- "desc": "Whenever the quoreq suffers 10 or more piercing or slashing damage in a single round, its flesh opens up to reveal a set of gnashing teeth. For 1 minute, the quoreq can make a bite attack as a bonus action on each of its turns. Alternatively, the quoreq can use a bonus action to lose 5 hp and activate this trait."
  "name": "Whorling Jaws"
"actions":
- "desc": "The quoreq makes three claw attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage."
  "name": "Claw"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 12 (2d8 + 3) piercing damage. If the quoreq scores a critical hit, it rolls damage dice three times, instead of twice."
  "name": "Bite"
source:
- [Tome of Beasts 2](https://koboldpress.com/kpstore/product/tome-of-beasts-2-for-5th-edition)
```
