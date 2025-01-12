---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob2
- monster/cr/6
- monster/size/Large
- monster/type/Ooze
statblock: inline
aliases: ["tar-ooze", "Tar Ooze-tob2"]
---
# Tar Ooze Tob2
*Source: Tome of Beasts 2 Page 280*

```statblock
"dice": false
"name": "Tar Ooze Tob2"
"size": "Large"
"type": "Ooze"
"ac": !!int "9"
"ac_class": "None"
"hp": !!int "120"
"hit_dice": "15d10+45"
"stats":
- !!int "18"
- !!int "8"
- !!int "16"
- !!int "1"
- !!int "8"
- !!int "2"
"speed": "walk 20 ft. climb 20 ft."
"senses": blindsight 60 ft. (blind beyond this radius), passive Perception 8
"skillsaves":
"languages": "—"
"cr": "6"
"damage_immunities": "fire, necrotic, poison"
"traits":
- "desc": "When the ooze takes fire damage, it bursts into flame. The ooze continues burning until it takes cold damage or is immersed in water. A creature that touches the ooze or hits it with a melee attack while within 5 feet of it while it is burning takes 5 (1d10) fire damage. While burning, the ooze’s weapon attacks deal an extra 5 (1d10) fire damage."
  "name": "Fire Hazard"
- "desc": "A creature covered in the ooze’s tar has its speed halved for 1 minute. In addition, the tar ignites if touched by a source of fire or if a creature covered with tar takes fire damage. The tar burns until a creature takes an action to snuff out the flames. A creature that starts its turn covered with burning tar takes 10 (2d10) fire damage. A humanoid that dies while covered in tar rises 1 hour later as tar ghoul, unless the humanoid is restored to life or its body is destroyed."
  "name": "Sticky Situation"
"actions":
- "desc": "The tar ooze makes two pseudopod attacks. If both attacks hit the same target, the target is covered in tar (see Sticky Situation)."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d6 + 4) bludgeoning damage plus 14 (4d6) necrotic damage."
  "name": "Pseudopod"
- "desc": "Ranged Weapon Attack: +2 to hit, range 60 ft., one target. Hit: 14 (4d6) necrotic damage and the target must succeed on a DC 14 Dexterity saving throw or be covered in tar (see Sticky Situation)."
  "name": "Hurl Tar"
source:
- [Tome of Beasts 2](https://koboldpress.com/kpstore/product/tome-of-beasts-2-for-5th-edition)
```
