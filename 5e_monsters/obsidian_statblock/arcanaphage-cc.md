---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/cc
- monster/cr/4
- monster/size/Medium
- monster/type/Monstrosity
statblock: inline
aliases: ["arcanaphage", "Arcanaphage-cc"]
---
# Arcanaphage Cc
*Source: Creature Codex Page 42*

```statblock
"dice": false
"name": "Arcanaphage Cc"
"size": "Medium"
"type": "Monstrosity"
"ac": !!int "14"
"ac_class": "None"
"hp": !!int "60"
"hit_dice": "8d8+24"
"stats":
- !!int "10"
- !!int "18"
- !!int "16"
- !!int "2"
- !!int "10"
- !!int "8"
"speed": "fly 30 ft. hover True ft. walk 0 ft."
"senses": blindsight 60 ft. (blind beyond this radius), passive Perception 12
"skillsaves":
  "perception": !!int "2"
"languages": "-"
"cr": "4"
"damage_resistances": "bludgeoning, piercing, and slashing from magical weapons"
"traits":
- "desc": "When an arcanaphage dies, it explodes in a surge of partially-digested magical energy. Each creature within 5 feet per Feed score must make a DC 14 Dexterity saving throw, taking 3 (1d6) force damage per Feed score on a failed save, or half as much damage on a successful one. For 1 minute afterward, the affected area is awash with volatile magic. A creature that starts its turn in the affected area takes 7 (2d6) force damage."
  "name": "Arcane Discharge"
- "desc": "Each time it feeds in combat, it regains hp equal to twice the level of the spell it ate and increases its Feed score by 1. The arcanaphage can't have a Feed score higher than 8, and its Feed score reduces by 1 each time it finishes a long rest."
  "name": "Hunger"
- "desc": "At the start of each of the arcanaphage's turns, each creature within 30 feet of it that is currently maintaining concentration on a spell must make a DC 14 Constitution saving throw. On a failure, the creature's spell ends and the arcanaphage feeds."
  "name": "Ingest Magic"
- "desc": "The arcanaphage is immune to damage from spells. It has advantage on saving throws against all other magical effects."
  "name": "Magic Immunity"
"actions":
- "desc": "The arcanaphage makes two tentacle attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) bludgeoning damage."
  "name": "Tentacle"
"reactions":
- "desc": "The arcanaphage's tentacles glow when a spell is cast within 30 feet of it, countering the spell. This reaction works like the counterspell spell, except the arcanaphage must always make a spellcasting ability check, no matter the spell level. Its ability check for this is +5. If it successfully counters the spell, the arcanaphage feeds."
  "name": "Voracious"
source:
- [Creature Codex](https://koboldpress.com/kpstore/product/creature-codex-for-5th-edition-dnd)
```
