---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/a5emm
- monster/cr/21
- monster/size/Medium
- monster/type/Undead
statblock: inline
aliases: ["lich-a5e", "Lich-a5emm"]
---
# Lich A5Emm
*Source: A5e Monstrous Menagerie Page 306*

```statblock
"dice": false
"name": "Lich A5Emm"
"size": "Medium"
"type": "Undead"
"ac": !!int "18"
"ac_class": ""
"hp": !!int "170"
"hit_dice": "20d8+80"
"stats":
- !!int "12"
- !!int "16"
- !!int "18"
- !!int "20"
- !!int "16"
- !!int "16"
"speed": "walk 30 ft."
"senses": truesight 120 ft., passive Perception 20
"skillsaves":
  "arcana": !!int "12"
  "history": !!int "12"
  "insight": !!int "10"
  "perception": !!int "10"
  "religion": !!int "12"
"languages": "any six"
"cr": "21"
"damage_immunities": "necrotic, poison; damage from nonmagical weapons"
"damage_resistances": "cold, lightning"
"traits":
- "desc": "The lichs body or vestments are warded with three protective runes. When the lich fails a saving throw, it can choose to succeed instead. When it does so, one of its protective runes disappears."
  "name": "Legendary Resistance (3/Day)"
- "desc": "If it has a soul vessel, a destroyed lich gains a new body in 1d10 days, regaining all its hit points. The new body forms within 10 feet of the soul vessel."
  "name": "Rejuvenation"
- "desc": "Unless a spell has only a vocal component, the lich can cast the spell without providing a vocal component."
  "name": "Tongueless Utterance"
- "desc": "The lich has advantage on saving throws against any effect that turns undead."
  "name": "Turn Resistance"
- "desc": "A lich doesnt require air, sustenance, or sleep."
  "name": "Undead Nature"
- "desc": "The lich is a 16th level spellcaster. Its spellcasting ability is Intelligence (spell save DC 20, +12 to hit with spell attacks). The lich has the following wizard spells prepared:\n Cantrips (at will): fire bolt, mage hand, prestidigitation\n 1st-level (4 slots): detect magic, shield, silent image, thunderwave\n 2nd-level (3 slots): blur, detect thoughts, locate object\n 3rd-level (3 slots): animate dead, dispel magic, fireball\n 4th-level (3 slots): confusion, dimension door\n 5th-level (2 slots): geas, scrying\n 6th-level (1 slot): create undead, disintegrate\n 7th-level (1 slot): finger of death, teleport\n 8th-level (1 slot): power word stun"
  "name": "Spellcasting"
"actions":
- "desc": "Melee Spell Attack: +12 to hit  reach 5 ft.  one target. Hit: 19 (4d6 + 5) cold damage. The target makes a DC 18 Constitution saving throw. On a failure  it is paralyzed until the end of its next turn."
  "name": "Paralyzing Touch"
- "desc": "The lich targets up to 3 creatures within 60 feet. Each target makes a DC 18 Dexterity saving throw. On a failure  the target takes 28 (8d6) lightning damage."
  "name": "Arc Lightning"
- "desc": "Ranged Spell Attack: +12 to hit  range 120 ft.  one target. Hit: 16 (3d10) fire damage."
  "name": "Fire Bolt (Cantrip; S)"
- "desc": "Thunder rolls from the lich in a 15-foot cube. Each creature in the area makes a DC 20 Constitution saving throw. On a failure  a creature takes 9 (2d8) thunder damage and is pushed 10 feet from the lich. On a success  a creature takes half damage and is not pushed."
  "name": "Thunderwave (1st-Level; S)"
- "desc": "The lichs form is blurred. Attack rolls against it are made with disadvantage unless the attacker has senses that allow them to perceive without sight or to see through illusions (like blindsight or truesight)."
  "name": "Blur (2nd-Level; V, Concentration)"
- "desc": "Fire streaks from the lich to a point within 120 feet and explodes in a 20-foot radius  spreading around corners. Each creature in the area makes a DC 20 Dexterity saving throw  taking 21 (6d6) fire damage on a failed save or half damage on a success."
  "name": "Fireball (3rd-Level; S, M)"
- "desc": "Each creature within 10 feet of a point the lich can see within 120 feet makes a DC 20 Wisdom saving throw  becoming rattled until the end of its next turn on a success. On a failure  a creature is confused for 1 minute and can repeat the saving throw at the end of each of its turns  ending the effect on itself on a success."
  "name": "Confusion (4th-Level; S, M, Concentration)"
- "desc": "The lich disintegrates a target within 60 feet. A Large or smaller nonmagical object or creation of magical force  or a 10-foot-cube section thereof  is automatically destroyed. A creature makes a DC 20 Dexterity saving throw  taking 75 (10d6 + 40) force damage on a failed save. If reduced to 0 hit points  the creature and its nonmagical gear are disintegrated  and the creature can be restored to life only with true resurrection or wish."
  "name": "Disintegrate (6th-Level; S, M)"
- "desc": "A creature within 60 feet makes a DC 20 Constitution saving throw  taking 61 (7d8 + 30) necrotic damage on a failed saving throw or half damage on a success. A humanoid killed by this spell turns into a zombie under the lichs control at the start of the lichs next turn."
  "name": "Finger of Death (7th-Level; S)"
- "desc": "The lich targets a creature within 60 feet. If the target has more than 150 hit points  it is rattled until the end of its next turn. Otherwise  it is stunned. It can make a DC 20 Constitution saving throw at the end of each of its turns  ending the effect on a success."
  "name": "Power Word Stun (8th-Level; V)"
"reactions":
- "desc": "When a creature within 60 feet casts a spell that targets the lich, the lich attempts to interrupt it. The lich makes an Intelligence check against a DC of 10 + the spells level. On a success, the spell fails, and the caster takes 10 (3d6) necrotic damage."
  "name": "Sabotage Spell"
- "desc": "When the lich is hit by an attack or targeted by magic missile, it gains a +5 bonus to AC (including against the triggering attack) and immunity to magic missile. These benefits last until the beginning of its next turn."
  "name": "Shield (1st-Level; V"
"bonus_actions":
- "desc": "The lich surrounds itself with a magical, rune-covered, glowing, translucent aura in a 10-foot radius. The aura moves with the lich and casts dim light inside its area. The aura disappears at the beginning of the lichs next turn."
  "name": "Eldritch Aura"
- "desc": "The aura casts purple light. Each living creature that ends its turn inside the aura takes 17 (5d6) necrotic damage, and the lich regains the same number of hit points."
  "name": "Death Aura"
- "desc": "The aura casts orange light. It has 35 hit points. Whenever the lich would take damage, the aura takes the damage instead, and the aura visibly weakens. If the damage reduces the aura to 0 hit points, the aura disappears, and the lich takes any excess damage."
  "name": "Shield Aura"
- "desc": "The aura casts blue light. Any spell cast with a 5th-level or lower spell slot from outside the aura can't affect anything inside the aura. Using a spell to target something inside the aura or include the auras space in an area has no effect on anything inside."
  "name": "Spell Shield Aura"
"legendary_actions":
- "desc": "Only one legendary action can be used at a time and only at the end of another creatures turn. It regains spent legendary actions at the start of its turn."
  "name": "The lich can take 3 legendary actions"
- "desc": "The lich casts cantrip or a 1st-level spell. The lich can use 2 legendary actions to cast a 2nd-level spell or 3 legendary actions to cast a 3rd-level spell."
  "name": "Cast Spell"
- "desc": "The lich uses Paralyzing Touch."
  "name": "Paralyzing Touch (Costs 2 Actions)"
- "desc": "The lich uses Arc Lightning."
  "name": "Arc Lightning (Costs 3 Actions)"
source:
- [A5e Monstrous Menagerie](https://enpublishingrpg.com/products/level-up-monstrous-menagerie-a5e)
```
