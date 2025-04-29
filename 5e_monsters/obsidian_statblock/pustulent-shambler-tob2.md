---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob2
- monster/cr/13
- monster/size/Gargantuan
- monster/type/Ooze
statblock: inline
aliases: ["pustulent-shambler", "Pustulent Shambler-tob2"]
---
# Pustulent Shambler Tob2
*Source: Tome of Beasts 2 Page 299*

```statblock
"dice": false
"name": "Pustulent Shambler Tob2"
"size": "Gargantuan"
"type": "Ooze"
"ac": !!int "10"
"ac_class": "natural armor"
"hp": !!int "232"
"hit_dice": "15d20+75"
"stats":
- !!int "19"
- !!int "5"
- !!int "20"
- !!int "3"
- !!int "10"
- !!int "1"
"speed": "climb 30 ft. walk 30 ft."
"senses": blindsight 60 ft. (blind beyond this radius), passive Perception 10
"skillsaves":
"languages": "—"
"cr": "13"
"damage_immunities": "acid, fire, necrotic"
"damage_resistances": "bludgeoning"
"traits":
- "desc": "The pustulent shambler can move through a space as narrow as 1 inch wide without squeezing."
  "name": "Amorphous"
- "desc": "A creature that fails its saving throw against the pustulent shambler’s pseudopod attack becomes infected with the bonerot disease. An infected creature develops the first symptoms of general weakness and lethargy within 1 hour as its bones start to rot from the inside. At the end of each long rest, the diseased creature must succeed on a DC 18 Constitution saving throw or its Strength and Dexterity scores are each reduced by 1d4 and its walking speed is reduced by 5 feet. The reductions last until the target finishes a long rest after the disease is cured. If the disease reduces the creature’s Strength or Dexterity to 0, the creature dies. A creature that succeeds on two saving throws against the disease recovers from it. Alternatively, the disease can be removed by the lesser restoration spell or similar magic."
  "name": "Bonerot"
- "desc": "The pustulent shambler can pinpoint the location of creatures infected with bonerot within 60 feet of it and can sense the general direction of such creatures within 1 mile of it."
  "name": "Bonerot Sense"
- "desc": "A creature with exposed bones (such as a skeleton) that touches the shambler or hits it with a melee attack while within 5 feet of it takes 5 (1d10) acid damage. Any nonmagical weapon made of bone that hits the shambler corrodes. After dealing damage, the weapon takes a permanent and cumulative -1 penalty to damage rolls. If its penalty drops to -5, the weapon is destroyed. Nonmagical ammunition made of bone that hits the shambler is destroyed after dealing damage."
  "name": "Corrosive to Bone"
- "desc": "Any creature that starts its turn within 10 feet of the pustulent shambler must succeed on a DC 18 Constitution saving throw or be poisoned until the start of its next turn. On a successful saving throw, the creature is immune to the shambler’s Stench for 24 hours."
  "name": "Stench"
"actions":
- "desc": "The pustulent shambler makes three pseudopod attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one creature. Hit: 15 (2d10 + 4) bludgeoning damage plus 11 (2d10) acid damage, and the target must succeed on a DC 18 Constitution saving throw or contract the bonerot disease (see the Bonerot trait)."
  "name": "Pseudopod"
- "desc": "The pustulent shambler feeds on a corpse within 5 feet of it. It regains 1d8 hp per size category of the creature it consumes. For example, the shambler regains 1d8 hp when consuming a Tiny creature’s corpse or 4d8 hp when consuming a Large creature’s corpse. The shambler can’t use Absorb Flesh on a corpse if it or another pustulent shambler has already used Absorb Flesh on the corpse. If the corpse has intact bones, the shambler loses its Amorphous trait for 1 minute."
  "name": "Absorb Flesh"
source:
- [Tome of Beasts 2](https://koboldpress.com/kpstore/product/tome-of-beasts-2-for-5th-edition)
```
