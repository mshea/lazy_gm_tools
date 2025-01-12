---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob2
- monster/cr/3
- monster/size/Medium
- monster/type/Aberration
statblock: inline
aliases: ["bloodsapper", "Bloodsapper-tob2"]
---
# Bloodsapper Tob2
*Source: Tome of Beasts 2 Page 44*

```statblock
"dice": false
"name": "Bloodsapper Tob2"
"size": "Medium"
"type": "Aberration"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "90"
"hit_dice": "12d8+36"
"stats":
- !!int "16"
- !!int "14"
- !!int "16"
- !!int "5"
- !!int "12"
- !!int "7"
"speed": "walk 40 ft. climb 20 ft."
"senses": darkvision 60 ft., passive Perception 13
"skillsaves":
  "perception": !!int "3"
  "stealth": !!int "4"
  "survival": !!int "3"
"languages": "understands Common but can’t speak"
"cr": "3"
"traits":
- "desc": "A bloodsapper can smell blood within 240 feet of it. It can determine whether the blood is fresh or old and what type of creature shed the blood. In addition, the bloodsapper has advantage on Wisdom (Perception) and Wisdom (Survival) checks to find or track a creature that doesn’t have all its hp."
  "name": "Blood Scent"
"actions":
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) slashing damage."
  "name": "Claw"
- "desc": "Melee Weapon Attack: +5 to hit, reach 15 ft., one target. Hit: 12 (2d8 + 3) piercing damage, and the bloodsapper attaches to the target. While attached, the bloodsapper doesn’t attack. Instead, at the start of each of the bloodsapper’s turns, the target loses 12 (2d8 + 3) hp due to blood loss. The bloodsapper can detach itself from a target by spending 5 feet of its movement, which it does once it has drained 25 hp from the target or the target dies. A creature, including the target, can take its action to detach the bloodsapper’s tongue by succeeding on a DC 14 Strength check. Alternatively, the bloodsapper’s tongue can be attacked and severed (AC 12; hp 20). The bloodsapper regrows a severed tongue when it completes a long rest or when it reduces a creature to 0 hp."
  "name": "Draining Tongue"
- "desc": "The bloodsapper can expel a 15-foot cone of acrid gas and blood from its bladder. Each creature in the area must make a DC 13 Constitution saving throw. On a failure, a creature takes 14 (4d6) acid damage and is poisoned for 1 minute. On a success, a creature takes half the damage and isn’t poisoned. A poisoned creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Once a bloodsapper uses its Bloody Breath, it can’t use Bloody Breath again until it has drained at least 25 hp of blood from a creature."
  "name": "Bloody Breath (Recharge Special)"
source:
- [Tome of Beasts 2](https://koboldpress.com/kpstore/product/tome-of-beasts-2-for-5th-edition)
```
