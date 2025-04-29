---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/cc
- monster/cr/6
- monster/size/Medium
- monster/type/Undead
statblock: inline
aliases: ["jiangshi", "Jiangshi-cc"]
---
# Jiangshi Cc
*Source: Creature Codex Page 230*

```statblock
"dice": false
"name": "Jiangshi Cc"
"size": "Medium"
"type": "Undead"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "117"
"hit_dice": "18d8+36"
"stats":
- !!int "17"
- !!int "10"
- !!int "14"
- !!int "6"
- !!int "12"
- !!int "14"
"speed": "walk 20 ft."
"senses": blindsight 60 ft. (blind beyond this radius), passive Perception 14
"skillsaves":
  "athletics": !!int "6"
  "perception": !!int "4"
"languages": "understands any languages it knew in life but can't speak"
"cr": "6"
"damage_immunities": "poison"
"damage_resistances": "necrotic; bludgeoning, piercing, and slashing from nonmagical attacks"
"traits":
- "desc": "The jiangshi can't use its blindsight while deafened."
  "name": "Blind Senses"
- "desc": "The jiangshi has advantage on Wisdom (Perception) checks that rely on hearing."
  "name": "Keen Hearing"
- "desc": "The jiangshi has advantage on saving throws against spells and other magical effects. A creature can take its action while within 5 feet of the jiangshi to rip the prayer off the jiangshi by succeeding on a DC 16 Strength check. The jiangshi loses this trait if its prayer scroll is removed."
  "name": "Prayer of Magic Resistance"
- "desc": "The jiangshi's long jump is up to 30 feet and its high jump is up to 15 feet, with or without a running start."
  "name": "Standing Leap"
- "desc": "When a creature that can see the jiangshi starts its turn within 30 feet of the jiangshi, it must make a DC 14 Wisdom saving throw, unless the jiangshi is incapacitated. On a failed save, the creature is frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the jiangshi's Terrifying Appearance for the next 24 hours."
  "name": "Terrifying Appearance"
"actions":
- "desc": "The jiangshi makes two claw attacks. It can use Life Drain in place of one claw attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 12 (2d8 + 3) slashing damage. The target is grappled (escape DC 14) if it is a Medium or smaller creature and the jiangshi doesn't have two other creatures grappled."
  "name": "Claw"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature that is grappled by the jiangshi, incapacitated, or restrained. Hit: 14 (4d6) necrotic damage. The target must succeed on a DC 14 Constitution saving throw or its hp maximum is reduced by an amount equal to the necrotic damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hp maximum to 0. \n\nA humanoid slain in this way rises 24 hours later as a jiangshi, unless the humanoid is restored to life, its body is bathed in vinegar before burial, or its body is destroyed."
  "name": "Life Drain"
source:
- [Creature Codex](https://koboldpress.com/kpstore/product/creature-codex-for-5th-edition-dnd)
```
