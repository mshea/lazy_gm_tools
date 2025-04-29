---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob3
- monster/cr/6
- monster/size/Gargantuan
- monster/type/Plant
statblock: inline
aliases: ["fungi-mulcher", "Fungi, Mulcher-tob3"]
---
# Fungi, Mulcher Tob3
*Source: Tome of Beasts 3 Page 191*

```statblock
"dice": false
"name": "Fungi, Mulcher Tob3"
"size": "Gargantuan"
"type": "Plant"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "139"
"hit_dice": "9d20+45"
"stats":
- !!int "18"
- !!int "6"
- !!int "20"
- !!int "4"
- !!int "10"
- !!int "1"
"speed": "walk 10 ft. burrow 30 ft."
"senses": blindsight 120' (blind beyond), passive Perception 13
"skillsaves":
  "perception": !!int "0"
"languages": "—"
"cr": "6"
"traits":
- "desc": "When exposed central stalk can be attacked and destroyed (AC 13; hp 50; vulnerability to acid cold and fire). If central stalk is destroyed mulcher has disadvantage on attacks and can’t use Expose Stalk until it regrows one at end of next long rest."
  "name": "Central Stalk Weakness"
- "desc": "Ground within 20' is difficult."
  "name": "Disturbed Soil (Exposed Stalk Only)"
- "desc": "If it burrows 20'+ straight toward a creature can dig 10 ft. diameter 20' deep pit beneath it. Each Large or smaller creature in pit’s area: fall into mycelium-lined pit and land prone taking 14 (4d6) piercing damage from spiked mycelium + fall damage (DC 15 Dex doesn't fall). Can make one Mycelium Spike vs. prone creature in pit as bonus action."
  "name": "Mulcher Pit"
- "desc": "Gains 15 hp at start of its turn if it has at least 1 hp."
  "name": "Stalk Regeneration (Exposed Stalk Only)"
"actions":
- "desc": "Two Mycelium Spike attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +7 to hit, 15 ft., one target, 15 (2d10+4) piercing damage and grappled (escape DC 15) if it doesn’t have 2 others grappled (DC 15 Str not grappled)."
  "name": "Mycelium Spike"
- "desc": "If underground creates 20' square cover on ground over self and lurks just below surface. Cover identical to ground. If creature enters cover’s space one Mycelium Spike vs. creature as reaction destroying cover. Target: disadvantage on save to avoid grapple."
  "name": "Excavate"
"reactions":
- "desc": "When reduced below half hp max or creature scores critical hit vs. it immediately uses Expose Stalk."
  "name": "Emergent Stalk"
"bonus_actions":
- "desc": "Exposes central stalk above ground until end of its next turn or until it ends effect as bonus action. If exposed can’t burrow."
  "name": "Expose Stalk"
- "desc": "Burrows up to 60 feet. Opportunity attacks vs. it are made with disadvantage when mulcher burrows out of an enemy’s reach this way. Creatures grappled by it are freed before it burrows."
  "name": "Rapid Burrow"
source:
- [Tome of Beasts 3](https://koboldpress.com/kpstore/product/tome-of-beasts-3-for-5th-edition/)
```
