---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob3
- monster/cr/3
- monster/size/Large
- monster/type/Aberration
statblock: inline
aliases: ["leashed-lesion", "Leashed Lesion-tob3"]
---
# Leashed Lesion Tob3
*Source: Tome of Beasts 3 Page 259*

```statblock
"dice": false
"name": "Leashed Lesion Tob3"
"size": "Large"
"type": "Aberration"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "65"
"hit_dice": "10d10+10"
"stats":
- !!int "15"
- !!int "11"
- !!int "12"
- !!int "6"
- !!int "9"
- !!int "14"
"speed": "walk 40 ft."
"senses": blindsight 120', passive Perception 9
"skillsaves":
  "perception": !!int "-1"
"languages": "understands Void Speech but can’t speak"
"cr": "3"
"damage_resistances": "necrotic"
"actions":
- "desc": "One Bite attack and two Claw attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +4 to hit, 5 ft., one creature,. 6 (1d8+2) piercing damage + 5 (2d4) necrotic. The lesion and any creature grappled by its Life Tether regain hp equal to the necrotic dealt."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +4 to hit, 5 ft., one target, 5 (1d6+2) slashing damage."
  "name": "Claw"
- "desc": "Selects a point it can see within 120' of it. Each creature within 20' of that point must make a DC 12 Con save taking 13 (3d8) necrotic on a failed save or half damage if made. The lesion and any creature grappled by its Life Tether each gain 13 (3d8) temp hp."
  "name": "Draining Burst (Recharge 5–6)"
"bonus_actions":
- "desc": "Attaches a symbiotic tether to a creature sitting in the recess in its back. A creature in the recess that isn’t attached to the tether takes 7 (2d6) piercing damage at the end of the lesion’s turn and the lesion regains hp equal to the damage dealt. While the tether is attached the creature is grappled by the lesion. The lesion or the creature can detach the tether as a bonus action. Lesion can have its symbiotic tether attached to only one creature at a time."
  "name": "Life Tether"
source:
- [Tome of Beasts 3](https://koboldpress.com/kpstore/product/tome-of-beasts-3-for-5th-edition/)
```
