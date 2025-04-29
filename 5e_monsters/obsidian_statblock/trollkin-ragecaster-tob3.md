---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob3
- monster/cr/5
- monster/size/Medium
- monster/type/Humanoid
statblock: inline
aliases: ["trollkin-ragecaster", "Trollkin Ragecaster-tob3"]
---
# Trollkin Ragecaster Tob3
*Source: Tome of Beasts 3 Page 377*

```statblock
"dice": false
"name": "Trollkin Ragecaster Tob3"
"size": "Medium"
"type": "Humanoid"
"ac": !!int "15"
"ac_class": "leather armor"
"hp": !!int "112"
"hit_dice": "15d8+45"
"stats":
- !!int "14"
- !!int "17"
- !!int "16"
- !!int "9"
- !!int "14"
- !!int "18"
"speed": "walk 30 ft."
"senses": darkvision 60', passive Perception 15
"skillsaves":
  "perception": !!int "2"
"languages": "Common, Trollkin"
"cr": "5"
"traits":
- "desc": "Its claw deals one extra die of its damage when trollkin isn’t ragecasting (included in the attack)."
  "name": "Brutal Claws"
- "desc": "Advantage: spell/magic effect saves."
  "name": "Magic Resistance"
- "desc": "Regains 10 hp at the start of its turn. If it takes acid or fire this trait doesn’t function at start of its next turn. Dies only if it starts turn with 0 hp and doesn’t regenerate."
  "name": "Regeneration"
- "desc": "Its skin is thick and tough granting it a +1 bonus to Armor Class (already factored into its AC)."
  "name": "Thick Hide"
"actions":
- "desc": "Two Claws or two Elemental Blast attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, 5 ft., one target, 16 (3d8+3) slashing damage when not ragecasting or 12 (2d8+3) slashing damage while ragecasting."
  "name": "Claw"
- "desc": "Ranged Spell Attack: +7 to hit, 120 ft., one target, 14 (3d6+4) cold fire lightning or thunder (trollkin’s choice)."
  "name": "Elemental Blast (Ragecasting Only)"
- "desc": "Cha (DC 15) no material components: At will: thunderwave3/day ea: call lightning firebal1/day: fire shield"
  "name": "Spellcasting (Ragecasting Only)"
"bonus_actions":
- "desc": "Enters special rage that lets it channel elemental power for 1 min. While ragecasting: disadvantage on Wis saves and gains fly speed of 60'. It can end ragecasting as a bonus action. When ragecasting ends it descends 60'/round until it lands on a solid surface and can continue concentrating on spell it cast while ragecasting."
  "name": "Ragecasting (3/Day)"
source:
- [Tome of Beasts 3](https://koboldpress.com/kpstore/product/tome-of-beasts-3-for-5th-edition/)
```
