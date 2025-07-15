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
  [[400-600]] CP, [[175-225]] SP, [[100-150]] GP<br>[[1-4]] x {gem_25}<br>{common_art}
  
magic_items_1_4
  {common_magic_item}<br>{uncommon_consumable}<br>{uncommon_consumable}<br>{uncommon_magic_item}

treasure_5_10
  [[300-700]] SP, [[800-1000]] GP, [[25-75]] PP<br>[[4-6]] x {gem_100}<br>{common_art}<br>{uncommon_art}
  
magic_items_5_10
  {common_magic_item}<br>{{uncommon_consumable}|{rare_consumable}}<br>{{uncommon_consumable}|{rare_consumable}}<br>{{uncommon_magic_item}|{rare_magic_item}}

treasure_11_16
  [[4000-5000]] GP, [[175-225]] PP<br>[[1-5]] x {gem_500}<br>{uncommon_art}<br>{rare_art}
  
magic_items_11_16
  {{uncommon_consumable}|{rare_consumable}|{very_rare_consumable}}<br>{{uncommon_consumable}|{rare_consumable}|{very_rare_consumable}}<br>{{uncommon_magic_item}|{rare_magic_item}|{very_rare_magic_item}}

treasure_17_20
  [[8000-12000]] GP, [[800-1200]] PP<br>[[3-7]] x {gem_1000}<br>1 x {gem_5000}<br>{rare_art}<br>{very_rare_art}<br>{legendary_art}
  
magic_items_17_20
  {{rare_consumable}|{very_rare_consumable}|{legendary_consumable}}<br>{{rare_consumable}|{very_rare_consumable}|{legendary_consumable}}<br>{{rare_magic_item}|{very_rare_magic_item}|{legendary_magic_item}}


gem_25
  agate gemstones (25 gp each)
  clear quartz gemstones (25 gp each)
  hematite gemstones (25 gp each)
  jasper gemstones (25 gp each)
  malachite gemstones (25 gp each)
  obsidian glass gemstones (25 gp each)
  rhodochrosite gemstones (25 gp each)
  tiger's eye gemstones (25 gp each)
  tinted quartz gemstones (25 gp each)
  turquoise gemstones (25 gp each)
  
gem_100
  amethyst gemstones (100 gp each)
  bloodstone gemstones (100 gp each)
  carnelian gemstones (100 gp each)
  chalcedony gemstones (100 gp each)
  citrine gemstones (100 gp each)
  lapis lazuli gemstones (100 gp each)
  moonstone gemstones (100 gp each)
  onyx gemstones (100 gp each)
  spinel gemstones (100 gp each)
  zircon gemstones (100 gp each)
 
gem_500
  amber gemstones (500 gp each)
  azurite gemstones (500 gp each)
  coral gemstones (500 gp each)
  garnet gemstones (500 gp each)
  jade gemstones (500 gp each)
  jet gemstones (500 gp each)
  larimar pectolite gemstones (500 gp each)
  pearl gemstones (500 gp each)
  rubellite gemstones (500 gp each)
  tourmaline gemstones (500 gp each)

gem_1000
  alexandrite gemstones (1,000 gp each)
  ammolite gemstones (1,000 gp each)
  aquamarine gemstones (1,000 gp each)
  black pearl gemstones (1,000 gp each)
  blue spinel gemstones (1,000 gp each)
  opal gemstones (1,000 gp each)
  peridot gemstones (1,000 gp each)
  topaz gemstones (1,000 gp each)
  tsavorite gemstones (1,000 gp each)
  zoisite gemstones (1,000 gp each)

gem_5000
  black opal gemstones (5,000 gp each)
  canary diamond gemstones (5,000 gp each)
  emerald gemstones (5,000 gp each)
  fire opal gemstones (5,000 gp each)
  jacinth gemstones (5,000 gp each)
  ruby gemstones (5,000 gp each)
  diamond gemstones (5,000 gp each)
  sapphire gemstones (5,000 gp each)
  star ruby gemstones (5,000 gp each)
  star sapphire gemstones (5,000 gp each)

common_art
  {condition} {origin} amethyst-studded hand mirror (50 gp)
  {condition} {origin} copper incense bowl (50 gp)
  {condition} {origin} embroidered silk head scarf (50 gp)
  {condition} {origin} gilded memento mori locket (50 gp)
  {condition} {origin} glass eyeball (50 gp)
  {condition} {origin} jar of pickled monstrosity parts (50 gp)
  {condition} {origin} ornamental hair comb (50 gp)
  {condition} {origin} pair of carnelian earrings (50 gp)
  {condition} {origin} pewter statuette (50 gp)
  {condition} {origin} silver serving tray (50 gp)

uncommon_art
  {condition} {origin} brass medal inlaid with citrine (500 gp)
  {condition} {origin} fine set of silver serving utensils (500 gp)
  {condition} {origin} gilded pet cage with polished amber handle (500 gp)
  {condition} {origin} gold bracelet and earring set (500 gp)
  {condition} {origin} handmade embroidered wedding gown (500 gp)
  {condition} {origin} ivory tusk with scrimshaw and gold end caps (500 gp)
  {condition} {origin} silver chalice with chrysoprase inlay (500 gp)
  {condition} {origin} silver reliquary with lapis lazuli and red onyx (500 gp)
  {condition} {origin} taxidermized beast statue (500 gp)
  {condition} {origin} turquoise-adorned belt with silver clasp (500 gp)

rare_art
  {condition} {origin} amber and coral ship in bottle (2,500 gp)
  {condition} {origin} ceremonial copper mask with monstrosity-leather lining (2,500 gp)
  {condition} {origin} exotic and fragile flower germinated in chiseled quartz pot (2,500 gp)
  {condition} {origin} exquisite portrait of high military officer with gilded frame (2,500 gp)
  {condition} {origin} full-sized silver mirror with obsidian corner guards (2,500 gp)
  {condition} {origin} jade statuette with moonstone eyes (2,500 gp)
  {condition} {origin} jar of pickled aberration parts (2,500 gp)
  {condition} {origin} lute of exotic wood with mother-of-pearl fretboard (signed by a prestigious bard or craftsman) (2,500 gp)
  {condition} {origin} ornamental saber with golden handle and blade (2,500 gp)
  {condition} {origin} sanded coral idol with pearl eyes (2,500 gp)

very_rare_art
  {condition} {origin} amber statuette with peridot accents (5,000 gp)
  {condition} {origin} aquamarine beast statuette (5,000 gp)
  {condition} {origin} gaming set with ebony and amber pieces (5,000 gp)
  {condition} {origin} gold and black pearl lion-head pommel cap (5,000 gp)
  {condition} {origin} gold diadem set with star ruby (5,000 gp)
  {condition} {origin} ivory crown with silver ornamentation (5,000 gp)
  {condition} {origin} jewel-encrusted opera shoes (5,000 gp)
  {condition} {origin} marble masterpiece bust sculpture (5,000 gp)
  {condition} {origin} platinum and diamond ring (5,000 gp)
  {condition} {origin} tapestry woven with gold and silver thread (5,000 gp)

legendary_art
  {condition} {origin} black sapphire idol (10,000 gp)
  {condition} {origin} gold and emerald ceremonial chalices (10,000 gp)
  {condition} {origin} golden crown crusted with rubies and sapphires (10,000 gp)
  {condition} {origin} golden dagger with jacinth pommel (10,000 gp)
  {condition} {origin} golden harp with platinum strings (10,000 gp)
  {condition} {origin} jar of pickled dragon parts (10,000 gp)
  {condition} {origin} sapphire (translucent, deep blue) (10,000 gp)
  {condition} {origin} pair of jeweled golden vambraces (10,000 gp)
  {condition} {origin} quartet of ebony and gold canopic jars (10,000 gp)
  {condition} {origin} solid gold, diamond-crusted breastplate (10,000 gp)

ammunition
  bolts ^2
  arrows ^4
  bullets
  darts

armor
  {condition} {origin} padded
  {condition} {origin} leather
  {condition} {origin} studded leather
  {condition} {origin} brigandine
  {condition} {origin} hide
  {condition} {origin} chain shirt
  {condition} {origin} scale mail
  {condition} {origin} breastplate
  {condition} {origin} half plate
  {condition} {origin} ring mail
  {condition} {origin} chain mail
  {condition} {origin} splint
  {condition} {origin} plate

weapon
  {condition} {origin} club
  {condition} {origin} dagger
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
  {condition} {origin} shortbow
  {condition} {origin} sling
  {condition} {origin} battleaxe
  {condition} {origin} flail
  {condition} {origin} glaive
  {condition} {origin} greataxe
  {condition} {origin} greatsword
  {condition} {origin} halberd
  {condition} {origin} lance
  {condition} {origin} longsword
  {condition} {origin} maul
  {condition} {origin} morningstar
  {condition} {origin} pike
  {condition} {origin} rapier
  {condition} {origin} scimitar
  {condition} {origin} scythe
  {condition} {origin} shortsword
  {condition} {origin} trident
  {condition} {origin} war pick
  {condition} {origin} warhammer
  {condition} {origin} whip
  {condition} {origin} blowgun
  {condition} {origin} crossbow, hand
  {condition} {origin} crossbow, heavy
  {condition} {origin} longbow

uncommon_consumable
  ammunition, hampering (uncommon) ({ammunition})
  ammunition, magic +1 (uncommon) ({ammunition})
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/dust-of-disappearance.html">dust of disappearance</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/dust-of-dryness.html">dust of dryness</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/dust-of-sneezing-and-choking.html">dust of sneezing and choking</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/elemental-gem.html">elemental gem</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/oil-of-slipperiness.html">oil of slipperiness</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/potion-of-animal-friendship.html">potion of animal friendship</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/potion-of-climbing.html">potion of climbing</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/potion-of-giant-strength.html">potion of giant strength</a> (hill) (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/potion-of-healing.html">potion of healing</a> (uncommon) ^5
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/potion-of-resistance.html">potion of resistance</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/potion-of-water-breathing.html">potion of water breathing</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/restorative-ointment.html">restorative ointment</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/spell-scroll.html">spell scroll</a> (cantrip) ({cantrip}) (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/spell-scroll.html">spell scroll</a> (1st circle) ({circle_1_spell}) (uncommon) ^5
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/spell-scroll.html">spell scroll</a> (2nd circle) ({circle_2_spell} (uncommon)) ^2

rare_consumable
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/dust-of-disappearance.html">dust of disappearance</a> (uncommon)
  ammunition, hampering (common)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/dust-of-dryness.html">dust of dryness</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/dust-of-sneezing-and-choking.html">dust of sneezing and choking</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/elemental-gem.html">elemental gem</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/feather-token.html">feather token</a> (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/oil-of-sharpness.html">oil of sharpness</a> (very rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/oil-of-slipperiness.html">oil of slipperiness</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/potion-of-animal-friendship.html">potion of animal friendship</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/potion-of-clairvoyance.html">potion of clairvoyance</a> (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/potion-of-climbing.html">potion of climbing</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/potion-of-diminution.html">potion of diminution</a> (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/potion-of-gaseous-form.html">potion of gaseous form</a> (rare)
  ammunition, magic +1 ({ammunition})
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/potion-of-giant-strength.html">potion of giant strength</a> (frost)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/potion-of-giant-strength.html">potion of giant strength</a> (stone)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/potion-of-healing.html">potion of healing</a> (greater) ^5
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/potion-of-heroism.html">potion of heroism</a> (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/potion-of-mind-reading.html">potion of mind reading</a> (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/potion-of-resistance.html">potion of resistance</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/potion-of-water-breathing.html">potion of water breathing</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/restorative-ointment.html">restorative ointment</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/spell-scroll.html">spell scroll</a> (2nd circle) ({circle_2_spell}) (uncommon) ^5
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/spell-scroll.html">spell scroll</a> (3rd circle) ({circle_3_spell}) (uncommon) ^2
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/spell-scroll.html">spell scroll</a> (4th circle) ({circle_4_spell}) (rare)

very_rare_consumable
  ammunition, hampering (common)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/arrow-of-slaying.html">arrow of slaying</a> (very rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/dust-of-disappearance.html">dust of disappearance</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/dust-of-dryness.html">dust of dryness</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/dust-of-sneezing-and-choking.html">dust of sneezing and choking</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/elemental-gem.html">elemental gem</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/feather-token.html">feather token</a> (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/oil-of-etherealness.html">oil of etherealness</a> (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/oil-of-sharpness.html">oil of sharpness</a> (very rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/oil-of-slipperiness.html">oil of slipperiness</a> (uncommon)
  ammunition, magic +2 ({ammunition})
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/potion-of-animal-friendship.html">potion of animal friendship</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/potion-of-clairvoyance.html">potion of clairvoyance</a> (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/potion-of-climbing.html">potion of climbing</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/potion-of-diminution.html">potion of diminution</a> (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/potion-of-flying.html">potion of flying</a> (very rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/potion-of-gaseous-form.html">potion of gaseous form</a> (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/potion-of-giant-strength.html">potion of giant strength</a> (fire)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/potion-of-giant-strength.html">potion of giant strength</a> (cloud)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/potion-of-healing.html">potion of healing</a> (superior) ^5
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/potion-of-heroism.html">potion of heroism</a> (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/potion-of-invisibility.html">potion of invisibility</a> (very rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/bead-of-force.html">bead of force</a> (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/potion-of-mind-reading.html">potion of mind reading</a> (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/potion-of-resistance.html">potion of resistance</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/potion-of-speed.html">potion of speed</a> (very rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/potion-of-water-breathing.html">potion of water breathing</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/restorative-ointment.html">restorative ointment</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/spell-scroll.html">spell scroll</a> (5th circle) ({circle_5_spell}) (rare) ^5
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/spell-scroll.html">spell scroll</a> (6th circle) ({circle_6_spell}) (very rare) ^2
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/spell-scroll.html">spell scroll</a> (7th circle) ({circle_7_spell}) (very rare)

legendary_consumable
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/potion-of-speed.html">potion of speed</a> (very rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/sovereign-glue.html">sovereign glue</a> (legendary)
  ammunition, hampering (common)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/arrow-of-slaying.html">arrow of slaying</a> (very rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/dust-of-disappearance.html">dust of disappearance</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/dust-of-dryness.html">dust of dryness</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/dust-of-sneezing-and-choking.html">dust of sneezing and choking</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/elemental-gem.html">elemental gem</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/feather-token.html">feather token</a> (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/oil-of-etherealness.html">oil of etherealness</a> (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/oil-of-sharpness.html">oil of sharpness</a> (very rare)
  ammunition, magic +3 ({ammunition})
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/oil-of-slipperiness.html">oil of slipperiness</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/potion-of-animal-friendship.html">potion of animal friendship</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/potion-of-clairvoyance.html">potion of clairvoyance</a> (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/potion-of-climbing.html">potion of climbing</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/potion-of-diminution.html">potion of diminution</a> (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/potion-of-flying.html">potion of flying</a> (very rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/potion-of-gaseous-form.html">potion of gaseous form</a> (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/potion-of-giant-strength.html">potion of giant strength</a> (cloud) (very rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/potion-of-giant-strength.html">potion of giant strength</a> (storm) (legendary)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/potion-of-healing.html">potion of healing</a> (supreme) ^5
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/bead-of-force.html">bead of force</a> (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/potion-of-heroism.html">potion of heroism</a> (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/potion-of-invisibility.html">potion of invisibility</a> (very rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/potion-of-mind-reading.html">potion of mind reading</a> (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/potion-of-resistance.html">potion of resistance</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/potion-of-water-breathing.html">potion of water breathing</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/restorative-ointment.html">restorative ointment</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/spell-scroll.html">spell scroll</a> (7th circle) ({circle_7_spell}) (very rare) ^5
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/spell-scroll.html">spell scroll</a> (8th circle) ({circle_8_spell}) (very rare) ^2
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/spell-scroll.html">spell scroll</a> (9th circle) ({circle_9_spell}) (legendary)

common_magic_item
  anklets of alacrity (common)
  beast buckle (common)
  boots of galloping (common)
  bracers of baleful reprisal (common)
  dancing lockpicks (common)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/eyes-of-minute-seeing.html">eyes of minute seeing</a> (common)
  featherlight {armor} armor (common)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/gem-of-brightness.html">gem of brightness</a> (common)
  slipforged {armor} armor  (common)
  lucky roller dice (common)
  mailbreaker (common)
  pendulous periapt (common)
  periapt of the small but mighty (common)
  quick quaff bandolier (common)
  quickbuckle {armor} armor (common)
  quillback {armor} armor (common)
  reciprocating polearm (common)
  returning charm (common)
  ring of deceiver’s warning (common)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/ring-of-jumping.html">ring of jumping</a> (common)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/ring-of-swimming.html">ring of swimming</a> (common)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/rope-of-climbing.html">rope of climbing</a> (common)
  shield of clamor (common)
  staff of false hues (common)
  surefire stock pot (common)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/wand-of-magic-detection.html">wand of magic detection</a> (common)

uncommon_magic_item
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/headband-of-intellect.html">headband of intellect</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/amulet-of-proof-against-detection-and-location.html">amulet of proof against detection and location</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/bag-of-holding.html">bag of holding</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/bag-of-tricks.html">bag of tricks</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/lantern-of-revealing.html">lantern of revealing</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/boots-of-striding-and-springing.html">boots of striding and springing</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/immovable-rod.html">immovable rod</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/bracers-of-archery.html">bracers of archery</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/brooch-of-shielding.html">brooch of shielding</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/broom-of-flying.html">broom of flying</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/circlet-of-blasting.html">circlet of blasting</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/periapt-of-wound-closure.html">periapt of wound closure</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/cloak-of-protection.html">cloak of protection</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/cloak-of-the-manta-ray.html">cloak of the manta ray</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/decanter-of-endless-water.html">decanter of endless water</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/boots-of-elvenkind.html">boots of elvenkind</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/efficient-quiver.html">effcient quiver</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/hat-of-disguise.html">hat of disguise</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/eyes-of-charming.html">eyes of charming</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/slippers-of-spider-climbing.html">slippers of spider climbing</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/eyes-of-the-eagle.html">eyes of the eagle</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/figurine-of-wondrous-power.html">figurine of wondrous power</a> (silver raven) (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/necklace-of-adaptation.html">necklace of adaptation</a> (uncommon)
  bagpipes of battle (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/ring-of-feather-falling.html">ring of feather falling</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/periapt-of-health.html">periapt of health</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/helm-of-telepathy.html">helm of telepathy</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/ring-of-water-walking.html">ring of water walking</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/javelin-of-lightning.html">javelin of lightning</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/staff-of-the-python.html">staff of the python</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/medallion-of-thoughts.html">medallion of thoughts</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/wand-of-magic-missiles.html">wand of magic missiles</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/pearl-of-power.html">pearl of power</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/trident-of-fish-command.html">trident of fish command</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/ring-of-mind-shielding.html">ring of mind shielding</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/pipes-of-haunting.html">pipes of haunting</a> (uncommon)
  stone of good luck (luckstone) (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/goggles-of-night.html">goggles of night</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/winged-boots.html">winged boots</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/gloves-of-missile-snaring.html">gloves of missile snaring</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/wand-of-secrets.html">wand of secrets</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/gauntlets-of-ogre-power.html">gauntlets of ogre power</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/robe-of-useful-items.html">robe of useful items</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/gloves-of-swimming-and-climbing.html">gloves of swimming and climbing</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/cloak-of-elvenkind.html">cloak of elvenkind</a> (uncommon)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/wand-of-web.html">wand of web</a> (uncommon)
  +1 {weapon} (uncommon) ^10
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/boots-of-the-winterlands.html">boots of the winterlands</a> (uncommon)
  wand of the war mage +1 (uncommon)
  +1 shield (uncommon)

rare_magic_item
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/arrow-catching-shield.html">arrow-catching shield</a> (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/wings-of-flying.html">wings of flying</a> (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/belt-of-giant-strength.html">belt of giant strength</a> (hill) (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/boots-of-levitation.html">boots of levitation</a> (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/ring-of-animal-influence.html">ring of animal influence</a> (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/boots-of-speed.html">boots of speed</a> (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/handy-haversack.html">handy haversack</a> (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/rope-of-entanglement.html">rope of entanglement</a> (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/chime-of-opening.html">chime of opening</a> (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/horn-of-blasting.html">horn of blasting</a> (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/cape-of-the-mountebank.html">cape of the mountebank</a> (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/iron-bands-of-binding.html">iron bands of binding</a> (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/mace-of-terror.html">mace of terror</a> (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/bowl-of-commanding-water-elementals.html">bowl of commanding water elementals</a> (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/ioun-stone.html">loun stone</a> (reserve) (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/gem-of-seeing.html">gem of seeing</a> (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/ring-of-the-ram.html">ring of the ram</a> (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/periapt-of-proof-against-poison.html">periapt of proof against poison</a> (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/rod-of-rulership.html">rod of rulership</a> (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/ioun-stone.html">loun stone</a> (sustenance) (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/ring-of-resistance.html">ring of resistance</a> (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/dagger-of-venom.html">dagger of venom</a> (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/ring-of-x-ray-vision.html">ring of x-ray vision</a> (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/feather-token.html">feather token</a> (any) (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/ring-of-protection.html">ring of protection</a> (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/bracers-of-defense.html">bracers of defense</a> (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/staff-of-healing.html">staff of healing</a> (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/cloak-of-the-bat.html">cloak of the bat</a> (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/staff-of-swarming-insects.html">staff of swarming insects</a> (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/stone-of-controlling-earth-elementals.html">stone of controlling earth elements</a> (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/mace-of-disruption.html">mace of disruption</a> (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/staff-of-the-woodlands.html">staff of the woodlands</a> (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/wand-of-enemy-detection.html">wand of enemy detection</a> (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/wand-of-paralysis.html">wand of paralysis</a> (rare)
  wand of the war mage +2 (rare)
  +2 {weapon} (rare) ^10
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/cube-of-force.html">cube of force</a> (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/censer-of-controlling-air-elementals.html">censer of controlling air elementals</a> (rare)
  giant slayer {weapon} (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/necklace-of-prayer-beads.html">necklace of prayer beads</a> (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/ring-of-evasion.html">ring of evasion</a> (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/figurine-of-wondrous-power.html">figuring of wonderous power</a> (any but obsidian steed) (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/brazier-of-commanding-fire-elementals.html">brazier of commanding fire elementals</a> (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/necklace-of-fireballs.html">necklace of fireballs</a> (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/armor-of-resistance.html">armor of resistance</a> (rare)
  flame tongue {weapon} (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/helm-of-teleportation.html">helm of teleportation</a> (rare)
  +2 shield (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/dimensional-shackles.html">dimensional shackles</a> (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/ioun-stone.html">loun stone</a> (awareness) (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/mantle-of-spell-resistance.html">mantle of spell resistance</a> (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/amulet-of-health.html">amulet of health</a> (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/ioun-stone.html">loun stone</a> (protection) (rare)
  dragon slayer {weapon} (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/instant-fortress.html">instant fortress</a> (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/portable-hole.html">portable hole</a> (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/ring-of-spell-storing.html">ring of spell storing</a> (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/mace-of-smiting.html">mace of smiting</a> (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/ring-of-free-action.html">ring of free action</a> (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/robe-of-eyes.html">robe of eyes</a> (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/bag-of-beans.html">bag of beans</a> (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/rod-of-rulership.html">rod of rulership</a> (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/sword-of-wounding.html">sword of wounding</a> (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/belt-of-dwarvenkind.html">belt of dwarvenkind</a> (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/staff-of-withering.html">staff of withering</a> (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/wand-of-fireballs.html">wand of fireballs</a> (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/sun-blade.html">sun blade</a> (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/sword-of-life-stealing.html">sword of life stealing</a> (rare)
  +1 {armor} armor (rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/wand-of-wonder.html">wand of wonder</a> (rare)

very_rare_magic_item
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/cloak-of-displacement.html">cloak of displacement</a> (very rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/helm-of-brilliance.html">helm of brilliance</a> (very rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/figurine-of-wondrous-power.html">figurine of wonderous power</a> (obsidian steed) (very rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/belt-of-giant-strength.html">belt of giant strength</a> (frost/stone) (very rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/marvelous-pigments.html">marvelous pigments</a> (very rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/frost-brand.html">frost brand</a> (very rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/dancing-sword.html">dancing sword</a> (very rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/rod-of-absorption.html">rod of absorption</a> (very rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/efreeti-bottle.html">efreeti bottle</a> (very rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/ioun-stone.html">loun stone</a> (fortitude) (very rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/animated-shield.html">animated shield</a> (very rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/robe-of-scintillating-colors.html">robe of scintillating colors</a> (very rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/dwarven-plate.html">dwarven plate</a> (very rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/dragon-scale-mail.html">dragon scale mail</a> (very rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/carpet-of-flying.html">carpet of flying</a> (very rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/ioun-stone.html">loun stone</a> (absorption) (very rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/dwarven-thrower.html">dwarven thrower</a> (very rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/crystal-ball.html">crystal ball</a> (very rare)
  nine lives stealer {weapon} (very rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/staff-of-power.html">staff of power</a> (very rare)
  manual of advantageous exertion (very rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/ring-of-regeneration.html">ring of regeneration</a> (very rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/horseshoes-of-a-zephyr.html">horseshoes of the zephyr</a> (very rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/ioun-stone.html">loun stone</a> (agility) (very rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/belt-of-giant-strength.html">belt of giant strength</a> (fire) (very rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/robe-of-stars.html">robe of stars</a> (very rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/wand-of-polymorph.html">wand of polymorph</a> (very rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/staff-of-thunder-and-lightning.html">staff of thunder and lighting</a> (very rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/scimitar-of-speed.html">scimitar of speed</a> (very rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/rod-of-security.html">rod of security</a> (very rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/ioun-stone.html">loun stone</a> (strength) (very rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/staff-of-striking.html">staff of striking</a> (very rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/sword-of-sharpness.html">sword of sharpness</a> (very rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/ring-of-shooting-stars.html">ring of shooting stars</a> (very rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/cloak-of-arachnida.html">cloak of arachnida</a> (very rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/ioun-stone.html">loun stone</a> (leadership) (very rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/rod-of-alertness.html">rod of alertness</a> (very rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/ring-of-telekinesis.html">ring of telekinesis</a> (very rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/staff-of-frost.html">staff of frost</a> (very rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/vicious-weapon.html">vicious {weapon}</a>  (very rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/staff-of-fire.html">staff of fire</a> (very rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/manual-of-golems.html">manual of golems</a> (very rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/ioun-stone.html">loun stone</a> (insight) (very rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/spellguard-shield.html">spellguard shield</a> (very rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/ioun-stone.html">loun stone</a> (intellect) (very rare)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/oathbow.html">oathbow</a> (very rare)
  wand of the war mage +3 (very rare)
  +3 {weapon} (very rare) ^10
  +2 {armor} armor (very rare)
  +3 shield (very rare)

legendary_magic_item
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/apparatus-of-the-crab.html">apparatus of the crab</a> (legendary)
  +3 {armor} armor (legendary)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/crystal-ball.html">crystal ball</a> of mind reading (legendary)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/iron-flask.html">iron flask</a> (legendary)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/crystal-ball.html">crystal ball</a> of telepathy (legendary)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/luck-blade.html">luck blade</a> (legendary)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/belt-of-giant-strength.html">belt of giant strength</a> (cloud) (legendary)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/ring-of-djinni-summoning.html">ring of djinni summoning</a> (legendary)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/ring-of-spell-storing.html">ring of spell turning</a> (legendary)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/crystal-ball.html">crystal ball</a> of true seeing (legendary)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/potion-of-invisibility.html">ring of invisibility</a> (legendary)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/defender.html">defender</a> (legendary)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/ioun-stone.html">loun stone</a> (mastery) (legendary)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/belt-of-giant-strength.html">belt of giant strength</a> (storm) (legendary)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/ring-of-three-wishes.html">ring of three wishes</a> (legendary)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/robe-of-the-archmagi.html">robes of the archmagi</a> (legendary)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/staff-of-the-magi.html">staff of the magi</a> (legendary)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/universal-solvent.html">universal solvent</a> (legendary)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/holy-avenger.html">holy avenger</a> (legendary)
  <a href\="../../magic_items/html/5.1_srd_(d&d_2014)/vorpal-sword.html">vorpal sword</a> (legendary)

cantrip
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/acid-splash.html">acid splash</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/dancing-lights.html">dancing lights</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/druidcraft.html">druidcraft</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/fire-bolt.html">fire bolt</a></em>
  <em>grave touch</em>
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
  <em>create familiar</em>
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
  <em>fire under the tongue</em>
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
  <em>pendulum</em>
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
  <em>circle of stones</em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/clairvoyance.html">clairvoyance</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/continual-flame.html">continual flame</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/darkness.html">darkness</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/darkvision.html">darkvision</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/detect-thoughts.html">detect thoughts</a></em>
  <em>elemental blade</em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/enhance-ability.html">enhance ability</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/enlargereduce.html">enlarge/reduce</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/enthrall.html">enthrall</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/find-steed.html">find steed</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/flaming-sphere.html">flaming sphere</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/gentle-repose.html">gentle repose</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/gust-of-wind.html">gust of wind</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/heat-metal.html">heat metal</a></em>
  <em>hold</em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/invisibility.html">invisibility</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/knock.html">knock</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/levitate.html">levitate</a></em>
  <em>locate</em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/magic-circle.html">magic circle</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/magic-weapon.html">magic weapon</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/mirror-image.html">mirror image</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/misty-step.html">misty step</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/moonbeam.html">moonbeam</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/pass-without-trace.html">pass without trace</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/prayer-of-healing.html">prayer of healing</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/protection-from-poison.html">protection from poison</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/ray-of-enfeeblement.html">ray of enfeeblement</a></em>
  <em>restoration</em>
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
  <em>wildsense</em>
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
  <em>elemental blade</em>
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
  <em>elemental shield</em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/faithful-hound.html">faithful hound</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/fabricate.html">fabricate</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/freedom-of-movement.html">freedom of movement</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/giant-insect.html">giant insect</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/greater-invisibility.html">greater invisibility</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/guardian-of-faith.html">guardian of faith</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/hallucinatory-terrain.html">hallucinatory terrain</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/ice-storm.html">ice storm</a></em>
  <em>mass faerie fire</em>
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
  <em>dominate</em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/dream.html">dream</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/geas.html">geas</a></em>
  <em>greater hold</em>
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
  <em>oculus blossoms</em>
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
  <em>four winds</em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/magnificent-mansion.html">magnificent mansion</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/mass-heal.html">mass heal</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/mirage-arcane.html">mirage arcane</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/plane-shift.html">plane shift</a></em>
  <em>power word recover</em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/power-word-stun.html">power word stun</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/project-image.html">project image</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/regenerate.html">regenerate</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/reverse-gravity.html">reverse gravity</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/sequester.html">sequester</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/simulacrum.html">simulacrum</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/storm-of-vengeance.html">storm of vengeance</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/symbol.html">symbol</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/teleport.html">teleport</a></em>
  <em>transmogrification</em>

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
  <em>greater dominate</em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/holy-aura.html">holy aura</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/incendiary-cloud.html">incendiary cloud</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/maze.html">maze</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/mind-blank.html">mind blank</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/power-word-stun.html">power word stun</a></em>
  <em><a href\="../../spells/html/5.1_srd_(d&d_2014)/sunburst.html">sunburst</a></em>
  <em>tidal wave</em>

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

`;