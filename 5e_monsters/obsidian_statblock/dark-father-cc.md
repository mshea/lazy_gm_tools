---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/cc
- monster/cr/4
- monster/size/Large
- monster/type/Undead
statblock: inline
aliases: ["dark-father", "Dark Father-cc"]
---
# Dark Father Cc
*Source: Creature Codex Page 71*

```statblock
"dice": false
"name": "Dark Father Cc"
"size": "Large"
"type": "Undead"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "65"
"hit_dice": "10d8+18"
"stats":
- !!int "6"
- !!int "14"
- !!int "15"
- !!int "8"
- !!int "14"
- !!int "8"
"speed": "fly 20 ft. hover True ft. walk 40 ft."
"senses": darkvision 60 ft., passive Perception 12
"skillsaves":
  "stealth": !!int "4"
"languages": "the languages it knew in life"
"cr": "4"
"damage_immunities": "necrotic, poison"
"damage_resistances": "bludgeoning, piercing, and slashing from nonmagical attacks"
"traits":
- "desc": "The dark father has disadvantage on melee attack rolls against any creature that has all of its hp."
  "name": "Death Waits"
- "desc": "The dark father can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object."
  "name": "Incorporeal Movement"
- "desc": "When a creature within 30 feet of a dark father regains hp through any means other than resting, it must succeed on a DC 14 Constitution saving throw or take 3 (1d6) necrotic damage and have disadvantage on its next death saving throw."
  "name": "None May Stop Death"
"actions":
- "desc": "Melee Spell Attack. +4 to hit, reach 5 ft., one creature. Hit: 14 (4d6) necrotic damage. The target must succeed on a DC 14 Constitution saving throw or its hp maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hp maximum to 0."
  "name": "Life Drain"
- "desc": "The dark father targets a corpse it can see within 30 feet that has been dead for no longer than 1 hour. A stream of dark energy flows between the corpse and the dark father. At the end of the dark father's next turn, the dark father absorbs the corpse and it vanishes completely. Any worn items or possessions are unaffected. A corpse destroyed in this manner can't be retrieved other than by a wish spell or similar magic."
  "name": "Final Curtain"
"reactions":
- "desc": "When a spell from the evocation or necromancy school is cast within 30 feet of the dark father, the dark father can counter the spell with a successful ability check. This works like the counterspell spell with a +5 spellcasting ability check, except the dark father must make the ability check no matter the level of the spell."
  "name": "Banish Hope"
source:
- [Creature Codex](https://koboldpress.com/kpstore/product/creature-codex-for-5th-edition-dnd)
```
