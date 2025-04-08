---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob2
- monster/cr/15
- monster/size/Huge
- monster/type/Aberration
statblock: inline
aliases: ["forest-emperor", "Forest Emperor-tob2"]
---
# Forest Emperor Tob2
*Source: Tome of Beasts 2 Page 155*

```statblock
"dice": false
"name": "Forest Emperor Tob2"
"size": "Huge"
"type": "Aberration"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "161"
"hit_dice": "14d12+70"
"stats":
- !!int "23"
- !!int "12"
- !!int "21"
- !!int "12"
- !!int "20"
- !!int "8"
"speed": "walk 30 ft. climb 30 ft. fly 60 ft."
"senses": darkvision 60 ft., passive Perception 20
"skillsaves":
  "nature": !!int "6"
  "perception": !!int "10"
  "stealth": !!int "6"
"languages": "Common, Giant"
"cr": "15"
"damage_immunities": "acid, cold; bludgeoning from nonmagical attacks"
"traits":
- "desc": "The forest emperor has advantage on Dexterity (Stealth) checks made to hide in forest terrain."
  "name": "Forest Camouflage"
- "desc": "The forest emperor has advantage on Wisdom (Perception) checks that rely on smell."
  "name": "Keen Smell"
- "desc": "The forest emperor constantly rattles its tail when in combat. Each creature that starts its turn within 60 feet of the forest emperor and that can hear it must succeed on a DC 18 Wisdom saving throw or become frightened until the start of its next turn. A creature that succeeds on two saving throws is unaffected by the forest emperor’s rattle for the next 24 hours."
  "name": "Rattle"
"actions":
- "desc": "The forest emperor makes two claw attacks and one tail attack. If both claws hit the same target, the target must succeed on a DC 18 Constitution saving throw or its hp maximum is reduced by 7 (2d6) and the forest emperor regains hp equal to this amount. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hp maximum to 0."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 16 (3d6 + 6) slashing damage plus 7 (2d6) acid damage."
  "name": "Acidic Claw"
- "desc": "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 17 (2d10 + 6) bludgeoning damage."
  "name": "Tail"
- "desc": "The forest emperor sprays a 60-foot cone of acid from its flower-ringed eye pits. Creatures in the path of this cone must make a DC 18 Dexterity saving throw, taking 42 (12d6) acid damage on a failed save, or half as much damage on a successful one."
  "name": "Toxic Nectar Spray (Recharge 5-6)"
source:
- [Tome of Beasts 2](https://koboldpress.com/kpstore/product/tome-of-beasts-2-for-5th-edition)
```
