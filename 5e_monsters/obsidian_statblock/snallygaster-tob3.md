---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob3
- monster/cr/15
- monster/size/Huge
- monster/type/Aberration
statblock: inline
aliases: ["snallygaster", "Snallygaster-tob3"]
---
# Snallygaster Tob3
*Source: Tome of Beasts 3 Page 348*

```statblock
"dice": false
"name": "Snallygaster Tob3"
"size": "Huge"
"type": "Aberration"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "207"
"hit_dice": "18d12+90"
"stats":
- !!int "24"
- !!int "10"
- !!int "21"
- !!int "4"
- !!int "14"
- !!int "12"
"speed": "walk 30 ft. fly 30 ft."
"saves":
  "Strength": !!int "1"
  "Constitution": !!int "1"
  "Wisdom": !!int "7"
"senses": darkvision 120', passive Perception 12
"skillsaves":
  "perception": !!int "2"
"languages": "—"
"cr": "15"
"damage_immunities": "acid, thunder"
"traits":
- "desc": "Advantage: spell/magic effect saves."
  "name": "Magic Resistance"
- "desc": "Regains 15 hp at start of its turn if it has 1+ hp."
  "name": "Regeneration"
"actions":
- "desc": "One Slimy Tentacles and three Talons. If it hits one creature with two Talonss the target must make DC 18 Str save or take 11 (2d10) piercing damage and be knocked prone."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +12 to hit, 15 ft., one target, 20 (3d8+7) bludgeoning damage and target is grappled (escape DC 18). Until this grapple ends target is restrained and takes 18 (4d8) acid at the start of each of its turns and snallygaster can’t use its Slimy Tentacles on another target."
  "name": "Slimy Tentacles"
- "desc": "Melee Weapon Attack: +12 to hit, 5 ft., one target, 20 (2d12+7) piercing damage."
  "name": "Talons"
- "desc": "Squawks a screeching whistle in 60' cone. Each creature in area: 49 (14d6) thunder and stunned 1 min (DC 18 Con half not stunned). Stunned creature can re-save at end of each of its turns success ends effect on itself."
  "name": "Screech (Recharge 5–6)"
"reactions":
- "desc": "If it succeeds on save vs. spell of 5th level or lower that targets only snallygaster spell has no effect. If snallygaster succeeds on save by 5+ spell is reflected back at spellcaster using slot level spell save DC attack bonus and spellcasting ability of caster"
  "name": "Parry Spell"
"bonus_actions":
- "desc": "Takes the Dash or Disengage action. It must be flying to use this bonus action."
  "name": "Nimble Flier"
source:
- [Tome of Beasts 3](https://koboldpress.com/kpstore/product/tome-of-beasts-3-for-5th-edition/)
```
