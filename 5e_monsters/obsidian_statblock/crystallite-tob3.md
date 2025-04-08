---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tob3
- monster/cr/4
- monster/size/Large
- monster/type/Giant
statblock: inline
aliases: ["crystallite", "Crystallite-tob3"]
---
# Crystallite Tob3
*Source: Tome of Beasts 3 Page 100*

```statblock
"dice": false
"name": "Crystallite Tob3"
"size": "Large"
"type": "Giant"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "90"
"hit_dice": "12d10+24"
"stats":
- !!int "18"
- !!int "8"
- !!int "14"
- !!int "17"
- !!int "11"
- !!int "9"
"speed": "walk 40 ft."
"senses": darkvision 60', tremorsense 60', passive Perception 12
"skillsaves":
  "perception": !!int "0"
"languages": "Giant"
"cr": "4"
"damage_immunities": "poison"
"damage_resistances": "cold, fire"
"traits":
- "desc": "While motionless indistinguishable from large geode."
  "name": "False Appearance"
- "desc": "When it dies its corpse transforms into crystal and becomes a Large object that can be attacked and destroyed (AC 17; hp 45; immunity to poison and psychic). It can no longer be affected by spells and effects that target creatures."
  "name": "Final Form"
"actions":
- "desc": "Two Crystal Limb attacks. It can replace one attack with use of Biomineralize."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, 10 ft., one target, 13 (2d8+4) piercing damage and it impales target on its limb grappling target (escape DC 14) if it is a Med or smaller creature. When this grapple ends target takes 9 (2d8) slashing damage. Crystallite has two Crystal Limbs each of which can grapple one target."
  "name": "Crystal Limb"
- "desc": "Absorbs lifeforce from one creature grappled by it. Target 14 (4d6) necrotic (DC 14 Con half). Target’s hp max is reduced by amount equal to necrotic taken and crystallite regains hp equal to that amount. Reduction lasts until target finishes a long rest. Target dies if this reduces its hp max to 0."
  "name": "Biomineralize"
"reactions":
- "desc": "When it takes 5+ damage on a single turn it can reduce its hp max by an amount equal to damage taken and gains a +1 bonus to AC. Reduction and bonus last until it finishes a long rest. Can’t increase its AC above 20 using this."
  "name": "Calcify"
source:
- [Tome of Beasts 3](https://koboldpress.com/kpstore/product/tome-of-beasts-3-for-5th-edition/)
```
