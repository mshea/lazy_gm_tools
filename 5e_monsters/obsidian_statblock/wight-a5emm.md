---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/a5emm
- monster/cr/3
- monster/size/Medium
- monster/type/Undead
statblock: inline
aliases: ["wight-a5e", "Wight-a5emm"]
---
# Wight A5Emm
*Source: A5e Monstrous Menagerie Page 423*

```statblock
"dice": false
"name": "Wight A5Emm"
"size": "Medium"
"type": "Undead"
"ac": !!int "15"
"ac_class": ""
"hp": !!int "45"
"hit_dice": "6d8+18"
"stats":
- !!int "14"
- !!int "14"
- !!int "16"
- !!int "10"
- !!int "12"
- !!int "14"
"speed": "walk 30 ft."
"senses": darkvision 60 ft., passive Perception 13
"skillsaves":
  "perception": !!int "3"
  "stealth": !!int "4"
"languages": "the languages it knew in life"
"cr": "3"
"damage_resistances": "cold, necrotic; damage from nonmagical, non-silvered weapons"
"traits":
- "desc": "A creature that starts its turn grappled by the wight, touches it, or hits it with a melee attack while within 5 feet takes 3 (1d6) cold damage. A creature can take this damage only once per turn. If the wight has been subjected to fire damage since its last turn, this trait doesnt function."
  "name": "Cold Aura"
- "desc": "While in sunlight, the wight has disadvantage on attack rolls, as well as on Perception checks that rely on sight."
  "name": "Sunlight Sensitivity"
- "desc": "A wight doesnt require air, sustenance, or sleep."
  "name": "Undead Nature"
"actions":
- "desc": "Melee Weapon Attack: +4 to hit  reach 5 ft.  one target. Hit: 6 (1d8 + 2) slashing damage plus 3 (1d6) cold damage."
  "name": "Longsword"
- "desc": "Melee Weapon Attack: +4 to hit  reach 5 ft.  one target. Hit: 3 (1d6) cold damage  and the target is grappled (escape DC 12). Until this grapple ends  the target is restrained and the only attack the wight can make is Life Drain against the grappled target."
  "name": "Seize"
- "desc": "Ranged Weapon Attack: +4 to hit  range 150/600 ft.  one target. Hit: 6 (1d8 + 2) piercing damage plus 3 (1d6) cold damage."
  "name": "Longbow"
"bonus_actions":
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 6 (1d8 + 2) necrotic damage, and the target makes a DC 13 Constitution saving throw. On a failure, the targets hit point maximum is reduced by an amount equal to the necrotic damage dealt. The reduction lasts until the target finishes a long rest. A humanoid or beast reduced to 0 hit points by this attack dies. Its corpse rises 24 hours later as a zombie under the wights control."
  "name": "Life Drain"
source:
- [A5e Monstrous Menagerie](https://enpublishingrpg.com/products/level-up-monstrous-menagerie-a5e)
```
