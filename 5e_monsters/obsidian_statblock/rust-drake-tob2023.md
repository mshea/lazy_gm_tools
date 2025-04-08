---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob2023
- monster/cr/8
- monster/size/Medium
- monster/type/Dragon
statblock: inline
aliases: ["rustdrake-tob1-2023", "Rust Drake-tob2023"]
---
# Rust Drake Tob2023
*Source: Tome of Beasts 2023 Page 145*

```statblock
"dice": false
"name": "Rust Drake Tob2023"
"size": "Medium"
"type": "Dragon"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "161"
"hit_dice": "19d8 + 76"
"stats":
- !!int "20"
- !!int "15"
- !!int "19"
- !!int "12"
- !!int "8"
- !!int "8"
"speed": "walk 80 ft. fly 30 ft."
"senses": darkvision 60 ft., passive Perception 15
"skillsaves":
  "Perception": !!int "5"
  "Stealth": !!int "5"
"languages": "Common, Draconic"
"cr": "8"
"damage_immunities": "poison"
"traits":
- "desc": "A creature infected with this disease manifests symptoms 1d4 days after infection, which include painful muscle spasms, particularly in the jaw. At the end of each long rest, the infected creature must succeed on a DC 15 Constitution saving throw or be paralyzed for 1 hour and have its Dexterity score reduced by 1d4. This reduction lasts until the disease is cured. If the disease reduces the creature’s Dexterity to 0, the creature dies. A creature that succeeds on two saving throws recovers from the disease."
  "name": "Rust Drake Lockjaw"
"actions":
- "desc": "The drake makes one Bite attack and two Tail Swipe attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 18 (3d8 + 5) piercing damage, and the target must succeed on a DC 15 Constitution save or contract the rust drake lockjaw disease (see the Rust Drake Lockjaw trait)."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) bludgeoning damage."
  "name": "Tail Swipe"
- "desc": "The rust drake vomits forth a 15-foot cone of rusted metal. Each creature in the area must make a DC 15 Dexterity saving throw, taking 22 (5d8) slashing damage and 22 (5d8) poison damage on a failed save, or half as much damage on a successful one. In addition, each creature that failed the saving throw must succeed on a DC 15 Constitution saving throw or contract the rust drake lockjaw disease (see the Rust Drake Lockjaw trait)."
  "name": "Vomit Scrap (Recharge 5–6)"
source:
- [Tome of Beasts 2023](https://koboldpress.com/kpstore/product/tome-of-beasts-1-2023-edition/)
```
