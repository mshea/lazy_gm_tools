---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/cc
- monster/cr/11
- monster/size/Medium
- monster/type/Undead
statblock: inline
aliases: ["vampiric-knight", "Vampiric Knight-cc"]
---
# Vampiric Knight Cc
*Source: Creature Codex Page 369*

```statblock
"dice": false
"name": "Vampiric Knight Cc"
"size": "Medium"
"type": "Undead"
"ac": !!int "20"
"ac_class": "plate, shield"
"hp": !!int "127"
"hit_dice": "15d8+60"
"stats":
- !!int "20"
- !!int "14"
- !!int "18"
- !!int "13"
- !!int "17"
- !!int "14"
"speed": "walk 30 ft."
"senses": darkvision 60 ft., passive Perception 17
"skillsaves":
  "athletics": !!int "9"
  "perception": !!int "7"
"languages": "the languages it knew in life"
"cr": "11"
"damage_resistances": "necrotic; bludgeoning, piercing, and slashing from nonmagical attacks"
"traits":
- "desc": "The vampiric knight regains 20 hp at the start of its turn if it has at least 1 hp and isn't in running water. If it takes radiant damage or damage from holy water, this trait doesn't function at the start of the vampiric knight's next turn."
  "name": "Regeneration"
- "desc": "The vampiric knight has the following flaws:\nForbiddance. The vampiric knight can't enter a residence without an invitation from one of the occupants.\nHarmed by Running Water. The vampiric knight takes 20 acid damage if it ends its turn in running water.\nStake to the Heart. If a piercing weapon made of wood is driven into the vampiric knight's heart while the knight is incapacitated in its resting place, the vampiric knight is paralyzed until the stake is removed."
  "name": "Vampire Weaknesses"
"actions":
- "desc": "The vampiric knight makes two impaling longsword attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 9 (1d8 + 5) slashing damage, or 10 (1d10 + 5) slashing damage if used with two hands, plus 9 (2d8) necrotic damage. The vampiric knight impales the target on its longsword, grappling the target if it is a Medium or smaller creature (escape DC 17). Until the grapple ends, the target is restrained, takes 9 (2d8) necrotic damage at the start of each of its turns, and the vampiric knight can't make longsword attacks against other targets."
  "name": "Impaling Longsword"
- "desc": "Each living creature within 20 feet of the vampiric knight must make a DC 17 Constitution saving throw, taking 42 (12d6) necrotic damage on a failed save, or half as much damage on a successful one."
  "name": "Channel Corruption (Recharge 5-6)"
"reactions":
- "desc": "When a creature makes an attack against an allied vampire, the knight can grant the vampire a +3 bonus to its AC if the knight is within 5 feet of the vampire."
  "name": "Shield"
source:
- [Creature Codex](https://koboldpress.com/kpstore/product/creature-codex-for-5th-edition-dnd)
```
