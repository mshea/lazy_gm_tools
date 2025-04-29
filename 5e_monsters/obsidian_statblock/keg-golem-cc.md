---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/cc
- monster/cr/3
- monster/size/Medium
- monster/type/Construct
statblock: inline
aliases: ["keg-golem", "Keg Golem-cc"]
---
# Keg Golem Cc
*Source: Creature Codex Page 201*

```statblock
"dice": false
"name": "Keg Golem Cc"
"size": "Medium"
"type": "Construct"
"ac": !!int "11"
"ac_class": "natural armor"
"hp": !!int "45"
"hit_dice": "6d8+18"
"stats":
- !!int "16"
- !!int "10"
- !!int "16"
- !!int "8"
- !!int "7"
- !!int "3"
"speed": "walk 30 ft."
"senses": darkvision 60 ft., passive Perception 8
"skillsaves":
"languages": "understands the languages of its creator but can't speak"
"cr": "3"
"damage_immunities": "poison, psychic"
"damage_resistances": "bludgeoning, piercing, and slashing from nonmagical attacks not made with adamantine"
"traits":
- "desc": "A keg golem holds 20 gallons of ale. If it runs out of ale or empties itself from ale blast, the golem's speed is reduced to 0 and it has disadvantage on all attack rolls until it is refilled with at least 1 gallon of ale."
  "name": "Empty Keg"
- "desc": "The keg golem is immune to any spell or effect that would alter its form."
  "name": "Immutable Form"
- "desc": "The keg golem has advantage on saving throws against spells and other magical effects."
  "name": "Magic Resistance"
- "desc": "If the keg golem moves at least 15 feet straight toward a creature and then hits it with a slam attack on the same turn, that target must succeed on a DC 13 Dexterity saving throw or be knocked prone. If the target is prone, the keg golem can make one slam attack against it as a bonus action."
  "name": "Rolling Charge"
"actions":
- "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) bludgeoning damage."
  "name": "Slam"
- "desc": "The keg golem shoots a 1 gallon jet of ale in a 15-foot line that is 5 feet wide. Each creature in that line must make a DC 13 Constitution saving throw. On a failure, a target takes 9 (2d8) poison damage and is poisoned for 1 minute. On a success, a target takes half the damage and isn't poisoned. A poisoned creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
  "name": "Ale Blast (Recharge 5-6)"
source:
- [Creature Codex](https://koboldpress.com/kpstore/product/creature-codex-for-5th-edition-dnd)
```
