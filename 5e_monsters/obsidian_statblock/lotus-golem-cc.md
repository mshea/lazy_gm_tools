---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/cc
- monster/cr/9
- monster/size/Large
- monster/type/Construct
statblock: inline
aliases: ["lotus-golem", "Lotus Golem-cc"]
---
# Lotus Golem Cc
*Source: Creature Codex Page 201*

```statblock
"dice": false
"name": "Lotus Golem Cc"
"size": "Large"
"type": "Construct"
"ac": !!int "14"
"ac_class": "None"
"hp": !!int "82"
"hit_dice": "11d10+22"
"stats":
- !!int "14"
- !!int "19"
- !!int "14"
- !!int "6"
- !!int "12"
- !!int "4"
"speed": "walk 30 ft."
"saves":
  "Strength": !!int "6"
  "Dexterity": !!int "8"
"senses": darkvision 60 ft., passive Perception 19
"skillsaves":
  "athletics": !!int "6"
  "perception": !!int "9"
"languages": "understands the languages of its creator but can't speak"
"cr": "9"
"damage_immunities": "cold, fire, poison, psychic"
"damage_resistances": "bludgeoning, piercing, and slashing from nonmagical attacks that aren't adamantine"
"traits":
- "desc": "The lotus golem absorbs energy from nearby spellcasting. Most lotus golems hold 1 charge point at any given time but can hold up to 4. As a bonus action while casting a spell within 5 feet of the lotus golem, the golem's controller can expend the golem's charge points to cast the spell without expending a spell slot. To do so, the controller must expend a number of charge points equal to the level of the spell."
  "name": "Arcane Pool"
- "desc": "The golem is immune to any spell or effect that would alter its form."
  "name": "Immutable Form"
- "desc": "The golem has advantage on saving throws against spells and other magical effects."
  "name": "Magic Resistance"
- "desc": "The golem's weapon attacks are magical."
  "name": "Magic Weapons"
- "desc": "The golem can move across the surface of water as if it were harmless, solid ground. This trait works like the water walk spell."
  "name": "Water Walker"
"actions":
- "desc": "The lotus golem makes two arcane water attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 15 (2d12 + 2) bludgeoning damage plus 7 (2d6) force damage."
  "name": "Arcane Water"
"reactions":
- "desc": "When a spell is cast within 30 feet of it, the golem absorbs some of the spell's potency. If it is a spell that forces a saving throw, the DC to succeed drops by 2. If it is a spell with an attack roll, the attack roll has disadvantage. The golem regains 20 hp and gains 1 charge point in its Arcane Pool."
  "name": "Arcane Absorption"
source:
- [Creature Codex](https://koboldpress.com/kpstore/product/creature-codex-for-5th-edition-dnd)
```
