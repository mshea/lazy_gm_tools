---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob3
- monster/cr/10
- monster/size/Medium
- monster/type/Undead
statblock: inline
aliases: ["ghost-knight-templar", "Ghost Knight Templar-tob3"]
---
# Ghost Knight Templar Tob3
*Source: Tome of Beasts 3 Page 196*

```statblock
"dice": false
"name": "Ghost Knight Templar Tob3"
"size": "Medium"
"type": "Undead"
"ac": !!int "18"
"ac_class": "plate"
"hp": !!int "127"
"hit_dice": "17d8+51"
"stats":
- !!int "20"
- !!int "19"
- !!int "16"
- !!int "13"
- !!int "16"
- !!int "15"
"speed": "walk 30 ft."
"senses": darkvision 60', passive Perception 17
"skillsaves":
  "perception": !!int "3"
"languages": "Common"
"cr": "10"
"damage_immunities": "poison"
"damage_resistances": "cold, necrotic; nonmagic B/P/S attacks"
"traits":
- "desc": "If mounted and it moves 20'+ straight to foe and hits with shadow blade on same turn target takes an extra 10 (3d6) slashing damage."
  "name": "Charge"
- "desc": "Move through others/objects as difficult terrain. Takes 5 (1d10) force if it ends turn in object."
  "name": "Incorporeal Movement"
- "desc": "It and all ghouls within 30' of it: advantage on saves vs. turn undead."
  "name": "Turning Defiance"
- "desc": "Doesn't require air food drink or sleep."
  "name": "Undead Nature"
"actions":
- "desc": "Three Shadow Blade attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +9 to hit, 5 ft., one target, 9 (1d8+5) slashing damage + 10 (3d6) necrotic."
  "name": "Shadow Blade"
- "desc": "Moves up to its speed through its enemies. This move doesn’t provoke opportunity attacks. Each creature through which templar passes: 35 (10d6) cold (DC 16 Dex half damage). It can’t use this while mounted."
  "name": "Stride of Damnation (Recharge 5–6)"
"bonus_actions":
- "desc": "Can summon or dismiss a ghostly mount mounting or dismounting it as part of this bonus action with o spending movement. Mount uses the stats of a warhorse skeleton except it has the Incorporeal Movement trait a flying speed of 60 feet 40 hp and resistance to cold and necrotic and B/P/S damage from nonmagical attacks. If mount is slain it disappears leaving behind no physical form and templar must wait 1 hr before summoning it again."
  "name": "Ghostly Mount"
source:
- [Tome of Beasts 3](https://koboldpress.com/kpstore/product/tome-of-beasts-3-for-5th-edition/)
```
