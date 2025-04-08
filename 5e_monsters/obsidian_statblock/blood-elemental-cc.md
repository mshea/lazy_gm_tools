---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/cc
- monster/cr/5
- monster/size/Large
- monster/type/Elemental
statblock: inline
aliases: ["blood-elemental", "Blood Elemental-cc"]
---
# Blood Elemental Cc
*Source: Creature Codex Page 138*

```statblock
"dice": false
"name": "Blood Elemental Cc"
"size": "Large"
"type": "Elemental"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "95"
"hit_dice": "10d10+40"
"stats":
- !!int "16"
- !!int "13"
- !!int "18"
- !!int "5"
- !!int "10"
- !!int "5"
"speed": "walk 30 ft."
"senses": darkvision 60 ft., passive Perception 10
"skillsaves":
"languages": "Primordial"
"cr": "5"
"damage_immunities": "necrotic, psychic"
"damage_resistances": "acid, fire; bludgeoning, piercing, and slashing from nonmagical attacks"
"traits":
- "desc": "Each time the elemental takes cold damage, its speed is reduced by 10 feet until the end of its next turn."
  "name": "Coagulate"
- "desc": "If the blood elemental becomes entirely submerged in water, it dissipates and dies instantly."
  "name": "Destroyed by Water"
- "desc": "The elemental can enter a hostile creature's space and stop there. It can move through a space as narrow as 1 inch wide without squeezing."
  "name": "Liquid Form"
"actions":
- "desc": "The elemental makes two slam attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 12 (2d8 + 3) bludgeoning damage."
  "name": "Slam"
- "desc": "Each creature in the elemental's space must make a DC 15 Constitution saving throw. On a failure, a creature takes 10 (3d6) necrotic damage and, if it is Large or smaller, it is grappled (escape DC 13). A grappled creature is restrained and unable to breathe. If the saving throw is successful, the creature is pushed out of the elemental's space. The elemental can grapple one Large creature or up to two Medium or smaller creatures at one time.\n\nAt the start of the elemental's turn, each target grappled by it takes 10 (3d6) necrotic damage. A creature within 5 feet of the elemental can use its action to make a DC 15 Strength check, freeing a grappled creature on a success. When Blood Drain deals 30 or more necrotic damage, the elemental grows in size as though affected by an enlarge/reduce spell. This increase in size lasts until the blood elemental finishes a long rest."
  "name": "Blood Drain (Recharge 4-6)"
source:
- [Creature Codex](https://koboldpress.com/kpstore/product/creature-codex-for-5th-edition-dnd)
```
