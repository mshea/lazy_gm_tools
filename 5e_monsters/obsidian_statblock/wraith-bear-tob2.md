---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob2
- monster/cr/9
- monster/size/Large
- monster/type/Undead
statblock: inline
aliases: ["wraith-bear", "Wraith Bear-tob2"]
---
# Wraith Bear Tob2
*Source: Tome of Beasts 2 Page 375*

```statblock
"dice": false
"name": "Wraith Bear Tob2"
"size": "Large"
"type": "Undead"
"ac": !!int "13"
"ac_class": "None"
"hp": !!int "133"
"hit_dice": "14d10+56"
"stats":
- !!int "18"
- !!int "16"
- !!int "18"
- !!int "10"
- !!int "16"
- !!int "15"
"speed": "walk 0 ft. hover True ft. fly 60 ft."
"senses": darkvision 60 ft., passive Perception 17
"skillsaves":
  "perception": !!int "7"
  "survival": !!int "7"
"languages": "the languages it knew in life"
"cr": "9"
"damage_immunities": "necrotic, poison"
"damage_resistances": "acid, cold, fire, lightning, thunder; bludgeoning, piercing, and slashing from nonmagical attacks not made with silvered weapons"
"traits":
- "desc": "The wraith bear knows the direction to its nearest living relative on the same plane, but not the relative’s exact location."
  "name": "Detect Relatives"
- "desc": "The wraith bear regains 10 hp at the start of its turn if it has at least 1 hp and there are living plants within 5 feet of it. When the wraith bear regains hp, all plant life within 5 feet of it dies, and it can’t regain hp from those same plants again."
  "name": "Draining Regeneration"
- "desc": "The wraith bear can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object."
  "name": "Incorporeal Movement"
"actions":
- "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 31 (6d8 + 4) necrotic damage. The target must succeed on a DC 16 Constitution saving throw or its hp maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hp maximum to 0."
  "name": "Life Drain"
- "desc": "The bear lets out a supernatural roar in a 30-foot cone. Each creature in that area that can hear the bear must make a DC 15 Wisdom saving throw. On a failure, a creature is incapacitated for 1 minute. On a success, a creature is frightened until the end of its next turn. An incapacitated creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
  "name": "Baleful Roar (Recharge 6)"
source:
- [Tome of Beasts 2](https://koboldpress.com/kpstore/product/tome-of-beasts-2-for-5th-edition)
```
