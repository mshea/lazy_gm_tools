---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/cc
- monster/cr/5
- monster/size/Medium
- monster/type/Undead
statblock: inline
aliases: ["lord-zombie", "Lord Zombie-cc"]
---
# Lord Zombie Cc
*Source: Creature Codex Page 26*

```statblock
"dice": false
"name": "Lord Zombie Cc"
"size": "Medium"
"type": "Undead"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "82"
"hit_dice": "11d8+33"
"stats":
- !!int "16"
- !!int "14"
- !!int "16"
- !!int "10"
- !!int "13"
- !!int "15"
"speed": "walk 30 ft."
"senses": darkvision 60 ft., passive Perception 14
"skillsaves":
  "perception": !!int "4"
"languages": "the languages it knew in life"
"cr": "5"
"damage_immunities": "necrotic, poison"
"damage_resistances": "bludgeoning, piercing, and slashing from nonmagical attacks not made with silver"
"traits":
- "desc": "If the lord fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- "desc": "Any non-undead creature that starts its turn within 30 feet of the lord must succeed on a DC 16 Constitution saving throw or be poisoned until the start of the creature's next turn. On a successful saving throw, the creature is immune to the lord's Stench for 24 hours."
  "name": "Stench"
- "desc": "If damage reduces the lord to 0 hp, it must make a Constitution saving throw with a DC of 5 + the damage taken, unless the damage is radiant or from a critical hit. On a success, the lord drops to 1 hp instead."
  "name": "Undead Fortitude"
"actions":
- "desc": "The lord zombie makes two slam attacks. It can use its Life Drain in place of one slam attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) bludgeoning damage."
  "name": "Slam"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 6 (1d6 + 3) necrotic damage. The target must succeed on a DC 16 Constitution saving throw or its hp maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hp maximum to 0. \n\nA humanoid slain by this attack rises 24 hours later as a zombie under the lord's control, unless the humanoid is restored to life or its body is destroyed. The lord can have no more than twenty zombies under its control at one time."
  "name": "Life Drain"
"legendary_actions":
- "desc": "The lord telepathically commands all zombies it controls within 1 mile to immediately move up to half their speed. A zombie that moves out of an enemy's reach because of this movement doesn't provoke an opportunity attack. Life Drain (Costs 2 Actions). The lord makes a life drain attack. Arise (Costs 3 Actions). The lord targets a humanoid corpse within 30 feet, which rises as a zombie under the lord's control."
  "name": "Shambling Hordes"
source:
- [Creature Codex](https://koboldpress.com/kpstore/product/creature-codex-for-5th-edition-dnd)
```
