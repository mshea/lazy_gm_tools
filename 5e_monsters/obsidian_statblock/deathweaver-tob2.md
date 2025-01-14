---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob2
- monster/cr/5
- monster/size/Huge
- monster/type/Monstrosity
statblock: inline
aliases: ["deathweaver", "Deathweaver-tob2"]
---
# Deathweaver Tob2
*Source: Tome of Beasts 2 Page 83*

```statblock
"dice": false
"name": "Deathweaver Tob2"
"size": "Huge"
"type": "Monstrosity"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "95"
"hit_dice": "10d12+30"
"stats":
- !!int "16"
- !!int "14"
- !!int "17"
- !!int "7"
- !!int "12"
- !!int "15"
"speed": "walk 40 ft. climb 40 ft."
"senses": blindsight 20 ft., darkvision 60 ft., passive Perception 14
"skillsaves":
  "perception": !!int "4"
  "stealth": !!int "5"
"languages": "Deep Speech"
"cr": "5"
"damage_resistances": "necrotic"
"traits":
- "desc": "The deathweaver can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
  "name": "Spider Climb"
- "desc": "While in contact with a web, the deathweaver knows the exact location of any other creature in contact with the same web."
  "name": "Web Sense"
- "desc": "The deathweaver ignores movement restrictions caused by webbing."
  "name": "Web Walker"
- "desc": "The deathweaver’s innate spellcasting ability is Charisma (spell save DC 13, +5 to hit with spell attacks). It can innately cast the following spells, requiring no material components:\nAt will: chill touch\n3/day each: darkness, ray of enfeeblement\n1/day: vampiric touch"
  "name": "Innate Spellcasting"
"actions":
- "desc": "The deathweaver makes two bite attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 10 (2d6 + 3) piercing damage, and the target must make a DC 14 Constitution saving throw, taking 9 (2d8) necrotic damage on a failed save, or half as much damage on a successful one. If the necrotic damage reduces the target to 0 hp, the target is stable but poisoned for 1 hour, even after regaining hp, and is paralyzed while poisoned this way."
  "name": "Bite"
- "desc": "Ranged Weapon Attack: +5 to hit, range 40/80 ft., one creature. Hit: The target is restrained by webbing and takes 3 (1d6) necrotic damage each round. As an action, the restrained target can make a DC 14 Strength check, bursting the webbing on a success. The webbing can also be attacked and destroyed (AC 10; hp 5; vulnerability to fire damage; immunity to bludgeoning, necrotic, poison, and psychic damage). A humanoid slain by this attack rises 24 hours later as a web zombie under the deathweaver’s control, unless the humanoid is restored to life or its body is destroyed. The deathweaver can have no more than twelve web zombies under its control at one time."
  "name": "Web (Recharge 5-6)"
source:
- [Tome of Beasts 2](https://koboldpress.com/kpstore/product/tome-of-beasts-2-for-5th-edition)
```
