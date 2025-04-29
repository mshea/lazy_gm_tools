---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/cc
- monster/cr/6
- monster/size/Large
- monster/type/Ooze
statblock: inline
aliases: ["blood-ooze", "Blood Ooze-cc"]
---
# Blood Ooze Cc
*Source: Creature Codex Page 282*

```statblock
"dice": false
"name": "Blood Ooze Cc"
"size": "Large"
"type": "Ooze"
"ac": !!int "8"
"ac_class": "None"
"hp": !!int "76"
"hit_dice": "8d10+32"
"stats":
- !!int "16"
- !!int "6"
- !!int "18"
- !!int "1"
- !!int "8"
- !!int "2"
"speed": "climb 20 ft. walk 20 ft."
"senses": blindsight 60 ft. (blind beyond this radius), passive Perception 9
"skillsaves":
"languages": "-"
"cr": "6"
"damage_immunities": "acid, fire, necrotic, slashing"
"traits":
- "desc": "The ooze can move through a space as narrow as 1 inch wide without squeezing."
  "name": "Amorphous"
- "desc": "A creature that touches the ooze or hits it with a melee attack while within 5 feet of it takes 5 (1d10) necrotic damage and the ooze gains temporary hp equal to that amount as it drains blood from the victim. It can add temporary hp gained from this trait to temporary hp gained from its pseudopod attack and Overflow reaction. Its temporary hp can't exceed half its maximum hp. If the ooze takes radiant damage, this trait doesn't function at the start of the ooze's next turn, although it retains any temporary hp it previously gained."
  "name": "Blood Drain"
- "desc": "The ooze can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
  "name": "Spider Climb"
"actions":
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) bludgeoning damage plus 16 (3d10) necrotic damage. The ooze gains temporary hp equal to the necrotic damage taken."
  "name": "Pseudopod"
"reactions":
- "desc": "When the blood ooze is hit with a melee attack, it can drain blood from the attacker. The attacker must make a DC 15 Constitution saving throw, taking 11 (2d10) necrotic damage on a failed save, or half as much damage on a successful one. The ooze gains temporary hp equal to the necrotic damage taken."
  "name": "Overflow"
source:
- [Creature Codex](https://koboldpress.com/kpstore/product/creature-codex-for-5th-edition-dnd)
```
