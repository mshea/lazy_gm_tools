---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob3
- monster/cr/11
- monster/size/Large
- monster/type/Aberration
statblock: inline
aliases: ["grivid", "Grivid-tob3"]
---
# Grivid Tob3
*Source: Tome of Beasts 3 Page 221*

```statblock
"dice": false
"name": "Grivid Tob3"
"size": "Large"
"type": "Aberration"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "180"
"hit_dice": "19d10+76"
"stats":
- !!int "21"
- !!int "16"
- !!int "18"
- !!int "2"
- !!int "15"
- !!int "5"
"speed": "walk 50 ft."
"senses": tremorsense 60', passive Perception 16
"skillsaves":
  "perception": !!int "2"
"languages": "—"
"cr": "11"
"traits":
- "desc": "Has twenty worms stored in its cheeks. Used worms regrow when the grivid finishes a long rest."
  "name": "Cheek Worm Regrowth"
- "desc": "Advantage: sight Wis (Percept) checks."
  "name": "Keen Sight"
- "desc": "Produces parasitic worms in its cheeks and it expels these worms into other creatures when it attacks. Worm burrows into target's flesh and that creature is poisoned while infested with at least one worm. At start of each of infested creature’s turns it takes 5 (2d4) poison. Any creature can take an action to remove one worm with successful DC 12 Wis (Medicine) check. An effect that cures disease removes and kills one worm infesting the creature. When grivid dies all worms currently infesting creatures die ending infestation in all infested creatures."
  "name": "Parasitic Cheek Worm"
- "desc": "If it has at least 1 hp grivid regains 5 hp for each worm infesting another creature at start of its turn."
  "name": "Worm Regeneration"
"actions":
- "desc": "One Bite and two Kicks or three Spit Worms."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +9 to hit, 10 ft., one creature,. 18 (3d8+5) piercing damage + 7 (2d6) poison and target must make DC 16 Con save or be infested with parasitic cheek worm (see above) if grivid has at least 1 cheek worm."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +9 to hit, 5 ft., one creature,. 18 (3d8+5) bludgeoning damage and target must make DC 16 Str save or be knocked prone."
  "name": "Kick"
- "desc": "Ranged Weapon Attack: +7 to hit 20/60' one creature. 13 (3d6+3) bludgeoning damage + 7 (2d6) poison and target: DC 16 Con save or be infested with parasitic cheek worm (see above) if grivid has at least 1 cheek worm."
  "name": "Spit Worm"
"bonus_actions":
- "desc": "Consumes up to 3 cheek worms regaining 5 (2d4) hp for each worm consumed."
  "name": "Consume Worms"
source:
- [Tome of Beasts 3](https://koboldpress.com/kpstore/product/tome-of-beasts-3-for-5th-edition/)
```
