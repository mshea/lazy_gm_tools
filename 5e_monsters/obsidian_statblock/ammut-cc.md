---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/cc
- monster/cr/9
- monster/size/Large
- monster/type/Celestial
statblock: inline
aliases: ["ammut", "Ammut-cc"]
---
# Ammut Cc
*Source: Creature Codex Page 15*

```statblock
"dice": false
"name": "Ammut Cc"
"size": "Large"
"type": "Celestial"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "172"
"hit_dice": "15d10+90"
"stats":
- !!int "20"
- !!int "12"
- !!int "23"
- !!int "6"
- !!int "16"
- !!int "12"
"speed": "walk 30 ft."
"saves":
  "Strength": !!int "9"
  "Constitution": !!int "10"
"senses": darkvision 120 ft., passive Perception 21
"skillsaves":
  "perception": !!int "11"
"cr": "9"
"damage_immunities": "necrotic"
"damage_resistances": "cold, radiant"
"traits":
- "desc": "An undead creature that starts its turn within 10 feet of the ammut must succeed on a DC 16 Charisma saving throw or be stunned until the end of its next turn. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the ammut's Judging Aura for the next 24 hours."
  "name": "Judging Aura"
- "desc": "The ammut has advantage on saving throws against spells and other magical effects."
  "name": "Magic Resistance"
- "desc": "The large belly of the ammut magically sustains the life of those trapped inside it. A creature caught in its belly doesn't need food, water, or air. The ammut can maintain one Medium or smaller creature this way as long as the ammut remains alive."
  "name": "Prison Belly"
"actions":
- "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 32 (5d10 + 5) piercing damage plus 10 (3d6) radiant damage. If the target is Large or smaller, it is grappled (escape DC 17). Until this grapple ends, the target is restrained and the ammut can't bite another target."
  "name": "Bite"
- "desc": "The ammut makes one bite attack against a Large or smaller target it is grappling. If the attack hits, the target is also swallowed, and the grapple ends. While swallowed, the target is blinded and restrained and it has total cover against attacks and other effects outside the ammut. An ammut can only have one Medium or smaller creature swallowed at a time.\n\nIf the ammut takes 30 damage or more on a single turn from the swallowed creature, the ammut must succeed on a DC 14 Constitution saving throw at the end of that turn or regurgitate the creature, which falls prone in a space within 10 feet of the ammut. If the ammut dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 10 feet of movement, exiting prone."
  "name": "Swallow"
- "desc": "The ammut inhales the tortured spirits of undead within 30 feet. Each undead creature of CR 1 and lower in the area is automatically destroyed. All other undead must succeed on a DC 17 Wisdom saving throw or be incapacitated for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
  "name": "Ghost Breath (1/Day)"
- "desc": "The ammut attempts to absorb the spirit of a dead or undead creature in its belly. The creature must succeed on a DC 16 Wisdom saving throw or be absorbed by the ammut. A creature absorbed this way is destroyed and can't be reanimated, though it can be restored to life by powerful magic, such as a resurrection spell. The ammut regains hp equal to the absorbed creature's hp maximum."
  "name": "Absorb Spirit (1/Day)"
source:
- [Creature Codex](https://koboldpress.com/kpstore/product/creature-codex-for-5th-edition-dnd)
```
