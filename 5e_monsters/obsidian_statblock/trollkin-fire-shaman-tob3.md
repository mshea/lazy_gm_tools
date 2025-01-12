---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob3
- monster/cr/2
- monster/size/Medium
- monster/type/Humanoid
statblock: inline
aliases: ["trollkin-fire-shaman", "Trollkin Fire Shaman-tob3"]
---
# Trollkin Fire Shaman Tob3
*Source: Tome of Beasts 3 Page 376*

```statblock
"dice": false
"name": "Trollkin Fire Shaman Tob3"
"size": "Medium"
"type": "Humanoid"
"ac": !!int "14"
"ac_class": "leather armor"
"hp": !!int "45"
"hit_dice": "7d8+14"
"stats":
- !!int "10"
- !!int "14"
- !!int "14"
- !!int "9"
- !!int "16"
- !!int "8"
"speed": "walk 30 ft."
"senses": darkvision 60', passive Perception 15
"skillsaves":
  "perception": !!int "3"
"languages": "Common, Trollkin"
"cr": "2"
"traits":
- "desc": "Gains 3 hp at the start of its turn. If the trollkin takes acid or fire this ability doesn’t function at the start of its next turn. It dies only if it starts its turn with 0 hp and doesn’t regenerate."
  "name": "Regeneration"
- "desc": "Its skin is thick and tough granting it a +1 bonus to Armor Class (already factored into its AC)."
  "name": "Thick Skin"
"actions":
- "desc": "Uses Mark Foe. Then two Hurl Flame attacks or three Staff attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +2 to hit, 5 ft., one target, 3 (1d6) bludgeoning damage or 4 (1d8) bludgeoning damage if used with 2 hands."
  "name": "Staff"
- "desc": "Ranged Spell Attack: +5 to hit, 120 ft., one target, 8 (2d4+3) fire."
  "name": "Hurl Flame"
- "desc": "One creature shaman can see within 60' must make DC 13 Wis save or be wreathed in magical fire for 1 min. While wreathed it can’t take the Hide action or become invisible. The next time creature takes damage it takes an extra 7 (2d6) fire and the magical fire ends."
  "name": "Mark Foe"
"reactions":
- "desc": "When shaman takes damage each creature within 5 ft. of it: DC 13 Dex save or take 7 (2d6) fire. Shaman is then wreathed in flames and teleports up to 30' to unoccupied space it can see."
  "name": "Fiery Escape (2/Day)"
source:
- [Tome of Beasts 3](https://koboldpress.com/kpstore/product/tome-of-beasts-3-for-5th-edition/)
```
