---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob2023
- monster/cr/2
- monster/size/Small
- monster/type/Humanoid
statblock: inline
aliases: ["alchemist-tob1-2023", "Alchemist-tob2023"]
---
# Alchemist Tob2023
*Source: Tome of Beasts 2023 Page 244*

```statblock
"dice": false
"name": "Alchemist Tob2023"
"size": "Small"
"type": "Humanoid"
"ac": !!int "15"
"ac_class": "studded leather"
"hp": !!int "44"
"hit_dice": "8d6 + 16"
"stats":
- !!int "7"
- !!int "16"
- !!int "15"
- !!int "16"
- !!int "9"
- !!int "8"
"speed": "walk 30 ft."
"senses": darkvision 60 ft., passive Perception 9
"skillsaves":
  "Arcana": !!int "5"
  "Medicine": !!int "3"
"languages": "Common, Draconic"
"cr": "2"
"damage_immunities": "poison"
"traits":
- "desc": "At the start of each of the kobold alchemist’s turns, the alchemist chooses one of the following damage types: acid, cold, fire, lightning, or poison. The alchemist has resistance to that damage type until the start of its next turn."
  "name": "Apothecary"
- "desc": "The kobold has advantage on attack rolls against a creature if at least one of the kobold’s allies is within 5 feet of the creature and the ally isn’t incapacitated."
  "name": "Pack Tactics"
- "desc": "While in sunlight, the kobold has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- "desc": "The kobold makes two Alchemical Dagger or Alchemical Bolt attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4 + 3) piercing damage plus 3 (1d6) damage of the type determined by Apothecary."
  "name": "Alchemical Dagger"
- "desc": "Ranged Spell Attack: +5 to hit, range 60 ft., one target. Hit: 10 (2d6 + 3) damage of the type determined by Apothecary."
  "name": "Alchemical Bolt"
- "desc": "The kobold alchemist releases alchemical vapors pleasing to draconic senses and unpleasant to all others. Each creature that isn’t a dragonborn or kobold within 15 feet of the alchemist must make a DC 13 Constitution saving throw, taking 17 (5d6) poison damage on a failed save, or half as much damage on a successful one. Each dragonborn and kobold within 15 feet of the alchemist has resistance to damage of the type determined by Apothecary for 1 minute."
  "name": "Alchemical Vapors (Recharge 6)"
- "desc": "The kobold alchemist throws a flask of volatile substances at a point it can see within 30 feet of it. The flask explodes, and each creature within 15 feet of that point must make a DC 13 Dexterity saving throw. On a failure, a creature takes 14 (4d6) damage of the type determined by Apothecary and is poisoned for 1 minute. On a success, a creature takes half the damage and isn’t poisoned. A poisoned creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
  "name": "Explosive Flask (Recharge 5–6)"
source:
- [Tome of Beasts 2023](https://koboldpress.com/kpstore/product/tome-of-beasts-1-2023-edition/)
```
