---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob2
- monster/cr/7
- monster/size/Large
- monster/type/Aberration
statblock: inline
aliases: ["ulnorya", "Ulnorya-tob2"]
---
# Ulnorya Tob2
*Source: Tome of Beasts 2 Page 354*

```statblock
"dice": false
"name": "Ulnorya Tob2"
"size": "Large"
"type": "Aberration"
"ac": !!int "14"
"ac_class": "None"
"hp": !!int "119"
"hit_dice": "14d10+42"
"stats":
- !!int "14"
- !!int "18"
- !!int "17"
- !!int "12"
- !!int "10"
- !!int "14"
"speed": "walk 50 ft. climb 30 ft."
"senses": darkvision 60 ft., passive Perception 16
"skillsaves":
  "acrobatics": !!int "7"
  "athletics": !!int "5"
  "perception": !!int "6"
  "stealth": !!int "10"
"languages": "—"
"cr": "7"
"damage_immunities": "poison"
"damage_resistances": "bludgeoning"
"traits":
- "desc": "The ulnorya is immune to any spell or effect that would alter its form."
  "name": "Immutable Form"
- "desc": "If the ulnorya didn’t move on its previous turn, it is invisible."
  "name": "Photoadaptive Hide"
"actions":
- "desc": "The ulnorya makes four attacks: one with its bite, one with its claw, and two with its tentacles."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) piercing damage and the target must succeed on a DC 15 Constitution saving throw or take 7 (2d6) poison damage. If the poison damage reduces the target to 0 hp, the target is stable but poisoned for 1 hour, even after regaining hp, and is paralyzed while poisoned in this way."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) piercing damage."
  "name": "Claw"
- "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 5 (1d4 + 3) bludgeoning damage."
  "name": "Tentacle"
- "desc": "The ulnorya separates itself into two identical copies for up to 1 hour. The new ulnoryas’ hp totals are equal to the original ulnorya’s hp total divided by 2 (rounded down), and each is affected by any conditions, spells, and other magical effects that affected the original ulnorya. The new ulnoryas otherwise retain the same statistics as the original, except neither has this action. The new ulnoryas act on the same initiative count as the original ulnorya and occupy any unoccupied spaces within 5 feet of the original ulnorya’s space.\n\nIf one ulnorya starts its turn within 5 feet of its other half, they can each use their reactions to recombine. The recombined ulnorya’s hp total is equal to the combined hp total of the two ulnoryas, and it is affected by any conditions, spells, and other magical effects currently affecting either of the combining ulnoryas. The ulnorya automatically recombines if both of its halves are still alive at the end of the hour. If only one ulnorya remains alive at the end of the hour, it gains this action after it finishes a long rest."
  "name": "Replicate (1/Day)"
source:
- [Tome of Beasts 2](https://koboldpress.com/kpstore/product/tome-of-beasts-2-for-5th-edition)
```
