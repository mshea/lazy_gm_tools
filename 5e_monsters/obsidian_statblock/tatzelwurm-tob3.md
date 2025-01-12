---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob3
- monster/cr/6
- monster/size/Medium
- monster/type/Dragon
statblock: inline
aliases: ["tatzelwurm", "Tatzelwurm-tob3"]
---
# Tatzelwurm Tob3
*Source: Tome of Beasts 3 Page 366*

```statblock
"dice": false
"name": "Tatzelwurm Tob3"
"size": "Medium"
"type": "Dragon"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "120"
"hit_dice": "16d8+48"
"stats":
- !!int "17"
- !!int "14"
- !!int "16"
- !!int "5"
- !!int "12"
- !!int "11"
"speed": "walk 40 ft. climb 30 ft."
"senses": blindsight 10', darkvision 60', passive Perception 14
"skillsaves":
  "perception": !!int "1"
"languages": "Draconic"
"cr": "6"
"damage_immunities": "poison"
"traits":
- "desc": "Its blood is as toxic as its bite. When it takes piercing or slashing each creature within 5 ft. of it: DC 14 Con save or take 5 (2d4) poison. A creature that consumes flesh of tatzelwurm: DC 14 Con save or poisoned 8 hrs. "
  "name": "Poisonous Blood"
- "desc": "If it moves 20'+ straight to creature and then hits it with Claw on same turn target knocked prone (DC 14 Str negates). If target prone wurm can make one Bite vs. it as a bonus action."
  "name": "Pounce"
"actions":
- "desc": "One Bite attack and two Claw attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, 5 ft., one target, 10 (2d6+3) piercing damage + 5 (2d4) poison."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +6 to hit, 5 ft., one target, 6 (1d4+3) slashing damage."
  "name": "Claw"
- "desc": "Exhales a cloud of poisonous vapor in a 15 ft. cone. Each creature in that area: 21 (6d6) poison and is poisoned for 1 min (DC 14 Con half damag not poisoned). A poisoned creature can re-save at end of each of its turns success ends effect on itself."
  "name": "Poisonous Breath (Recharge 6)"
"legendary_actions":
- "desc": "Up to half its speed with o provoking opportunity attacks."
  "name": "Move"
- "desc": "Each creature within 30' of it: frightened until the end of its next turn (DC 13 Wis negates)."
  "name": "Angry Hiss (2)"
- "desc": "Swings its tail in a wide arc around it. Each creature within 10 ft. knocked prone (DC 14 Str negates)."
  "name": "Tail Slap (2)"
source:
- [Tome of Beasts 3](https://koboldpress.com/kpstore/product/tome-of-beasts-3-for-5th-edition/)
```
