---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob3
- monster/cr/7
- monster/size/Large
- monster/type/Giant
statblock: inline
aliases: ["troll-rattleback", "Troll, Rattleback-tob3"]
---
# Troll, Rattleback Tob3
*Source: Tome of Beasts 3 Page 374*

```statblock
"dice": false
"name": "Troll, Rattleback Tob3"
"size": "Large"
"type": "Giant"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "126"
"hit_dice": "12d10+60"
"stats":
- !!int "20"
- !!int "18"
- !!int "20"
- !!int "7"
- !!int "12"
- !!int "7"
"speed": "walk 30 ft. climb 30 ft."
"senses": darkvision 60', passive Perception 14
"skillsaves":
  "perception": !!int "1"
"languages": "Common, Giant"
"cr": "7"
"damage_immunities": "poison"
"traits":
- "desc": "Its shell plates rattle constantly creating a droning distracting noise. When a creature casts a spell with verbal component while within 30' of the troll that creature must make DC 15 Con save or lose the spell."
  "name": "Distracting Rattle"
- "desc": "While in dim light or darkness has advantage on Wis (Perception) checks that rely on sight."
  "name": "Night Hunters"
- "desc": "Regains 10 hp at the start of its turn. If it takes fire this trait doesn’t function at start of its next turn. It dies only if it starts its turn with 0 hp and doesn’t regenerate."
  "name": "Regeneration"
"actions":
- "desc": "One Bite attack and two Claw attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +8 to hit, 5 ft., one target, 14 (2d8+5) piercing damage + 7 (2d6) poison. Target: DC 15 Con save or poisoned 1 min. While poisoned this way target can’t regain hp. Target can re-save at end of each of its turns success ends effect on itself."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +8 to hit, 5 ft., one target, 12 (2d6+5) slashing damage."
  "name": "Claw"
- "desc": "Sprays its venom in a 30' cone. Each creature in that area: 28 (8d6) poison and is poisoned for 1 min (DC 15 Con half damage and isn’t poisoned). While poisoned in this way a creature can’t regain hp. A poisoned creature can re-save at end of each of its turns success ends effect on itself."
  "name": "Venom Spray (Recharge 5–6)"
source:
- [Tome of Beasts 3](https://koboldpress.com/kpstore/product/tome-of-beasts-3-for-5th-edition/)
```
