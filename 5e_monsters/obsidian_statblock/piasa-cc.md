---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/cc
- monster/cr/6
- monster/size/Large
- monster/type/Dragon
statblock: inline
aliases: ["piasa", "Piasa-cc"]
---
# Piasa Cc
*Source: Creature Codex Page 298*

```statblock
"dice": false
"name": "Piasa Cc"
"size": "Large"
"type": "Dragon"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "144"
"hit_dice": "17d10+51"
"stats":
- !!int "18"
- !!int "11"
- !!int "16"
- !!int "9"
- !!int "12"
- !!int "7"
"speed": "fly 80 ft. walk 40 ft."
"senses": blindsight 15 ft., darkvision 120 ft., passive Perception 14
"skillsaves":
  "athletics": !!int "7"
  "perception": !!int "4"
  "stealth": !!int "3"
"languages": "Draconic"
"cr": "6"
"traits":
- "desc": "The piasa's spiked tail is segmented and up to three times the length of its body. When the piasa takes 25 or more damage in a single turn, a segment of its tail is severed. When the first segment is severed, the tail attack's damage type changes from piercing to bludgeoning and deals 1d8 less damage. When the second segment is severed, the tail attack no longer deals damage, but it can still grapple. When the third segment is severed, the piasa can't make tail attacks. The tail re-grows at a rate of one segment per long rest."
  "name": "Segmented Tail"
"actions":
- "desc": "The piasa can use its Frightful Presence. It then makes three attacks: one with its bite or tail and two with its claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 15 (2d10 + 4) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage."
  "name": "Claw"
- "desc": "Melee Weapon Attack: +7 to hit, reach 15 ft., one target. Hit: 13 (2d8 + 4) piercing damage. If the target is a Medium or smaller creature, it is grappled (escape DC 15). Until this grapple ends, the target is restrained and the piasa can't make tail attacks against other targets. When the piasa moves, any Medium or smaller creature it is grappling moves with it."
  "name": "Tail"
- "desc": "Each creature of the piasa's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 15 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the piasa's Frightful Presence for the next 24 hours."
  "name": "Frightful Presence"
- "desc": "The piasa exhales sleep gas in a 30-foot cone. Each creature in that area must succeed on a DC 15 Constitution saving throw or fall unconscious for 10 minutes. This effect ends for a creature if the creature takes damage or someone uses an action to wake it."
  "name": "Sleep Breath (Recharge 5-6)"
source:
- [Creature Codex](https://koboldpress.com/kpstore/product/creature-codex-for-5th-edition-dnd)
```
