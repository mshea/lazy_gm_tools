// Common generator data loader
// This file creates the data structures expected by the generator system

// Function to create generator data text format from arrays
function createGeneratorSection(sectionName, dataArray) {
    let result = sectionName + '\n';
    dataArray.forEach(item => {
        result += '  ' + item + '\n';
    });
    return result;
}

// Create the common data text in the format expected by parseInput()
const commonGeneratorDataText = 
    createGeneratorSection('condition', commonConditions) + '\n' +
    createGeneratorSection('species', commonOrigins) + '\n' +
    createGeneratorSection('origin', commonOrigins) + '\n' +
    createGeneratorSection('item', commonItems);

// Function to add common data to existing dataText
function addCommonDataTo(existingDataText) {
    return existingDataText + '\n\n' + commonGeneratorDataText;
}

// Function to get parsed common data
function getParsedCommonData() {
    if (typeof parseInput === 'function') {
        return parseInput(commonGeneratorDataText);
    }
    return {};
}

// Make functions available globally for generators
window.addCommonDataTo = addCommonDataTo;
window.getParsedCommonData = getParsedCommonData;
window.commonGeneratorDataText = commonGeneratorDataText;