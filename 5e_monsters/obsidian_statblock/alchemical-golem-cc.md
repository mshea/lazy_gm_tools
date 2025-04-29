---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/cc
- monster/cr/9
- monster/size/Large
- monster/type/Construct
statblock: inline
aliases: ["alchemical-golem", "Alchemical Golem-cc"]
---
# Alchemical Golem Cc
*Source: Creature Codex Page 192*

```statblock
"dice": false
"name": "Alchemical Golem Cc"
"size": "Large"
"type": "Construct"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "147"
"hit_dice": "14d10+70"
"stats":
- !!int "18"
- !!int "7"
- !!int "21"
- !!int "7"
- !!int "10"
- !!int "1"
"speed": "walk 20 ft."
"senses": darkvision 60 ft., passive Perception 10
"skillsaves":
"languages": "understands the languages of its creator but can't speak"
"cr": "9"
"damage_immunities": "poison, psychic; bludgeoning, piercing, and slashing from nonmagical attacks not made with adamantine"
"damage_resistances": "acid, cold, fire, lightning"
"traits":
- "desc": "Syringes on the golem's back pierce its silver hide and infuse it with a powerful admixture. At the start of its turn, the alchemical golem can select one of the following infusions. Each infusion lasts until the start of its next turn. The golem can't use multiple infusions at once.\nBrimstone: The golem takes 7 (2d6) necrotic damage when it activates this infusion. The golem can breathe poison as an action. In addition, any creature that starts its turn within 5 feet of the golem must succeed on a DC 16 Constitution saving throw or be poisoned until the start of the creature's next turn.\nQuicksilver: The golem takes 14 (4d6) necrotic damage when it activates this infusion. The golem's silver hide turns to shifting quicksilver, increasing its speed to 40 feet and granting it resistance to damage to which it is not already immune. l\nSalt: The golem takes 17 (5d6) necrotic damage when it activates this infusion. The golem's silver hide is covered with salt crystals, increasing its AC by 3. The golem's slam attacks deal an extra 14 (4d6) piercing damage and the ground within 20 feet of the golem becomes difficult terrain for 1 hour. A creature can force an adamantine syringe into the golem's body with a successful DC 25 Strength check while grappling the golem, nullifying its current infusion and dealing 35 (10d6) piercing damage to it."
  "name": "Alchemical Infusion"
- "desc": "Whenever the golem takes acid, cold, fire, or lightning damage, all creatures within 20 feet of the golem must make a DC 16 Dexterity saving throw, taking damage equal to the damage the golem took on a failed save, or half as much damage on a successful one."
  "name": "Elemental Expulsion"
- "desc": "The golem is immune to any spell or effect that would alter its form."
  "name": "Immutable Form"
- "desc": "The golem has advantage on saving throws against spells and other magical effects."
  "name": "Magic Resistance"
- "desc": "The golem's weapon attacks are magical."
  "name": "Magic Weapons"
"actions":
- "desc": "The golem makes two slam attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) bludgeoning damage."
  "name": "Slam"
- "desc": "The golem exhales poisonous fumes in a 30-foot cone. Each creature in that area must make a DC 16 Dexterity saving throw, taking 31 (9d6) poison damage on a failed save, or half as much damage on a successful one."
  "name": "Poison Breath (Brimstone Infusion Only; Recharge 5-6)"
source:
- [Creature Codex](https://koboldpress.com/kpstore/product/creature-codex-for-5th-edition-dnd)
```
