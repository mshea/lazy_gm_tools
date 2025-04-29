---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob2
- monster/cr/3
- monster/size/Large
- monster/type/Monstrosity
statblock: inline
aliases: ["corpse-worm", "Corpse Worm-tob2"]
---
# Corpse Worm Tob2
*Source: Tome of Beasts 2 Page 71*

```statblock
"dice": false
"name": "Corpse Worm Tob2"
"size": "Large"
"type": "Monstrosity"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "76"
"hit_dice": "8d10+32"
"stats":
- !!int "16"
- !!int "12"
- !!int "19"
- !!int "1"
- !!int "12"
- !!int "5"
"speed": "walk 30 ft. climb 30 ft."
"senses": darkvision 60 ft., passive Perception 13
"skillsaves":
  "perception": !!int "3"
"languages": "—"
"cr": "3"
"damage_immunities": "poison"
"traits":
- "desc": "The corpse worm has advantage on Wisdom (Perception) checks that rely on smell."
  "name": "Keen Smell"
"actions":
- "desc": "Melee Weapon Attack: +5 to hit, reach 10 ft., one target. Hit: 10 (2d6 + 3) piercing damage and the target is grappled (escape DC 13). Until this grapple ends, the target is restrained, and the corpse worm can’t bite another target or use its Regurgitate reaction. The target must succeed on a DC 12 Constitution saving throw against disease or become poisoned until the disease is cured. Every 24 hours that elapse, the creature must repeat the saving throw, reducing its hp maximum by 5 (1d10) on a failure. This reduction lasts until the disease is cured. The creature dies if the disease reduces its hp maximum to 0."
  "name": "Bite"
- "desc": "The corpse worm makes a bite attack against a Medium or smaller target it is grappling. If the attack hits, the target is swallowed, and the grapple ends. While swallowed, the target is blinded and restrained, it has total cover against attacks and effects outside the corpse worm, and it takes 10 (3d6) acid damage at the start of each of the corpse worm’s turns. The corpse worm can have only one creature swallowed at a time. If the corpse worm takes 20 damage or more on a single turn from the swallowed creature, the worm must succeed on a DC 12 Constitution saving throw at the end of that turn or regurgitate the creature, which falls prone in a space within 10 feet of the worm. If the corpse worm dies, the target is no longer restrained by it and can escape from the corpse using 10 feet of movement, exiting prone."
  "name": "Swallow"
"reactions":
- "desc": "When a creature the corpse worm can see hits it with an attack while within 10 feet of it, the corpse worm regurgitates a portion of its stomach contents on the attacker. The target must succeed on a DC 14 Constitution saving throw or be poisoned for 1 minute. If the corpse worm has a swallowed creature when it uses this reaction, the worm must succeed on a DC 14 Constitution saving throw or also regurgitate the swallowed creature, which falls prone in a space within 5 feet of the target. If it regurgitates the swallowed creature, the target and the swallowed creature take 7 (2d6) acid damage."
  "name": "Regurgitate (Recharge 5-6)"
source:
- [Tome of Beasts 2](https://koboldpress.com/kpstore/product/tome-of-beasts-2-for-5th-edition)
```
