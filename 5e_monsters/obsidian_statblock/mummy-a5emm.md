---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/a5emm
- monster/cr/3
- monster/size/Medium
- monster/type/Undead
statblock: inline
aliases: ["mummy-a5e", "Mummy-a5emm"]
---
# Mummy A5Emm
*Source: A5e Monstrous Menagerie Page 338*

```statblock
"dice": false
"name": "Mummy A5Emm"
"size": "Medium"
"type": "Undead"
"ac": !!int "11"
"ac_class": ""
"hp": !!int "67"
"hit_dice": "9d8+27"
"stats":
- !!int "16"
- !!int "8"
- !!int "16"
- !!int "10"
- !!int "10"
- !!int "12"
"speed": "walk 20 ft."
"senses": darkvision 60 ft., passive Perception 10
"skillsaves":
"languages": "the languages it knew in life"
"cr": "3"
"damage_immunities": "necrotic, poison"
"damage_resistances": "damage from nonmagical weapons"
"traits":
- "desc": "After taking fire damage, the mummy catches fire and takes 5 (1d10) ongoing fire damage if it isnt already suffering ongoing fire damage. A creature can use an action to extinguish this fire."
  "name": "Flammable"
- "desc": "A mummys touch inflicts a dreadful curse called mummy rot. A cursed creature can't regain hit points, and its hit point maximum decreases by an amount equal to the creatures total number of Hit Dice for every 24 hours that elapse. If this curse reduces the targets hit point maximum to 0, the target dies and crumbles to dust. Remove curse and similar magic ends the curse."
  "name": "Curse: Mummy Rot"
"actions":
- "desc": "The mummy uses Dreadful Glare and then attacks with its rotting fist."
  "name": "Multiattack"
- "desc": "The mummy targets a creature within 60 feet. The target makes a DC 11 Wisdom saving throw. On a failure  it is magically frightened until the end of the mummys next turn. If the target fails the save by 5 or more  it is paralyzed for the same duration. A target that succeeds on the saving throw is immune to the Dreadful Glare of mummies (but not mummy lords) for 24 hours."
  "name": "Dreadful Glare (Gaze)"
- "desc": "Melee Weapon Attack: +5 to hit  reach 5 ft.  one target. Hit: 10 (2d6 + 3) bludgeoning damage plus 10 (3d6) necrotic damage. If the target is a creature  it makes a DC 13 Constitution saving throw. On a failure  it is cursed with Mummy Rot."
  "name": "Rotting Fist"
source:
- [A5e Monstrous Menagerie](https://enpublishingrpg.com/products/level-up-monstrous-menagerie-a5e)
```
