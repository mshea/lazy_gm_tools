---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob3
- monster/cr/13
- monster/size/Huge
- monster/type/Plant
statblock: inline
aliases: ["nariphon", "Nariphon-tob3"]
---
# Nariphon Tob3
*Source: Tome of Beasts 3 Page 285*

```statblock
"dice": false
"name": "Nariphon Tob3"
"size": "Huge"
"type": "Plant"
"ac": !!int "10"
"ac_class": "natural armor"
"hp": !!int "195"
"hit_dice": "17d12+85"
"stats":
- !!int "24"
- !!int "6"
- !!int "21"
- !!int "6"
- !!int "14"
- !!int "9"
"speed": "walk 15 ft."
"senses": tremorsense 120', passive Perception 17
"skillsaves":
  "perception": !!int "2"
"languages": "understands Common but can’t speak"
"cr": "13"
"damage_immunities": "bludgeoning, piercing, poison"
"traits":
- "desc": "[+]Appearance[/+] Motionless: indistinguishable from ordinary tree."
  "name": "False"
- "desc": "A vegetative clone resembles the creature hit by the nariphon’s Thorn attack. Each clone uses stats of an awakened tree except it has the target’s size speed and any special senses such as darkvision. Clones are extensions of the nariphon and it can see and hear what a clone sees and hears as if it was in the clone’s space. The nariphon can switch from using its senses to using a clone’s or back again as a bonus action. Nariphon can have no more than six vegetative clones under its control at one time. Each clone remains until killed or until the nariphon dismisses it (no action required)."
  "name": "Vegetative Clone"
"actions":
- "desc": "Four Roots or Thorns attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +12 to hit, 15 ft., one target, 18 (2d10+7) bludgeoning damage and target is grappled (escape DC 18). Until the grapple ends target is restrained and it takes 3 (1d6) poison at the start of each of its turns. The nariphon has four roots each of which can grapple only one target."
  "name": "Roots"
- "desc": "Ranged Weapon Attack: +12 to hit 30/120' one target 17 (3d6+7) piercing damage and target must make DC 18 Wis save or thorn falls to the ground and instantly grows into a vegetative clone (see above) under nariphon’s control."
  "name": "Thorns"
"bonus_actions":
- "desc": "One creature grappled by nariphon is knocked prone dragged into ground and buried just below surface ending grapple. Victim is restrained unable to breathe or stand up. Creature including victim can use action to free buried creature via DC 18 Str."
  "name": "Bury"
source:
- [Tome of Beasts 3](https://koboldpress.com/kpstore/product/tome-of-beasts-3-for-5th-edition/)
```
