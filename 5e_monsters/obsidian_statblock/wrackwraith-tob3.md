---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob3
- monster/cr/3
- monster/size/Medium
- monster/type/Undead
statblock: inline
aliases: ["wrackwraith", "Wrackwraith-tob3"]
---
# Wrackwraith Tob3
*Source: Tome of Beasts 3 Page 395*

```statblock
"dice": false
"name": "Wrackwraith Tob3"
"size": "Medium"
"type": "Undead"
"ac": !!int "13"
"ac_class": ""
"hp": !!int "45"
"hit_dice": "6d8+18"
"stats":
- !!int "14"
- !!int "16"
- !!int "16"
- !!int "10"
- !!int "12"
- !!int "11"
"speed": "walk 30 ft. fly 30 ft."
"senses": passive Perception 13
"skillsaves":
  "perception": !!int "1"
"languages": "any languages it knew in life"
"cr": "3"
"damage_immunities": "necrotic, poison"
"damage_resistances": "acid, cold, fire, lightning, thunder; nonmagic B/P/S attacks"
"traits":
- "desc": "Move through others/objects as difficult terrain. Takes 5 (1d10) force if it ends turn in object."
  "name": "Incorporeal Movement"
- "desc": "While animating a pile of wrack has AC 18 and can use Slam and Deluge actions. Also loses its immunity to grappled and restrained conditions and can’t fly. If it moves through a creature or object with Incorporeal Movement while animating wrack wrack falls off its ghostly body ending this. Otherwise can end this as bonus action. If it takes 15+ damage in single turn while animating wrack must make DC 13 Con save or be ejected from wrack ending this."
  "name": "Wrack Form"
"actions":
- "desc": "Melee Weapon Attack: +5 to hit, 5 ft., one target, 7 (1d8+3) necrotic."
  "name": "Ghostly Touch"
- "desc": "Melee Weapon Attack: +5 to hit, 5 ft., one target, 10 (2d6+3) bludgeoning damage + 4 (1d8) necrotic. If target is Large or smaller grappled (escape DC 13). Until grapple ends target restrained and wrackwraith can’t use its Slam or attack another. Target can’t breathe or speak until grapple ends."
  "name": "Slam (Wrack Form Only)"
- "desc": "Animates wrack within 5 ft. of it pulling the debris into a protective covering over its ghostly body."
  "name": "Animate Wrack"
- "desc": "Fills lungs of one creature it is grappling with seawater algae and tiny ocean debris harming creatures that breathe air or water: 14 (4d6) necrotic and chokes as lungs fill with water and debris (DC 13 Con half damage not choking). Choking creature can re-save at end of each of its turns success ends effect on itself."
  "name": "Deluge (Wrack Form Only)"
"bonus_actions":
- "desc": "Leaves current pile magically teleports to another within 60' of it and uses Animate Wrack."
  "name": "Wrack Jump (Recharge 4–6)"
source:
- [Tome of Beasts 3](https://koboldpress.com/kpstore/product/tome-of-beasts-3-for-5th-edition/)
```
