---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob2
- monster/cr/6
- monster/size/Medium
- monster/type/Aberration
statblock: inline
aliases: ["primal-oozer", "Primal Oozer-tob2"]
---
# Primal Oozer Tob2
*Source: Tome of Beasts 2 Page 297*

```statblock
"dice": false
"name": "Primal Oozer Tob2"
"size": "Medium"
"type": "Aberration"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "112"
"hit_dice": "15d8+45"
"stats":
- !!int "18"
- !!int "13"
- !!int "16"
- !!int "6"
- !!int "15"
- !!int "5"
"speed": "walk 30 ft. climb 10 ft. swim 20 ft."
"senses": darkvision 60 ft., passive Perception 12
"skillsaves":
"languages": "understands Common but can’t speak"
"cr": "6"
"damage_immunities": "acid"
"damage_resistances": "piercing"
"traits":
- "desc": "A creature that touches the primal oozer or hits it with a melee attack while within 5 feet of it takes 3 (1d6) acid damage."
  "name": "Acidic Slime"
- "desc": "The primal oozer’s barbed tentacles inject the ooze plague disease into a creature if the creature fails its saving throw after being bitten twice in a row by the oozer. Until the disease is cured, the infected creature’s skin slowly becomes more ooze-like, and its hp maximum decreases by 5 (2d4) for every 24 hours that elapse. This reduction lasts until the disease is cured. The creature dies if the disease reduces its hp maximum to 0. A humanoid slain by this disease rises 24 hours later as an ochre jelly. The jelly isn’t under the primal oozer’s control, but it views the primal oozer as an ally."
  "name": "Ooze Plague"
- "desc": "The primal oozer has advantage on attack rolls against a creature if at least one of the primal oozer’s allies is within 5 feet of the creature and the ally isn’t incapacitated."
  "name": "Pack Tactics"
- "desc": "The primal oozer has advantage on ability checks and saving throws made to escape a grapple."
  "name": "Slimy Body"
"actions":
- "desc": "The primal oozer makes two bite attacks. If both attacks hit the same target, the target must make a DC 15 Constitution saving throw. On a failure, the target takes 7 (2d6) acid damage and contracts a disease (see the Ooze Plague trait). On a success, the target takes half the damage and doesn’t contract a disease."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage. If the target is a creature, it must succeed on a DC 15 Strength saving throw or be knocked prone."
  "name": "Bite"
source:
- [Tome of Beasts 2](https://koboldpress.com/kpstore/product/tome-of-beasts-2-for-5th-edition)
```
