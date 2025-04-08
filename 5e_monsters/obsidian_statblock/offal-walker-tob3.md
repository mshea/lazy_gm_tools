---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob3
- monster/cr/1
- monster/size/Medium
- monster/type/Undead
statblock: inline
aliases: ["offal-walker", "Offal Walker-tob3"]
---
# Offal Walker Tob3
*Source: Tome of Beasts 3 Page 296*

```statblock
"dice": false
"name": "Offal Walker Tob3"
"size": "Medium"
"type": "Undead"
"ac": !!int "12"
"ac_class": "natural armor"
"hp": !!int "37"
"hit_dice": "5d8+15"
"stats":
- !!int "13"
- !!int "11"
- !!int "16"
- !!int "5"
- !!int "6"
- !!int "7"
"speed": "walk 25 ft."
"senses": blindsight 60' (blind beyond), passive Perception 10
"skillsaves":
  "perception": !!int "-2"
"languages": "understands the languages of its creator but can’t speak"
"cr": "1"
"damage_immunities": "poison"
"traits":
- "desc": "Can have up to three gut lassos at a time. Each gut lasso can be attacked (AC 13; 5 hp; immunity to poison). Destroying a lasso deals no damage to the offal walker which can extrude a replacement gut lasso on its next turn. A gut lasso can also be broken if a creature takes an action and succeeds on a DC 13 Str check vs. it."
  "name": "Gut Lassos"
- "desc": "Doesn't require air food drink or sleep."
  "name": "Undead Nature"
"actions":
- "desc": "One Lasso attack for each gut lasso it has then uses Reel."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +3 to hit, 30 ft., one target, 3 (1d4+1) bludgeoning damage and the target is grappled (escape DC 13). Until this grapple ends the target is restrained and the offal walker can’t use the same gut lasso on another target."
  "name": "Lasso"
- "desc": "Melee Weapon Attack: +3 reach 5 ft. one target 8 (2d6+1) bludgeoning damage."
  "name": "Slam"
- "desc": "Pulls one creature grappled by it up to 25 ft. straight toward it."
  "name": "Reel"
source:
- [Tome of Beasts 3](https://koboldpress.com/kpstore/product/tome-of-beasts-3-for-5th-edition/)
```
