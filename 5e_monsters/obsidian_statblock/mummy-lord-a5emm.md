---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/a5emm
- monster/cr/15
- monster/size/Medium
- monster/type/Undead
statblock: inline
aliases: ["mummy-lord-a5e", "Mummy Lord-a5emm"]
---
# Mummy Lord A5Emm
*Source: A5e Monstrous Menagerie Page 339*

```statblock
"dice": false
"name": "Mummy Lord A5Emm"
"size": "Medium"
"type": "Undead"
"ac": !!int "17"
"ac_class": ""
"hp": !!int "221"
"hit_dice": "26d8+104"
"stats":
- !!int "18"
- !!int "10"
- !!int "18"
- !!int "12"
- !!int "18"
- !!int "16"
"speed": "walk 30 ft."
"senses": darkvision 60 ft., passive Perception 14
"skillsaves":
  "history": !!int "6"
  "religion": !!int "6"
"languages": "the languages it knew in life"
"cr": "15"
"damage_immunities": "necrotic, poison; damage from nonmagical weapons"
"traits":
- "desc": "A mummys touch inflicts a dreadful curse called mummy rot. A cursed creature can't regain hit points, and its hit point maximum decreases by an amount equal to the creatures total number of Hit Dice for every 24 hours that elapse. If this curse reduces the targets hit point maximum to 0, the target dies and crumbles to dust. Remove curse and similar magic ends the curse."
  "name": "Curse: Mummy Rot"
- "desc": "After taking fire damage, the mummy lord catches fire and takes 11 (2d10) ongoing fire damage if it isnt already suffering ongoing fire damage. A creature can use an action or legendary action to extinguish this fire."
  "name": "Flammable"
- "desc": "If the mummy lord fails a saving throw while wearing its scarab amulet, it can choose to succeed instead. When it does so, the scarab amulet shatters. The mummy lord can create a new amulet when it finishes a long rest."
  "name": "Legendary Resistance (1/Day)"
- "desc": "The mummy lord has advantage on saving throws against spells and magical effects."
  "name": "Magic Resistance"
- "desc": "If its heart is intact, a destroyed mummy lord gains a new body in 1d4 days, regaining all its hit points. The new body forms within 10 feet of the heart."
  "name": "Rejuvenation"
- "desc": "The mummy lord is an 11th level spellcaster. Its spellcasting ability is Wisdom (spell save DC 17, +9 to hit with spell attacks). The mummy lord has the following cleric spells prepared, which it can cast without material components:\n Cantrips (at will): guidance, thaumaturgy\n 1st-level (4 slots): create or destroy water, detect magic\n 2nd-level (3 slots): augury, gentle repose\n 3rd-level (3 slots): animate dead, dispel magic\n 4th-level (3 slots): divination, guardian of faith\n 5th-level (2 slots): contagion\n 6th-level (1 slot): harm"
  "name": "Spellcasting"
"actions":
- "desc": "The mummy lord uses Dreadful Glare and then attacks with its rotting fist."
  "name": "Multiattack"
- "desc": "The mummy lord targets a creature within 60 feet. The target makes a DC 16 Wisdom saving throw. On a failure  it is magically frightened until the end of the mummy lords next turn. If the target fails the save by 5 or more  it is paralyzed for the same duration. A target that succeeds on the saving throw is immune to the Dreadful Glare of mummies and mummy lords for 24 hours."
  "name": "Dreadful Glare (Gaze)"
- "desc": "Melee Weapon Attack: +9 to hit  reach 5 ft.  one target. Hit: 14 (3d6 + 4) bludgeoning damage plus 21 (6d6) necrotic damage. If the target is a creature  it makes a DC 17 Constitution saving throw. On a failure  it is cursed with Mummy Rot."
  "name": "Rotting Fist"
- "desc": "The mummy lord scours the magic from one creature  object  or magical effect it can see within 120 feet. A spell ends if it was cast with a 3rd-level or lower spell slot. For spells using a 4th-level or higher spell slot  the mummy lord makes a Wisdom ability check (DC 10 + the spells level) for each one  ending the effect on a success."
  "name": "Dispel Magic (3rd-Level; V, S)"
- "desc": "A Large  indistinct spectral guardian appears within an unoccupied space within 30 feet and remains for 8 hours. Creatures of the mummy lords choice that move to a space within 10 feet of the guardian for the first time on a turn make a DC 17 Dexterity saving throw  taking 20 radiant or necrotic damage (mummy lords choice) on a failed save or half damage on a success. The spell ends when the guardian has dealt 60 total damage."
  "name": "Guardian of Faith (4th-Level; V)"
- "desc": "Melee Spell Attack: +9 to hit  reach 5 ft.  one creature. Hit: The target contracts a flesh-rotting disease. It has disadvantage on Charisma ability checks and becomes vulnerable to all damage. The target makes a DC 17 Constitution saving throw at the end of each of its turns. After 3 failures  the target stops making saving throws and the disease lasts for 7 days. After 3 successes  the effect ends."
  "name": "Contagion (5th-Level; V, S)"
- "desc": "The mummy lord targets a creature within 60 feet. The target makes a DC 17 Constitution saving throw. On a failure  the creature is diseased  taking 49 (14d6) necrotic damage. Its hit point maximum is reduced by the same amount for 1 hour or until the effect is removed with a spell that removes diseases. On a successful save  the creature takes half the damage. The spells damage can't reduce a target to less than 1 hit point."
  "name": "Harm (6th-Level; V, S)"
"reactions":
- "desc": "When the mummy lord is targeted by a spell using a 4th-level or lower spell slot, the attacker makes a DC 16 Constitution saving throw. On a failure, the spell is wasted, and the caster takes 3 (1d6) necrotic damage per level of the spell slot."
  "name": "Blasphemous Counterspell"
"legendary_actions":
- "desc": "Only one legendary action can be used at a time and only at the end of another creatures turn. It regains spent legendary actions at the start of its turn."
  "name": "The mummy lord can take 3 legendary actions"
- "desc": "A 60-foot-radius aura of magical negative energy surrounds the mummy lord until the end of its next turn, spreading around corners. Creatures in the aura can't regain hit points."
  "name": "Channel Negative Energy"
- "desc": "The mummy lord, along with its equipment, magically transforms into a whirlwind of sand and moves up to 60 feet without provoking opportunity attacks, and then reverts to its normal form."
  "name": "Whirlwind of Sand"
- "desc": "The mummy lord uses Dreadful Glare or attacks with its rotting fist."
  "name": "Attack (Costs 2 Actions)"
- "desc": "Each non-undead creature within 10 feet of the mummy lord that can hear its magical imprecation makes a DC 16 Constitution saving throw. On a failure, a creature is stunned until the end of the mummy lords next turn."
  "name": "Blasphemous Word (Costs 2 Actions)"
- "desc": "The mummy lord casts dispel magic."
  "name": "Dispel Magic (Costs 2 Actions)"
source:
- [A5e Monstrous Menagerie](https://enpublishingrpg.com/products/level-up-monstrous-menagerie-a5e)
```
