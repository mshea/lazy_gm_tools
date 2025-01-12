---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob2023
- monster/cr/12
- monster/size/Medium
- monster/type/Celestial
statblock: inline
aliases: ["skeinwitch-tob1-2023", "Skein Witch-tob2023"]
---
# Skein Witch Tob2023
*Source: Tome of Beasts 2023 Page 328*

```statblock
"dice": false
"name": "Skein Witch Tob2023"
"size": "Medium"
"type": "Celestial"
"ac": !!int "20"
"ac_class": "natural armor"
"hp": !!int "162"
"hit_dice": "25d8 +50"
"stats":
- !!int "6"
- !!int "12"
- !!int "14"
- !!int "16"
- !!int "20"
- !!int "20"
"speed": "walk 30 ft. fly 30 ft."
"senses": truesight 60 ft., passive Perception 23
"skillsaves":
  "History": !!int "7"
  "Insight": !!int "13"
  "Perception": !!int "13"
"languages": "Celestial, telepathy 120 ft."
"cr": "12"
"damage_immunities": "fire, lightning, psychic"
"damage_resistances": "radiant"
"traits":
- "desc": "If the skein witch fails a saving throw, it can choose to succeed instead."
  "name": "Fate’s Resistance (3/Day)"
- "desc": "The skein witch has advantage on saving throws against spells and other magical effects."
  "name": "Magic Resistance"
"actions":
- "desc": "The skein witch makes three Inexorable Thread attacks. If two Inexorable Thread attacks hit one creature, the target must succeed on a DC 17 Constitution saving throw or have disadvantage on the next death saving throw it makes before it finishes a short rest. If a creature fails this saving throw multiple times, these effects are cumulative, affecting up to three of the creature’s next death saving throws before it finishes a short rest."
  "name": "Multiattack"
- "desc": "Melee or Ranged Spell Attack: +9 to hit, reach 5 ft. or range 60 ft., one creature. Hit: 27 (5d8 + 5) radiant damage."
  "name": "Inexorable Thread"
- "desc": "The skein witch frays the strands of fate in a 60-foot cone. Each creature in the area must make a DC 17 Wisdom saving throw, taking 55 (10d10) force damage on a failed save, or half as much damage on a successful one. If any creature that failed the saving throw is affected by a condition, such as incapacitated or poisoned, those conditions are randomly redistributed among all the creatures that failed the saving throw."
  "name": "Destiny Distortion Wave (Recharge 5–6)"
- "desc": "One creature within 60 feet of the skein witch must succeed on a DC 17 Wisdom saving throw or the target’s fate is bound to one of its ally’s (chosen at random). Any damage or condition the target suffers is inflicted on the individual to which they are bound instead, and vice versa. A creature can be bound to only one other creature at a time. This binding lasts until lifted by a heal or heroes’ feast spell or similar magic."
  "name": "Bind Fates (1/Day)"
"reactions":
- "desc": "If the skein witch succeeds on a saving throw against a spell of 4th level or lower that targets only the skein witch, the spell has no effect. If the skein witch succeeds on the saving throw by 5 or more, the spell is reflected back at the spellcaster, using the slot level, spell save DC, attack bonus, and spellcasting ability of the caster."
  "name": "Parry Spell"
"bonus_actions":
- "desc": "The skein witch teleports, along with any equipment it is wearing or carrying, up to 30 feet to an unoccupied space it can see. A tiny hourglass shatters into a swirl of sand at the origin and destination when it uses this bonus action."
  "name": "Fate’s Step"
source:
- [Tome of Beasts 2023](https://koboldpress.com/kpstore/product/tome-of-beasts-1-2023-edition/)
```
