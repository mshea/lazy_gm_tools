---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/cc
- monster/cr/3
- monster/size/Tiny
- monster/type/Plant
statblock: inline
aliases: ["gloomflower", "Gloomflower-cc"]
---
# Gloomflower Cc
*Source: Creature Codex Page 188*

```statblock
"dice": false
"name": "Gloomflower Cc"
"size": "Tiny"
"type": "Plant"
"ac": !!int "12"
"ac_class": "natural armor"
"hp": !!int "44"
"hit_dice": "8d4+24"
"stats":
- !!int "10"
- !!int "6"
- !!int "16"
- !!int "1"
- !!int "6"
- !!int "18"
"speed": "walk 10 ft."
"senses": blindsight 120 ft. passive Perception 8
"skillsaves":
"languages": "understands all languages known by creatures within 120 feet, but can't speak, telepathy 120 ft."
"cr": "3"
"traits":
- "desc": "Creatures have disadvantage on attack rolls against the gloomflower. An attacker is immune to this effect if it doesn't rely on sight, as with blindsight, or can see through illusions, as with truesight."
  "name": "Blur"
- "desc": "Whenever the gloomflower takes damage, each creature within 10 feet of the gloomflower must succeed on a DC 14 Wisdom saving throw or take 7 (2d6) psychic damage."
  "name": "Psychic Scream"
"actions":
- "desc": "The gloomflower makes two psychic strike attacks."
  "name": "Multiattack"
- "desc": "Ranged Spell Attack: +6 to hit, range 120 ft., one target. Hit: 10 (3d6) psychic damage."
  "name": "Psychic Strike"
- "desc": "Each creature of the gloomflower's choice that is within 60 feet of the gloomflower and aware of it must make a DC 14 Wisdom saving throw. On a failure, a creature is bombarded with visions of its fears and anxieties for 1 minute. While bombarded, it takes 7 (2d6) psychic damage at the start of each of its turns and must spend its action to make one melee attack against a creature within 5 feet of it, other than the gloomflower or itself. If the creature can't make a melee attack, it takes the Dodge action. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. On a success, a creature is incapacitated by hallucinations until the end of its next turn but isn't bombarded with visions of its fears and anxieties. \n\nA creature that is reduced to 0 hp by this psychic damage falls unconscious and is stable. When that creature regains consciousness, it suffers permanent hallucinations and has disadvantage on ability checks until cured by a remove curse spell or similar magic."
  "name": "Corrupting Visions (Recharge 5-6)"
source:
- [Creature Codex](https://koboldpress.com/kpstore/product/creature-codex-for-5th-edition-dnd)
```
