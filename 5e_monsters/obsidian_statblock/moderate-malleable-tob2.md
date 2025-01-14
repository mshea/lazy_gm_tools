---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob2
- monster/cr/5
- monster/size/Large
- monster/type/Aberration
statblock: inline
aliases: ["moderate-malleable", "Moderate Malleable-tob2"]
---
# Moderate Malleable Tob2
*Source: Tome of Beasts 2 Page 254*

```statblock
"dice": false
"name": "Moderate Malleable Tob2"
"size": "Large"
"type": "Aberration"
"ac": !!int "12"
"ac_class": "natural armor"
"hp": !!int "136"
"hit_dice": "16d10+48"
"stats":
- !!int "18"
- !!int "8"
- !!int "16"
- !!int "17"
- !!int "15"
- !!int "10"
"speed": "climb 30 ft. walk 30 ft."
"senses": blindsight 60 ft. (blind beyond this radius), passive Perception 12
"skillsaves":
"languages": "all, telepathy 60 ft."
"cr": "5"
"damage_immunities": "psychic Condition Immunities blinded, prone"
"traits":
- "desc": "As a bonus action, the moderate malleable absorbs one minor malleable within 5 feet of it into its body, regaining a number of hp equal to the minor malleable’s remaining hp. The moderate malleable is affected by any conditions, spells, and other magical effects that were affecting the absorbed malleable."
  "name": "Absorb Malleable"
- "desc": "The malleable can move through a space as narrow as 1 inch wide without squeezing."
  "name": "Amorphous"
- "desc": "Any spell or effect that would alter the malleable’s form only alters it until the end of the malleable’s next turn. Afterwards, the malleable returns to its amorphous form. In addition, the malleable can use its action to change itself into any shape, but it always looks like an inside-out fleshy creature no matter the shape it takes. If it changes into the shape of a creature, it doesn’t gain any statistics or special abilities of that creature; it only takes on the creature’s basic shape and general appearance."
  "name": "Controlled Mutability"
- "desc": "Whenever the malleable is subjected to psychic damage, it takes no damage and instead regains a number of hp equal to the psychic damage dealt."
  "name": "Psychic Absorption"
- "desc": "The malleable can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
  "name": "Spider Climb"
"actions":
- "desc": "The malleable makes two flesh tendril attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 14 (3d6 + 4) bludgeoning damage. If the target is a Large or smaller creature, it is grappled (escape DC 14)."
  "name": "Flesh Tendril"
- "desc": "One creature grappled by the malleable must make a DC 14 Intelligence saving throw, taking 22 (5d8) psychic damage on a failed save, or half as much damage on a successful one. The target’s hp maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies and becomes a minor malleable if this effect reduces its hp maximum to 0."
  "name": "Psychic Drain"
- "desc": "As long as the malleable is within 10 feet of at least one other moderate malleable, each moderate malleable in range can use this action option at the same time to join together to create a larger malleable. The new malleable’s hp total is equal to the combined hp total of all the moderate malleables, and it is affected by any conditions, spells, and other magical effects currently affecting any of the moderate malleables. The new malleable acts on the same initiative count as the malleables that formed it and occupies any unoccupied space that previously contained at least one of the malleables that formed it. \n* Two moderate malleables can join to create one major malleable. \n* Four moderate malleables can join to create one massive malleable."
  "name": "Join Malleables"
- "desc": "The moderate malleable can split into four minor malleables. The new malleables’ hp totals are equal to the moderate malleable’s hp total divided by 4 (rounded down) and are affected by any conditions, spells, and other magical effects that affected the moderate malleable. The new malleables act on the same initiative count as the moderate malleable and occupy any unoccupied space that previously contained the moderate malleable."
  "name": "Separate Malleables"
"reactions":
- "desc": "When the moderate malleable takes 10 damage or more from a single attack, it can choose to immediately use Separate Malleables. If it does so, the damage is divided evenly among the separate malleables it becomes."
  "name": "Sudden Separation"
source:
- [Tome of Beasts 2](https://koboldpress.com/kpstore/product/tome-of-beasts-2-for-5th-edition)
```
