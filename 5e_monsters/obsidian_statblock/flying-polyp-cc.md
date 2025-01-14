---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/cc
- monster/cr/11
- monster/size/Huge
- monster/type/Aberration
statblock: inline
aliases: ["flying-polyp", "Flying Polyp-cc"]
---
# Flying Polyp Cc
*Source: Creature Codex Page 162*

```statblock
"dice": false
"name": "Flying Polyp Cc"
"size": "Huge"
"type": "Aberration"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "171"
"hit_dice": "18d12+54"
"stats":
- !!int "20"
- !!int "12"
- !!int "17"
- !!int "22"
- !!int "14"
- !!int "16"
"speed": "fly 60 ft. hover True ft. walk 0 ft."
"senses": blindsight 60 ft., passive Perception 16
"skillsaves":
  "arcana": !!int "10"
  "history": !!int "10"
  "perception": !!int "6"
"languages": "Deep Speech, telepathy 120 ft."
"cr": "11"
"damage_resistances": "acid, cold, fire, thunder; bludgeoning, piercing, and slashing from nonmagical attacks"
"traits":
- "desc": "A creature that starts its turn within 15 feet of the polyp must succeed on a DC 17 Strength saving throw or be pushed up to 15 feet away from the polyp."
  "name": "Aura of Wind"
- "desc": "The polyp can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object."
  "name": "Incorporeal Movement"
- "desc": "The polyp has advantage on saving throws against spells and other magical effects."
  "name": "Magic Resistance"
- "desc": "The polyp's innate spellcasting ability is Intelligence (spell save DC 18). The polyp can innately cast the following spells, requiring no material components:\nAt will: invisibility (self only)\n3/day: wind walk\n1/day: control weather"
  "name": "Innate Spellcasting"
"actions":
- "desc": "The polyp makes two melee attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +9 to hit, reach 15 ft., one target. Hit: 15 (3d6 + 5) bludgeoning damage. If the target is a Large or smaller creature, it is grappled (escape DC 17). Until this grapple ends, the target is restrained and is not affected by the flying polyp's Aura of Wind. The flying polyp can grapple up to two creatures at one time."
  "name": "Tentacle"
- "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target grappled by the polyp. Hit: 18 (3d8 + 5) piercing damage."
  "name": "Bite"
- "desc": "Each creature within 30 feet of the polyp must make a DC 17 Strength saving throw. On a failure, a creature takes 27 (5d10) bludgeoning damage and is knocked prone. On a success, a creature takes half the damage but isn't knocked prone."
  "name": "Cyclone (Recharge 5-6)"
- "desc": "The flying polyp magically enters the Ethereal Plane from the Material Plane, or vice versa."
  "name": "Etherealness"
"reactions":
- "desc": "When a creature the flying polyp can see targets it with an attack, the flying polyp can unleash a line of strong wind 60 feet long and 10 feet wide in the direction of the attacker. The wind lasts until the start of the flying polyp's next turn. Each creature in the wind when it appears or that starts its turn in the wind must succeed on a DC 17 Strength saving throw or be pushed 15 feet away from the flying polyp in a direction following the line. Any creature in the line treats all movement as difficult terrain."
  "name": "Fist of Wind"
source:
- [Creature Codex](https://koboldpress.com/kpstore/product/creature-codex-for-5th-edition-dnd)
```
