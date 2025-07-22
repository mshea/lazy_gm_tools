/*

This work is licensed under a Creative Commons Attribution 4.0 International License avaiable at:

https://creativecommons.org/licenses/by/4.0/

You are free to use this content in any manner permitted by that license as long as you include the following attribution statement in your own work:

This work includes material taken from the 5e Artisanal Database by Michael E. Shea of SlyFlourish.com, available under a Creative Commons Attribution 4.0 International License available at https://creativecommons.org/licenses/by/4.0/

*/

// Combined common generator data
// This file contains all shared data in the format expected by the generator system

// Create the common data text in the format expected by parseInput()
const commonGeneratorDataText = `
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
  spiked
  startouched
  stormy
  temporal
  titanic
  twilight
  unearthed
  unhallowed
  unholy

species
  aberrant
  abyssal
  astral
  bestial
  celestial
  clockwork
  constructed
  cyclopean
  dark elven
  divine
  draconic
  dragonborn
  dwarven
  elemental
  elven
  ethereal
  faerie
  feyish
  fiendish
  fungoid
  gearforged
  ghoulish
  giant
  gnomish
  goblinoid
  halfling
  human
  infernal
  minotaur
  monstrous
  natural
  nightmarish
  ooze-touched
  orcish
  outerplanar
  plant-touched
  prehistoric
  primordial
  serpentine
  shadow-touched
  undead
  unholy

origin
  aberrant
  abyssal
  astral
  bestial
  celestial
  clockwork
  constructed
  cyclopean
  dark elven
  divine
  draconic
  dragonborn
  dwarven
  elemental
  elven
  ethereal
  faerie
  feyish
  fiendish
  fungoid
  gearforged
  ghoulish
  giant
  gnomish
  goblinoid
  halfling
  human
  infernal
  minotaur
  monstrous
  natural
  nightmarish
  ooze-touched
  orcish
  outerplanar
  plant-touched
  prehistoric
  primordial
  serpentine
  shadow-touched
  undead
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
  dreamcatcher
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
  ink pen
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
  pouch
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
`;

// Function to add common data to existing dataText
function addCommonDataTo(existingDataText) {
    return existingDataText + '\n\n' + commonGeneratorDataText;
}

// Make functions available globally for generators
window.addCommonDataTo = addCommonDataTo;
window.commonGeneratorDataText = commonGeneratorDataText;