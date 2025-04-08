---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/cc
- monster/cr/5
- monster/size/Small
- monster/type/Fiend
statblock: inline
aliases: ["spree", "Spree-cc"]
---
# Spree Cc
*Source: Creature Codex Page 91*

```statblock
"dice": false
"name": "Spree Cc"
"size": "Small"
"type": "Fiend"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "84"
"hit_dice": "13d6+39"
"stats":
- !!int "11"
- !!int "17"
- !!int "16"
- !!int "10"
- !!int "8"
- !!int "15"
"speed": "walk 30 ft."
"senses": darkvision 60 ft., passive Perception 9
"skillsaves":
"languages": "Abyssal, Common, Gnomish"
"cr": "5"
"damage_immunities": "poison"
"damage_resistances": "cold, fire, lightning; bludgeoning, piercing, and slashing from nonmagical attacks"
"traits":
- "desc": "The spree demon has advantage on attacks if it saw another spree demon make a successful attack within the last minute."
  "name": "Frothing Rage"
- "desc": "If a creature confused by the spree demon's claw attack reduces a target to 0 hp, the confused creature must make a successful DC 14 Wisdom saving throw or gain a short-term madness (see the System Reference Document 5.1). If a creature fails this saving throw again while already suffering from a madness, it gains a long-term madness instead."
  "name": "Spree Madness"
"actions":
- "desc": "The spree demon makes two claw attacks. If both attacks hit the same target, the target must succeed on a DC 14 Wisdom saving throw or become frightened for 1 minute. While frightened this way, the creature believes it has shrunk to half its normal size. All attacks against the creature do an extra 7 (2d6) psychic damage, and the creature's attacks do half damage. A frightened creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) slashing damage plus 10 (3d6) poison damage, and the creature must make a DC 14 Constitution saving throw. On a failure, the target can't take reactions and must roll a d10 at the start of each of its turns to determine its behavior for that turn for 1 minute. This works like the confusion spell. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to this effect for the next 24 hours."
  "name": "Claw"
source:
- [Creature Codex](https://koboldpress.com/kpstore/product/creature-codex-for-5th-edition-dnd)
```
