---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob3
- monster/cr/5
- monster/size/Medium
- monster/type/Fiend
statblock: inline
aliases: ["chemosit", "Chemosit-tob3"]
---
# Chemosit Tob3
*Source: Tome of Beasts 3 Page 82*

```statblock
"dice": false
"name": "Chemosit Tob3"
"size": "Medium"
"type": "Fiend"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "119"
"hit_dice": "14d8+56"
"stats":
- !!int "16"
- !!int "17"
- !!int "18"
- !!int "13"
- !!int "14"
- !!int "15"
"speed": "walk 30 ft."
"saves":
  "Strength": !!int "6"
  "Constitution": !!int "7"
  "Wisdom": !!int "5"
  "Charisma": !!int "5"
"senses": darkvision 120', passive Perception 15
"skillsaves":
  "perception": !!int "2"
"languages": "Abyssal, Common, Infernal"
"cr": "5"
"damage_resistances": "fire, cold, lightning; nonmagic B/P/S attacks not made w/silvered weapons"
"traits":
- "desc": "Its open mouth emits a red light shedding bright light in 10 ft. radius and dim light additional 10 feet. Opening or closing its mouth doesn’t require an action."
  "name": "Inner Light"
"actions":
- "desc": "One Beak attack and two Crutch attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, 5 ft., one target, 12 (2d8+3) piercing damage + 7 (2d6) fire."
  "name": "Beak"
- "desc": "Melee Weapon Attack: +6 to hit, 5 ft., one target, 7 (1d8+3) bludgeoning damage and target: DC 14 Con save or become infected with the cackle fever disease."
  "name": "Crutch"
- "desc": "Sings an enchanting tune. Each creature with an Int of 5+ within 300' of chemosit that can hear the song: DC 15 Wis save or be charmed until the song ends. Chemosit must take a bonus action on its subsequent turns to continue singing. It can stop singing at any time. Song ends if chemosit is incapacitated. If charmed target is more than 5 ft. away from chemosit target must move on its turn toward chemosit by most direct route trying to get within 5 ft.. It won’t move into damaging terrain such as lava or a pit taking whatever route it can to avoid terrain and still reach chemosit. If target can’t find a safe route to chemosit charmed effect ends. Whenever target takes damage or at the end of each of its turns target can re-save. If save succeeds effect ends on it. Target that successfully saves is immune to this chemosit’s Inviting Song for next 24 hrs."
  "name": "Inviting Song"
"bonus_actions":
- "desc": "Magically transforms into a Small or Med Humanoid or back into its true Fiendish form. Its stats other than size are the same in each form. No matter the form chemosit always has only one leg. Its crutch adjusts to fit its new form but no other equipment transforms. Reverts on death. Crutch becomes nonmagical."
  "name": "Change Shape"
source:
- [Tome of Beasts 3](https://koboldpress.com/kpstore/product/tome-of-beasts-3-for-5th-edition/)
```
