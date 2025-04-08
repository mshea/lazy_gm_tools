---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob3
- monster/cr/7
- monster/size/Huge
- monster/type/Aberration
statblock: inline
aliases: ["ley-wanderer", "Ley Wanderer-tob3"]
---
# Ley Wanderer Tob3
*Source: Tome of Beasts 3 Page 260*

```statblock
"dice": false
"name": "Ley Wanderer Tob3"
"size": "Huge"
"type": "Aberration"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "136"
"hit_dice": "16d12+32"
"stats":
- !!int "14"
- !!int "9"
- !!int "14"
- !!int "19"
- !!int "11"
- !!int "10"
"speed": "walk 10 ft. fly 40 ft."
"saves":
  "Strength": !!int "5"
  "Dexterity": !!int "2"
  "Intelligence": !!int "7"
"senses": darkvision 60', passive Perception 13
"skillsaves":
  "perception": !!int "0"
"languages": "all, telepathy 120'"
"cr": "7"
"damage_immunities": "psychic"
"damage_resistances": "nonmagic B/P/S attacks"
"traits":
- "desc": "Senses magic within 120' of it at will. This otherwise works like the detect magic spell but isn’t itself magical."
  "name": "Sense Magic"
"actions":
- "desc": "Three Slam or Psychic Lash attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +5 to hit, 5 ft., one target, 6 (1d8+2) bludgeoning damage + 9 (2d8) psychic."
  "name": "Slam"
- "desc": "Ranged Spell Attack: +7 to hit 5 ft. or range 120' one target 17 (3d8+4) psychic."
  "name": "Psychic Lash"
- "desc": "Emits a psychic burst that disrupts magic within 30' of it. Each creature in the area: 27 (6d8) psychic (DC 15 Int half). Each spell of 3rd level or lower in the area immediately ends and wanderer gains 5 temp hp for each spell ended this way."
  "name": "Dispelling Burst (Recharge 5–6)"
- "desc": "Magically teleports itself and up to six willing creatures holding hands with wanderer with items worn/carried to location it is familiar with up to 100 miles away. If destination is a location rich in magical energy (ex: ley line) can teleport up to 300 miles away."
  "name": "Teleport (3/Day)"
"reactions":
- "desc": "When a creature wanderer can see within 30' of it casts spell wanderer can absorb spell’s energy countering it. Works like counterspell except wanderer must always make spellcasting ability check no matter spell’s level. Its ability check for this is +7. If it successfully counters the spell it gains 5 temp hp/spell level."
  "name": "Absorb Spell"
"bonus_actions":
- "desc": "Drains the magic from an item it is holding. Magic item with charges loses 1d6 charges item with limited uses per day loses one daily use and single-use item such as potion or spell scroll is destroyed. All other magic items have their effects suppressed for 1 min. Wanderer gains 5 temp hp each time it drains a magic item. A drained item regains its magic after 24 hrs."
  "name": "Drain Magic Item"
source:
- [Tome of Beasts 3](https://koboldpress.com/kpstore/product/tome-of-beasts-3-for-5th-edition/)
```
