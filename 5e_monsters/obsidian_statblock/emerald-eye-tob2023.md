---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob2023
- monster/cr/1
- monster/size/Tiny
- monster/type/Construct
statblock: inline
aliases: ["emeraldeye-tob1-2023", "Emerald Eye-tob2023"]
---
# Emerald Eye Tob2023
*Source: Tome of Beasts 2023 Page 163*

```statblock
"dice": false
"name": "Emerald Eye Tob2023"
"size": "Tiny"
"type": "Construct"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "54"
"hit_dice": "12d4 + 24"
"stats":
- !!int "3"
- !!int "15"
- !!int "14"
- !!int "18"
- !!int "12"
- !!int "16"
"speed": "walk 30 ft."
"senses": blindsight 120 ft. (blind beyond this radius), passive Perception 13
"skillsaves":
  "Arcana": !!int "6"
  "Deception": !!int "5"
  "History": !!int "6"
  "Perception": !!int "3"
  "Persuasion": !!int "5"
  "Religion": !!int "6"
"languages": "Common, Draconic, telepathy 120 ft."
"cr": "1"
"damage_immunities": "poison, psychic"
"damage_resistances": "cold, fire, piercing"
"traits":
- "desc": "The emerald eye doesn’t require air, food, drink, or sleep."
  "name": "Construct Nature"
- "desc": "The emerald eye is immune to any spell or effect that would alter its form."
  "name": "Immutable Form"
- "desc": "The emerald eye must be psychically bound to a creature to survive. It loses 5 (2d4) hp for every hour it is not bound to a creature or every hour it is more than 30 feet away from its bound creature."
  "name": "Psychically Bound"
"actions":
- "desc": "Melee or Ranged Spell Attack: +5 to hit, range 60 ft., one creature. Hit: 10 (2d6 + 3) psychic damage."
  "name": "Phrenic Burst"
- "desc": "The emerald eye chooses a creature it can see within 30 feet of it that has an Intelligence of 6 or higher. The target must succeed on a DC 13 Charisma saving throw or the eye psychically binds itself to the target. If the target succeeds on the saving throw by 5 or more, it knows the eye attempted to bind to it. Otherwise, the target is unaware of the attempt. While bound to the emerald eye, the creature has resistance to psychic damage, but it has disadvantage on saving throws against the eye’s Compulsion. The eye can be bound to only one target at a time. If it binds to another, the effect on the previous target ends."
  "name": "Bind"
- "desc": "The emerald eye magically compels one creature it can see within 30 feet of it to move. The target must succeed on a DC 13 Charisma saving throw or be charmed by the eye for 1 minute. At the start of each of the charmed target’s turns, the emerald eye chooses a direction horizontal to the eye, and the target must use as much of its movement as possible to move in that direction on its turn. The target can take its action before it moves. The target can’t be compelled to move into an obviously deadly hazard, such as a fire or pit, but it will provoke opportunity attacks to move in the designated direction. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
  "name": "Compel"
source:
- [Tome of Beasts 2023](https://koboldpress.com/kpstore/product/tome-of-beasts-1-2023-edition/)
```
