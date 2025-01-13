---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/cc
- monster/cr/12
- monster/size/Huge
- monster/type/Undead
statblock: inline
aliases: ["undead-phoenix", "Undead Phoenix-cc"]
---
# Undead Phoenix Cc
*Source: Creature Codex Page 361*

```statblock
"dice": false
"name": "Undead Phoenix Cc"
"size": "Huge"
"type": "Undead"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "142"
"hit_dice": "15d12+45"
"stats":
- !!int "23"
- !!int "14"
- !!int "17"
- !!int "8"
- !!int "17"
- !!int "9"
"speed": "fly 90 ft. walk 30 ft."
"saves":
  "Strength": !!int "10"
  "Constitution": !!int "7"
  "Wisdom": !!int "7"
"senses": darkvision 120 ft., passive Perception 17
"skillsaves":
  "perception": !!int "7"
"languages": "-"
"cr": "12"
"damage_immunities": "necrotic, fire, poison"
"traits":
- "desc": "A living creature that starts its turn within 10 feet of the undead phoenix can't regain hp and has disadvantage on Constitution saving throws until the start of its next turn."
  "name": "Bilious Aura"
- "desc": "If it dies, the undead phoenix reverts into a pile of necrotic-tainted ooze and is reborn in 24 hours with all of its hp. Only killing it with radiant damage prevents this trait from functioning."
  "name": "Eternal Unlife"
"actions":
- "desc": "The undead phoenix makes three attacks: two with its claws and one with its decaying bite."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 20 (4d6 + 6) slashing damage."
  "name": "Claws"
- "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 15 (2d8 + 6) piercing damage plus 14 (4d6) necrotic damage. The target must succeed on a DC 15 Constitution saving throw or be cursed with perpetual decay. The cursed target can't regain hp until the curse is lifted by the remove curse spell or similar magic."
  "name": "Decaying Bite"
source:
- [Creature Codex](https://koboldpress.com/kpstore/product/creature-codex-for-5th-edition-dnd)
```
