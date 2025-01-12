---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob3
- monster/cr/5
- monster/size/Medium
- monster/type/Construct
statblock: inline
aliases: ["faux-garou", "Faux-Garou-tob3"]
---
# Faux Garou Tob3
*Source: Tome of Beasts 3 Page 174*

```statblock
"dice": false
"name": "Faux Garou Tob3"
"size": "Medium"
"type": "Construct"
"ac": !!int "12"
"ac_class": "natural armor"
"hp": !!int "93"
"hit_dice": "11d8+44"
"stats":
- !!int "17"
- !!int "11"
- !!int "18"
- !!int "4"
- !!int "12"
- !!int "5"
"speed": "walk 30 ft."
"senses": darkvision 60', passive Perception 14
"skillsaves":
  "perception": !!int "1"
"languages": "understands creator's languages but can't speak"
"cr": "5"
"traits":
- "desc": "Doesn’t require air food drink or sleep."
  "name": "Construct Nature"
- "desc": "Knows scent and appearance of each creature it was created to kill. Advantage on attacks vs. such creatures and on Wis (Perception) and Wis (Survival) checks to find and track them."
  "name": "Druidic Vengeance"
- "desc": "Immune: form-altering spells/effects."
  "name": "Immutable Form"
- "desc": "Advantage: spell/magic effect saves."
  "name": "Magic Resistance"
- "desc": "Weapon attacks are magical. When it hits with any weapon deals extra 3d6 necrotic (included below)."
  "name": "Necrotic Weapons"
"actions":
- "desc": "Uses Frightening Gaze then two Claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, 5 ft., one target, 7 (1d8+3) slashing damage + 10 (3d6) necrotic."
  "name": "Claw"
- "desc": "Fixes its gaze on one creature it can see within 60' of it. Target frightened 1 min (DC 15 Wis negates). Creature can re-save at end of each of its turns success ends effect on itself. If save succeeds or effect ends for it creature immune to faux-garou’s Frightening Gaze for the next 24 hrs."
  "name": "Frightening Gaze"
"bonus_actions":
- "desc": "Transforms into Large or smaller Beast matching type of lycanthrope it resembles (wolf if it resembles a werewolf etc.) or back into its true form. Its stats other than size and speed are same in each form. While transformed retains constructed appearance and claws at end of its forelimbs. Items worn or carried not transformed. Reverts to true form if it dies."
  "name": "Change Shape"
source:
- [Tome of Beasts 3](https://koboldpress.com/kpstore/product/tome-of-beasts-3-for-5th-edition/)
```
