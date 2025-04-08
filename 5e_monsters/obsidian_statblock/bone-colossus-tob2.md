---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob2
- monster/cr/13
- monster/size/Gargantuan
- monster/type/Undead
statblock: inline
aliases: ["bone-colossus", "Bone Colossus-tob2"]
---
# Bone Colossus Tob2
*Source: Tome of Beasts 2 Page 267*

```statblock
"dice": false
"name": "Bone Colossus Tob2"
"size": "Gargantuan"
"type": "Undead"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "181"
"hit_dice": "11d20+66"
"stats":
- !!int "24"
- !!int "11"
- !!int "22"
- !!int "14"
- !!int "16"
- !!int "16"
"speed": "walk 30 ft."
"senses": darkvision 120 ft., passive Perception 18
"skillsaves":
  "intimidation": !!int "13"
  "perception": !!int "8"
"languages": "Common, Darakhul"
"cr": "13"
"damage_immunities": "necrotic, poison"
"damage_resistances": "bludgeoning, piercing, and slashing from nonmagical attacks"
"traits":
- "desc": "The bone colossus’ individual posthumes are connected via a hive mind. It can telepathically communicate with any of its individual posthumes within 50 miles of it, and it can’t be surprised. If the bone colossus is reduced to half its hp or fewer, its Intelligence score is reduced to 1."
  "name": "Collective Mind"
- "desc": "The bone colossus deals double damage to objects and structures."
  "name": "Siege Monster"
- "desc": "A bone colossus can use its action to split into four individual swarms of tiny bone posthumes. Each swarm has an hp total equal to the bone colossus’ hp divided by 4 (rounded down), and all are affected by any conditions, spells, and other magical effects that affected the bone colossus. The swarms act on the same initiative count as the bone colossus did and occupy any unoccupied space that previously contained the bone colossus. A bone swarm can occupy another creature’s space and vice versa, and the swarm can move through a space as narrow as 1 foot wide without squeezing. A swarm can’t regain hp or gain temporary hp.\n\nAs an action, the swarms can reform into a single bone colossus as long as all surviving swarms are within 5 feet of each other. The reformed bone colossus’ hp total is equal to the combined remaining hp of the swarms, and the bone colossus is affected by any conditions, spells, and other magical effects currently affecting any of the swarms. It occupies any unoccupied space that previously contained at least one of the swarms that formed it."
  "name": "Swarm Form"
- "desc": "The bone colossus has advantage on saving throws against any effect that turns undead."
  "name": "Turn Resistance"
"actions":
- "desc": "The bone colossus makes two attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +12 to hit, reach 15 ft., one target. Hit: 29 (4d10 + 7) bludgeoning damage plus 10 (3d6) thunder damage, and the target must succeed on a DC 18 Strength saving throw or be knocked prone."
  "name": "Thunderous Slam (Colossus Form Only)"
- "desc": "Melee Weapon Attack: +12 to hit, reach 0 ft., one target in the swarm’s space. Hit: 21 (6d6) piercing damage, or 10 (3d6) piercing damage if the swarm has half its hp or fewer."
  "name": "Razor Teeth (Swarm Form Only)"
source:
- [Tome of Beasts 2](https://koboldpress.com/kpstore/product/tome-of-beasts-2-for-5th-edition)
```
