---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob3
- monster/cr/3
- monster/size/Medium
- monster/type/Aberration
statblock: inline
aliases: ["obeleric", "Obeleric-tob3"]
---
# Obeleric Tob3
*Source: Tome of Beasts 3 Page 294*

```statblock
"dice": false
"name": "Obeleric Tob3"
"size": "Medium"
"type": "Aberration"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "75"
"hit_dice": "10d8+30"
"stats":
- !!int "16"
- !!int "14"
- !!int "16"
- !!int "7"
- !!int "12"
- !!int "7"
"speed": "walk 30 ft. burrow 15 ft."
"senses": tremorsense 30', passive Perception 12
"skillsaves":
  "perception": !!int "1"
"languages": "understands Common and Void Speech but can’t speak"
"cr": "3"
"traits":
- "desc": "While motionless indistinguishable from normal boulder."
  "name": "False Appearance"
- "desc": "If it moves 15 ft.+ straight to target and then hits target with Boulder Bash attack on same turn target has disadvantage on save vs. being knocked prone. If target is prone obeleric can move up to 15 ft. straight to 2nd target with o provoking opportunity attacks from 1st target and make one Boulder Bash attack vs. 2nd target as a bonus action if 2nd target is within its reach."
  "name": "Ricochet Charge (Defensive Form Only)"
"actions":
- "desc": "Two Tentacle Slam or Acid Spit attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +5 to hit, 5 ft., one target, 14 (2d10+3) bludgeoning damage and target knocked prone (DC 13 Str not prone)."
  "name": "Boulder Bash (Defensive Form Only)"
- "desc": "Melee Weapon Attack: +5 to hit, 5 ft., one target, 8 (2d4+3) bludgeoning damage + 3 (1d6) acid."
  "name": "Tentacle Slam"
- "desc": "Ranged Weapon Attack: +4 to hit 20/60' one target 9 (2d6+2) acid. A creature hit by this takes additional 3 (1d6) acid at the start of its next turn."
  "name": "Spit Acid"
"reactions":
- "desc": "When the obeleric takes bludgeoning it can vomit acid at one creature within 5 ft. of it. That creature must make DC 13 Dex save or take 3 (1d6) acid."
  "name": "Reflux"
"bonus_actions":
- "desc": "Can roll itself into a boulder-like defensive form or back into its tentacled true form. While in defensive form it has resistance to B/P/S damage from nonmagical attacks can’t make Tentacle Slam or Spit Acid attacks and can’t use Reflux."
  "name": "Defensive Roll"
source:
- [Tome of Beasts 3](https://koboldpress.com/kpstore/product/tome-of-beasts-3-for-5th-edition/)
```
