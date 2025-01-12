---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob3
- monster/cr/3
- monster/size/Large
- monster/type/Plant
statblock: inline
aliases: ["wind-witch", "Wind Witch-tob3"]
---
# Wind Witch Tob3
*Source: Tome of Beasts 3 Page 393*

```statblock
"dice": false
"name": "Wind Witch Tob3"
"size": "Large"
"type": "Plant"
"ac": !!int "13"
"ac_class": ""
"hp": !!int "66"
"hit_dice": "12d8+12"
"stats":
- !!int "6"
- !!int "16"
- !!int "12"
- !!int "6"
- !!int "11"
- !!int "8"
"speed": "walk 30 ft. fly 60 ft."
"senses": blindsight 60' (blind beyond), passive Perception 12
"skillsaves":
  "perception": !!int "0"
"languages": "understands Common but can’t speak"
"cr": "3"
"damage_resistances": "bludgeoning, piercing"
"traits":
- "desc": "If damage reduces it to 0 hp becomes inanimate tumbleweed and travels via wind. Regains 5 hp every hr regaining consciousness after the first. This doesn’t function if it took fire on same round it was reduced to 0 hp or if its body was destroyed."
  "name": "Cursed Plant"
- "desc": "When it takes fire damage catches fire taking 3 (1d6) fire at start of each of its turns. Burns until it takes cold or is immersed in water. Creature that touches wind witch or hits it with melee attack while within 5 ft. of it while it is burning takes 3 (1d6) fire. While burning deals extra 3 (1d6) fire on each melee attack and deals 7 (2d6) fire to a captured creature at start of its turn."
  "name": "Flammable"
- "desc": "Can enter hostile creature’s space and stop there."
  "name": "Tumbleweed Form"
"actions":
- "desc": "Two Slam attacks or one Slam attack and uses Capture."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +5 to hit, 5 ft., one target, 7 (1d8+ 3) bludgeoning damage and 4 (1d8) piercing damage."
  "name": "Slam"
- "desc": "Envelopes one up to Med creature in its space. Target: DC 13 Dex save or restrained inside wind witch. Restrained target can’t be hit by wind witch’s Slam but takes 5 (2d4) piercing damage if it takes action that requires movement (ex: attack or cast somatic spell). When it moves captured creature moves with it. Can have only one creature captured at a time. Creature within 5 ft. of wind witch can use action to pull restrained creature out via DC 13 Str check; creature trying: 5 (2d4) piercing damage."
  "name": "Capture"
"reactions":
- "desc": "When it takes damage from a melee attack can move up to half its fly speed. This move doesn’t provoke opportunity attacks. It releases a captured creature when it uses this."
  "name": "Bouncy Escape"
source:
- [Tome of Beasts 3](https://koboldpress.com/kpstore/product/tome-of-beasts-3-for-5th-edition/)
```
