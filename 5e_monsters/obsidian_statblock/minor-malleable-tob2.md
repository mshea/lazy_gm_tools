---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob2
- monster/cr/1
- monster/size/Medium
- monster/type/Aberration
statblock: inline
aliases: ["minor-malleable", "Minor Malleable-tob2"]
---
# Minor Malleable Tob2
*Source: Tome of Beasts 2 Page 254*

```statblock
"dice": false
"name": "Minor Malleable Tob2"
"size": "Medium"
"type": "Aberration"
"ac": !!int "11"
"ac_class": "natural armor"
"hp": !!int "32"
"hit_dice": "5d8+10"
"stats":
- !!int "16"
- !!int "8"
- !!int "14"
- !!int "15"
- !!int "14"
- !!int "10"
"speed": "climb 30 ft. walk 30 ft."
"senses": blindsight 30 ft. (blind beyond this radius), passive Perception 12
"skillsaves":
"languages": "all, telepathy 60 ft."
"cr": "1"
"damage_immunities": "psychic"
"traits":
- "desc": "The malleable can move through a space as narrow as 1 inch wide without squeezing."
  "name": "Amorphous"
- "desc": "Any spell or effect that would alter the malleable’s form only alters it until the end of the malleable’s next turn. Afterwards, the malleable returns to its amorphous form. In addition, the malleable can use its action to change itself into any shape, but it always looks like an inside-out fleshy creature no matter the shape it takes. If it changes into the shape of a creature, it doesn’t gain any statistics or special abilities of that creature; it only takes on the creature’s basic shape and general appearance."
  "name": "Controlled Mutability"
- "desc": "Whenever the malleable is subjected to psychic damage, it takes no damage and instead regains a number of hp equal to the psychic damage dealt."
  "name": "Psychic Absorption"
- "desc": "The malleable can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
  "name": "Spider Climb"
"actions":
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) bludgeoning damage. If the target is a Medium or smaller creature, it is grappled (escape DC 12)."
  "name": "Flesh Tendril"
- "desc": "One creature grappled by the malleable must make a DC 12 Intelligence saving throw, taking 4 (1d8) psychic damage on a failed save, or half as much damage on a successful one. The target’s hp maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies and becomes a minor malleable if this effect reduces its hp maximum to 0."
  "name": "Psychic Drain"
- "desc": "As long as the malleable is within 10 feet of at least three other minor malleables, each minor malleable in range can use this action option at the same time to join together and create a larger malleable. The new malleable’s hp total is equal to the combined hp total of all the minor malleables. and it is affected by any conditions, spells, and other magical effects that affected any of the minor malleables. The new malleable acts on the same initiative count as the malleables that formed it and occupies any unoccupied space that previously contained at least one of the malleables that formed it. \n* Four minor malleables can join to create one moderate malleable. \n* Eight minor malleables can join to create one major malleable. \n* Sixteen minor malleables can join to create one massive malleable."
  "name": "Join Malleables"
source:
- [Tome of Beasts 2](https://koboldpress.com/kpstore/product/tome-of-beasts-2-for-5th-edition)
```
