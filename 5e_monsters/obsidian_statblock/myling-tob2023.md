---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob2023
- monster/cr/2
- monster/size/Small
- monster/type/Undead
statblock: inline
aliases: ["myling-tob1-2023", "Myling-tob2023"]
---
# Myling Tob2023
*Source: Tome of Beasts 2023 Page 281*

```statblock
"dice": false
"name": "Myling Tob2023"
"size": "Small"
"type": "Undead"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "45"
"hit_dice": "10d6 + 10"
"stats":
- !!int "10"
- !!int "16"
- !!int "12"
- !!int "10"
- !!int "12"
- !!int "10"
"speed": "walk 10 ft. burrow 30 ft."
"senses": darkvision 60 ft., passive Perception 11
"skillsaves":
  "Stealth": !!int "5"
"languages": "the languages it knew in life"
"cr": "2"
"damage_immunities": "necrotic, poison"
"damage_resistances": "bludgeoning, piercing, and slashing from nonmagical attacks not made with silvered weapons"
"traits":
- "desc": "Each time the myling deals necrotic damage to a creature that is below half its hp maximum, the target’s Strength score is reduced by 1d4. The target dies if this reduces its Strength to 0. Otherwise, the reduction lasts until the target finishes a short or long rest."
  "name": "Enfeebling Attacks"
- "desc": "The myling doesn’t require air, food, drink, or sleep."
  "name": "Undead Nature"
"actions":
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage plus 7 (2d6) necrotic damage, and the target must succeed on a DC 13 Dexterity saving throw or the myling attaches to it. While attached, the myling sinks its teeth into the target and can’t attack, and at the start of each of the myling’s turns, the target takes 17 (5d6) necrotic damage."
  "name": "Claw"
"bonus_actions":
- "desc": "The creature to which the myling is attached is knocked prone, dragged into the ground, and buried just below the surface, ending the attachment. The buried creature is restrained and unable to breathe or stand up. A creature, including the buried creature, can take its action to free the buried creature by succeeding on a DC 13 Strength check."
  "name": "Bury Alive (Recharge 6)"
source:
- [Tome of Beasts 2023](https://koboldpress.com/kpstore/product/tome-of-beasts-1-2023-edition/)
```
