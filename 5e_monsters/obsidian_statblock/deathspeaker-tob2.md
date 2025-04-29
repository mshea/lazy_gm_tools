---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob2
- monster/cr/4
- monster/size/Medium
- monster/type/Undead
statblock: inline
aliases: ["deathspeaker", "Deathspeaker-tob2"]
---
# Deathspeaker Tob2
*Source: Tome of Beasts 2 Page 82*

```statblock
"dice": false
"name": "Deathspeaker Tob2"
"size": "Medium"
"type": "Undead"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "97"
"hit_dice": "13d8+39"
"stats":
- !!int "12"
- !!int "16"
- !!int "17"
- !!int "18"
- !!int "12"
- !!int "15"
"speed": "walk 30 ft."
"senses": darkvision 60 ft., passive Perception 11
"skillsaves":
  "deception": !!int "8"
  "persuasion": !!int "8"
"languages": "any languages it knew in life"
"cr": "4"
"damage_immunities": "poison"
"traits":
- "desc": "If the deathspeaker engages at least one creature in conversation for at least 1 minute, it can perform a prophetic display, reading cards, throwing bones, speaking to a crystal ball, or similar. Each creature that can see or hear the prophetic display must succeed on a DC 15 Intelligence saving throw or be cursed with the belief it will soon die. While cursed, the creature has disadvantage on attack rolls and ability checks. The curse lasts until it is lifted by a remove curse spell or similar magic, or until the deathspeaker dies. The deathspeaker can use this trait only on creatures that share at least one language with it."
  "name": "Deathspeak"
"actions":
- "desc": "The deathspeaker makes two rake attacks. Alternatively, it can use Necrotic Ray twice."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 12 (2d8 + 3) slashing damage."
  "name": "Rake"
- "desc": "Ranged Spell Attack: +7 to hit, range 60 ft., one target. Hit: 10 (3d6) necrotic damage."
  "name": "Necrotic Ray"
- "desc": "The deathspeaker chooses a creature it can see within 30 feet of it that has been reduced to 0 hp. The target must succeed on a DC 13 Constitution saving throw or immediately die. Creatures cursed by the Deathspeak trait have disadvantage on this saving throw."
  "name": "Pronounce Death"
source:
- [Tome of Beasts 2](https://koboldpress.com/kpstore/product/tome-of-beasts-2-for-5th-edition)
```
