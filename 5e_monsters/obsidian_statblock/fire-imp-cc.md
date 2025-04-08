---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/cc
- monster/cr/0.5
- monster/size/Tiny
- monster/type/Fiend
statblock: inline
aliases: ["fire-imp", "Fire Imp-cc"]
---
# Fire Imp Cc
*Source: Creature Codex Page 103*

```statblock
"dice": false
"name": "Fire Imp Cc"
"size": "Tiny"
"type": "Fiend"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "14"
"hit_dice": "4d4+4"
"stats":
- !!int "5"
- !!int "14"
- !!int "12"
- !!int "10"
- !!int "10"
- !!int "14"
"speed": "fly 40 ft. walk 20 ft."
"senses": darkvision 120 ft., passive Perception 10
"skillsaves":
  "deception": !!int "3"
  "stealth": !!int "4"
"languages": "Common, Infernal"
"cr": "1/2"
"damage_immunities": "fire, poison"
"damage_resistances": "cold; bludgeoning, piercing, and slashing from nonmagical attacks not made with silver"
"traits":
- "desc": "Magical darkness doesn't impede the imp's darkvision."
  "name": "Devil's Sight"
- "desc": "Whenever the imp is subjected to fire damage, it takes no damage and instead regains a number of hp equal to the fire damage dealt."
  "name": "Fire Absorption"
- "desc": "As a bonus action, the imp casts the heat metal spell without expending any material components (spell save DC 12)."
  "name": "Heat Metal (1/Day)"
- "desc": "The imp has advantage on saving throws against spells and other magical effects."
  "name": "Magic Resistance"
"actions":
- "desc": "Melee Spell Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) fire damage and if the target is a flammable object that isn't being worn or carried, it also catches fire. If the target is a creature, it must succeed on a DC 12 Dexterity saving throw or take another 2 (1d4) fire damage at the start of its next turn."
  "name": "Fire Touch"
- "desc": "Ranged Spell Attack: +4 to hit, range 150 ft., one target. Hit: 5 (2d4) fire damage and if the target is a flammable object that isn't being worn or carried, it also catches fire."
  "name": "Hurl Flame"
source:
- [Creature Codex](https://koboldpress.com/kpstore/product/creature-codex-for-5th-edition-dnd)
```
