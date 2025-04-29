---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/cc
- monster/cr/5
- monster/size/Medium
- monster/type/Undead
statblock: inline
aliases: ["dream-wraith", "Dream Wraith-cc"]
---
# Dream Wraith Cc
*Source: Creature Codex Page 135*

```statblock
"dice": false
"name": "Dream Wraith Cc"
"size": "Medium"
"type": "Undead"
"ac": !!int "14"
"ac_class": "None"
"hp": !!int "60"
"hit_dice": "8d8+24"
"stats":
- !!int "6"
- !!int "18"
- !!int "17"
- !!int "12"
- !!int "15"
- !!int "16"
"speed": "fly 60 ft. hover True ft. walk 0 ft."
"senses": darkvision 60 ft., passive Perception 12
"skillsaves":
  "stealth": !!int "7"
"languages": "Common"
"cr": "5"
"damage_immunities": "necrotic, poison"
"damage_resistances": "acid, cold, fire, lightning, thunder; bludgeoning, piercing, and slashing from nonmagical attacks"
"traits":
- "desc": "Any humanoid that dies at the hands of a dream wraith rises 1 hour later as a wraith under the dream wraith's control."
  "name": "Create Wraith"
- "desc": "The dream wraith can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object."
  "name": "Incorporeal Movement"
- "desc": "While in sunlight, the dream wraith has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) psychic damage, and the target must succeed on a DC 14 Charisma saving throw or fall unconscious."
  "name": "Sleep Touch"
- "desc": "The dream wraith targets an unconscious or sleeping creature within 5 feet of it. The creature must succeed on a DC 14 Constitution saving throw or be reduced to 0 hp. The dream wraith gains temporary hp for 1 hour equal to the amount of hp the creature lost."
  "name": "Steal Dreams"
"reactions":
- "desc": "When a creature the dream wraith can see starts its turn within 30 feet of the dream wraith, the dream wraith can create the illusion that it looks like that creature's most recently departed loved one. If the creature can see the dream wraith, it must succeed on a DC 14 Wisdom saving throw or be stunned until the end of its turn."
  "name": "Dreamer's Gaze"
source:
- [Creature Codex](https://koboldpress.com/kpstore/product/creature-codex-for-5th-edition-dnd)
```
