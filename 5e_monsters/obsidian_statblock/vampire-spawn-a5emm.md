---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/a5emm
- monster/cr/4
- monster/size/Medium
- monster/type/Undead
statblock: inline
aliases: ["vampire-spawn-a5e", "Vampire Spawn-a5emm"]
---
# Vampire Spawn A5Emm
*Source: A5e Monstrous Menagerie Page 421*

```statblock
"dice": false
"name": "Vampire Spawn A5Emm"
"size": "Medium"
"type": "Undead"
"ac": !!int "15"
"ac_class": ""
"hp": !!int "76"
"hit_dice": "9d8+36"
"stats":
- !!int "18"
- !!int "16"
- !!int "18"
- !!int "10"
- !!int "14"
- !!int "14"
"speed": "walk 30 ft. climb 30 ft."
"senses": darkvision 60 ft., passive Perception 14
"skillsaves":
  "perception": !!int "4"
  "stealth": !!int "5"
"languages": "the languages it knew in life"
"cr": "4"
"damage_resistances": "necrotic; damage from nonmagical, non-silvered weapons"
"traits":
- "desc": "The vampire regains 10 hit points at the start of its turn if it has at least 1 hit point and hasnt taken radiant damage since its last turn."
  "name": "Regeneration"
- "desc": "The vampire can climb even on difficult surfaces and upside down on ceilings."
  "name": "Spider Climb"
- "desc": "Vampires most common weaknesses are sunlight and running water. When the vampire ends its turn in contact with one of its weaknesses (such as being bathed in sunlight or running water), it takes 20 radiant damage. While in contact with its weakness, it can't use its Regeneration trait."
  "name": "Vampire Weaknesses"
"actions":
- "desc": "The vampire makes two attacks  only one of which can be a bite attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit  reach 5 ft.  one target. Hit: 8 (1d8 + 4) bludgeoning damage. The target is grappled (escape DC 14)."
  "name": "Grab"
- "desc": "Melee Weapon Attack: +6 to hit  reach 5 ft.  one target that is grappled  incapacitated  restrained  or willing. Hit: 9 (1d10 + 4) piercing damage plus 14 (4d6) necrotic damage. The targets hit point maximum is reduced by an amount equal to the necrotic damage dealt  and the vampire regains this number of hit points. The reduction lasts until the target finishes a long rest. If the target is reduced to 0 hit points by this attack  it dies."
  "name": "Bite"
"reactions":
- "desc": "When the vampire takes radiant damage, it moves up to its Speed without provoking opportunity attacks."
  "name": "Hissing Scuttle (1/Day)"
source:
- [A5e Monstrous Menagerie](https://enpublishingrpg.com/products/level-up-monstrous-menagerie-a5e)
```
