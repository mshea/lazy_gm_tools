---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob2023
- monster/cr/7
- monster/size/Medium
- monster/type/Fiend
statblock: inline
aliases: ["souleater-tob1-2023", "Soul Eater-tob2023"]
---
# Soul Eater Tob2023
*Source: Tome of Beasts 2023 Page 336*

```statblock
"dice": false
"name": "Soul Eater Tob2023"
"size": "Medium"
"type": "Fiend"
"ac": !!int "16"
"ac_class": ""
"hp": !!int "105"
"hit_dice": "14d8 + 42"
"stats":
- !!int "13"
- !!int "22"
- !!int "17"
- !!int "12"
- !!int "11"
- !!int "11"
"speed": "walk 60 ft. fly 30 ft."
"senses": darkvision 60 ft., passive Perception 13
"skillsaves":
  "Intimidation": !!int "3"
  "Perception": !!int "3"
  "Stealth": !!int "9"
"languages": "Abyssal, Infernal, telepathy 60 ft."
"cr": "7"
"damage_immunities": "poison"
"damage_resistances": "cold, fire, lightning; bludgeoning, piercing, and slashing from nonmagical attacks"
"traits":
- "desc": "The soul eater has advantage on saving throws against spells and other magical effects."
  "name": "Magic Resistance"
- "desc": "The soul eater can pinpoint the location of creatures that have souls within 60 feet of it and can sense the general direction of such creatures within 1 mile of it."
  "name": "Soul Sense"
"actions":
- "desc": "The soul eater makes two Claw attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage plus 10 (3d6) psychic damage."
  "name": "Claw"
- "desc": "The soul eater emits a wave of psychic energy to hasten the demise of nearby creatures, bringing them one step closer to having their souls consumed. Each creature within 20 feet of the soul eater must make a DC 14 Charisma saving throw, taking 31 (9d6) psychic damage on a failed save, or half as much damage on a successful one. A creature reduced to below half its hp maximum by this effect has disadvantage on the saving throw against the soul eater’s Soul Drain for 1 minute."
  "name": "Hasten Consumption (Recharge 5–6)"
"reactions":
- "desc": "When the soul eater reduces a target to 0 hp, the soul eater consumes that creature’s soul. The victim must succeed on a DC 14 Constitution saving throw or immediately die as the soul eater consumes its soul. A creature killed in this way can be restored to life only by means of a true resurrection or a wish spell. If the soul eater is killed within 120 feet of the body of a soul it consumed and the victim has been dead for no longer than 1 minute, the victim’s soul returns to the body and returns to life, unconscious and stable with 0 hp."
  "name": "Soul Drain"
source:
- [Tome of Beasts 2023](https://koboldpress.com/kpstore/product/tome-of-beasts-1-2023-edition/)
```
