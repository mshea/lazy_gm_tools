const dataText = `

tier1
  {treasure_1_4}<br>{magic_items_1_4}

tier2
  {treasure_5_10}<br>{magic_items_5_10}

tier3
  {treasure_11_16}<br>{magic_items_11_16}

tier4
  {treasure_17_20}<br>{magic_items_17_20}


treasure_1_4
  [[400-600]] CP, [[350-550]] SP, [[180-280]] GP<br>[[5-9]] x 10 GP {gemstones} gemstones<br> 50 GP {art}
  
magic_items_1_4
  {uncommon_consumable}<br>{uncommon_consumable}<br>{uncommon_magic_item}<br>{relic}

treasure_5_10
  [[400-600]] SP, [[2650-3650]] GP, [[75-125]] PP<br>[[5-9]] x 50 GP {gemstones} gemstones<br> 500 GP {art}
  
magic_items_5_10
  {{uncommon_consumable}|{rare_consumable}}<br>{{uncommon_consumable}|{rare_consumable}}<br>{{uncommon_magic_item}|{rare_magic_item}}<br>{relic}

treasure_11_16
  [[15750-25750]] GP, [[200-300]] PP<br>[[5-9]] x 250 GP {gemstones} gemstones<br> 5,000 GP {art}
  
magic_items_11_16
  {{uncommon_consumable}|{rare_consumable}|{very_rare_consumable}}<br>{{uncommon_consumable}|{rare_consumable}|{very_rare_consumable}}<br>{{uncommon_magic_item}|{rare_magic_item}|{very_rare_magic_item}}<br>{relic}

treasure_17_20
  [[45000-145000]] GP, [[15000-25000]] PP<br>[[5-9]] x 5,000 GP {gemstones} gemstones<br>50,000 GP {art}
  
magic_items_17_20
  {{rare_consumable}|{very_rare_consumable}|{legendary_consumable}}<br>{{rare_consumable}|{very_rare_consumable}|{legendary_consumable}}<br>{{rare_magic_item}|{very_rare_magic_item}|{legendary_magic_item}}<br>{relic}

relic
  {origin} {condition} {item} that casts {spell}

art
  {origin} {condition} competent portrait
  {origin} {condition} tavern sign
  {origin} {condition} bronze torque
  {origin} {condition} silver bangle
  {origin} {condition} fine fur-trimmed cloak
  {origin} {condition} floppy feathered hat
  {origin} {condition} silver and malachite pendants
  {origin} {condition} tiny gold skulls
  {origin} {condition} dulcimer
  {origin} {condition} navigator’s tools
  {origin} {condition} copper pot
  {origin} {condition} silver hatpin
  {origin} {condition} nonmagical crystal ball
  {origin} {condition} copper and garnet ring
  {origin} {condition} plain gold band
  {origin} {condition} painted wooden knight
  {origin} {condition} stone elephant statuette
  {origin} {condition} bolt of cloth
  {origin} {condition} gold band set with a moonstone
  {origin} {condition} lion-headed gold ring
  {origin} {condition} electrum chain
  {origin} {condition} silver and obsidian band
  {origin} {condition} chalcedony pendants
  {origin} {condition} silver studs
  {origin} {condition} gold locket
  {origin} {condition} thick silver chain
  {origin} {condition} stylish cap
  {origin} {condition} marble figurine
  {origin} {condition} pair of bronze dragon bookends
  {origin} {condition} watercolors
  {origin} {condition} worn tapestry of rare plants
  {origin} {condition} concealable boot dagger
  {origin} {condition} silver-hilted longsword
  {origin} {condition} gold-framed mirror
  {origin} {condition} silver and quartz chalice
  {origin} {condition} silver snuff box
  {origin} {condition} bestiary
  {origin} {condition} map of a distant land
  {origin} {condition} antitoxin
  {origin} {condition} medicinal salve
  {origin} {condition} mithral band
  {origin} {condition} pearl solitaire
  {origin} {condition} gold armlet
  {origin} {condition} silver and pearl bracelet
  {origin} {condition} gold hoops
  {origin} {condition} pearl pendants
  {origin} {condition} dragontooth necklace
  {origin} {condition} fine gold chain hung with gold leaves
  {origin} {condition} pointy-toed shoes
  {origin} {condition} a stylish silk doublet
  {origin} {condition} marble bust
  {origin} {condition} small silver idol
  {origin} {condition} excellent portrait of a famous person
  {origin} {condition} fine tapestry
  {origin} {condition} 5 pinches of diamond dust
  {origin} {condition} five 1-pound gold bars
  {origin} {condition} gold-hilted sword
  {origin} {condition} silver helmet
  {origin} {condition} set of gold buttons
  {origin} {condition} silver ewer
  {origin} {condition} silver jewelry box
  {origin} {condition} rare book
  {origin} {condition} treasure map
  {origin} {condition} faerie dragon euphoria gas
  {origin} {condition} black pearl nose ring
  {origin} {condition} peridot ring carved with a family crest
  {origin} {condition} gold bangle
  {origin} {condition} platinum chain
  {origin} {condition} dangling platinum earrings
  {origin} {condition} white and black pearl pendants
  {origin} {condition} coral bead necklace
  {origin} {condition} thick gold chain
  {origin} {condition} gold tiara
  {origin} {condition} silver scepter
  {origin} {condition} gold-buckled belt
  {origin} {condition} high fashion hat
  {origin} {condition} gold idol
  {origin} {condition} jade statuette
  {origin} {condition} gold-threaded tapestry
  {origin} {condition} masterpiece painting
  {origin} {condition} bolt of fine silk
  {origin} {condition} mithral bar
  {origin} {condition} gold-handled sword stick
  {origin} {condition} gold ewer
  {origin} {condition} gold harp
  {origin} {condition} gold incense burner
  {origin} {condition} oil of taggit
  {origin} {condition} pale tincture
  {origin} {condition} gold band set with a single emerald
  {origin} {condition} with a dozen tiny opals
  {origin} {condition} yellow sapphire earrings
  {origin} {condition} ruby pendant
  {origin} {condition} string of pearls
  {origin} {condition} royal dress
  {origin} {condition} royal robe
  {origin} {condition} figurine carved from emerald
  {origin} {condition} gold idol
  {origin} {condition} gem-studded gold goblet
  {origin} {condition} gold jewelry box
  {origin} {condition} fine mithral-inlaid lute
  {origin} {condition} platinum orb
  {origin} {condition} silver and topaz crown
  {origin} {condition} undiscovered masterpiece play
  {origin} {condition} deed to a fort
  {origin} {condition} ceremonial gold-etched full plate
  {origin} {condition} royal greatsword with gem-studded hilt
  {origin} {condition} diamond solitaire
  {origin} {condition} ruby and platinum ring
  {origin} {condition} diamond studs
  {origin} {condition} platinum and black sapphire earrings
  {origin} {condition} flawless jacinth pendant
  {origin} {condition} string of black pearls
  {origin} {condition} life-sized silver statue
  {origin} {condition} platinum statuette
  {origin} {condition} bloodstone and jade chess set
  {origin} {condition} gold and ruby warhorn
  {origin} {condition} gold bejeweled ewer
  {origin} {condition} gemmed gold crown
  {origin} {condition} gold scepter
  {origin} {condition} full royal pardon for one unspecified crime
  {origin} {condition} legendary tome of magical theory
  {origin} {condition} adamantine meteorite
  {origin} {condition} ore of some exotic metal from a different plane
  {origin} {condition} efreeti brass
  {origin} {condition} necklace of rubies
  {origin} {condition} adamantine mask
  {origin} {condition} platinum armlet studded with jacinths
  {origin} {condition} gold statuette with ruby eyes
  {origin} {condition} life-sized masterpiece bronze statue
  {origin} {condition} gemmed gold breastplate
  {origin} {condition} mithral crown
  {origin} {condition} dragon egg
  {origin} {condition} portable door which opens to a permanent demiplane
  {origin} {condition} bank note from a bank in a major city
  {origin} {condition} map that leads to a treasure

gemstones
  amber
  amethyst
  aquamarine
  bloodstone
  carnelian
  citrine
  coral
  diamond
  emerald
  garnet
  jacinth
  jade
  jasper
  jet
  lapis lazuli
  malachite
  moonstone
  obsidian
  onyx
  opal
  pearl
  peridot
  quartz
  ruby
  sapphire
  spinel
  topaz
  tourmaline
  turquoise

ammunition
  bolts ^2
  arrows ^4
  bullets
  darts

armor
  {condition} {origin} leather armor
  {condition} {origin} studded leather armor
  {condition} {origin} brigandine armor
  {condition} {origin} hide armor
  {condition} {origin} chain shirt
  {condition} {origin} scale mail armor
  {condition} {origin} breastplate
  {condition} {origin} half plate armor
  {condition} {origin} ring mail armor
  {condition} {origin} chain mail armor
  {condition} {origin} splint armor
  {condition} {origin} plate armor

weapon
  {condition} {origin} club
  {condition} {origin} dagger ^2
  {condition} {origin} greatclub
  {condition} {origin} handaxe
  {condition} {origin} javelin
  {condition} {origin} light hammer
  {condition} {origin} mace
  {condition} {origin} quarterstaff
  {condition} {origin} sickle
  {condition} {origin} spear
  {condition} {origin} crossbow, light
  {condition} {origin} dart
  {condition} {origin} shortbow ^2
  {condition} {origin} sling
  {condition} {origin} battleaxe
  {condition} {origin} flail
  {condition} {origin} glaive
  {condition} {origin} greataxe ^2
  {condition} {origin} greatsword ^2
  {condition} {origin} halberd
  {condition} {origin} lance
  {condition} {origin} longsword ^2
  {condition} {origin} maul
  {condition} {origin} morningstar
  {condition} {origin} pike
  {condition} {origin} rapier ^2
  {condition} {origin} scimitar ^2
  {condition} {origin} scythe
  {condition} {origin} shortsword ^2
  {condition} {origin} trident
  {condition} {origin} war pick
  {condition} {origin} warhammer
  {condition} {origin} whip
  {condition} {origin} blowgun
  {condition} {origin} crossbow, hand
  {condition} {origin} crossbow, heavy
  {condition} {origin} longbow ^2

uncommon_magic_item
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/adamantine-armor.html">Adamantine Armor</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/amulet-of-proof-against-detection-and-location.html">Amulet of Proof against Detection and Location</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/bag-of-holding.html">Bag of Holding</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/bag-of-tricks.html">Bag of Tricks</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/boots-of-elvenkind.html">Boots of Elvenkind</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/boots-of-striding-and-springing.html">Boots of Striding and Springing</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/boots-of-the-winterlands.html">Boots of the Winterlands</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/bracers-of-archery.html">Bracers of Archery</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/brooch-of-shielding.html">Brooch of Shielding</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/broom-of-flying.html">Broom of Flying</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/circlet-of-blasting.html">Circlet of Blasting</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/cloak-of-elvenkind.html">Cloak of Elvenkind</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/cloak-of-protection.html">Cloak of Protection</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/cloak-of-the-manta-ray.html">Cloak of the Manta Ray</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/decanter-of-endless-water.html">Decanter of Endless Water</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/deck-of-illusions.html">Deck of Illusions</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/efficient-quiver.html">Efficient Quiver</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/eversmoking-bottle.html">Eversmoking Bottle</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/eyes-of-charming.html">Eyes of Charming</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/eyes-of-minute-seeing.html">Eyes of Minute Seeing</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/eyes-of-the-eagle.html">Eyes of the Eagle</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/gauntlets-of-ogre-power.html">Gauntlets of Ogre Power</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/gem-of-brightness.html">Gem of Brightness</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/gloves-of-missile-snaring.html">Gloves of Missile Snaring</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/gloves-of-swimming-and-climbing.html">Gloves of Swimming and Climbing</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/goggles-of-night.html">Goggles of Night</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/hat-of-disguise.html">Hat of Disguise</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/headband-of-intellect.html">Headband of Intellect</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/helm-of-comprehending-languages.html">Helm of Comprehending Languages</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/helm-of-telepathy.html">Helm of Telepathy</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/immovable-rod.html">Immovable Rod</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/javelin-of-lightning.html">Javelin of Lightning</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/lantern-of-revealing.html">Lantern of Revealing</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/medallion-of-thoughts.html">Medallion of Thoughts</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/mithral-armor.html">Mithral Armor</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/necklace-of-adaptation.html">Necklace of Adaptation</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/oil-of-slipperiness.html">Oil of Slipperiness</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/pearl-of-power.html">Pearl of Power</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/periapt-of-health.html">Periapt of Health</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/periapt-of-wound-closure.html">Periapt of Wound Closure</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/pipes-of-haunting.html">Pipes of Haunting</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/pipes-of-the-sewers.html">Pipes of the Sewers</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/ring-of-jumping.html">Ring of Jumping</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/ring-of-mind-shielding.html">Ring of Mind Shielding</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/ring-of-swimming.html">Ring of Swimming</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/ring-of-warmth.html">Ring of Warmth</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/ring-of-water-walking.html">Ring of Water Walking</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/robe-of-useful-items.html">Robe of Useful Items</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/rope-of-climbing.html">Rope of Climbing</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/slippers-of-spider-climbing.html">Slippers of Spider Climbing</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/stone-of-good-luck-luckstone.html">Stone of Good Luck (Luckstone)</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/trident-of-fish-command.html">Trident of Fish Command</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/wand-of-magic-detection.html">Wand of Magic Detection</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/wand-of-magic-missiles.html">Wand of Magic Missiles</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/wand-of-secrets.html">Wand of Secrets</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/wand-of-web.html">Wand of Web</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/wind-fan.html">Wind Fan</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/winged-boots.html">Winged Boots</a>
  +1 {weapon} that casts {circle_1_spell|circle_2_spell} ^10
  +1 <a href="../../magic_items/html/5.1_srd_(d&d_2014)/wand-of-the-war-mage-1-2-or-3.html">Wand of the War Mage</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/figurine-of-wondrous-power.html">Figurine of Wondrous Power</a> (Silver Raven)

uncommon_consumable
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/dust-of-disappearance.html">Dust of Disappearance</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/dust-of-dryness.html">Dust of Dryness</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/dust-of-sneezing-and-choking.html">Dust of Sneezing and Choking</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/elemental-gem.html">Elemental Gem</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/potion-of-animal-friendship.html">Potion of Animal Friendship</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/potion-of-growth.html">Potion of Growth</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/potion-of-poison.html">Potion of Poison</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/potion-of-resistance.html">Potion of Resistance</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/potion-of-water-breathing.html">Potion of Water Breathing</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/restorative-ointment.html">Restorative Ointment</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/potion-of-healing.html">Potion of Healing</a> (Greater) ^10
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/potion-of-giant-strength.html">Potion of Giant Strength</a> (Hill)
  Spell Scroll — {cantrip} (Uncommon, Cantrip, DC 13, Mod +5)
  Spell Scroll — {circle_1_spell} (Uncommon, 1st level, DC 13, Mod +5) ^5
  Spell Scroll — {circle_2_spell} (Uncommon, 2nd level, DC 13, Mod +5) ^2
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/potion-of-climbing.html">Potion of Climbing</a>
  [[5-15]] x +1 {ammunition}

rare_magic_item
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/amulet-of-health.html">Amulet of Health</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/armor-of-resistance.html">Armor of Resistance</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/armor-of-vulnerability.html">Armor of Vulnerability</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/arrow-catching-shield.html">Arrow-Catching Shield</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/bead-of-force.html">Bead of Force</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/belt-of-dwarvenkind.html">Belt of Dwarvenkind</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/berserker-axe.html">Berserker Axe</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/boots-of-levitation.html">Boots of Levitation</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/boots-of-speed.html">Boots of Speed</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/bowl-of-commanding-water-elementals.html">Bowl of Commanding Water Elementals</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/bracers-of-defense.html">Bracers of Defense</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/brazier-of-commanding-fire-elementals.html">Brazier of Commanding Fire Elementals</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/cape-of-the-mountebank.html">Cape of the Mountebank</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/censer-of-controlling-air-elementals.html">Censer of Controlling Air Elementals</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/cloak-of-displacement.html">Cloak of Displacement</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/cloak-of-the-bat.html">Cloak of the Bat</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/cube-of-force.html">Cube of Force</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/dagger-of-venom.html">Dagger of Venom</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/dimensional-shackles.html">Dimensional Shackles</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/dragon-slayer.html">Dragon Slayer</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/elven-chain.html">Elven Chain</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/flame-tongue.html">Flame Tongue</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/folding-boat.html">Folding Boat</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/gem-of-seeing.html">Gem of Seeing</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/giant-slayer.html">Giant Slayer</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/glamoured-studded-leather.html">Glamoured Studded Leather</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/handy-haversack.html">Handy Haversack</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/helm-of-teleportation.html">Helm of Teleportation</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/horn-of-blasting.html">Horn of Blasting</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/horseshoes-of-speed.html">Horseshoes of Speed</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/instant-fortress.html">Instant Fortress</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/iron-bands-of-binding.html">Iron Bands of Binding</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/mace-of-disruption.html">Mace of Disruption</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/mace-of-smiting.html">Mace of Smiting</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/mace-of-terror.html">Mace of Terror</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/mantle-of-spell-resistance.html">Mantle of Spell Resistance</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/necklace-of-fireballs.html">Necklace of Fireballs</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/necklace-of-prayer-beads.html">Necklace of Prayer Beads</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/periapt-of-proof-against-poison.html">Periapt of Proof against Poison</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/portable-hole.html">Portable Hole</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/ring-of-animal-influence.html">Ring of Animal Influence</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/ring-of-evasion.html">Ring of Evasion</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/ring-of-feather-falling.html">Ring of Feather Falling</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/ring-of-free-action.html">Ring of Free Action</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/ring-of-protection.html">Ring of Protection</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/ring-of-resistance.html">Ring of Resistance</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/ring-of-spell-storing.html">Ring of Spell Storing</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/ring-of-the-ram.html">Ring of the Ram</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/ring-of-x-ray-vision.html">Ring of X-ray Vision</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/robe-of-eyes.html">Robe of Eyes</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/rod-of-rulership.html">Rod of Rulership</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/rope-of-entanglement.html">Rope of Entanglement</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/shield-of-missile-attraction.html">Shield of Missile Attraction</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/staff-of-charming.html">Staff of Charming</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/staff-of-healing.html">Staff of Healing</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/staff-of-the-woodlands.html">Staff of the Woodlands</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/staff-of-withering.html">Staff of Withering</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/stone-of-controlling-earth-elementals.html">Stone of Controlling Earth Elementals</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/sun-blade.html">Sun Blade</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/sword-of-life-stealing.html">Sword of Life Stealing</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/sword-of-wounding.html">Sword of Wounding</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/vicious-weapon.html">Vicious Weapon</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/wand-of-binding.html">Wand of Binding</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/wand-of-enemy-detection.html">Wand of Enemy Detection</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/wand-of-fear.html">Wand of Fear</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/wand-of-fireballs.html">Wand of Fireballs</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/wand-of-lightning-bolts.html">Wand of Lightning Bolts</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/wand-of-paralysis.html">Wand of Paralysis</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/wand-of-wonder.html">Wand of Wonder</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/wings-of-flying.html">Wings of Flying</a>
  +2 {weapon} that casts {circle_3_spell|circle_4_spell} ^10
  +1 {armor} that casts {circle_2_spell|circle_3_spell} ^10
  +2 <a href="../../magic_items/html/5.1_srd_(d&d_2014)/wand-of-the-war-mage-1-2-or-3.html">Wand of the War Mage</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/belt-of-giant-strength.html">Belt of Giant Strength</a> (Hill)
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/ioun-stone.html">Ioun Stone</a> ({Awareness|Protection|Reserve|Sustenance})
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/figurine-of-wondrous-power.html">Figurine of Wondrous Power</a> ({Bronze Griffon|Ebony Fly|Golden Lions|Ivory Goats|Marble Elephant|Onyx Dog|Serpentine Owl})
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/horn-of-valhalla.html">Horn of Valhalla</a> ({Silver|Brass})

rare_consumable
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/oil-of-etherealness.html">Oil of Etherealness</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/bag-of-beans.html">Bag of Beans</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/potion-of-clairvoyance.html">Potion of Clairvoyance</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/potion-of-diminution.html">Potion of Diminution</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/potion-of-gaseous-form.html">Potion of Gaseous Form</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/potion-of-heroism.html">Potion of Heroism</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/potion-of-mind-reading.html">Potion of Mind Reading</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/chime-of-opening.html">Chime of Opening</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/feather-token.html">Feather Token</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/potion-of-healing.html">Potion of Healing</a> (Superior) ^10
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/potion-of-giant-strength.html">Potion of Giant Strength</a> ({Stone|Frost|Fire})
  Spell Scroll — {circle_2_spell} (Uncommon, 2nd level, DC 13, Mod +5) ^5
  Spell Scroll — {circle_3_spell} (Uncommon, 3rd level, DC 15, Mod +7) ^2
  Spell Scroll — {circle_4_spell} (Rare, 4th level, DC 15, Mod +7)
  [[5-15]] x +2 {ammunition}

very_rare_magic_item
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/amulet-of-the-planes.html">Amulet of the Planes</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/animated-shield.html">Animated Shield</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/bag-of-devouring.html">Bag of Devouring</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/carpet-of-flying.html">Carpet of Flying</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/cloak-of-arachnida.html">Cloak of Arachnida</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/dancing-sword.html">Dancing Sword</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/demon-armor.html">Demon Armor</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/dragon-scale-mail.html">Dragon Scale Mail</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/dwarven-plate.html">Dwarven Plate</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/dwarven-thrower.html">Dwarven Thrower</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/efreeti-bottle.html">Efreeti Bottle</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/frost-brand.html">Frost Brand</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/helm-of-brilliance.html">Helm of Brilliance</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/horseshoes-of-a-zephyr.html">Horseshoes of a Zephyr</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/manual-of-bodily-health.html">Manual of Bodily Health</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/manual-of-gainful-exercise.html">Manual of Gainful Exercise</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/manual-of-golems.html">Manual of Golems</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/manual-of-quickness-of-action.html">Manual of Quickness of Action</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/mirror-of-life-trapping.html">Mirror of Life Trapping</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/nine-lives-stealer.html">Nine Lives Stealer</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/oathbow.html">Oathbow</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/ring-of-regeneration.html">Ring of Regeneration</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/ring-of-shooting-stars.html">Ring of Shooting Stars</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/ring-of-telekinesis.html">Ring of Telekinesis</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/robe-of-scintillating-colors.html">Robe of Scintillating Colors</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/robe-of-stars.html">Robe of Stars</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/rod-of-absorption.html">Rod of Absorption</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/rod-of-alertness.html">Rod of Alertness</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/rod-of-security.html">Rod of Security</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/scimitar-of-speed.html">Scimitar of Speed</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/spellguard-shield.html">Spellguard Shield</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/staff-of-fire.html">Staff of Fire</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/staff-of-frost.html">Staff of Frost</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/staff-of-power.html">Staff of Power</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/staff-of-striking.html">Staff of Striking</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/staff-of-swarming-insects.html">Staff of Swarming Insects</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/staff-of-the-python.html">Staff of the Python</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/staff-of-thunder-and-lightning.html">Staff of Thunder and Lightning</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/sword-of-sharpness.html">Sword of Sharpness</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/tome-of-clear-thought.html">Tome of Clear Thought</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/tome-of-leadership-and-influence.html">Tome of Leadership and Influence</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/tome-of-understanding.html">Tome of Understanding</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/wand-of-polymorph.html">Wand of Polymorph</a>
  +3 {weapon} that casts {circle_5_spell} ^10
  +2 {armor} that casts {circle_3_spell|circle_4_spell} ^10
  +3 <a href="../../magic_items/html/5.1_srd_(d&d_2014)/wand-of-the-war-mage-1-2-or-3.html">Wand of the War Mage</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/belt-of-giant-strength.html">Belt of Giant Strength</a> ({Stone|Frost|Fire})
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/ioun-stone.html">Ioun Stone</a> ({Absorption|Agility|Fortitude|Insight|Intellect|Leadership|Strength})
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/crystal-ball.html">Crystal Ball</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/figurine-of-wondrous-power.html">Figurine of Wondrous Power</a> (Obsidian Steed)  
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/horn-of-valhalla.html">Horn of Valhalla</a> (Bronze)

very_rare_consumable
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/marvelous-pigments.html">Marvelous Pigments</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/candle-of-invocation.html">Candle of Invocation</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/arrow-of-slaying.html">Arrow of Slaying</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/oil-of-sharpness.html">Oil of Sharpness</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/potion-of-flying.html">Potion of Flying</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/potion-of-invisibility.html">Potion of Invisibility</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/potion-of-speed.html">Potion of Speed</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/potion-of-giant-strength.html">Potion of Giant Strength</a> (Cloud)
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/potion-of-healing.html">Potion of Healing</a> (Supreme) ^10
  Spell Scroll — {circle_5_spell} (Rare, 5th level, DC 17, Mod +9) ^5
  Spell Scroll — {circle_6_spell} (Very Rare, 6th level, DC 17, Mod +9) ^2
  Spell Scroll — {circle_7_spell} (Very Rare, 7th level, DC 18, Mod +10)
  [[5-15]] x +3 {ammunition}

legendary_magic_item
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/apparatus-of-the-crab.html">Apparatus of the Crab</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/armor-of-invulnerability.html">Armor of Invulnerability</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/cubic-gate.html">Cubic Gate</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/deck-of-many-things.html">Deck of Many Things</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/defender.html">Defender</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/hammer-of-thunderbolts.html">Hammer of Thunderbolts</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/holy-avenger.html">Holy Avenger</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/iron-flask.html">Iron Flask</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/luck-blade.html">Luck Blade</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/plate-armor-of-etherealness.html">Plate Armor of Etherealness</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/ring-of-djinni-summoning.html">Ring of Djinni Summoning</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/ring-of-elemental-command.html">Ring of Elemental Command</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/ring-of-invisibility.html">Ring of Invisibility</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/ring-of-spell-turning.html">Ring of Spell Turning</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/ring-of-three-wishes.html">Ring of Three Wishes</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/robe-of-the-archmagi.html">Robe of the Archmagi</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/rod-of-lordly-might.html">Rod of Lordly Might</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/scarab-of-protection.html">Scarab of Protection</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/sphere-of-annihilation.html">Sphere of Annihilation</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/staff-of-the-magi.html">Staff of the Magi</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/talisman-of-pure-good.html">Talisman of Pure Good</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/talisman-of-the-sphere.html">Talisman of the Sphere</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/talisman-of-ultimate-evil.html">Talisman of Ultimate Evil</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/vorpal-sword.html">Vorpal Sword</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/well-of-many-worlds.html">Well of Many Worlds</a>
  +3 {armor} that casts {circle_4_spell|circle_5_spell} ^10
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/belt-of-giant-strength.html">Belt of Giant Strength</a> ({Cloud|Storm})
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/ioun-stone.html">Ioun Stone</a> ({Greater Absorption|Mastery|Regeneration})
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/crystal-ball.html">Crystal Ball</a> ({Mind Reading|Telepathy|True Seeing})
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/horn-of-valhalla.html">Horn of Valhalla</a> (Iron)

legendary_consumable
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/sovereign-glue.html">Sovereign Glue</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/universal-solvent.html">Universal Solvent</a>
  <a href="../../magic_items/html/5.1_srd_(d&d_2014)/potion-of-giant-strength.html">Potion of Giant Strength</a> (Storm)
  Spell Scroll — {circle_7_spell} (Very Rare, 7th level, DC 18, Mod +10) ^5
  Spell Scroll — {circle_8_spell} (Very Rare, 8th level, DC 18, Mod +10) ^2
  Spell Scroll — {circle_9_spell} (Legendary, 9th level, DC 19, Mod +11)

`;