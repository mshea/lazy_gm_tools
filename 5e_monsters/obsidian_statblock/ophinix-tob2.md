---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob2
- monster/cr/2
- monster/size/Large
- monster/type/Monstrosity
statblock: inline
aliases: ["ophinix", "Ophinix-tob2"]
---
# Ophinix Tob2
*Source: Tome of Beasts 2 Page 283*

```statblock
"dice": false
"name": "Ophinix Tob2"
"size": "Large"
"type": "Monstrosity"
"ac": !!int "13"
"ac_class": "None"
"hp": !!int "60"
"hit_dice": "8d10+16"
"stats":
- !!int "18"
- !!int "16"
- !!int "15"
- !!int "2"
- !!int "12"
- !!int "5"
"speed": "walk 10 ft. fly 40 ft."
"senses": blindsight 30 ft., darkvision 120 ft., passive Perception 13
"skillsaves":
  "perception": !!int "3"
  "stealth": !!int "5"
"languages": "—"
"cr": "2"
"damage_immunities": "lightning"
"traits":
- "desc": "While the ophinix is charged with electricity, a creature that touches the ophinix or hits it with a melee attack while within 5 feet of it takes 2 (1d4) lightning damage."
  "name": "Conductive Fur"
- "desc": "Whenever the ophinix is subjected to lightning damage, it takes no damage and becomes charged with electricity. If it is already charged, the duration resets to 1 minute."
  "name": "Lightning Recharge"
"actions":
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d6 + 4) slashing damage. If the ophinix is charged with electricity, the target also takes 5 (2d4) lightning damage."
  "name": "Claw"
- "desc": "The ophinix rubs along a dry surface and charges its fur with static electricity. Its fur remains charged with electricity for 1 minute or until it uses Lightning Strike."
  "name": "Generate Static"
- "desc": "The ophinix releases its static electricity at up to three targets it can see within 30 feet of it. Each creature must make a DC 12 Dexterity saving throw, taking 5 (2d4) lightning damage on a failed save, or half as much damage on a successful one. After using Lightning Strike, the ophinix is no longer charged with electricity. It can’t use Lightning Strike if isn’t charged with electricity."
  "name": "Lightning Strike (Recharge Special)"
source:
- [Tome of Beasts 2](https://koboldpress.com/kpstore/product/tome-of-beasts-2-for-5th-edition)
```
