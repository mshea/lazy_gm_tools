---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob2023
- monster/cr/12
- monster/size/Huge
- monster/type/Fiend
statblock: inline
aliases: ["heraldofblood-tob1-2023", "Herald of Blood-tob2023"]
---
# Herald Of Blood Tob2023
*Source: Tome of Beasts 2023 Page 232*

```statblock
"dice": false
"name": "Herald Of Blood Tob2023"
"size": "Huge"
"type": "Fiend"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "184"
"hit_dice": "16d12 + 80"
"stats":
- !!int "22"
- !!int "12"
- !!int "20"
- !!int "14"
- !!int "17"
- !!int "16"
"speed": "walk 30 ft. fly 30 ft."
"saves":
  "Strength": !!int "10"
  "Constitution": !!int "9"
  "Wisdom": !!int "7"
"senses": darkvision 240 ft., passive Perception 17
"skillsaves":
  "Arcana": !!int "10"
  "Perception": !!int "7"
"languages": "Common, Draconic, Infernal, Void Speech"
"cr": "12"
"damage_immunities": "necrotic, poison"
"damage_resistances": "cold, fire, lightning"
"traits":
- "desc": "Each time a creature with blood hits the herald with a melee attack while within 10 feet of the herald, the creature takes 4 (1d8) necrotic damage, and the herald’s AC increases by 1 until the end of its next turn. The herald’s AC can’t be increased to more than 20 from this trait."
  "name": "Blood Armor"
"actions":
- "desc": "The herald makes three Herald’s Staff or Blood Bolt attacks, or it makes two Herald’s Staff attacks and one Grasping Slam attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 13 (2d6 + 6) bludgeoning damage plus 13 (3d8) necrotic damage."
  "name": "Herald’s Staff"
- "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) bludgeoning damage, and the target is grappled (escape DC 17) if it is a Large or smaller creature. Until this grapple ends, the target is restrained and takes 9 (2d8) necrotic damage at the start of each of its turns, and the herald can’t use its Grasping Slam on another target."
  "name": "Grasping Slam"
- "desc": "Ranged Spell Attack: +7 to hit, range 120 ft., one target. Hit: 25 (5d8 + 3) necrotic damage. If the target is a creature with blood, it must succeed on a DC 17 Constitution saving throw or be poisoned until the end of its next turn."
  "name": "Blood Bolt"
- "desc": "Each creature with blood within 10 feet of the herald must make a DC 17 Constitution saving throw, taking 45 (10d8) necrotic damage on a failed save, or half as much damage on a successful one. The herald then gains temporary hp equal to the single highest amount of necrotic damage dealt. A creature that fails the saving throw by 5 or more also suffers one level of exhaustion."
  "name": "Call Blood (Recharge 5–6)"
"bonus_actions":
- "desc": "The herald of blood infuses reckless rage in one creature it can see within 60 feet of it that isn’t a Construct or Undead. The target must succeed on a DC 17 Constitution saving throw or be enraged for a number of rounds equal to the target’s Constitution modifier. While enraged, the target has advantage on all melee attack rolls, and attack rolls against it have advantage. When the rage ends, the target takes 13 (3d8) necrotic damage and suffers one level of exhaustion. A creature with any levels of exhaustion automatically succeeds on this saving throw."
  "name": "Grant Blood Rage"
source:
- [Tome of Beasts 2023](https://koboldpress.com/kpstore/product/tome-of-beasts-1-2023-edition/)
```
