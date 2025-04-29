---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob3
- monster/cr/4
- monster/size/Huge
- monster/type/Plant
statblock: inline
aliases: ["tripwire-patch", "Tripwire Patch-tob3"]
---
# Tripwire Patch Tob3
*Source: Tome of Beasts 3 Page 371*

```statblock
"dice": false
"name": "Tripwire Patch Tob3"
"size": "Huge"
"type": "Plant"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "95"
"hit_dice": "10d12+30"
"stats":
- !!int "18"
- !!int "10"
- !!int "17"
- !!int "2"
- !!int "12"
- !!int "6"
"speed": "walk 10 ft. burrow 20 ft."
"senses": tremorsense 60', passive Perception 15
"skillsaves":
  "perception": !!int "1"
"languages": "—"
"cr": "4"
"traits":
- "desc": "When the tripwire patch reduces a creature to 0 hp nearby plants erupt with growth. Plants within 20' of the body become thick overgrown difficult terrain and all plants within a 2-mile radius centered on the point where the creature was killed become enriched for 7 days for each CR of the slain creature (minimum of 7 days) cumulatively increasing in duration each time the patch kills a creature. Enriched plants yield twice the normal amount of food when harvested."
  "name": "Bountiful Death"
- "desc": "While motionless indistinguishable from normal patch of foliage such as flowers or bushes."
  "name": "False Appearance"
"actions":
- "desc": "Two Bite attacks or one Bite attack and two Tripwire Vine attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, 5 ft., one creature,. 13 (2d8+4) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +6 to hit, 20 ft., one creature,. 7 (1d6+4) bludgeoning damage and the target must make DC 14 Str save or be knocked prone and pulled up to 15 ft. toward the tripwire patch."
  "name": "Tripwire Vine"
"reactions":
- "desc": "If a prone creature within 5 ft. of patch stands up from prone patch can make one Bite vs. it."
  "name": "No Escape"
source:
- [Tome of Beasts 3](https://koboldpress.com/kpstore/product/tome-of-beasts-3-for-5th-edition/)
```
