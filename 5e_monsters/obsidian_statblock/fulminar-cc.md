---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/cc
- monster/cr/9
- monster/size/Large
- monster/type/Elemental
statblock: inline
aliases: ["fulminar", "Fulminar-cc"]
---
# Fulminar Cc
*Source: Creature Codex Page 165*

```statblock
"dice": false
"name": "Fulminar Cc"
"size": "Large"
"type": "Elemental"
"ac": !!int "15"
"ac_class": "None"
"hp": !!int "112"
"hit_dice": "15d10+30"
"stats":
- !!int "10"
- !!int "20"
- !!int "14"
- !!int "8"
- !!int "17"
- !!int "10"
"speed": "fly 90 ft. hover True ft."
"senses": darkvision 120 ft., passive Perception 17
"skillsaves":
  "perception": !!int "7"
  "stealth": !!int "9"
"languages": "Auran"
"cr": "9"
"damage_immunities": "poison"
"damage_resistances": "lightning, thunder; bludgeoning, piercing, and slashing from nonmagical attacks"
"traits":
- "desc": "The fulminar doesn't provoke an opportunity attack when it flies out of an enemy's reach."
  "name": "Flyby"
- "desc": "Bolts of lightning course around the fulminar's body, shedding bright light in a 5- to 20-foot radius and dim light for an additional number of feet equal to the chosen radius. The fulminar can alter the radius as a bonus action."
  "name": "Essence of Lightning"
- "desc": "The fulminar can enter a hostile creature's space and stop there. It can move through a space as narrow as 1 inch wide without squeezing. A creature that touches the fulminar or hits it with a melee attack while within 5 feet of it takes 7 (2d6) lightning damage."
  "name": "Lightning Form"
"actions":
- "desc": "The fulminar makes three attacks: one with its bite and two with its claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) piercing damage and 7 (2d6) lightning damage and the target can't take reactions until the end of the fulminar's next turn."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) slashing damage and 7 (2d6) lightning damage."
  "name": "Claw"
- "desc": "The fulminar magically creates three sets of shackles of lightning, each of which can strike a creature the fulminar can see within 60 feet of it. A target must make a DC 16 Dexterity saving throw. On a failure, the target takes 18 (4d8) lightning damage and is restrained for 1 minute. On a success, the target takes half the damage but isn't restrained. A restrained creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
  "name": "Lightning Shackles (Recharge 5-6)"
source:
- [Creature Codex](https://koboldpress.com/kpstore/product/creature-codex-for-5th-edition-dnd)
```
