---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/cc
- monster/cr/2
- monster/size/Medium
- monster/type/Beast
statblock: inline
aliases: ["crypt-spider", "Crypt Spider-cc"]
---
# Crypt Spider Cc
*Source: Creature Codex Page 133*

```statblock
"dice": false
"name": "Crypt Spider Cc"
"size": "Medium"
"type": "Beast"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "38"
"hit_dice": "7d8+7"
"stats":
- !!int "14"
- !!int "16"
- !!int "12"
- !!int "10"
- !!int "11"
- !!int "8"
"speed": "climb 30 ft. walk 30 ft."
"senses": blindsight 10 ft., darkvision 60 ft., passive Perception 10
"skillsaves":
  "deception": !!int "1"
  "intimidation": !!int "1"
  "stealth": !!int "5"
"languages": "Common, Undercommon"
"cr": "2"
"damage_immunities": "poison"
"traits":
- "desc": "As a bonus action, a crypt spider can cocoon a creature within 5 feet that is currently restrained by webbing. A cocooned creature has disadvantage on ability checks and saving throws made to escape the web."
  "name": "Cocoon Prey"
- "desc": "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
  "name": "Spider Climb"
- "desc": "While in contact with a web, the spider knows the exact location of any other creature in contact with that web."
  "name": "Web Sense"
- "desc": "The spider ignores movement restrictions caused by webbing."
  "name": "Web Walker"
"actions":
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 6 (1d8 + 2) piercing damage, and the creature must make a DC 13 Constitution saving throw, taking 9 (2d8) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the creature to 0 hp, the creature is stable but poisoned for 1 hour, even after regaining hp, and is paralyzed while poisoned in this way."
  "name": "Bite"
- "desc": "Ranged Weapon Attack: +5 to hit, range 30/60 ft., one creature. Hit: The creature is restrained by webbing. As an action, the restrained creature can make a DC 13 Strength check, escaping from the webbing on a success. The effect also ends if the webbing is destroyed. The webbing has AC 10, 5 hp, vulnerability to fire damage, and immunity to bludgeoning, poison, and psychic damage."
  "name": "Web (Recharge 5-6)"
- "desc": "The crypt spider creates a swarm of spiders statistics). The crypt spider can have no more than four zombies under its control at one time."
  "name": "Create Zombie"
source:
- [Creature Codex](https://koboldpress.com/kpstore/product/creature-codex-for-5th-edition-dnd)
```
