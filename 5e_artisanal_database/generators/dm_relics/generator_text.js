const dataText = `
template
    {race} {condition} {item} that casts {spell}.

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

spell
  <em><a href="../../spells/html/deep_magic_5e/abhorrent-apparition.html">abhorrent apparition</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/accelerate.html">accelerate</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/acid-gate.html">acid gate</a></em> (7th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/deep_magic_5e/acid-rain.html">acid rain</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/deep_magic_5e/adjust-position.html">adjust position</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/afflict-line.html">afflict line</a></em> (9th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/deep_magic_5e/agonizing-mark.html">agonizing mark</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/alchemical-form.html">alchemical form</a></em> (6th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/deep_magic_5e/ale-dritch-blast.html">ale-dritch blast</a></em> (Cantrip, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/ally-aegis.html">ally aegis</a></em> (6th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/deep_magic_5e/alone.html">alone</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/alter-arrows-fortune.html">alter arrow’s fortune</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/altheas-travel-tent.html">althea’s travel tent</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/amplify-gravity.html">amplify gravity</a></em> (7th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/deep_magic_5e/analyze-device.html">analyze device</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/ancestors-strength.html">ancestor’s strength</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/anchoring-rope.html">anchoring rope</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/ancient-shade.html">ancient shade</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/deep_magic_5e/angelic-guardian.html">angelic guardian</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/animate-ghoul.html">animate ghoul</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/animate-greater-undead.html">animate greater undead</a></em> (6th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/deep_magic_5e/animated-scroll.html">animated scroll</a></em> (Cantrip, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/anticipate-arcana.html">anticipate arcana</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/anticipate-attack.html">anticipate attack</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/anticipate-weakness.html">anticipate weakness</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/arcane-sight.html">arcane sight</a></em> (8th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/deep_magic_5e/as-you-were.html">as you were</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/ashen-memories.html">ashen memories</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/aspect-of-the-dragon.html">aspect of the dragon</a></em> (7th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/deep_magic_5e/aspect-of-the-serpent.html">aspect of the serpent</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/aura-of-protection-or-destruction.html">aura of protection or destruction</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/auspicious-warning.html">auspicious warning</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/avoid-grievous-injury.html">avoid grievous injury</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/avronins-astral-assembly.html">avronin’s astral assembly</a></em> (6th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/deep_magic_5e/awaken-object.html">awaken object</a></em> (8th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/deep_magic_5e/bad-timing.html">bad timing</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/batsense.html">batsense</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/become-nightwing.html">become nightwing</a></em> (6th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/deep_magic_5e/beguiling-bet.html">beguiling bet</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/benediction.html">benediction</a></em> (Cantrip, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/bestial-fury.html">bestial fury</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/binding-oath.html">binding oath</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/biting-arrow.html">biting arrow</a></em> (Cantrip, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/bitter-chains.html">bitter chains</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/black-goats-blessing.html">black goat’s blessing</a></em> (Cantrip, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/black-hand.html">black hand</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/black-ribbons.html">black ribbons</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/black-sunshine.html">black sunshine</a></em> (8th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/deep_magic_5e/black-swan-storm.html">black swan storm</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/black-well.html">black well</a></em> (6th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/deep_magic_5e/blade-of-wrath.html">blade of wrath</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/blade-of-my-brother.html">blade of my brother</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/blazing-chariot.html">blazing chariot</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/deep_magic_5e/bleating-call.html">bleating call</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/bleed.html">bleed</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/bless-the-dead.html">bless the dead</a></em> (Cantrip, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/blessed-halo.html">blessed halo</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/blizzard.html">blizzard</a></em> (7th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/deep_magic_5e/blood-armor.html">blood armor</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/blood-lure.html">blood lure</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/blood-offering.html">blood offering</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/blood-puppet.html">blood puppet</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/blood-scarab.html">blood scarab</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/blood-spoor.html">blood spoor</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/blood-tide.html">blood tide</a></em> (Cantrip, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/blood-and-steel.html">blood and steel</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/blood-to-acid.html">blood to acid</a></em> (9th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/deep_magic_5e/bloodhound.html">bloodhound</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/bloodshot.html">bloodshot</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/bloody-hands.html">bloody hands</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/bloody-smite.html">bloody smite</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/bloom.html">bloom</a></em> (8th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/deep_magic_5e/boiling-blood.html">boiling blood</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/boiling-oil.html">boiling oil</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/bolster-undead.html">bolster undead</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/booster-shot.html">booster shot</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/boreass-breath.html">boreas’s breath</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/bottled-arcana.html">bottled arcana</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/deep_magic_5e/bottomless-stomach.html">bottomless stomach</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/breathtaking-wind.html">breathtaking wind</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/breeze-compass.html">breeze compass</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/brimstone-infusion.html">brimstone infusion</a></em> (Cantrip, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/brittling.html">brittling</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/broken-charge.html">broken charge</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/by-the-light-of-the-moon.html">by the light of the moon</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/by-the-light-of-the-watchful-moon.html">by the light of the watchful moon</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/call-shadow-mastiff.html">call shadow mastiff</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/calm-of-the-storm.html">calm of the storm</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/candles-insight.html">candle’s insight</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/carmello-voltas-irksome-preserves.html">carmello-volta’s irksome preserves</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/catapult.html">catapult</a></em> (6th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/deep_magic_5e/catch-the-breath.html">catch the breath</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/caustic-blood.html">caustic blood</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/caustic-torrent.html">caustic torrent</a></em> (8th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/deep_magic_5e/caustic-touch.html">caustic touch</a></em> (Cantrip, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/celebration.html">celebration</a></em> (7th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/deep_magic_5e/chains-of-torment.html">chains of torment</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/chains-of-the-goddess.html">chains of the goddess</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/deep_magic_5e/champions-weapon.html">champion’s weapon</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/chaotic-form.html">chaotic form</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/chaotic-vitality.html">chaotic vitality</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/chaotic-world.html">chaotic world</a></em> (6th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/deep_magic_5e/chilling-words.html">chilling words</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/chronal-lance.html">chronal lance</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/circle-of-wind.html">circle of wind</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/clash-of-glaciers.html">clash of glaciers</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/deep_magic_5e/claws-of-darkness.html">claws of darkness</a></em> (Cantrip, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/claws-of-the-earth-dragon.html">claws of the earth dragon</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/deep_magic_5e/clearing-the-field.html">clearing the field</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/cloak-of-shadow.html">cloak of shadow</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/clockwork-bolt.html">clockwork bolt</a></em> (Cantrip, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/closing-in.html">closing in</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/cobra-fangs.html">cobra fangs</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/compelled-movement.html">compelled movement</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/compelling-fate.html">compelling fate</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/comprehend-wild-shape.html">comprehend wild shape</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/confound-senses.html">confound senses</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/conjure-fey-hound.html">conjure fey hound</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/deep_magic_5e/conjure-forest-defender.html">conjure forest defender</a></em> (6th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/deep_magic_5e/conjure-greater-spectral-dead.html">conjure greater spectral dead</a></em> (7th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/deep_magic_5e/conjure-minor-voidborn.html">conjure minor voidborn</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/deep_magic_5e/conjure-scarab-swarm.html">conjure scarab swarm</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/conjure-shadow-titan.html">conjure shadow titan</a></em> (7th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/deep_magic_5e/conjure-spectral-dead.html">conjure spectral dead</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/conjure-undead.html">conjure undead</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/conjure-voidborn.html">conjure voidborn</a></em> (7th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/deep_magic_5e/consult-the-storm.html">consult the storm</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/converse-with-dragon.html">converse with dragon</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/costly-victory.html">costly victory</a></em> (8th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/deep_magic_5e/create-ring-servant.html">create ring servant</a></em> (8th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/deep_magic_5e/create-thunderstaff.html">create thunderstaff</a></em> (7th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/deep_magic_5e/creeping-ice.html">creeping ice</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/crushing-curse.html">crushing curse</a></em> (Cantrip, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/crushing-trample.html">crushing trample</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/cure-beast.html">cure beast</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/curse-ring.html">curse ring</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/deep_magic_5e/curse-of-boreas.html">curse of boreas</a></em> (6th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/deep_magic_5e/curse-of-dust.html">curse of dust</a></em> (7th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/deep_magic_5e/curse-of-incompetence.html">curse of incompetence</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/curse-of-yig.html">curse of yig</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/deep_magic_5e/curse-of-the-grave.html">curse of the grave</a></em> (7th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/deep_magic_5e/cursed-gift.html">cursed gift</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/cynophobia.html">cynophobia</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/daggerhawk.html">daggerhawk</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/dark-dementing.html">dark dementing</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/deep_magic_5e/dark-heraldry.html">dark heraldry</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/dark-maw.html">dark maw</a></em> (Cantrip, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/dark-path.html">dark path</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/darkbolt.html">darkbolt</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/dead-walking.html">dead walking</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/deadly-sting.html">deadly sting</a></em> (8th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/deep_magic_5e/death-gods-touch.html">death god’s touch</a></em> (7th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/deep_magic_5e/decay.html">decay</a></em> (Cantrip, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/decelerate.html">decelerate</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/deep-breath.html">deep breath</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/defile-healing.html">defile healing</a></em> (7th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/deep_magic_5e/delay-potion.html">delay potion</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/delayed-healing.html">delayed healing</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/demon-within.html">demon within</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/desiccating-breath.html">desiccating breath</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/desolation.html">desolation</a></em> (8th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/deep_magic_5e/destructive-resonance.html">destructive resonance</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/detect-dragons.html">detect dragons</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/devas-wings.html">deva’s wings</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/dimensional-shove.html">dimensional shove</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/disquieting-gaze.html">disquieting gaze</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/disruptive-aura.html">disruptive aura</a></em> (8th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/deep_magic_5e/distracting-divination.html">distracting divination</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/distraction-cascade.html">distraction cascade</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/doom-of-blue-crystal.html">doom of blue crystal</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/doom-of-consuming-fire.html">doom of consuming fire</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/doom-of-dancing-blades.html">doom of dancing blades</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/doom-of-disenchantment.html">doom of disenchantment</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/doom-of-serpent-coils.html">doom of serpent coils</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/doom-of-the-cracked-shield.html">doom of the cracked shield</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/doom-of-the-earthen-maw.html">doom of the earthen maw</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/doom-of-the-slippery-rogue.html">doom of the slippery rogue</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/douse-light.html">douse light</a></em> (Cantrip, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/draconic-smite.html">draconic smite</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/dragon-breath.html">dragon breath</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/deep_magic_5e/dragon-roar.html">dragon roar</a></em> (Cantrip, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/drown.html">drown</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/dryads-kiss.html">dryad’s kiss</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/earthskimmer.html">earthskimmer</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/earworm-melody.html">earworm melody</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/echoes-of-steel.html">echoes of steel</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/ectoplasm.html">ectoplasm</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/eidetic-memory.html">eidetic memory</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/deep_magic_5e/eldritch-communion.html">eldritch communion</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/deep_magic_5e/elemental-horns.html">elemental horns</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/elemental-twist.html">elemental twist</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/emanation-of-yoth.html">emanation of yoth</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/enchant-ring.html">enchant ring</a></em> (6th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/deep_magic_5e/encroaching-shadows.html">encroaching shadows</a></em> (6th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/deep_magic_5e/encrypt-decrypt.html">encrypt / decrypt</a></em> (Cantrip, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/endow-attribute.html">endow attribute</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/energy-absorption.html">energy absorption</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/deep_magic_5e/energy-foreknowledge.html">energy foreknowledge</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/enhance-greed.html">enhance greed</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/entomb.html">entomb</a></em> (6th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/deep_magic_5e/entropic-damage-field.html">entropic damage field</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/essence-instability.html">essence instability</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/deep_magic_5e/evercold.html">evercold</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/exsanguinate.html">exsanguinate</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/deep_magic_5e/exsanguinating-cloud.html">exsanguinating cloud</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/deep_magic_5e/extract-knowledge.html">extract knowledge</a></em> (6th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/deep_magic_5e/fault-line.html">fault line</a></em> (6th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/deep_magic_5e/feather-field.html">feather field</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/feather-travel.html">feather travel</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/fey-crown.html">fey crown</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/deep_magic_5e/find-kin.html">find kin</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/fire-darts.html">fire darts</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/fire-under-the-tongue.html">fire under the tongue</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/firewalk.html">firewalk</a></em> (6th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/deep_magic_5e/fist-of-iron.html">fist of iron</a></em> (Cantrip, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/flame-wave.html">flame wave</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/flesh-to-paper.html">flesh to paper</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/flickering-fate.html">flickering fate</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/fluctuating-alignment.html">fluctuating alignment</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/flurry.html">flurry</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/forest-native.html">forest native</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/forest-sanctuary.html">forest sanctuary</a></em> (9th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/deep_magic_5e/foretell-distraction.html">foretell distraction</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/form-of-the-gods.html">form of the gods</a></em> (9th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/deep_magic_5e/freeze-blood.html">freeze blood</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/freeze-potion.html">freeze potion</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/freezing-fog.html">freezing fog</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/frenzied-bolt.html">frenzied bolt</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/frostbite.html">frostbite</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/deep_magic_5e/frostbitten-fingers.html">frostbitten fingers</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/frozen-razors.html">frozen razors</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/furious-hooves.html">furious hooves</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/fusillade-of-ice.html">fusillade of ice</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/gear-barrage.html">gear barrage</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/ghoul-kings-cloak.html">ghoul king’s cloak</a></em> (8th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/deep_magic_5e/gird-the-spirit.html">gird the spirit</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/glacial-cascade.html">glacial cascade</a></em> (8th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/deep_magic_5e/glacial-fog.html">glacial fog</a></em> (7th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/deep_magic_5e/gliding-step.html">gliding step</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/glimpse-of-the-void.html">glimpse of the void</a></em> (8th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/deep_magic_5e/gloomwrought-barrier.html">gloomwrought barrier</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/gluey-globule.html">gluey globule</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/glyph-of-shifting.html">glyph of shifting</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/goats-hoof-charm.html">goat's hoof charm</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/going-in-circles.html">going in circles</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/gordolays-pleasant-aroma.html">gordolay’s pleasant aroma</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/grasp-of-the-tupilak.html">grasp of the tupilak</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/deep_magic_5e/greater-maze.html">greater maze</a></em> (9th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/deep_magic_5e/greater-seal-of-sanctuary.html">greater seal of sanctuary</a></em> (9th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/deep_magic_5e/green-decay.html">green decay</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/grudge-match.html">grudge match</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/guest-of-honor.html">guest of honor</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/guiding-star.html">guiding star</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/hamstring.html">hamstring</a></em> (Cantrip, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/hard-heart.html">hard heart</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/harry.html">harry</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/harrying-hounds.html">harrying hounds</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/deep_magic_5e/harsh-light-of-summers-glare.html">harsh light of summer’s glare</a></em> (8th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/deep_magic_5e/heart-to-heart.html">heart to heart</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/heart-seeking-arrow.html">heart-seeking arrow</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/heartache.html">heartache</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/heartstop.html">heartstop</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/heartstrike.html">heartstrike</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/heavenly-crown.html">heavenly crown</a></em> (6th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/deep_magic_5e/hedrens-birds-of-clay.html">hedren’s birds of clay</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/hematomancy.html">hematomancy</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/heros-steel.html">hero's steel</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/hide-in-ones-shadow.html">hide in one’s shadow</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/hoarfrost.html">hoarfrost</a></em> (Cantrip, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/hobble.html">hobble</a></em> (Cantrip, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/hobble-mount.html">hobble mount</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/holy-ground.html">holy ground</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/deep_magic_5e/hone-blade.html">hone blade</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/hunger-of-leng.html">hunger of leng</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/hunters-endurance.html">hunter's endurance</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/hunting-stand.html">hunting stand</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/ice-fortress.html">ice fortress</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/deep_magic_5e/ice-hammer.html">ice hammer</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/ice-soldiers.html">ice soldiers</a></em> (7th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/deep_magic_5e/icicle-daggers.html">icicle daggers</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/icy-grasp-of-the-void.html">icy grasp of the void</a></em> (7th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/deep_magic_5e/icy-manipulation.html">icy manipulation</a></em> (6th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/deep_magic_5e/ill-fated-word.html">ill-fated word</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/illuminate-spoor.html">illuminate spoor</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/impending-ally.html">impending ally</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/innocuous-aspect.html">innocuous aspect</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/insightful-maneuver.html">insightful maneuver</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/inspiring-speech.html">inspiring speech</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/instant-fortification.html">instant fortification</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/deep_magic_5e/instant-siege-weapon.html">instant siege weapon</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/instant-snare.html">instant snare</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/ire-of-the-mountain.html">ire of the mountain</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/iron-hand.html">iron hand</a></em> (Cantrip, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/kareefs-entreaty.html">kareef’s entreaty</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/keening-wail.html">keening wail</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/killing-fields.html">killing fields</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/deep_magic_5e/kiss-of-the-succubus.html">kiss of the succubus</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/deep_magic_5e/kobolds-fury.html">kobold’s fury</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/labyrinth-mastery.html">labyrinth mastery</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/labyrinthine-howl.html">labyrinthine howl</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/deep_magic_5e/lacerate.html">lacerate</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/lair-sense.html">lair sense</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/last-rays-of-the-dying-sun.html">last rays of the dying sun</a></em> (7th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/deep_magic_5e/lava-stone.html">lava stone</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/lay-to-rest.html">lay to rest</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/deep_magic_5e/legend-killer.html">legend killer</a></em> (7th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/deep_magic_5e/legion.html">legion</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/legion-of-rabid-squirrels.html">legion of rabid squirrels</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/lesser-maze.html">lesser maze</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/life-drain.html">life drain</a></em> (6th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/deep_magic_5e/life-hack.html">life hack</a></em> (8th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/deep_magic_5e/life-sense.html">life sense</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/life-transference-arrow.html">life transference arrow</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/life-from-death.html">life from death</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/litany-of-sure-hands.html">litany of sure hands</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/living-shadows.html">living shadows</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/deep_magic_5e/lock-armor.html">lock armor</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/looping-trail.html">looping trail</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/lovesick.html">lovesick</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/maddening-whispers.html">maddening whispers</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/maim.html">maim</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/deep_magic_5e/malevolent-waves.html">malevolent waves</a></em> (8th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/deep_magic_5e/mammons-due.html">mammon’s due</a></em> (9th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/deep_magic_5e/mark-prey.html">mark prey</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/mass-hobble-mount.html">mass hobble mount</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/mass-surge-dampener.html">mass surge dampener</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/deep_magic_5e/maw-of-needles.html">maw of needles</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/memento-mori.html">memento mori</a></em> (Cantrip, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/mephitic-croak.html">mephitic croak</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/mind-exchange.html">mind exchange</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/mire.html">mire</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/misstep.html">misstep</a></em> (Cantrip, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/mist-of-wonders.html">mist of wonders</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/monstrous-empathy.html">monstrous empathy</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/moon-trap.html">moon trap</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/mosquito-bane.html">mosquito bane</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/mud-pack.html">mud pack</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/negative-image.html">negative image</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/nether-weapon.html">nether weapon</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/night-terrors.html">night terrors</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/nightfall.html">nightfall</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/nip-at-the-heels.html">nip at the heels</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/not-dead-yet.html">not dead yet</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/not-this-day.html">not this day!</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/deep_magic_5e/orb-of-light.html">orb of light</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/outflanking-boon.html">outflanking boon</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/paragon-of-chaos.html">paragon of chaos</a></em> (8th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/deep_magic_5e/pendulum.html">pendulum</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/phantom-dragon.html">phantom dragon</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/pitfall.html">pitfall</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/poisoned-volley.html">poisoned volley</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/potency-of-the-pack.html">potency of the pack</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/power-word-kneel.html">power word kneel</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/power-word-pain.html">power word pain</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/primal-infusion.html">primal infusion</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/deep_magic_5e/prismatic-ray.html">prismatic ray</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/deep_magic_5e/protection-from-the-void.html">protection from the void</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/protective-ice.html">protective ice</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/puff-of-smoke.html">puff of smoke</a></em> (Cantrip, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/pummelstone.html">pummelstone</a></em> (Cantrip, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/pyroclasm.html">pyroclasm</a></em> (9th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/deep_magic_5e/quick-time.html">quick time</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/quicken.html">quicken</a></em> (Cantrip, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/quicksilver-mantle.html">quicksilver mantle</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/quintessence.html">quintessence</a></em> (8th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/deep_magic_5e/raid-the-lair.html">raid the lair</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/rain-of-blades.html">rain of blades</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/deep_magic_5e/ray-of-alchemical-negation.html">ray of alchemical negation</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/ray-of-life-suppression.html">ray of life suppression</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/reaver-spirit.html">reaver spirit</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/reposition.html">reposition</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/reset.html">reset</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/reverberate.html">reverberate</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/revive-beast.html">revive beast</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/right-the-stars.html">right the stars</a></em> (7th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/deep_magic_5e/ring-strike.html">ring strike</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/ring-ward.html">ring ward</a></em> (7th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/deep_magic_5e/riptide.html">riptide</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/rolling-thunder.html">rolling thunder</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/rotting-corpse.html">rotting corpse</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/rune-of-imprisonment.html">rune of imprisonment</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/salt-lash.html">salt lash</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/sand-ship.html">sand ship</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/sanguine-horror.html">sanguine horror</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/deep_magic_5e/scale-rot.html">scale rot</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/scentless.html">scentless</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/screaming-ray.html">screaming ray</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/scribe.html">scribe</a></em> (Cantrip, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/scry-ambush.html">scry ambush</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/sculpt-snow.html">sculpt snow</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/seal-of-sanctuary.html">seal of sanctuary</a></em> (7th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/deep_magic_5e/searing-sun.html">searing sun</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/see-beyond.html">see beyond</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/deep_magic_5e/seed-of-destruction.html">seed of destruction</a></em> (8th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/deep_magic_5e/seeping-death.html">seeping death</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/seers-reaction.html">seer’s reaction</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/semblance-of-dread.html">semblance of dread</a></em> (Cantrip, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/shade.html">shade</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/shadow-armor.html">shadow armor</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/shadow-bite.html">shadow bite</a></em> (Cantrip, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/shadow-blindness.html">shadow blindness</a></em> (Cantrip, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/shadow-hands.html">shadow hands</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/shadow-monsters.html">shadow monsters</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/shadow-puppets.html">shadow puppets</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/shadow-trove.html">shadow trove</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/shadows-brought-to-light.html">shadows brought to light</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/shadowy-retribution.html">shadowy retribution</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/shared-sacrifice.html">shared sacrifice</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/sheen-of-ice.html">sheen of ice</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/shifting-the-odds.html">shifting the odds</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/shiver.html">shiver</a></em> (Cantrip, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/shroud-of-death.html">shroud of death</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/sidestep-arrow.html">sidestep arrow</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/sign-of-koth.html">sign of koth</a></em> (7th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/deep_magic_5e/silhouette.html">silhouette</a></em> (Cantrip, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/sir-mittinzs-move-curse.html">sir mittinz’s move curse</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/sleep-of-the-deep.html">sleep of the deep</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/slippery-fingers.html">slippery fingers</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/slither.html">slither</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/snow-boulder.html">snow boulder</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/snow-fort.html">snow fort</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/snowy-coat.html">snowy coat</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/song-of-the-forest.html">song of the forest</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/speak-with-inanimate-object.html">speak with inanimate object</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/spin.html">spin</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/spinning-axes.html">spinning axes</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/spiteful-weapon.html">spiteful weapon</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/spur-mount.html">spur mount</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/staff-of-violet-fire.html">staff of violet fire</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/stanch.html">stanch</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/stars-heart.html">star's heart</a></em> (9th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/deep_magic_5e/starburst.html">starburst</a></em> (Cantrip, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/starfall.html">starfall</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/deep_magic_5e/starry-vision.html">starry vision</a></em> (7th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/deep_magic_5e/steal-warmth.html">steal warmth</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/steam-blast.html">steam blast</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/steam-whistle.html">steam whistle</a></em> (8th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/deep_magic_5e/stench-of-rot.html">stench of rot</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/storm-of-wings.html">storm of wings</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/sudden-dawn.html">sudden dawn</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/summon-eldritch-servitor.html">summon eldritch servitor</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/deep_magic_5e/summon-star.html">summon star</a></em> (8th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/deep_magic_5e/surge-dampener.html">surge dampener</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/surprise-blessing.html">surprise blessing</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/deep_magic_5e/symbol-of-sorcery.html">symbol of sorcery</a></em> (7th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/deep_magic_5e/talons-of-a-hungry-land.html">talons of a hungry land</a></em> (7th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/deep_magic_5e/targeting-foreknowledge.html">targeting foreknowledge</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/thin-the-ice.html">thin the ice</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/thousand-darts.html">thousand darts</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/throes-of-ecstasy.html">throes of ecstasy</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/thunder-bolt.html">thunder bolt</a></em> (Cantrip, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/thunderclap.html">thunderclap</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/thunderous-charge.html">thunderous charge</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/thunderous-stampede.html">thunderous stampede</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/thunderous-wave.html">thunderous wave</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/thunderstorm.html">thunderstorm</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/deep_magic_5e/tidal-barrier.html">tidal barrier</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/time-jump.html">time jump</a></em> (8th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/deep_magic_5e/time-loop.html">time loop</a></em> (6th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/deep_magic_5e/time-slippage.html">time slippage</a></em> (8th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/deep_magic_5e/time-step.html">time step</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/time-vortex.html">time vortex</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/time-in-a-bottle.html">time in a bottle</a></em> (9th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/deep_magic_5e/timely-distraction.html">timely distraction</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/tireless.html">tireless</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/tongue-tied.html">tongue tied</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/deep_magic_5e/tongue-of-sand.html">tongue of sand</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/torrent-of-fire.html">torrent of fire</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/touch-of-the-unliving.html">touch of the unliving</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/tracer.html">tracer</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/treasure-chasm.html">treasure chasm</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/tree-heal.html">tree heal</a></em> (Cantrip, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/tree-running.html">tree running</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/tree-speak.html">tree speak</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/trench.html">trench</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/trick-question.html">trick question</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/triumph-of-ice.html">triumph of ice</a></em> (7th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/deep_magic_5e/twist-the-skein.html">twist the skein</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/umbral-storm.html">umbral storm</a></em> (9th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/deep_magic_5e/uncontrollable-transformation.html">uncontrollable transformation</a></em> (7th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/deep_magic_5e/undermine-armor.html">undermine armor</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/unholy-defiance.html">unholy defiance</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/unleash-effigy.html">unleash effigy</a></em> (9th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/deep_magic_5e/unluck-on-that.html">unluck on that</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/unseen-strangler.html">unseen strangler</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/vine-trestle.html">vine trestle</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/visage-of-madness.html">visage of madness</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/vital-mark.html">vital mark</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/void-rift.html">void rift</a></em> (9th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/deep_magic_5e/void-strike.html">void strike</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/volley-shield.html">volley shield</a></em> (7th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/deep_magic_5e/vomit-tentacles.html">vomit tentacles</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/voorish-sign.html">voorish sign</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/waft.html">waft</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/walk-the-twisted-path.html">walk the twisted path</a></em> (6th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/deep_magic_5e/walking-wall.html">walking wall</a></em> (7th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/deep_magic_5e/wall-of-time.html">wall of time</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/deep_magic_5e/warning-shout.html">warning shout</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/warp-mind-and-matter.html">warp mind and matter</a></em> (6th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/deep_magic_5e/weapon-of-blood.html">weapon of blood</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/weilers-ward.html">weiler’s ward</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/wild-shield.html">wild shield</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/wind-lash.html">wind lash</a></em> (Cantrip, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/wind-tunnel.html">wind tunnel</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/wind-of-the-hereafter.html">wind of the hereafter</a></em> (8th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/deep_magic_5e/winters-radiance.html">winter's radiance</a></em> (6th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/deep_magic_5e/winterdark.html">winterdark</a></em> (6th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/deep_magic_5e/wintry-glide.html">wintry glide</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/deep_magic_5e/withered-sight.html">withered sight</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/wolfsong.html">wolfsong</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/word-of-misfortune.html">word of misfortune</a></em> (Cantrip, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/wresting-wind.html">wresting wind</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/writhing-arms.html">writhing arms</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/deep_magic_5e/yellow-sign.html">yellow sign</a></em> (4th level, Rare, DC 15, Mod +7)
`;