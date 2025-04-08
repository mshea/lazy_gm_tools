---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob2023
- monster/cr/5
- monster/size/Medium
- monster/type/Monstrosity
statblock: inline
aliases: ["ratking-tob1-2023", "Rat King-tob2023"]
---
# Rat King Tob2023
*Source: Tome of Beasts 2023 Page 300*

```statblock
"dice": false
"name": "Rat King Tob2023"
"size": "Medium"
"type": "Monstrosity"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "76"
"hit_dice": "9d8 + 36"
"stats":
- !!int "6"
- !!int "16"
- !!int "18"
- !!int "11"
- !!int "15"
- !!int "16"
"speed": "walk 20 ft. burrow 30 ft."
"senses": darkvision 60 ft., passive Perception 12
"skillsaves":
  "Stealth": !!int "6"
"languages": "Common, Thieves’ Cant"
"cr": "5"
"damage_immunities": "poison"
"damage_resistances": "bludgeoning, piercing, and slashing from nonmagical attacks"
"traits":
- "desc": "The rat king has advantage on Wisdom (Perception) checks that rely on smell."
  "name": "Keen Smell"
- "desc": "The rat king radiates a magical aura of misfortune. A creature that starts its turn within 15 feet of the rat king must succeed on a DC 14 Charisma saving throw or have disadvantage on attack rolls and saving throws until the start of its next turn."
  "name": "Plague of Ill Omen"
"actions":
- "desc": "The rat king makes two Bite attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage plus 7 (2d6) poison damage. If the target is a creature, it must succeed on a DC 14 Constitution saving throw or suffer one level of exhaustion and become infected with a disease. Until the disease is cured, at the end of each long rest, the creature must repeat the saving throw. On a failure, the creature suffers another level of exhaustion. The exhaustion lasts until the creature finishes a long rest after the disease is cured. A creature that succeeds on two saving throws recovers from the disease."
  "name": "Bite"
- "desc": "The rat king magically calls 2d4 rats, 1d4 giant rats, or 1 swarm of rats. The rats arrive in 1d4 rounds, acting as allies of the rat king and obeying its spoken commands. The rats remain for 1 hour, until the rat king dies, or until the rat king dismisses them as a bonus action."
  "name": "Call Rats (1/Day)"
"reactions":
- "desc": "When a friendly rat, giant rat, or swarm of rats starts its turn within 5 feet of the rat king, the rat king can absorb it. If the rat king does so, the target dies, and the rat king gains temporary hp equal to the target’s remaining hp."
  "name": "Absorption"
source:
- [Tome of Beasts 2023](https://koboldpress.com/kpstore/product/tome-of-beasts-1-2023-edition/)
```
