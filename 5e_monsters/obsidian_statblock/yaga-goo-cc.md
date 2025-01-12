---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/cc
- monster/cr/5
- monster/size/Small
- monster/type/Ooze
statblock: inline
aliases: ["yaga-goo", "Yaga Goo-cc"]
---
# Yaga Goo Cc
*Source: Creature Codex Page 389*

```statblock
"dice": false
"name": "Yaga Goo Cc"
"size": "Small"
"type": "Ooze"
"ac": !!int "14"
"ac_class": "None"
"hp": !!int "85"
"hit_dice": "10d6+50"
"stats":
- !!int "11"
- !!int "18"
- !!int "20"
- !!int "14"
- !!int "12"
- !!int "11"
"speed": "climb 20 ft. walk 20 ft."
"senses": blindsight 60 ft. (blind beyond this radius), passive Perception 11
"skillsaves":
  "stealth": !!int "10"
"languages": "understands Common but can't speak"
"cr": "5"
"damage_immunities": "necrotic"
"traits":
- "desc": "The goo can move through a space as narrow as 1 inch wide without squeezing."
  "name": "Amorphous"
- "desc": "The goo has advantage on attack rolls against fey and any creature with the Fey Ancestry trait."
  "name": "Deadly to Fey"
- "desc": "The goo can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
  "name": "Spider Climb"
"actions":
- "desc": "The Yaga goo makes two pseudopod attacks. When its Foul Transit is available, it can use Foul Transit in place of one pseudopod attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage plus 3 (1d6) necrotic damage."
  "name": "Pseudopod"
- "desc": "The goo teleports to an unoccupied space it can see within 50 feet, leaving behind a wretched puddle in the space it previously occupied. A creature within 5 feet of the space the goo left must succeed on a DC 16 Constitution saving throw or take 10 (3d6) necrotic damage and become poisoned until the end of its next turn. The first time a creature enters the puddle's space or if a creature starts its turn in the puddle's space it takes 10 (3d6) necrotic damage and is poisoned. The puddle lasts for 1 minute or until the goo that created it is killed."
  "name": "Foul Transit (Recharge 4-6)"
"reactions":
- "desc": "When a creature the Yaga goo can see targets it with a melee attack while within 5 feet of the goo, the goo can teleport to a puddle created by its Foul Transit, if that puddle's space is unoccupied, negating the damage from the attack. If it does, the attacker must succeed on a DC 16 Constitution saving throw or take 10 (3d6) necrotic damage and become poisoned until the end of its next turn."
  "name": "Puddle Splash"
source:
- [Creature Codex](https://koboldpress.com/kpstore/product/creature-codex-for-5th-edition-dnd)
```
