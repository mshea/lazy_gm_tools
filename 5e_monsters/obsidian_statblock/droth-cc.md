---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/cc
- monster/cr/12
- monster/size/Huge
- monster/type/Aberration
statblock: inline
aliases: ["droth", "Droth-cc"]
---
# Droth Cc
*Source: Creature Codex Page 333*

```statblock
"dice": false
"name": "Droth Cc"
"size": "Huge"
"type": "Aberration"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "230"
"hit_dice": "20d12+100"
"stats":
- !!int "18"
- !!int "9"
- !!int "20"
- !!int "14"
- !!int "16"
- !!int "20"
"speed": "climb 10 ft. walk 20 ft."
"senses": blindsight 60 ft., passive Perception 17
"skillsaves":
  "perception": !!int "7"
"languages": "all, telepathy 100 ft."
"cr": "12"
"damage_immunities": "acid"
"damage_resistances": "cold, fire"
"traits":
- "desc": "When the droth damages a creature, it absorbs a portion of that creature's knowledge and power. As a bonus action, it can recreate any action available to a creature it damaged within the last minute. This includes spells and actions with limited uses or with a recharge. This recreated action is resolved using the droth's statistics where applicable."
  "name": "Absorbent (3/Day)"
- "desc": "The droth, including its equipment, can move through a space as narrow as 1 inch wide without squeezing."
  "name": "Amorphous"
- "desc": "Any creature hostile to the droth that starts its turn within 20 feet of the droth must succeed on a DC 17 Wisdom saving throw or have disadvantage on all attack rolls until the end of its next turn. Creatures with Intelligence 3 or lower automatically fail the saving throw."
  "name": "Soothing Aura"
"actions":
- "desc": "The droth makes two oozing crush attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +8 to hit, reach 15 ft., one target. Hit: 30 (4d12 + 4) bludgeoning damage and 7 (2d6) acid damage."
  "name": "Oozing Crush"
- "desc": "A shoth with less than half its maximum hp can merge with any other shoth creature within 10 feet, adding its remaining hp to that creature's. The hp gained this way can exceed the normal maximum of that creature. A shoth can accept one such merger every 24 hours."
  "name": "Merge"
- "desc": "The droth rises up and crashes down, releasing a 20-foot-radius wave of acidic ooze. Each creature in the area must make a DC 17 Dexterity saving throw. On a failure, a creature takes 45 (10d8) acid damage and is knocked prone. On a success, a creature takes half the damage and isn't knocked prone."
  "name": "Acid Wave (Recharge 5-6)"
source:
- [Creature Codex](https://koboldpress.com/kpstore/product/creature-codex-for-5th-edition-dnd)
```
