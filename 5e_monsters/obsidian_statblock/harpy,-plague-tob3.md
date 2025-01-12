---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob3
- monster/cr/6
- monster/size/Medium
- monster/type/Monstrosity
statblock: inline
aliases: ["harpy-plague", "Harpy, Plague-tob3"]
---
# Harpy, Plague Tob3
*Source: Tome of Beasts 3 Page 229*

```statblock
"dice": false
"name": "Harpy, Plague Tob3"
"size": "Medium"
"type": "Monstrosity"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "142"
"hit_dice": "19d8+57"
"stats":
- !!int "16"
- !!int "14"
- !!int "17"
- !!int "11"
- !!int "14"
- !!int "16"
"speed": "walk 20 ft. fly 60 ft."
"senses": blindsight 90', passive Perception 15
"skillsaves":
  "perception": !!int "2"
"languages": "Common"
"cr": "6"
"damage_resistances": "necrotic, poison "
"traits":
- "desc": "Magically transmit simple messages and images to any creature within 90' of it that can understand a language. This telepathy doesn't allow receiver to telepathically respond."
  "name": "Limited Telepathy"
- "desc": "A creature infected with harpy's plague becomes contagious 24 hrs after contracting the disease. When a creature starts its turn within 5 ft. of contagious target that creature must make DC 15 Con save or also contract harpy's plague disease."
  "name": "Virulence"
"actions":
- "desc": "Dirge then 1 Bite and 2 Talons or 3 Sorrowful Caws. If it hits Med or smaller creature with two Talons attacks target grappled (escape DC 15). Until this grapple ends harpy can automatically hit target with its Talons and harpy can’t make Talons attacks vs. others."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, 5 ft., one target, 8 (2d4+3) piercing damage + 7 (2d6) necrotic. If target is a creature it must make DC 15 Con save or contract harpy's plague disease. If target is disheartened and contracts harpy's plague its hp max is reduced by amount equal to necrotic taken. Until disease is cured target can’t regain hp except by magical means and target’s hp max decreases by 10 (3d6) every 24 hrs. If target’s hp max drops to 0 as a result of this disease target dies."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +6 to hit, 5 ft., one target, 14 (2d10+3) slashing damage."
  "name": "Talons"
- "desc": "Ranged Spell Attack: +6 to hit, 90 ft., one target, 13 (3d6+3) psychic."
  "name": "Sorrowful Caw"
- "desc": "Telepathically sings a mournful hymn and projects images of sickly and dying loved ones in mind of one creature it can see within 90' of it. Target: DC 15 Wis save or be disheartened for 1 min. While disheartened creature has disadvantage on saves vs. being poisoned or contracting a disease. Disheartened creature can re-save at end of each of its turns success ends effect on itself."
  "name": "Dirge"
source:
- [Tome of Beasts 3](https://koboldpress.com/kpstore/product/tome-of-beasts-3-for-5th-edition/)
```
