---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/cc
- monster/cr/12
- monster/size/Large
- monster/type/Monstrosity
statblock: inline
aliases: ["horned-serpent", "Horned Serpent-cc"]
---
# Horned Serpent Cc
*Source: Creature Codex Page 220*

```statblock
"dice": false
"name": "Horned Serpent Cc"
"size": "Large"
"type": "Monstrosity"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "210"
"hit_dice": "20d10+100"
"stats":
- !!int "22"
- !!int "16"
- !!int "20"
- !!int "4"
- !!int "14"
- !!int "16"
"speed": "swim 40 ft. walk 40 ft."
"senses": darkvision 60 ft., passive Perception 16
"skillsaves":
  "perception": !!int "6"
  "stealth": !!int "7"
"languages": "-"
"cr": "12"
"damage_immunities": "necrotic, poison"
"damage_resistances": "fire"
"traits":
- "desc": "The horned serpent can breathe air and water."
  "name": "Amphibious"
- "desc": "Those who fail a saving throw against the horned serpent's Gem Gaze or bite attack become infected with the corpse cough disease. The infected creature can't benefit from short or long rests due to a constant, wet cough. The infected creature must succeed on a DC 17 Constitution saving throw each day or take 18 (4d8) necrotic damage. The target's hp maximum is reduced by an amount equal to the necrotic damage taken. The target dies if this effect reduces its hp maximum to 0. The reduction lasts until the target is cured of the disease with a greater restoration spell or similar magic. If the infected creature comes into physical contact with a blood relative before the disease is cured, the relative must succeed on a DC 17 Constitution saving throw or also become infected with the disease. The blood relative is afflicted with a constant, wet cough within hours of infection, but the disease's full effects don't manifest until 1d4 days later. Corpse cough is so named due to the smell of the cough as the infected creature's lungs become necrotic."
  "name": "Corpse Cough"
- "desc": "At the start of each of the horned serpent's turns, each creature within 20 feet of it must make a DC 17 Constitution saving throw, taking 18 (4d8) poison damage on a failed save, or half as much damage on a successful one."
  "name": "Poisonous Aura"
- "desc": "The horned serpent is immune to scrying and to any effect that would sense its emotions, read its thoughts, or detect its location."
  "name": "Shielded Mind"
"actions":
- "desc": "The horned serpent makes one gore attack and one bite attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 19 (4d6 + 5) piercing damage."
  "name": "Gore"
- "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 21 (3d10 + 5) piercing damage, and the target must succeed on a DC 17 Constitution saving throw or become infected with the corpse cough disease (see the Corpse Cough trait)."
  "name": "Bite"
- "desc": "The horned serpent's gem flashes, bathing a 30-foot cone in iridescent light. Each creature in the area must make a DC 17 Constitution saving throw. On a failed save, a creature takes 35 (10d6) radiant damage and is infected with the corpse cough disease (see the Corpse Cough trait). On a success, a creature takes half the damage and isn't infected with the disease. Gem Gaze has no effect on constructs and undead."
  "name": "Gem Gaze (Recharge 5-6)"
source:
- [Creature Codex](https://koboldpress.com/kpstore/product/creature-codex-for-5th-edition-dnd)
```
