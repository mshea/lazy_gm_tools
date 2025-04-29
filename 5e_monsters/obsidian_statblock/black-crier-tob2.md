---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob2
- monster/cr/11
- monster/size/Medium
- monster/type/Undead
statblock: inline
aliases: ["black-crier", "Black Crier-tob2"]
---
# Black Crier Tob2
*Source: Tome of Beasts 2 Page 42*

```statblock
"dice": false
"name": "Black Crier Tob2"
"size": "Medium"
"type": "Undead"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "150"
"hit_dice": "20d8+60"
"stats":
- !!int "14"
- !!int "19"
- !!int "16"
- !!int "11"
- !!int "20"
- !!int "12"
"speed": "walk 30 ft. hover True ft. fly 30 ft."
"senses": darkvision 60 ft., passive Perception 15
"skillsaves":
  "history": !!int "4"
  "perception": !!int "9"
  "performance": !!int "9"
  "religion": !!int "4"
"languages": "understands all languages but can’t speak"
"cr": "11"
"damage_immunities": "poison"
"damage_resistances": "necrotic, psychic; bludgeoning, piercing, and slashing from nonmagical attacks"
"traits":
- "desc": "The black crier is bound to a region where a major catastrophe will happen. This region can be of any size but is never smaller than 1 square mile. If the crier leaves this region, it loses its Rejuvenation trait and Crier’s Lament action. It permanently dies if it remains outside of its bound region for more than 24 hours."
  "name": "Bound by Calamity"
- "desc": "If it dies within its bound region before the catastrophe it heralds happens, the black crier returns to life in 1d6 days and regains all its hp. The black crier dies after the catastrophe ends and doesn’t rejuvenate. Only a wish spell can prevent this trait from functioning."
  "name": "Rejuvenation"
"actions":
- "desc": "The black crier uses its Bell Toll. It then makes two melee attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 4) bludgeoning damage plus 14 (4d6) necrotic damage."
  "name": "Bell"
- "desc": "The black crier targets one creature it can see within 60 feet of it. The creature must make a DC 17 Wisdom saving throw. On a failure, the target takes 14 (4d6) necrotic damage and is frightened until the end of its next turn. On a success, the target takes half the damage and isn’t frightened. If the saving throw fails by 5 or more, the target suffers one level of exhaustion."
  "name": "Bell Toll"
- "desc": "The black crier unleashes a devastating peal of anguish and rage in a 30-foot cone. Each creature in the area must make a DC 16 Charisma saving throw. On a failure, a creature drops to 0 hp. On a success, a creature takes 21 (6d6) psychic damage and is frightened for 1 minute. A frightened creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
  "name": "Crier’s Lament (1/Day)"
source:
- [Tome of Beasts 2](https://koboldpress.com/kpstore/product/tome-of-beasts-2-for-5th-edition)
```
