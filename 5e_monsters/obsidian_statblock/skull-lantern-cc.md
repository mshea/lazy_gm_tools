---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/cc
- monster/cr/0.25
- monster/size/Tiny
- monster/type/Undead
statblock: inline
aliases: ["skull-lantern", "Skull Lantern-cc"]
---
# Skull Lantern Cc
*Source: Creature Codex Page 343*

```statblock
"dice": false
"name": "Skull Lantern Cc"
"size": "Tiny"
"type": "Undead"
"ac": !!int "13"
"ac_class": "None"
"hp": !!int "14"
"hit_dice": "4d4+4"
"stats":
- !!int "1"
- !!int "16"
- !!int "12"
- !!int "3"
- !!int "6"
- !!int "5"
"speed": "fly 30 ft. hover True ft. walk 0 ft."
"senses": passive Perception 8
"skillsaves":
"languages": "-"
"cr": "1/4"
"damage_immunities": "poison"
"traits":
- "desc": "When immersed in magical darkness, a skull lantern emits a brilliant flash of light powerful enough to dispel magical darkness in a 30-foot-radius sphere centered on itself, illuminating the area with bright light for 1d4 rounds. Afterwards, the light winks out and the skull falls to the ground, inert. In one week, the skull lantern has a 50% chance of becoming active again, though failure to do so means it will never reanimate."
  "name": "Flare"
- "desc": "The skull lantern sheds bright light in a 20-foot-radius and dim light for an additional 20 feet."
  "name": "Illumination"
- "desc": "If damage reduces the skull to 0 hp, it must make a Constitution saving throw with a DC of 5 + the damage taken, unless the damage is radiant or from a critical hit. On a success, the skull drops to 1 hp instead."
  "name": "Undead Fortitude"
"actions":
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4 + 3) piercing damage."
  "name": "Bite"
- "desc": "The skull lantern opens its mouth, releasing a searing beam of light in a 15-foot line that is 5 feet wide. Each creature in that line must make a DC 13 Dexterity saving throw, taking 7 (2d6) fire damage on a failed save, or half as much damage on a successful one."
  "name": "Fire Beam (Recharge 6)"
source:
- [Creature Codex](https://koboldpress.com/kpstore/product/creature-codex-for-5th-edition-dnd)
```
