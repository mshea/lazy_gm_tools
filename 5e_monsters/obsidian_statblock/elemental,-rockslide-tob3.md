---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob3
- monster/cr/8
- monster/size/Large
- monster/type/Elemental
statblock: inline
aliases: ["elemental-rockslide", "Elemental, Rockslide-tob3"]
---
# Elemental, Rockslide Tob3
*Source: Tome of Beasts 3 Page 168*

```statblock
"dice": false
"name": "Elemental, Rockslide Tob3"
"size": "Large"
"type": "Elemental"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "147"
"hit_dice": "14d10+70"
"stats":
- !!int "22"
- !!int "8"
- !!int "20"
- !!int "5"
- !!int "10"
- !!int "5"
"speed": "walk 40 ft."
"senses": darkvision 60', tremorsense 30', passive Perception 10
"skillsaves":
  "perception": !!int "0"
"languages": "Terran"
"cr": "8"
"damage_resistances": "nonmagic B/P/S attacks"
"traits":
- "desc": "If it moves 20'+ straight to foe and hits with Slam attack on same turn target takes an extra 9 (2d8) bludgeoning damage. If the target is a creature it must make DC 16 Str save or be knocked prone. If the elemental used Nimble Separation before making this Slam attack the target has disadvantage on the save."
  "name": "Charge"
- "desc": "Doesn’t require air food drink or sleep."
  "name": "Elemental Nature"
- "desc": "Advantage on Dex (Stealth) checks made to hide in rocky terrain."
  "name": "Stone Camouflage"
"actions":
- "desc": "Three Slams or two Skipping Stones."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +9 to hit, 10 ft., one target, 15 (2d8+6) bludgeoning damage."
  "name": "Slam"
- "desc": "Ranged Weapon Attack: +9 to hit 20/60' one target 15 (2d8+6) bludgeoning damage and the stone bounces to another creature within 10 ft. of target. That creature must make DC 16 Dex save or take 9 (2d8) bludgeoning damage."
  "name": "Skipping Stone"
"bonus_actions":
- "desc": "Can briefly separate its components parts and take the Dash action. Opportunity attacks vs. it have disadvantage until start of its next turn."
  "name": "Nimble Separation"
source:
- [Tome of Beasts 3](https://koboldpress.com/kpstore/product/tome-of-beasts-3-for-5th-edition/)
```
