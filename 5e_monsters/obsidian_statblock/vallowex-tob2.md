---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob2
- monster/cr/7
- monster/size/Large
- monster/type/Aberration
statblock: inline
aliases: ["vallowex", "Vallowex-tob2"]
---
# Vallowex Tob2
*Source: Tome of Beasts 2 Page 356*

```statblock
"dice": false
"name": "Vallowex Tob2"
"size": "Large"
"type": "Aberration"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "123"
"hit_dice": "13d10+52"
"stats":
- !!int "20"
- !!int "10"
- !!int "18"
- !!int "5"
- !!int "12"
- !!int "5"
"speed": "swim 30 ft. walk 30 ft."
"senses": blindsight 60 ft. (blind beyond this radius), passive Perception 14
"skillsaves":
  "perception": !!int "4"
  "stealth": !!int "6"
"languages": "—"
"cr": "7"
"traits":
- "desc": "The vallowex can breathe air and water."
  "name": "Amphibious"
- "desc": "At the start of each of the vallowex’s turns, each creature within 30 feet of it must succeed on a DC 15 Constitution saving throw or have disadvantage on its next attack roll or ability check as a gnawing thirst distracts it. For each minute a creature stays in the vallowex’s aura, it gains one level of exhaustion from dehydration. A level of exhaustion is removed if the creature uses an action to drink 1 pint of water. A vallowex is immune to its own Aura of Thirst as well as the auras of other vallowexes."
  "name": "Aura of Thirst"
- "desc": "The vallowex has advantage on Dexterity (Stealth) checks made while underwater."
  "name": "Underwater Camouflage"
"actions":
- "desc": "The vallowex makes two attacks: one with its spiked tongue and one with its tail."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +8 to hit, reach 15 ft., one target. Hit: 14 (2d8 + 5) piercing damage, and the target is grappled (escape DC 15). Until this grapple ends, the target is restrained, and the vallowex can’t use its spiked tongue against another target."
  "name": "Spiked Tongue"
- "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 16 (2d10 + 5) bludgeoning damage."
  "name": "Tail"
- "desc": "The vallowex makes one spiked tongue attack against a Medium or smaller target it is grappling. If the attack hits, the target is also swallowed, and the grapple ends. The swallowed target is blinded and restrained, it has total cover against attacks and other effects outside the vallowex, and it takes 10 (3d6) acid damage at the start of each of the vallowex’s turns. The vallowex can have only one creature swallowed at a time. If the vallowex takes 15 damage or more on a single turn from the swallowed creature, the vallowex must succeed on a DC 15 Constitution saving throw at the end of that turn or regurgitate the creature, which falls prone in a space within 5 feet of the vallowex. If the vallowex dies, the swallowed creature is no longer restrained by it and can escape from the corpse using 10 feet of movement, exiting prone."
  "name": "Swallow"
- "desc": "A vallowex can release a 40-foot-radius cloud of microscopic eggs into a body of water it touches. The eggs live for 1 hour. Any humanoid or beast that drinks the eggs must succeed on a DC 15 Constitution saving throw or be infected with a disease—a vallowex tadpole. A host can carry only one vallowex tadpole to term at a time. While diseased, the host must make a DC 15 Constitution saving throw at the end of each long rest. On a failed save, the host’s Strength score is reduced by 1d4. This reduction lasts until the host finishes a long rest after the disease is cured. If the host’s Strength score is reduced to 0, the host dies, and a vallowex emerges from the corpse. If the host succeeds on three saving throws or the disease is magically cured, the unborn tadpole disintegrates."
  "name": "Release Eggs (1/Week)"
source:
- [Tome of Beasts 2](https://koboldpress.com/kpstore/product/tome-of-beasts-2-for-5th-edition)
```
