---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob2
- monster/cr/4
- monster/size/Medium
- monster/type/Undead
statblock: inline
aliases: ["ortifex", "Ortifex-tob2"]
---
# Ortifex Tob2
*Source: Tome of Beasts 2 Page 287*

```statblock
"dice": false
"name": "Ortifex Tob2"
"size": "Medium"
"type": "Undead"
"ac": !!int "12"
"ac_class": "natural armor"
"hp": !!int "78"
"hit_dice": "12d8+24"
"stats":
- !!int "17"
- !!int "10"
- !!int "15"
- !!int "8"
- !!int "13"
- !!int "12"
"speed": "fly 30 ft. walk 0 ft. hover True ft."
"senses": blindsight 60 ft. (blind beyond this radius), passive Perception 11
"skillsaves":
"languages": "understands the languages of its creator but can’t speak"
"cr": "4"
"damage_immunities": "poison"
"traits":
- "desc": "A creature that subsists on blood, such as a vampire, can use its action while within 5 feet of the ortifex to drain blood from it. The creature can drain up to the ortifex’s current temporary hp, regaining hp equal to that amount. The ortifex then loses temporary hp equal to that amount."
  "name": "Blood Bearer"
- "desc": "The ortifex can pinpoint the location of creatures that aren’t constructs or undead within 60 feet of it and can sense the general direction of such creatures within 1 mile of it."
  "name": "Blood Sense"
- "desc": "A creature that can hear the ortifex’s heartbeat and starts its turn within 60 feet of the ortifex must succeed on a DC 13 Wisdom saving throw or be charmed until the start of its next turn. While charmed, it is incapacitated and must move toward the ortifex by the most direct route on its turn, trying to get within 5 feet of the ortifex. It doesn’t avoid opportunity attacks, but before moving into damaging terrain, such as lava or a pit, it can repeat the saving throw, ending the effect on a success.\n\nUnless surprised, a creature can plug its ears to avoid the saving throw at the start of its turn. If the creature does so, it is deafened until it unplugs its ears. If the creature unplugs its ears while still within range of the ortifex’s heartbeat, it must immediately make the saving throw."
  "name": "Hypnotic Heartbeat"
"actions":
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) bludgeoning damage plus 7 (2d6) necrotic damage."
  "name": "Slam"
- "desc": "The ortifex drains blood from nearby creatures. Each creature within 20 feet of the ortifex must make a DC 13 Constitution saving throw, taking 14 (4d6) necrotic damage on a failed save, or half as much damage on a successful one. The ortifex gains temporary hp equal to the single highest amount of necrotic damage dealt. If it gains temporary hp from this action while it still has temporary hp from a previous use of this action, the temporary hp add together. The ortifex’s temporary hp can’t exceed half its hp maximum. A creature that doesn’t have blood is immune to Blood Siphon."
  "name": "Blood Siphon (Recharge 6)"
source:
- [Tome of Beasts 2](https://koboldpress.com/kpstore/product/tome-of-beasts-2-for-5th-edition)
```
