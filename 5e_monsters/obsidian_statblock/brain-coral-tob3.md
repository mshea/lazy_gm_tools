---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob3
- monster/cr/5
- monster/size/Huge
- monster/type/Aberration
statblock: inline
aliases: ["brain-coral", "Brain Coral-tob3"]
---
# Brain Coral Tob3
*Source: Tome of Beasts 3 Page 67*

```statblock
"dice": false
"name": "Brain Coral Tob3"
"size": "Huge"
"type": "Aberration"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "119"
"hit_dice": "14d12+28"
"stats":
- !!int "16"
- !!int "6"
- !!int "14"
- !!int "18"
- !!int "14"
- !!int "10"
"speed": "walk 0 ft. swim 120 ft."
"senses": blindsight 120' (blind beyond), passive Perception 15 
"skillsaves":
  "perception": !!int "2"
"languages": "Common, Deep Speech, telepathy 120'"
"cr": "5"
"damage_immunities": "psychic"
"traits":
- "desc": "Consists of Huge central spire and 3 Small clusters. Each cluster acts on coral’s turn and shares its move allowing spire and clusters to swim total of 120' on coral’s turn. Cluster can’t move more than 120' from spire. Cluster over 120' away from spire for over 24 hrs enters dormant state becoming new brain coral after 30 days. Brain coral and its clusters share hp and damage dealt to cluster or spire reduces shared total. If more than one section of coral is included in damaging spell or effect (ex: Dragon’s breath weapon or lightning bolt spell) coral makes one save and takes damage as if only one section was affected. When coral takes 15+ damage in one turn cluster is destroyed. At end of its turn if coral took damage on previous turn it can expel one new cluster from spire per 15 damage it took. Can’t have more than 5 clusters active at a time."
  "name": "Colony Cluster"
- "desc": "Can breathe only underwater."
  "name": "Water Breathing"
"actions":
- "desc": "One Pseudopod from spire and one additional Pseudopod per cluster it has. Additional Pseudopods can originate from central spire or any cluster provided target is within reach of attack’s origin."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, 5 ft., one target, 7 (1d8+3) bludgeoning damage."
  "name": "Pseudopod"
- "desc": "Expels poison cloud. Each creature within 15 ft. of central spire: 21 (6d6) poison and is incapacitated until end of its next turn (DC 15 Int half damage not incapacitated)."
  "name": "Reef Poison Spray (Recharge 5–6)"
- "desc": "Magically calls 2d4 giant crabs 2 giant sea horses or reef sharks or 1 swarm of quippers provided coral is underwater. The called creatures arrive in 1d4 rounds acting as allies of coral and obeying its telepathic commands. Beasts remain 1 hr until coral dies or until coral dismisses them as a bonus action."
  "name": "Beasts of the Sea (1/Day)"
source:
- [Tome of Beasts 3](https://koboldpress.com/kpstore/product/tome-of-beasts-3-for-5th-edition/)
```
