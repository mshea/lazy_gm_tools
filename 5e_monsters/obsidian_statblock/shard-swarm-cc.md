---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/cc
- monster/cr/0.5
- monster/size/Medium
- monster/type/Construct
statblock: inline
aliases: ["shard-swarm", "Shard Swarm-cc"]
---
# Shard Swarm Cc
*Source: Creature Codex Page 329*

```statblock
"dice": false
"name": "Shard Swarm Cc"
"size": "Medium"
"type": "Construct"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "22"
"hit_dice": "5d8"
"stats":
- !!int "3"
- !!int "13"
- !!int "11"
- !!int "1"
- !!int "5"
- !!int "1"
"speed": "fly 30 ft. walk 0 ft."
"senses": blindsight 60 ft. (blind beyond this radius), passive Perception 7
"skillsaves":
"languages": "-"
"cr": "1/2"
"damage_immunities": "poison, psychic"
"damage_resistances": "bludgeoning, piercing, slashing"
"traits":
- "desc": "The swarm is incapacitated while in the area of an antimagic field. If targeted by the dispel magic spell, the swarm must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute."
  "name": "Antimagic Susceptibility"
- "desc": "If the shard swarm has at least 1 hit point and all of its pieces are within 30 feet of each other, the pieces can re-form as a bonus action in any space containing at least one of its pieces."
  "name": "Come Together (3/Day)"
- "desc": "While the swarm remains motionless and isn't flying, it is indistinguishable from a normal pile of junk."
  "name": "False Appearance"
- "desc": "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a pebble. The swarm can't regain hp or gain temporary hp."
  "name": "Swarm"
"actions":
- "desc": "Melee Weapon Attack: +3 to hit, reach 0 ft., one creature in the swarm's space. Hit: 5 (2d4) slashing damage or 2 (1d4) slashing damage if the swarm has half of its hp or less."
  "name": "Shards"
- "desc": "Ranged Weapon Attack: +3 to hit, range 30 ft., one target. Hit: 3 (1d6) piercing damage. A piece of the swarm breaks off, falling into the target's space."
  "name": "Shrapnel"
- "desc": "The shard swarm envelopes one Medium or smaller creature in its space. The target must succeed on a DC 13 Dexterity saving throw or be restrained inside the swarm for 1 minute. The target has disadvantage on this saving throw if the shard swarm used Come Together to form in the target's space. While restrained, the target doesn't take damage from the swarm's Shards action, but it takes 5 (2d4) slashing damage if it takes an action that requires movement, such as attacking or casting a spell with somatic components. A creature within 5 feet of the swarm can take an action to pull a restrained creature out of the swarm. Doing so requires a successful DC 13 Strength check, and the creature making the attempt takes 5 (2d4) slashing damage."
  "name": "Contain (Recharge 5-6)"
source:
- [Creature Codex](https://koboldpress.com/kpstore/product/creature-codex-for-5th-edition-dnd)
```
