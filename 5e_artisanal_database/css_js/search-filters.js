/**
 * Shared Search Filter Module for 5e Artisanal Database
 * Handles source filtering UI and logic across index and search pages
 */

class SearchFilters {
    constructor() {
        // sourceMetadata will be accessed dynamically from window.sourceMetadata
    }

    get sourceMetadata() {
        return window.sourceMetadata || [];
    }

    /**
     * Create mappings from short codes to full source names
     */
    createSourceCodeMappings() {
        const mappings = {
            // Common abbreviations
            'srd51': '5.1 SRD',
            'srd52': '5.2 SRD',
            'srd24': 'D&D 2024',
            'a5e': 'Level Up Advanced 5e',
            'vom': 'Vault of Magic',
            'tov': 'Tome of Versatile Magic',
            'monsters': 'Monsters',
            'spells': 'Spells',
            'items': 'Magic Items',
            'basic': 'Basic Rules',
            'dmg': 'Dungeon Master\'s Guide',
            'phb': 'Player\'s Handbook',
            'mm': 'Monster Manual',
            'xgte': 'Xanathar\'s Guide to Everything',
            'tce': 'Tasha\'s Cauldron of Everything',
            'ftd': 'Fizban\'s Treasury of Dragons',
            'mpmm': 'Mordenkainen Presents: Monsters of the Multiverse',
            'blackfla': 'black_flag'
        };
        
        // Auto-generate codes for any sources not manually mapped
        const allSources = new Set();
        this.sourceMetadata.forEach(item => {
            if (item.type === 'ruleset') {
                allSources.add(item.source);
            } else {
                allSources.add(item.category);
            }
        });
        
        // Add auto-generated codes for unmapped sources
        Array.from(allSources).forEach(source => {
            if (!Object.values(mappings).includes(source)) {
                // Create a simple code from the source name
                let code = source.toLowerCase()
                    .replace(/[^a-z0-9]/g, '')
                    .substring(0, 8);
                
                // If code already exists, make it unique
                let counter = 1;
                while (mappings[code]) {
                    code = source.toLowerCase()
                        .replace(/[^a-z0-9]/g, '')
                        .substring(0, 7) + counter;
                    counter++;
                }
                
                mappings[code] = source;
            }
        });
        
        return mappings;
    }

    /**
     * Encode selected source filters to URL parameters
     */
    encodeSourceFiltersToUrl() {
        const selectedSources = this.getSelectedSources();
        const allSources = this.getAllAvailableSources();
        
        // If no sources selected or all sources selected, return empty (default state)
        if (selectedSources.length === 0 || selectedSources.length === allSources.length) {
            return {};
        }
        
        // Create source code mappings
        const sourceCodeMappings = this.createSourceCodeMappings();
        const reverseMapping = Object.fromEntries(
            Object.entries(sourceCodeMappings).map(([code, source]) => [source, code])
        );
        
        // Group sources by type
        const sourcesByType = {
            'ruleset': [],
            'monsters': [],
            'spells': [],
            'magic_items': []
        };
        
        selectedSources.forEach(filter => {
            const code = reverseMapping[filter.source];
            if (code && sourcesByType[filter.type]) {
                sourcesByType[filter.type].push(code);
            }
        });
        
        // Build parameter object
        const params = {};
        const typeToParam = {
            'ruleset': 'r',
            'monsters': 'm',
            'spells': 's',
            'magic_items': 'i'
        };
        
        Object.entries(sourcesByType).forEach(([type, codes]) => {
            if (codes.length > 0) {
                params[typeToParam[type]] = codes.join(',');
            }
        });
        
        return params;
    }

    /**
     * Apply source filters from URL parameters
     */
    applySourceFiltersFromUrl(urlParams) {
        // Check if any filter parameters exist
        const hasFilterParams = ['r', 'm', 's', 'i'].some(param => urlParams.has(param));
        
        if (!hasFilterParams) {
            // No filter parameters - default to all sources selected
            const allCheckboxes = document.querySelectorAll('#sourceFilters input[type="checkbox"]');
            allCheckboxes.forEach(checkbox => checkbox.checked = true);
            this.updateAllMasterCheckboxes();
            return;
        }
        
        // Filter parameters exist - uncheck all first, then apply selections
        const allCheckboxes = document.querySelectorAll('#sourceFilters input[type="checkbox"]');
        allCheckboxes.forEach(checkbox => checkbox.checked = false);
        
        // Create source code mappings
        const sourceCodeMappings = this.createSourceCodeMappings();
        
        // Handle each parameter type
        const paramTypes = {
            'r': 'ruleset',
            'm': 'monsters', 
            's': 'spells',
            'i': 'magic_items'
        };
        
        Object.entries(paramTypes).forEach(([param, type]) => {
            const paramValue = urlParams.get(param);
            if (paramValue) {
                const codes = paramValue.split(',');
                codes.forEach(code => {
                    const fullSourceName = sourceCodeMappings[code];
                    if (fullSourceName) {
                        const checkbox = document.querySelector(`#sourceFilters input[data-type="${type}"][data-source="${fullSourceName}"]`);
                        if (checkbox) {
                            checkbox.checked = true;
                        }
                    }
                });
            }
        });
        
        // Update master checkboxes
        this.updateAllMasterCheckboxes();
    }

    /**
     * Get currently selected sources
     */
    getSelectedSources() {
        const checkboxes = document.querySelectorAll('#sourceFilters input[type="checkbox"]:checked');
        return Array.from(checkboxes).map(checkbox => ({
            type: checkbox.dataset.type,
            source: checkbox.dataset.source
        })).filter(item => item.type && item.source); // Filter out master checkboxes
    }

    /**
     * Get all available sources
     */
    getAllAvailableSources() {
        const checkboxes = document.querySelectorAll('#sourceFilters input[type="checkbox"]');
        return Array.from(checkboxes).map(checkbox => ({
            type: checkbox.dataset.type,
            source: checkbox.dataset.source
        })).filter(item => item.type && item.source); // Filter out master checkboxes
    }

    /**
     * Setup source filter UI
     */
    setupSourceFilters() {
        if (!this.sourceMetadata || this.sourceMetadata.length === 0) {
            return;
        }
        
        // Organize documents by type
        const rulesets = new Set();
        const databases = {
            monsters: new Set(),
            spells: new Set(),
            magic_items: new Set()
        };
        
        this.sourceMetadata.forEach(item => {
            if (item.type === 'ruleset') {
                rulesets.add(item.source);
            } else if (item.type in databases) {
                databases[item.type].add(item.category);
            }
        });
        
        const filtersContainer = document.getElementById('sourceFilters');
        if (!filtersContainer) return;
        
        filtersContainer.innerHTML = '';
        
        // Create Rulesets section
        if (rulesets.size > 0) {
            this.createFilterSection('rulesets', 'Rulesets', 'ruleset', Array.from(rulesets).sort(), filtersContainer);
        }
        
        // Create Database sections
        const dbTypeNames = {
            monsters: 'Monsters',
            spells: 'Spells', 
            magic_items: 'Magic Items'
        };
        
        Object.entries(databases).forEach(([dbType, sources]) => {
            if (sources.size > 0) {
                this.createFilterSection(dbType, dbTypeNames[dbType], dbType, Array.from(sources).sort(), filtersContainer);
            }
        });
    }

    /**
     * Create a filter section (helper method)
     */
    createFilterSection(sectionId, sectionTitle, dataType, sources, container) {
        const section = document.createElement('div');
        section.className = 'filter-section';
        
        const title = document.createElement('div');
        title.className = 'filter-section-title';
        
        const masterCheckbox = document.createElement('input');
        masterCheckbox.type = 'checkbox';
        masterCheckbox.id = `master-${sectionId}`;
        masterCheckbox.checked = true;
        masterCheckbox.addEventListener('change', (e) => {
            e.stopPropagation();
            this.toggleAllInSection(sectionId);
        });
        
        const titleText = document.createElement('span');
        titleText.textContent = sectionTitle;
        titleText.onclick = () => this.toggleSection(sectionId);
        
        const toggleIcon = document.createElement('span');
        toggleIcon.className = 'section-toggle collapsed';
        toggleIcon.textContent = '►';
        toggleIcon.onclick = () => this.toggleSection(sectionId);
        
        title.appendChild(masterCheckbox);
        title.appendChild(titleText);
        title.appendChild(toggleIcon);
        section.appendChild(title);
        
        const subsection = document.createElement('div');
        subsection.className = 'filter-subsection collapsed';
        subsection.id = `section-${sectionId}`;
        
        sources.forEach(source => {
            const filterDiv = document.createElement('div');
            filterDiv.className = 'source-filter';
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `filter-${dataType}-${source.replace(/[^a-zA-Z0-9]/g, '')}`;
            checkbox.value = `${dataType}-${source}`;
            checkbox.checked = true;
            checkbox.dataset.type = dataType;
            checkbox.dataset.source = source;
            checkbox.dataset.section = sectionId;
            
            const label = document.createElement('label');
            label.htmlFor = checkbox.id;
            label.textContent = source;
            
            filterDiv.appendChild(checkbox);
            filterDiv.appendChild(label);
            subsection.appendChild(filterDiv);
            
            checkbox.addEventListener('change', () => {
                this.updateMasterCheckbox(sectionId);
                // Trigger custom event for pages to listen to
                this.triggerFilterChange();
            });
        });
        
        section.appendChild(subsection);
        container.appendChild(section);
    }

    /**
     * Toggle a filter section open/closed
     */
    toggleSection(sectionName) {
        const section = document.getElementById(`section-${sectionName}`);
        const toggle = section.previousElementSibling.querySelector('.section-toggle');
        
        if (section.classList.contains('collapsed')) {
            section.classList.remove('collapsed');
            toggle.classList.remove('collapsed');
            toggle.textContent = '▼';
        } else {
            section.classList.add('collapsed');
            toggle.classList.add('collapsed');
            toggle.textContent = '►';
        }
    }

    /**
     * Toggle all checkboxes in a section
     */
    toggleAllInSection(sectionType) {
        const masterCheckbox = document.getElementById(`master-${sectionType}`);
        const sectionCheckboxes = document.querySelectorAll(`#sourceFilters input[data-section="${sectionType}"]`);
        
        sectionCheckboxes.forEach(checkbox => {
            checkbox.checked = masterCheckbox.checked;
        });
        
        this.triggerFilterChange();
    }

    /**
     * Update master checkbox state based on children
     */
    updateMasterCheckbox(sectionType) {
        const masterCheckbox = document.getElementById(`master-${sectionType}`);
        const sectionCheckboxes = document.querySelectorAll(`#sourceFilters input[data-section="${sectionType}"]`);
        const checkedBoxes = document.querySelectorAll(`#sourceFilters input[data-section="${sectionType}"]:checked`);
        
        if (checkedBoxes.length === 0) {
            masterCheckbox.checked = false;
            masterCheckbox.indeterminate = false;
        } else if (checkedBoxes.length === sectionCheckboxes.length) {
            masterCheckbox.checked = true;
            masterCheckbox.indeterminate = false;
        } else {
            masterCheckbox.checked = false;
            masterCheckbox.indeterminate = true;
        }
    }

    /**
     * Update all master checkboxes
     */
    updateAllMasterCheckboxes() {
        const sections = ['rulesets', 'monsters', 'spells', 'magic_items'];
        sections.forEach(section => {
            const masterCheckbox = document.getElementById(`master-${section}`);
            if (masterCheckbox) {
                this.updateMasterCheckbox(section);
            }
        });
    }

    /**
     * Select all sources
     */
    selectAllSources() {
        const checkboxes = document.querySelectorAll('#sourceFilters input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.checked = true;
        });
        this.updateAllMasterCheckboxes();
        this.triggerFilterChange();
    }

    /**
     * Deselect all sources
     */
    deselectAllSources() {
        const checkboxes = document.querySelectorAll('#sourceFilters input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
        this.updateAllMasterCheckboxes();
        this.triggerFilterChange();
    }

    /**
     * Toggle filter UI visibility
     */
    toggleFilters() {
        const filterToggle = document.getElementById('filterToggle');
        const filterContent = document.getElementById('filterContent');
        
        if (!filterToggle || !filterContent) return;
        
        filterToggle.classList.toggle('collapsed');
        filterContent.classList.toggle('collapsed');
        
        if (filterContent.classList.contains('collapsed')) {
            filterToggle.textContent = '►';
        } else {
            filterToggle.textContent = '▼';
        }
    }

    /**
     * Trigger filter change event for pages to listen to
     */
    triggerFilterChange() {
        const event = new CustomEvent('filtersChanged', {
            detail: {
                selectedSources: this.getSelectedSources(),
                urlParams: this.encodeSourceFiltersToUrl()
            }
        });
        document.dispatchEvent(event);
    }
}

// Global functions for backward compatibility

function toggleFilters() {
    if (!window.searchFilters) window.searchFilters = new SearchFilters();
    window.searchFilters.toggleFilters();
}

function selectAllSources() {
    if (!window.searchFilters) window.searchFilters = new SearchFilters();
    window.searchFilters.selectAllSources();
}

function deselectAllSources() {
    if (!window.searchFilters) window.searchFilters = new SearchFilters();
    window.searchFilters.deselectAllSources();
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    if (!window.searchFilters) window.searchFilters = new SearchFilters();
    // Wait a bit for search data to load
    setTimeout(() => window.searchFilters.setupSourceFilters(), 100);
});