---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/cc
- monster/cr/4
- monster/size/Small
- monster/type/Humanoid
statblock: inline
aliases: ["tosculi-jeweled-drone", "Tosculi Jeweled Drone-cc"]
---
# Tosculi Jeweled Drone Cc
*Source: Creature Codex Page 355*

```statblock
"dice": false
"name": "Tosculi Jeweled Drone Cc"
"size": "Small"
"type": "Humanoid"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "90"
"hit_dice": "12d6+48"
"stats":
- !!int "10"
- !!int "18"
- !!int "18"
- !!int "14"
- !!int "14"
- !!int "17"
"speed": "fly 60 ft. walk 30 ft."
"senses": darkvision 60 ft., passive Perception 12
"skillsaves":
  "deception": !!int "5"
  "insight": !!int "4"
  "persuasion": !!int "5"
"languages": "Common, Infernal, Tosculi"
"cr": "4"
"traits":
- "desc": "The jeweled drone emits a sweet scent that empowers other tosculi within 15 feet of the drone. A tosculi that starts its turn within the area can add a d6 to one attack roll or saving throw it makes before the start of its next turn, provided it can smell the scent. A tosculi can benefit from only one Pheromones die at a time. This effect ends if the jeweled drone dies."
  "name": "Pheromones"
- "desc": "While in bright light, the jeweled drone's carapace shines and glitters. When a non-tosculi creature that can see the drone starts its turn within 30 feet of the drone, the drone can force the creature to make a DC 12 Wisdom saving throw if the drone isn't incapacitated. On a failure, the creature is blinded until the start of its next turn.\n\nUnless surprised, a creature can avert its eyes to avoid the saving throw at the start of its turn. If it does so, it can't see the drone until the start of its next turn, when it can avert its eyes again. If it looks at the drone in the meantime, it must immediately make the save."
  "name": "Scintillating Carapace"
"actions":
- "desc": "The jeweled drone makes three attacks: two with its claws and one with its scimitar."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d6 + 4) slashing damage."
  "name": "Claws"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d6 + 4) slashing damage plus 10 (3d6) poison damage. If the poison damage reduces the target to 0 hp, the target is stable but poisoned for 1 hour, even after regaining hp, and is paralyzed while poisoned in this way."
  "name": "Scimitar"
"reactions":
- "desc": "When a creature makes an attack against a tosculi hive queen, the jeweled drone grants a +2 bonus to the queen's AC if the drone is within 5 feet of the queen."
  "name": "Protect the Queen"
source:
- [Creature Codex](https://koboldpress.com/kpstore/product/creature-codex-for-5th-edition-dnd)
```
