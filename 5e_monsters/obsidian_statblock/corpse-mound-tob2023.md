---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob2023
- monster/cr/11
- monster/size/Huge
- monster/type/Undead
statblock: inline
aliases: ["corpsemound-tob1-2023", "Corpse Mound-tob2023"]
---
# Corpse Mound Tob2023
*Source: Tome of Beasts 2023 Page 68*

```statblock
"dice": false
"name": "Corpse Mound Tob2023"
"size": "Huge"
"type": "Undead"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "207"
"hit_dice": "18d12 + 90"
"stats":
- !!int "24"
- !!int "11"
- !!int "21"
- !!int "6"
- !!int "10"
- !!int "8"
"speed": "walk 30 ft."
"senses": darkvision 60 ft., passive Perception 10
"languages": "understands Common but can’t speak"
"cr": "11"
"damage_immunities": "poison"
"damage_resistances": "necrotic"
"traits":
- "desc": "Whenever a Large or smaller creature that isn’t a Construct or Undead dies within 10 feet of the corpse mound, that creature’s remains join with the mound, and the mound regains hp equal to twice the CR or level of the absorbed creature. The absorbed creature can’t be returned to life by any spell or effect that requires a body, unless the body is retrieved from the corpse mound."
  "name": "Absorb the Dead"
- "desc": "At the end of each of the corpse mound’s turns, each creature within 20 feet of it must succeed on a DC 17 Constitution saving throw or become poisoned until the end of its next turn. On a successful saving throw, the creature is immune to the mound’s Noxious Aura for 24 hours."
  "name": "Noxious Aura"
- "desc": "The corpse mound doesn’t require air, food, drink, or sleep."
  "name": "Undead Nature"
- "desc": "At the start of each of the corpse mound’s turns, it can choose to have one corpse fall from it and immediately rise as a zombie under its control. The mound can have no more than ten zombies under its control at one time. Zombies take their turns immediately after the corpse mound’s turn."
  "name": "Zombie Drop"
"actions":
- "desc": "The corpse mound makes two Slam or Bone Shard attacks. If both Slam attacks hit a Large or smaller target, the corpse mound can immediately use Envelop on it."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 18 (2d10 + 7) bludgeoning damage plus 10 (3d6) necrotic damage, and the target is grappled (escape DC 17). Until this grapple ends, the target is restrained."
  "name": "Slam"
- "desc": "Ranged Weapon Attack: +11 to hit, range 30/120 ft., one target. Hit: 14 (2d6 + 7) piercing damage plus 10 (3d6) necrotic damage, and the target must succeed on a DC 17 Strength saving throw or be knocked prone and restrained as it is pinned to the ground by the shard. A creature, including the restrained target, can take its action to free the target by succeeding on a DC 17 Strength check."
  "name": "Bone Shard"
- "desc": "The corpse mound envelops a Large or smaller creature within 5 feet of it that is restrained by its Bone Shard or a Large or smaller creature grappled by it. The enveloped target is blinded, restrained, and unable to breathe, and it must succeed on a DC 17 Strength saving throw at the start of each of the mound’s turns or take 18 (2d10 + 7) bludgeoning damage. If the mound moves, the enveloped target moves with it. The mound can have no more than four creatures enveloped at a time."
  "name": "Envelop"
source:
- [Tome of Beasts 2023](https://koboldpress.com/kpstore/product/tome-of-beasts-1-2023-edition/)
```
