---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob2
- monster/cr/10
- monster/size/Huge
- monster/type/Aberration
statblock: inline
aliases: ["major-malleable", "Major Malleable-tob2"]
---
# Major Malleable Tob2
*Source: Tome of Beasts 2 Page 254*

```statblock
"dice": false
"name": "Major Malleable Tob2"
"size": "Huge"
"type": "Aberration"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "218"
"hit_dice": "23d12+69"
"stats":
- !!int "22"
- !!int "8"
- !!int "17"
- !!int "19"
- !!int "16"
- !!int "10"
"speed": "walk 40 ft. climb 40 ft."
"senses": blindsight 90 ft. (blind beyond this radius), passive Perception 13
"skillsaves":
"languages": "all, telepathy 120 ft."
"cr": "10"
"damage_immunities": "psychic"
"traits":
- "desc": "As a bonus action, the major malleable absorbs one minor or moderate malleable within 5 feet of it into its body, regaining a number of hp equal to the absorbed malleable’s remaining hp. The major malleable is affected by any conditions, spells, and other magical effects that were affecting the absorbed malleable."
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
- "desc": "The malleable makes three flesh tendril attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 20 (4d6 + 6) bludgeoning damage. If the target is a Huge or smaller creature, it is grappled (escape DC 16)."
  "name": "Flesh Tendril"
- "desc": "One creature grappled by the malleable must make a DC 16 Intelligence saving throw, taking 45 (10d8) psychic damage on a failed save, or half as much damage on a successful one. The target’s hp maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies and becomes a minor malleable if this effect reduces its hp maximum to 0."
  "name": "Psychic Drain"
- "desc": "As long as the malleable is within 10 feet of one other major malleable, both malleables can use this action option at the same time to join together to create a massive malleable. The new malleable’s hp total is equal to the combined hp total of both major malleables, and it is affected by any conditions, spells, and other magical effects currently affecting either of the major malleables. The new malleable acts on the same initiative count as the malleables that formed it and occupies any unoccupied space that previously contained at least one of the malleables that formed it."
  "name": "Join Malleables"
- "desc": "The major malleable can split into eight minor malleables or two moderate malleables. The new malleables’ hp totals are equal to the major malleable’s hp total divided by the number of malleables created (rounded down) and are affected by any conditions, spells, and other magical effects that affected the major malleable. The new malleables act on the same initiative count as the major malleable and occupy any unoccupied space that previously contained the major malleable."
  "name": "Separate Malleables"
"reactions":
- "desc": "When the major malleable takes 20 damage or more from a single attack, it can choose to immediately use Separate Malleables. If it does so, the damage is divided evenly among the separate malleables it becomes."
  "name": "Sudden Separation"
source:
- [Tome of Beasts 2](https://koboldpress.com/kpstore/product/tome-of-beasts-2-for-5th-edition)
```
