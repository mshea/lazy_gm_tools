---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob2023
- monster/cr/5
- monster/size/Medium
- monster/type/Construct
statblock: inline
aliases: ["fellforged-tob1-2023", "Fellforged-tob2023"]
---
# Fellforged Tob2023
*Source: Tome of Beasts 2023 Page 170*

```statblock
"dice": false
"name": "Fellforged Tob2023"
"size": "Medium"
"type": "Construct"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "135"
"hit_dice": "18d8 + 54"
"stats":
- !!int "14"
- !!int "12"
- !!int "17"
- !!int "12"
- !!int "14"
- !!int "15"
"speed": "walk 30 ft."
"saves":
  "Strength": !!int "5"
  "Wisdom": !!int "5"
"senses": darkvision 60 ft., passive Perception 12
"languages": "the languages it knew in life"
"cr": "5"
"damage_immunities": "necrotic, poison, psychic"
"damage_resistances": "acid, cold, fire, lightning"
"traits":
- "desc": "The fellforged doesn’t require air, food, drink, or sleep."
  "name": "Construct Nature"
- "desc": "The fellforged is inhabited and animated by a specter. If the fellforged fails a saving throw against an effect that turns undead, the specter is expelled into an unoccupied space within 5 feet of the fellforged with the hp total it had before it was expelled. The specter otherwise uses the statistics of a specter."
  "name": "Inhabiting Spirit"
- "desc": "While in sunlight, the fellforged has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- "desc": "The fellforged makes two Necrotic Slam attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 9 (2d6 + 2) bludgeoning damage plus 9 (2d8) necrotic damage. If the target is a creature, it must succeed on a DC 14 Constitution saving throw or its hp maximum is reduced by an amount equal to the necrotic damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hp maximum to 0."
  "name": "Necrotic Slam"
"bonus_actions":
- "desc": "The specter within the fellforged strains the construct’s body, sending broken springs and gears flying. Each creature within 5 feet of the fellforged must make a DC 14 Dexterity saving throw, taking 7 (2d6) piercing damage on a failed save, or half as much damage on a successful one. Each time the fellforged uses this bonus action, its speed is reduced by 5 feet, and it can’t use this bonus action if its speed is 0. Its speed returns to normal when it finishes a long rest."
  "name": "Burst Gears"
source:
- [Tome of Beasts 2023](https://koboldpress.com/kpstore/product/tome-of-beasts-1-2023-edition/)
```
