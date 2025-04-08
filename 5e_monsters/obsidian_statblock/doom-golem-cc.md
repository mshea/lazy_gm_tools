---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/cc
- monster/cr/10
- monster/size/Large
- monster/type/Construct
statblock: inline
aliases: ["doom-golem", "Doom Golem-cc"]
---
# Doom Golem Cc
*Source: Creature Codex Page 201*

```statblock
"dice": false
"name": "Doom Golem Cc"
"size": "Large"
"type": "Construct"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "153"
"hit_dice": "18d10+54"
"stats":
- !!int "24"
- !!int "13"
- !!int "16"
- !!int "3"
- !!int "10"
- !!int "1"
"speed": "walk 30 ft."
"senses": darkvision 120 ft., passive Perception 10
"skillsaves":
"languages": "understands the languages of its creator but can't speak"
"cr": "10"
"damage_immunities": "cold, poison, psychic; bludgeoning, piercing, and slashing from nonmagical attacks not made with adamantine"
"traits":
- "desc": "Any non-evil creature that starts its turn within 20 feet of the doom golem must make a DC 15 Wisdom saving throw, unless the doom golem is incapacitated. On a failed save, the creature is frightened until the start of its next turn. If a creature's saving throw is successful, the creature is immune to the doom golem's Fear Aura for the next 24 hours."
  "name": "Fear Aura"
- "desc": "The doom golem sheds dim light in a 10-foot radius."
  "name": "Luminous Skeleton"
- "desc": "The golem is immune to any spell or effect that would alter its form."
  "name": "Immutable Form"
- "desc": "The golem has advantage on saving throws against spells and other magical effects."
  "name": "Magic Resistance"
- "desc": "The golem's weapon attacks are magical."
  "name": "Magic Weapons"
"actions":
- "desc": "The doom golem makes one bite attack and one doom claw attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 14 (2d6 + 7) slashing damage plus 7 (2d6) cold damage."
  "name": "Doom Claw"
- "desc": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 23 (3d10 + 7) slashing damage."
  "name": "Bite"
- "desc": "The doom golem releases an arctic wind in a 15-foot radius around itself or in a 30-foot cone. Each creature in that area must make a DC 16 Constitution saving throw, taking 38 (11d6) cold damage on a failed save, or half as much damage on a successful one."
  "name": "Wind of Boreas (Recharge 5-6)"
"reactions":
- "desc": "When a creature the doom golem can see within 60 feet of it hits it with a spell or attack that requires a ranged attack roll, the doom golem strikes the attacker with a doom bolt. The doom bolt is a shadowy reflection of the original attack, using the same attack roll and effects as the original, except it deals necrotic damage."
  "name": "Doom Upon You"
source:
- [Creature Codex](https://koboldpress.com/kpstore/product/creature-codex-for-5th-edition-dnd)
```
