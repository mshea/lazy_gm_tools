const dataText = `
tier1
  {simple_treasure}<br>[[0-2]]x {basic_items}

tier2
  {medium_treasure}<br>[[1-3]]x {good_items}

simple_treasure
  [[50-150]] CP, [[10-30]] SP, [[5-25]] GP
  [[20-80]] CP, [[5-15]] SP<br>[[2-4]] × 10 GP {cheap_gems}
  [[30-100]] CP<br>[[1-2]]x {art_25}

medium_treasure
  [[500-1500]] GP, [[50-150]] PP
  [[800-1200]] GP<br>[[3-5]] × 50 GP {nice_gems}
  [[600-1000]] GP<br>[[1-2]]x {art_250}

cheap_gems
  Blue stones (pretty blue)
  Red stones (bright red)
  Green stones (forest green)

nice_gems
  Sapphires (deep blue)
  Rubies (crimson red)
  Emeralds (bright green)

art_25
  {condition} {race} silver cup
  {condition} {race} carved statue
  {condition} {race} gold ring

art_250
  {condition} {race} jeweled crown
  {condition} {race} silk robe
  {condition} {race} crystal orb

basic_items
  {simple_weapons} ^60
  {simple_armor} ^30
  {utility_items} ^10

good_items
  {magic_weapons} ^50
  {magic_armor} ^30
  {rare_items} ^20

simple_weapons
  Iron Sword
  Wooden Staff
  Steel Dagger

simple_armor
  Leather Armor
  Chain Mail
  Iron Shield

magic_weapons
  {magical_properties} {weapon_types}
  {magical_properties} {weapon_types}

magic_armor
  {magical_properties} {armor_types}

weapon_types
  Sword
  Axe
  Bow
  Staff

armor_types
  Leather Armor
  Chain Mail
  Plate Armor

magical_properties
  +1
  Flaming
  Frost
  Lightning

utility_items
  Healing Potion
  Rope (50 feet)
  Lantern

rare_items
  {{wizard_spells}|{cleric_spells}|{special_items}}
  Crystal of {{fire}|{ice}|{lightning}} Power
  Scroll of {wizard_spells}

wizard_spells
  Fireball
  Magic Missile
  Teleport

cleric_spells
  Heal
  Bless
  Turn Undead

special_items
  Bag of Holding
  Ring of Invisibility
  Cloak of Flying

condition
  Ornate
  Ancient
  Masterwork
  Crude
  Elegant

race
  Elven
  Dwarven
  Human
  Orcish
  Dragon
`;