---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob2
- monster/cr/8
- monster/size/Medium
- monster/type/Fiend
statblock: inline
aliases: ["hantu-penanggal", "Hantu Penanggal-tob2"]
---
# Hantu Penanggal Tob2
*Source: Tome of Beasts 2 Page 192*

```statblock
"dice": false
"name": "Hantu Penanggal Tob2"
"size": "Medium"
"type": "Fiend"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "123"
"hit_dice": "19d8+38"
"stats":
- !!int "14"
- !!int "16"
- !!int "14"
- !!int "11"
- !!int "10"
- !!int "18"
"speed": "fly 40 ft. walk 30 ft."
"senses": truesight 60 ft., passive Perception 10
"skillsaves":
  "deception": !!int "10"
  "stealth": !!int "6"
"languages": "Abyssal, Common, Infernal"
"cr": "8"
"damage_immunities": "fire, poison"
"damage_resistances": "cold, lightning; bludgeoning, piercing, and slashing from nonmagical attacks"
"traits":
- "desc": "As a bonus action, the hantu penanggal detaches its head. The head trails entrails like flexible tentacles. While detached, the head and body act independently from each other on the same initiative, and each has hp equal to half its hp before detaching its head. Its statistics remain the same in both forms, except the body loses its truesight and gains blindsight out to a range of 60 feet.\n\nThe head and body can use the whole form’s innate spellcasting trait, expending daily uses as normal. The two forms can rejoin into the fiend’s whole form as a bonus action if they are within 5 feet of each other. If the head is destroyed while it is detached, the body also perishes. If the body is destroyed while the head is detached, the head has disadvantage on attack rolls and ability checks until it acquires a new body. A creature within 30 feet of the penanggal and that can see the detachment must succeed on a DC 14 Wisdom saving throw or be frightened for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
  "name": "Detachable Head"
- "desc": "The hantu penanggal’s innate spellcasting ability is Charisma (spell save DC 15, +7 to hit with spell attacks). It can innately cast the following spells, requiring no material components.\nAt will: darkness, detect evil and good\n2/day each: protection from evil and good, scorching ray\n1/day each: gaseous form"
  "name": "Innate Spellcasting"
"actions":
- "desc": "When detached, the hantu penanggal’s head makes one bite attack and one entrails attack, and its body makes two claw attacks. In its whole form, it can make three rapier attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) piercing damage plus 7 (2d6) necrotic damage."
  "name": "Rapier (Whole Form Only)"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) slashing damage plus 3 (1d6) necrotic damage."
  "name": "Claw (Body Only)"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 12 (2d8 + 3) piercing damage plus 7 (2d6) necrotic damage. The target’s hp maximum is reduced by an amount equal to the necrotic damage taken, and the penanggal regains hp equal to that amount. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hp maximum to 0. A humanoid slain in this way becomes the new body for the penanggal, if it is detached and its body died. Otherwise, the humanoid rises 24 hours later as a new hantu penanggal."
  "name": "Bite (Head Only)"
- "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 10 (2d6 + 3) bludgeoning damage and the target is grappled (escape DC 15). Until this grapple ends, the target is restrained, and the penanggal can’t use its entrails on another target."
  "name": "Entrails (Head Only)"
source:
- [Tome of Beasts 2](https://koboldpress.com/kpstore/product/tome-of-beasts-2-for-5th-edition)
```
