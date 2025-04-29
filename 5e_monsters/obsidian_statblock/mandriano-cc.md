---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/cc
- monster/cr/5
- monster/size/Large
- monster/type/Plant
statblock: inline
aliases: ["mandriano", "Mandriano-cc"]
---
# Mandriano Cc
*Source: Creature Codex Page 261*

```statblock
"dice": false
"name": "Mandriano Cc"
"size": "Large"
"type": "Plant"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "60"
"hit_dice": "8d10+16"
"stats":
- !!int "15"
- !!int "6"
- !!int "15"
- !!int "10"
- !!int "10"
- !!int "7"
"speed": "walk 40 ft."
"senses": darkvision 60 ft., passive Perception 13
"skillsaves":
  "athletics": !!int "5"
  "perception": !!int "3"
  "stealth": !!int "1"
"languages": "understands Common and Sylvan, but can't speak"
"cr": "5"
"damage_immunities": "poison"
"damage_resistances": "necrotic; bludgeoning, piercing, and slashing from nonmagical attacks"
"actions":
- "desc": "The mandriano makes two swipe attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +5 to hit, reach 10 ft., one target. Hit: 11 (2d6 + 4) slashing damage. If the target is Medium or smaller, it is grappled (escape DC 14). Until this grapple ends, the target is restrained. It can grapple up to three creatures."
  "name": "Swipe"
- "desc": "The mandriano drains the essence of one grappled target. The target must make a DC 14 Constitution saving throw, taking 13 (4d6) necrotic damage on a failed save, or half as much damage on a successful one. The target's hp maximum is reduced by an amount equal to the necrotic damage taken, and the mandriano regains hp equal to that amount. The reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hp maximum to 0. A humanoid slain in this way rises 24 hours later as a zombie or skeleton under the mandriano's control, unless the humanoid is restored to life or its body is destroyed. The mandriano can control up to twelve undead at one time."
  "name": "Consume the Spark"
source:
- [Creature Codex](https://koboldpress.com/kpstore/product/creature-codex-for-5th-edition-dnd)
```
