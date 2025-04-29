---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob2
- monster/cr/5
- monster/size/Large
- monster/type/Giant
statblock: inline
aliases: ["manggus", "Manggus-tob2"]
---
# Manggus Tob2
*Source: Tome of Beasts 2 Page 256*

```statblock
"dice": false
"name": "Manggus Tob2"
"size": "Large"
"type": "Giant"
"ac": !!int "14"
"ac_class": "hide armor"
"hp": !!int "127"
"hit_dice": "15d10+45"
"stats":
- !!int "18"
- !!int "14"
- !!int "16"
- !!int "8"
- !!int "7"
- !!int "9"
"speed": "walk 30 ft."
"senses": darkvision 60 ft., passive Perception 8
"skillsaves":
  "intimidation": !!int "5"
"languages": "Common, Giant"
"cr": "5"
"traits":
- "desc": "When the manggus changes from its true form into its hydra form, it unleashes a mighty roar. Each creature within 30 feet of it and that can hear the roar must succeed on a DC 15 Wisdom saving throw or be frightened until the end of its next turn. If the target fails the saving throw by 5 or more, it is also paralyzed until the end of its next turn. If a creature’s saving throw is successful, it is immune to the Roaring Transformation of all manggus for the next 24 hours."
  "name": "Roaring Transformation"
- "desc": "The manggus can use its action to polymorph into a Large, three-headed hydra, or back into its true form. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn’t transformed. The manggus reverts to its true form if it dies."
  "name": "Shapechanger"
- "desc": "The manggus has three heads. While it has more than one head, the manggus has advantage on saving throws against being blinded, charmed, deafened, frightened, stunned, and knocked unconscious.\n\nWhenever the manggus takes 15 or more damage in a single turn, one of its heads dies. If all its heads die and the manggus still lives, the manggus immediately reverts to its true form and can’t change into its hydra form again until it finishes a long rest.\n\nAt the end of its turn, the manggus regrows two heads for each of its heads that died since its last turn, unless it has taken fire damage since its last turn. The manggus regains 5 hp for each head regrown in this way."
  "name": "Three-Headed (Hydra Form Only)"
"actions":
- "desc": "In hydra form, the manggus makes as many bite attacks as it has heads. In giant form, it makes two greataxe attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 9 (1d10 + 4) piercing damage."
  "name": "Bite (Hydra Form Only)"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 17 (2d12 + 4) slashing damage."
  "name": "Greataxe (Giant Form Only)"
source:
- [Tome of Beasts 2](https://koboldpress.com/kpstore/product/tome-of-beasts-2-for-5th-edition)
```
