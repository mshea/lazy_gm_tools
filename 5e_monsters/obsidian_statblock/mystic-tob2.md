---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob2
- monster/cr/3
- monster/size/Medium
- monster/type/Humanoid
statblock: inline
aliases: ["mystic", "Mystic-tob2"]
---
# Mystic Tob2
*Source: Tome of Beasts 2 Page 316*

```statblock
"dice": false
"name": "Mystic Tob2"
"size": "Medium"
"type": "Humanoid"
"ac": !!int "14"
"ac_class": "hide armor"
"hp": !!int "75"
"hit_dice": "10d8+30"
"stats":
- !!int "12"
- !!int "14"
- !!int "16"
- !!int "17"
- !!int "11"
- !!int "12"
"speed": "walk 30 ft."
"senses": darkvision 60 ft., passive Perception 12
"skillsaves":
  "arcana": !!int "5"
  "intimidation": !!int "3"
  "perception": !!int "2"
"languages": "Common, Void Speech"
"cr": "3"
"damage_resistances": "necrotic"
"traits":
- "desc": "The satarre mystic has advantage on all Intelligence (Arcana) checks related to the planes and planar travel."
  "name": "Keeper of Secrets"
- "desc": "As a bonus action, a mystic can rise or descend vertically up to 10 feet and can remain suspended there. This trait works like the levitate spell, except there is no duration, and the mystic doesn’t need to concentrate to continue levitating each round."
  "name": "Levitate"
- "desc": "As a bonus action, the mystic commands an angel, elemental, or fiend ally within 30 feet of it to use a reaction to make one attack against a creature that dealt damage to the mystic in the previous round."
  "name": "Planar Commander"
- "desc": "If damage reduces the satarre mystic to 0 hp, it must make a Constitution saving throw with a DC of 5 + the damage taken, unless the damage is radiant or from a critical hit. On a success, the satarre mystic drops to 1 hp instead."
  "name": "Void Fortitude"
- "desc": "The satarre’s weapon attacks are magical. When the satarre hits with any weapon, the weapon deals an extra 1d8 necrotic damage (included in the attack)."
  "name": "Void Weapons"
"actions":
- "desc": "The satarre mystic makes two void claw attacks. Alternatively, it can use Void Bolt twice."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) slashing damage plus 4 (1d8) necrotic damage. The target must succeed on a DC 13 Constitution saving throw or its speed is reduced by 10 feet until the end of its next turn."
  "name": "Void Claw"
- "desc": "Ranged Spell Attack: +5 to hit, range 50 ft., one target. Hit: 9 (2d8) necrotic damage."
  "name": "Void Bolt"
- "desc": "The mystic unveils a darker reality to up to three creatures it can see within 30 feet of it. Each target must succeed on a DC 13 Wisdom saving throw or be frightened until the end of its next turn."
  "name": "Unveil (1/Day)"
"reactions":
- "desc": "When a creature the mystic can see targets it with a ranged spell attack, the mystic can attempt to deflect the spell. The mystic makes a Constitution saving throw. If the result is higher than the attack roll, the mystic is unaffected by the spell."
  "name": "Void Deflection"
source:
- [Tome of Beasts 2](https://koboldpress.com/kpstore/product/tome-of-beasts-2-for-5th-edition)
```
