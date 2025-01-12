---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob2023
- monster/cr/5
- monster/size/Medium
- monster/type/Fiend
statblock: inline
aliases: ["dreameater-tob1-2023", "Dream Eater-tob2023"]
---
# Dream Eater Tob2023
*Source: Tome of Beasts 2023 Page 148*

```statblock
"dice": false
"name": "Dream Eater Tob2023"
"size": "Medium"
"type": "Fiend"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "75"
"hit_dice": "10d8 + 30"
"stats":
- !!int "15"
- !!int "18"
- !!int "17"
- !!int "16"
- !!int "13"
- !!int "20"
"speed": "walk 20 ft. fly 30 ft."
"senses": darkvision 60 ft., passive Perception 11
"skillsaves":
  "Deception": !!int "8"
  "Insight": !!int "4"
  "Persuasion": !!int "8"
"languages": "Abyssal, Celestial, Common, Infernal, telepathy 120 ft."
"cr": "5"
"damage_immunities": "poison"
"damage_resistances": "cold, fire, lightning; bludgeoning, piercing, and slashing from nonmagical attacks"
"traits":
- "desc": "A creature that starts its turn grappled by the dream eater must succeed on a DC 14 Charisma saving throw or take 5 (2d4) psychic damage. The dream eater gains temporary hp equal to the psychic damage dealt."
  "name": "Dream Eater’s Caress"
"actions":
- "desc": "The dream eater uses its Lotus Scent. It then makes one Bite attack and one Claw attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 15 (2d10 + 4) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) slashing damage, and the target is grappled (escape DC 14) if it is a Large or smaller creature. Until this grapple ends, the creature is restrained. The dream eater has two claws, each of which can grapple only one target."
  "name": "Claw"
- "desc": "The dream eater secretes an oily chemical that most creatures find intoxicating. Each creature that isn’t a Construct or Undead within 15 feet of the dream eater must succeed on a DC 14 Constitution saving throw or be poisoned for 1 minute. While poisoned, the creature is charmed by the fiend. A poisoned creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature’s saving throw is successful or the effect ends for it, the creature is immune to the dream eater’s Lotus Scent for the next 24 hours."
  "name": "Lotus Scent"
- "desc": "Each creature within 20 feet of the dream eater must make a DC 14 Charisma saving throw. On a failure, a creature takes 21 (6d6) psychic damage and is incapacitated for 1 minute. When it moves, an incapacitated creature moves in a random direction. On a success, a creature takes half the damage and isn’t incapacitated. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
  "name": "Waking Dreams (Recharge 5–6)"
"bonus_actions":
- "desc": "The dream eater magically transforms into a Small or Medium humanoid it has seen, or back into its true form, which is a Fiend. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying transforms with it. It reverts to its true form if it dies."
  "name": "Change Shape"
source:
- [Tome of Beasts 2023](https://koboldpress.com/kpstore/product/tome-of-beasts-1-2023-edition/)
```
