---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/cc
- monster/cr/5
- monster/size/Small
- monster/type/Fey
statblock: inline
aliases: ["xiphus", "Xiphus-cc"]
---
# Xiphus Cc
*Source: Creature Codex Page 388*

```statblock
"dice": false
"name": "Xiphus Cc"
"size": "Small"
"type": "Fey"
"ac": !!int "15"
"ac_class": "None"
"hp": !!int "55"
"hit_dice": "10d6+20"
"stats":
- !!int "14"
- !!int "21"
- !!int "15"
- !!int "10"
- !!int "12"
- !!int "14"
"speed": "walk 50 ft."
"senses": darkvision 60 ft., passive Perception 14
"skillsaves":
  "acrobatics": !!int "8"
  "perception": !!int "4"
  "stealth": !!int "8"
"languages": "Common, Elvish, Umbral"
"cr": "5"
"damage_immunities": "lightning"
"traits":
- "desc": "If the xiphus is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, the xiphus instead takes no damage if it succeeds on the saving throw, and only half damage if it fails."
  "name": "Evasion"
- "desc": "Whenever the xiphus is subjected to lightning damage, it takes no damage and instead regains a number of hp equal to the lightning damage dealt."
  "name": "Lightning Absorption"
- "desc": "As a bonus action, a xiphus chooses one creature it can see. The xiphus' clockwork heart vibrates rapidly, bending time to give the xiphus the upper hand against its chosen target. The xiphus chooses whether to have advantage on its attacks against that target or on saving throws against spells cast by the target until the start of the xiphus' next turn."
  "name": "Siphon Time (Recharge 5-6)"
- "desc": "The movements of a xiphus are so swift that it is almost invisible when in motion. If the xiphus moves at least 10 feet on its turn, attack rolls against it have disadvantage until the start of its next turn unless the xiphus is incapacitated or restrained."
  "name": "Startling Speed"
"actions":
- "desc": "The xiphus makes three hidden dagger attacks."
  "name": "Multiattack"
- "desc": "Melee or Ranged Weapon Attack: +8 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 7 (1d4 + 5) piercing damage plus 7 (2d6) lightning damage."
  "name": "Hidden Dagger"
"reactions":
- "desc": "If damage is dealt to a xiphus that would kill it, it can attempt to temporarily borrow time from another creature to avoid death. One creature the xiphus can see within 30 feet of it must succeed on a DC 16 Constitution saving throw or take 10 (3d6) necrotic damage, and the xiphus regains hp equal to the damage taken. The target is stable and doesn't die if this effect reduces its hp to 0. After 2 rounds, the xiphus takes necrotic damage, and the target regains hp, equal to the original amount borrowed."
  "name": "Borrowed Time (Recharges after a Short or Long Rest)"
source:
- [Creature Codex](https://koboldpress.com/kpstore/product/creature-codex-for-5th-edition-dnd)
```
