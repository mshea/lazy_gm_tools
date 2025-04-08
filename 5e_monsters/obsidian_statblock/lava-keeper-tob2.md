---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob2
- monster/cr/18
- monster/size/Huge
- monster/type/Elemental
statblock: inline
aliases: ["lava-keeper", "Lava Keeper-tob2"]
---
# Lava Keeper Tob2
*Source: Tome of Beasts 2 Page 235*

```statblock
"dice": false
"name": "Lava Keeper Tob2"
"size": "Huge"
"type": "Elemental"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "276"
"hit_dice": "24d12+120"
"stats":
- !!int "24"
- !!int "10"
- !!int "21"
- !!int "10"
- !!int "18"
- !!int "12"
"speed": "walk 40 ft. burrow 40 ft."
"senses": darkvision 60 ft., tremorsense 120 ft., passive Perception 20
"skillsaves":
  "history": !!int "12"
  "perception": !!int "10"
"languages": "Ignan, Terran"
"cr": "18"
"damage_immunities": "fire, poison"
"damage_resistances": "acid, lightning; bludgeoning, piercing, and slashing from nonmagical attacks"
"traits":
- "desc": "Each creature that starts its turn within 5 feet of the lava keeper must make a DC 19 Dexterity saving throw, taking 7 (2d6) fire damage on a failed save, or half as much damage on a successful one."
  "name": "Lava Dribble"
- "desc": "The lava keeper’s innate spellcasting ability is Wisdom (spell save DC 17). It can innately cast the following spells, requiring no material components:\nAt will: move earth, stone shape\n3/day each: wall of fire, wall of stone\n1/day each: conjure elemental (earth or fire elemental only), earthquake, fire storm"
  "name": "Innate Spellcasting"
"actions":
- "desc": "The lava keeper makes four slam attacks. Alternatively, it can use its Lava Lob twice."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 25 (4d8 + 7) bludgeoning damage."
  "name": "Slam"
- "desc": "Ranged Weapon Attack: +13 to hit, range 60/240 ft., one target. Hit: 21 (6d6) fire damage, and the target must succeed on a DC 19 Dexterity saving throw or take 10 (3d6) fire damage at the start of its next turn."
  "name": "Lava Lob"
- "desc": "The crater between the lava keeper’s shoulders erupts in a plume of fire, rock, and toxic smoke. Each creature within 60 feet of the lava keeper must make a DC 19 Constitution saving throw. On a failure, a creature takes 21 (6d6) bludgeoning damage and 21 (6d6) fire damage and becomes poisoned for 1 minute. On a success, a creature takes half the damage and isn’t poisoned. A poisoned target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. The eruption surrounds the lava keeper in a 20-foot-radius sphere of smoke, considered heavily obscured until the end of its next turn. A wind of moderate or greater speed (at least 10 miles per hour) disperses the smoke."
  "name": "Fumarole (Recharge 5-6)"
source:
- [Tome of Beasts 2](https://koboldpress.com/kpstore/product/tome-of-beasts-2-for-5th-edition)
```
