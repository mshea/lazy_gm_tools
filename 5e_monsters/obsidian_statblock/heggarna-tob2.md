---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob2
- monster/cr/1
- monster/size/Tiny
- monster/type/Aberration
statblock: inline
aliases: ["heggarna", "Heggarna-tob2"]
---
# Heggarna Tob2
*Source: Tome of Beasts 2 Page 196*

```statblock
"dice": false
"name": "Heggarna Tob2"
"size": "Tiny"
"type": "Aberration"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "40"
"hit_dice": "9d4+18"
"stats":
- !!int "7"
- !!int "16"
- !!int "14"
- !!int "12"
- !!int "13"
- !!int "16"
"speed": "walk 20 ft. climb 20 ft."
"senses": darkvision 60 ft., passive Perception 13
"skillsaves":
  "perception": !!int "3"
  "stealth": !!int "5"
"languages": "Deep Speech, telepathy 30 ft."
"cr": "1"
"traits":
- "desc": "While in dim light or darkness, the heggarna has advantage on Dexterity (Stealth) checks made to hide. It can use this trait only while it is disguised as a cat."
  "name": "Cat Sneak"
- "desc": "As a bonus action, the heggarna can attach its lamprey-like maw to a sleeping creature. The target’s Charisma score is reduced by 1d4 when the heggarna first attaches to it. The target’s Charisma score is then reduced by 1 for each hour the heggarna stays attached. The target dies if this reduces its Charisma to 0. Otherwise, the reduction lasts until the target finishes a long rest at least 24 hours after the heggarna reduced its Charisma.\n\nWhile attached, the heggarna fills the target’s dreams with nightmares. The target must succeed on a DC 13 Wisdom saving throw or it doesn’t gain any benefit from its current rest. If the target succeeds on the saving throw by 5 or more, it immediately awakens.\n\nThe heggarna can detach itself by spending 5 feet of its movement. It does so after it reduces the target’s Charisma by 8 or if the target dies."
  "name": "Dream Eating"
"actions":
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4 + 3) piercing damage plus 3 (1d6) psychic damage."
  "name": "Bite"
- "desc": "The heggarna unleashes a barrage of psychic energy in a 15-foot cone. Each creature in that area must make a DC 13 Wisdom saving throw. On a failure, a creature takes 7 (2d6) psychic damage and is incapacitated until the end of its next turn as it is bombarded with nightmarish images. On a success, a creature takes half the damage and isn’t incapacitated."
  "name": "Dream Rift (Recharge 5-6)"
- "desc": "The heggarna covers itself with a magical illusion that makes it look like a Tiny cat. The illusion ends if the heggarna takes a bonus action to end it or if the heggarna dies. The illusion ends immediately if the heggarna attacks or takes damage, but it doesn’t end when the heggarna uses Dream Eating.\n\nThe changes wrought by this effect fail to hold up to physical inspection. For example, the heggarna could appear to have fur, but someone touching it would feel its slippery flesh. Otherwise, a creature must take an action to visually inspect the illusion and succeed on a DC 15 Intelligence (Investigation) check to discern the heggarna is disguised."
  "name": "Illusory Appearance"
source:
- [Tome of Beasts 2](https://koboldpress.com/kpstore/product/tome-of-beasts-2-for-5th-edition)
```
