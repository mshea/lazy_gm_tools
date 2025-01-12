---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob2
- monster/cr/6
- monster/size/Huge
- monster/type/Undead
statblock: inline
aliases: ["ogrepede", "Ogrepede-tob2"]
---
# Ogrepede Tob2
*Source: Tome of Beasts 2 Page 275*

```statblock
"dice": false
"name": "Ogrepede Tob2"
"size": "Huge"
"type": "Undead"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "142"
"hit_dice": "15d12+45"
"stats":
- !!int "21"
- !!int "9"
- !!int "17"
- !!int "5"
- !!int "5"
- !!int "3"
"speed": "walk 40 ft. climb 20 ft."
"senses": darkvision 90 ft., passive Perception 7
"skillsaves":
"languages": "understands all languages it knew in life but can’t speak"
"cr": "6"
"damage_immunities": "poison"
"traits":
- "desc": "If the ogrepede moves at least 10 feet straight toward a creature and then hits it with a slam attack on the same turn, the attack is treated as though the ogrepede scored a critical hit, but attack rolls against the ogrepede have advantage until the start of its next turn."
  "name": "Haphazard Charge"
- "desc": "When the ogrepede scores a critical hit, each creature within 5 feet of the target must succeed on a DC 16 Wisdom saving throw or be frightened of the ogrepede for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature’s saving throw is successful or the effect ends for it, the creature is immune to the ogrepede’s Overwhelming Assault for the next 24 hours."
  "name": "Overwhelming Assault"
"actions":
- "desc": "The ogrepede makes two attacks: one with its bite and one with its slam."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one creature. Hit: 16 (2d10 + 5) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one creature. Hit: 12 (2d6 + 5) bludgeoning damage, or 8 (1d6 + 5) bludgeoning damage if the ogrepede has half its hp or fewer. If the ogrepede scores a critical hit, it rolls the damage dice three times, instead of twice."
  "name": "Slam"
source:
- [Tome of Beasts 2](https://koboldpress.com/kpstore/product/tome-of-beasts-2-for-5th-edition)
```
