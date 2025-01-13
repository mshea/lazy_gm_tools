---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob3
- monster/cr/9
- monster/size/Huge
- monster/type/Monstrosity
statblock: inline
aliases: ["stargazer", "Stargazer-tob3"]
---
# Stargazer Tob3
*Source: Tome of Beasts 3 Page 354*

```statblock
"dice": false
"name": "Stargazer Tob3"
"size": "Huge"
"type": "Monstrosity"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "168"
"hit_dice": "16d12+64"
"stats":
- !!int "20"
- !!int "10"
- !!int "18"
- !!int "3"
- !!int "14"
- !!int "4"
"speed": "walk 15 ft. burrow 20 ft."
"saves":
  "Strength": !!int "9"
"senses": tremorsense 60', passive Perception 16
"skillsaves":
  "perception": !!int "2"
"languages": "Common, Ignan"
"cr": "9"
"traits":
- "desc": "Has 12 tendrils. If all are destroyed can't use Tendril Whip. Destroyed tendrils regrow when it finishes long rest."
  "name": "Tendril Whip Regrowth"
- "desc": "Advantage: spell/magic effect saves."
  "name": "Magic Resistance"
"actions":
- "desc": "3 Bites or Slams and 2 Whips. Can replace 1 Bite with Trap."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +9 to hit, 5 ft., one creature,. 18 (3d8+5) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +9 to hit, 10 ft., one creature,. 15 (3d6+5) bludgeoning damage."
  "name": "Slam"
- "desc": "Melee Weapon Attack: +9 to hit, 20 ft., one creature,. Target grappled (escape DC 16). Until grapple ends target restrained stargazer can’t use same tendril on another. Tendril destroyable (AC 10; hp 20; immune to poison and psychic). Destroying tendril doesn't damage stargazer. "
  "name": "Tendril Whip"
- "desc": "If it has no creatures trapped snaps its appendages shut. Each creature within 5 ft. of it: 14 (4d6) bludgeoning damage and trapped ending grapple if grappled (DC 16 Dex half damage not trapped). Creature grappled by stargazer: disadvantage on the save. Trapped creature blinded restrained has total cover vs. attacks and effects outside stargazer and takes 10 (3d6) bludgeoning damage at start of each stargazer turn. Trapped creature can take its action to escape by making a DC 16 Str check. Stargazer can have up to 2 creatures trapped at a time. While it has 1+ creature trapped can’t burrow and can’t Bite creatures outside its Wing Trap."
  "name": "Wing Trap"
"reactions":
- "desc": "When 1+ creatures step onto a space on ground within 10 ft. directly above a hidden stargazer stargazer can burrow up to 10 ft. and snap its wing-like appendages shut emerging on the ground in space directly above where it was buried and that contains one or more other creatures. Each creature must make DC 16 Dex save or be trapped as if it failed save vs. Wing Trap."
  "name": "Wing Trap Snap"
"bonus_actions":
- "desc": "Pulls up to 2 creatures grappled by it up to 15 ft. straight to it."
  "name": "Reel"
source:
- [Tome of Beasts 3](https://koboldpress.com/kpstore/product/tome-of-beasts-3-for-5th-edition/)
```
