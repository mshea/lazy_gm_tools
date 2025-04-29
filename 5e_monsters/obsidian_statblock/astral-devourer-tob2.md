---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob2
- monster/cr/8
- monster/size/Medium
- monster/type/Aberration
statblock: inline
aliases: ["astral-devourer", "Astral Devourer-tob2"]
---
# Astral Devourer Tob2
*Source: Tome of Beasts 2 Page 30*

```statblock
"dice": false
"name": "Astral Devourer Tob2"
"size": "Medium"
"type": "Aberration"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "90"
"hit_dice": "12d8+36"
"stats":
- !!int "13"
- !!int "16"
- !!int "17"
- !!int "14"
- !!int "16"
- !!int "12"
"speed": "fly 30 ft. hover True ft. walk 30 ft."
"senses": darkvision 60 ft., passive Perception 16
"skillsaves":
  "perception": !!int "6"
  "stealth": !!int "6"
"languages": "Deep Speech, Void Speech"
"cr": "8"
"damage_immunities": "poison, psychic"
"damage_resistances": "bludgeoning, piercing, slashing"
"traits":
- "desc": "The astral devourer’s individual serpents are connected via a hive mind. It can telepathically communicate with any of its individual serpents within 1 mile of it, and it can’t be surprised."
  "name": "Collective Mind"
- "desc": "The astral devourer has advantage on saving throws against spells and other magical effects."
  "name": "Magic Resistance"
- "desc": "The astral devourer can occupy another creature’s space and vice versa, and the devourer can move through any opening large enough for a Tiny serpent. Except via Serpent Spray and Recombine, the astral devourer can’t regain hp or gain temporary hp."
  "name": "Swarm"
"actions":
- "desc": "The astral devourer makes two melee attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +7 to hit, reach 0 ft., one target in the swarm’s space. Hit: 8 (2d8) piercing damage, or 4 (1d8) piercing damage if the swarm has half of its hit points or fewer, plus 14 (4d6) poison damage."
  "name": "Hungering Serpents"
- "desc": "The astral devourer flings biting astral serpents outward. Each creature within 20 feet of the astral devourer must make a DC 16 Dexterity saving throw, taking 14 (4d6) piercing damage and 14 (4d6) poison damage on a failed save, or half as much damage on a successful one. The astral devourer regains hp equal to the single highest amount of piercing damage dealt by this spray."
  "name": "Serpent Spray (Recharge 6)"
"reactions":
- "desc": "When an astral devourer that is Small or larger takes bludgeoning, piercing, or slashing damage, it can split into two new astral devourers if it has at least 10 hp. Each new devourer has hp equal to half the original creature, rounded down. New astral devourers are one size smaller than the original. While within 1 mile of each other, the new astral devourers share one collective mind."
  "name": "Divide"
- "desc": "When one or more astral devourers that are Small or smaller and share a collective mind are within 5 feet of each other, they can combine into a new astral devourer. The new astral devourer is one size larger than the largest original creature, and it has hp equal to the combined total of the original creatures. The new astral devourer’s hp can’t exceed the normal hp maximum of a Medium astral devourer."
  "name": "Recombine"
source:
- [Tome of Beasts 2](https://koboldpress.com/kpstore/product/tome-of-beasts-2-for-5th-edition)
```
