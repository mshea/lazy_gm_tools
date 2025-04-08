---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/a5emm
- monster/cr/4
- monster/size/Large
- monster/type/Monstrosity
statblock: inline
aliases: ["phase-monster-a5e", "Phase Monster-a5emm"]
---
# Phase Monster A5Emm
*Source: A5e Monstrous Menagerie Page 361*

```statblock
"dice": false
"name": "Phase Monster A5Emm"
"size": "Large"
"type": "Monstrosity"
"ac": !!int "13"
"ac_class": ""
"hp": !!int "85"
"hit_dice": "10d10+30"
"stats":
- !!int "18"
- !!int "14"
- !!int "16"
- !!int "4"
- !!int "14"
- !!int "8"
"speed": "walk 30 ft. fly 50 ft."
"senses": darkvision 60 ft., passive Perception 14
"skillsaves":
  "perception": !!int "4"
  "stealth": !!int "4"
"cr": "4"
"traits":
- "desc": "A magical illusion cloaks the phase monster, creating a reflection of the monster nearby and concealing its precise location. While the monster is not incapacitated, attack rolls against it have disadvantage. When a creature hits the phase monster with an attack, this trait stops working until the end of the phase monsters next turn."
  "name": "Mirror Image"
"actions":
- "desc": "The phase monster attacks with its horns and its claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit  reach 5 ft.  one target. Hit: 8 (2d4 + 3) bludgeoning damage. If the target is a creature and the phase monster moves at least 20 feet straight towards the target before the attack  the target takes an additional 5 (2d4) bludgeoning damage and makes a DC 14 Strength saving throw  falling prone on a failure."
  "name": "Horns"
- "desc": "Melee Weapon Attack: +6 to hit  reach 5 ft.  one target. Hit: 8 (2d4 + 3) slashing damage  plus an additional 5 (2d4) slashing damage if the target is prone."
  "name": "Claws (True Form Only)"
- "desc": "The phase monster unleashes a horrific screech. Each creature within 60 feet that can hear it makes a DC 13 Wisdom saving throw. On a failure  it is frightened for 1 minute. While frightened by Blood-Curdling Scream  a creature must take the Dash action and move away from the phase monster by the safest available route on each of its turns  unless there is nowhere to move. If the creature ends its turn in a location where it doesnt have line of sight to the phase monster  the creature makes a Wisdom saving throw. On a successful save  it is no longer frightened."
  "name": "Blood-Curdling Scream (Recharge 5-6)"
"bonus_actions":
- "desc": "The phase monster magically changes its form to that of a Small goat or into its true form. While in goat form, it loses its fly speed and Mirror Image trait. Its statistics, other than its size and speed, are unchanged in each form."
  "name": "Shapeshift"
source:
- [A5e Monstrous Menagerie](https://enpublishingrpg.com/products/level-up-monstrous-menagerie-a5e)
```
