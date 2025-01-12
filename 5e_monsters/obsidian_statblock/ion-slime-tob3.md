---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob3
- monster/cr/5
- monster/size/Small
- monster/type/Ooze
statblock: inline
aliases: ["ion-slime", "Ion Slime-tob3"]
---
# Ion Slime Tob3
*Source: Tome of Beasts 3 Page 245*

```statblock
"dice": false
"name": "Ion Slime Tob3"
"size": "Small"
"type": "Ooze"
"ac": !!int "13"
"ac_class": ""
"hp": !!int "112"
"hit_dice": "15d6+60"
"stats":
- !!int "10"
- !!int "17"
- !!int "18"
- !!int "2"
- !!int "4"
- !!int "1"
"speed": "walk 20 ft. swim 20 ft."
"senses": blindsight 60' (blind beyond), passive Perception 7
"skillsaves":
  "perception": !!int "-3"
"languages": "—"
"cr": "5"
"damage_resistances": "thunder"
"traits":
- "desc": "Move through space 1ft.+ wide with o squeezing."
  "name": "Amorphous"
- "desc": "Whenever subjected to lightning it takes no damage and instead regains hp equal to lightning dealt. Its Supercharge then recharges. If it takes cold while supercharged it must roll a d6. On a 1 or 2 it loses the supercharged state."
  "name": "Ionic Form"
- "desc": "Doesn’t require sleep."
  "name": "Ooze Nature"
- "desc": "Difficult surfaces even ceilings no ability check."
  "name": "Spider Climb"
"actions":
- "desc": "Two Pseudopod attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, 5 ft., one target, 6 (1d6+3) bludgeoning damage + 9 (2d8) lightning."
  "name": "Pseudopod"
- "desc": "Sends shock of lightning through its supercharged pseudopod at onecreature it can see within 5 ft. of it ending supercharged state. Target: 27 (6d8) lightning (DC 15 Con half). Three bolts of lightning then leap to as many as three targets each must be within 20' of first target. Target can be creature or object and each can be targeted by only one bolt. Each target: 13 (3d8) lightning (DC 15 Con half)."
  "name": "Discharge (Supercharged Only)"
"bonus_actions":
- "desc": "Dash or Dodge action."
  "name": "Charged Motion (Supercharged Only)"
- "desc": "Gathers ambient electricity to supercharge itself for 3 rounds. While supercharged slime gains +2 bonus to its AC and it gains an additional action on each of its turns. At end of the third round if the slime hasn’t used the Discharge action it suffers feedback taking 18 (4d8) force. Its supercharged state then ends."
  "name": "Supercharge (Recharge 5–6)"
source:
- [Tome of Beasts 3](https://koboldpress.com/kpstore/product/tome-of-beasts-3-for-5th-edition/)
```
