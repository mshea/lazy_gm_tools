
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

function fillTemplate(template, data) {
    let result = template;
    
    // Handle nested table references and quantity ranges in a loop
    let iterations = 0;
    while ((result.includes('{') || result.includes('[[')) && iterations < 10) {
        iterations++;
        
        // Handle quantity ranges [[min-max]]
        result = result.replace(/\[\[(\d+)-(\d+)\]\]/g, (match, min, max) => {
            const value = Math.floor(Math.random() * (parseInt(max) - parseInt(min) + 1)) + parseInt(min);
            return value.toLocaleString();
        });
        
        // Handle pipe-separated options with double braces like {{table1}|{table2}|{table3}}
        let startIndex = 0;
        
        while (true) {
            const openIndex = result.indexOf('{{', startIndex);
            if (openIndex === -1) break;
            
            // Find the matching closing }}
            let braceCount = 0;
            let closeIndex = -1;
            for (let i = openIndex + 2; i < result.length - 1; i++) {
                if (result.substr(i, 2) === '{{') {
                    braceCount++;
                    i++; // Skip next character
                } else if (result.substr(i, 2) === '}}') {
                    if (braceCount === 0) {
                        closeIndex = i;
                        break;
                    } else {
                        braceCount--;
                        i++; // Skip next character
                    }
                }
            }
            
            if (closeIndex === -1) break;
            
            const fullMatch = result.substring(openIndex, closeIndex + 2);
            const content = result.substring(openIndex + 2, closeIndex);
            
            // Extract weight if present
            const weightMatch = content.match(/\s*\^(\d+)$/);
            const weight = weightMatch ? parseInt(weightMatch[1]) : 1;
            const cleanContent = content.replace(/\s*\^\d+$/, '');
            
            // Split on | and clean up each option
            const options = cleanContent.split('|').map(option => {
                // Remove surrounding braces completely
                return option.replace(/^\{/, '').replace(/\}$/, '').trim();
            }).filter(option => option !== '');

            if (options.length > 1) {
                // Create weighted array - last option gets the weight
                const choices = [];
                for (let i = 0; i < options.length - 1; i++) {
                    const table = data[options[i]];
                    if (table && Array.isArray(table) && table.length > 0) {
                        choices.push(pick(table));
                    } else {
                        choices.push(options[i]);
                    }
                }
                // Add the last option with weight
                const lastOption = options[options.length - 1];
                const lastTable = data[lastOption];
                const lastResult = (lastTable && Array.isArray(lastTable) && lastTable.length > 0) ? pick(lastTable) : lastOption;
                for (let i = 0; i < weight; i++) {
                    choices.push(lastResult);
                }
                
                const selectedResult = choices[Math.floor(Math.random() * choices.length)];
                
                // Replace the match with the result
                result = result.substring(0, openIndex) + selectedResult + result.substring(closeIndex + 2);
                startIndex = openIndex + selectedResult.length;
            } else {
                startIndex = closeIndex + 2;
            }
        }
        
        // Handle regular pipe-separated choices {"option1"|"option2"} with optional weights
        result = result.replace(/\{([^}]+)\}/g, (match, content) => {
            // Check if this is a pipe-separated choice with quotes
            if (content.includes('"') && content.includes('|')) {
                // Extract weight if present
                const weightMatch = content.match(/\s*\^(\d+)$/);
                const weight = weightMatch ? parseInt(weightMatch[1]) : 1;
                const cleanContent = content.replace(/\s*\^\d+$/, '');
                
                // Split by pipes and extract quoted options
                const options = cleanContent.split('|').map(opt => {
                    const quoted = opt.trim().match(/^"([^"]+)"$/);
                    return quoted ? quoted[1] : opt.trim();
                });
                
                if (options.length > 1) {
                    // Create weighted array - last option gets the weight
                    const choices = [];
                    for (let i = 0; i < options.length - 1; i++) {
                        choices.push(options[i]);
                    }
                    // Add the last option with weight
                    for (let i = 0; i < weight; i++) {
                        choices.push(options[options.length - 1]);
                    }
                    return choices[Math.floor(Math.random() * choices.length)];
                }
            }
            // If not a pipe choice, return original to be handled by table lookup
            return match;
        });
        
        // Handle nested table references {tablename}
        result = result.replace(/{(.*?)}/g, (_, key) => pick(data[key] || ['']));
    }
    
    return result;
}

// Modify the function below for different outputs.
// Defaults to 10 returns in an ordered list.

function generateContent() {
    const parsed = parseInput(dataText);
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

// Generate samples on page load to show functionality
window.addEventListener('load', function() {
    generateContent();
});