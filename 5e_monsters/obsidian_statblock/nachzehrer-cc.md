---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/cc
- monster/cr/8
- monster/size/Medium
- monster/type/Undead
statblock: inline
aliases: ["nachzehrer", "Nachzehrer-cc"]
---
# Nachzehrer Cc
*Source: Creature Codex Page 272*

```statblock
"dice": false
"name": "Nachzehrer Cc"
"size": "Medium"
"type": "Undead"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "136"
"hit_dice": "16d8+64"
"stats":
- !!int "20"
- !!int "12"
- !!int "18"
- !!int "10"
- !!int "15"
- !!int "9"
"speed": "burrow 15 ft. walk 30 ft."
"senses": darkvision 60 ft., passive Perception 12
"skillsaves":
  "stealth": !!int "7"
"languages": "the languages it knew in life"
"cr": "8"
"damage_immunities": "necrotic, poison"
"traits":
- "desc": "A creature infected with grave pox becomes vulnerable to necrotic damage and gains one level of exhaustion that can't be removed until the disease is cured. Additionally, the creature cannot reduce its exhaustion by finishing a long rest. The infected creature is highly contagious. Each creature that touches it, or that is within 10 feet of it when it finishes a long rest, must succeed on a DC 12 Constitution saving throw or also contract grave pox. \n\nWhen an infected creature finishes a long rest, it must succeed on a DC 16 Constitution saving throw or gain one level of exhaustion. As the disease progresses, the infected creature becomes weaker and develops painful green pustules all over its skin. A creature that succeeds on two saving throws against the disease recovers from it. The cured creature is no longer vulnerable to necrotic damage and can remove exhaustion levels as normal."
  "name": "Grave Pox"
- "desc": "A creature other than a construct or undead has disadvantage on attack rolls, saving throws, and ability checks based on Strength while within 5 feet of the nachzehrer."
  "name": "Weakening Shadow"
"actions":
- "desc": "The nachzehrer makes three attacks: two with its fists and one with its bite."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one creature. Hit: 7 (1d4 + 5) piercing damage plus 13 (3d8) necrotic damage. The target's hp maximum is reduced by an amount equal to the necrotic damage taken, and the nachzehrer regains hp equal to that amount. The reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hp maximum to 0. The target must succeed on a DC 16 Constitution saving throw or become infected with the grave pox disease (see the Grave Pox trait)."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) bludgeoning damage."
  "name": "Fist"
source:
- [Creature Codex](https://koboldpress.com/kpstore/product/creature-codex-for-5th-edition-dnd)
```
