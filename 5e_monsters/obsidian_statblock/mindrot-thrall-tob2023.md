---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob2023
- monster/cr/3
- monster/size/Medium
- monster/type/Plant
statblock: inline
aliases: ["mindrotthrall-tob1-2023", "Mindrot Thrall-tob2023"]
---
# Mindrot Thrall Tob2023
*Source: Tome of Beasts 2023 Page 270*

```statblock
"dice": false
"name": "Mindrot Thrall Tob2023"
"size": "Medium"
"type": "Plant"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "82"
"hit_dice": "11d8 + 33"
"stats":
- !!int "15"
- !!int "14"
- !!int "17"
- !!int "11"
- !!int "14"
- !!int "6"
"speed": "walk 30 ft."
"senses": tremorsense 30 ft., passive Perception 12
"languages": "understands Common but can’t speak"
"cr": "3"
"damage_immunities": "acid, poison"
"traits":
- "desc": "A creature that starts its turn within 5 feet of a mindrot thrall must succeed on a DC 13 Constitution saving throw or become infected with the mindrot disease."
  "name": "Fungal Aura"
- "desc": "A creature infected with this disease manifests symptoms in 1d4 days after infection, which include migraines and muscle weakness. Until the disease is cured, at the end of each long rest, the infected creature must succeed on a DC 13 Constitution saving throw or take 9 (2d8) acid damage, and its hp maximum is reduced by that amount. This reduction lasts until the creature finishes a long rest after the disease is cured. The creature dies if the disease reduces its hp maximum to 0. One day after the creature dies, it rises as a mindrot thrall. A creature that succeeds on two saving throws recovers from the disease."
  "name": "Mindrot"
"actions":
- "desc": "The mindrot thrall makes two Claw attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 9 (2d6 + 2) slashing damage."
  "name": "Claw"
- "desc": "The thrall exhales a blast of acidic spores from its rotten lungs in a 15-foot cone. Each creature in the area must make a DC 13 Dexterity saving throw. On a failure, a creature takes 18 (4d8) acid damage and is infected with the mindrot disease (see the Mindrot trait). On a success, a creature takes half the damage and isn’t infected."
  "name": "Spore Breath (Recharge 4–6)"
source:
- [Tome of Beasts 2023](https://koboldpress.com/kpstore/product/tome-of-beasts-1-2023-edition/)
```
