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
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/spell-scroll.html"><a href="../../magic_items/html/5.1_srd_(d&d_2014)/spell-scroll.html">Spell Scroll</a></a> (cantrip) ({cantrip}) (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/spell-scroll.html"><a href="../../magic_items/html/5.1_srd_(d&d_2014)/spell-scroll.html">Spell Scroll</a></a> (1st Level) ({circle_1_spell}) (uncommon) ^5
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/spell-scroll.html"><a href="../../magic_items/html/5.1_srd_(d&d_2014)/spell-scroll.html">Spell Scroll</a></a> (2nd Level) ({circle_2_spell} (uncommon)) ^2
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
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/spell-scroll.html"><a href="../../magic_items/html/5.1_srd_(d&d_2014)/spell-scroll.html">Spell Scroll</a></a> (2nd Level) ({circle_2_spell}) (uncommon) ^5
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/spell-scroll.html"><a href="../../magic_items/html/5.1_srd_(d&d_2014)/spell-scroll.html">Spell Scroll</a></a> (3rd Level) ({circle_3_spell}) (uncommon) ^2
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/spell-scroll.html"><a href="../../magic_items/html/5.1_srd_(d&d_2014)/spell-scroll.html">Spell Scroll</a></a> (4th Level) ({circle_4_spell}) (rare)
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
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/spell-scroll.html"><a href="../../magic_items/html/5.1_srd_(d&d_2014)/spell-scroll.html">Spell Scroll</a></a> (5th Level) ({circle_5_spell}) (rare) ^5
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/spell-scroll.html"><a href="../../magic_items/html/5.1_srd_(d&d_2014)/spell-scroll.html">Spell Scroll</a></a> (6th Level) ({circle_6_spell}) (very rare) ^2
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/spell-scroll.html"><a href="../../magic_items/html/5.1_srd_(d&d_2014)/spell-scroll.html">Spell Scroll</a></a> (7th Level) ({circle_7_spell}) (very rare)
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
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/spell-scroll.html"><a href="../../magic_items/html/5.1_srd_(d&d_2014)/spell-scroll.html">Spell Scroll</a></a> (7th circle) ({circle_7_spell}) (very rare) ^5
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/spell-scroll.html"><a href="../../magic_items/html/5.1_srd_(d&d_2014)/spell-scroll.html">Spell Scroll</a></a> (8th circle) ({circle_8_spell}) (very rare) ^2
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/spell-scroll.html"><a href="../../magic_items/html/5.1_srd_(d&d_2014)/spell-scroll.html">Spell Scroll</a></a> (9th circle) ({circle_9_spell}) (legendary)

cantrip
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/acid-splash.html">acid splash</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/dancing-lights.html">dancing lights</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/druidcraft.html">druidcraft</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/fire-bolt.html">fire bolt</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/guidance.html">guidance</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/blight.html">light</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/mage-hand.html">mage hand</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/mending.html">mending</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/message.html">message</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/minor-illusion.html">minor illusion</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/poison-spray.html">poison spray</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/produce-flame.html">produce flame</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/ray-of-frost.html">ray of frost</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/resistance.html">resistance</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/sacred-flame.html">sacred flame</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/shillelagh.html">shillelagh</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/shocking-grasp.html">shocking grasp</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/spare-the-dying.html">spare the dying</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/thaumaturgy.html">thaumaturgy</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/vicious-mockery.html">vicious mockery</a></em>

circle_1_spell
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/alarm.html">alarm</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/animal-friendship.html">animal friendship</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/bane.html">bane</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/bless.html">bless</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/burning-hands.html">burning hands</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/harm.html">charm</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/command.html">command</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/comprehend-languages.html">comprehend languages</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/create-or-destroy-water.html">create or destroy water</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/cure-wounds.html">cure wounds</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/detect-evil-and-good.html">detect evil and good</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/detect-magic.html">detect magic</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/detect-poison-and-disease.html">detect poison and disease</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/disguise-self.html">disguise self</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/entangle.html">entangle</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/expeditious-retreat.html">expeditious retreat</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/faerie-fire.html">faerie fire</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/false-life.html">false life</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/feather-fall.html">feather fall</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/floating-disk.html">floating disk</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/fog-cloud.html">fog cloud</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/goodberry.html">goodberry</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/grease.html">grease</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/guiding-bolt.html">guiding bolt</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/hellish-rebuke.html">hellish rebuke</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/heroism.html">heroism</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/hideous-laughter.html">hideous laughter</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/identify.html">identify</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/illusory-script.html">illusory script</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/inflict-wounds.html">inflict wounds</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/longstrider.html">longstrider</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/mage-armor.html">mage armor</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/magic-missile.html">magic missile</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/magic-mouth.html">magic mouth</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/protection-from-evil-and-good.html">protection from evil and good</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/purify-food-and-drink.html">purify food and drink</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/sanctuary.html">sanctuary</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/shield.html">shield</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/shield-of-faith.html">shield of faith</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/silent-image.html">silent image</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/sleep.html">sleep</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/speak-with-animals.html">speak with animals</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/thunderwave.html">thunderwave</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/unseen-servant.html">unseen servant</a></em>

circle_2_spell
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/acid-arrow.html">acid arrow</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/aid.html">aid</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/alter-self.html">alter self</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/animal-messenger.html">animal messenger</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/arcane-lock.html">arcane lock</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/arcanists-magic-aura.html">arcanist’s magic aura</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/augury.html">augury</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/barkskin.html">barkskin</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/blindnessdeafness.html">blindness/deafness</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/blur.html">blur</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/branding-smite.html">branding smite</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/calm-emotions.html">calm emotions</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/clairvoyance.html">clairvoyance</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/continual-flame.html">continual flame</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/darkness.html">darkness</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/darkvision.html">darkvision</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/detect-thoughts.html">detect thoughts</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/enhance-ability.html">enhance ability</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/enlargereduce.html">enlarge/reduce</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/enthrall.html">enthrall</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/find-steed.html">find steed</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/flaming-sphere.html">flaming sphere</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/gentle-repose.html">gentle repose</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/gust-of-wind.html">gust of wind</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/heat-metal.html">heat metal</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/invisibility.html">invisibility</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/knock.html">knock</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/levitate.html">levitate</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/magic-circle.html">magic circle</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/magic-weapon.html">magic weapon</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/mirror-image.html">mirror image</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/misty-step.html">misty step</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/moonbeam.html">moonbeam</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/pass-without-trace.html">pass without trace</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/prayer-of-healing.html">prayer of healing</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/protection-from-poison.html">protection from poison</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/ray-of-enfeeblement.html">ray of enfeeblement</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/rope-trick.html">rope trick</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/scorching-ray.html">scorching ray</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/invisibility.html">see invisibility</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/silence.html">silence</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/spider-climb.html">spider climb</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/spiritual-weapon.html">spiritual weapon</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/spike-growth.html">spike growth</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/suggestion.html">suggestion</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/warding-bond.html">warding bond</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/web.html">web</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/zone-of-truth.html">zone of truth</a></em>

circle_3_spell
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/animate-dead.html">animate dead</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/beacon-of-hope.html">beacon of hope</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/bestow-curse.html">bestow curse</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/blink.html">blink</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/call-lightning.html">call lightning</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/clairvoyance.html">clairvoyance</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/conjure-animals.html">conjure animals</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/counterspell.html">counterspell</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/create-food-and-water.html">create food and water</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/daylight.html">daylight</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/dispel-magic.html">dispel magic</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/fear.html">fear</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/fireball.html">fireball</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/fly.html">fly</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/gaseous-form.html">gaseous form</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/glyph-of-warding.html">glyph of warding</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/haste.html">haste</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/hypnotic-pattern.html">hypnotic pattern</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/lightning-bolt.html">lightning bolt</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/magic-circle.html">magic circle</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/major-image.html">major image</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/mass-healing-word.html">mass healing word</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/meld-into-stone.html">meld into stone</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/nondetection.html">nondetection</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/phantom-steed.html">phantom steed</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/plant-growth.html">plant growth</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/protection-from-energy.html">protection from energy</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/remove-curse.html">remove curse</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/revivify.html">revivify</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/mending.html">sending</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/sleet-storm.html">sleet storm</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/slow.html">slow</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/speak-with-dead.html">speak with dead</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/speak-with-plants.html">speak with plants</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/spirit-guardians.html">spirit guardians</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/stinking-cloud.html">stinking cloud</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/tiny-hut.html">tiny hut</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/tongues.html">tongues</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/vampiric-touch.html">vampiric touch</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/water-breathing.html">water breathing</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/water-walk.html">water walk</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/wind-walk.html">wind wall</a></em>

circle_4_spell
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/arcane-eye.html">arcane eye</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/banishment.html">banishment</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/black-tentacles.html">black tentacles</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/blight.html">blight</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/compulsion.html">compulsion</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/confusion.html">confusion</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/conjure-minor-elementals.html">conjure minor elementals</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/conjure-woodland-beings.html">conjure woodland beings</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/control-water.html">control water</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/death-ward.html">death ward</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/dimension-door.html">dimension door</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/divination.html">divination</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/faithful-hound.html">faithful hound</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/fabricate.html">fabricate</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/freedom-of-movement.html">freedom of movement</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/giant-insect.html">giant insect</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/greater-invisibility.html">greater invisibility</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/guardian-of-faith.html">guardian of faith</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/hallucinatory-terrain.html">hallucinatory terrain</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/ice-storm.html">ice storm</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/phantasmal-killer.html">phantasmal killer</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/polymorph.html">polymorph</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/private-sanctum.html">private sanctum</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/resilient-sphere.html">resilient sphere</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/secret-chest.html">secret chest</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/stone-shape.html">stone shape</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/stoneskin.html">stoneskin</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/telekinesis.html">telekinesis</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/telepathic-bond.html">telepathic bond</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/wall-of-fire.html">wall of fire</a></em>

circle_5_spell
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/animate-objects.html">animate objects</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/antilife-shell.html">antilife shell</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/arcane-hand.html">arcane hand</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/awaken.html">awaken</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/cloudkill.html">cloudkill</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/commune-with-nature.html">commune with nature</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/cone-of-cold.html">cone of cold</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/conjure-elemental.html">conjure elemental</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/contact-other-plane.html">contact other plane</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/contagion.html">contagion</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/creation.html">creation</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/dispel-evil-and-good.html">dispel evil and good</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/dream.html">dream</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/geas.html">geas</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/greater-restoration.html">greater restoration</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/hallow.html">hallow</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/heroes-feast.html">heroes’ feast</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/insect-plague.html">insect plague</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/legend-lore.html">legend lore</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/mass-cure-wounds.html">mass cure wounds</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/mislead.html">mislead</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/modify-memory.html">modify memory</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/passwall.html">passwall</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/planar-binding.html">planar binding</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/raise-dead.html">raise dead</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/reincarnate.html">reincarnate</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/scrying.html">scrying</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/seeming.html">seeming</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/telekinesis.html">telekinesis</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/teleportation-circle.html">teleportation circle</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/tree-stride.html">tree stride</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/wall-of-fire.html">wall of force</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/wall-of-stone.html">wall of stone</a></em>

circle_6_spell
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/antipathysympathy.html">antipathy/sympathy</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/blade-barrier.html">blade barrier</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/chain-lightning.html">chain lightning</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/circle-of-death.html">circle of death</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/clone.html">clone</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/contingency.html">contingency</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/create-undead.html">create undead</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/disintegrate.html">disintegrate</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/eyebite.html">eyebite</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/find-the-path.html">find the path</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/flesh-to-stone.html">flesh to stone</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/freezing-sphere.html">freezing sphere</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/globe-of-invulnerability.html">globe of invulnerability</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/guards-and-wards.html">guards and wards</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/harm.html">harm</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/heal.html">heal</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/heroes-feast.html">heroes’ feast</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/instant-summons.html">instant summons</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/irresistible-dance.html">irresistible dance</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/magic-jar.html">magic jar</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/mass-suggestion.html">mass suggestion</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/move-earth.html">move earth</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/planar-ally.html">planar ally</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/programmed-illusion.html">programmed illusion</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/regenerate.html">regenerate</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/resurrection.html">resurrection</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/sunbeam.html">sunbeam</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/true-seeing.html">true seeing</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/wall-of-fire.html">wall of ice</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/wall-of-thorns.html">wall of thorns</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/wind-walk.html">wind walk</a></em>

circle_7_spell
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/arcane-sword.html">arcane sword</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/delayed-blast-fireball.html">delayed blast fireball</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/divine-word.html">divine word</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/etherealness.html">etherealness</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/finger-of-death.html">finger of death</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/fire-storm.html">fire storm</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/forcecage.html">forcecage</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/magnificent-mansion.html">magnificent mansion</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/mass-heal.html">mass heal</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/mirage-arcane.html">mirage arcane</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/plane-shift.html">plane shift</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/power-word-stun.html">power word stun</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/project-image.html">project image</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/regenerate.html">regenerate</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/reverse-gravity.html">reverse gravity</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/sequester.html">sequester</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/simulacrum.html">simulacrum</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/storm-of-vengeance.html">storm of vengeance</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/symbol.html">symbol</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/teleport.html">teleport</a></em>

circle_8_spell
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/animal-shapes.html">animal shapes</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/antimagic-field.html">antimagic field</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/antipathysympathy.html">antipathy/sympathy</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/clone.html">clone</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/control-water.html">control weather</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/demiplane.html">demiplane</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/earthquake.html">earthquake</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/feeblemind.html">feeblemind</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/glibness.html">glibness</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/holy-aura.html">holy aura</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/incendiary-cloud.html">incendiary cloud</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/maze.html">maze</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/mind-blank.html">mind blank</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/power-word-stun.html">power word stun</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/sunburst.html">sunburst</a></em>

circle_9_spell
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/astral-projection.html">astral projection</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/foresight.html">foresight</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/gate.html">gate</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/imprisonment.html">imprisonment</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/mass-heal.html">mass heal</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/meteor-swarm.html">meteor swarm</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/power-word-kill.html">power word kill</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/prismatic-wall.html">prismatic wall</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/shapechange.html">shapechange</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/storm-of-vengeance.html">storm of vengeance</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/time-stop.html">time stop</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/true-polymorph.html">true polymorph</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/true-resurrection.html">true resurrection</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/weird.html">weird</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/wish.html">wish</a></em>
  

condition
  aberrant
  abyssal
  acidic
  ancient
  astral
  bladed
  bloody
  buried
  celestial
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
  faerie
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
  infernal
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

origin
  draconic
  dwarven
  elven
  prehistoric
  divine
  unholy
  abyssal
  orcish
  undead
  goblinoid
  ghoulish
  dark elven
  elemental
  giant
  infernal
  cyclopean
  aberrant
  nightmarish
  astral
  ethereal
  shadowy
  feyish
  gnomish
  natural
  clockwork

item
  amulet
  arrowhead
  badge
  bell
  bird skull
  bone
  bottle
  bowl
  box
  bracelet
  brooch
  buckle
  candle
  clock
  coin
  crown
  crystal
  cup
  dagger
  die
  disc
  doll
  earring
  egg
  fan
  feather
  figurine
  finger bone
  flute
  forked rod
  game piece
  gemstone
  glass eye
  glove
  goblet
  hammer
  holy symbol
  icon
  idol
  insignia
  jar
  jeweled egg
  jewelry box
  key
  knife
  lamp
  lantern
  mask
  medallion
  mirror
  monocle
  mummified finger
  music box
  necklace
  opal
  orb
  pipe
  pipes
  portrait
  pouch of dust
  quill
  ring
  rod
  scale
  scrimshaw
  scroll
  shard
  skull
  snuffbox
  sphere
  spike
  statue
  statuette
  stone
  stone disk
  string of beads
  swordhilt
  symbol
  talon
  tiara
  tile
  tooth
  urn
  vial
  wand
  whistle
  figurine
  ink pen
  dreamcatcher

spell
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/acid-arrow.html">acid arrow</a></em> (2nd level, Uncommon, DC 13, Mod +5, 400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/acid-splash.html">acid splash</a></em> (Cantrip, Common, DC 13, Mod +5, 100 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/aid.html">aid</a></em> (2nd level, Uncommon, DC 13, Mod +5, 400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/alarm.html">alarm</a></em> (1st level, Common, DC 13, Mod +5, 200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/alter-self.html">alter self</a></em> (2nd level, Uncommon, DC 13, Mod +5, 400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/animal-friendship.html">animal friendship</a></em> (1st level, Common, DC 13, Mod +5, 200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/animal-messenger.html">animal messenger</a></em> (2nd level, Uncommon, DC 13, Mod +5, 400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/animal-shapes.html">animal shapes</a></em> (8th level, Very Rare, DC 17, Mod +9, 25,600 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/animate-dead.html">animate dead</a></em> (3rd level, Uncommon, DC 13, Mod +5, 800 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/animate-objects.html">animate objects</a></em> (5th level, Rare, DC 15, Mod +7, 3,200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/antilife-shell.html">antilife shell</a></em> (5th level, Rare, DC 15, Mod +7, 3,200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/antimagic-field.html">antimagic field</a></em> (8th level, Very Rare, DC 17, Mod +9, 25,600 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/antipathysympathy.html">antipathy/sympathy</a></em> (8th level, Very Rare, DC 17, Mod +9, 25,600 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/arcane-eye.html">arcane eye</a></em> (4th level, Rare, DC 15, Mod +7, 1,600 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/arcane-hand.html">arcane hand</a></em> (5th level, Rare, DC 15, Mod +7, 3,200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/arcane-lock.html">arcane lock</a></em> (2nd level, Uncommon, DC 13, Mod +5, 400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/arcane-sword.html">arcane sword</a></em> (7th level, Very Rare, DC 17, Mod +9, 12,800 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/arcanists-magic-aura.html">arcanist's magic aura</a></em> (2nd level, Uncommon, DC 13, Mod +5, 400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/astral-projection.html">astral projection</a></em> (9th level, Legendary, DC 19, Mod +11, 51,200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/augury.html">augury</a></em> (2nd level, Uncommon, DC 13, Mod +5, 400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/awaken.html">awaken</a></em> (5th level, Rare, DC 15, Mod +7, 3,200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/bane.html">bane</a></em> (1st level, Common, DC 13, Mod +5, 200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/banishment.html">banishment</a></em> (4th level, Rare, DC 15, Mod +7, 1,600 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/barkskin.html">barkskin</a></em> (2nd level, Uncommon, DC 13, Mod +5, 400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/beacon-of-hope.html">beacon of hope</a></em> (3rd level, Uncommon, DC 13, Mod +5, 800 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/bestow-curse.html">bestow curse</a></em> (3rd level, Uncommon, DC 13, Mod +5, 800 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/black-tentacles.html">black tentacles</a></em> (4th level, Rare, DC 15, Mod +7, 1,600 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/blade-barrier.html">blade barrier</a></em> (6th level, Very Rare, DC 17, Mod +9, 6,400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/bless.html">bless</a></em> (1st level, Common, DC 13, Mod +5, 200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/blight.html">blight</a></em> (4th level, Rare, DC 15, Mod +7, 1,600 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/blindnessdeafness.html">blindness/deafness</a></em> (2nd level, Uncommon, DC 13, Mod +5, 400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/blink.html">blink</a></em> (3rd level, Uncommon, DC 13, Mod +5, 800 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/blur.html">blur</a></em> (2nd level, Uncommon, DC 13, Mod +5, 400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/branding-smite.html">branding smite</a></em> (2nd level, Uncommon, DC 13, Mod +5, 400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/burning-hands.html">burning hands</a></em> (1st level, Common, DC 13, Mod +5, 200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/call-lightning.html">call lightning</a></em> (3rd level, Uncommon, DC 13, Mod +5, 800 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/calm-emotions.html">calm emotions</a></em> (2nd level, Uncommon, DC 13, Mod +5, 400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/chain-lightning.html">chain lightning</a></em> (6th level, Very Rare, DC 17, Mod +9, 6,400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/charm-person.html">charm person</a></em> (1st level, Common, DC 13, Mod +5, 200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/chill-touch.html">chill touch</a></em> (Cantrip, Common, DC 13, Mod +5, 100 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/circle-of-death.html">circle of death</a></em> (6th level, Very Rare, DC 17, Mod +9, 6,400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/clairvoyance.html">clairvoyance</a></em> (3rd level, Uncommon, DC 13, Mod +5, 800 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/clone.html">clone</a></em> (8th level, Very Rare, DC 17, Mod +9, 25,600 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/cloudkill.html">cloudkill</a></em> (5th level, Rare, DC 15, Mod +7, 3,200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/color-spray.html">color spray</a></em> (1st level, Common, DC 13, Mod +5, 200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/command.html">command</a></em> (1st level, Common, DC 13, Mod +5, 200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/commune.html">commune</a></em> (5th level, Rare, DC 15, Mod +7, 3,200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/commune-with-nature.html">commune with nature</a></em> (5th level, Rare, DC 15, Mod +7, 3,200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/comprehend-languages.html">comprehend languages</a></em> (1st level, Common, DC 13, Mod +5, 200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/compulsion.html">compulsion</a></em> (4th level, Rare, DC 15, Mod +7, 1,600 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/cone-of-cold.html">cone of cold</a></em> (5th level, Rare, DC 15, Mod +7, 3,200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/confusion.html">confusion</a></em> (4th level, Rare, DC 15, Mod +7, 1,600 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/conjure-animals.html">conjure animals</a></em> (3rd level, Uncommon, DC 13, Mod +5, 800 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/conjure-celestial.html">conjure celestial</a></em> (7th level, Very Rare, DC 17, Mod +9, 12,800 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/conjure-elemental.html">conjure elemental</a></em> (5th level, Rare, DC 15, Mod +7, 3,200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/conjure-fey.html">conjure fey</a></em> (6th level, Very Rare, DC 17, Mod +9, 6,400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/conjure-minor-elementals.html">conjure minor elementals</a></em> (4th level, Rare, DC 15, Mod +7, 1,600 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/conjure-woodland-beings.html">conjure woodland beings</a></em> (4th level, Rare, DC 15, Mod +7, 1,600 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/contact-other-plane.html">contact other plane</a></em> (5th level, Rare, DC 15, Mod +7, 3,200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/contagion.html">contagion</a></em> (5th level, Rare, DC 15, Mod +7, 3,200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/contingency.html">contingency</a></em> (6th level, Very Rare, DC 17, Mod +9, 6,400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/continual-flame.html">continual flame</a></em> (2nd level, Uncommon, DC 13, Mod +5, 400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/control-water.html">control water</a></em> (4th level, Rare, DC 15, Mod +7, 1,600 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/control-weather.html">control weather</a></em> (8th level, Very Rare, DC 17, Mod +9, 25,600 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/counterspell.html">counterspell</a></em> (3rd level, Uncommon, DC 13, Mod +5, 800 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/create-food-and-water.html">create food and water</a></em> (3rd level, Uncommon, DC 13, Mod +5, 800 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/create-undead.html">create undead</a></em> (6th level, Very Rare, DC 17, Mod +9, 6,400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/create-or-destroy-water.html">create or destroy water</a></em> (1st level, Common, DC 13, Mod +5, 200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/creation.html">creation</a></em> (5th level, Rare, DC 15, Mod +7, 3,200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/cure-wounds.html">cure wounds</a></em> (1st level, Common, DC 13, Mod +5, 200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/dancing-lights.html">dancing lights</a></em> (Cantrip, Common, DC 13, Mod +5, 100 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/darkness.html">darkness</a></em> (2nd level, Uncommon, DC 13, Mod +5, 400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/darkvision.html">darkvision</a></em> (2nd level, Uncommon, DC 13, Mod +5, 400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/daylight.html">daylight</a></em> (3rd level, Uncommon, DC 13, Mod +5, 800 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/death-ward.html">death ward</a></em> (4th level, Rare, DC 15, Mod +7, 1,600 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/delayed-blast-fireball.html">delayed blast fireball</a></em> (7th level, Very Rare, DC 17, Mod +9, 12,800 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/demiplane.html">demiplane</a></em> (8th level, Very Rare, DC 17, Mod +9, 25,600 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/detect-evil-and-good.html">detect evil and good</a></em> (1st level, Common, DC 13, Mod +5, 200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/detect-magic.html">detect magic</a></em> (1st level, Common, DC 13, Mod +5, 200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/detect-poison-and-disease.html">detect poison and disease</a></em> (1st level, Common, DC 13, Mod +5, 200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/detect-thoughts.html">detect thoughts</a></em> (2nd level, Uncommon, DC 13, Mod +5, 400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/dimension-door.html">dimension door</a></em> (4th level, Rare, DC 15, Mod +7, 1,600 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/disguise-self.html">disguise self</a></em> (1st level, Common, DC 13, Mod +5, 200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/disintegrate.html">disintegrate</a></em> (6th level, Very Rare, DC 17, Mod +9, 6,400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/dispel-evil-and-good.html">dispel evil and good</a></em> (5th level, Rare, DC 15, Mod +7, 3,200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/dispel-magic.html">dispel magic</a></em> (3rd level, Uncommon, DC 13, Mod +5, 800 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/divination.html">divination</a></em> (4th level, Rare, DC 15, Mod +7, 1,600 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/divine-favor.html">divine favor</a></em> (1st level, Common, DC 13, Mod +5, 200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/divine-word.html">divine word</a></em> (7th level, Very Rare, DC 17, Mod +9, 12,800 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/dominate-beast.html">dominate beast</a></em> (4th level, Rare, DC 15, Mod +7, 1,600 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/dominate-monster.html">dominate monster</a></em> (8th level, Very Rare, DC 17, Mod +9, 25,600 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/dominate-person.html">dominate person</a></em> (5th level, Rare, DC 15, Mod +7, 3,200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/dream.html">dream</a></em> (5th level, Rare, DC 15, Mod +7, 3,200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/druidcraft.html">druidcraft</a></em> (Cantrip, Common, DC 13, Mod +5, 100 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/earthquake.html">earthquake</a></em> (8th level, Very Rare, DC 17, Mod +9, 25,600 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/eldritch-blast.html">eldritch blast</a></em> (Cantrip, Common, DC 13, Mod +5, 100 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/enhance-ability.html">enhance ability</a></em> (2nd level, Uncommon, DC 13, Mod +5, 400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/enlargereduce.html">enlarge/reduce</a></em> (2nd level, Uncommon, DC 13, Mod +5, 400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/entangle.html">entangle</a></em> (1st level, Common, DC 13, Mod +5, 200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/enthrall.html">enthrall</a></em> (2nd level, Uncommon, DC 13, Mod +5, 400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/etherealness.html">etherealness</a></em> (7th level, Very Rare, DC 17, Mod +9, 12,800 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/expeditious-retreat.html">expeditious retreat</a></em> (1st level, Common, DC 13, Mod +5, 200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/eyebite.html">eyebite</a></em> (6th level, Very Rare, DC 17, Mod +9, 6,400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/fabricate.html">fabricate</a></em> (4th level, Rare, DC 15, Mod +7, 1,600 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/faerie-fire.html">faerie fire</a></em> (1st level, Common, DC 13, Mod +5, 200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/faithful-hound.html">faithful hound</a></em> (4th level, Rare, DC 15, Mod +7, 1,600 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/false-life.html">false life</a></em> (1st level, Common, DC 13, Mod +5, 200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/fear.html">fear</a></em> (3rd level, Uncommon, DC 13, Mod +5, 800 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/feather-fall.html">feather fall</a></em> (1st level, Common, DC 13, Mod +5, 200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/feeblemind.html">feeblemind</a></em> (8th level, Very Rare, DC 17, Mod +9, 25,600 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/find-familiar.html">find familiar</a></em> (1st level, Common, DC 13, Mod +5, 200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/find-steed.html">find steed</a></em> (2nd level, Uncommon, DC 13, Mod +5, 400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/find-traps.html">find traps</a></em> (2nd level, Uncommon, DC 13, Mod +5, 400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/find-the-path.html">find the path</a></em> (6th level, Very Rare, DC 17, Mod +9, 6,400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/finger-of-death.html">finger of death</a></em> (7th level, Very Rare, DC 17, Mod +9, 12,800 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/fire-bolt.html">fire bolt</a></em> (Cantrip, Common, DC 13, Mod +5, 100 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/fire-shield.html">fire shield</a></em> (4th level, Rare, DC 15, Mod +7, 1,600 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/fire-storm.html">fire storm</a></em> (7th level, Very Rare, DC 17, Mod +9, 12,800 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/fireball.html">fireball</a></em> (3rd level, Uncommon, DC 13, Mod +5, 800 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/flame-blade.html">flame blade</a></em> (2nd level, Uncommon, DC 13, Mod +5, 400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/flame-strike.html">flame strike</a></em> (5th level, Rare, DC 15, Mod +7, 3,200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/flaming-sphere.html">flaming sphere</a></em> (2nd level, Uncommon, DC 13, Mod +5, 400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/flesh-to-stone.html">flesh to stone</a></em> (6th level, Very Rare, DC 17, Mod +9, 6,400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/floating-disk.html">floating disk</a></em> (1st level, Common, DC 13, Mod +5, 200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/fly.html">fly</a></em> (3rd level, Uncommon, DC 13, Mod +5, 800 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/fog-cloud.html">fog cloud</a></em> (1st level, Common, DC 13, Mod +5, 200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/forbiddance.html">forbiddance</a></em> (6th level, Very Rare, DC 17, Mod +9, 6,400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/forcecage.html">forcecage</a></em> (7th level, Very Rare, DC 17, Mod +9, 12,800 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/foresight.html">foresight</a></em> (9th level, Legendary, DC 19, Mod +11, 51,200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/freedom-of-movement.html">freedom of movement</a></em> (4th level, Rare, DC 15, Mod +7, 1,600 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/freezing-sphere.html">freezing sphere</a></em> (6th level, Very Rare, DC 17, Mod +9, 6,400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/gaseous-form.html">gaseous form</a></em> (3rd level, Uncommon, DC 13, Mod +5, 800 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/gate.html">gate</a></em> (9th level, Legendary, DC 19, Mod +11, 51,200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/geas.html">geas</a></em> (5th level, Rare, DC 15, Mod +7, 3,200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/gentle-repose.html">gentle repose</a></em> (2nd level, Uncommon, DC 13, Mod +5, 400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/giant-insect.html">giant insect</a></em> (4th level, Rare, DC 15, Mod +7, 1,600 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/glibness.html">glibness</a></em> (8th level, Very Rare, DC 17, Mod +9, 25,600 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/globe-of-invulnerability.html">globe of invulnerability</a></em> (6th level, Very Rare, DC 17, Mod +9, 6,400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/glyph-of-warding.html">glyph of warding</a></em> (3rd level, Uncommon, DC 13, Mod +5, 800 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/goodberry.html">goodberry</a></em> (1st level, Common, DC 13, Mod +5, 200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/grease.html">grease</a></em> (1st level, Common, DC 13, Mod +5, 200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/greater-invisibility.html">greater invisibility</a></em> (4th level, Rare, DC 15, Mod +7, 1,600 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/greater-restoration.html">greater restoration</a></em> (5th level, Rare, DC 15, Mod +7, 3,200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/guardian-of-faith.html">guardian of faith</a></em> (4th level, Rare, DC 15, Mod +7, 1,600 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/guards-and-wards.html">guards and wards</a></em> (6th level, Very Rare, DC 17, Mod +9, 6,400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/guidance.html">guidance</a></em> (Cantrip, Common, DC 13, Mod +5, 100 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/guiding-bolt.html">guiding bolt</a></em> (1st level, Common, DC 13, Mod +5, 200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/gust-of-wind.html">gust of wind</a></em> (2nd level, Uncommon, DC 13, Mod +5, 400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/hallow.html">hallow</a></em> (5th level, Rare, DC 15, Mod +7, 3,200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/hallucinatory-terrain.html">hallucinatory terrain</a></em> (4th level, Rare, DC 15, Mod +7, 1,600 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/harm.html">harm</a></em> (6th level, Very Rare, DC 17, Mod +9, 6,400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/haste.html">haste</a></em> (3rd level, Uncommon, DC 13, Mod +5, 800 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/heal.html">heal</a></em> (6th level, Very Rare, DC 17, Mod +9, 6,400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/healing-word.html">healing word</a></em> (1st level, Common, DC 13, Mod +5, 200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/heat-metal.html">heat metal</a></em> (2nd level, Uncommon, DC 13, Mod +5, 400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/hellish-rebuke.html">hellish rebuke</a></em> (1st level, Common, DC 13, Mod +5, 200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/heroes-feast.html">heroes' feast</a></em> (6th level, Very Rare, DC 17, Mod +9, 6,400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/heroism.html">heroism</a></em> (1st level, Common, DC 13, Mod +5, 200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/hideous-laughter.html">hideous laughter</a></em> (1st level, Common, DC 13, Mod +5, 200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/hold-monster.html">hold monster</a></em> (5th level, Rare, DC 15, Mod +7, 3,200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/hold-person.html">hold person</a></em> (2nd level, Uncommon, DC 13, Mod +5, 400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/holy-aura.html">holy aura</a></em> (8th level, Very Rare, DC 17, Mod +9, 25,600 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/hunters-mark.html">hunter's mark</a></em> (1st level, Common, DC 13, Mod +5, 200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/hypnotic-pattern.html">hypnotic pattern</a></em> (3rd level, Uncommon, DC 13, Mod +5, 800 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/ice-storm.html">ice storm</a></em> (4th level, Rare, DC 15, Mod +7, 1,600 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/identify.html">identify</a></em> (1st level, Common, DC 13, Mod +5, 200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/illusory-script.html">illusory script</a></em> (1st level, Common, DC 13, Mod +5, 200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/imprisonment.html">imprisonment</a></em> (9th level, Legendary, DC 19, Mod +11, 51,200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/incendiary-cloud.html">incendiary cloud</a></em> (8th level, Very Rare, DC 17, Mod +9, 25,600 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/inflict-wounds.html">inflict wounds</a></em> (1st level, Common, DC 13, Mod +5, 200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/insect-plague.html">insect plague</a></em> (5th level, Rare, DC 15, Mod +7, 3,200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/instant-summons.html">instant summons</a></em> (6th level, Very Rare, DC 17, Mod +9, 6,400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/invisibility.html">invisibility</a></em> (2nd level, Uncommon, DC 13, Mod +5, 400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/irresistible-dance.html">irresistible dance</a></em> (6th level, Very Rare, DC 17, Mod +9, 6,400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/jump.html">jump</a></em> (1st level, Common, DC 13, Mod +5, 200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/knock.html">knock</a></em> (2nd level, Uncommon, DC 13, Mod +5, 400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/legend-lore.html">legend lore</a></em> (5th level, Rare, DC 15, Mod +7, 3,200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/lesser-restoration.html">lesser restoration</a></em> (2nd level, Uncommon, DC 13, Mod +5, 400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/levitate.html">levitate</a></em> (2nd level, Uncommon, DC 13, Mod +5, 400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/light.html">light</a></em> (Cantrip, Common, DC 13, Mod +5, 100 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/lightning-bolt.html">lightning bolt</a></em> (3rd level, Uncommon, DC 13, Mod +5, 800 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/locate-animals-or-plants.html">locate animals or plants</a></em> (2nd level, Uncommon, DC 13, Mod +5, 400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/locate-creature.html">locate creature</a></em> (4th level, Rare, DC 15, Mod +7, 1,600 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/locate-object.html">locate object</a></em> (2nd level, Uncommon, DC 13, Mod +5, 400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/longstrider.html">longstrider</a></em> (1st level, Common, DC 13, Mod +5, 200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/mage-armor.html">mage armor</a></em> (1st level, Common, DC 13, Mod +5, 200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/mage-hand.html">mage hand</a></em> (Cantrip, Common, DC 13, Mod +5, 100 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/magic-circle.html">magic circle</a></em> (3rd level, Uncommon, DC 13, Mod +5, 800 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/magic-jar.html">magic jar</a></em> (6th level, Very Rare, DC 17, Mod +9, 6,400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/magic-missile.html">magic missile</a></em> (1st level, Common, DC 13, Mod +5, 200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/magic-mouth.html">magic mouth</a></em> (2nd level, Uncommon, DC 13, Mod +5, 400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/magic-weapon.html">magic weapon</a></em> (2nd level, Uncommon, DC 13, Mod +5, 400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/magnificent-mansion.html">magnificent mansion</a></em> (7th level, Very Rare, DC 17, Mod +9, 12,800 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/major-image.html">major image</a></em> (3rd level, Uncommon, DC 13, Mod +5, 800 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/mass-cure-wounds.html">mass cure wounds</a></em> (5th level, Rare, DC 15, Mod +7, 3,200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/mass-heal.html">mass heal</a></em> (9th level, Legendary, DC 19, Mod +11, 51,200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/mass-healing-word.html">mass healing word</a></em> (3rd level, Uncommon, DC 13, Mod +5, 800 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/mass-suggestion.html">mass suggestion</a></em> (6th level, Very Rare, DC 17, Mod +9, 6,400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/maze.html">maze</a></em> (8th level, Very Rare, DC 17, Mod +9, 25,600 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/meld-into-stone.html">meld into stone</a></em> (3rd level, Uncommon, DC 13, Mod +5, 800 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/mending.html">mending</a></em> (Cantrip, Common, DC 13, Mod +5, 100 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/message.html">message</a></em> (Cantrip, Common, DC 13, Mod +5, 100 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/meteor-swarm.html">meteor swarm</a></em> (9th level, Legendary, DC 19, Mod +11, 51,200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/mind-blank.html">mind blank</a></em> (8th level, Very Rare, DC 17, Mod +9, 25,600 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/minor-illusion.html">minor illusion</a></em> (Cantrip, Common, DC 13, Mod +5, 100 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/mirage-arcane.html">mirage arcane</a></em> (7th level, Very Rare, DC 17, Mod +9, 12,800 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/mirror-image.html">mirror image</a></em> (2nd level, Uncommon, DC 13, Mod +5, 400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/mislead.html">mislead</a></em> (5th level, Rare, DC 15, Mod +7, 3,200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/misty-step.html">misty step</a></em> (2nd level, Uncommon, DC 13, Mod +5, 400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/modify-memory.html">modify memory</a></em> (5th level, Rare, DC 15, Mod +7, 3,200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/moonbeam.html">moonbeam</a></em> (2nd level, Uncommon, DC 13, Mod +5, 400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/move-earth.html">move earth</a></em> (6th level, Very Rare, DC 17, Mod +9, 6,400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/nondetection.html">nondetection</a></em> (3rd level, Uncommon, DC 13, Mod +5, 800 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/pass-without-trace.html">pass without trace</a></em> (2nd level, Uncommon, DC 13, Mod +5, 400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/passwall.html">passwall</a></em> (5th level, Rare, DC 15, Mod +7, 3,200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/phantasmal-killer.html">phantasmal killer</a></em> (4th level, Rare, DC 15, Mod +7, 1,600 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/phantom-steed.html">phantom steed</a></em> (3rd level, Uncommon, DC 13, Mod +5, 800 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/planar-ally.html">planar ally</a></em> (6th level, Very Rare, DC 17, Mod +9, 6,400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/planar-binding.html">planar binding</a></em> (5th level, Rare, DC 15, Mod +7, 3,200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/plane-shift.html">plane shift</a></em> (7th level, Very Rare, DC 17, Mod +9, 12,800 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/plant-growth.html">plant growth</a></em> (3rd level, Uncommon, DC 13, Mod +5, 800 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/poison-spray.html">poison spray</a></em> (Cantrip, Common, DC 13, Mod +5, 100 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/polymorph.html">polymorph</a></em> (4th level, Rare, DC 15, Mod +7, 1,600 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/power-word-kill.html">power word kill</a></em> (9th level, Legendary, DC 19, Mod +11, 51,200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/power-word-stun.html">power word stun</a></em> (8th level, Very Rare, DC 17, Mod +9, 25,600 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/prayer-of-healing.html">prayer of healing</a></em> (2nd level, Uncommon, DC 13, Mod +5, 400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/prestidigitation.html">prestidigitation</a></em> (Cantrip, Common, DC 13, Mod +5, 100 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/prismatic-spray.html">prismatic spray</a></em> (7th level, Very Rare, DC 17, Mod +9, 12,800 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/prismatic-wall.html">prismatic wall</a></em> (9th level, Legendary, DC 19, Mod +11, 51,200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/private-sanctum.html">private sanctum</a></em> (4th level, Rare, DC 15, Mod +7, 1,600 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/produce-flame.html">produce flame</a></em> (Cantrip, Common, DC 13, Mod +5, 100 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/programmed-illusion.html">programmed illusion</a></em> (6th level, Very Rare, DC 17, Mod +9, 6,400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/project-image.html">project image</a></em> (7th level, Very Rare, DC 17, Mod +9, 12,800 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/protection-from-energy.html">protection from energy</a></em> (3rd level, Uncommon, DC 13, Mod +5, 800 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/protection-from-evil-and-good.html">protection from evil and good</a></em> (1st level, Common, DC 13, Mod +5, 200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/protection-from-poison.html">protection from poison</a></em> (2nd level, Uncommon, DC 13, Mod +5, 400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/purify-food-and-drink.html">purify food and drink</a></em> (1st level, Common, DC 13, Mod +5, 200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/raise-dead.html">raise dead</a></em> (5th level, Rare, DC 15, Mod +7, 3,200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/ray-of-enfeeblement.html">ray of enfeeblement</a></em> (2nd level, Uncommon, DC 13, Mod +5, 400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/ray-of-frost.html">ray of frost</a></em> (Cantrip, Common, DC 13, Mod +5, 100 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/regenerate.html">regenerate</a></em> (7th level, Very Rare, DC 17, Mod +9, 12,800 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/reincarnate.html">reincarnate</a></em> (5th level, Rare, DC 15, Mod +7, 3,200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/remove-curse.html">remove curse</a></em> (3rd level, Uncommon, DC 13, Mod +5, 800 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/resilient-sphere.html">resilient sphere</a></em> (4th level, Rare, DC 15, Mod +7, 1,600 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/resistance.html">resistance</a></em> (Cantrip, Common, DC 13, Mod +5, 100 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/resurrection.html">resurrection</a></em> (7th level, Very Rare, DC 17, Mod +9, 12,800 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/reverse-gravity.html">reverse gravity</a></em> (7th level, Very Rare, DC 17, Mod +9, 12,800 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/revivify.html">revivify</a></em> (3rd level, Uncommon, DC 13, Mod +5, 800 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/rope-trick.html">rope trick</a></em> (2nd level, Uncommon, DC 13, Mod +5, 400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/sacred-flame.html">sacred flame</a></em> (Cantrip, Common, DC 13, Mod +5, 100 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/sanctuary.html">sanctuary</a></em> (1st level, Common, DC 13, Mod +5, 200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/scorching-ray.html">scorching ray</a></em> (2nd level, Uncommon, DC 13, Mod +5, 400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/scrying.html">scrying</a></em> (5th level, Rare, DC 15, Mod +7, 3,200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/secret-chest.html">secret chest</a></em> (4th level, Rare, DC 15, Mod +7, 1,600 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/see-invisibility.html">see invisibility</a></em> (2nd level, Uncommon, DC 13, Mod +5, 400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/seeming.html">seeming</a></em> (5th level, Rare, DC 15, Mod +7, 3,200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/sending.html">sending</a></em> (3rd level, Uncommon, DC 13, Mod +5, 800 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/sequester.html">sequester</a></em> (7th level, Very Rare, DC 17, Mod +9, 12,800 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/shapechange.html">shapechange</a></em> (9th level, Legendary, DC 19, Mod +11, 51,200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/shatter.html">shatter</a></em> (2nd level, Uncommon, DC 13, Mod +5, 400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/shield.html">shield</a></em> (1st level, Common, DC 13, Mod +5, 200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/shield-of-faith.html">shield of faith</a></em> (1st level, Common, DC 13, Mod +5, 200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/shillelagh.html">shillelagh</a></em> (Cantrip, Common, DC 13, Mod +5, 100 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/shocking-grasp.html">shocking grasp</a></em> (Cantrip, Common, DC 13, Mod +5, 100 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/silence.html">silence</a></em> (2nd level, Uncommon, DC 13, Mod +5, 400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/silent-image.html">silent image</a></em> (1st level, Common, DC 13, Mod +5, 200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/simulacrum.html">simulacrum</a></em> (7th level, Very Rare, DC 17, Mod +9, 12,800 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/sleep.html">sleep</a></em> (1st level, Common, DC 13, Mod +5, 200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/sleet-storm.html">sleet storm</a></em> (3rd level, Uncommon, DC 13, Mod +5, 800 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/slow.html">slow</a></em> (3rd level, Uncommon, DC 13, Mod +5, 800 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/spare-the-dying.html">spare the dying</a></em> (Cantrip, Common, DC 13, Mod +5, 100 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/speak-with-animals.html">speak with animals</a></em> (1st level, Common, DC 13, Mod +5, 200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/speak-with-dead.html">speak with dead</a></em> (3rd level, Uncommon, DC 13, Mod +5, 800 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/speak-with-plants.html">speak with plants</a></em> (3rd level, Uncommon, DC 13, Mod +5, 800 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/spider-climb.html">spider climb</a></em> (2nd level, Uncommon, DC 13, Mod +5, 400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/spike-growth.html">spike growth</a></em> (2nd level, Uncommon, DC 13, Mod +5, 400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/spirit-guardians.html">spirit guardians</a></em> (3rd level, Uncommon, DC 13, Mod +5, 800 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/spiritual-weapon.html">spiritual weapon</a></em> (2nd level, Uncommon, DC 13, Mod +5, 400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/stinking-cloud.html">stinking cloud</a></em> (3rd level, Uncommon, DC 13, Mod +5, 800 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/stone-shape.html">stone shape</a></em> (4th level, Rare, DC 15, Mod +7, 1,600 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/stoneskin.html">stoneskin</a></em> (4th level, Rare, DC 15, Mod +7, 1,600 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/storm-of-vengeance.html">storm of vengeance</a></em> (9th level, Legendary, DC 19, Mod +11, 51,200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/suggestion.html">suggestion</a></em> (2nd level, Uncommon, DC 13, Mod +5, 400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/sunbeam.html">sunbeam</a></em> (6th level, Very Rare, DC 17, Mod +9, 6,400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/sunburst.html">sunburst</a></em> (8th level, Very Rare, DC 17, Mod +9, 25,600 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/symbol.html">symbol</a></em> (7th level, Very Rare, DC 17, Mod +9, 12,800 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/telekinesis.html">telekinesis</a></em> (5th level, Rare, DC 15, Mod +7, 3,200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/telepathic-bond.html">telepathic bond</a></em> (5th level, Rare, DC 15, Mod +7, 3,200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/teleport.html">teleport</a></em> (7th level, Very Rare, DC 17, Mod +9, 12,800 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/teleportation-circle.html">teleportation circle</a></em> (5th level, Rare, DC 15, Mod +7, 3,200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/thaumaturgy.html">thaumaturgy</a></em> (Cantrip, Common, DC 13, Mod +5, 100 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/thunderwave.html">thunderwave</a></em> (1st level, Common, DC 13, Mod +5, 200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/time-stop.html">time stop</a></em> (9th level, Legendary, DC 19, Mod +11, 51,200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/tiny-hut.html">tiny hut</a></em> (3rd level, Uncommon, DC 13, Mod +5, 800 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/tongues.html">tongues</a></em> (3rd level, Uncommon, DC 13, Mod +5, 800 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/transport-via-plants.html">transport via plants</a></em> (6th level, Very Rare, DC 17, Mod +9, 6,400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/tree-stride.html">tree stride</a></em> (5th level, Rare, DC 15, Mod +7, 3,200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/true-polymorph.html">true polymorph</a></em> (9th level, Legendary, DC 19, Mod +11, 51,200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/true-resurrection.html">true resurrection</a></em> (9th level, Legendary, DC 19, Mod +11, 51,200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/true-seeing.html">true seeing</a></em> (6th level, Very Rare, DC 17, Mod +9, 6,400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/true-strike.html">true strike</a></em> (Cantrip, Common, DC 13, Mod +5, 100 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/unseen-servant.html">unseen servant</a></em> (1st level, Common, DC 13, Mod +5, 200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/vampiric-touch.html">vampiric touch</a></em> (3rd level, Uncommon, DC 13, Mod +5, 800 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/vicious-mockery.html">vicious mockery</a></em> (Cantrip, Common, DC 13, Mod +5, 100 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/wall-of-fire.html">wall of fire</a></em> (4th level, Rare, DC 15, Mod +7, 1,600 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/wall-of-force.html">wall of force</a></em> (5th level, Rare, DC 15, Mod +7, 3,200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/wall-of-ice.html">wall of ice</a></em> (6th level, Very Rare, DC 17, Mod +9, 6,400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/wall-of-stone.html">wall of stone</a></em> (5th level, Rare, DC 15, Mod +7, 3,200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/wall-of-thorns.html">wall of thorns</a></em> (6th level, Very Rare, DC 17, Mod +9, 6,400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/warding-bond.html">warding bond</a></em> (2nd level, Uncommon, DC 13, Mod +5, 400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/water-breathing.html">water breathing</a></em> (3rd level, Uncommon, DC 13, Mod +5, 800 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/water-walk.html">water walk</a></em> (3rd level, Uncommon, DC 13, Mod +5, 800 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/web.html">web</a></em> (2nd level, Uncommon, DC 13, Mod +5, 400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/weird.html">weird</a></em> (9th level, Legendary, DC 19, Mod +11, 51,200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/wind-walk.html">wind walk</a></em> (6th level, Very Rare, DC 17, Mod +9, 6,400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/wind-wall.html">wind wall</a></em> (3rd level, Uncommon, DC 13, Mod +5, 800 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/wish.html">wish</a></em> (9th level, Legendary, DC 19, Mod +11, 51,200 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/word-of-recall.html">word of recall</a></em> (6th level, Very Rare, DC 17, Mod +9, 6,400 GP)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/zone-of-truth.html">zone of truth</a></em> (2nd level, Uncommon, DC 13, Mod +5, 400 GP)

`;