---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/cc
- monster/cr/9
- monster/size/Large
- monster/type/Undead
statblock: inline
aliases: ["kulmking", "Külmking-cc"]
---
# Külmking Cc
*Source: Creature Codex Page 244*

```statblock
"dice": false
"name": "Külmking Cc"
"size": "Large"
"type": "Undead"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "127"
"hit_dice": "15d10+45"
"stats":
- !!int "17"
- !!int "15"
- !!int "16"
- !!int "12"
- !!int "18"
- !!int "17"
"speed": "walk 60 ft."
"senses": darkvision 120 ft., passive Perception 18
"skillsaves":
  "perception": !!int "8"
"languages": "Common"
"cr": "9"
"damage_immunities": "necrotic, poison"
"damage_resistances": "cold, lightning; bludgeoning, piercing, and slashing from nonmagical attacks"
"traits":
- "desc": "If the külmking moves through another creature, it can use a bonus action to corrupt that creature's soul. The target creature must make a DC 16 Charisma saving throw. A creature paralyzed by the külmking has disadvantage on this saving throw. \n\nOn a failed save, a creature suffers from terrible and violent thoughts and tendencies. Over the course of 2d4 days, its alignment shifts to chaotic evil. A creature that dies during this time, or after this shift is complete, rises 24 hours later as a külmking. The corruption can be reversed by a remove curse spell or similar magic used before the creature's death. \n\nOn a success, a creature is immune to the külmking's Corruption for the next 24 hours."
  "name": "Corruption"
- "desc": "The külmking can pass through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object."
  "name": "Incorporeal Movement"
- "desc": "If the külmking moves at least 20 feet straight toward a creature and then hits it with a hooves attack on the same turn, that target must succeed on a DC 16 Strength saving throw or be knocked prone. If the target is prone, the külmking can make one hooves attack against it as a bonus action."
  "name": "Trampling Charge"
"actions":
- "desc": "The külmking makes two claw attacks and one bite or hooves attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 12 (2d8 + 3) piercing damage. If the target is a creature that is not undead, it must make a DC 16 Constitution saving throw or take 12 (2d8 + 3) necrotic damage. The külmking regains hp equal to the amount of necrotic damage dealt."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage. If the target is not undead, it must succeed on a DC 16 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
  "name": "Claws"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (3d6 + 3) bludgeoning damage."
  "name": "Hooves"
source:
- [Creature Codex](https://koboldpress.com/kpstore/product/creature-codex-for-5th-edition-dnd)
```
