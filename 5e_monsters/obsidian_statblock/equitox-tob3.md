---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob3
- monster/cr/13
- monster/size/Large
- monster/type/Fiend
statblock: inline
aliases: ["equitox", "Equitox-tob3"]
---
# Equitox Tob3
*Source: Tome of Beasts 3 Page 171*

```statblock
"dice": false
"name": "Equitox Tob3"
"size": "Large"
"type": "Fiend"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "178"
"hit_dice": "17d10+85"
"stats":
- !!int "20"
- !!int "13"
- !!int "20"
- !!int "14"
- !!int "12"
- !!int "15"
"speed": "walk 40 ft."
"senses": darkvision 60', truesight 30', passive Perception 16
"skillsaves":
  "perception": !!int "1"
"languages": "Abyssal, Celestial, Common, Infernal"
"cr": "13"
"damage_immunities": "necrotic, poison"
"damage_resistances": "cold, fire, lightning; nonmagic B/P/S attacks"
"traits":
- "desc": "At each of its turns' start all within 30': disadvantage on next attack/ability check as moisture within it is diseased (DC 18 Con negates). If creature spends 1+ min in equitox’s aura or drinks water within aura: contract gullylung fever disease (below; DC 18 Con negates). Creatures immune to poisoned are immune to this."
  "name": "Befouling Aura"
- "desc": "Creature infected with this disease manifests symptoms 1d4 days after infection: difficulty breathing dehydration and water-themed nightmares. Until cured at end of each long rest infected creature must make DC 18 Con save or its Str score is reduced by 1d4. Reduction lasts until creature finishes long rest after disease is cured. If disease reduces creature’s Str to 0 creature dies. A creature that succeeds on two saves recovers from the disease."
  "name": "Gullylung Fever"
- "desc": "Advantage: spell/magic effect saves."
  "name": "Magic Resistance"
"actions":
- "desc": "Two Gores. If it hits one creature with both target: DC 18 Con save or contract gullylung fever disease (see above)."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +10 to hit, 5 ft., one target, 18 (2d12+5) piercing damage + 10 (3d6) necrotic."
  "name": "Gore"
- "desc": "Exhales hot dry breath in a 60' cone. Each creature in the area that isn’t a Construct or Undead: 22 (5d8) fire and 22 (5d8) necrotic (DC 18 Con half). In addition any water in the area that isn’t being worn or carried evaporates."
  "name": "Evaporation Wave (Recharge 6)"
"legendary_actions":
- "desc": "With items it has up to 60' to unoccupied space it can see."
  "name": "Teleport"
- "desc": "Locks eyes with one creature within 60' that can see it. Target: DC 18 Wis or stunned by thirst until end of its next turn."
  "name": "Withering Gaze (2)"
- "desc": "Makes one Gore attack."
  "name": "Gore (2)"
source:
- [Tome of Beasts 3](https://koboldpress.com/kpstore/product/tome-of-beasts-3-for-5th-edition/)
```
