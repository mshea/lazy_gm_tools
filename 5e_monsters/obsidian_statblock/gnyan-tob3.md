---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob3
- monster/cr/4
- monster/size/Large
- monster/type/Elemental
statblock: inline
aliases: ["gnyan", "Gnyan-tob3"]
---
# Gnyan Tob3
*Source: Tome of Beasts 3 Page 210*

```statblock
"dice": false
"name": "Gnyan Tob3"
"size": "Large"
"type": "Elemental"
"ac": !!int "14"
"ac_class": ""
"hp": !!int "90"
"hit_dice": "12d10+24"
"stats":
- !!int "17"
- !!int "19"
- !!int "15"
- !!int "12"
- !!int "16"
- !!int "18"
"speed": "walk 50 ft."
"senses": darkvision 60', passive Perception 15
"skillsaves":
  "perception": !!int "3"
"languages": "Common"
"cr": "4"
"damage_immunities": "cold, poison"
"traits":
- "desc": "Surrounded by aura of courage. Each friendly creature within 30' of it: advantage on saves vs. being frightened."
  "name": "Aura of Hope"
- "desc": "Can spend 1 min slowly drinking from a bowl of melted ice water. When it stops bowl is filled with pale milk. A creature that drinks the milk regains 7 (2d6) hp and its exhaustion level is reduced by up to two levels. After gnyan’s milk has restored a total of 20 hp or reduced a total of four exhaustion levels in creatures gnyan can’t create milk in this way again until it finishes a long rest."
  "name": "Glorious Milk"
- "desc": "If it moves 20'+ straight to creature and hits it with Claw attack on same turn target knocked prone (DC 13 Str not prone). If target is prone gnyan can make one Bite vs. it as a bonus action."
  "name": "Pounce"
- "desc": "Advantage: Dex (Stealth) to hide in snowy terrain."
  "name": "Snow Camouflage"
- "desc": "Can move across icy surfaces with o an ability check and difficult terrain composed of ice or snow doesn’t cost it extra movement. It leaves no tracks or other traces of its passage when moving through snowy terrain."
  "name": "Snow Strider"
"actions":
- "desc": "One Bite attack and one Claw attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, 5 ft., one target, 11 (2d6+4) piercing damage + 3 (1d6) cold."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +6 to hit, 5 ft., one target, 9 (2d4+4) slashing damage + 3 (1d6) cold."
  "name": "Claw"
- "desc": "Ice and snow in 30' cone. Each creature in area: 21 (6d6) cold and is restrained until end of its next turn as frost and snow coats its limbs (DC 13 Dex half damage not restrained)."
  "name": "Avalanche’s Roar (Recharge 6)"
"bonus_actions":
- "desc": "Teleports with items worn/carried up to 30' to unoccupied space it can see. Origin and destination must have snow."
  "name": "Snow Step"
source:
- [Tome of Beasts 3](https://koboldpress.com/kpstore/product/tome-of-beasts-3-for-5th-edition/)
```
