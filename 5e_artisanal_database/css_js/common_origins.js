// Combined species/origin list used across multiple generators
// This is a shared data file to maintain consistency across all tools

const commonOrigins = [
  'aberrant',
  'abyssal',
  'astral',
  'bestial',
  'celestial',
  'clockwork',
  'constructed',
  'cyclopean',
  'dark elven',
  'divine',
  'draconic',
  'dragonborn',
  'dwarven',
  'elemental',
  'elven',
  'ethereal',
  'faerie',
  'feyish',
  'fiendish',
  'fungoid',
  'gearforged',
  'ghoulish',
  'giant',
  'gnomish',
  'goblinoid',
  'halfling',
  'human',
  'infernal',
  'minotaur',
  'monstrous',
  'natural',
  'nightmarish',
  'ooze-touched',
  'orcish',
  'outerplanar',
  'plant-touched',
  'prehistoric',
  'primordial',
  'serpentine',
  'shadow-touched',
  'undead',
  'unholy',
];

// Export for use in generators
if (typeof module !== 'undefined' && module.exports) {
  module.exports = commonOrigins;
}