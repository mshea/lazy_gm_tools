---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/cc
- monster/cr/4
- monster/size/Medium
- monster/type/Undead
statblock: inline
aliases: ["tar-ghoul", "Tar Ghoul-cc"]
---
# Tar Ghoul Cc
*Source: Creature Codex Page 176*

```statblock
"dice": false
"name": "Tar Ghoul Cc"
"size": "Medium"
"type": "Undead"
"ac": !!int "13"
"ac_class": "None"
"hp": !!int "66"
"hit_dice": "12d8+12"
"stats":
- !!int "16"
- !!int "17"
- !!int "13"
- !!int "11"
- !!int "10"
- !!int "8"
"speed": "walk 30 ft."
"senses": darkvision 60 ft., passive Perception 12
"skillsaves":
  "perception": !!int "2"
"languages": "Common, Darakhul"
"cr": "4"
"damage_immunities": "fire, poison"
"damage_resistances": "necrotic"
"traits":
- "desc": "As a bonus action or when it takes fire damage, the tar ghoul bursts into flame. The tar ghoul continues burning until it takes cold damage or is immersed in water. A creature that touches the tar ghoul or hits it with a melee attack while within 5 feet of it while it is burning takes 3 (1d6) fire damage. While burning, a tar ghoul deals an extra 3 (1d6) fire damage on each melee attack, and its vomit tar action is a 15-foot cone that ignites immediately. Each creature in that area must make a DC 13 Dexterity saving throw, taking 21 (6d6) fire damage on a failed save, or half as much damage on a successful one."
  "name": "Fire Hazard"
"actions":
- "desc": "The tar ghoul makes one bite attack and one claw attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 12 (2d8 + 3) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage. If the target is a creature other than an elf or undead, it must succeed on a DC 11 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
  "name": "Claw"
- "desc": "The tar ghoul vomits tar, covering the ground in a 10-foot square within 5 feet of it. Each creature in the area must succeed on a DC 13 Dexterity saving throw or be covered with tar. The tar ignites if touched by a source of fire or if a creature covered with tar takes fire damage. The tar burns for 3 (1d6) rounds or until a creature takes an action to stop the blaze. A creature that starts its turn in the area or that starts its turn covered with burning tar takes 5 (1d10) fire damage."
  "name": "Vomit Tar (Recharge 5-6)"
source:
- [Creature Codex](https://koboldpress.com/kpstore/product/creature-codex-for-5th-edition-dnd)
```
