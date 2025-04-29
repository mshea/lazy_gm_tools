---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/cc
- monster/cr/2
- monster/size/Medium
- monster/type/Construct
statblock: inline
aliases: ["sigilian", "Sigilian-cc"]
---
# Sigilian Cc
*Source: Creature Codex Page 335*

```statblock
"dice": false
"name": "Sigilian Cc"
"size": "Medium"
"type": "Construct"
"ac": !!int "14"
"ac_class": "None"
"hp": !!int "65"
"hit_dice": "10d8+20"
"stats":
- !!int "6"
- !!int "18"
- !!int "14"
- !!int "5"
- !!int "10"
- !!int "20"
"speed": "fly 60 ft. walk 0 ft."
"senses": darkvision 60 ft., passive Perception 12
"skillsaves":
  "perception": !!int "2"
  "stealth": !!int "6"
"languages": "understands Common but can't speak"
"cr": "2"
"damage_immunities": "poison"
"damage_resistances": "bludgeoning, piercing and slashing from nonmagical attacks"
"traits":
- "desc": "The sigilian can move through a space as narrow as 1 inch wide without squeezing."
  "name": "Amorphous"
- "desc": "At the start of each of its turns if the sigilian is inside a book that is not a spellbook, it removes the words from 3 (1d6) pages and regains 7 (2d6) hp."
  "name": "Cognivore"
- "desc": "The sigilian can move half its speed to enter a book. If the book is being worn or carried by a creature, that creature must succeed on a DC 14 Dexterity saving throw or the sigilian enters the book. A creature can take its action to find the sigilian in a book by succeeding on a DC 12 Intelligence (Investigation) check. If successful, a creature can use a bonus action to tear out the pages where the sigilian is hiding, forcing the sigilian out of the book and into an unoccupied space within 5 feet. Alternatively, a creature can destroy the book with a successful melee attack, dealing half of the damage to the sigilian and forcing it out of the book into an unoccupied space within 5 feet."
  "name": "Home Sweet Tome"
"actions":
- "desc": "The sigilian makes three attacks: one with its cut and two with its paste."
  "name": "Multiattack"
- "desc": "Ranged Weapon Attack: +6 to hit, range 60 ft., one target. Hit: 7 (1d6 + 4) slashing damage and the sigilian copies one of the target's weapon attacks for 1 minute."
  "name": "Cut"
- "desc": "Melee or Ranged Spell Attack: +7 to hit, reach 5 ft. or range 60 ft., one target. Hit: Damage die and type are determined by the copied weapon attack from Cut. Glowing runes in the image of that weapon appear as the sigilian attacks."
  "name": "Paste"
- "desc": "While inside a spellbook, the sigilian eats one spell of the highest level present then exits the spellbook. It chooses to either make its next Paste attack with a number of damage dice equal to the eaten spell's level or regain 3 hp per spell level. The sigilian can only eat one spell at a time and must use the devoured spell's energy before attempting to enter another spellbook. The eaten spell's entry is garbled, but the owner can repair it for half the gold and time usually spent to copy a spell. If the owner has the spell prepared, it can re-record the spell during a long rest for no additional cost."
  "name": "Devour Spell"
source:
- [Creature Codex](https://koboldpress.com/kpstore/product/creature-codex-for-5th-edition-dnd)
```
