/**
 * Universal Monster Lookup Component
 * Provides consistent monster search functionality across 5e Artisanal Database tools
 */

class MonsterLookup {
    static instances = [];
    static globalSourceFilterElementId = 'monsterSourceFilter';

    constructor(options = {}) {
        this.options = {
            inputElement: options.inputElement || null,
            resultsElement: options.resultsElement || null,
            minSearchLength: options.minSearchLength || 2,
            maxResults: options.maxResults || 15,
            placeholder: options.placeholder || 'Search for a monster...',
            onMonsterSelect: options.onMonsterSelect || null,
            onSearchStart: options.onSearchStart || null,
            onSearchComplete: options.onSearchComplete || null,
            showSource: options.showSource !== false,
            showStats: options.showStats !== false,
            cleanNames: options.cleanNames !== false
        };

        this.monsters = [];
        this.filteredMonsters = [];
        this.selectedIndex = -1;

        this.init();
        MonsterLookup.instances.push(this);
    }

    async init() {
        this.loadMonsters();
        this.setupEventListeners();
        this.setupStyling();
    }

    loadMonsters() {
        if (typeof monsterData !== 'undefined') {
            this.monsters = monsterData;
        } else {
            this.loadFallbackMonsters();
        }
    }

    loadFallbackMonsters() {
        this.monsters = [
            { name: "Goblin", ac: 15, hp: 7, init: 2, source: "SRD", slug: "goblin" },
            { name: "Orc", ac: 13, hp: 15, init: 1, source: "SRD", slug: "orc" }
        ];
    }

    static populateGlobalSourceFilter(availableMonsters) {
        const sourceSelect = document.getElementById(MonsterLookup.globalSourceFilterElementId);
        if (!sourceSelect) return;

        const sources = [...new Set(availableMonsters.map(m => m.source))].sort();
        sourceSelect.innerHTML = '<option value="">All Sources</option>';
        sources.forEach(source => {
            if (source) {
                const option = document.createElement('option');
                option.value = source;
                option.textContent = source;
                sourceSelect.appendChild(option);
            }
        });
    }

    static updateAllInstances(availableMonsters) {
        const selectedSource = document.getElementById(MonsterLookup.globalSourceFilterElementId)?.value || '';
        MonsterLookup.instances.forEach(instance => {
            instance.monsters = availableMonsters;
            instance.options.sourceFilter = (monster) => !selectedSource || monster.source === selectedSource;
            instance.handleSearch(instance.options.inputElement.value);
        });
    }
    
    setupEventListeners() {
        if (!this.options.inputElement) return;
        
        // Input event for real-time search
        this.options.inputElement.addEventListener('input', (e) => {
            this.handleSearch(e.target.value);
        });
        
        // Keyboard navigation
        this.options.inputElement.addEventListener('keydown', (e) => {
            this.handleKeydown(e);
        });
        
        // Focus events
        this.options.inputElement.addEventListener('focus', () => {
            if (this.options.inputElement.value.trim().length >= this.options.minSearchLength) {
                this.handleSearch(this.options.inputElement.value);
                this.showResults();
            }
        });
        
        // Hide results when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.options.inputElement.contains(e.target) && 
                !this.options.resultsElement.contains(e.target)) {
                this.hideResults();
            }
        });
        
        // Set placeholder
        this.options.inputElement.placeholder = this.options.placeholder;
    }
    
    setupStyling() {
        if (!this.options.resultsElement) return;
        
        // Apply default styling to results container
        const styles = {
            position: 'absolute',
            top: '100%',
            left: '0',
            right: '0',
            backgroundColor: 'white',
            border: '1px solid #ccc',
            borderTop: 'none',
            borderRadius: '0 0 4px 4px',
            maxHeight: '200px',
            overflowY: 'auto',
            zIndex: '1000',
            display: 'none'
        };
        
        Object.assign(this.options.resultsElement.style, styles);
    }
    
    handleSearch(query) {
        const searchTerm = query.toLowerCase().trim();
        
        if (this.options.onSearchStart) {
            this.options.onSearchStart(searchTerm);
        }
        
        if (searchTerm.length < this.options.minSearchLength) {
            this.hideResults();
            return;
        }
        
        // Filter monsters
        this.filteredMonsters = this.monsters.filter(monster => {
            const nameMatch = monster.name.toLowerCase().includes(searchTerm);
            const sourceMatch = !this.options.sourceFilter || this.options.sourceFilter(monster);
            return nameMatch && sourceMatch;
        }).slice(0, this.options.maxResults);
        
        this.selectedIndex = -1;
        
        if (this.filteredMonsters.length === 0) {
            this.hideResults();
        } else {
            this.renderResults();
            this.showResults();
        }
        
        if (this.options.onSearchComplete) {
            this.options.onSearchComplete(this.filteredMonsters);
        }
    }
    
    handleKeydown(e) {
        if (!this.isResultsVisible()) return;
        
        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                this.selectedIndex = Math.min(this.selectedIndex + 1, this.filteredMonsters.length - 1);
                this.updateSelection();
                break;
                
            case 'ArrowUp':
                e.preventDefault();
                this.selectedIndex = Math.max(this.selectedIndex - 1, -1);
                this.updateSelection();
                break;
                
            case 'Enter':
                e.preventDefault();
                if (this.selectedIndex >= 0) {
                    this.selectMonster(this.filteredMonsters[this.selectedIndex]);
                }
                break;
                
            case 'Escape':
                this.hideResults();
                break;
        }
    }
    
    renderResults() {
        if (!this.options.resultsElement) return;
        
        this.options.resultsElement.innerHTML = this.filteredMonsters.map((monster, index) => {
            const isSelected = index === this.selectedIndex;
            const cleanName = this.options.cleanNames ? 
                monster.name.replace(/\s*\([^)]+\)$/, '') : monster.name;
            
            let content = `<strong>${cleanName}</strong>`;
            
            // Always show CR if available
            if (monster.cr) {
                const crDisplay = this.formatCR(monster.cr);
                content += ` - CR ${crDisplay}`;
            }
            
            if (this.options.showStats) {
                const initDisplay = monster.init >= 0 ? `+${monster.init}` : monster.init;
                content += `, AC ${monster.ac}, HP ${monster.hp}, Init ${initDisplay}`;
            }
            
            if (this.options.showSource && monster.source) {
                content += ` <span style="color: #666; font-size: 0.9em;">(${monster.source})</span>`;
            }
            
            return `<div class="monster-lookup-result" 
                          data-index="${index}"
                          style="padding: 8px; cursor: pointer; border-bottom: 1px solid #eee; font-size: 16px; ${isSelected ? 'background-color: #e0e0e0;' : ''}"
                          onmouseenter="this.style.backgroundColor='#f0f0f0'"
                          onmouseleave="this.style.backgroundColor='${isSelected ? '#e0e0e0' : 'white'}'"
                          onclick="window.monsterLookupInstances[this.closest('.monster-group').dataset.lookupId].selectMonsterByIndex(${index})">
                        ${content}
                    </div>`;
        }).join('');
    }
    
    updateSelection() {
        this.renderResults();
    }
    
    selectMonsterByIndex(index) {
        if (index >= 0 && index < this.filteredMonsters.length) {
            this.selectMonster(this.filteredMonsters[index]);
        }
    }
    
    selectMonster(monster) {
        if (this.options.onMonsterSelect) {
            this.options.onMonsterSelect(monster);
        }
        this.hideResults();
    }
    
    showResults() {
        if (this.options.resultsElement) {
            this.options.resultsElement.style.display = 'block';
        }
    }
    
    hideResults() {
        if (this.options.resultsElement) {
            this.options.resultsElement.style.display = 'none';
        }
        this.selectedIndex = -1;
    }
    
    isResultsVisible() {
        return this.options.resultsElement && 
               this.options.resultsElement.style.display === 'block';
    }
    
    // Utility methods
    formatCR(cr) {
        const numCR = parseFloat(cr);
        if (numCR === 0.125) return "1/8";
        if (numCR === 0.25) return "1/4";
        if (numCR === 0.5) return "1/2";
        return cr.toString();
    }
    
    getCRFromMonster(monster) {
        // Extract CR from monster name or return a default
        if (monster.cr) return monster.cr;
        
        // Try to parse from name if it has CR info
        const crMatch = monster.name.match(/\bCR\s*(\d+(?:\.\d+)?)\b/i);
        if (crMatch) return crMatch[1];
        
        // Estimate CR from HP (rough approximation)
        if (monster.hp <= 25) return "0.25";
        if (monster.hp <= 50) return "1";
        if (monster.hp <= 100) return "3";
        if (monster.hp <= 200) return "8";
        if (monster.hp <= 300) return "15";
        return "20";
    }
    
    getMonstersByCR(cr) {
        return this.monsters.filter(monster => this.getCRFromMonster(monster) === cr.toString());
    }
    
    getMonstersBySource(source) {
        return this.monsters.filter(monster => monster.source === source);
    }
    
    getAvailableSources() {
        return [...new Set(this.monsters.map(monster => monster.source))].sort();
    }
}

// Global instance for onclick handlers
window.MonsterLookup = MonsterLookup;