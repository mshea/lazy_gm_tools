---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/cc
- monster/cr/3
- monster/size/Medium
- monster/type/Monstrosity
statblock: inline
aliases: ["bloody-bones", "Bloody Bones-cc"]
---
# Bloody Bones Cc
*Source: Creature Codex Page 54*

```statblock
"dice": false
"name": "Bloody Bones Cc"
"size": "Medium"
"type": "Monstrosity"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "55"
"hit_dice": "10d8+10"
"stats":
- !!int "16"
- !!int "12"
- !!int "12"
- !!int "6"
- !!int "10"
- !!int "10"
"speed": "walk 30 ft."
"senses": darkvision 60 ft., passive Perception 11
"skillsaves":
  "deception": !!int "4"
  "stealth": !!int "3"
"languages": "none, but can speak through the use of its Horrific Imitation trait"
"cr": "3"
"traits":
- "desc": "Any creature hostile to the bloody bones that starts its turn within 10 feet of the bloody bones must succeed on a DC 13 Wisdom saving throw or be frightened until the end of its next turn. If a creature's saving throw is successful, the creature is immune to the bloody bones' Horrifying Aura for the next 24 hours."
  "name": "Horrifying Aura"
- "desc": "The bloody bones chooses one creature it can see. It moves, acts, and speaks in a macabre imitation of the creature. Its utterances are nonsense, and it can't understand the languages of its chosen target. It maintains this imitation until it dies. A creature that hears and sees the bloody bones can tell it is performing an imitation with a successful DC 14 Wisdom (Insight) check."
  "name": "Horrific Imitation"
"actions":
- "desc": "The bloody bones makes two claw attacks. It can use its Dark Stare in place of one claw attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (2d4 + 3) slashing damage."
  "name": "Claw"
- "desc": "The bloody bones stares balefully at one creature it can see within 60 feet. That creature must succeed on a DC 13 Wisdom saving throw or have disadvantage on all attacks until the end of its next turn."
  "name": "Dark Stare"
"reactions":
- "desc": "When it is hit by an attack, the bloody bones regains 5 (1d10) hit points and has resistance to that damage type until the end of its next turn as life-giving blood pours from the top of its skull."
  "name": "Its Crown Runs Red"
source:
- [Creature Codex](https://koboldpress.com/kpstore/product/creature-codex-for-5th-edition-dnd)
```
