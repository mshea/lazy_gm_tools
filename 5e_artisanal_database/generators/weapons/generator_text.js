const dataText = `
template
    {race} {condition} {weapon} that casts {spell}.

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

weapon
  club
  dagger
  greatclub
  handaxe
  javelin
  light hammer
  mace
  quarterstaff
  sickle
  spear
  dart
  light crossbow
  shortbow
  sling
  battleaxe
  flail
  glaive
  greataxe
  greatsword
  halberd
  lance
  longsword
  maul
  morningstar
  pike
  rapier
  scimitar
  shortsword
  trident
  warhammer
  war pick
  whip
  
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
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/acid-arrow.html">acid arrow</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/acid-splash.html">acid splash</a></em> (Cantrip, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/aid.html">aid</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/alarm.html">alarm</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/alter-self.html">alter self</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/animal-friendship.html">animal friendship</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/animal-messenger.html">animal messenger</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/animal-shapes.html">animal shapes</a></em> (8th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/animate-dead.html">animate dead</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/animate-objects.html">animate objects</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/antilife-shell.html">antilife shell</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/antimagic-field.html">antimagic field</a></em> (8th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/antipathysympathy.html">antipathy/sympathy</a></em> (8th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/arcane-eye.html">arcane eye</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/arcane-hand.html">arcane hand</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/arcane-lock.html">arcane lock</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/arcane-sword.html">arcane sword</a></em> (7th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/arcanists-magic-aura.html">arcanist's magic aura</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/astral-projection.html">astral projection</a></em> (9th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/augury.html">augury</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/awaken.html">awaken</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/bane.html">bane</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/banishment.html">banishment</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/barkskin.html">barkskin</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/beacon-of-hope.html">beacon of hope</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/bestow-curse.html">bestow curse</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/black-tentacles.html">black tentacles</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/blade-barrier.html">blade barrier</a></em> (6th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/bless.html">bless</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/blight.html">blight</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/blindnessdeafness.html">blindness/deafness</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/blink.html">blink</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/blur.html">blur</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/branding-smite.html">branding smite</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/burning-hands.html">burning hands</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/call-lightning.html">call lightning</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/calm-emotions.html">calm emotions</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/chain-lightning.html">chain lightning</a></em> (6th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/charm-person.html">charm person</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/chill-touch.html">chill touch</a></em> (Cantrip, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/circle-of-death.html">circle of death</a></em> (6th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/clairvoyance.html">clairvoyance</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/clone.html">clone</a></em> (8th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/cloudkill.html">cloudkill</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/color-spray.html">color spray</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/command.html">command</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/commune.html">commune</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/commune-with-nature.html">commune with nature</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/comprehend-languages.html">comprehend languages</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/compulsion.html">compulsion</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/cone-of-cold.html">cone of cold</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/confusion.html">confusion</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/conjure-animals.html">conjure animals</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/conjure-celestial.html">conjure celestial</a></em> (7th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/conjure-elemental.html">conjure elemental</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/conjure-fey.html">conjure fey</a></em> (6th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/conjure-minor-elementals.html">conjure minor elementals</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/conjure-woodland-beings.html">conjure woodland beings</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/contact-other-plane.html">contact other plane</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/contagion.html">contagion</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/contingency.html">contingency</a></em> (6th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/continual-flame.html">continual flame</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/control-water.html">control water</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/control-weather.html">control weather</a></em> (8th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/counterspell.html">counterspell</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/create-food-and-water.html">create food and water</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/create-undead.html">create undead</a></em> (6th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/create-or-destroy-water.html">create or destroy water</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/creation.html">creation</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/cure-wounds.html">cure wounds</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/dancing-lights.html">dancing lights</a></em> (Cantrip, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/darkness.html">darkness</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/darkvision.html">darkvision</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/daylight.html">daylight</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/death-ward.html">death ward</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/delayed-blast-fireball.html">delayed blast fireball</a></em> (7th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/demiplane.html">demiplane</a></em> (8th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/detect-evil-and-good.html">detect evil and good</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/detect-magic.html">detect magic</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/detect-poison-and-disease.html">detect poison and disease</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/detect-thoughts.html">detect thoughts</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/dimension-door.html">dimension door</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/disguise-self.html">disguise self</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/disintegrate.html">disintegrate</a></em> (6th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/dispel-evil-and-good.html">dispel evil and good</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/dispel-magic.html">dispel magic</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/divination.html">divination</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/divine-favor.html">divine favor</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/divine-word.html">divine word</a></em> (7th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/dominate-beast.html">dominate beast</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/dominate-monster.html">dominate monster</a></em> (8th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/dominate-person.html">dominate person</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/dream.html">dream</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/druidcraft.html">druidcraft</a></em> (Cantrip, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/earthquake.html">earthquake</a></em> (8th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/eldritch-blast.html">eldritch blast</a></em> (Cantrip, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/enhance-ability.html">enhance ability</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/enlargereduce.html">enlarge/reduce</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/entangle.html">entangle</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/enthrall.html">enthrall</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/etherealness.html">etherealness</a></em> (7th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/expeditious-retreat.html">expeditious retreat</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/eyebite.html">eyebite</a></em> (6th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/fabricate.html">fabricate</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/faerie-fire.html">faerie fire</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/faithful-hound.html">faithful hound</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/false-life.html">false life</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/fear.html">fear</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/feather-fall.html">feather fall</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/feeblemind.html">feeblemind</a></em> (8th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/find-familiar.html">find familiar</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/find-steed.html">find steed</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/find-traps.html">find traps</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/find-the-path.html">find the path</a></em> (6th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/finger-of-death.html">finger of death</a></em> (7th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/fire-bolt.html">fire bolt</a></em> (Cantrip, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/fire-shield.html">fire shield</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/fire-storm.html">fire storm</a></em> (7th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/fireball.html">fireball</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/flame-blade.html">flame blade</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/flame-strike.html">flame strike</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/flaming-sphere.html">flaming sphere</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/flesh-to-stone.html">flesh to stone</a></em> (6th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/floating-disk.html">floating disk</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/fly.html">fly</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/fog-cloud.html">fog cloud</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/forbiddance.html">forbiddance</a></em> (6th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/forcecage.html">forcecage</a></em> (7th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/foresight.html">foresight</a></em> (9th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/freedom-of-movement.html">freedom of movement</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/freezing-sphere.html">freezing sphere</a></em> (6th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/gaseous-form.html">gaseous form</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/gate.html">gate</a></em> (9th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/geas.html">geas</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/gentle-repose.html">gentle repose</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/giant-insect.html">giant insect</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/glibness.html">glibness</a></em> (8th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/globe-of-invulnerability.html">globe of invulnerability</a></em> (6th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/glyph-of-warding.html">glyph of warding</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/goodberry.html">goodberry</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/grease.html">grease</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/greater-invisibility.html">greater invisibility</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/greater-restoration.html">greater restoration</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/guardian-of-faith.html">guardian of faith</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/guards-and-wards.html">guards and wards</a></em> (6th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/guidance.html">guidance</a></em> (Cantrip, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/guiding-bolt.html">guiding bolt</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/gust-of-wind.html">gust of wind</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/hallow.html">hallow</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/hallucinatory-terrain.html">hallucinatory terrain</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/harm.html">harm</a></em> (6th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/haste.html">haste</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/heal.html">heal</a></em> (6th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/healing-word.html">healing word</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/heat-metal.html">heat metal</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/hellish-rebuke.html">hellish rebuke</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/heroes-feast.html">heroes' feast</a></em> (6th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/heroism.html">heroism</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/hideous-laughter.html">hideous laughter</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/hold-monster.html">hold monster</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/hold-person.html">hold person</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/holy-aura.html">holy aura</a></em> (8th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/hunters-mark.html">hunter's mark</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/hypnotic-pattern.html">hypnotic pattern</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/ice-storm.html">ice storm</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/identify.html">identify</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/illusory-script.html">illusory script</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/imprisonment.html">imprisonment</a></em> (9th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/incendiary-cloud.html">incendiary cloud</a></em> (8th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/inflict-wounds.html">inflict wounds</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/insect-plague.html">insect plague</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/instant-summons.html">instant summons</a></em> (6th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/invisibility.html">invisibility</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/irresistible-dance.html">irresistible dance</a></em> (6th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/jump.html">jump</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/knock.html">knock</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/legend-lore.html">legend lore</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/lesser-restoration.html">lesser restoration</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/levitate.html">levitate</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/light.html">light</a></em> (Cantrip, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/lightning-bolt.html">lightning bolt</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/locate-animals-or-plants.html">locate animals or plants</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/locate-creature.html">locate creature</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/locate-object.html">locate object</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/longstrider.html">longstrider</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/mage-armor.html">mage armor</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/mage-hand.html">mage hand</a></em> (Cantrip, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/magic-circle.html">magic circle</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/magic-jar.html">magic jar</a></em> (6th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/magic-missile.html">magic missile</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/magic-mouth.html">magic mouth</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/magic-weapon.html">magic weapon</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/magnificent-mansion.html">magnificent mansion</a></em> (7th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/major-image.html">major image</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/mass-cure-wounds.html">mass cure wounds</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/mass-heal.html">mass heal</a></em> (9th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/mass-healing-word.html">mass healing word</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/mass-suggestion.html">mass suggestion</a></em> (6th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/maze.html">maze</a></em> (8th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/meld-into-stone.html">meld into stone</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/mending.html">mending</a></em> (Cantrip, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/message.html">message</a></em> (Cantrip, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/meteor-swarm.html">meteor swarm</a></em> (9th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/mind-blank.html">mind blank</a></em> (8th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/minor-illusion.html">minor illusion</a></em> (Cantrip, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/mirage-arcane.html">mirage arcane</a></em> (7th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/mirror-image.html">mirror image</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/mislead.html">mislead</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/misty-step.html">misty step</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/modify-memory.html">modify memory</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/moonbeam.html">moonbeam</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/move-earth.html">move earth</a></em> (6th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/nondetection.html">nondetection</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/pass-without-trace.html">pass without trace</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/passwall.html">passwall</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/phantasmal-killer.html">phantasmal killer</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/phantom-steed.html">phantom steed</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/planar-ally.html">planar ally</a></em> (6th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/planar-binding.html">planar binding</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/plane-shift.html">plane shift</a></em> (7th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/plant-growth.html">plant growth</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/poison-spray.html">poison spray</a></em> (Cantrip, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/polymorph.html">polymorph</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/power-word-kill.html">power word kill</a></em> (9th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/power-word-stun.html">power word stun</a></em> (8th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/prayer-of-healing.html">prayer of healing</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/prestidigitation.html">prestidigitation</a></em> (Cantrip, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/prismatic-spray.html">prismatic spray</a></em> (7th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/prismatic-wall.html">prismatic wall</a></em> (9th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/private-sanctum.html">private sanctum</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/produce-flame.html">produce flame</a></em> (Cantrip, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/programmed-illusion.html">programmed illusion</a></em> (6th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/project-image.html">project image</a></em> (7th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/protection-from-energy.html">protection from energy</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/protection-from-evil-and-good.html">protection from evil and good</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/protection-from-poison.html">protection from poison</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/purify-food-and-drink.html">purify food and drink</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/raise-dead.html">raise dead</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/ray-of-enfeeblement.html">ray of enfeeblement</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/ray-of-frost.html">ray of frost</a></em> (Cantrip, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/regenerate.html">regenerate</a></em> (7th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/reincarnate.html">reincarnate</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/remove-curse.html">remove curse</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/resilient-sphere.html">resilient sphere</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/resistance.html">resistance</a></em> (Cantrip, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/resurrection.html">resurrection</a></em> (7th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/reverse-gravity.html">reverse gravity</a></em> (7th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/revivify.html">revivify</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/rope-trick.html">rope trick</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/sacred-flame.html">sacred flame</a></em> (Cantrip, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/sanctuary.html">sanctuary</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/scorching-ray.html">scorching ray</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/scrying.html">scrying</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/secret-chest.html">secret chest</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/see-invisibility.html">see invisibility</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/seeming.html">seeming</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/sending.html">sending</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/sequester.html">sequester</a></em> (7th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/shapechange.html">shapechange</a></em> (9th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/shatter.html">shatter</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/shield.html">shield</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/shield-of-faith.html">shield of faith</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/shillelagh.html">shillelagh</a></em> (Cantrip, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/shocking-grasp.html">shocking grasp</a></em> (Cantrip, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/silence.html">silence</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/silent-image.html">silent image</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/simulacrum.html">simulacrum</a></em> (7th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/sleep.html">sleep</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/sleet-storm.html">sleet storm</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/slow.html">slow</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/spare-the-dying.html">spare the dying</a></em> (Cantrip, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/speak-with-animals.html">speak with animals</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/speak-with-dead.html">speak with dead</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/speak-with-plants.html">speak with plants</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/spider-climb.html">spider climb</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/spike-growth.html">spike growth</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/spirit-guardians.html">spirit guardians</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/spiritual-weapon.html">spiritual weapon</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/stinking-cloud.html">stinking cloud</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/stone-shape.html">stone shape</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/stoneskin.html">stoneskin</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/storm-of-vengeance.html">storm of vengeance</a></em> (9th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/suggestion.html">suggestion</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/sunbeam.html">sunbeam</a></em> (6th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/sunburst.html">sunburst</a></em> (8th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/symbol.html">symbol</a></em> (7th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/telekinesis.html">telekinesis</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/telepathic-bond.html">telepathic bond</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/teleport.html">teleport</a></em> (7th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/teleportation-circle.html">teleportation circle</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/thaumaturgy.html">thaumaturgy</a></em> (Cantrip, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/thunderwave.html">thunderwave</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/time-stop.html">time stop</a></em> (9th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/tiny-hut.html">tiny hut</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/tongues.html">tongues</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/transport-via-plants.html">transport via plants</a></em> (6th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/tree-stride.html">tree stride</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/true-polymorph.html">true polymorph</a></em> (9th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/true-resurrection.html">true resurrection</a></em> (9th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/true-seeing.html">true seeing</a></em> (6th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/true-strike.html">true strike</a></em> (Cantrip, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/unseen-servant.html">unseen servant</a></em> (1st level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/vampiric-touch.html">vampiric touch</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/vicious-mockery.html">vicious mockery</a></em> (Cantrip, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/wall-of-fire.html">wall of fire</a></em> (4th level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/wall-of-force.html">wall of force</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/wall-of-ice.html">wall of ice</a></em> (6th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/wall-of-stone.html">wall of stone</a></em> (5th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/wall-of-thorns.html">wall of thorns</a></em> (6th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/warding-bond.html">warding bond</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/water-breathing.html">water breathing</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/water-walk.html">water walk</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/web.html">web</a></em> (2nd level, Uncommon, DC 13, Mod +5)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/weird.html">weird</a></em> (9th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/wind-walk.html">wind walk</a></em> (6th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/wind-wall.html">wind wall</a></em> (3rd level, Rare, DC 15, Mod +7)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/wish.html">wish</a></em> (9th level, Legendary, DC 19, Mod +11)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/word-of-recall.html">word of recall</a></em> (6th level, Very Rare, DC 17, Mod +9)
  <em><a href="../../spells/html/5.1_srd_(d&d_2014)/zone-of-truth.html">zone of truth</a></em> (2nd level, Uncommon, DC 13, Mod +5)
`;