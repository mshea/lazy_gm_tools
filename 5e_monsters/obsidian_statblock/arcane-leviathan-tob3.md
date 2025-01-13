---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob3
- monster/cr/16
- monster/size/Gargantuan
- monster/type/Construct
statblock: inline
aliases: ["arcane-leviathan", "Arcane Leviathan-tob3"]
---
# Arcane Leviathan Tob3
*Source: Tome of Beasts 3 Page 40*

```statblock
"dice": false
"name": "Arcane Leviathan Tob3"
"size": "Gargantuan"
"type": "Construct"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "279"
"hit_dice": "18d20+90"
"stats":
- !!int "26"
- !!int "5"
- !!int "21"
- !!int "5"
- !!int "17"
- !!int "8"
"speed": "walk 10 ft. swim 60 ft."
"saves":
  "Strength": !!int "1"
  "Constitution": !!int "1"
  "Intelligence": !!int "2"
  "Wisdom": !!int "8"
  "Charisma": !!int "4"
"senses": truesight 120', passive Perception 13
"skillsaves":
  "perception": !!int "3"
"languages": "understands creator's languages but can’t speak"
"cr": "16"
"damage_immunities": "lightning, poison, psychic"
"damage_resistances": "acid, thunder; nonmagic B/P/S attacks"
"traits":
- "desc": "Doesn’t require air food drink or sleep."
  "name": "Construct Nature"
- "desc": "If subjected to an effect that allows it to make a save to take only half damage it instead takes no damage if it succeeds on the save and only half damage if it fails."
  "name": "Impregnable"
- "desc": "Double damage to objects/structures."
  "name": "Siege Monster"
"actions":
- "desc": "One Slam and two Claws or four Lightning Bolts."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +13 to hit, 15 ft., one target, 26 (4d8+8) slashing damage. If target is Huge or smaller it is grappled (escape DC 19). Leviathan has two claws each of which can grapple only one target."
  "name": "Claw"
- "desc": "Melee Weapon Attack: +13 to hit, 5 ft., one target, 18 (4d4+8) bludgeoning damage and target: DC 19 Str save or be knocked prone."
  "name": "Slam"
- "desc": "Ranged Spell Attack: +8 to hit 150/600' one target 17 (4d6+3) lightning."
  "name": "Lightning Bolt"
- "desc": "Discharges energy surge at a point it can see within 200' of it. Each creature within 30' of that point: 45 (10d8) lightning and is blinded until the end of its next turn (DC 19 Dex half damage not blinded)."
  "name": "Pylon Discharge (Recharge 5–6)"
"bonus_actions":
- "desc": "Sends arcane energy toward a creature it can see within 120' of it. Target begins to glow with arcane energy and at end of target’s next turn: 35 (10d6) radiant (DC 19 Con half). Damage is divided evenly between target and all creatures within 10 ft. of it except leviathan."
  "name": "Arcane Barrage"
source:
- [Tome of Beasts 3](https://koboldpress.com/kpstore/product/tome-of-beasts-3-for-5th-edition/)
```
