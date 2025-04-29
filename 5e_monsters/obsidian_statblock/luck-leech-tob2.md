---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob2
- monster/cr/10
- monster/size/Medium
- monster/type/Fey
statblock: inline
aliases: ["luck-leech", "Luck Leech-tob2"]
---
# Luck Leech Tob2
*Source: Tome of Beasts 2 Page 241*

```statblock
"dice": false
"name": "Luck Leech Tob2"
"size": "Medium"
"type": "Fey"
"ac": !!int "17"
"ac_class": "studded leather"
"hp": !!int "150"
"hit_dice": "20d8+60"
"stats":
- !!int "14"
- !!int "21"
- !!int "16"
- !!int "17"
- !!int "14"
- !!int "19"
"speed": "walk 30 ft."
"senses": darkvision 60 ft., passive Perception 16
"skillsaves":
  "deception": !!int "8"
  "perception": !!int "6"
  "stealth": !!int "9"
"languages": "Common, Sylvan, Umbral"
"cr": "10"
"damage_immunities": "necrotic"
"traits":
- "desc": "If a creature within 60 feet of the luck leech rolls a 20 on an ability check, attack roll, or saving throw, the luck leech gains 1 luck point. It can’t have more than 4 luck points at a time."
  "name": "Leech Luck"
- "desc": "If the luck leech doesn’t have 4 luck points at sunset, it gains 2 luck points. It can’t have more than 4 luck points at a time. In addition, if the luck leech rolls a 1 on the d20 for an attack roll, ability check, or saving throw while it has at least 1 luck point, it can reroll the die and must use the new roll. This trait doesn’t expend luck points."
  "name": "Reserve of Fortune"
- "desc": "As a bonus action, the luck leech can spend 1 luck point to: \n* Gain advantage on its next attack or saving throw \n* Cast misty step\n* Increase the necrotic damage of its next successful biting arms attack by an extra 9 (2d8) \n* Force each creature that is concentrating on a spell within 60 feet of it to make a DC 16 Constitution saving throw, losing its concentration on the spell on a failure."
  "name": "Turn Luck"
"actions":
- "desc": "The luck leech makes two biting arm attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 18 (3d8 + 5) piercing damage plus 9 (2d8) necrotic damage."
  "name": "Biting Arms"
- "desc": "Each creature the luck leech can see within 30 feet of it must make a DC 16 Charisma saving throw. On a failure, the creature takes 27 (6d8) psychic damage, becomes blinded until the end of its next turn, and is cursed with falling fortunes. On a success, a creature takes half the damage and isn’t blinded or cursed. For each creature that fails this saving throw, the luck leech gains 1 luck point."
  "name": "Feast of Fortune (Recharge 6)"
source:
- [Tome of Beasts 2](https://koboldpress.com/kpstore/product/tome-of-beasts-2-for-5th-edition)
```
