---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/cc
- monster/cr/9
- monster/size/Large
- monster/type/Fiend
statblock: inline
aliases: ["alnaar", "Alnaar-cc"]
---
# Alnaar Cc
*Source: Creature Codex Page 82*

```statblock
"dice": false
"name": "Alnaar Cc"
"size": "Large"
"type": "Fiend"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "212"
"hit_dice": "25d10+75"
"stats":
- !!int "20"
- !!int "22"
- !!int "17"
- !!int "9"
- !!int "12"
- !!int "10"
"speed": "burrow 20 ft. fly 40 ft. walk 40 ft."
"senses": darkvision 120 ft., passive Perception 15
"skillsaves":
  "acrobatics": !!int "10"
  "perception": !!int "5"
"languages": "Abyssal"
"cr": "9"
"damage_immunities": "fire, poison"
"damage_resistances": "bludgeoning, piercing, and slashing from nonmagical attacks"
"traits":
- "desc": "A creature that starts its turn within 5 feet of the alnaar must make a DC 16 Constitution saving throw, taking 14 (4d6) fire damage on a failed save, or half as much damage on a successful one. A creature that touches the alnaar or hits it with a melee attack while within 5 feet of it takes 7 (2d6) fire damage. Nonmagical weapons and objects with Armor Class 15 or lower are immediately destroyed after coming into contact with the alnaar's skin. Weapons that hit the alnaar deal their damage before being destroyed. This trait is suppressed if the alnaar is starving."
  "name": "Skin of the Forge"
- "desc": "If an alnaar hasn't fed on a Medium-sized or larger creature within the last 12 hours, it is starving. While starving, the alnaar's Armor Class is reduced by 2, it has advantage on melee attack rolls against any creature that doesn't have all of its hp, and will direct its attacks at a single foe regardless of tactical consequences. Once it feeds on a Medium-sized or larger corpse or brings a Medium-sized or larger creature to 0 hp, it is no longer starving."
  "name": "Starving Wrath"
"actions":
- "desc": "The alnaar makes three fiery fangs attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 14 (2d8 + 5) piercing damage and 3 (1d6) fire damage."
  "name": "Fiery Fangs"
- "desc": "The alnaar becomes super-heated, expelling momentous energy outwards in a 20-foot radius blast around it. Each creature caught in the blast must make a DC 17 Dexterity saving throw. On a failed save, a creature takes 22 (4d10) fire damage and 22 (4d10) force damage and is knocked prone. On a success, a creature takes half the fire and force damage but isn't knocked prone. The fire ignites flammable objects that aren't being worn or carried. After using Flare, the alnaar is starving. It can't use Flare if it is starving."
  "name": "Flare (Recharge Special)"
"reactions":
- "desc": "When a creature the alnaar can see moves, the alnaar can move up to 20 feet toward the moving creature. If the alnaar moves within 10 feet of that creature, it can make one fiery fangs attack against the creature."
  "name": "On the Hunt"
source:
- [Creature Codex](https://koboldpress.com/kpstore/product/creature-codex-for-5th-edition-dnd)
```
