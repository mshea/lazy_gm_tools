---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/cc
- monster/cr/9
- monster/size/Large
- monster/type/Dragon
statblock: inline
aliases: ["spider-drake", "Spider Drake-cc"]
---
# Spider Drake Cc
*Source: Creature Codex Page 348*

```statblock
"dice": false
"name": "Spider Drake Cc"
"size": "Large"
"type": "Dragon"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "136"
"hit_dice": "16d10+48"
"stats":
- !!int "19"
- !!int "13"
- !!int "17"
- !!int "7"
- !!int "16"
- !!int "15"
"speed": "climb 40 ft. fly 80 ft. walk 40 ft."
"senses": blindsight 30 ft., darkvision 120 ft., passive Perception 17
"skillsaves":
  "perception": !!int "7"
  "stealth": !!int "5"
  "survival": !!int "7"
"languages": "Common, Draconic"
"cr": "9"
"damage_immunities": "poison"
"traits":
- "desc": "When the spider drake is hit with a melee attack, the attacker's weapon becomes stuck to the web fluid secreted from its scales. If the attacker didn't use a weapon, it must succeed on a DC 16 Strength saving throw or become restrained in the webbing. As an action, a creature can make a DC 16 Strength check, escaping or freeing its weapon from the secretions on a success."
  "name": "Sticky Secretions"
"actions":
- "desc": "The spider drake makes three attacks: one with its bite and two with its claws. It can use Web in place of its bite attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 15 (2d10 + 4) piercing damage plus 7 (2d6) poison damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage."
  "name": "Claw"
- "desc": "The drake exhales poisonous gas in a 30-foot cone. Each creature in that area must make a DC 15 Constitution saving throw. On a failure, a creature takes 42 (12d6) poison damage and is poisoned. On a success, a creature takes half the damage and isn't poisoned. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
  "name": "Poison Breath (Recharge 5-6)"
- "desc": "Ranged Weapon Attack: +5 to hit, range 60/120 ft., one Large or smaller creature. Hit: The creature is restrained by webbing. As an action, the restrained creature can make a DC 16 Strength check, escaping from the webbing on a success. The effect also ends if the webbing is destroyed. The webbing has AC 10, 5 hit points, vulnerability to fire damage, and immunity to bludgeoning, poison, and psychic damage."
  "name": "Web (Recharge 5-6)"
source:
- [Creature Codex](https://koboldpress.com/kpstore/product/creature-codex-for-5th-edition-dnd)
```
