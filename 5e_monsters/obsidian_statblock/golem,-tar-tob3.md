---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob3
- monster/cr/7
- monster/size/Medium
- monster/type/Construct
statblock: inline
aliases: ["golem-tar", "Golem, Tar-tob3"]
---
# Golem, Tar Tob3
*Source: Tome of Beasts 3 Page 218*

```statblock
"dice": false
"name": "Golem, Tar Tob3"
"size": "Medium"
"type": "Construct"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "119"
"hit_dice": "14d8+56"
"stats":
- !!int "18"
- !!int "9"
- !!int "18"
- !!int "7"
- !!int "10"
- !!int "5"
"speed": "walk 30 ft. climb 30 ft."
"senses": darkvision 60', passive Perception 10 
"skillsaves":
  "perception": !!int "0"
"languages": "understands the languages of its creator but can’t speak"
"cr": "7"
"damage_immunities": "fire, poison, psychic; nonmagic bludgeoning, piercing, and slashing attacks not made with adamantine weapons"
"traits":
- "desc": "Doesn’t require air food drink or sleep."
  "name": "Construct Nature"
- "desc": "When it takes fire it bursts into flame. Golem continues burning until it takes cold is immersed in water or uses Quench. A creature that touches burning golem or hits it with melee attack while within 5 ft. of it: 5 (1d10) fire. While burning golem’s weapon attacks deal extra 5 (1d10) fire on a hit."
  "name": "Fire Hazard"
- "desc": "If it takes cold in the same round it is reduced to 0 hp it is paralyzed for 1 min remaining alive. If it takes fire while paralyzed it regains a number of hp equal to the fire dealt. Otherwise it dies when the condition ends."
  "name": "Hardened Tar"
- "desc": "Immune: form-altering spells/effects."
  "name": "Immutable Form"
- "desc": "Advantage: spell/magic effect saves."
  "name": "Magic Resistance"
- "desc": "Weapon attacks are magical."
  "name": "Magic Weapons"
- "desc": "While burning gives off poisonous fumes. A creature that starts its turn within 5 ft. of burning golem: poisoned as it remains within 5 ft. of golem and for 1 round after it leaves the area (DC 13 Con negates)."
  "name": "Noxious Smoke (Burning Only)"
- "desc": "Difficult surfaces even ceilings no ability check."
  "name": "Spider Climb"
"actions":
- "desc": "Three Slam attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +7 to hit, 5 ft., one target, 13 (2d8+4) bludgeoning damage."
  "name": "Slam"
"bonus_actions":
- "desc": "Puts out fire on it deactivating Fire Hazard."
  "name": "Quench (Burning Only)"
- "desc": "Extinguishes up to 10 ft. cube of nonmagical fire within 5 ft. of it drawing fire into itself and activating its Fire Hazard."
  "name": "Draw Flames"
source:
- [Tome of Beasts 3](https://koboldpress.com/kpstore/product/tome-of-beasts-3-for-5th-edition/)
```
