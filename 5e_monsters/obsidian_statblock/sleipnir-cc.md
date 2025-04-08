---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/cc
- monster/cr/5
- monster/size/Large
- monster/type/Monstrosity
statblock: inline
aliases: ["sleipnir", "Sleipnir-cc"]
---
# Sleipnir Cc
*Source: Creature Codex Page 344*

```statblock
"dice": false
"name": "Sleipnir Cc"
"size": "Large"
"type": "Monstrosity"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "105"
"hit_dice": "10d10+50"
"stats":
- !!int "20"
- !!int "12"
- !!int "20"
- !!int "10"
- !!int "15"
- !!int "10"
"speed": "walk 40 ft."
"senses": darkvision 120 ft., passive Perception 15
"skillsaves":
  "athletics": !!int "8"
  "perception": !!int "5"
"languages": "Primordial"
"cr": "5"
"damage_resistances": "cold"
"traits":
- "desc": "As a bonus action, the sleipnir can leap into the air, gaining a flying speed of 60 feet for 1 minute."
  "name": "Heroic Leap (1/Day)"
- "desc": "If the sleipnir moves at least 20 feet straight toward a creature and then hits it with a rune hooves attack on the same turn, that target must succeed on a DC 16 Strength saving throw or be knocked prone. If the target is prone, the sleipnir can make another rune hooves attack against it as a bonus action."
  "name": "Trampling Charge"
"actions":
- "desc": "The sleipnir makes two rune hooves attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) bludgeoning damage and 3 (1d6) radiant damage. An undead creature who takes damage from this attack must succeed on a DC 16 Charisma saving throw or be restrained by magical runes until the end of its next turn."
  "name": "Rune Hooves"
- "desc": "The sleipnir summons a gilded avalanche in a 30-foot cone. Each creature in the area must make a DC 16 Dexterity saving throw. On a failure, a creature takes 13 (3d8) bludgeoning and 13 (3d8) cold damage, is pushed 15 feet away from the sleipnir, and is knocked prone. On a success, a creature takes half the damage and isn't pushed or knocked prone."
  "name": "Gold and Ice (1/Day)"
"reactions":
- "desc": "When a creature moves within 5 feet of the sleipnir, the sleipnir can move up to its speed without provoking opportunity attacks."
  "name": "Eight Hooves (3/Day)"
source:
- [Creature Codex](https://koboldpress.com/kpstore/product/creature-codex-for-5th-edition-dnd)
```
