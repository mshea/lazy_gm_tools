---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob2
- monster/cr/5
- monster/size/Huge
- monster/type/Undead
statblock: inline
aliases: ["willowhaunt", "Willowhaunt-tob2"]
---
# Willowhaunt Tob2
*Source: Tome of Beasts 2 Page 369*

```statblock
"dice": false
"name": "Willowhaunt Tob2"
"size": "Huge"
"type": "Undead"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "90"
"hit_dice": "12d12+12"
"stats":
- !!int "17"
- !!int "10"
- !!int "12"
- !!int "9"
- !!int "14"
- !!int "19"
"speed": "walk 20 ft."
"saves":
  "Strength": !!int "6"
  "Charisma": !!int "7"
"senses": darkvision 60 ft., passive Perception 12
"skillsaves":
  "insight": !!int "5"
  "intimidation": !!int "7"
"languages": "understands Common but can’t speak, telepathy 60 ft."
"cr": "5"
"damage_immunities": "necrotic, poison"
"damage_resistances": "lightning; bludgeoning, piercing, and slashing from nonmagical attacks"
"traits":
- "desc": "The willowhaunt’s skeletal form is covered with a magical illusion that makes it look like a living willow tree. The willowhaunt can use a bonus action to dismiss this illusion until the end of its next turn.\n\nThe changes wrought by this illusion fail to hold up to physical inspection. For example, the willowhaunt’s trunk appears to be made of bark, but someone touching it would feel the tree’s polished bones. Otherwise, a creature must take an action to visually inspect the illusion and succeed on a DC 20 Intelligence (Investigation) check to discern the willowhaunt’s true appearance."
  "name": "Living Projection"
"actions":
- "desc": "The willowhaunt makes two slam attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one creature. Hit: 9 (1d12 + 3) bludgeoning damage plus 7 (2d6) necrotic damage."
  "name": "Slam"
- "desc": "The willowhaunt chooses up to two creatures it can see within 30 feet of it. Each target must succeed on a DC 15 Wisdom saving throw or be overcome with murderous intent for 1 minute. While overcome with murderous intent, a creature has advantage on melee attack rolls and is compelled to kill creatures within 30 feet of the willowhaunt. The creature is unable to distinguish friend from foe and must attack the nearest creature other than the willowhaunt each turn. If no other creature is near enough to move to and attack, it stalks off in a random direction, seeking a new target to drag within 30 feet of the willowhaunt. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
  "name": "Provoke Murder"
- "desc": "The willowhaunt whispers in the minds of nearby creatures. Each creature of the willowhaunt’s choice within 30 feet of it must make a DC 15 Wisdom saving throw. On a failure, a creature takes 18 (4d8) psychic damage and is afflicted with short term madness. On a success, a creature takes half the damage and isn’t afflicted with madness. If a saving throw fails by 5 or more, the creature is afflicted with long term madness instead. A creature afflicted with madness caused by the willowhaunt’s whispers has disadvantage on its saving throw against the Willowhaunt’s Provoke Murder."
  "name": "Whispers of Madness (Recharge 5-6)"
source:
- [Tome of Beasts 2](https://koboldpress.com/kpstore/product/tome-of-beasts-2-for-5th-edition)
```
