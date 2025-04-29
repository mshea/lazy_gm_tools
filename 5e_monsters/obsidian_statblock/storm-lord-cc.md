---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/cc
- monster/cr/13
- monster/size/Huge
- monster/type/Elemental
statblock: inline
aliases: ["storm-lord", "Storm Lord-cc"]
---
# Storm Lord Cc
*Source: Creature Codex Page 139*

```statblock
"dice": false
"name": "Storm Lord Cc"
"size": "Huge"
"type": "Elemental"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "161"
"hit_dice": "17d12+51"
"stats":
- !!int "20"
- !!int "18"
- !!int "16"
- !!int "12"
- !!int "14"
- !!int "18"
"speed": "fly 50 ft. hover True ft. walk 50 ft."
"saves":
  "Strength": !!int "10"
  "Constitution": !!int "8"
  "Wisdom": !!int "7"
"senses": darkvision 120 ft., passive Perception 17
"skillsaves":
  "athletics": !!int "10"
  "nature": !!int "6"
  "perception": !!int "7"
"languages": "Aquan"
"cr": "13"
"damage_immunities": "poison"
"damage_resistances": "acid, lightning, thunder; bludgeoning, piercing, and slashing from nonmagical attacks"
"traits":
- "desc": "The storm lord is surrounded in a 120-foot-radius by a ferocious storm. The storm imposes disadvantage on ranged weapon attack rolls and Wisdom (Perception) checks based on sight or hearing within the area. The storm lord's own senses and attacks are not impaired by this trait. \n\nThe tempest extinguishes open flames and disperses fog. A flying creature in the tempest must land at the end of its turn or fall. \n\nEach creature that starts its turn within 30 feet of the storm lord must succeed on a DC 16 Strength saving throw or be pushed 15 feet away from the storm lord. Any creature within 30 feet of the storm lord must spend 2 feet of movement for every 1 foot it moves when moving closer to the storm lord."
  "name": "Tempest"
"actions":
- "desc": "The storm lord makes two slam attacks or two lightning bolt attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 29 (7d6 + 5) bludgeoning damage."
  "name": "Slam"
- "desc": "Ranged Spell Attack: +9 to hit, range 60 ft., one target. Hit: 31 (7d8) lightning damage."
  "name": "Lightning Bolt"
- "desc": "The storm lord creates a peal of ear-splitting thunder. Each creature within 30 feet of the storm lord must make a DC 17 Constitution saving throw. On a failure, a target takes 54 (12d8) thunder damage and is deafened. On a success, a target takes half the damage but isn't deafened. The deafness lasts until it is lifted by the lesser restoration spell or similar magic."
  "name": "Thunder Clap (Recharge 5-6)"
source:
- [Creature Codex](https://koboldpress.com/kpstore/product/creature-codex-for-5th-edition-dnd)
```
