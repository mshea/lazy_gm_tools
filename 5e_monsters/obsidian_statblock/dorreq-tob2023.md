---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob2023
- monster/cr/4
- monster/size/Medium
- monster/type/Aberration
statblock: inline
aliases: ["dorreq-tob1-2023", "Dorreq-tob2023"]
---
# Dorreq Tob2023
*Source: Tome of Beasts 2023 Page 110*

```statblock
"dice": false
"name": "Dorreq Tob2023"
"size": "Medium"
"type": "Aberration"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "93"
"hit_dice": "17d8 + 17"
"stats":
- !!int "19"
- !!int "19"
- !!int "13"
- !!int "11"
- !!int "8"
- !!int "10"
"speed": "walk 15 ft."
"senses": darkvision 60 ft., passive Perception 11
"skillsaves":
  "Intimidation": !!int "2"
  "Perception": !!int "1"
  "Stealth": !!int "8"
"languages": "Void Speech"
"cr": "4"
"damage_resistances": "acid, cold, lightning"
"traits":
- "desc": "The area around the dorreq is warped by its connection to the Void. A creature that starts its turn within 20 feet of the dorreq must succeed on a DC 14 Strength saving throw or its speed is halved until the start of its next turn."
  "name": "Void Warping"
"actions":
- "desc": "The dorreq makes one Bite attack and two Tentacles attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 8 (1d8 + 4) bludgeoning damage, and if the target is a Medium or smaller creature, it is grappled (escape DC 14) and pulled up to 5 feet closer to the dorreq. Until this grapple ends, the target is restrained. The dorreq can grapple up to two creatures at a time."
  "name": "Tentacles"
- "desc": "The dorreq emits a barely audible, vibrating thrum laced with Void energy. Each creature within 20 feet of the dorreq must make a DC 14 Constitution saving throw, taking 10 (3d6) thunder damage and 10 (3d6) necrotic damage on a failed save, or half as much damage on a successful one."
  "name": "Void Thrum (Recharge 5–6)"
"bonus_actions":
- "desc": "The dorreq teleports, along with any equipment it is wearing or carrying, up to 30 feet to an unoccupied space it can see. The origin and destination spaces must contain a stone or rocky surface, such as a cliff face or rocky terrain."
  "name": "Stone Step"
source:
- [Tome of Beasts 2023](https://koboldpress.com/kpstore/product/tome-of-beasts-1-2023-edition/)
```
