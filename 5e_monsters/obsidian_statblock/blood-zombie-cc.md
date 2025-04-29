---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/cc
- monster/cr/2
- monster/size/Medium
- monster/type/Undead
statblock: inline
aliases: ["blood-zombie", "Blood Zombie-cc"]
---
# Blood Zombie Cc
*Source: Creature Codex Page 282*

```statblock
"dice": false
"name": "Blood Zombie Cc"
"size": "Medium"
"type": "Undead"
"ac": !!int "10"
"ac_class": "natural armor"
"hp": !!int "51"
"hit_dice": "6d8+24"
"stats":
- !!int "16"
- !!int "6"
- !!int "18"
- !!int "3"
- !!int "6"
- !!int "5"
"speed": "walk 20 ft."
"senses": darkvision 60 ft., passive Perception 8
"skillsaves":
"languages": "understands the languages it knew in life but can't speak"
"cr": "2"
"damage_immunities": "poison"
"traits":
- "desc": "A creature that touches the zombie or hits it with a melee attack while within 5 feet of it takes 4 (1d8) necrotic damage and the zombie gains temporary hp equal to that amount as it drains blood from the victim. If the zombie takes radiant damage or damage from a magic weapon, this trait doesn't function at the start of the zombie's next turn, although it retains any temporary hp it previously gained. It can add temporary hp gained from this trait to temporary hp gained from its slam attack. Its temporary hp can't exceed half its maximum hp."
  "name": "Blood Drain"
- "desc": "If damage reduces the zombie to 0 hp, it must make a Constitution saving throw with a DC of 5 + the damage taken, unless the damage is radiant or from a critical hit. On a success, the zombie drops to 1 hp instead."
  "name": "Undead Fortitude"
"actions":
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d10 + 2) bludgeoning damage plus 4 (1d8) necrotic damage. The zombie gains temporary hp equal to the necrotic damage taken."
  "name": "Slam"
source:
- [Creature Codex](https://koboldpress.com/kpstore/product/creature-codex-for-5th-edition-dnd)
```
