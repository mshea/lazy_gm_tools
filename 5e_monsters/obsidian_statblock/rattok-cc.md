---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/cc
- monster/cr/4
- monster/size/Small
- monster/type/Fiend
statblock: inline
aliases: ["rattok", "Rattok-cc"]
---
# Rattok Cc
*Source: Creature Codex Page 90*

```statblock
"dice": false
"name": "Rattok Cc"
"size": "Small"
"type": "Fiend"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "66"
"hit_dice": "12d6+24"
"stats":
- !!int "10"
- !!int "16"
- !!int "14"
- !!int "14"
- !!int "6"
- !!int "9"
"speed": "swim 20 ft. walk 30 ft."
"senses": darkvision 60 ft., passive Perception 8
"skillsaves":
  "stealth": !!int "5"
"languages": "Abyssal, Common, Void Speech"
"cr": "4"
"damage_immunities": "fire, necrotic, poison"
"damage_resistances": "cold, lightning"
"traits":
- "desc": "As a bonus action, the rattok demon consumes one of the bottled souls in its possession, regaining 7 (2d4 + 2) hp and gaining advantage on all attack rolls and ability checks for 1 round. Any non-fiend who consumes a bottled soul regains 7 (2d4 + 2) hit points and must make a DC 14 Constitution saving throw. On a failure, the creature is stunned for 1 round and poisoned for 1 hour. On a success, the creature is poisoned for 1 hour."
  "name": "Bottled Soul (3/Day)"
- "desc": "Whenever the rattok demon is subjected to fire or necrotic damage, it takes no damage and instead is unaffected by spells and other magical effects that would impede its movement. This trait works like the freedom of movement spell, except it only lasts for 1 minute."
  "name": "Fire Dancer"
- "desc": "The rattok has advantage on saving throws against spells and other magical effects."
  "name": "Magic Resistance"
"actions":
- "desc": "The rattok makes three attacks: one with its bite and two with its claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) piercing damage plus 3 (1d6) necrotic damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4 + 3) slashing damage."
  "name": "Claws"
- "desc": "The rattok unleashes a wave of shadowy versions of itself that fan out and rake dark claws across all creatures within 15 feet. Each creature in that area must make a DC 13 Dexterity saving throw, taking 14 (4d6) necrotic damage on a failed save, or half as much damage on a successful one."
  "name": "Necrotic Rush (Recharge 5-6)"
source:
- [Creature Codex](https://koboldpress.com/kpstore/product/creature-codex-for-5th-edition-dnd)
```
