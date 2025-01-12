---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob2023
- monster/cr/7
- monster/size/Huge
- monster/type/Monstrosity
statblock: inline
aliases: ["causticcharger-tob1-2023", "Caustic Charger-tob2023"]
---
# Caustic Charger Tob2023
*Source: Tome of Beasts 2023 Page 51*

```statblock
"dice": false
"name": "Caustic Charger Tob2023"
"size": "Huge"
"type": "Monstrosity"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "133"
"hit_dice": "14d12 + 42"
"stats":
- !!int "19"
- !!int "11"
- !!int "16"
- !!int "4"
- !!int "10"
- !!int "6"
"speed": "walk 10 ft. burrow 30 ft."
"senses": darkvision 60 ft., passive Perception 10
"languages": "—"
"cr": "7"
"damage_immunities": "acid"
"traits":
- "desc": "The caustic charger can end its move in the space of a prone Large or smaller creature. A creature standing up from prone in the same space as the charger can move to a space within 5 feet of the charger as part of standing up."
  "name": "Straddler"
- "desc": "Difficult terrain composed of rocks or sand doesn’t cost the caustic charger extra movement."
  "name": "Wastes Walk"
"actions":
- "desc": "The caustic charger makes two Ram attacks. It can replace one Ram attack with a Tentacles attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 22 (4d8 + 4) bludgeoning damage, and if the target is a Large or smaller creature, it must succeed on a DC 15 Strength saving throw or be knocked prone. If the charger moved at least 10 feet straight toward the target immediately before the hit, the target has disadvantage on the saving throw."
  "name": "Ram"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d6 + 4) bludgeoning damage plus 14 (4d6) acid damage. If the target is a creature, it must succeed on a DC 15 Constitution saving throw or be paralyzed for 1 minute. The paralyzed creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If the caustic charger attacks a target that is not in the charger’s space, the target takes half the acid damage and has advantage on the saving throw."
  "name": "Tentacles"
"bonus_actions":
- "desc": "The caustic charger feeds on a creature paralyzed by its Tentacles attack. The target must succeed on a DC 15 Constitution saving throw or its hp maximum is reduced by half the amount of acid damage dealt by the Tentacles attack that caused the paralysis, and the charger regains hp equal to that amount. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hp maximum to 0."
  "name": "Slurp"
source:
- [Tome of Beasts 2023](https://koboldpress.com/kpstore/product/tome-of-beasts-1-2023-edition/)
```
