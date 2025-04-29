---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob3
- monster/cr/8
- monster/size/Large
- monster/type/Construct
statblock: inline
aliases: ["golem-chain", "Golem, Chain-tob3"]
---
# Golem, Chain Tob3
*Source: Tome of Beasts 3 Page 215*

```statblock
"dice": false
"name": "Golem, Chain Tob3"
"size": "Large"
"type": "Construct"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "119"
"hit_dice": "14d10+42"
"stats":
- !!int "18"
- !!int "12"
- !!int "16"
- !!int "5"
- !!int "11"
- !!int "1"
"speed": "walk 30 ft. climb 30 ft."
"senses": darkvision 60', passive Perception 10
"skillsaves":
  "perception": !!int "0"
"languages": "knows Infernal, can’t speak"
"cr": "8"
"traits":
- "desc": "Doesn’t require air food drink or sleep."
  "name": "Construct Nature"
- "desc": "Immune: form-altering spells/effects."
  "name": "Immutable Form"
- "desc": "A creature infected with this manifests symptoms 2d4 days after infection: fever headache sore throat and muscle aches. It affects the nervous system causing painful debilitating muscle spasms that eventually inhibit mobility speech and breathing. Until disease is cured at end of each long rest infected creature must make a DC 16 Con save. Fail: Creature's Dex score is reduced by 1d4 and is paralyzed for 24 hrs. Reduction lasts until creature finishes a long rest after disease is cured. If disease reduces creature’s Dex to 0 it dies. Success: creature instead suffers one level of exhaustion and until disease is cured or exhaustion is removed it must make DC 16 Con save to cast a spell with verbal component. A creature that succeeds on three saves recovers from the disease."
  "name": "Infernal Tetanus"
- "desc": "Advantage: spell/magic effect saves."
  "name": "Magic Resistance"
- "desc": "Weapon attacks are magical."
  "name": "Magic Weapons"
"actions":
- "desc": "Two Chain attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +7 to hit, 15 ft., one target, 18 (4d6+4) slashing damage and target contracts infernal tetanus disease (see above; DC 16 Con not diseased). Target is grappled (escape DC 14) if it is a Large or smaller creature and golem doesn’t have another creature grappled."
  "name": "Chain"
- "desc": "Creates prison of chains around an up to Med creature grappled by it. Imprisoned: restrained and takes 14 (4d6) piercing damage at start of each of its turns. Imprisoned creature or creature within 5 ft. of golem can use action to free imprisoned creature. Doing so requires DC 16 Str check and creature attempting takes 7 (2d6) piercing damage."
  "name": "Imprison"
source:
- [Tome of Beasts 3](https://koboldpress.com/kpstore/product/tome-of-beasts-3-for-5th-edition/)
```
