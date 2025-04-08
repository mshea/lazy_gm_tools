---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob3
- monster/cr/10
- monster/size/Medium
- monster/type/Fey
statblock: inline
aliases: ["frostjack", "Frostjack-tob3"]
---
# Frostjack Tob3
*Source: Tome of Beasts 3 Page 189*

```statblock
"dice": false
"name": "Frostjack Tob3"
"size": "Medium"
"type": "Fey"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "135"
"hit_dice": "18d8+54"
"stats":
- !!int "15"
- !!int "18"
- !!int "16"
- !!int "11"
- !!int "17"
- !!int "13"
"speed": "walk 30 ft."
"senses": darkvision 60', passive Perception 17 
"skillsaves":
  "perception": !!int "3"
"languages": "Common, Elvish, Giant, Sylvan"
"cr": "10"
"damage_immunities": "cold"
"damage_resistances": "B/P/S damage from nonmagical attacks not made w/cold iron weapons"
"traits":
- "desc": "At the start of each of its turns each creature within 15 ft. of it: 5 (2d4) cold (DC 16 Con negates). For each min a creature spends within 15 ft. of it: suffer one level of exhaustion from cold exposure (DC 16 Con negates). Unprotected nonmagical flames within 15 ft. of it are extinguished. Any spells of 3rd level or lower that provide resistance to cold and that are within 15 ft. of it immediately end. Water freezes if it remains within 15 ft. of it for at least 1 min."
  "name": "Chilling Presence"
- "desc": "Move across and climb icy surfaces with o ability check. Difficult terrain composed of ice or snow doesn't cost it extra move."
  "name": "Ice Walk"
- "desc": "Advantage: spell/magic effect saves."
  "name": "Magic Resistance"
"actions":
- "desc": "Two Ice Blade attacks and one Winter’s Touch attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +8 to hit, 5 ft., one target, 8 (1d8+4) piercing damage + 14 (4d6) cold."
  "name": "Ice Blade"
- "desc": "Melee Weapon Attack: +8 to hit, 5 ft., one target, 6 (1d4+4) slashing damage + 7 (2d6) cold and target must make a DC 15 Con save. Fail: creature begins to freeze and has disadvantage on weapon attack rolls or ability checks that use Str or Dex. It must re-save at end of its next turn becoming incapacitated and unable to move or speak as it freezes solid on a failure or ending effect on success. Creature remains frozen until it spends 12+ hrs in a warm area thawing out or until it takes at least 10 fire."
  "name": "Winter’s Touch"
- "desc": "Icicles fly from its hand in 30' cone. Each creature in area: 17 (5d6) piercing damage and 17 (5d6) cold (DC 16 Dex half)."
  "name": "Icicle Barrage (Recharge 5–6)"
"reactions":
- "desc": "When it takes fire it gains resistance to fire including triggering attack until end of its next turn."
  "name": "Hoarfrost Warding (3/Day)"
source:
- [Tome of Beasts 3](https://koboldpress.com/kpstore/product/tome-of-beasts-3-for-5th-edition/)
```
