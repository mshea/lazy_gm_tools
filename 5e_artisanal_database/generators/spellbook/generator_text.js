const wizardProgression = {
    1: { spellbook: 6, maxLevel: 1, cantrips: 3 },
    2: { spellbook: 8, maxLevel: 1, cantrips: 3 },
    3: { spellbook: 10, maxLevel: 2, cantrips: 3 },
    4: { spellbook: 12, maxLevel: 2, cantrips: 4 },
    5: { spellbook: 14, maxLevel: 3, cantrips: 4 },
    6: { spellbook: 16, maxLevel: 3, cantrips: 4 },
    7: { spellbook: 18, maxLevel: 4, cantrips: 4 },
    8: { spellbook: 20, maxLevel: 4, cantrips: 4 },
    9: { spellbook: 22, maxLevel: 5, cantrips: 4 },
    10: { spellbook: 24, maxLevel: 5, cantrips: 5 },
    11: { spellbook: 26, maxLevel: 6, cantrips: 5 },
    12: { spellbook: 28, maxLevel: 6, cantrips: 5 },
    13: { spellbook: 30, maxLevel: 7, cantrips: 5 },
    14: { spellbook: 32, maxLevel: 7, cantrips: 5 },
    15: { spellbook: 34, maxLevel: 8, cantrips: 5 },
    16: { spellbook: 36, maxLevel: 8, cantrips: 5 },
    17: { spellbook: 38, maxLevel: 9, cantrips: 5 },
    18: { spellbook: 40, maxLevel: 9, cantrips: 5 },
    19: { spellbook: 42, maxLevel: 9, cantrips: 5 },
    20: { spellbook: 44, maxLevel: 9, cantrips: 5 }
};

function getWizardSpells() {
    return spells.filter(spell => 
        spell.dnd_class && 
        spell.dnd_class.includes('Wizard') && 
        spell.document__slug === 'wotc-srd'
    );
}

// Custom generation function for spellbook
const sourceDirectoryMap = {
    "wotc-srd": "5.1_srd_(d&d_2014)",
    "a5e": "a5e",
    "dmag": "deep_magic_5e"
    // Add other mappings as needed
};

function generateSpellbook() {
    const wizardLevel = parseInt(document.getElementById('wizard-level').value);
    const wizardSpells = getWizardSpells();
    
    const progression = wizardProgression[wizardLevel];
    const maxLevel = progression.maxLevel;
    const spellCount = progression.spellbook;
    
    // Generate spell list
    const generatedSpells = generateWizardSpells(wizardSpells, maxLevel, spellCount, progression.cantrips);
    
    // Create output HTML
    let output = '<div style="line-height: 1.6;"><h2>Spells</h2><ol>';
    
    generatedSpells.forEach(spell => {
        const levelText = spell.level_int === 0 ? 'Cantrip' : `${spell.level_int}${getOrdinalSuffix(spell.level_int)} level`;
        const sourceDir = sourceDirectoryMap[spell.document__slug] || spell.document__slug; // Fallback to slug if not mapped
        output += `<li><em><a href="../../spells/html/${sourceDir}/${spell.slug}.html" target="_blank">${spell.name}</a></em> (${levelText})</li>`;
    });
    
    output += '</ol></div>';
    
    document.getElementById('output').innerHTML = output;
}

function generateWizardSpells(wizardSpells, maxLevel, spellCount, cantripCount) {
    const selectedSpells = [];
    const usedSpells = new Set();

    const spellsByLevel = {};
    for (let i = 0; i <= 9; i++) {
        spellsByLevel[i] = [];
    }

    wizardSpells.forEach(spell => {
        spellsByLevel[spell.level_int].push(spell);
    });
    
    // Step 1: Ensure we have the required cantrips
    const cantripPool = [...spellsByLevel[0]].sort(() => 0.5 - Math.random());
    for (let i = 0; i < Math.min(cantripCount, cantripPool.length); i++) {
        selectedSpells.push(cantripPool[i]);
        usedSpells.add(cantripPool[i].slug);
    }
    
    // Step 2: Ensure at least one spell of each level they can cast (1-maxLevel)
    for (let level = 1; level <= maxLevel; level++) {
        if (spellsByLevel[level] && spellsByLevel[level].length > 0) {
            const levelPool = spellsByLevel[level].filter(spell => !usedSpells.has(spell.slug));
            if (levelPool.length > 0) {
                const randomSpell = levelPool[Math.floor(Math.random() * levelPool.length)];
                selectedSpells.push(randomSpell);
                usedSpells.add(randomSpell.slug);
            }
        }
    }
    
    // Step 3: Fill remaining slots with weighted distribution
    const remainingSlots = spellCount - selectedSpells.length;
    
    if (remainingSlots > 0) {
        const levelWeights = {
            1: 4,  // 1st level spells are very common
            2: 3,  // 2nd level spells are common
            3: 2,  // 3rd level spells are less common
            4: 2,  // 4th level spells are less common
            5: 1,  // 5th level spells are rare
            6: 1,  // 6th level spells are rare
            7: 1,  // 7th level spells are very rare
            8: 1,  // 8th level spells are very rare
            9: 1   // 9th level spells are extremely rare
        };
        
        // Create weighted pool of remaining spells
        let spellPool = [];
        for (let level = 1; level <= maxLevel; level++) {
            if (spellsByLevel[level]) {
                const weight = levelWeights[level] || 1;
                spellsByLevel[level].forEach(spell => {
                    if (!usedSpells.has(spell.slug)) {
                        // Add each spell multiple times based on weight
                        for (let i = 0; i < weight; i++) {
                            spellPool.push(spell);
                        }
                    }
                });
            }
        }
        
        // Shuffle and select remaining spells
        const shuffled = spellPool.sort(() => 0.5 - Math.random());
        let addedCount = 0;
        for (let i = 0; i < shuffled.length && addedCount < remainingSlots; i++) {
            const spell = shuffled[i];
            if (!usedSpells.has(spell.slug)) {
                selectedSpells.push(spell);
                usedSpells.add(spell.slug);
                addedCount++;
            }
        }
        
        // If we still don't have enough spells, add any remaining available spells
        if (selectedSpells.length < spellCount) {
            for (let level = 0; level <= maxLevel; level++) {
                if (spellsByLevel[level] && selectedSpells.length < spellCount) {
                    spellsByLevel[level].forEach(spell => {
                        if (!usedSpells.has(spell.slug) && selectedSpells.length < spellCount) {
                            selectedSpells.push(spell);
                            usedSpells.add(spell.slug);
                        }
                    });
                }
            }
        }
    }
    
    // Sort by level, then by name
    selectedSpells.sort((a, b) => {
        if (a.level_int !== b.level_int) {
            return a.level_int - b.level_int;
        }
        return a.name.localeCompare(b.name);
    });
    
    return selectedSpells;
}

function getOrdinalSuffix(num) {
    const j = num % 10;
    const k = num % 100;
    if (j == 1 && k != 11) return "st";
    if (j == 2 && k != 12) return "nd";
    if (j == 3 && k != 13) return "rd";
    return "th";
}