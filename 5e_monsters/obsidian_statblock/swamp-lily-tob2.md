---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob2
- monster/cr/7
- monster/size/Medium
- monster/type/Plant
statblock: inline
aliases: ["swamp-lily", "Swamp Lily-tob2"]
---
# Swamp Lily Tob2
*Source: Tome of Beasts 2 Page 342*

```statblock
"dice": false
"name": "Swamp Lily Tob2"
"size": "Medium"
"type": "Plant"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "136"
"hit_dice": "16d8+64"
"stats":
- !!int "16"
- !!int "9"
- !!int "18"
- !!int "4"
- !!int "12"
- !!int "17"
"speed": "walk 15 ft."
"senses": tremorsense 60 ft. (blind beyond this radius), passive Perception 11
"skillsaves":
"languages": "—"
"cr": "7"
"damage_immunities": "poison"
"traits":
- "desc": "The swamp lily can use an action to read the surface thoughts of all creatures within 60 feet of it. This works like the detect thoughts spell, except the lily can only determine each creature’s favorite food. Each creature within range must succeed on a DC 15 Wisdom saving throw or have disadvantage on its saving throw against the lily’s Fake Feast action."
  "name": "Discern Food Preferences"
"actions":
- "desc": "The swamp lily makes two root attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one creature. Hit: 12 (2d8 + 3) bludgeoning damage, and the target must make a DC 15 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one."
  "name": "Root"
- "desc": "The swamp lily magically creates the image of a banquet within 5 feet of itself that compels creatures to eat from it. Each creature within 60 feet of the banquet that can see the banquet must succeed on a DC 15 Wisdom saving throw or be charmed by the lily. The lily must take a bonus action on its subsequent turns to maintain the illusion. The illusion ends if the lily is incapacitated.\n\nWhile charmed by the lily, a target is incapacitated and ignores the banquets of other lilies. If the charmed target is more than 5 feet away from the lily’s banquet, the target must move on its turn toward the banquet by the most direct route, trying to get within 5 feet. It doesn’t avoid opportunity attacks, but before moving into damaging terrain, such as lava or a pit, and whenever it takes damage from a source other than the lily, the target can repeat the saving throw. A charmed target can also repeat the saving throw at the end of each of its turns. If the saving throw is successful, the effect ends on it. A target that successfully saves is immune to this swamp lily’s Fake Feast for the next 24 hours.\n\nIf the charmed target starts its turn within 5 feet of the banquet, it eats the feast and must make a DC 15 Constitution saving throw. On a failure, the creature takes 21 (6d6) poison damage and is poisoned for 1 minute. On a success, the creature takes half the damage and isn’t poisoned."
  "name": "Fake Feast"
source:
- [Tome of Beasts 2](https://koboldpress.com/kpstore/product/tome-of-beasts-2-for-5th-edition)
```
