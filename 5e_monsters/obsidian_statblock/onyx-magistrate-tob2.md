---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob2
- monster/cr/8
- monster/size/Large
- monster/type/Construct
statblock: inline
aliases: ["onyx-magistrate", "Onyx Magistrate-tob2"]
---
# Onyx Magistrate Tob2
*Source: Tome of Beasts 2 Page 276*

```statblock
"dice": false
"name": "Onyx Magistrate Tob2"
"size": "Large"
"type": "Construct"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "123"
"hit_dice": "13d10+52"
"stats":
- !!int "19"
- !!int "10"
- !!int "18"
- !!int "16"
- !!int "20"
- !!int "20"
"speed": "fly 30 ft. walk 0 ft. hover True ft."
"senses": darkvision 60 ft., passive Perception 18
"skillsaves":
  "insight": !!int "8"
  "intimidation": !!int "8"
  "perception": !!int "8"
  "persuasion": !!int "8"
  "religion": !!int "6"
"languages": "Common, Infernal"
"cr": "8"
"damage_immunities": "necrotic, poison; bludgeoning, piercing, and slashing from nonmagical attacks not made with adamantine weapons"
"damage_resistances": "cold, fire, psychic"
"traits":
- "desc": "The onyx magistrate is immune to any spell or effect that would alter its form."
  "name": "Immutable Form"
- "desc": "The onyx magistrate has advantage on saving throws against spells and other magical effects."
  "name": "Magic Resistance"
- "desc": "The onyx magistrate’s weapon attacks are magical."
  "name": "Magic Weapons"
"actions":
- "desc": "The onyx magistrate makes three scepter attacks. Alternatively, it can use Necrotic Ray twice."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 15 (2d10 + 4) bludgeoning damage, and the target must succeed on a DC 15 Strength saving throw or be knocked prone."
  "name": "Scepter"
- "desc": "Ranged Spell Attack: +8 to hit, range 30/120 ft., one target. Hit: 17 (3d8 + 4) necrotic damage."
  "name": "Necrotic Ray"
- "desc": "Each creature of the onyx magistrate’s choice that is within 30 feet of the magistrate and aware of it must succeed on a DC 16 Wisdom saving throw or be cursed with dire judgment. While cursed in this way, the creature can’t regain hp by magical means, though it can still regain hp from resting and other nonmagical means. In addition, when a cursed creature makes an attack roll or a saving throw, it must roll a d4 and subtract the number from the attack roll or saving throw. The curse lasts until it is lifted by a remove curse spell or similar magic."
  "name": "Dire Judgement (1/Day)"
"reactions":
- "desc": "The onyx magistrate adds 3 to its AC against one attack that would hit it. Alternatively, the onyx magistrate succeeds on a saving throw it failed."
  "name": "Tip the Scales (Recharge 5-6)"
source:
- [Tome of Beasts 2](https://koboldpress.com/kpstore/product/tome-of-beasts-2-for-5th-edition)
```
