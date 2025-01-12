---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob3
- monster/cr/4
- monster/size/Large
- monster/type/Aberration
statblock: inline
aliases: ["dust-grazer", "Dust Grazer-tob3"]
---
# Dust Grazer Tob3
*Source: Tome of Beasts 3 Page 163*

```statblock
"dice": false
"name": "Dust Grazer Tob3"
"size": "Large"
"type": "Aberration"
"ac": !!int "12"
"ac_class": "natural armor"
"hp": !!int "105"
"hit_dice": "10d10+50"
"stats":
- !!int "19"
- !!int "7"
- !!int "20"
- !!int "2"
- !!int "7"
- !!int "2"
"speed": "walk 0 ft. fly 30 ft."
"senses": blindsight 120' (blind beyond), passive Perception 8
"skillsaves":
  "perception": !!int "-2"
"languages": "—"
"cr": "4"
"damage_immunities": "poison"
"traits":
- "desc": "Each creature within 20' of it when it dies: 14 (4d6) poison and infected with grazer spores disease (DC 14 Con not poisoned or infected). Creatures immune to poisoned condition are immune to this. Until disease is cured creature poisoned and can’t regain hp except magically. Every 24 hrs that elapse target: DC 14 Con save or take 7 (2d6) poison and its hp max is reduced by same. Reduction lasts until target finishes a long rest after disease is cured. Target dies if this reduces its hp max to 0. Two days after creature dies rises as dust grazer of its size growing to Large over the course of a week."
  "name": "Death Spores"
"actions":
- "desc": "Melee Weapon Attack: +6 to hit, 15 ft., one target, 11 (2d6+4) bludgeoning damage + 7 (2d6) acid. If target is a creature: grappled (escape DC 14) if grazer isn’t already grappling."
  "name": "Tendril"
- "desc": "Makes one Tendril attack vs. a Med or smaller creature it is grappling. If attack hits target is  also absorbed into grazer’s body and grapple ends. While absorbed creature is blinded and restrained has total cover vs. attacks and effects outside grazer and takes 7 (2d6) acid at start of each of grazer’s turns. Grazer can have only one creature absorbed at a time. If grazer takes 10+ damage on a single turn from absorbed creature grazer must make DC 15 Con save at end of that turn or expel the creature which falls prone in a space within 5 ft. of grazer. If grazer is flying expelled creature takes normal fall damage. If grazer dies absorbed creature no longer restrained but has disadvantage on save vs. grazer Death Spores."
  "name": "Absorb"
source:
- [Tome of Beasts 3](https://koboldpress.com/kpstore/product/tome-of-beasts-3-for-5th-edition/)
```
