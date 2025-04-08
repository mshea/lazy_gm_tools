---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/cc
- monster/cr/9
- monster/size/Huge
- monster/type/Plant
statblock: inline
aliases: ["jinmenju", "Jinmenju-cc"]
---
# Jinmenju Cc
*Source: Creature Codex Page 232*

```statblock
"dice": false
"name": "Jinmenju Cc"
"size": "Huge"
"type": "Plant"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "126"
"hit_dice": "12d12+48"
"stats":
- !!int "16"
- !!int "1"
- !!int "19"
- !!int "17"
- !!int "8"
- !!int "22"
"speed": "walk 0 ft."
"senses": darkvision 60 ft., tremorsense 120 ft. (blind beyond this radius), passive Perception 13
"skillsaves":
  "perception": !!int "3"
  "persuasion": !!int "14"
"languages": "all languages known by creatures within 120 feet"
"cr": "9"
"damage_immunities": "bludgeoning, piercing, and slashing from nonmagical attacks"
"traits":
- "desc": "Whenever the jinmenju makes a root attack, it can choose a point on the ground within 120 feet of it. The root bursts from the ground, and that point becomes the attack's point of origin. After attacking, the exposed root protrudes from that point, and the jinmenju gains a reaction each turn that it can only use to make an opportunity attack with that root. A root has AC 15, 45 hp, and resistance to bludgeoning, piercing, and slashing damage from nonmagical attacks. Damaging a root doesn't damage the jinmenju tree. The jinmenju can have up to 5 roots active at one time. If it makes a root attack while it has 5 roots active, one of the active roots burrows back into the ground and a new root appears at the location of the new attack."
  "name": "Burrowing Roots"
- "desc": "If a creature with Intelligence 5 or higher eats a bite of the fruit of the jinmenju, it must succeed on a DC 16 Wisdom saving throw or fall prone, becoming incapacitated by fits of laughter as it perceives everything as hilariously funny for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If the target takes damage while prone, it has advantage on the saving throw."
  "name": "Laughing Fruit"
"actions":
- "desc": "The jinmenju makes two root attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 14 (2d10 + 3) bludgeoning damage plus 14 (4d6) psychic damage."
  "name": "Root"
"legendary_actions":
- "desc": "The jimenju makes one root attack."
  "name": "Root"
- "desc": "The jinmenju restores 10 (3d6) hp to each of its exposed roots."
  "name": "Revitalize Roots"
- "desc": "The jinmenju emits a puff of purple gas around its roots. Each creature within 10 feet of an exposed root must succeed on a DC 16 Constitution saving throw or fall prone with laughter, becoming incapacitated and unable to stand up until the end of its next turn. A creature in an area of overlapping gas only makes the saving throw once. A creature with an Intelligence score of 4 or less isn't affected."
  "name": "Mirthful Miasma (Costs 2 Actions)"
source:
- [Creature Codex](https://koboldpress.com/kpstore/product/creature-codex-for-5th-edition-dnd)
```
