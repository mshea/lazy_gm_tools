---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/cc
- monster/cr/7
- monster/size/Large
- monster/type/Dragon
statblock: inline
aliases: ["war-wyvern", "War Wyvern-cc"]
---
# War Wyvern Cc
*Source: Creature Codex Page 386*

```statblock
"dice": false
"name": "War Wyvern Cc"
"size": "Large"
"type": "Dragon"
"ac": !!int "15"
"ac_class": "scale mail"
"hp": !!int "119"
"hit_dice": "14d10+42"
"stats":
- !!int "20"
- !!int "12"
- !!int "16"
- !!int "6"
- !!int "14"
- !!int "6"
"speed": "fly 80 ft. walk 20 ft."
"senses": darkvision 60 ft., passive Perception 15
"skillsaves":
  "athletics": !!int "8"
  "perception": !!int "5"
"languages": "understands Common and Draconic, but can't speak"
"cr": "7"
"traits":
- "desc": "The wyvern deals double damage to objects and structures."
  "name": "Siege Monster"
"actions":
- "desc": "The wyvern makes two attacks: one with its bite and one with its stinger. While flying, it can use its claws in place of one other attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one creature. Hit: 12 (2d6 + 5) piercing damage plus 10 (3d6) poison damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 18 (3d8 + 5) slashing damage and the creature is grappled (escape DC 16). Until this grapple ends, the creature is restrained, and the wyvern can't use its claw on another target."
  "name": "Claws"
- "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one creature. Hit: 12 (2d6 + 5) piercing damage. The target must make a DC 16 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much damage on a successful one."
  "name": "Stinger"
- "desc": "The wyvern spits venom at a target within 60 feet. The target must make a DC 16 Constitution saving throw, taking 42 (12d6) poison damage on a failed save, or half as much damage on a successful one."
  "name": "Spit Venom (Recharge 5-6)"
source:
- [Creature Codex](https://koboldpress.com/kpstore/product/creature-codex-for-5th-edition-dnd)
```
