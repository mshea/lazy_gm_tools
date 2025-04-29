---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/cc
- monster/cr/3
- monster/size/Medium
- monster/type/Undead
statblock: inline
aliases: ["mold-zombie", "Mold Zombie-cc"]
---
# Mold Zombie Cc
*Source: Creature Codex Page 394*

```statblock
"dice": false
"name": "Mold Zombie Cc"
"size": "Medium"
"type": "Undead"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "75"
"hit_dice": "10d8+30"
"stats":
- !!int "17"
- !!int "8"
- !!int "16"
- !!int "3"
- !!int "6"
- !!int "5"
"speed": "walk 20 ft."
"saves":
  "Strength": !!int "5"
"senses": darkvision 60 ft., passive Perception 8
"skillsaves":
"languages": "-"
"cr": "3"
"damage_immunities": "necrotic, poison"
"traits":
- "desc": "When the zombie is reduced to 0 hp and doesn't survive with its Undead Fortitude, it explodes in a cloud of spores. Each creature within 5 feet of the zombie must succeed on a DC 13 Constitution saving throw or take 9 (2d8) necrotic damage and contract iumenta pox (see Iumenta Pox sidebar)."
  "name": "Spore Death"
- "desc": "If damage reduces the zombie to 0 hp, it must make a Constitution saving throw with a DC of 5 + the damage taken, unless the damage is radiant or from a critical hit. On a success, the zombie drops to 1 hp instead."
  "name": "Undead Fortitude"
"actions":
- "desc": "The zombie makes two slam attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) bludgeoning damage plus 7 (2d6) necrotic damage."
  "name": "Slam"
- "desc": "The zombie breathes a cloud of spores in 15-foot cone. Each creature in that area must succeed on a DC 13 Constitution saving throw or take 10 (3d6) necrotic damage and contract iumenta pox (see Iumenta Pox sidebar)."
  "name": "Plague Breath (Recharge 6)"
source:
- [Creature Codex](https://koboldpress.com/kpstore/product/creature-codex-for-5th-edition-dnd)
```
