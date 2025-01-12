---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob2023
- monster/cr/2
- monster/size/Medium
- monster/type/Undead
statblock: inline
aliases: ["graythirster-tob1-2023", "Gray Thirster-tob2023"]
---
# Gray Thirster Tob2023
*Source: Tome of Beasts 2023 Page 221*

```statblock
"dice": false
"name": "Gray Thirster Tob2023"
"size": "Medium"
"type": "Undead"
"ac": !!int "13"
"ac_class": ""
"hp": !!int "52"
"hit_dice": "8d8 + 16"
"stats":
- !!int "12"
- !!int "16"
- !!int "15"
- !!int "6"
- !!int "12"
- !!int "14"
"speed": "walk 30 ft."
"senses": darkvision 60 ft., passive Perception 11
"skillsaves":
  "Stealth": !!int "5"
"languages": "understands the languages it knew in life but can’t speak"
"cr": "2"
"damage_immunities": "fire, poison"
"damage_resistances": "necrotic"
"traits":
- "desc": "A creature that starts its turn within 30 feet of the gray thirster must succeed on a DC 12 Constitution saving throw or suffer one level of exhaustion. On a successful saving throw, the creature is immune to the gray thirster’s Thirst Aura for the next 24 hours."
  "name": "Thirst Aura"
- "desc": "The gray thirster doesn’t require air, food, or sleep."
  "name": "Thirsting Dead Nature"
"actions":
- "desc": "The gray thirster makes two Claw attacks, or it makes one Claw attack and one Withering Turban attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (2d4 + 3) slashing damage."
  "name": "Claw"
- "desc": "Melee Weapon Attack: +5 to hit, reach 10 ft., one creature. Hit: 7 (1d8 + 3) necrotic damage. The target must succeed on a DC 12 Constitution saving throw or its hp maximum is reduced by an amount equal to the damage taken. The target has disadvantage on this saving throw if it failed the saving throw against the thirster’s Thirst Aura. This reduction lasts until the target finishes a long rest with no levels of exhaustion. The target dies if this effect reduces its hp maximum to 0."
  "name": "Withering Turban"
- "desc": "The gray thirster draws the moisture from containers and creatures around it. Nonmagical water and other liquids within 20 feet of the thirster that aren’t being worn or carried turn to dust. Each creature within 20 feet of the thirster that isn’t a Construct or Undead must make a DC 12 Constitution saving throw. On a failure, a creature takes 9 (2d8) necrotic damage and up to 5 gallons of nonmagical liquid it is wearing or carrying turn to dust. On a success, a creature takes half the damage, and nonmagical liquids it is wearing or carrying don’t turn to dust. Plants, Oozes, creatures with the Amphibious or Water Breathing trait, and creatures made mostly of water, such as water elementals or steam mephits, have disadvantage on the saving throw."
  "name": "Drought (1/Day)"
source:
- [Tome of Beasts 2023](https://koboldpress.com/kpstore/product/tome-of-beasts-1-2023-edition/)
```
