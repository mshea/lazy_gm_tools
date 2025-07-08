/* Consolidated JavaScript for DataTables with Filter Panels */
/* Used by monsters, spells, and magic items indexes */

class FilterDataTable {
    constructor(config) {
        this.config = {
            tableId: '#dataTable',
            dataSource: null,
            columns: [],
            filters: {},
            nameGenerator: null,
            pageLength: 25,
            defaultOrder: [[0, "asc"]],
            ...config
        };
        
        this.allData = [];
        this.table = null;
        this.filters = {};
        
        this.init();
    }
    
    init() {
        // Load data
        this.loadData();
        
        // Initialize DataTable
        this.initializeTable();
        
        // Initialize filters
        this.initializeFilters();
        
        // Setup event handlers
        this.setupEventHandlers();
        
        // Populate filter options
        this.populateFilters();
    }
    
    loadData() {
        if (typeof this.config.dataSource !== 'undefined') {
            this.allData = [...this.config.dataSource];
        }
    }
    
    initializeTable() {
        const tableData = this.allData.map(item => 
            this.config.columns.map(col => col.render ? col.render(item) : item[col.field])
        );
        
        const tableConfig = {
            data: tableData,
            pageLength: this.config.pageLength,
            order: this.config.order || this.config.defaultOrder
        };
        
        // Add columnDefs if provided
        if (this.config.columnDefs) {
            tableConfig.columnDefs = this.config.columnDefs;
        }
        
        this.table = $(this.config.tableId).DataTable(tableConfig);
    }
    
    initializeFilters() {
        // Initialize filter sets based on config
        this.filters = {};
        Object.keys(this.config.filters).forEach(key => {
            if (this.config.filters[key].type === 'levelComparison') {
                this.filters[key] = {
                    enabled: false,
                    operator: '=',
                    value: 0
                };
            } else {
                this.filters[key] = new Set();
            }
        });
    }
    
    setupEventHandlers() {
        // Filter change handlers
        $(document).on('change', '.filter-option input[type="checkbox"]', (e) => {
            const filterKey = $(e.target).data('filter');
            const value = $(e.target).val();
            
            if ($(e.target).is(':checked')) {
                this.filters[filterKey].add(value);
            } else {
                this.filters[filterKey].delete(value);
            }
            
            this.updateFilterSummary();
            this.table.draw();
        });
        
        // Level comparison handlers (for spells)
        $('#levelComparisonEnabled').change((e) => {
            if (this.filters.levelComparison) {
                this.filters.levelComparison.enabled = $(e.target).is(':checked');
                if (this.filters.levelComparison.enabled) {
                    $('#levelComparisonControls').show();
                } else {
                    $('#levelComparisonControls').hide();
                }
                this.updateFilterSummary();
                this.table.draw();
            }
        });
        
        $('#levelOperator').change((e) => {
            if (this.filters.levelComparison) {
                this.filters.levelComparison.operator = $(e.target).val();
                this.updateFilterSummary();
                this.table.draw();
            }
        });
        
        $('#levelValue').change((e) => {
            if (this.filters.levelComparison) {
                this.filters.levelComparison.value = parseInt($(e.target).val()) || 0;
                this.updateFilterSummary();
                this.table.draw();
            }
        });
        
        // Global filter functions
        window.applyFilters = () => {
            this.table.draw();
        };
        
        window.clearAllFilters = () => {
            $('.filter-option input[type="checkbox"]').prop('checked', false);
            $('#levelComparisonEnabled').prop('checked', false);
            $('#levelComparisonControls').hide();
            
            Object.keys(this.filters).forEach(key => {
                if (this.filters[key] instanceof Set) {
                    this.filters[key].clear();
                } else if (this.filters[key].enabled !== undefined) {
                    this.filters[key].enabled = false;
                }
            });
            
            this.updateFilterSummary();
            this.table.draw();
        };
        
        window.selectAllFilters = () => {
            $('.filter-option input[type="checkbox"]').prop('checked', true);
            
            $('.filter-option input[type="checkbox"]').each((i, elem) => {
                const filterKey = $(elem).data('filter');
                const value = $(elem).val();
                if (this.filters[filterKey] instanceof Set) {
                    this.filters[filterKey].add(value);
                }
            });
            
            this.updateFilterSummary();
            this.table.draw();
        };
        
        window.toggleFilters = () => {
            const content = $('#filterContent');
            const toggle = $('#filterToggle');
            
            if (content.hasClass('collapsed')) {
                content.removeClass('collapsed');
                toggle.text('Hide');
            } else {
                content.addClass('collapsed');
                toggle.text('Show');
            }
        };
        
        // Custom filter function
        $.fn.dataTable.ext.search.push((settings, data, dataIndex) => {
            return this.customFilter(data, dataIndex);
        });
    }
    
    populateFilters() {
        Object.keys(this.config.filters).forEach(filterKey => {
            const filterConfig = this.config.filters[filterKey];
            
            if (filterConfig.type === 'levelComparison') {
                // Skip - handled by HTML template
                return;
            }
            
            const values = new Set();
            const columnConfig = this.config.columns.find(col => col.field === filterConfig.field);
            
            // Extract unique values from data using rendered values
            this.allData.forEach(item => {
                let value = item[filterConfig.field];
                
                // If there's a render function, use the rendered value for filtering
                if (columnConfig && columnConfig.render) {
                    value = columnConfig.render(item);
                }
                
                if (filterConfig.type === 'classes' && value) {
                    // Handle comma-separated classes
                    value.split(',').forEach(cls => {
                        const trimmed = cls.trim();
                        if (trimmed) values.add(trimmed);
                    });
                } else if (value !== undefined && value !== null) {
                    values.add(value);
                }
            });
            
            // Populate filter container
            const container = $(`#${filterKey}Filters`);
            container.empty();
            
            let sortedValues = Array.from(values);
            if (filterConfig.sort) {
                // If there's a sort function, we might need to sort by original values
                if (filterConfig.sortByOriginal) {
                    const originalValues = this.allData.map(item => item[filterConfig.field]);
                    const uniqueOriginals = [...new Set(originalValues)];
                    const sortedOriginals = uniqueOriginals.sort(filterConfig.sort);
                    // Convert back to rendered values
                    sortedValues = sortedOriginals.map(original => {
                        const item = this.allData.find(i => i[filterConfig.field] === original);
                        return columnConfig && columnConfig.render ? columnConfig.render(item) : original;
                    });
                } else {
                    sortedValues = sortedValues.sort(filterConfig.sort);
                }
            } else {
                sortedValues.sort();
            }
            
            sortedValues.forEach(value => {
                const displayValue = value; // Value is already rendered if needed
                const id = filterConfig.idGenerator ? filterConfig.idGenerator(value) : `${filterKey}_${value.toString().replace(/\\s+/g, '_').replace(/[()]/g, '')}`;
                
                const option = $(`
                    <div class="filter-option">
                        <input type="checkbox" id="${id}" value="${value}" data-filter="${filterKey}">
                        <label for="${id}">${displayValue}</label>
                    </div>
                `);
                container.append(option);
            });
        });
    }
    
    updateFilterSummary() {
        const parts = [];
        let totalFilters = 0;
        
        Object.keys(this.filters).forEach(key => {
            const filterConfig = this.config.filters[key];
            
            if (this.filters[key] instanceof Set && this.filters[key].size > 0) {
                parts.push(`${filterConfig.label}: ${this.filters[key].size}`);
                totalFilters += this.filters[key].size;
            } else if (this.filters[key].enabled) {
                parts.push(`${filterConfig.label}: ${this.filters[key].operator} ${this.filters[key].value}`);
                totalFilters += 1;
            }
        });
        
        if (totalFilters === 0) {
            $('#filterSummary').text('No filters applied');
        } else {
            $('#filterSummary').text(`Active filters - ${parts.join(', ')}`);
        }
    }
    
    customFilter(data, dataIndex) {
        // Apply filters based on configuration
        for (const [key, filterConfig] of Object.entries(this.config.filters)) {
            if (!this.applyFilter(key, filterConfig, data)) {
                return false;
            }
        }
        return true;
    }
    
    applyFilter(key, filterConfig, data) {
        const filter = this.filters[key];
        
        if (filterConfig.type === 'levelComparison') {
            if (filter.enabled) {
                const level = parseInt(data[filterConfig.columnIndex]);
                const operator = filter.operator;
                const value = filter.value;
                
                if (operator === '<' && level >= value) return false;
                if (operator === '=' && level !== value) return false;
                if (operator === '>' && level <= value) return false;
            }
        } else if (filter instanceof Set && filter.size > 0) {
            const cellValue = data[filterConfig.columnIndex];
            
            if (filterConfig.type === 'classes') {
                // Handle comma-separated classes
                const itemClasses = cellValue.split(',').map(c => c.trim());
                const hasMatchingClass = itemClasses.some(cls => filter.has(cls));
                if (!hasMatchingClass) return false;
            } else if (filterConfig.type === 'exact') {
                if (!filter.has(cellValue)) return false;
            } else if (filterConfig.type === 'string') {
                if (!filter.has(cellValue.toString())) return false;
            }
        }
        
        return true;
    }
}

// Utility functions for generating name cells with links
function generateNameCell(item, htmlLinkField = 'htmlLink') {
    const name = item.name;
    const htmlLink = item[htmlLinkField];
    
    if (htmlLink) {
        const mdLink = htmlLink.replace('./html/', './md/').replace('.html', '.md');
        return `<a href="${htmlLink}" target="_blank">${name}</a> – <a href="${mdLink}" target="_blank">md</a>`;
    }
    
    return name;
}

// Utility functions for sorting
function sortByRarity(a, b) {
    const rarityOrder = ['common', 'uncommon', 'rare', 'very rare', 'legendary', 'artifact', 'varies'];
    const aIndex = rarityOrder.indexOf(a.toLowerCase());
    const bIndex = rarityOrder.indexOf(b.toLowerCase());
    if (aIndex === -1 && bIndex === -1) return a.localeCompare(b);
    if (aIndex === -1) return 1;
    if (bIndex === -1) return -1;
    return aIndex - bIndex;
}

function sortByLevel(a, b) {
    return a - b;
}

function displayLevel(level) {
    return level === 0 ? 'Cantrip' : level.toString();
}

function displayCR(cr) {
    return cr === 0 ? '0' : cr.toString();
}