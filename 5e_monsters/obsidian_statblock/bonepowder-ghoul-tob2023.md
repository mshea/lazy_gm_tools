---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob2023
- monster/cr/12
- monster/size/Small
- monster/type/Undead
statblock: inline
aliases: ["bonepowderghoul-tob1-2023", "Bonepowder Ghoul-tob2023"]
---
# Bonepowder Ghoul Tob2023
*Source: Tome of Beasts 2023 Page 201*

```statblock
"dice": false
"name": "Bonepowder Ghoul Tob2023"
"size": "Small"
"type": "Undead"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "180"
"hit_dice": "24d6 + 96"
"stats":
- !!int "10"
- !!int "20"
- !!int "18"
- !!int "19"
- !!int "15"
- !!int "18"
"speed": "walk 30 ft."
"senses": darkvision 60 ft., passive Perception 16
"skillsaves":
  "Perception": !!int "6"
  "Stealth": !!int "9"
"languages": "Common, Darakhul, Draconic, Dwarvish"
"cr": "12"
"damage_immunities": "necrotic, poison"
"damage_resistances": "cold, lightning; bludgeoning, piercing, and slashing from nonmagical attacks"
"traits":
- "desc": "The bonepowder ghoul can move through a space as narrow as 1 inch wide without squeezing."
  "name": "Amorphous (Dust Form Only)"
- "desc": "The ghoul requires no air or sleep."
  "name": "Hungry Dead Nature"
- "desc": "The bonepowder ghoul and any ghouls within 30 feet of it have advantage on saving throws against effects that turn Undead."
  "name": "Turning Defiance"
"actions":
- "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 18 (3d8 + 5) piercing damage plus 9 (2d8) necrotic damage, and the target’s Strength score is reduced by 1d4. The target dies if this reduces its Strength to 0. Otherwise, the reduction lasts until the target finishes a short or long rest. If the target is a Humanoid, it must succeed on a DC 17 Constitution saving throw or contract the darakhul fever disease (see the Darakhul Fever sidebar)."
  "name": "Bite"
- "desc": "The ghoul projects a 30-foot cone of grave dust. Each creature in the area must succeed on a DC 17 Dexterity saving throw or take 13 (3d8) necrotic damage. If a creature is a Humanoid, it must also succeed on a DC 17 Constitution saving throw or contract the darakhul fever disease (see the Darakhul Fever sidebar)."
  "name": "Gravedust"
- "desc": "The ghoul creates a whirlwind of bones and teeth in a 20-foot cube originating from it. Each creature in that area must make a DC 17 Dexterity saving throw. On a failure, a creature takes 55 (10d10) slashing damage, and its Strength score is reduced by 1d6. The creature dies if this reduces its Strength to 0. Otherwise, the reduction lasts until the target finishes a short or long rest. On a success, a creature takes half the damage and its Strength score isn’t reduced."
  "name": "Whirlwind (Dust Form Only; Recharge 5–6)"
- "desc": "(Coalesced Form Only)The bonepowder ghoul casts one of the following spells, requiring no material components and using Charisma as the spellcasting ability (spell save DC 16):\nAt will: dispel magic, mage hand, ray of enfeeblement\n3/day each: blindness/deafness, fear\n1/day: phantasmal killer"
  "name": "Spellcasting"
"reactions":
- "desc": "When a bonepowder ghoul deals necrotic damage with Gravedust to at least one creature that isn’t a Construct or Undead, it can magically transform from its dusty form into a coalesced form. Its statistics are the same in each form, except it can speak audibly only in its coalesced form. The coalesced form lasts for a number of minutes equal to the total necrotic damage it dealt with Gravedust to creatures that aren’t Constructs or Undead or until the ghoul ends it as a bonus action."
  "name": "Coalesce"
source:
- [Tome of Beasts 2023](https://koboldpress.com/kpstore/product/tome-of-beasts-1-2023-edition/)
```
