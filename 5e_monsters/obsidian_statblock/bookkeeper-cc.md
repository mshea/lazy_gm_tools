---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/cc
- monster/cr/0.125
- monster/size/Tiny
- monster/type/Construct
statblock: inline
aliases: ["bookkeeper", "Bookkeeper-cc"]
---
# Bookkeeper Cc
*Source: Creature Codex Page 55*

```statblock
"dice": false
"name": "Bookkeeper Cc"
"size": "Tiny"
"type": "Construct"
"ac": !!int "12"
"ac_class": "None"
"hp": !!int "5"
"hit_dice": "2d4"
"stats":
- !!int "8"
- !!int "14"
- !!int "10"
- !!int "6"
- !!int "8"
- !!int "3"
"speed": "fly 30 ft. walk 20 ft."
"senses": blindsight 60 ft. (blind beyond this radius), passive Perception 11
"skillsaves":
  "perception": !!int "1"
  "stealth": !!int "4"
"languages": "understands the languages of its creator but can't speak"
"cr": "1/8"
"damage_immunities": "either cold or fire (designated at the time of the bookkeeper's creation), poison, psychic"
"damage_resistances": "bludgeoning, piercing, and slashing from nonmagical attacks"
"traits":
- "desc": "As a bonus action while within 30 feet of its book, the bookkeeper can hop inside its book. While inside its book, the bookkeeper has a flying speed of 30 feet and is indistinguishable from ink on a page."
  "name": "Between the Lines"
- "desc": "A bookkeeper makes all attacks, saving throws, and skill checks with advantage when its creator is within 60 feet of its book. The bookkeeper's hp maximum is reduced by 1 for every minute it is further than 60 feet from its book. When its hp maximum reaches 0, it dies. If its creator dies, the bookkeeper can be convinced to pass ownership of the book to a new creature if the creature succeeds on a DC 13 Charisma check. The new owner becomes the bookkeeper's new “creator” and inherits the bookkeeper along with the book."
  "name": "Book Bound"
- "desc": "When the bookkeeper dies, the book it is bound to is also destroyed."
  "name": "Disintegrate"
"actions":
- "desc": "Ranged Weapon Attack: +4 to hit, range 20 ft., one target. Hit: 3 (1d6) poison damage and the target must succeed on a DC 13 Dexterity saving throw or be blinded until the end of its next turn."
  "name": "Ink Splash"
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 1 piercing damage plus 1 poison damage."
  "name": "Bite"
- "desc": "While inside its book, the bookkeeper magically turns its book invisible until it attacks, or until its concentration ends (as if concentrating on a spell). The bookkeeper is also invisible while inside the invisible book"
  "name": "Elusive Pages"
source:
- [Creature Codex](https://koboldpress.com/kpstore/product/creature-codex-for-5th-edition-dnd)
```
