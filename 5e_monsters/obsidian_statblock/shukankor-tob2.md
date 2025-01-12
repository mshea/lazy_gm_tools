---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob2
- monster/cr/9
- monster/size/Huge
- monster/type/Aberration
statblock: inline
aliases: ["shukankor", "Shukankor-tob2"]
---
# Shukankor Tob2
*Source: Tome of Beasts 2 Page 326*

```statblock
"dice": false
"name": "Shukankor Tob2"
"size": "Huge"
"type": "Aberration"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "115"
"hit_dice": "11d12+44"
"stats":
- !!int "22"
- !!int "12"
- !!int "18"
- !!int "8"
- !!int "12"
- !!int "6"
"speed": "walk 50 ft."
"senses": darkvision 120 ft., passive Perception 19
"skillsaves":
  "athletics": !!int "10"
  "perception": !!int "9"
"languages": "Deep Speech"
"cr": "9"
"damage_immunities": "poison"
"damage_resistances": "bludgeoning, piercing, and slashing from nonmagical attacks"
"traits":
- "desc": "The shukankor has advantage on Wisdom (Perception) checks that rely on sight and on saving throws against being blinded."
  "name": "Many Eyes"
- "desc": "The shukankor has advantage on attack rolls against a creature if at least one of its duplicates is within 5 feet of the creature and the duplicate isn’t incapacitated."
  "name": "Self-made Pack"
"actions":
- "desc": "The shukankor makes three attacks: one with its beak and two with its claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 15 (2d8 + 6) piercing damage."
  "name": "Beak"
- "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage."
  "name": "Claws"
- "desc": "The shukankor magically duplicates itself, creating four replicas. Each replica uses the statistics of an axe beak, except it also has the shukankor’s Many Eyes and Self-made Pack traits. The shukankor can communicate telepathically with a replica as long as they are within 120 feet of each other. The replicas act as allies of the shukankor and obey its telepathic commands. The replicas remain until killed or dismissed by the shukankor as a bonus action. Slain or dismissed replicas melt into a foul-smelling puddle of green goo. A replica that survives for 24 hours breaks its telepathic link with the shukankor, becoming a free-thinking creature, and grows into a full shukankor after 1 month."
  "name": "Duplicating Terror (1/Day)"
"reactions":
- "desc": "When a creature the shukankor can see targets it with an attack, the shukankor forces a replica within 5 feet of it to jump in the way. The chosen replica becomes the target of the attack instead."
  "name": "Sacrifice Replica"
source:
- [Tome of Beasts 2](https://koboldpress.com/kpstore/product/tome-of-beasts-2-for-5th-edition)
```
