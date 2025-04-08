---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob2
- monster/cr/4
- monster/size/Medium
- monster/type/Undead
statblock: inline
aliases: ["winterghast", "Winterghast-tob2"]
---
# Winterghast Tob2
*Source: Tome of Beasts 2 Page 371*

```statblock
"dice": false
"name": "Winterghast Tob2"
"size": "Medium"
"type": "Undead"
"ac": !!int "13"
"ac_class": "None"
"hp": !!int "78"
"hit_dice": "12d8+24"
"stats":
- !!int "16"
- !!int "17"
- !!int "15"
- !!int "10"
- !!int "13"
- !!int "9"
"speed": "walk 30 ft."
"senses": darkvision 60 ft., passive Perception 11
"skillsaves":
  "stealth": !!int "5"
"languages": "Common"
"cr": "4"
"damage_immunities": "cold, poison"
"damage_resistances": "necrotic"
"traits":
- "desc": "A creature that fails its saving throw against the winterghast’s bite attack becomes infected with the creeping cold disease. At the end of each long rest, the infected creature must succeed on a DC 13 Constitution saving throw each day or take 9 (2d8) cold damage and 5 (2d4) necrotic damage and suffer one level of exhaustion if the creature has no levels of exhaustion. The target’s hp maximum is reduced by an amount equal to the necrotic damage taken. The exhaustion and hp maximum reduction last until the target finishes a long rest after the disease is cured. If the disease reduces the creature’s hp maximum to 0, the creature dies, and it rises as a winterghast 1d4 hours later. A creature that succeeds on two saving throws against the diseases recovers from it. Alternatively, the disease can be removed by the lesser restoration spell or similar magic."
  "name": "Creeping Cold"
- "desc": "Fire damage melts some of the ice covering the winterghast, unleashing its horrific stench. Each creature within 20 feet of the winterghast when it takes fire damage must succeed on a DC 12 Constitution saving throw or be poisoned until the end of its next turn."
  "name": "Hidden Stench"
"actions":
- "desc": "The winterghast makes two attacks: one with its bite and one with its claw or two with its claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 7 (1d8 + 3) piercing damage plus 4 (1d8) cold damage. If the target is a humanoid, it must succeed on a DC 13 Constitution saving throw or contract the creeping cold disease (see the Creeping Cold trait)."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 10 (2d6 + 3) slashing damage. If the target is a creature other than an undead, it must succeed on a DC 13 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
  "name": "Claw"
source:
- [Tome of Beasts 2](https://koboldpress.com/kpstore/product/tome-of-beasts-2-for-5th-edition)
```
