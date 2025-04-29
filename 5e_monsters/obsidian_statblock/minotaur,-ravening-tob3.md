---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob3
- monster/cr/3
- monster/size/Large
- monster/type/Monstrosity
statblock: inline
aliases: ["minotaur-ravening", "Minotaur, Ravening-tob3"]
---
# Minotaur, Ravening Tob3
*Source: Tome of Beasts 3 Page 272*

```statblock
"dice": false
"name": "Minotaur, Ravening Tob3"
"size": "Large"
"type": "Monstrosity"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "85"
"hit_dice": "10d10+30"
"stats":
- !!int "18"
- !!int "11"
- !!int "16"
- !!int "6"
- !!int "16"
- !!int "9"
"speed": "walk 40 ft."
"senses": darkvision 60', passive Perception 17
"skillsaves":
  "perception": !!int "3"
"languages": "Giant, Minotaur"
"cr": "3"
"traits":
- "desc": "If it moves 10 ft.+ straight to foe and hits with gore attack on same turn target takes an extra 9 (2d8) piercing damage. If the target is a creature it must make DC 14 Str save or be pushed up to 10 ft. away and knocked prone."
  "name": "Charge"
- "desc": "Advantage: smell Wis (Percept) checks."
  "name": "Keen Smell"
- "desc": "Can perfectly recall any path it has traveled."
  "name": "Labyrinthine Recall"
- "desc": "When it reduces a creature to 0 hp with melee attack on its turn can take a bonus action to consume creature’s heart. Its hp max increases by 5 for every ten hearts it consumes in this way."
  "name": "Ravening Hunger"
- "desc": "Disadvantage on Int checks and saves. Considers every creature hostile and doesn’t benefit from Help action or similar spells/effects that involve help to/from friendly creatures. Doesn’t stop spellcaster from restoring hp to it or curing ravening with magic."
  "name": "Ravening Madness"
- "desc": "At the start of its turn it can choose to have advantage on all melee weapon attack rolls it makes during that turn but attack rolls vs. it have advantage until the start of its next turn."
  "name": "Reckless"
"actions":
- "desc": "One Bite and two Claw attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, 5 ft., one target, 8 (1d8+4) piercing damage and minotaur gains temp hp equal to damage. Target: DC 13 Con save or infected with ravening (below)."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +6 to hit, 5 ft., one target, 7 (1d6+4) slashing damage."
  "name": "Claw"
- "desc": "Melee Weapon Attack: +6 to hit, 5 ft., one target, 13 (2d8+4) piercing damage."
  "name": "Gore"
source:
- [Tome of Beasts 3](https://koboldpress.com/kpstore/product/tome-of-beasts-3-for-5th-edition/)
```
