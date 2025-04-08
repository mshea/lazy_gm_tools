---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/cc
- monster/cr/0.25
- monster/size/Tiny
- monster/type/Beast
statblock: inline
aliases: ["necrotic-tick", "Necrotic Tick-cc"]
---
# Necrotic Tick Cc
*Source: Creature Codex Page 275*

```statblock
"dice": false
"name": "Necrotic Tick Cc"
"size": "Tiny"
"type": "Beast"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "3"
"hit_dice": "1d4+1"
"stats":
- !!int "2"
- !!int "14"
- !!int "12"
- !!int "1"
- !!int "12"
- !!int "8"
"speed": "climb 10 ft. walk 10 ft."
"senses": darkvision 60 ft., passive Perception 11
"skillsaves":
"languages": "-"
"cr": "1/4"
"traits":
- "desc": "While attached to a living host, a necrotic tick leaks negative energy into the host's bloodstream, quickly closing over the creature's wounds with scabrous, necrotic flesh. If the host doesn't already have regeneration, it regains 2 hp at the start of its turn if it has at least 1 hit point. Track how many “necrotic hp” a host recovers via Necrotic Regeneration. Magical healing reverses the necrosis and subtracts an equal number of necrotic hp from those accumulated. When the necrotic hp equal the host's hit point maximum, the host becomes a zombie."
  "name": "Necrotic Regeneration"
- "desc": "When a necrotic tick's living host has lost three-quarters of its maximum hp from Blood Drain, the tick's toxins fill the host with an unnatural desire to approach other living beings. When a suitable creature is within 5 feet, the tick incites a sudden rage in the host, riding the current host to a new host. The current host must succeed on a DC 13 Wisdom saving throw or it attempts to grapple a living creature within 5 feet of it as a reaction. The host can re-attempt this saving throw at the end of each turn that it suffers damage from the necrotic tick's Blood Drain."
  "name": "Ride Host"
"actions":
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 1 piercing damage, and the tick attaches to the target. While attached, the necrotic tick doesn't attack. Instead, at the start of each of the tick's turns, the target loses 5 (1d4 + 3) hp due to blood loss. The target must make a DC 13 Wisdom saving throw. If it fails, it is affected by the tick's toxins and doesn't attempt to remove the tick. The host will even replace a dislodged tick unless prevented from doing so for 1 minute, after which the tick's influence fades. \n\nThe tick can detach itself by spending 5 feet of its movement. It does so when seeking a new host or if the target dies. A creature, including the target, can use its action to detach the tick. When a necrotic tick detaches, voluntarily or otherwise, its host takes 1 necrotic damage."
  "name": "Blood Drain"
source:
- [Creature Codex](https://koboldpress.com/kpstore/product/creature-codex-for-5th-edition-dnd)
```
