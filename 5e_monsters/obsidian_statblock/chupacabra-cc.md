---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/cc
- monster/cr/0.5
- monster/size/Small
- monster/type/Monstrosity
statblock: inline
aliases: ["chupacabra", "Chupacabra-cc"]
---
# Chupacabra Cc
*Source: Creature Codex Page 63*

```statblock
"dice": false
"name": "Chupacabra Cc"
"size": "Small"
"type": "Monstrosity"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "36"
"hit_dice": "8d6+8"
"stats":
- !!int "16"
- !!int "15"
- !!int "12"
- !!int "3"
- !!int "12"
- !!int "6"
"speed": "walk 30 ft."
"senses": darkvision 60 ft., passive Perception 13
"skillsaves":
  "acrobatics": !!int "4"
  "perception": !!int "3"
  "stealth": !!int "4"
"languages": "-"
"cr": "1/2"
"traits":
- "desc": "The chupacabra has advantage on Wisdom (Perception) checks that rely on hearing or smell."
  "name": "Keen Hearing and Smell"
- "desc": "With a 10-foot running start, the chupacabra can long jump up to 25 feet."
  "name": "Running Leap"
"actions":
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 6 (1d6 + 3) piercing damage, and the chupacabra attaches to the target. While attached, the chupacabra doesn't attack. Instead, at the start of each of the chupacabra's turns, the target loses 6 (1d6 + 3) hp due to blood loss. The chupacabra can detach itself by spending 5 feet of its movement. It does so after the target is reduced to 0 hp. A creature, including the target, can use its action to detach the chupacabra."
  "name": "Bite"
- "desc": "The chupacabra fixes its gaze on one creature it can see within 10 feet of it. The target must succeed on a DC 11 Wisdom saving throw or be paralyzed for 1 minute. A paralyzed creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the chupacabra's Fearful Gaze for the next 24 hours."
  "name": "Fearful Gaze"
"reactions":
- "desc": "When the chupacabra is reduced to less than half of its maximum hp, it releases a foul, sulphurous stench. Each creature within 5 feet of the chupacabra must succeed on a DC 11 Constitution saving throw or be poisoned until the end of its next turn."
  "name": "Malodorous Stench"
source:
- [Creature Codex](https://koboldpress.com/kpstore/product/creature-codex-for-5th-edition-dnd)
```
