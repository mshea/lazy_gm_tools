
/*
This code is released under a CC0 1.0 Universal license.
https://creativecommons.org/publicdomain/zero/1.0/

You can copy, modify, and distribute this tool, even for commercial purposes,
all without asking permission.
*/

function parseInput(text) {
    const lines = text.trim().split('\n');
    const result = {};
    let currentKey = null;
    for (let line of lines) {
        if (!line.trim()) continue;
        if (!line.startsWith(' ')) {
            currentKey = line.trim().replace(':', '');
            result[currentKey] = [];
        } else if (currentKey) {
            const trimmed = line.trim();
            // Handle weighted items like "item ^3" (appears 3 times)
            const weightMatch = trimmed.match(/^(.+?)\s*\^(\d+)$/);
            if (weightMatch) {
                const item = weightMatch[1];
                const weight = parseInt(weightMatch[2]);
                for (let i = 0; i < weight; i++) {
                    result[currentKey].push(item);
                }
            } else {
                result[currentKey].push(trimmed);
            }
        }
    }
    return result;
}

function pick(list) {
    return list[Math.floor(Math.random() * list.length)];
}

function addCommasToNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Helper function to process quantity ranges like [[100-500]]
function processQuantityRanges(text, useCommas = false) {
    return text.replace(/\[\[(\d+)-(\d+)\]\]/g, (match, min, max) => {
        const value = Math.floor(Math.random() * (parseInt(max) - parseInt(min) + 1)) + parseInt(min);
        return useCommas ? addCommasToNumber(value) : value.toLocaleString();
    });
}

// Helper function to find matching closing braces
function findMatchingCloseBrace(text, startIndex) {
    let braceCount = 0;
    for (let i = startIndex + 2; i < text.length - 1; i++) {
        if (text.substr(i, 2) === '{{') {
            braceCount++;
            i++; // Skip next character
        } else if (text.substr(i, 2) === '}}') {
            if (braceCount === 0) {
                return i;
            } else {
                braceCount--;
                i++; // Skip next character
            }
        }
    }
    return -1;
}

// Helper function to extract weight from content string
function extractWeight(content) {
    const weightMatch = content.match(/\s*\^(\d+)$/);
    const weight = weightMatch ? parseInt(weightMatch[1]) : 1;
    const cleanContent = content.replace(/\s*\^\d+$/, '');
    return { weight, cleanContent };
}

// Helper function to create weighted choices array
function createWeightedChoices(options, data, weight) {
    const choices = [];
    
    // Add all options except the last one
    for (let i = 0; i < options.length - 1; i++) {
        const table = data[options[i]];
        choices.push(table && table.length > 0 ? pick(table) : options[i]);
    }
    
    // Add the last option with weight
    const lastOption = options[options.length - 1];
    const lastTable = data[lastOption];
    const lastResult = lastTable && lastTable.length > 0 ? pick(lastTable) : lastOption;
    
    for (let i = 0; i < weight; i++) {
        choices.push(lastResult);
    }
    
    return choices;
}

// Helper function to process double brace choices like {{table1|table2}}
function processDoubleBraceChoices(text, data) {
    let result = text;
    let startIndex = 0;
    
    while (true) {
        const openIndex = result.indexOf('{{', startIndex);
        if (openIndex === -1) break;
        
        const closeIndex = findMatchingCloseBrace(result, openIndex);
        if (closeIndex === -1) break;
        
        const content = result.substring(openIndex + 2, closeIndex);
        const { weight, cleanContent } = extractWeight(content);
        
        // Split on | and clean up each option
        const options = cleanContent.split('|').map(option => {
            return option.replace(/^\{/, '').replace(/\}$/, '').trim();
        }).filter(option => option !== '');

        if (options.length > 1) {
            const choices = createWeightedChoices(options, data, weight);
            const selectedResult = choices[Math.floor(Math.random() * choices.length)];
            
            // Replace the match with the result
            result = result.substring(0, openIndex) + selectedResult + result.substring(closeIndex + 2);
            startIndex = openIndex + selectedResult.length;
        } else {
            startIndex = closeIndex + 2;
        }
    }
    
    return result;
}

// Helper function to process single brace choices like {"option1"|"option2"}
function processSingleBraceChoices(text, data) {
    return text.replace(/\{([^}]+)\}/g, (match, content) => {
        // Check if this contains pipe separator (multiple options)
        if (content.includes('|')) {
            const { weight, cleanContent } = extractWeight(content);
            
            // Split by pipes and handle both quoted and unquoted options
            const options = cleanContent.split('|').map(opt => {
                const trimmed = opt.trim();
                // Check if it's quoted
                const quoted = trimmed.match(/^"([^"]+)"$/);
                if (quoted) {
                    return quoted[1];
                }
                // Unquoted option - could be a table name or literal value
                return trimmed;
            });
            
            if (options.length > 1) {
                const choices = createWeightedChoices(options, data, weight);
                return choices[Math.floor(Math.random() * choices.length)];
            }
        }
        // If not a pipe choice, return original to be handled by table lookup
        return match;
    });
}

// Helper function to process quantity patterns like "X x {table}"
function processQuantityPatterns(text, data) {
    return text.replace(/(\d+)\s+x\s+\{([^}]+)\}/g, (match, quantity, tableName) => {
        const qty = parseInt(quantity);
        if (qty === 0) return ''; // Skip zero quantities
        
        const table = data[tableName];
        if (!table || !Array.isArray(table) || table.length === 0) {
            return match; // Return original if table not found
        }
        
        // For magic item tables, generate unique items; for gems/art, allow duplicates
        if (tableName.includes('magic_items') || tableName.includes('_themes') || tableName.includes('art')) {
            // Generate unique magic items
            const items = [];
            for (let i = 0; i < qty; i++) {
                const item = pick(table);
                items.push(item);
            }
            return items.join('<br>');
        } else {
            // For gems, art objects, etc., use the original behavior (allow duplicates)
            const item = pick(table);
            const result = `${qty} x ${item}`;
            return qty === 1 ? result.replace(' gemstones ', ' gemstone ') : result;
        }
    });
}

// Helper function to process simple table references like {tablename}
function processTableReferences(text, data) {
    return text.replace(/{(.*?)}/g, (_, key) => pick(data[key] || ['']));
}

// Main template filling function - now much cleaner but preserves all functionality!
function fillTemplate(template, data, useCommas = false) {
    let result = template;
    
    // Process template in multiple passes until no more changes
    let iterations = 0;
    const maxIterations = 10; // Safety limit to prevent infinite loops
    
    while ((result.includes('{') || result.includes('[[')) && iterations < maxIterations) {
        iterations++;
        
        // Process each type of template syntax
        result = processQuantityRanges(result, useCommas);
        result = processDoubleBraceChoices(result, data);
        result = processSingleBraceChoices(result, data);
        result = processQuantityPatterns(result, data);
        result = processTableReferences(result, data);
    }
    
    return result;
}

// Modify the function below for different outputs.
// Defaults to 10 returns in an ordered list.

function generateContent() {
    const parsed = parseInput(window.dataText || dataText);
    const templates = parsed.template || [''];
    delete parsed.template;

    const output = document.getElementById('output');
    let html = '<ol>';
    
    for (let i = 0; i < 10; i++) {
        const template = pick(templates);
        const result = fillTemplate(template, parsed);
        const capitalizedResult = result.charAt(0).toUpperCase() + result.slice(1);
        html += '<li>' + capitalizedResult + '</li>';
    }
    
    html += '</ol>';
    output.innerHTML = html;
}

// Treasure-specific generator function
function generateTreasure() {
    // Check if we have a tier selector (treasure generator)
    const tierElement = document.getElementById('tier');
    if (!tierElement) {
        // Fall back to standard generation
        generateContent();
        return;
    }
    
    const tier = tierElement.value;
    const parsed = parseInput(window.dataText || dataText);
    const output = document.getElementById('output');
    
    let result = pick(parsed[tier]);
    
    // Process templates until no more changes, using comma formatting for treasure
    for (let i = 0; i < 10; i++) {
        const newResult = fillTemplate(result, parsed, true); // true = use comma formatting
        if (newResult === result) break;
        result = newResult;
    }
    
    // Format output as bulleted list
    const items = result.split('<br>')
        .map(item => item.trim())
        .filter(item => item !== '')
        .map(item => '- ' + item.charAt(0).toUpperCase() + item.slice(1));
    
    output.innerHTML = '<p>' + items.join('<br>') + '</p>';
}

// Alias for backward compatibility
window.generate = generateTreasure;

// Generate samples on page load to show functionality
window.addEventListener('load', function() {
    // Check if this is a treasure generator
    if (document.getElementById('tier')) {
        generateTreasure();
    } else {
        generateContent();
    }
});