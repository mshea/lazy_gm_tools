---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/cc
- monster/cr/16
- monster/size/Medium
- monster/type/Fiend
statblock: inline
aliases: ["infernal-knight", "Infernal Knight-cc"]
---
# Infernal Knight Cc
*Source: Creature Codex Page 104*

```statblock
"dice": false
"name": "Infernal Knight Cc"
"size": "Medium"
"type": "Fiend"
"ac": !!int "18"
"ac_class": "plate"
"hp": !!int "247"
"hit_dice": "26d8+130"
"stats":
- !!int "24"
- !!int "14"
- !!int "20"
- !!int "17"
- !!int "21"
- !!int "20"
"speed": "fly 60 ft. walk 30 ft."
"senses": truesight 60 ft., passive Perception 20
"skillsaves":
  "athletics": !!int "12"
  "insight": !!int "10"
  "perception": !!int "10"
"languages": "Infernal, telepathy 120 ft."
"cr": "16"
"damage_immunities": "fire, necrotic, poison"
"damage_resistances": "cold; bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered"
"traits":
- "desc": "If the infernal knight is given a quarry by its lord, the knight knows the direction and distance to its quarry as long as the two of them are on the same plane of existence."
  "name": "Faultless Tracker"
- "desc": "The infernal knight has advantage on saving throws against spells and other magical effects."
  "name": "Magic Resistance"
- "desc": "The infernal knight's weapon attacks are magical."
  "name": "Magic Weapons"
- "desc": "The infernal knight regains 10 hp at the start of its turn if it has at least 1 hp."
  "name": "Regeneration"
"actions":
- "desc": "The infernal knight makes two melee attacks or uses its Hellfire Bolt twice. It can replace one attack with Reave Soul."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 14 (2d6 + 7) slashing damage plus 17 (5d6) necrotic damage. A creature hit by the sword must succeed on a DC 18 Constitution saving throw or suffer disadvantage on attack rolls and ability checks based on Strength or Dexterity until the end of its next turn."
  "name": "Greatsword"
- "desc": "Ranged Spell Attack: +10 to hit, range 120 ft., one target. Hit: 10 (3d6) fire damage plus 17 (5d6) necrotic damage. A creature hit must succeed on a DC 18 Constitution saving throw or its hp maximum is reduced by an amount equal to the necrotic damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hp maximum to 0."
  "name": "Hellfire Bolt"
- "desc": "The infernal knight targets a creature with 0 hp that it can see within 60 feet of it. If the creature is alive, it must succeed on a DC 18 Constitution saving throw or die and have its soul drawn into the infernal knight's greatsword. If the creature is dead and has been dead for less than 1 minute, its soul is automatically captured. When the infernal knight captures a soul, it regains 30 hp, and Reave Soul recharges at the start of its next turn. While a creature's soul is trapped, that creature can't be returned to life by any means short of a wish spell.\n\nA banishment spell targeted at the greatsword forces the infernal knight to make a Charisma saving throw against the spell. On a failed save, any souls trapped in the blade are released instead of the spell's normal effect. Trapped souls are also released when the infernal knight dies."
  "name": "Reave Soul (Recharge 5-6)"
- "desc": "The infernal knight magically tears a rift in the fabric of the multiverse. The rift is a portal to a plane of the infernal knight's choice. The portal remains open for 1 hour, during which time any creature can pass through it, moving from one plane to the other. A dispel magic spell targeting the rift can destroy it if the caster succeeds on a DC 18 spellcasting ability check."
  "name": "Planar Rift (1/Day)"
source:
- [Creature Codex](https://koboldpress.com/kpstore/product/creature-codex-for-5th-edition-dnd)
```
