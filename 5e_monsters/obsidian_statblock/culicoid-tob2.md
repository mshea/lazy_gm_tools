---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob2
- monster/cr/12
- monster/size/Large
- monster/type/Fiend
statblock: inline
aliases: ["culicoid", "Culicoid-tob2"]
---
# Culicoid Tob2
*Source: Tome of Beasts 2 Page 94*

```statblock
"dice": false
"name": "Culicoid Tob2"
"size": "Large"
"type": "Fiend"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "190"
"hit_dice": "20d10+80"
"stats":
- !!int "20"
- !!int "15"
- !!int "18"
- !!int "11"
- !!int "14"
- !!int "9"
"speed": "fly 60 ft. hover True ft. walk 30 ft."
"senses": darkvision 120 ft., passive Perception 16
"skillsaves":
  "acrobatics": !!int "6"
  "perception": !!int "6"
  "stealth": !!int "6"
"languages": "Abyssal, telepathy 60 ft."
"cr": "12"
"damage_immunities": "poison"
"damage_resistances": "cold, fire, lightning; bludgeoning, piercing, and slashing from nonmagical attacks"
"traits":
- "desc": "The culicoid can pinpoint, by scent, the location of creatures that have blood within 60 feet of it."
  "name": "Blood Sense"
- "desc": "When the culicoid is reduced to 0 hp, it transforms into a swarm of mosquitos (use the statistics of a swarm of insects). If at least one mosquito from the swarm survives for 24 hours, the culicoid reforms at the following dusk from the remaining mosquitos, regaining all its hp and becoming active again."
  "name": "Cloud of Mosquitos"
- "desc": "The culicoid has advantage on saving throws against spells and other magical effects."
  "name": "Magic Resistance"
- "desc": "The culicoid can’t be subjected to blood drain from mosquitos and mosquito-like creatures."
  "name": "Mosquito-Proof"
- "desc": "The culicoid can communicate with mosquitos and other mosquito-like creatures as if they shared a language."
  "name": "Speak with Mosquitos"
"actions":
- "desc": "The culicoid makes three attacks: one with its proboscis and two with its needle claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 12 (2d6 + 5) piercing damage, and the target is grappled (escape DC 16). Until this grapple ends, the target is restrained, the culicoid can automatically hit the target with its needle claw, and it can’t use the same needle claw against other targets. The culicoid has two needle claws, each of which can grapple only one target."
  "name": "Needle Claws"
- "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one creature. Hit: 14 (2d8 + 5) piercing damage plus 7 (2d6) poison damage. The target must succeed on a DC 16 Constitution saving throw or be poisoned for 1 minute. While poisoned, a creature must succeed on a DC 16 Wisdom saving throw at the start of each of its turns or spend its full turn scratching the rash. A poisoned creature can repeat the Constitution saving throw at the end of each of its turns, ending the poisoned condition on itself on a success."
  "name": "Proboscis"
source:
- [Tome of Beasts 2](https://koboldpress.com/kpstore/product/tome-of-beasts-2-for-5th-edition)
```
