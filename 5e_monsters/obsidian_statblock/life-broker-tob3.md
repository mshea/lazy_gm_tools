---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob3
- monster/cr/13
- monster/size/Medium
- monster/type/Fey
statblock: inline
aliases: ["life-broker", "Life Broker-tob3"]
---
# Life Broker Tob3
*Source: Tome of Beasts 3 Page 261*

```statblock
"dice": false
"name": "Life Broker Tob3"
"size": "Medium"
"type": "Fey"
"ac": !!int "16"
"ac_class": "breastplate"
"hp": !!int "190"
"hit_dice": "20d8+100"
"stats":
- !!int "15"
- !!int "19"
- !!int "20"
- !!int "19"
- !!int "14"
- !!int "20"
"speed": "walk 30 ft."
"senses": darkvision 60', passive Perception 17
"skillsaves":
  "perception": !!int "2"
"languages": "Common, Sylvan"
"cr": "13"
"damage_resistances": "nonmagic B/P/S attacks not made w/cold iron weapons"
"traits":
- "desc": "Can spend 10 min coaxing life essence out of willing creature taking only agreed amount of time from creature’s max lifetime. Essence appears as rosy mist that rises from mouth nose or skin of creature and snakes into carved crystal vial in broker’s cloak where it takes the form of a crimson liquid. Creature that drinks such a vial gains life stored within it provided broker gave vial willingly. If broker draws all remaining life from creature creature dies and can be returned to life only via wish spell."
  "name": "Draw Life Essence"
- "desc": "If it spends 1 min studying a mortal creature it can see within 30' of it broker can determine the remainder of that creature’s natural life to the second."
  "name": "Life Reading"
- "desc": "Advantage: spell/magic effect saves."
  "name": "Magic Resistance"
- "desc": "Its weapon attacks are magical. When it hits with any weapon weapon deals + 4d8 necrotic (included below)."
  "name": "Necrotic Weapons"
"actions":
- "desc": "Three Rapier attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +9 to hit, 5 ft., one target, 8 (1d8+4) piercing damage + 18 (4d8) necrotic."
  "name": "Rapier"
- "desc": "Pulls life from hostile creatures within 30' of it that aren’t Constructs or Undead. Each such creature in the area: 36 (8d8) necrotic (DC 18 Con half). Broker gains temp hp equal to the single highest amount of necrotic dealt and has advantage on attack rolls until the end of its next turn."
  "name": "Life Feast (Recharge 5–6)"
"bonus_actions":
- "desc": "Takes Dash Disengage or Dodge."
  "name": "Quick-Footed"
source:
- [Tome of Beasts 3](https://koboldpress.com/kpstore/product/tome-of-beasts-3-for-5th-edition/)
```
