// Simplified scroll generator using minimal spell index

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function formatPrice(price) {
    return price.toLocaleString() + " GP";
}

function getOrdinalSuffix(num) {
    const j = num % 10;
    const k = num % 100;
    if (j == 1 && k != 11) return "st";
    if (j == 2 && k != 12) return "nd";
    if (j == 3 && k != 13) return "rd";
    return "th";
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
        
        // Pick a random spell
        const spellName = getRandomElement(availableSpells);
        
        // Get scroll stats for this spell level
        const stats = scrollStats[spellLevel];
        if (!stats) {
            continue; // Skip if no stats for this level
        }
        
        // Create spell link
        const spellLink = getSpellLink(spellName, selectedSource);
        
        // Build the scroll entry
        html += '<li>';
        html += `<strong><a href="${spellLink}" target="_blank">${spellName}</a></strong> `;
        const levelText = spellLevel === "0" ? "Cantrip" : `${spellLevel}${getOrdinalSuffix(spellLevel)} level`;
        html += `(${levelText}, ${stats.rarity} scroll, ${formatPrice(stats.price)})`;
        if (spellLevel !== "0") {
            html += ` - Spell save DC ${stats.dc}, +${stats.attack} to hit with spell attacks`;
        }
        html += '</li>';
    }
    
    html += '</ol>';
    
    output.innerHTML = html;
}