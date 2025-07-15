const dataText = `
tier1
  {treasure1}<br>[[0-3]] x {magic_items_1_4}

tier2
  {treasure2}<br>[[1-3]] x {magic_items_5_10}

tier3
  {treasure3}<br>[[1-4]] x {magic_items_11_16}

tier4
  {treasure4}<br>[[1-6]] x {magic_items_17_20}

treasure1
  [[150-250]] CP, [[130-230]] SP, [[430-530]] GP
  [[150-250]] CP, [[130-230]] SP, [[330-430]] GP<br>[[8-12]] x 10 GP silver bars
  [[150-250]] CP, [[130-230]] SP, [[330-430]] GP<br>[[8-12]] x 10 GP {gem_10}
  [[150-250]] CP, [[130-230]] SP, [[280-380]] GP<br>[[8-12]] x 10 GP {gem_10}<br>[[1-3]] x {art_25}

treasure2
  [[150-250]] SP, [[1980-2780]] GP, [[150-250]] PP
  [[150-250]] SP, [[1980-2780]] GP, [[125-225]] PP<br>[[8-12]] x 25 GP silver bars
  [[150-250]] SP, [[1980-2780]] GP, [[100-200]] PP<br>[[8-12]] x 50 GP {gem_50}
  [[150-250]] SP, [[1980-2780]] GP, [[100-200]] PP<br>[[1-3]] x {art_250}

treasure3
  [[30000-36000]] GP, [[200-400]] PP
  [[27500-33500]] GP, [[200-400]] PP<br>[[8-12]] x 250 GP gold bars
  [[29000-35000]] GP, [[200-400]] PP<br>[[8-12]] x 100 GP {gem_100}
  [[27500-33500]] GP, [[200-400]] PP<br>[[8-12]] x 100 GP {gem_100}<br>[[1-3]] x {art_750}

treasure4
  [[200000-260000]] GP, [[8000-12000]] PP
  [[200000-260000]] GP, [[7000-11000]] PP<br>[[8-12]] x 1,000 GP {gem_1000}
  [[200000-260000]] GP, [[5000-9000]] PP<br>[[8-12]] x 1,000 GP {gem_1000}<br>[[2-6]] x 5,000 GP {gem_5000}
  [[200000-260000]] GP, [[6500-10500]] PP<br>[[8-12]] x 1,000 GP {gem_1000}<br>[[1-3]] x {art_2500}
  [[192500-252500]] GP, [[6500-10500]] PP<br>[[8-12]] x 1,000 GP {gem_1000}<br>[[1-3]] x {art_2500}<br>{art_7500}


gem_10
  Azurites (mottled deep blue)
  Banded agates (striped brown, blue, white, or red)
  Blue quartzs (pale blue)
  Eye agates (circles of gray, white, brown, blue, or green)
  Hematites (gray black)
  Lapis lazulis (light and dark blue with yellow flecks)
  Malachites (striated light and dark green)
  Moss agates (pink or yellow white with mossy gray or green markings)
  Obsidians (black)
  Rhodochrosites (light pink)
  Tiger eyes (brown with golden center)
  Turquoises (light blue green)

gem_50
  Bloodstones (dark gray with red flecks)
  Carnelians (orange to red brown)
  Chalcedonys (white)
  Chrysoprases (green)
  Citrines (pale yellow brown)
  Jaspers (blue, black, or brown)
  Moonstones (white with pale-blue glow)
  Onyxs (bands of black and white, or pure black or white)
  Quartzs (white, smoky gray, or yellow)
  Sardonyxs (bands of red and white)
  Star rose quartzs (rosy stone with white star-shaped center)
  Zircons (pale blue green)

gem_100
  Ambers (watery gold to rich gold)
  Amethysts (deep purple)
  Chrysoberyls (yellow green to pale green)
  Corals (crimson)
  Garnets (red, brown green, or violet)
  Jades (light green, deep green, or white)
  Jets (deep black)
  Pearls (lustrous white, yellow, or pink)
  Spinels (red, red brown, or deep green)
  Tourmalines (pale green, blue, brown, or red)

gem_1000
  Black opals (dark green with black mottling and golden flecks)
  Blue sapphires (clear blue of various tints)
  Emeralds (deep bright green)
  Fire opals (fiery red)
  Opals (pale blue with green and golden mottling)
  Star rubys (ruby with white star-shaped center)
  Star sapphires (blue sapphire with white star-shaped center)
  Yellow sapphires (fiery yellow or yellow green)

gem_5000
  Black sapphires (lustrous black with glowing highlights)
  Diamonds (blue white, canary, pink, brown, or blue)
  Jacinths (fiery orange)
  Rubys (clear red to deep crimson)
  
art_25
  {condition} {race} silver ewer (25 GP)
  {condition} {race} carved bone statuette (25 GP)
  {condition} {race} gold bracelet (25 GP)
  {condition} {race} cloth-of-gold vestments (25 GP)
  {condition} {race} black velvet mask stitched with silver thread (25 GP)
  {condition} {race} copper chalice with silver filigree (25 GP)
  {condition} {race} pair of engraved bone dice (25 GP)
  {condition} {race} handheld mirror set in a painted wooden frame (25 GP)
  {condition} {race} embroidered silk handkerchief (25 GP)
  {condition} {race} gold locket with a painted portrait inside (25 GP)

art_250
  {condition} {race} gold ring set with bloodstones (250 GP)
  {condition} {race} carved ivory statuette (250 GP)
  {condition} {race} bejeweled gold bracelet (250 GP)
  {condition} {race} silver necklace with a gemstone pendant (250 GP)
  {condition} {race} bronze crown (250 GP)
  {condition} {race} silk vestments with gold embroidery (250 GP)
  {condition} {race} well-made tapestry that is 10 feet by 10 feet (250 GP)
  {condition} {race} brass mug with jade inlay (250 GP)
  {condition} {race} box of turquoise animal figurines (250 GP)
  {condition} {race} gold birdcage with electrum filigree (250 GP)

art_750
  {condition} {race} silver chalice set with moonstones (750 GP)
  {condition} {race} bundle of sheet music representing the lost dirges of a famous composer (750 GP)
  {condition} {race} carved wooden harp with ivory inlay and zircon gems (750 GP)
  {condition} {race} gold idol (750 GP)
  {condition} {race} gold comb shaped like a dragon with red garnets as eyes (750 GP)
  {condition} {race} bottle stopper cork embossed with gold leaf and set with amethysts (750 GP)
  {condition} {race} detailed, life-sized dragonborn skull cast in electrum (750 GP)
  {condition} {race} silver and gold brooch (750 GP)
  {condition} {race} obsidian statuette with gold fittings and inlay (750 GP)
  {condition} {race} painted gold war mask (750 GP)

art_2500
  {condition} {race} fine gold chain set with a fire opal (2,500 GP)
  {condition} {race} old masterpiece painting (2,500 GP)
  {condition} {race} embroidered silk and velvet mantle set with numerous moonstones (2,500 GP)
  {condition} {race} platinum bracelet set with an emerald (2,500 GP)
  {condition} {race} embroidered glove set with jewel chips (2,500 GP)
  {condition} {race} jeweled anklet (2,500 GP)
  {condition} {race} gold music box (2,500 GP)
  {condition} {race} gold circlet set with four aquamarines (2,500 GP)
  {condition} {race} eye patch decorated with tiny blue sapphires and moonstones (2,500 GP)
  {condition} {race} a necklace string of small pink pearls (2,500 GP)

art_7500
  {condition} {race} jeweled gold crown (7,500 GP)
  {condition} {race} jeweled platinum ring (7,500 GP)
  {condition} {race} gold statuette set with rubies (7,500 GP)
  {condition} {race} gold cup set with emeralds (7,500 GP)
  {condition} {race} gold jewelry box with platinum filigree (7,500 GP)
  {condition} {race} set of gold nesting dolls (7,500 GP)
  {condition} {race} jade game board with gold playing pieces (7,500 GP)
  {condition} {race} bejeweled ivory drinking horn with gold filigree (7,500 GP)
  {condition} {race} gilded royal coach or funeral barge (7,500 GP)
  {condition} {race} ceremonial gold armor with black pearls (7,500 GP)

magic_items_1_4
  {common_themes} (common) ^54
  {uncommon_themes} (uncommon) ^37
  {rare_themes} (rare) ^9

magic_items_5_10
  {common_themes} (common) ^30
  {uncommon_themes} (uncommon) ^51
  {rare_themes} (rare) ^17
  {very_rare_themes} (very rare) ^2

magic_items_11_16
  {common_themes} (common) ^11
  {uncommon_themes} (uncommon) ^23
  {rare_themes} (rare) ^36
  {very_rare_themes} (very rare)  ^23
  {legendary_themes} (legendary) ^7
  
magic_items_17_20
  {rare_themes} (rare) ^20
  {very_rare_themes} (very rare) ^44
  {legendary_themes} (legendary) ^36

common_themes
  {Arcana_Common}
  {Armaments_Common}
  {Implements_Common}
  {Relics_Common}

uncommon_themes
  {Arcana_Uncommon}
  {Armaments_Uncommon}
  {Implements_Uncommon}
  {Relics_Uncommon}

rare_themes
  {Arcana_Rare}
  {Armaments_Rare}
  {Implements_Rare}
  {Relics_Rare}

very_rare_themes
  {Arcana_Very_Rare}
  {Armaments_Very_Rare}
  {Implements_Very_Rare}
  {Relics_Very_Rare}

legendary_themes
  {Arcana_Legendary}
  {Armaments_Legendary}
  {Implements_Legendary}
  {Relics_Legendary}

Arcana_Common
  Bead of Nourishment
  Bead of Refreshment
  Candle of the Deep
  Cloak of Billowing
  Cloak of Many Fashions
  Clothes of Mending
  Dark Shard Amulet
  Enduring Spellbook
  Ersatz Eye
  Hat of Vermin
  Hat of Wizardry
  Heward’s Handy Spice Pouch
  Horn of Silent Alarm
  Instrument of Illusions
  Instrument of Scribing
  Lock of Trickery
  Mystery Key
  Orb of Direction
  Orb of Time
  Perfume of Bewitching
  Pipe of Smoke Monsters
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/potion-of-climbing.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/potion-of-climbing.html">Potion of Climbing</a></a>
  Potion of Comprehension
  Pot of Awakening
  Prosthetic Limb
  Rival Coin
  Rope of Mending
  Ruby of the War Mage
  Spell Scroll ({{wizard_cantrip}|{cleric_cantrip}|{level_1_wizard_spell}|{level_1_cleric_spell}})
  Staff of Adornment
  Staff of Birdcalls
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/staff-of-power.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/staff-of-power.html">Staff of Flowers</a></a>
  Talking Doll
  Tankard of Sobriety
  Wand of Conducting
  Wand of Pyrotechnics
  
Arcana_Uncommon
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/amulet-of-proof-against-detection-and-location.html">Amulet of Proof against Detection and Location</a>
  Baba Yaga’s Dancing Broom
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/bag-of-holding.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/bag-of-holding.html">Bag of Holding</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/bag-of-tricks.html">Bag of Tricks</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/brooch-of-shielding.html">Brooch of Shielding</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/broom-of-flying.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/broom-of-flying.html">Broom of Flying</a></a>
  Cap of Water Breathing
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/circlet-of-blasting.html">Circlet of Blasting</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/cloak-of-protection.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/cloak-of-protection.html">Cloak of Protection</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/cloak-of-the-manta-ray.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/cloak-of-the-manta-ray.html">Cloak of the Manta Ray</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/decanter-of-endless-water.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/decanter-of-endless-water.html">Decanter of Endless Water</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/deck-of-illusions.html">Deck of Illusions</a>
  Driftglobe
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/dust-of-disappearance.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/dust-of-disappearance.html">Dust of Disappearance</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/dust-of-dryness.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/dust-of-dryness.html">Dust of Dryness</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/dust-of-sneezing-and-choking.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/dust-of-sneezing-and-choking.html">Dust of Sneezing and Choking</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/elemental-gem.html">Elemental Gem</a>
  Enspelled Staff ({{wizard_cantrip}|{cleric_cantrip}|{level_1_wizard_spell}|{level_1_cleric_spell}})
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/eversmoking-bottle.html">Eversmoking Bottle</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/eyes-of-charming.html">Eyes of Charming</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/eyes-of-minute-seeing.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/eyes-of-minute-seeing.html">Eyes of Minute Seeing</a></a>
  Figurine of Wondrous Power (silver raven)
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/gem-of-brightness.html">Gem of Brightness</a>
  Hag Eye
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/hat-of-disguise.html">Hat of Disguise</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/headband-of-intellect.html">Headband of Intellect</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/helm-of-comprehending-languages.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/helm-of-comprehending-languages.html">Helm of Comprehending Languages</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/helm-of-telepathy.html">Helm of Telepathy</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/immovable-rod.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/immovable-rod.html">Immovable Rod</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/lantern-of-revealing.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/lantern-of-revealing.html">Lantern of Revealing</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/medallion-of-thoughts.html">Medallion of Thoughts</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/mithral-armor.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/mithral-armor.html">Mithral {Armor}</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/necklace-of-adaptation.html">Necklace of Adaptation</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/oil-of-slipperiness.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/oil-of-slipperiness.html">Oil of Slipperiness</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/pearl-of-power.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/pearl-of-power.html">Pearl of Power</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/periapt-of-health.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/periapt-of-health.html">Periapt of Health</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/philter-of-love.html">Philter of Love</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/potion-of-animal-friendship.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/potion-of-animal-friendship.html">Potion of Animal Friendship</a></a>
  Potion of Fire Breath
  Potion of Giant Strength (hill)
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/potion-of-growth.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/potion-of-growth.html">Potion of Growth</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/potion-of-poison.html">Potion of Poison</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/potion-of-resistance.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/potion-of-resistance.html">Potion of Resistance</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/potion-of-water-breathing.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/potion-of-water-breathing.html">Potion of Water Breathing</a></a>
  Quaal’s Feather Token ({anchor|fan|tree})
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/ring-of-mind-shielding.html">Ring of Mind Shielding</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/robe-of-useful-items.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/robe-of-useful-items.html">Robe of Useful Items</a></a>
  Rod of the Pact Keeper
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/rope-of-climbing.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/rope-of-climbing.html">Rope of Climbing</a></a>
  Saddle of the Cavalier
  Sending Stones
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/slippers-of-spider-climbing.html">Slippers of Spider Climbing</a>
  Spell Scroll ({{level_2_wizard_spell}|{level_2_cleric_spell}|{level_3_wizard_spell}|{level_3_cleric_spell}})
  Staff of the Adder
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/staff-of-the-python.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/staff-of-the-python.html">Staff of the Python</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/wand-of-magic-detection.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/wand-of-magic-detection.html">Wand of Magic Detection</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/wand-of-magic-missiles.html">Wand of Magic Missiles</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/wand-of-secrets.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/wand-of-secrets.html">Wand of Secrets</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/wand-of-the-war-mage-1-2-or-3.html">Wand of the War Mage, +1</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/wand-of-web.html">Wand of Web</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/wind-fan.html">Wind Fan</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/winged-boots.html">Winged Boots</a>

Arcana_Rare
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/bag-of-beans.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/bag-of-beans.html">Bag of Beans</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/bead-of-force.html">Bead of Force</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/bowl-of-commanding-water-elementals.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/bowl-of-commanding-water-elementals.html">Bowl of Commanding Water Elementals</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/bracers-of-defense.html">Bracers of Defense</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/brazier-of-commanding-fire-elementals.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/brazier-of-commanding-fire-elementals.html">Brazier of Commanding Fire Elementals</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/cape-of-the-mountebank.html">Cape of the Mountebank</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/censer-of-controlling-air-elementals.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/censer-of-controlling-air-elementals.html">Censer of Controlling Air Elementals</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/chime-of-opening.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/chime-of-opening.html">Chime of Opening</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/cloak-of-displacement.html">Cloak of Displacement</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/cloak-of-the-bat.html">Cloak of the Bat</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/cube-of-force.html">Cube of Force</a>
  Cube of Summoning
  Daern’s Instant Fortress
  Enspelled Staff ({{level_2_wizard_spell}|{level_2_cleric_spell}|{level_3_wizard_spell}|{level_3_cleric_spell}})
  Figurine of Wondrous Power ({bronze griffon|ebony fly|golden lions|ivory goats|marble elephant|onyx dog|serpentine owl})
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/folding-boat.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/folding-boat.html">Folding Boat</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/gem-of-seeing.html">Gem of Seeing</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/helm-of-teleportation.html">Helm of Teleportation</a>
  Heward’s Handy Haversack
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/horseshoes-of-speed.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/horseshoes-of-speed.html">Horseshoes of Speed</a></a>
  Ioun Stone (reserve)
  Iron Bands of Bilarro
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/mantle-of-spell-resistance.html">Mantle of Spell Resistance</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/necklace-of-fireballs.html">Necklace of Fireballs</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/oil-of-etherealness.html">Oil of Etherealness</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/portable-hole.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/portable-hole.html">Portable Hole</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/potion-of-clairvoyance.html">Potion of Clairvoyance</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/potion-of-diminution.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/potion-of-diminution.html">Potion of Diminution</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/potion-of-gaseous-form.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/potion-of-gaseous-form.html">Potion of Gaseous Form</a></a>
  Potion of Giant Strength (fire)
  Potion of Giant Strength ({frost|stone})
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/potion-of-heroism.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/potion-of-heroism.html">Potion of Heroism</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/potion-of-invisibility.html">Potion of Invisibility</a>
  Potion of Invulnerability
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/potion-of-mind-reading.html">Potion of Mind Reading</a>
  Quaal’s Feather Token ({bird|swan boat|whip})
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/ring-of-feather-falling.html">Ring of Feather Falling</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/ring-of-spell-storing.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/ring-of-spell-storing.html">Ring of Spell Storing</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/ring-of-x-ray-vision.html">Ring of X_ray Vision</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/robe-of-eyes.html">Robe of Eyes</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/rod-of-rulership.html">Rod of Rulership</a>
  Rod of the Pact Keeper, +2
  Scroll of Protection
  Spell Scroll ({{level_4_wizard_spell}|{level_4_cleric_spell}|{level_5_wizard_spell}|{level_5_cleric_spell}})
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/staff-of-charming.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/staff-of-charming.html">Staff of Charming</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/staff-of-swarming-insects.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/staff-of-swarming-insects.html">Staff of Swarming Insects</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/staff-of-withering.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/staff-of-withering.html">Staff of Withering</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/stone-of-controlling-earth-elementals.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/stone-of-controlling-earth-elementals.html">Stone of Controlling Earth Elementals</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/wand-of-binding.html">Wand of Binding</a>
  Wand of Fear
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/wand-of-fireballs.html">Wand of Fireballs</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/wand-of-lightning-bolts.html">Wand of Lightning Bolts</a>
  Wand of the War Mage, +2
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/wand-of-wonder.html">Wand of Wonder</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/wings-of-flying.html">Wings of Flying</a>
  
Arcana_Very_Rare
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/amulet-of-the-planes.html">Amulet of the Planes</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/bag-of-devouring.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/bag-of-devouring.html">Bag of Devouring</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/carpet-of-flying.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/carpet-of-flying.html">Carpet of Flying</a></a>
  Cauldron of Rebirth
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/cloak-of-arachnida.html">Cloak of Arachnida</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/crystal-ball.html">Crystal Ball</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/dancing-sword.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/dancing-sword.html">Dancing Sword</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/efreeti-bottle.html">Efreeti Bottle</a>
  Enspelled Staff ({{level_4_wizard_spell}|{level_4_cleric_spell}|{level_5_wizard_spell}|{level_5_cleric_spell}})
  Figurine of Wondrous Power (obsidian steed)
  Hat of Many Spells
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/helm-of-brilliance.html">Helm of Brilliance</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/horseshoes-of-a-zephyr.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/horseshoes-of-a-zephyr.html">Horseshoes of a Zephyr</a></a>
  Ioun Stone ({absorption|fortitude|intellect|leadership})
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/manual-of-golems.html">Manual of Golems</a> ({clay|flesh|iron|stone})
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/mirror-of-life-trapping.html">Mirror of Life Trapping</a>
  Nolzur’s Marvelous Pigments
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/oil-of-sharpness.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/oil-of-sharpness.html">Oil of Sharpness</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/potion-of-flying.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/potion-of-flying.html">Potion of Flying</a></a>
  Potion of Giant Strength (cloud)
  Potion of Greater Invisibility
  Potion of Longevity
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/potion-of-speed.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/potion-of-speed.html">Potion of Speed</a></a>
  Potion of Vitality
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/ring-of-regeneration.html">Ring of Regeneration</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/ring-of-shooting-stars.html">Ring of Shooting Stars</a>
  Ring of Telekinesis
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/robe-of-scintillating-colors.html">Robe of Scintillating Colors</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/robe-of-stars.html">Robe of Stars</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/rod-of-absorption.html">Rod of Absorption</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/rod-of-security.html">Rod of Security</a>
  Rod of the Pact Keeper, +3
  Spell Scroll ({{level_6_wizard_spell}|{level_6_cleric_spell}|{level_7_wizard_spell}|{level_7_cleric_spell}|{level_8_wizard_spell}|{level_8_cleric_spell}})
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/staff-of-fire.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/staff-of-fire.html">Staff of Fire</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/staff-of-frost.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/staff-of-frost.html">Staff of Frost</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/staff-of-power.html">Staff of Power</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/staff-of-thunder-and-lightning.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/staff-of-thunder-and-lightning.html">Staff of Thunder and Lightning</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/tome-of-clear-thought.html">Tome of Clear Thought</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/wand-of-polymorph.html">Wand of Polymorph</a>
  Wand of the War Mage, +3
  
Arcana_Legendary
  Apparatus of Kwalish
  Cloak of Invisibility
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/crystal-ball-of-mind-reading.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/crystal-ball.html">Crystal Ball</a> of Mind Reading</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/crystal-ball-of-telepathy.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/crystal-ball.html">Crystal Ball</a> of Telepathy</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/crystal-ball-of-true-seeing.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/crystal-ball.html">Crystal Ball</a> of True Seeing</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/cubic-gate.html">Cubic Gate</a>
  Deck of Many Things
  Enspelled Staff ({{level_6_wizard_spell}|{level_6_cleric_spell}|{level_7_wizard_spell}|{level_7_cleric_spell}|{level_8_wizard_spell}|{level_8_cleric_spell}})
  Ioun Stone ({greater absorption|mastery|regeneration})
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/iron-flask.html">Iron Flask</a>
  Potion of Storm Giant Strength (storm)
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/ring-of-djinni-summoning.html">Ring of Djinni Summoning</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/ring-of-elemental-command.html">Ring of Elemental Command</a> ({air|earth|fire|water})
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/potion-of-invisibility.html">Ring of Invisibility</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/ring-of-spell-storing.html">Ring of Spell Turning</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/ring-of-three-wishes.html">Ring of Three Wishes</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/robe-of-the-archmagi.html">Robe of the Archmagi</a>
  Scroll of Titan Summoning
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/sovereign-glue.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/sovereign-glue.html">Sovereign Glue</a></a>
  Spell Scroll ({{level_9_wizard_spell}|{level_9_cleric_spell}})
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/sphere-of-annihilation.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/sphere-of-annihilation.html">Sphere of Annihilation</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/staff-of-the-magi.html">Staff of the Magi</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/talisman-of-the-sphere.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/talisman-of-the-sphere.html">Talisman of the Sphere</a></a>
  Tome of the Stilled Tongue
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/universal-solvent.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/universal-solvent.html">Universal Solvent</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/well-of-many-worlds.html">Well of Many Worlds</a>
  
Armaments_Common
  {Armor} of Gleaming
  Cast-Off {Armor}
  Dread Helm
  Moon-Touched Sword
  Shield of Expression
  Silvered {Weapon}
  Smoldering {Armor}
  Sylvan Talon
  Veteran’s Cane
  Walloping {Ammunition}

Armaments_Uncommon
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/adamantine-armor.html">Adamantine {Armor}</a>
  Adamantine {Weapon}
  {Ammunition}, +1
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/bracers-of-archery.html">Bracers of Archery</a>
  Enspelled {Armor} ({{wizard_cantrip}|{cleric_cantrip}|{level_1_wizard_spell}|{level_1_cleric_spell}})
  Enspelled {Weapon} ({{wizard_cantrip}|{cleric_cantrip}|{level_1_wizard_spell}|{level_1_cleric_spell}})
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/gauntlets-of-ogre-power.html">Gauntlets of Ogre Power</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/javelin-of-lightning.html">Javelin of Lightning</a>
  Mariner’s {Armor}
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/mithral-armor.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/mithral-armor.html">Mithral {Armor}</a></a>
  Potion of Giant Strength (hill)
  Potion of Pugilism
  Quiver of Ehlonna
  Saddle of the Cavalier
  Sentinel Shield
  Shield, +1
  Sword of Vengeance
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/trident-of-fish-command.html">Trident of Fish Command</a>
  {Weapon}, +1
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/weapon-of-warning.html">{Weapon} of Warning</a>
  Wraps of Unarmed Power, +1

Armaments_Rare
  {Ammunition}, +2
  {Armor}, +1
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/armor-of-resistance.html">{Armor} of Resistance</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/armor-of-invulnerability.html">{Armor} of Vulnerability</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/arrow-catching-shield.html">Arrow_Catching Shield</a>
  Belt of Giant Strength (hill)
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/berserker-axe.html">Berserker Axe</a>
  Daern’s Instant Fortress
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/dagger-of-venom.html">Dagger of Venom</a>
  Dragon Slayer {Weapon}
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/elven-chain.html">Elven Chain</a>
  Enspelled {Armor} ({{level_2_wizard_spell}|{level_2_cleric_spell}|{level_3_wizard_spell}|{level_3_cleric_spell}})
  Enspelled {Weapon} ({{level_2_wizard_spell}|{level_2_cleric_spell}|{level_3_wizard_spell}|{level_3_cleric_spell}})
  Flame Tongue {Weapon}
  Giant Slayer {Weapon}
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/horn-of-blasting.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/horn-of-blasting.html">Horn of Blasting</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/horn-of-valhalla.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/horn-of-valhalla.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/horn-of-valhalla.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/horn-of-valhalla.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/horn-of-valhalla.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/horn-of-valhalla.html">Horn of Valhalla</a></a></a></a></a></a> (brass or silver)
  Ioun Stone (protection)
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/mace-of-disruption.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/mace-of-disruption.html">Mace of Disruption</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/mace-of-smiting.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/mace-of-smiting.html">Mace of Smiting</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/mace-of-terror.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/mace-of-terror.html">Mace of Terror</a></a>
  Potion of Giant Strength (fire)
  Potion of Giant Strength (frost or stone)
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/potion-of-heroism.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/potion-of-heroism.html">Potion of Heroism</a></a>
  Potion of Invulnerability
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/ring-of-protection.html">Ring of Protection</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/ring-of-the-ram.html">Ring of the Ram</a>
  Shield, +2
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/shield-of-missile-attraction.html">Shield of Missile Attraction</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/sun-blade.html">Sun Blade</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/sword-of-life-stealing.html">Sword of Life Stealing</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/sword-of-wounding.html">Sword of Wounding</a>
  Tentacle Rod
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/vicious-weapon.html">Vicious {Weapon}</a>
  {Weapon}, +2
  Wraps of Unarmed Power, +2

Armaments_Very_Rare
  {Ammunition}, +3
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/ammunition-of-slaying.html">{Ammunition} of Slaying</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/animated-shield.html">Animated Shield</a>
  {Armor}, +2
  Belt of Giant Strength (fire)
  Belt of Giant Strength (frost or stone)
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/dancing-sword.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/dancing-sword.html">Dancing Sword</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/demon-armor.html">Demon {Armor}</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/dragon-scale-mail.html">Dragon Scale Mail</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/dwarven-plate.html">Dwarven Plate</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/dwarven-thrower.html">Dwarven Thrower</a>
  Energy Bow
  Enspelled {Armor} ({{level_4_wizard_spell}|{level_4_cleric_spell}|{level_5_wizard_spell}|{level_5_cleric_spell}})
  Enspelled {Weapon} ({{level_4_wizard_spell}|{level_4_cleric_spell}|{level_5_wizard_spell}|{level_5_cleric_spell}})
  Executioner’s Axe
  Frost Brand {Weapon}
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/horn-of-valhalla.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/horn-of-valhalla.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/horn-of-valhalla.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/horn-of-valhalla.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/horn-of-valhalla.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/horn-of-valhalla.html">Horn of Valhalla</a></a></a></a></a></a> (bronze)
  Ioun Stone (strength)
  Lute of Thunderous Thumping
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/manual-of-gainful-exercise.html">Manual of Gainful Exercise</a>
  Nine Lives Stealer {Weapon}
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/oathbow.html">Oathbow</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/oil-of-sharpness.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/oil-of-sharpness.html">Oil of Sharpness</a></a>
  Potion of Giant Strength (cloud)
  Quarterstaff of the Acrobat
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/scimitar-of-speed.html">Scimitar of Speed</a>
  Shield, +3
  Shield of the Cavalier
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/spellguard-shield.html">Spellguard Shield</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/sword-of-sharpness.html">Sword of Sharpness</a>
  Thunderous Greatclub
  {Weapon}, +3
  Wraps of Unarmed Power, +3
  
Armaments_Legendary
  {Armor}, +3
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/armor-of-invulnerability.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/armor-of-invulnerability.html">{Armor} of Invulnerability</a></a>
  Belt of Giant Strength (cloud)
  Belt of Giant Strength (storm)
  Defender {Weapon}
  Efreeti Chain
  Enspelled {Armor} ({{level_6_wizard_spell}|{level_6_cleric_spell}|{level_7_wizard_spell}|{level_7_cleric_spell}|{level_8_wizard_spell}|{level_8_cleric_spell}})
  Enspelled {Weapon} ({{level_6_wizard_spell}|{level_6_cleric_spell}|{level_7_wizard_spell}|{level_7_cleric_spell}|{level_8_wizard_spell}|{level_8_cleric_spell}})
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/hammer-of-thunderbolts.html">Hammer of Thunderbolts</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/holy-avenger.html">Holy Avenger</a> {Weapon}
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/horn-of-valhalla.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/horn-of-valhalla.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/horn-of-valhalla.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/horn-of-valhalla.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/horn-of-valhalla.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/horn-of-valhalla.html">Horn of Valhalla</a></a></a></a></a></a> (iron)
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/luck-blade.html">Luck Blade</a>
  Moonblade
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/plate-armor-of-etherealness.html">Plate Armor of Etherealness</a>
  Potion of Giant Strength (storm)
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/rod-of-lordly-might.html">Rod of Lordly Might</a>
  Sword of Answering
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/vorpal-sword.html">Vorpal Sword</a>
  
Implements_Common
  Bead of Nourishment
  Bead of Refreshment
  Boots of False Tracks
  Candle of the Deep
  Charlatan’s Die
  Cloak of Many Fashions
  Clockwork Amulet
  Ear Horn of Hearing
  Ersatz Eye
  Heward’s Handy Spice Pouch
  Horn of Silent Alarm
  Instrument of Illusions
  Instrument of Scribing
  Lock of Trickery
  Moon Touched Sword
  Mystery Key
  Orb of Direction
  Orb of Time
  Perfume of Bewitching
  Pipe of Smoke Monsters
  Pole of Angling
  Pole of Collapsing
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/potion-of-climbing.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/potion-of-climbing.html">Potion of Climbing</a></a>
  Potion of Comprehension
  Potion of Healing
  Prosthetic Limb
  Rope of Mending
  Staff of Birdcalls
  Sylvan Talon
  Talking Doll
  Tankard of Sobriety
  Veteran’s Cane
  Walloping {Ammunition}
  Wand of Conducting
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/wand-of-enemy-detection.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/wand-of-enemy-detection.html">Wand of Enemy Detection</a></a>
  Wand of Pyrotechnics
  
Implements_Uncommon
  Alchemy Jug
  {Ammunition}, +1
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/bag-of-holding.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/bag-of-holding.html">Bag of Holding</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/boots-of-elvenkind.html">Boots of Elvenkind</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/boots-of-striding-and-springing.html">Boots of Striding and Springing</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/boots-of-the-winterlands.html">Boots of the Winterlands</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/broom-of-flying.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/broom-of-flying.html">Broom of Flying</a></a>
  Cap of Water Breathing
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/cloak-of-elvenkind.html">Cloak of Elvenkind</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/cloak-of-protection.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/cloak-of-protection.html">Cloak of Protection</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/cloak-of-the-manta-ray.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/cloak-of-the-manta-ray.html">Cloak of the Manta Ray</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/decanter-of-endless-water.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/decanter-of-endless-water.html">Decanter of Endless Water</a></a>
  Driftglobe
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/dust-of-disappearance.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/dust-of-disappearance.html">Dust of Disappearance</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/dust-of-dryness.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/dust-of-dryness.html">Dust of Dryness</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/dust-of-sneezing-and-choking.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/dust-of-sneezing-and-choking.html">Dust of Sneezing and Choking</a></a>
  Enspelled {Weapon} ()
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/eyes-of-minute-seeing.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/eyes-of-minute-seeing.html">Eyes of Minute Seeing</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/eyes-of-the-eagle.html">Eyes of the Eagle</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/gloves-of-missile-snaring.html">Gloves of Missile Snaring</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/gloves-of-swimming-and-climbing.html">Gloves of Swimming and Climbing</a>
  Gloves of Thievery
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/goggles-of-night.html">Goggles of Night</a>
  Hag Eye
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/helm-of-comprehending-languages.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/helm-of-comprehending-languages.html">Helm of Comprehending Languages</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/immovable-rod.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/immovable-rod.html">Immovable Rod</a></a>
  Instrument of the Bards ({Doss lute|Fochlucan bandore|Mac_Fuirmidh cittern})
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/lantern-of-revealing.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/lantern-of-revealing.html">Lantern of Revealing</a></a>
  Nature’s Mantle
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/oil-of-slipperiness.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/oil-of-slipperiness.html">Oil of Slipperiness</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/pipes-of-haunting.html">Pipes of Haunting</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/pipes-of-the-sewers.html">Pipes of the Sewers</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/potion-of-growth.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/potion-of-growth.html">Potion of Growth</a></a>
  Potion of Healing (greater)
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/potion-of-water-breathing.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/potion-of-water-breathing.html">Potion of Water Breathing</a></a>
  Quaal’s Feather Token ({anchor|fan|tree})
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/ring-of-jumping.html">Ring of Jumping</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/ring-of-swimming.html">Ring of Swimming</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/ring-of-warmth.html">Ring of Warmth</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/robe-of-useful-items.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/robe-of-useful-items.html">Robe of Useful Items</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/rope-of-climbing.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/rope-of-climbing.html">Rope of Climbing</a></a>
  Stone of Good Luck
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/wand-of-secrets.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/wand-of-secrets.html">Wand of Secrets</a></a>
  
Implements_Rare
  {Ammunition}, +2
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/bag-of-beans.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/bag-of-beans.html">Bag of Beans</a></a>
  Belt of Dwarvenkind
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/boots-of-levitation.html">Boots of Levitation</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/boots-of-speed.html">Boots of Speed</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/chime-of-opening.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/chime-of-opening.html">Chime of Opening</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/dimensional-shackles.html">Dimensional Shackles</a>
  Enspelled {Weapon} ({{level_2_wizard_spell}|{level_2_cleric_spell}|{level_3_wizard_spell}|{level_3_cleric_spell}})
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/folding-boat.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/folding-boat.html">Folding Boat</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/glamoured-studded-leather.html">Glamoured Studded Leather</a>
  Heward’s Handy Haversack
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/horseshoes-of-speed.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/horseshoes-of-speed.html">Horseshoes of Speed</a></a>
  Instrument of the Bards ({Canaith mandolin|Cli lyre})
  Ioun Stone (awareness)
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/portable-hole.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/portable-hole.html">Portable Hole</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/potion-of-diminution.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/potion-of-diminution.html">Potion of Diminution</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/potion-of-gaseous-form.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/potion-of-gaseous-form.html">Potion of Gaseous Form</a></a>
  Potion of Healing (superior)
  Quaal’s Feather Token ({bird|swan boat|whip})
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/ring-of-evasion.html">Ring of Evasion</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/ring-of-free-action.html">Ring of Free Action</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/rope-of-entanglement.html">Rope of Entanglement</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/staff-of-healing.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/staff-of-healing.html">Staff of Healing</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/wand-of-enemy-detection.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/wand-of-enemy-detection.html">Wand of Enemy Detection</a></a>
  
Implements_Very_Rare
  {Ammunition}, +3
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/bag-of-devouring.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/bag-of-devouring.html">Bag of Devouring</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/carpet-of-flying.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/carpet-of-flying.html">Carpet of Flying</a></a>
  Enspelled {Weapon} ({{level_4_wizard_spell}|{level_4_cleric_spell}|{level_5_wizard_spell}|{level_5_cleric_spell}})
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/horseshoes-of-a-zephyr.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/horseshoes-of-a-zephyr.html">Horseshoes of a Zephyr</a></a>
  Instrument of the Bards (Anstruth harp)
  Ioun Stone (agility)
  Lute of Thunderous Thumping
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/manual-of-quickness-of-action.html">Manual of Quickness of Action</a>
  Nolzur’s Marvelous Pigments
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/potion-of-flying.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/potion-of-flying.html">Potion of Flying</a></a>
  Potion of Healing (supreme)
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/potion-of-speed.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/potion-of-speed.html">Potion of Speed</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/tome-of-leadership-and-influence.html">Tome of Leadership and Influence</a>
  
Implements_Legendary
  Enspelled {Weapon} ({{level_6_wizard_spell}|{level_6_cleric_spell}|{level_7_wizard_spell}|{level_7_cleric_spell}|{level_8_wizard_spell}|{level_8_cleric_spell}})
  Instrument of the Bards (Ollamh harp)
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/sovereign-glue.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/sovereign-glue.html">Sovereign Glue</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/sphere-of-annihilation.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/sphere-of-annihilation.html">Sphere of Annihilation</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/talisman-of-the-sphere.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/talisman-of-the-sphere.html">Talisman of the Sphere</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/universal-solvent.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/universal-solvent.html">Universal Solvent</a></a>
  
Relics_Common
  Ear Horn of Hearing
  Potion of Healing
  Pot of Awakening
  Ruby of the War Mage
  Shield of Expression
  Smoldering {Armor}
  Spell Scroll ({{wizard_cantrip}|{cleric_cantrip}|{level_1_wizard_spell}|{level_1_cleric_spell}})
  Staff of Adornment
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/staff-of-power.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/staff-of-power.html">Staff of Flowers</a></a>

Relics_Uncommon
  Enspelled Staff ({{wizard_cantrip}|{cleric_cantrip}|{level_1_wizard_spell}|{level_1_cleric_spell}})
  Keoghtom’s Ointment
  Mariner’s {Armor}
  Nature’s Mantle
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/pearl-of-power.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/pearl-of-power.html">Pearl of Power</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/periapt-of-health.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/periapt-of-health.html">Periapt of Health</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/periapt-of-wound-closure.html">Periapt of Wound Closure</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/potion-of-animal-friendship.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/potion-of-animal-friendship.html">Potion of Animal Friendship</a></a>
  Potion of Healing (greater)
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/potion-of-resistance.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/potion-of-resistance.html">Potion of Resistance</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/ring-of-water-walking.html">Ring of Water Walking</a>
  Sending Stones
  Spell Scroll ({{level_2_wizard_spell}|{level_2_cleric_spell}|{level_3_wizard_spell}|{level_3_cleric_spell}})
  Staff of the Adder
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/staff-of-the-python.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/staff-of-the-python.html">Staff of the Python</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/wand-of-magic-detection.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/wand-of-magic-detection.html">Wand of Magic Detection</a></a>
  Wand of the War Mage, +1

Relics_Rare
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/amulet-of-health.html">Amulet of Health</a>
  {Armor}, +1
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/bowl-of-commanding-water-elementals.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/bowl-of-commanding-water-elementals.html">Bowl of Commanding Water Elementals</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/brazier-of-commanding-fire-elementals.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/brazier-of-commanding-fire-elementals.html">Brazier of Commanding Fire Elementals</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/censer-of-controlling-air-elementals.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/censer-of-controlling-air-elementals.html">Censer of Controlling Air Elementals</a></a>
  Elixir of Health
  Enspelled Staff ({{level_2_wizard_spell}|{level_2_cleric_spell}|{level_3_wizard_spell}|{level_3_cleric_spell}})
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/horn-of-blasting.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/horn-of-blasting.html">Horn of Blasting</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/horn-of-valhalla.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/horn-of-valhalla.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/horn-of-valhalla.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/horn-of-valhalla.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/horn-of-valhalla.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/horn-of-valhalla.html">Horn of Valhalla</a></a></a></a></a></a> (brass or silver)
  Ioun Stone (reserve or sustenance)
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/mace-of-disruption.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/mace-of-disruption.html">Mace of Disruption</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/mace-of-smiting.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/mace-of-smiting.html">Mace of Smiting</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/mace-of-terror.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/mace-of-terror.html">Mace of Terror</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/necklace-of-prayer-beads.html">Necklace of Prayer Beads</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/periapt-of-proof-against-poison.html">Periapt of Proof against Poison</a>
  Potion of Healing (superior)
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/ring-of-animal-influence.html">Ring of Animal Influence</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/ring-of-resistance.html">Ring of Resistance</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/ring-of-spell-storing.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/ring-of-spell-storing.html">Ring of Spell Storing</a></a>
  Scroll of Protection
  Spell Scroll ({{level_4_wizard_spell}|{level_4_cleric_spell}|{level_5_wizard_spell}|{level_5_cleric_spell}})
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/staff-of-charming.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/staff-of-charming.html">Staff of Charming</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/staff-of-healing.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/staff-of-healing.html">Staff of Healing</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/staff-of-swarming-insects.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/staff-of-swarming-insects.html">Staff of Swarming Insects</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/staff-of-the-woodlands.html">Staff of the Woodlands</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/staff-of-withering.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/staff-of-withering.html">Staff of Withering</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/stone-of-controlling-earth-elementals.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/stone-of-controlling-earth-elementals.html">Stone of Controlling Earth Elementals</a></a>
  Tentacle Rod
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/wand-of-paralysis.html">Wand of Paralysis</a>
  Wand of the War Mage, +2

Relics_Very_Rare
  {Armor}, +2
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/candle-of-invocation.html">Candle of Invocation</a>
  Cauldron of Rebirth
  Enspelled Staff ({{level_4_wizard_spell}|{level_4_cleric_spell}|{level_5_wizard_spell}|{level_5_cleric_spell}})
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/horn-of-valhalla.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/horn-of-valhalla.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/horn-of-valhalla.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/horn-of-valhalla.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/horn-of-valhalla.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/horn-of-valhalla.html">Horn of Valhalla</a></a></a></a></a></a> (bronze)
  Ioun Stone (insight)
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/manual-of-bodily-health.html">Manual of Bodily Health</a>
  Potion of Healing (supreme)
  Potion of Vitality
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/rod-of-alertness.html">Rod of Alertness</a>
  Spell Scroll ({{level_6_wizard_spell}|{level_6_cleric_spell}|{level_7_wizard_spell}|{level_7_cleric_spell}|{level_8_wizard_spell}|{level_8_cleric_spell}})
  Spirit Board
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/staff-of-fire.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/staff-of-fire.html">Staff of Fire</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/staff-of-frost.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/staff-of-frost.html">Staff of Frost</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/staff-of-striking.html">Staff of Striking</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/staff-of-thunder-and-lightning.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/staff-of-thunder-and-lightning.html">Staff of Thunder and Lightning</a></a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/tome-of-understanding.html">Tome of Understanding</a>
  Wand of the War Mage, +3

Relics_Legendary
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/armor-of-invulnerability.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/armor-of-invulnerability.html">{Armor} of Invulnerability</a></a>
  {Armor}, +3
  Enspelled Staff ({{level_6_wizard_spell}|{level_6_cleric_spell}|{level_7_wizard_spell}|{level_7_cleric_spell}|{level_8_wizard_spell}|{level_8_cleric_spell}})
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/holy-avenger.html">Holy Avenger</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/horn-of-valhalla.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/horn-of-valhalla.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/horn-of-valhalla.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/horn-of-valhalla.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/horn-of-valhalla.html"><a href="../../magic_items/html/5.2_srd_(d&d_2024)/horn-of-valhalla.html">Horn of Valhalla</a></a></a></a></a></a> (iron)
  Rod of Resurrection
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/scarab-of-protection.html">Scarab of Protection</a>
  Scroll of Titan Summoning
  Spell Scroll ({{level_9_wizard_spell}|{level_9_cleric_spell}})
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/talisman-of-pure-good.html">Talisman of Pure Good</a>
  <a href="../../magic_items/html/5.2_srd_(d&d_2024)/talisman-of-ultimate-evil.html">Talisman of Ultimate Evil</a>

wizard_cantrip
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/acid-splash.html">Acid Splash</a></em>
  <em>Blade Ward</em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/chill-touch.html">Chill Touch</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/dancing-lights.html">Dancing Lights</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/elementalism.html">Elementalism</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/fire-bolt.html">Fire Bolt</a></em>
  <em>Friends</em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/blight.html">Light</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/mage-hand.html">Mage Hand</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/mending.html">Mending</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/message.html">Message</a></em>
  <em>Mind Sliver</em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/minor-illusion.html">Minor Illusion</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/poison-spray.html">Poison Spray</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/prestidigitation.html">Prestidigitation</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/ray-of-frost.html">Ray of Frost</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/shocking-grasp.html">Shocking Grasp</a></em>
  <em>Thunderclap</em>
  <em>Toll the Dead</em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/true-strike.html">True Strike</a></em>

level_1_wizard_spell
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/alarm.html">Alarm</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/burning-hands.html">Burning Hands</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/charm-person.html">Charm Person</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/chromatic-orb.html">Chromatic Orb</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/color-spray.html">Color Spray</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/comprehend-languages.html">Comprehend Languages</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/detect-magic.html">Detect Magic</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/disguise-self.html">Disguise Self</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/expeditious-retreat.html">Expeditious Retreat</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/false-life.html">False Life</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/feather-fall.html">Feather Fall</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/find-familiar.html">Find Familiar</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/fog-cloud.html">Fog Cloud</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/grease.html">Grease</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/ice-knife.html">Ice Knife</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/identify.html">Identify</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/illusory-script.html">Illusory Script</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/jump.html">Jump</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/longstrider.html">Longstrider</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/mage-armor.html">Mage Armor</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/magic-missile.html">Magic Missile</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/protection-from-evil-and-good.html">Protection from Evil and Good</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/ray-of-sickness.html">Ray of Sickness</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/shield.html">Shield</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/silent-image.html">Silent Image</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/sleep.html">Sleep</a></em>
  <em>Tasha’s Hideous Laughter</em>
  <em>Tenser’s Floating Disk</em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/thunderwavea.html">Thunderwave</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/unseen-servant.html">Unseen Servant</a></em>
  <em>Witch Bolt</em>


level_2_wizard_spell
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/alter-self.html">Alter Self</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/arcane-lock.html">Arcane Lock</a></em>
  <em>Arcane Vigor</em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/augury.html">Augury</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/blindnessdeafness.html">Blindness/Deafness</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/blur.html">Blur</a></em>
  <em>Cloud of Daggers</em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/continual-flame.html">Continual Flame</a></em>
  <em>Crown of Madness</em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/darkness.html">Darkness</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/darkvision.html">Darkvision</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/detect-thoughts.html">Detect Thoughts</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/dragons-breath.html">Dragon’s Breath</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/enhance-ability.html">Enhance Ability</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/enlargereduce.html">Enlarge/Reduce</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/flaming-sphere.html">Flaming Sphere</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/gentle-repose.html">Gentle Repose</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/gust-of-wind.html">Gust of Wind</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/hold-person.html">Hold Person</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/invisibility.html">Invisibility</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/knock.html">Knock</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/levitate.html">Levitate</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/locate-object.html">Locate Object</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/magic-mouth.html">Magic Mouth</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/magic-weapon.html">Magic Weapon</a></em>
  <em>Melf’s Acid Arrow</em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/mind-spike.html">Mind Spike</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/mirror-image.html">Mirror Image</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/misty-step.html">Misty Step</a></em>
  <em>Nystul’s Magic Aura</em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/phantasmal-force.html">Phantasmal Force</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/ray-of-enfeeblement.html">Ray of Enfeeblement</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/rope-trick.html">Rope Trick</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/scorching-ray.html">Scorching Ray</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/invisibility.html">See Invisibility</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/shatter.html">Shatter</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/spider-climb.html">Spider Climb</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/suggestion.html">Suggestion</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/web.html">Web</a></em>


level_3_wizard_spell
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/animate-dead.html">Animate Dead</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/bestow-curse.html">Bestow Curse</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/blink.html">Blink</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/clairvoyance.html">Clairvoyance</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/counterspell.html">Counterspell</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/dispel-magic.html">Dispel Magic</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/fear.html">Fear</a></em>
  <em>Feign Death</em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/fireball.html">Fireball</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/fly.html">Fly</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/gaseous-form.html">Gaseous Form</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/glyph-of-warding.html">Glyph of Warding</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/haste.html">Haste</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/hypnotic-pattern.html">Hypnotic Pattern</a></em>
  <em>Leomund’s Tiny Hut</em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/lightning-bolt.html">Lightning Bolt</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/magic-circle.html">Magic Circle</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/major-image.html">Major Image</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/nondetection.html">Nondetection</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/phantom-steed.html">Phantom Steed</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/protection-from-energy.html">Protection from Energy</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/remove-curse.html">Remove Curse</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/mending.html">Sending</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/sleet-storm.html">Sleet Storm</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/slow.html">Slow</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/speak-with-dead.html">Speak with Dead</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/stinking-cloud.html">Stinking Cloud</a></em>
  <em>Summon Fey</em>
  <em>Summon Undead</em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/tongues.html">Tongues</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/vampiric-touch.html">Vampiric Touch</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/water-breathing.html">Water Breathing</a></em>

level_4_wizard_spell
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/arcane-eye.html">Arcane Eye</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/banishment.html">Banishment</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/blight.html">Blight</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/charm-monster.html">Charm Monster</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/confusion.html">Confusion</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/conjure-minor-elementals.html">Conjure Minor Elementals</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/control-water.html">Control Water</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/dimension-door.html">Dimension Door</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/divination.html">Divination</a></em>
  <em>Evard’s Black Tentacles</em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/fabricate.html">Fabricate</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/fire-shield.html">Fire Shield</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/greater-invisibility.html">Greater Invisibility</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/hallucinatory-terrain.html">Hallucinatory Terrain</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/ice-storm.html">Ice Storm</a></em>
  <em>Leomund’s Secret Chest</em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/locate-creature.html">Locate Creature</a></em>
  <em>Mordenkainen’s Faithful Hound</em>
  <em>Mordenkainen’s Private Sanctum</em>
  <em>Otiluke’s Resilient Sphere</em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/phantasmal-killer.html">Phantasmal Killer</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/polymorph.html">Polymorph</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/stone-shape.html">Stone Shape</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/stoneskin.html">Stoneskin</a></em>
  <em>Summon Aberration</em>
  <em>Summon Construct</em>
  <em>Summon Elemental</em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/vitriolic-sphere.html">Vitriolic Sphere</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/wall-of-fire.html">Wall of Fire</a></em>

level_5_wizard_spell
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/animate-objects.html">Animate Objects</a></em>
  <em>Bigby’s Hand</em>
  <em>Circle of Power</em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/cloudkill.html">Cloudkill</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/cone-of-cold.html">Cone of Cold</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/conjure-elemental.html">Conjure Elemental</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/contact-other-plane.html">Contact Other Plane</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/creation.html">Creation</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/dominate-person.html">Dominate Person</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/dream.html">Dream</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/geas.html">Geas</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/hold-monster.html">Hold Monster</a></em>
  <em>Jallarzi’s Storm of Radiance</em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/legend-lore.html">Legend Lore</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/mislead.html">Mislead</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/modify-memory.html">Modify Memory</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/passwall.html">Passwall</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/planar-binding.html">Planar Binding</a></em>
  <em>Rary’s Telepathic Bond</em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/scrying.html">Scrying</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/seeming.html">Seeming</a></em>
  <em>Steel Wind Strike</em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/summon-dragon.html">Summon Dragon</a></em>
  <em>Synaptic Static</em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/telekinesis.html">Telekinesis</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/teleportation-circle.html">Teleportation Circle</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/wall-of-fire.html">Wall of Force</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/wall-of-stone.html">Wall of Stone</a></em>
  <em>Yolande’s Regal Presence</em>

level_6_wizard_spell
  <em>Arcane Gate</em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/chain-lightning.html">Chain Lightning</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/circle-of-death.html">Circle of Death</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/contingency.html">Contingency</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/create-undead.html">Create Undead</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/disintegrate.html">Disintegrate</a></em>
  <em>Drawmij’s Instant Summons</em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/eyebite.html">Eyebite</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/flesh-to-stone.html">Flesh to Stone</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/globe-of-invulnerability.html">Globe of Invulnerability</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/guards-and-wards.html">Guards and Wards</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/magic-jar.html">Magic Jar</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/mass-suggestion.html">Mass Suggestion</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/move-earth.html">Move Earth</a></em>
  <em>Otiluke’s Freezing Sphere</em>
  <em>Otto’s Irresistible Dance</em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/programmed-illusion.html">Programmed Illusion</a></em>
  <em>Summon Fiend</em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/sunbeam.html">Sunbeam</a></em>
  <em>Tasha’s Bubbling Cauldron</em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/true-seeing.html">True Seeing</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/wall-of-fire.html">Wall of Ice</a></em>

level_7_wizard_spell
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/delayed-blast-fireball.html">Delayed Blast Fireball</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/etherealness.html">Etherealness</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/finger-of-death.html">Finger of Death</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/forcecage.html">Forcecage</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/mirage-arcane.html">Mirage Arcane</a></em>
  <em>Mordenkainen’s Magnificent Mansion</em>
  <em>Mordenkainen’s Sword</em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/plane-shift.html">Plane Shift</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/prismatic-spray.html">Prismatic Spray</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/project-image.html">Project Image</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/reverse-gravity.html">Reverse Gravity</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/sequester.html">Sequester</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/simulacrum.html">Simulacrum</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/symbol.html">Symbol</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/teleport.html">Teleport</a></em>

level_8_wizard_spell
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/antimagic-field.html">Antimagic Field</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/antipathysympathy.html">Antipathy/Sympathy</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/befuddlement.html">Befuddlement</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/clone.html">Clone</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/control-water.html">Control Weather</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/demiplane.html">Demiplane</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/dominate-monster.html">Dominate Monster</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/incendiary-cloud.html">Incendiary Cloud</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/maze.html">Maze</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/mind-blank.html">Mind Blank</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/power-word-stun.html">Power Word Stun</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/sunburst.html">Sunburst</a></em>
  <em>Telepathy</em>

level_9_wizard_spell
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/astral-projection.html">Astral Projection</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/foresight.html">Foresight</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/gate.html">Gate</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/imprisonment.html">Imprisonment</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/meteor-swarm.html">Meteor Swarm</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/power-word-kill.html">Power Word Kill</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/prismatic-wall.html">Prismatic Wall</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/shapechange.html">Shapechange</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/time-stop.html">Time Stop</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/true-polymorph.html">True Polymorph</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/weird.html">Weird</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/wish.html">Wish</a></em>

cleric_cantrip
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/guidance.html">Guidance</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/blight.html">Light</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/mending.html">Mending</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/resistance.html">Resistance</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/sacred-flame.html">Sacred Flame</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/spare-the-dying.html">Spare the Dying</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/thaumaturgy.html">Thaumaturgy</a></em>
  <em>Toll the Dead</em>
  <em>Word of Radiance</em>

level_1_cleric_spell
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/bane.html">Bane</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/bless.html">Bless</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/command.html">Command</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/create-or-destroy-water.html">Create or Destroy Water</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/cure-wounds.html">Cure Wounds</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/detect-evil-and-good.html">Detect Evil and Good</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/detect-magic.html">Detect Magic</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/detect-poison-and-disease.html">Detect Poison and Disease</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/guiding-bolt.html">Guiding Bolt</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/healing-word.html">Healing Word</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/inflict-wounds.html">Inflict Wounds</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/protection-from-evil-and-good.html">Protection from Evil and Good</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/purify-food-and-drink.html">Purify Food and Drink</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/sanctuary.html">Sanctuary</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/shield-of-faith.html">Shield of Faith</a></em>

level_2_cleric_spell
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/aid.html">Aid</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/augury.html">Augury</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/blindnessdeafness.html">Blindness/Deafness</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/calm-emotions.html">Calm Emotions</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/continual-flame.html">Continual Flame</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/enhance-ability.html">Enhance Ability</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/find-traps.html">Find Traps</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/gentle-repose.html">Gentle Repose</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/hold-person.html">Hold Person</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/lesser-restoration.html">Lesser Restoration</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/locate-object.html">Locate Object</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/prayer-of-healing.html">Prayer of Healing</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/protection-from-poison.html">Protection from Poison</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/silence.html">Silence</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/spiritual-weapon.html">Spiritual Weapon</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/warding-bond.html">Warding Bond</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/zone-of-truth.html">Zone of Truth</a></em>

level_3_cleric_spell
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/animate-dead.html">Animate Dead</a></em>
  <em>Aura of Vitality</em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/beacon-of-hope.html">Beacon of Hope</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/bestow-curse.html">Bestow Curse</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/clairvoyance.html">Clairvoyance</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/create-food-and-water.html">Create Food and Water</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/daylight.html">Daylight</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/dispel-magic.html">Dispel Magic</a></em>
  <em>Feign Death</em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/glyph-of-warding.html">Glyph of Warding</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/magic-circle.html">Magic Circle</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/mass-healing-word.html">Mass Healing Word</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/meld-into-stone.html">Meld into Stone</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/protection-from-energy.html">Protection from Energy</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/remove-curse.html">Remove Curse</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/revivify.html">Revivify</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/mending.html">Sending</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/speak-with-dead.html">Speak with Dead</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/spirit-guardians.html">Spirit Guardians</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/tongues.html">Tongues</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/water-walk.html">Water Walk</a></em>

level_4_cleric_spell
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/aura-of-life.html">Aura of Life</a></em>
  <em>Aura of Purity</em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/banishment.html">Banishment</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/control-water.html">Control Water</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/death-ward.html">Death Ward</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/divination.html">Divination</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/freedom-of-movement.html">Freedom of Movement</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/guardian-of-faith.html">Guardian of Faith</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/locate-creature.html">Locate Creature</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/stone-shape.html">Stone Shape</a></em>

level_5_cleric_spell
  <em>Circle of Power</em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/commune.html">Commune</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/contagion.html">Contagion</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/dispel-evil-and-good.html">Dispel Evil and Good</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/flame-strike.html">Flame Strike</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/geas.html">Geas</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/greater-restoration.html">Greater Restoration</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/hallow.html">Hallow</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/insect-plague.html">Insect Plague</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/legend-lore.html">Legend Lore</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/mass-cure-wounds.html">Mass Cure Wounds</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/planar-binding.html">Planar Binding</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/raise-dead.html">Raise Dead</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/scrying.html">Scrying</a></em>
  <em>Summon Celestial</em>

level_6_cleric_spell
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/blade-barrier.html">Blade Barrier</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/create-undead.html">Create Undead</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/find-the-path.html">Find the Path</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/forbiddance.html">Forbiddance</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/harm.html">Harm</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/heal.html">Heal</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/heroes-feast.html">Heroes’ Feast</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/planar-ally.html">Planar Ally</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/sunbeam.html">Sunbeam</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/true-seeing.html">True Seeing</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/word-of-recall.html">Word of Recall</a></em>

level_7_cleric_spell
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/conjure-celestial.html">Conjure Celestial</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/divine-word.html">Divine Word</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/etherealness.html">Etherealness</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/fire-storm.html">Fire Storm</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/plane-shift.html">Plane Shift</a></em>
  <em>Power Word Fortify</em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/regenerate.html">Regenerate</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/resurrection.html">Resurrection</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/symbol.html">Symbol</a></em>


level_8_cleric_spell
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/antimagic-field.html">Antimagic Field</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/control-water.html">Control Weather</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/earthquake.html">Earthquake</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/holy-aura.html">Holy Aura</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/sunburst.html">Sunburst</a></em>


level_9_cleric_spell
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/astral-projection.html">Astral Projection</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/gate.html">Gate</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/mass-heal.html">Mass Heal</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/power-word-heal.html">Power Word Heal</a></em>
  <em><a href="../../spells/html/5.2_srd_(d&d_2024)/true-resurrection.html">True Resurrection</a></em>

Armor
  {History} {Creator} {armor_type}
  {History} {Creator} {armor_type} ({Minor_Power})
  {History} {Creator} {armor_type} ({Quirk})
  {History} {Creator} {armor_type} ({Minor_Power}, {Quirk})

armor_type
  Padded Armor
  Leather Armor
  Studded Leather Armor
  Hide Armor
  Chain Shirt
  Scale Mail
  Breastplate
  Half Plate Armor
  Ring Mail
  Chain Mail
  Splint Armor
  Plate Armor

Weapon
  {History} {Creator} {weapon_type}
  {History} {Creator} {weapon_type} ({Minor_Power})
  {History} {Creator} {weapon_type} ({Quirk})
  {History} {Creator} {weapon_type} ({Minor_Power}, {Quirk})

weapon_type
  Club
  Dagger
  Greatclub
  Handaxe
  Javelin
  Light Hammer
  Mace
  Quarterstaff
  Sickle
  Spear
  Dart
  Light Crossbow
  Shortbow
  Sling
  Battleaxe
  Flail
  Glaive
  Greataxe
  Greatsword
  Halberd
  Lance
  Longsword
  Maul
  Morningstar
  Pike
  Rapier
  Scimitar
  Shortsword
  Trident
  Warhammer
  War Pick
  Whip

Ammunition
  Arrows
  Bolts
  Darts
  Bullets

Creator
  Aberrant
  Celestial
  Lolth-devoted
  Dragonic
  Dwarven
  Air Elemental
  Earth Elemental
  Fire Elemental
  Water Elemental
  Elven
  Feyish
  Fiendish
  Giant
  Gnomeish
  Human
  Undead

History
  Arcane
  Baneful
  Heroic
  Ornamental
  Prophetic
  Religious
  Sinister
  Forceful

Minor_Power
  Beacon
  Compass
  Delver
  Guardian
  Harmonious
  Key
  Secret Message
  Sentinel
  Songcraft
  Strange Material
  Temperate
  Unbreakable
  War Leader
  Waterborne

Quirk
  Blissful
  Confident
  Covetous
  Fragile
  Loud
  Metamorphic
  Painful
  Repulsive
  
condition
  aberrant
  abyssal
  acidic
  ancient
  astral
  bladed
  bloody
  buried
  cracked
  crumbling
  crystalline
  cursed
  cyclopean
  defiled
  dreamscape
  earthen
  eldritch
  emerald
  entombed
  ethereal
  flaming
  floating
  flooded
  foggy
  frozen
  glass
  glowing
  glyphed
  hallowed
  haunted
  holy
  infested
  lightning-touched
  moontouched
  musical
  necrotic
  obsidian
  oozing
  opal
  poisonous
  psionic
  radiant
  ruby
  ruined
  sapphire
  shadowy
  shadowy
  spiked
  startouched
  stormy
  temporal
  titanic
  twilight
  unearthed
  unhallowed
  unholy

race
  human
  elven
  dwarven
  halfling
  gnomish
  dragonborn
  orcish
  bestial
  primordial
  gearforged
  constructed
  elemental
  draconic
  fiendish
  giant
  shadow-touched
  aberrant
  fungoid
  goblinoid
  infernal
  celestial
  outerplanar
  faerie
  monstrous
  ooze-touched
  undead
  plant-touched
  minotaur
  shadowborn
  serpentine
`;