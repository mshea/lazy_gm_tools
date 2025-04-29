---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob3
- monster/cr/7
- monster/size/Gargantuan
- monster/type/Monstrosity
statblock: inline
aliases: ["cave-mimic", "Cave Mimic-tob3"]
---
# Cave Mimic Tob3
*Source: Tome of Beasts 3 Page 77*

```statblock
"dice": false
"name": "Cave Mimic Tob3"
"size": "Gargantuan"
"type": "Monstrosity"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "174"
"hit_dice": "12d20+48"
"stats":
- !!int "20"
- !!int "8"
- !!int "18"
- !!int "5"
- !!int "13"
- !!int "10"
"speed": "walk 10 ft. burrow 20 ft."
"senses": darkvision 60', tremorsense 60', passive Perception 14
"skillsaves":
  "perception": !!int "1"
"languages": "—"
"cr": "7"
"damage_immunities": "acid"
"traits":
- "desc": "Adheres to anything that touches it. Creature adhered is also grappled (escape DC 15). Ability checks to escape: disadvantage. It can choose for creature to not be affected."
  "name": "Adhesive (Object or Terrain Form)"
- "desc": "While motionless it is indistinguishable from an ordinary object or terrain feature."
  "name": "False Appearance (Object or Terrain Form)"
- "desc": "Advantage on attack rolls vs. any creature grappled by it."
  "name": "Grappler"
- "desc": "Shape minor pseudopods into Med or smaller objects. Creature that sees one can tell it is an imitation with DC 15 Wis (Insight) check. Creature with half its body in contact with object (ex: sitting on “chair”) is subject to Adhesive."
  "name": "Object Mimicry (Object or Terrain Form)"
- "desc": "Occupy another’s space vice versa."
  "name": "Stretched Form (Terrain Form)"
- "desc": "Can burrow through solid rock at half its burrow speed and leaves a 15-foot-diameter tunnel in its wake."
  "name": "Tunneler"
"actions":
- "desc": "Four Pseudopod attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +8 to hit, 15 ft., one target, 10 (1d10+5) bludgeoning damage. If mimic is in object or terrain form target is subjected to mimic’s Adhesive trait."
  "name": "Pseudopod"
- "desc": "Launches harpoon-like pseudopod shaped like pointed object (ex: stalagtite) at a creature in its space. Target: DC 14 Dex or 24 (7d6) piercing damage and pseudopod stuck in it. While pseudopod is stuck target restrained and 10 (3d6) acid at start of each of its turns mimic can use bonus action to pull target up to 30' to its nearest wall ceiling or similar surface. Creature including target can use action to detach pseudopod via DC 15 Str. If target detaches harpoon while stuck to mimic's ceiling: normal fall damage."
  "name": "Stalagteeth (Terrain Form Recharge 4–6)"
"bonus_actions":
- "desc": "Into Gargantuan object or stretches out as terrain up to 35 ft. cube or back to true amorphous form. Stats same. Items worn/carried not transformed. Reverts on death."
  "name": "Change Shape"
source:
- [Tome of Beasts 3](https://koboldpress.com/kpstore/product/tome-of-beasts-3-for-5th-edition/)
```
