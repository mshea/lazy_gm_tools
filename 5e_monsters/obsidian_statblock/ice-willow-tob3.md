---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob3
- monster/cr/6
- monster/size/Large
- monster/type/Plant
statblock: inline
aliases: ["ice-willow", "Ice Willow-tob3"]
---
# Ice Willow Tob3
*Source: Tome of Beasts 3 Page 240*

```statblock
"dice": false
"name": "Ice Willow Tob3"
"size": "Large"
"type": "Plant"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "142"
"hit_dice": "15d10+60"
"stats":
- !!int "19"
- !!int "9"
- !!int "18"
- !!int "7"
- !!int "14"
- !!int "5"
"speed": "walk 20 ft."
"senses": darkvision 60', passive Perception 12
"skillsaves":
  "perception": !!int "2"
"languages": "Sylvan"
"cr": "6"
"damage_immunities": "cold"
"damage_resistances": "lightning, slashing"
"traits":
- "desc": "While motionless indistinguishable from ice-covered willow tree."
  "name": "False Appearance"
- "desc": "If it takes fire damage its icicles partially melt. Until the end of the ice willow’s next turn creatures have advantage on saves vs. the willow’s Icicle Drop and Icicle Spray."
  "name": "Ice Melt"
"actions":
- "desc": "Two Slam attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +7 to hit, 10 ft., one target, 13 (2d8+4) bludgeoning damage + 7 (2d6) cold."
  "name": "Slam"
- "desc": "Shakes several spear-like icicles loose. Each creature within 10 ft. of the willow must make a DC 15 Dex save taking 9 (2d8) piercing damage and 7 (2d6) cold on a failed save or half damage if made."
  "name": "Icicle Drop (Recharge 4–6)"
- "desc": "Flings icicles in a 30' cone. All in area make a DC 15 Dex save taking 18 (4d8) piercing damage and 14 (4d6) cold on a failed save or half damage if made."
  "name": "Icicle Spray (Recharge 6)"
"reactions":
- "desc": "When the ice willow takes fire it can immediately use Icicle Drop if available."
  "name": "Melting Icicles"
source:
- [Tome of Beasts 3](https://koboldpress.com/kpstore/product/tome-of-beasts-3-for-5th-edition/)
```
