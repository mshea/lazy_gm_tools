---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob3
- monster/cr/4
- monster/size/Medium
- monster/type/Fey
statblock: inline
aliases: ["hag-pesta", "Hag, Pesta-tob3"]
---
# Hag, Pesta Tob3
*Source: Tome of Beasts 3 Page 227*

```statblock
"dice": false
"name": "Hag, Pesta Tob3"
"size": "Medium"
"type": "Fey"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "105"
"hit_dice": "14d8+42"
"stats":
- !!int "16"
- !!int "14"
- !!int "16"
- !!int "13"
- !!int "17"
- !!int "15"
"speed": "walk 30 ft."
"saves":
  "Strength": !!int "5"
  "Wisdom": !!int "5"
"senses": darkvision 60', passive Perception 15
"skillsaves":
  "perception": !!int "3"
"languages": "Common, Giant, Sylvan"
"cr": "4"
"damage_resistances": "necrotic, poison"
"traits":
- "desc": "Can pinpoint location of poisoned creatures or creatures suffering from a disease within 60' of her and can sense general direction of such creatures within 1 mile of her."
  "name": "Disease Sense"
- "desc": "At start of each of hag’s turns each creature within 10 ft. of her takes 4 (1d8) poison. If a creature remains within aura for more than 1 min it contracts disease of hag’s choice (DC 13 Con negates disease). Disease’s save DC is 13 regardless of type."
  "name": "Pestilence Aura"
- "desc": "The pesta hag is immune to diseases."
  "name": "Plague Carrier"
"actions":
- "desc": "Two Pestilence Rake or Poison Bolt attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +5 to hit, 5 ft., one target, 7 (1d8+3) piercing damage + 5 (2d4) necrotic. Target: DC 13 Con save or its hp max is reduced by amount equal to necrotic taken and it contracts sewer plague sight rot or other disease of hag’s choice. Disease’s save DC 13 regardless of type."
  "name": "Pestilence Rake"
- "desc": "Ranged Spell Attack: +5 to hit, 120 ft., one target, 12 (2d8+3) poison."
  "name": "Poison Bolt"
- "desc": "Touched target magically regains 10 (2d8+1) hp and freed from any disease or poison afflicting it."
  "name": "Curative Touch (3/Day)"
- "desc": "Magically calls 1d3 rat swarms. Arrive in 1d4 rounds act as hag allies and obey her spoken commands. Swarms carry a terrible disease. If creature takes damage from swarm’s Bites: DC 10 Con save or contract the disease. Until disease is cured creature can’t regain hp except by magically and target’s hp max decreases by 3 (1d6) every 24 hrs. If creature’s hp max drops to 0 as a result of this disease it dies. Rats remain 1 hr until hag dies or hag dismisses them as bonus action."
  "name": "Summon Plague Rats (1/Day)"
source:
- [Tome of Beasts 3](https://koboldpress.com/kpstore/product/tome-of-beasts-3-for-5th-edition/)
```
