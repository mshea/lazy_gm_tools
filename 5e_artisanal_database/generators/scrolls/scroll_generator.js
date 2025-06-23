// Scroll Generator Logic

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function formatPrice(price) {
    return price.toLocaleString() + " GP";
}

function generateScrolls() {
    const raritySelect = document.getElementById('rarity');
    const selectedRarity = raritySelect.value;
    const output = document.getElementById('output');
    
    if (!selectedRarity) {
        output.innerHTML = '<p><em>Please select a rarity first.</em></p>';
        return;
    }
    
    let html = '<ol>';
    
    // Generate 10 scrolls
    for (let i = 0; i < 10; i++) {
        let spellLevel;
        
        if (selectedRarity === 'lucky') {
            // I Feel Lucky - pick any spell level randomly
            const allLevels = ["cantrip", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
            spellLevel = getRandomElement(allLevels);
        } else {
            // Normal rarity selection
            const possibleLevels = rarityToLevels[selectedRarity];
            if (!possibleLevels) {
                output.innerHTML = '<p><em>Invalid rarity selected.</em></p>';
                return;
            }
            spellLevel = getRandomElement(possibleLevels);
        }
        
        // Pick a random spell from that level
        const availableSpells = spellsByLevel[spellLevel];
        const spellName = getRandomElement(availableSpells);
        
        // Get the stats for this spell level
        const stats = scrollStats[spellLevel];
        
        // Format the spell level for display
        let levelText;
        if (spellLevel === "cantrip") {
            levelText = "Cantrip";
        } else {
            const levelNum = parseInt(spellLevel);
            const suffix = levelNum === 1 ? "st" : levelNum === 2 ? "nd" : levelNum === 3 ? "rd" : "th";
            levelText = `${levelNum}${suffix} level`;
        }
        
        // Create the scroll entry with spell link
        const capitalizedSpell = spellName.charAt(0).toUpperCase() + spellName.slice(1);
        const spellUrl = getSpellLink(spellName);
        const scrollEntry = `<em><a href="${spellUrl}">${capitalizedSpell}</a></em> (${levelText}, ${stats.rarity}, DC ${stats.dc}, Spell Attack +${stats.attack}, ${formatPrice(stats.price)})`;
        
        html += `<li>${scrollEntry}</li>`;
    }
    
    html += '</ol>';
    output.innerHTML = html;
}

// Generate initial scrolls on page load
window.addEventListener('load', function() {
    // Set default to Common and generate
    document.getElementById('rarity').value = 'common';
    generateScrolls();
});