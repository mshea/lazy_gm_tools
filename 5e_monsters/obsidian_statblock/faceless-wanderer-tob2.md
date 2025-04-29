---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob2
- monster/cr/4
- monster/size/Medium
- monster/type/Aberration
statblock: inline
aliases: ["faceless-wanderer", "Faceless Wanderer-tob2"]
---
# Faceless Wanderer Tob2
*Source: Tome of Beasts 2 Page 139*

```statblock
"dice": false
"name": "Faceless Wanderer Tob2"
"size": "Medium"
"type": "Aberration"
"ac": !!int "13"
"ac_class": "None"
"hp": !!int "58"
"hit_dice": "9d8+18"
"stats":
- !!int "12"
- !!int "17"
- !!int "14"
- !!int "16"
- !!int "12"
- !!int "10"
"speed": "fly 30 ft. walk 0 ft. hover True ft."
"senses": blindsight 60 ft., passive Perception 12
"skillsaves":
"languages": "all, telepathy 60 ft."
"cr": "4"
"damage_immunities": "poison, psychic"
"damage_resistances": "cold"
"traits":
- "desc": "A creature that sees or interacts with a faceless wanderer must make a DC 11 Wisdom saving throw 1 minute after the faceless wanderer leaves. On a failure, the details of the faceless wanderer and the events surrounding its appearance rapidly fade away from the creature’s mind, including the presence of the faceless wanderer."
  "name": "Memory Loss"
- "desc": "The faceless wanderer regains 5 hp at the start of its turn. If a creature hasn’t failed the saving throw of the faceless wanderer’s Memory Drain within the last 1 minute, this trait doesn’t function until a creature fails it. If a faceless wanderer is reduced to 0 hp while it is still capable of regenerating, its body dissipates into vapor and reforms 1d10 days later somewhere in the Void. Otherwise, it is permanently destroyed."
  "name": "Regeneration"
"actions":
- "desc": "The faceless wanderer makes two attacks, but it can use its Memory Drain only once."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) slashing damage plus 7 (2d6) psychic damage."
  "name": "Claws"
- "desc": "The faceless wanderer drains memories from an adult creature within 30 feet of it. The target must make a DC 13 Intelligence saving throw. On a failure, the target takes 14 (4d6) psychic damage and its Intelligence score is reduced by 1d4. The target dies if this reduces its Intelligence to 0. A humanoid slain in this way rises 1d4 hours later as a new faceless wanderer. Otherwise, the reduction lasts until the target finishes a short or long rest. On a success, the target takes half the damage and its Intelligence score isn’t reduced."
  "name": "Memory Drain"
source:
- [Tome of Beasts 2](https://koboldpress.com/kpstore/product/tome-of-beasts-2-for-5th-edition)
```
