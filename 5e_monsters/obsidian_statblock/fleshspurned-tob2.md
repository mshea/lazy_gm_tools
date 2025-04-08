---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob2
- monster/cr/4
- monster/size/Medium
- monster/type/Undead
statblock: inline
aliases: ["fleshspurned", "Fleshspurned-tob2"]
---
# Fleshspurned Tob2
*Source: Tome of Beasts 2 Page 153*

```statblock
"dice": false
"name": "Fleshspurned Tob2"
"size": "Medium"
"type": "Undead"
"ac": !!int "14"
"ac_class": "None"
"hp": !!int "75"
"hit_dice": "10d8+30"
"stats":
- !!int "1"
- !!int "18"
- !!int "16"
- !!int "10"
- !!int "14"
- !!int "16"
"speed": "fly 40 ft. walk 0 ft. hover True ft."
"senses": darkvision 60 ft., passive Perception 14
"skillsaves":
  "perception": !!int "4"
  "stealth": !!int "6"
"languages": "any languages it knew in life"
"cr": "4"
"damage_immunities": "necrotic, poison"
"damage_resistances": "acid, cold, fire, lightning, thunder; bludgeoning, piercing, and slashing from nonmagical attacks"
"traits":
- "desc": "The fleshspurned has advantage on attack rolls against ghosts, wraiths, and other undead with the Incorporeal Movement trait, and such creatures aren’t immune to the necrotic damage dealt by the fleshspurned’s bite. When the fleshspurned kills one of these creatures, the fleshspurned gains temporary hp equal to double the creature’s challenge rating (minimum of 1)."
  "name": "Ghost Eater"
- "desc": "The fleshspurned can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object. A fleshspurned can’t move through other creatures with the Incorporeal Movement trait."
  "name": "Incorporeal Movement"
"actions":
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 18 (4d6 + 4) necrotic damage. If the target is a creature other than a construct or an undead, it must succeed on a DC 14 Constitution saving throw or become ghostly for 1 minute. While ghostly, it has the Incorporeal Movement trait and is susceptible to the fleshspurned’s Ghost Eater trait. The creature can repeat the saving throw at the end of each of its turns, ending the ghostly effect on itself on a success."
  "name": "Phantasmal Bite"
- "desc": "The fleshspurned clashes its oversized teeth together to create a clattering din. Each creature within 30 feet of the fleshspurned must succeed on a DC 14 Wisdom saving throw or be confused for 1 minute. While confused, a creature acts as if under the effects of the confusion spell. A confused creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature’s saving throw is successful or the effect ends for it, the target is immune to the fleshspurned’s Chatter for the next 24 hours."
  "name": "Chatter"
source:
- [Tome of Beasts 2](https://koboldpress.com/kpstore/product/tome-of-beasts-2-for-5th-edition)
```
