---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob3
- monster/cr/3
- monster/size/Large
- monster/type/Undead
statblock: inline
aliases: ["zombie-smokeplume", "Zombie, Smokeplume-tob3"]
---
# Zombie, Smokeplume Tob3
*Source: Tome of Beasts 3 Page 400*

```statblock
"dice": false
"name": "Zombie, Smokeplume Tob3"
"size": "Large"
"type": "Undead"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "68"
"hit_dice": "8d10+24"
"stats":
- !!int "18"
- !!int "8"
- !!int "16"
- !!int "3"
- !!int "6"
- !!int "5"
"speed": "walk 30 ft."
"senses": darkvision 60', passive Perception 8
"skillsaves":
  "perception": !!int "-2"
"languages": "[em/]"
"cr": "3"
"damage_immunities": "fire, poison"
"traits":
- "desc": "Can see through areas obscured by fire smoke and fog with o penalty."
  "name": "Firesight"
- "desc": "When it dies its body crumbles into smoldering coals releasing a great plume of smoke that fills 15 ft. radius sphere centered on zombie’s corpse and spreads around corners. Area is heavily obscured and difficult terrain. When creature enters area for first time on a turn or starts its turn there: 7 (2d6) poison (DC 14 Con half). Smoke lasts for 1 min or until a wind of moderate or greater speed (at least 10 miles per hr) disperses it."
  "name": "Smoldering Death"
- "desc": "If damage reduces the zombie to 0 hp it must make a Con save with DC of 5+the damage taken unless the damage is radiant or from a critical hit. On a success the zombie drops to 1 hp instead."
  "name": "Undead Fortitude"
- "desc": "Doesn't require air food drink or sleep."
  "name": "Undead Nature"
"actions":
- "desc": "Melee Weapon Attack: +6 to hit, 5 ft., one target, 11 (2d6+4) bludgeoning damage + 9 (2d8) fire."
  "name": "Slam"
- "desc": "The zombie breathes a cloud of smoke in a 15 ft. cone. Each creature in the area: 9 (2d8) fire and 7 (2d6) poison (DC 15 Con half). Smoke remains until the start of the zombie’s next turn and its area is heavily obscured."
  "name": "Smoke Breath (Recharge 5–6)"
source:
- [Tome of Beasts 3](https://koboldpress.com/kpstore/product/tome-of-beasts-3-for-5th-edition/)
```
