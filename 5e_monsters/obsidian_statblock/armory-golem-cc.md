---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/cc
- monster/cr/7
- monster/size/Large
- monster/type/Construct
statblock: inline
aliases: ["armory-golem", "Armory Golem-cc"]
---
# Armory Golem Cc
*Source: Creature Codex Page 40*

```statblock
"dice": false
"name": "Armory Golem Cc"
"size": "Large"
"type": "Construct"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "136"
"hit_dice": "16d10+48"
"stats":
- !!int "20"
- !!int "14"
- !!int "16"
- !!int "10"
- !!int "10"
- !!int "2"
"speed": "walk 30 ft."
"senses": darkvision 60 ft., passive Perception 10
"skillsaves":
"languages": "understands the languages of its creator but can't speak"
"cr": "7"
"damage_immunities": "poison, psychic; bludgeoning, piercing, and slashing from nonmagical attacks not made with adamantine"
"traits":
- "desc": "The objects that make up the golem's body can be removed or destroyed. With the exception of the slam attack, an attacker can choose to disable one of the armory golem's attacks on a critical hit. Alternatively, the attacker can attempt to destroy the golem's focus instead of disabling one of its attacks."
  "name": "Armory Exploit"
- "desc": "A creature grappling the armory golem can take its action to remove the golem's focus by succeeding on a DC 15 Strength check. If its focus is removed or destroyed, the armory golem must make a DC 8 Constitution saving throw at the start of each of its turns. On a success, the golem continues working properly, but it repeats the saving throw the next round at 1 higher DC. On a failure, the golem dies, falling into a heap of armaments."
  "name": "Focus Weakness"
- "desc": "The golem is immune to any spell or effect that would alter its form."
  "name": "Immutable Form"
- "desc": "The golem has advantage on saving throws against spells and other magical effects."
  "name": "Magic Resistance"
- "desc": "The golem's weapon attacks are magical."
  "name": "Magic Weapons"
"actions":
- "desc": "The armory golem makes any two weapon attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 11 (1d12 + 5) bludgeoning damage."
  "name": "Slam"
- "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 11 (1d12 + 5) piercing damage."
  "name": "Polearm Strike"
- "desc": "Ranged Weapon Attack: +5 to hit, range 80/320 ft., one target. Hit: 11 (2d8 + 2) piercing damage."
  "name": "Crossbow Barrage"
- "desc": "The golem reconfigures its construction, moving shields and armor to encase its body. It regains 10 hp, and its AC increases by 2 until the end of its next turn."
  "name": "Shield Wall (Recharge 4-6)"
source:
- [Creature Codex](https://koboldpress.com/kpstore/product/creature-codex-for-5th-edition-dnd)
```
