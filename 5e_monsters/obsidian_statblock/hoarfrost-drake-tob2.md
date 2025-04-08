---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob2
- monster/cr/2
- monster/size/Medium
- monster/type/Dragon
statblock: inline
aliases: ["hoarfrost-drake", "Hoarfrost Drake-tob2"]
---
# Hoarfrost Drake Tob2
*Source: Tome of Beasts 2 Page 123*

```statblock
"dice": false
"name": "Hoarfrost Drake Tob2"
"size": "Medium"
"type": "Dragon"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "52"
"hit_dice": "8d8+16"
"stats":
- !!int "9"
- !!int "15"
- !!int "14"
- !!int "10"
- !!int "13"
- !!int "10"
"speed": "fly 30 ft. walk 20 ft."
"senses": darkvision 90 ft., passive Perception 13
"skillsaves":
  "perception": !!int "3"
  "stealth": !!int "4"
"languages": "Common, Draconic"
"cr": "2"
"damage_immunities": "cold"
"traits":
- "desc": "The hoarfrost drake can move across and climb icy surfaces without needing to make an ability check. Additionally, difficult terrain composed of ice or snow doesn’t cost it extra movement."
  "name": "Ice Walk"
- "desc": "The hoarfrost drake has advantage on ability checks and saving throws made to escape a grapple."
  "name": "Icy Scales"
"actions":
- "desc": "The hoarfrost drake makes three attacks: one with its bite and two with its claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage plus 2 (1d4) cold damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) slashing damage."
  "name": "Claw"
- "desc": "The hoarfrost drake creates a cloud of freezing fog that rimes everything in frost. Each creature within 20 feet of it must make a DC 14 Constitution saving throw. On a failure, the target takes 14 (4d6) cold damage and must succeed on a DC 12 Dexterity saving throw or drop whatever it’s holding. On a success, the target takes half the damage and doesn’t drop what it’s holding.\n\nThe area becomes difficult terrain until the end of the hoarfrost drake’s next turn. A creature that enters the area or ends its turn there must succeed on a DC 14 Dexterity saving throw or fall prone."
  "name": "Cloud of Riming Ice (Recharge 5-6)"
"reactions":
- "desc": "When a creature grapples the drake, the drake can immediately attempt to escape. If it succeeds, it can make a bite attack against the creature that grappled it."
  "name": "Retaliatory Slip"
source:
- [Tome of Beasts 2](https://koboldpress.com/kpstore/product/tome-of-beasts-2-for-5th-edition)
```
