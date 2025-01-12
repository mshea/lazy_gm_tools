---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob2
- monster/cr/16
- monster/size/Gargantuan
- monster/type/Aberration
statblock: inline
aliases: ["massive-malleable", "Massive Malleable-tob2"]
---
# Massive Malleable Tob2
*Source: Tome of Beasts 2 Page 254*

```statblock
"dice": false
"name": "Massive Malleable Tob2"
"size": "Gargantuan"
"type": "Aberration"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "248"
"hit_dice": "16d20+80"
"stats":
- !!int "26"
- !!int "8"
- !!int "20"
- !!int "21"
- !!int "17"
- !!int "10"
"speed": "climb 40 ft. walk 40 ft."
"senses": blindsight 120 ft. (blind beyond this radius), passive Perception 13
"skillsaves":
"languages": "all, telepathy 120 ft."
"cr": "16"
"damage_immunities": "psychic"
"traits":
- "desc": "As a bonus action, the massive malleable absorbs one minor, moderate, or major malleable within 5 feet of it into its body, regaining a number of hp equal to the absorbed malleable’s remaining hp. The massive malleable is affected by any conditions, spells, and other magical effects that were affecting the absorbed malleable."
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
- "desc": "The malleable makes four flesh tendril attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +13 to hit, reach 15 ft., one target. Hit: 25 (5d6 + 8) bludgeoning damage. If the target is a creature, it is grappled (escape DC 18)."
  "name": "Flesh Tendril"
- "desc": "One creature grappled by the malleable must make a DC 18 Intelligence saving throw, taking 72 (16d8) psychic damage on a failed save, or half as much damage on a successful one. The target’s hp maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies and becomes a minor malleable if this effect reduces its hp maximum to 0."
  "name": "Psychic Drain"
- "desc": "The massive malleable can split into sixteen minor malleables, four moderate malleables, or two major malleables. The new malleables’ hp totals are equal to the massive malleable’s hp total divided by the number of malleables created (rounded down) and are affected by any conditions, spells, and other magical effects that affected the massive malleable. The new malleables act on the same initiative count as the massive malleable and occupy any unoccupied space that previously contained the massive malleable."
  "name": "Separate Malleables"
"reactions":
- "desc": "When the massive malleable takes 30 damage or more from a single attack, it can choose to immediately use Separate Malleables. If it does so, the damage is divided evenly among the separate malleables it becomes."
  "name": "Sudden Separation"
source:
- [Tome of Beasts 2](https://koboldpress.com/kpstore/product/tome-of-beasts-2-for-5th-edition)
```
