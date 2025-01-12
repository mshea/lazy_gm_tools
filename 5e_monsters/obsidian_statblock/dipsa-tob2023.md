---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob2023
- monster/cr/0.25
- monster/size/Tiny
- monster/type/Ooze
statblock: inline
aliases: ["dipsa-tob1-2023", "Dipsa-tob2023"]
---
# Dipsa Tob2023
*Source: Tome of Beasts 2023 Page 105*

```statblock
"dice": false
"name": "Dipsa Tob2023"
"size": "Tiny"
"type": "Ooze"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "27"
"hit_dice": "6d4 + 12"
"stats":
- !!int "3"
- !!int "17"
- !!int "14"
- !!int "1"
- !!int "6"
- !!int "1"
"speed": "walk 20 ft."
"senses": blindsight 60 ft. (blind beyond this radius), passive Perception 8
"skillsaves":
  "Stealth": !!int "5"
"languages": "—"
"cr": "1/4"
"damage_resistances": "acid"
"traits":
- "desc": "The dipsa can move through a space as narrow as 1 inch wide without squeezing."
  "name": "Amorphous"
- "desc": "The bite of a dipsa is barely perceptible and the wound is quickly anesthetized. When the dipsa hits with a Bite attack, the target must succeed on a DC 15 Wisdom (Perception) check to notice the dipsa and its attack. Each time the creature takes acid damage from an attached dipsa, it can repeat this check, noticing the dipsa on a success. A creature that takes acid damage from the dipsa while below half its hp maximum automatically succeeds on this check."
  "name": "Discreet Bite"
- "desc": "The dipsa doesn’t require sleep."
  "name": "Ooze Nature"
- "desc": "The dipsa has advantage on Dexterity (Stealth) checks made to hide in swampy terrain."
  "name": "Swamp Camouflage"
"actions":
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 1 piercing damage, and the dipsa attaches to the target. While attached, the dipsa can’t attack, and at the start of each of the dipsa’s turns, the target takes 3 (1d6) acid damage and must succeed on a DC 12 Constitution saving throw or have its hp maximum reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hp maximum to 0."
  "name": "Bite"
"bonus_actions":
- "desc": "The dipsa takes the Hide action."
  "name": "Translucent"
source:
- [Tome of Beasts 2023](https://koboldpress.com/kpstore/product/tome-of-beasts-1-2023-edition/)
```
