// Multi-source scroll generator logic

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function formatPrice(price) {
    return price.toLocaleString() + " GP";
}

function generateScrolls() {
    const sourceSelect = document.getElementById('source');
    const raritySelect = document.getElementById('rarity');
    const output = document.getElementById('output');
    
    const selectedSource = sourceSelect.value;
    const selectedRarity = raritySelect.value;
    
    if (!selectedSource || !selectedRarity) {
        output.innerHTML = '<p><em>Please select both a source and rarity first.</em></p>';
        return;
    }
    
    // Ensure spell data is loaded
    if (Object.keys(spellsBySourceAndLevel).length === 0) {
        const loaded = loadSpellData();
        if (!loaded) {
            output.innerHTML = '<p><em>Failed to load spell data. Please try again.</em></p>';
            return;
        }
    }
    
    const possibleLevels = rarityToLevels[selectedRarity];
    if (!possibleLevels) {
        output.innerHTML = '<p><em>Invalid rarity selected.</em></p>';
        return;
    }
    
    let html = '<ol>';
    
    // Generate 10 scrolls
    for (let i = 0; i < 10; i++) {
        // Pick a random spell level from the possible levels for this rarity
        const spellLevel = getRandomElement(possibleLevels);
        
        // Get spells from the selected source
        const availableSpells = getSpellsFromSource(selectedSource, spellLevel);
        if (availableSpells.length === 0) {
            continue; // Skip if no spells at this level for this source
        }
        
        const spellData = {
            name: getRandomElement(availableSpells),
            source: selectedSource
        };
        
        // Get the stats for this spell level
        const stats = scrollStats[spellLevel];
        
        // Format the spell level for display
        let levelText;
        if (spellLevel === "0") {
            levelText = "Cantrip";
        } else {
            const levelNum = parseInt(spellLevel);
            const suffix = levelNum === 1 ? "st" : levelNum === 2 ? "nd" : levelNum === 3 ? "rd" : "th";
            levelText = `${levelNum}${suffix} level`;
        }
        
        // Create the scroll entry with spell link
        const capitalizedSpell = spellData.name.charAt(0).toUpperCase() + spellData.name.slice(1);
        const spellUrl = getSpellLink(spellData.name, spellData.source);
        const scrollEntry = `<em><a href="${spellUrl}">${capitalizedSpell}</a></em> (${levelText}, ${stats.rarity}, DC ${stats.dc}, Spell Attack +${stats.attack}, ${formatPrice(stats.price)})`;
        
        html += `<li>${scrollEntry}</li>`;
    }
    
    html += '</ol>';
    output.innerHTML = html;
}

// Initialize the page
window.addEventListener('load', function() {
    // Set defaults to D&D 2024 and Any
    document.getElementById('source').value = 'srd-2024';
    document.getElementById('rarity').value = 'any';
    
    // Load spell data and generate initial scrolls
    const output = document.getElementById('output');
    output.innerHTML = '<p><em>Loading spell data...</em></p>';
    
    const loaded = loadSpellData();
    if (loaded) {
        // Update source options with counts
        updateSourceOptions();
        generateScrolls();
    } else {
        output.innerHTML = '<p><em>Failed to load spell data. Please refresh the page.</em></p>';
    }
});

// Update source dropdown options to show spell counts
function updateSourceOptions() {
    const sourceSelect = document.getElementById('source');
    const sources = getAvailableSources();
    
    // Update each option with spell counts
    const options = sourceSelect.querySelectorAll('option');
    options.forEach((option) => {
        const sourceData = sources.find(s => s.slug === option.value);
        if (sourceData && sourceData.count > 0) {
            option.textContent = `${sourceData.displayName} (${sourceData.count} spells)`;
        }
    });
}