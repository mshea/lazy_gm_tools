---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob3
- monster/cr/6
- monster/size/Large
- monster/type/Dragon
statblock: inline
aliases: ["drake-vapor", "Drake, Vapor-tob3"]
---
# Drake, Vapor Tob3
*Source: Tome of Beasts 3 Page 157*

```statblock
"dice": false
"name": "Drake, Vapor Tob3"
"size": "Large"
"type": "Dragon"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "119"
"hit_dice": "14d10+42"
"stats":
- !!int "14"
- !!int "19"
- !!int "17"
- !!int "7"
- !!int "15"
- !!int "7"
"speed": "walk 30 ft. fly 50 ft. swim 20 ft."
"senses": darkvision 60', passive Perception 15
"skillsaves":
  "perception": !!int "2"
"languages": "Draconic"
"cr": "6"
"damage_immunities": "poison"
"damage_resistances": "cold"
"traits":
- "desc": "If flying and moves 20'+ straight toward a creature and then hits it with claw on the same turn target must make DC 13 Str save or be knocked prone. If target is prone drake can make one Bite vs. it as a bonus action."
  "name": "Diving Pounce"
- "desc": "Must regularly inhale swamp gases to maintain its flight. If it can’t breathe or isn’t in swampy terrain loses its fly speed. Also when it uses Poisonous Breath it loses its fly speed until Poisonous Breath recharges."
  "name": "Gaseous Ascension"
- "desc": "Can communicate with Beasts native to swampland as if they shared a language."
  "name": "Speak with Beasts"
- "desc": "Advantage on Dex (Stealth) checks made to hide in swampy terrain."
  "name": "Swamp Camouflage"
"actions":
- "desc": "One Bite attack and two Claw attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +7 to hit, 5 ft., one creature,. 13 (2d8+4) piercing damage and target must make DC 15 Con save or be poisoned for 1 min. Creature can re-save at end of each of its turns success ends effect on itself."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +7 to hit, 5 ft., one target, 11 (2d6+4) slashing damage."
  "name": "Claw"
- "desc": "Exhales poisonous swamp gas in 30' cone. Each creature in area: 27 (5d8) poison (DC 15 Con half). If drake is flying its Gaseous Ascension immediately ends takes falling damage as normal and each creature that failed save: poisoned 1 min. Poisoned creature can re-save at end of each of its turns success ends effect on itself."
  "name": "Poisonous Breath (Recharge 5–6)"
source:
- [Tome of Beasts 3](https://koboldpress.com/kpstore/product/tome-of-beasts-3-for-5th-edition/)
```
