---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/cc
- monster/cr/2
- monster/size/Small
- monster/type/Construct
statblock: inline
aliases: ["cauldronborn", "Cauldronborn-cc"]
---
# Cauldronborn Cc
*Source: Creature Codex Page 59*

```statblock
"dice": false
"name": "Cauldronborn Cc"
"size": "Small"
"type": "Construct"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "13"
"hit_dice": "3d6+3"
"stats":
- !!int "14"
- !!int "7"
- !!int "12"
- !!int "3"
- !!int "6"
- !!int "1"
"speed": "walk 20 ft."
"senses": darkvision 60 ft., passive Perception 8
"skillsaves":
"languages": "-"
"cr": "2"
"damage_immunities": "poison"
"damage_resistances": "piercing and slashing from nonmagical attacks not made with adamantine"
"traits":
- "desc": "As a bonus action, a cauldronborn can consume one potion within 5 feet of it that is not being worn or carried. Along with the potion's effect, the cauldronborn's hp maximum increases by 3 (1d6) and it gains the same number of hp."
  "name": "Consumption"
- "desc": "The cauldronborn can pinpoint the location of potions and magic items within 60 feet of it. Outside of 60 feet, it can sense the general direction of potions within 1 mile of it."
  "name": "Detect Elixir"
- "desc": "The cauldronborn regains 2 hp at the start of its turn if it has at least 1 hp."
  "name": "Regeneration"
- "desc": "The cauldronborn triples its speed until the end of its turn when moving toward a potion it has detected."
  "name": "Sprint"
"actions":
- "desc": "The cauldronborn makes two slam attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) bludgeoning damage."
  "name": "Slam"
- "desc": "The cauldronborn releases a hungry screech, magically reaching out to nearby potions. All potions within 10 feet of the cauldronborn magically move toward the cauldronborn by rolling out of backpacks, hopping off of belts, unburying themselves, etc. A creature wearing or carrying a potion must succeed on a DC 13 Dexterity saving throw or its potion moves to within 5 feet of the cauldronborn. The target must make a separate saving throw for each potion it is attempting to keep in its possession."
  "name": "Call Potion (Recharge 5-6)"
source:
- [Creature Codex](https://koboldpress.com/kpstore/product/creature-codex-for-5th-edition-dnd)
```
