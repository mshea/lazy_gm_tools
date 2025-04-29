---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob2
- monster/cr/10
- monster/size/Large
- monster/type/Construct
statblock: inline
aliases: ["fabricator", "Fabricator-tob2"]
---
# Fabricator Tob2
*Source: Tome of Beasts 2 Page 138*

```statblock
"dice": false
"name": "Fabricator Tob2"
"size": "Large"
"type": "Construct"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "147"
"hit_dice": "14d10+70"
"stats":
- !!int "18"
- !!int "7"
- !!int "20"
- !!int "15"
- !!int "15"
- !!int "5"
"speed": "climb 15 ft. walk 30 ft. swim 15 ft."
"senses": blindsight 60 ft. (blind beyond this radius), passive Perception 16
"skillsaves":
  "perception": !!int "6"
"languages": "understands Common, Deep Speech, and Draconic but can’t speak"
"cr": "10"
"damage_immunities": "force, poison, psychic"
"damage_resistances": "bludgeoning, piercing, and slashing from nonmagical attacks"
"traits":
- "desc": "With at least 10 minutes of work, a fabricator can refine raw materials and create entirely new objects by combining material it has absorbed. For example, it can create a rope from absorbed hemp, clothing from absorbed flax or wool, and a longsword from absorbed metal. A fabricator can create intricate objects like thieves’ tools and objects with moving parts with at least 1 hour of work and twice the requisite raw materials, but it can’t create magic items. The quality of objects it creates is commensurate with the quality of the raw materials."
  "name": "Assemble"
- "desc": "A creature that touches the fabricator or hits it with a melee attack while within 5 feet of it takes 3 (1d6) force damage. Any nonmagical weapon made of metal or once-living material (such as bone or wood) that hits the fabricator is slowly dismantled by the minute constructs that make up the fabricator. After dealing damage, the weapon takes a permanent and cumulative -1 penalty to damage rolls. If its penalty drops to -5, the weapon is destroyed. Nonmagical ammunition made of metal or once-living material that hits the fabricator is destroyed after dealing damage. At the start of each of its turns, the fabricator can choose whether this trait is active."
  "name": "Dismantling Form"
"actions":
- "desc": "The fabricator makes two disassembling slam attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 15 (2d10 + 4) bludgeoning damage plus 10 (3d6) force damage. A creature reduced to 0 hp by this attack immediately dies and its body and nonmagical equipment is disassembled and absorbed into the fabricator. The creature can be restored to life only by means of a true resurrection or a wish spell. The fabricator can choose to not disassemble a creature or its equipment after reducing it to 0 hp."
  "name": "Disassembling Slam"
source:
- [Tome of Beasts 2](https://koboldpress.com/kpstore/product/tome-of-beasts-2-for-5th-edition)
```
