---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob2
- monster/cr/5
- monster/size/Medium
- monster/type/Dragon
statblock: inline
aliases: ["diminution-drake", "Diminution Drake-tob2"]
---
# Diminution Drake Tob2
*Source: Tome of Beasts 2 Page 121*

```statblock
"dice": false
"name": "Diminution Drake Tob2"
"size": "Medium"
"type": "Dragon"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "71"
"hit_dice": "13d8+13"
"stats":
- !!int "14"
- !!int "18"
- !!int "12"
- !!int "6"
- !!int "13"
- !!int "10"
"speed": "fly 60 ft. walk 30 ft."
"senses": blindsight 30 ft., passive Perception 17
"skillsaves":
  "perception": !!int "4"
  "stealth": !!int "4"
  "survival": !!int "4"
"languages": "understands Common and Draconic but can’t speak"
"cr": "5"
"damage_immunities": "poison"
"traits":
- "desc": "As a bonus action, the drake can change its size to Tiny or Small for 1 minute. While its size is reduced, it can’t use In One Bite, and it has advantage on stinger attacks made against creatures larger than it. It can end this effect early as a bonus action."
  "name": "Change Scale"
- "desc": "The diminution drake has advantage on Wisdom (Perception) checks that rely on smell."
  "name": "Keen Smell"
"actions":
- "desc": "The drake makes two claw attacks and one stinger attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage"
  "name": "Claw"
- "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one Tiny target. Hit: The target must succeed on a DC 15 Dexterity saving throw or be swallowed by the drake. While swallowed, the target’s hit points are reduced to 0, and it is stable. If a creature remains swallowed for 1 minute, it dies.\n\nWhile it has a creature swallowed, the diminution drake can’t reduce its size below Medium. If the diminution drake dies, a swallowed creature’s hit points return to the amount it had before it was swallowed, and the creature falls prone in an unoccupied space within 5 feet of the drake."
  "name": "In One Bite"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 6 (1d4 + 4) piercing damage, and the target must succeed on a DC 15 Constitution saving throw or have its size reduced by one category until it completes a short or long rest. This attack can reduce a creature’s size to no smaller than Tiny."
  "name": "Stinger"
- "desc": "The drake exhales poison in a 15-foot-line that is 5 feet wide. Each creature in that line must make a DC 15 Dexterity saving throw. On a failure, a creature takes 17 (5d6) poison damage and its size is reduced by one category until it completes a short or long rest. On a success, it takes half the damage and isn’t reduced in size. This breath can reduce a creature’s size to no smaller than Tiny."
  "name": "Shrinking Breath (Recharge 5-6)"
source:
- [Tome of Beasts 2](https://koboldpress.com/kpstore/product/tome-of-beasts-2-for-5th-edition)
```
