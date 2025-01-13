---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob3
- monster/cr/10
- monster/size/Medium
- monster/type/Construct
statblock: inline
aliases: ["void-knight", "Void Knight-tob3"]
---
# Void Knight Tob3
*Source: Tome of Beasts 3 Page 386*

```statblock
"dice": false
"name": "Void Knight Tob3"
"size": "Medium"
"type": "Construct"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "153"
"hit_dice": "18d8+72"
"stats":
- !!int "22"
- !!int "7"
- !!int "18"
- !!int "12"
- !!int "16"
- !!int "10"
"speed": "walk 20 ft."
"saves":
  "Strength": !!int "1"
  "Constitution": !!int "8"
  "Wisdom": !!int "7"
"senses": blindsight 120' (blind beyond), passive Perception 17
"skillsaves":
  "perception": !!int "3"
"languages": "Void Speech, telepathy 120'"
"cr": "10"
"damage_immunities": "force, poison"
"damage_resistances": "nonmagic B/P/S attacks"
"traits":
- "desc": "If creature within 5 ft. of knight attempts to move away from it that creature: DC 13 Str save or be unable to move away from knight. If creature uses magic to move (ex: misty step or freedom of movement) it automatically succeeds."
  "name": "Call of the Void"
- "desc": "Doesn’t require air food drink or sleep."
  "name": "Construct Nature"
- "desc": "Can’t be moved vs. its will except by magical means. In addition knight has disadvantage on Dex (Acrobatics) and Dex (Stealth) checks."
  "name": "Immoveable"
- "desc": "When Void knight dies it collapses in on itself releasing a wave of Void energy. Creature within 5 ft. of it: 18 (4d8) force (DC 16 Dex half)."
  "name": "Implosive End"
"actions":
- "desc": "Two Void Gauntlet attacks or three Void Bolts."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +10 to hit, 5 ft., one target, 13 (2d6+6) slashing damage + 18 (4d8) force. If the target is a Med or smaller creature it must make DC 16 Str save or be knocked prone. "
  "name": "Void Gauntlet"
- "desc": "Ranged Spell Attack: +7 to hit, 120 ft., one target, 21 (4d8+3) force."
  "name": "Void Bolt"
- "desc": "Sends Void tendrils at up to three creatures it can see within 60' of it that are not behind total cover. Each target must make DC 16 strength Saving throw or be pulled up to 30' toward the knight. Then each creature within 5 ft. of knight takes 36 (8d8) force."
  "name": "Pull of the Void (Recharge 5–6)"
source:
- [Tome of Beasts 3](https://koboldpress.com/kpstore/product/tome-of-beasts-3-for-5th-edition/)
```
