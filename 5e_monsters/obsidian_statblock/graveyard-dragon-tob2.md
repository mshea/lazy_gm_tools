---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob2
- monster/cr/7
- monster/size/Large
- monster/type/Undead
statblock: inline
aliases: ["graveyard-dragon", "Graveyard Dragon-tob2"]
---
# Graveyard Dragon Tob2
*Source: Tome of Beasts 2 Page 183*

```statblock
"dice": false
"name": "Graveyard Dragon Tob2"
"size": "Large"
"type": "Undead"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "127"
"hit_dice": "15d10+45"
"stats":
- !!int "16"
- !!int "10"
- !!int "17"
- !!int "10"
- !!int "11"
- !!int "13"
"speed": "walk 40 ft."
"senses": blindsight 30 ft., darkvision 120 ft., passive Perception 13
"skillsaves":
  "perception": !!int "3"
  "stealth": !!int "3"
"languages": "Common, Draconic"
"cr": "7"
"damage_immunities": "poison"
"damage_resistances": "necrotic"
"traits":
- "desc": "At the start of each of the graveyard dragon’s turns, each creature within 5 feet of it takes 4 (1d8) damage of the type dealt by the dragon’s breath weapon."
  "name": "Elemental Aura"
- "desc": "The graveyard dragon has resistance to the type of damage dealt by its breath weapon."
  "name": "Elemental Resistance"
- "desc": "While the graveyard dragon remains motionless, it is indistinguishable from a pile of dragon bones."
  "name": "False Appearance"
- "desc": "As a bonus action, the graveyard dragon can rearrange its bone structure to fit into a space as narrow as 1 foot wide without squeezing. It can use a bonus action to reassemble itself into its normal form. While in this compressed form, it can’t make melee weapon attacks."
  "name": "Reassemble Bones"
"actions":
- "desc": "The graveyard dragon makes three attacks: one with its bite and two with its claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 14 (2d10 + 3) piercing damage plus 4 (1d8) damage of the type dealt by the dragon’s breath weapon."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage."
  "name": "Claw"
- "desc": "The dragon releases a breath weapon that corresponds to the type of dragon it was in life. Each creature in the area must make a DC 14 Dexterity saving throw, taking 40 (9d8) damage of the corresponding type on a failed save, or half as much damage on a successful one. \n* Black. Acid damage in a 30-foot line that is 5 feet wide. \n* Blue. Lightning damage in a 30-foot line that is 5 feet wide. \n* Green. Poison damage in a 30-foot cone. \n* Red. Fire damage in a 30-foot cone. \n* White. Cold damage in a 30-foot cone."
  "name": "Breath Weapon (Recharge 5-6)"
source:
- [Tome of Beasts 2](https://koboldpress.com/kpstore/product/tome-of-beasts-2-for-5th-edition)
```
