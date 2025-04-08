---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob3
- monster/cr/8
- monster/size/Large
- monster/type/Construct
statblock: inline
aliases: ["golem-ice", "Golem, Ice-tob3"]
---
# Golem, Ice Tob3
*Source: Tome of Beasts 3 Page 216*

```statblock
"dice": false
"name": "Golem, Ice Tob3"
"size": "Large"
"type": "Construct"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "114"
"hit_dice": "12d10+48"
"stats":
- !!int "20"
- !!int "11"
- !!int "18"
- !!int "3"
- !!int "10"
- !!int "1"
"speed": "walk 30 ft."
"senses": darkvision 60', passive Perception 13 
"skillsaves":
  "perception": !!int "0"
"languages": "understands the languages of its creator but can’t speak"
"cr": "8"
"damage_immunities": "cold, poison, psychic; nonmagic bludgeoning, piercing, and slashing attacks not made with adamantine weapons"
"traits":
- "desc": "Doesn’t require air food drink or sleep."
  "name": "Construct Nature"
- "desc": "Ice block torse it can liquefy and refreeze trapping and preserving creatures. If golem takes 15+ fire on a single turn cavity liquefies if frozen. When cavity is frozen creature that touches golem or hits it with melee attack while within 5 feet: 9 (2d8) cold. When cavity liquefied creature within 5 ft. of golem can use action to pull petrified creature out of golem if golem has one inside. Doing so requires successful DC 16 Str check and creature attempting: 9 (2d8) cold."
  "name": "Ice Cavity"
- "desc": "Immune: form-altering spells/effects."
  "name": "Immutable Form"
- "desc": "Advantage: spell/magic effect saves."
  "name": "Magic Resistance"
"actions":
- "desc": "Two Slams or one Slam and uses Preserve Creature."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +8 to hit, 5 ft., one target, 15 (3d6+5) bludgeoning damage + 9 (2d8) cold. Target is grappled (escape DC 16) if it is a Med or smaller creature and golem doesn’t have another creature grappled."
  "name": "Slam"
- "desc": "Preserves up to Med creature grappled by it: can’t breathe restrained as it freezes. Restrained creature: DC 16 Con save at its next turn end. Fail: 18 (4d8) cold is petrified in Ice Cavity total cover from attacks/effects outside. If this damage reduces it to 0 hp creature automatically stable. Petrified creature removed from Cavity thaws ending petrification in 1d4 rounds or immediately after taking fire damage. Success: half damage and ejected landing prone in unoccupied space within 5 ft. of golem. If golem moves preserved creature moves with it. GCan have only one creature preserved at a time. Can’t use Preserve Creature if Ice Cavity is frozen."
  "name": "Preserve Creature"
"reactions":
- "desc": "Freezes/liquefies its Ice Cavity."
  "name": "Freeze or Liquefy Cavity"
source:
- [Tome of Beasts 3](https://koboldpress.com/kpstore/product/tome-of-beasts-3-for-5th-edition/)
```
