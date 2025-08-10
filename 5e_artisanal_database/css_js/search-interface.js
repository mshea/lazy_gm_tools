/**
 * Search Interface Module for 5e Artisanal Database
 * Handles common search functionality and URL management
 */

class SearchInterface {
    constructor() {
        // SearchFilters will be accessed via global window.searchFilters when needed
    }

    /**
     * Build search URL with query and filter parameters
     */
    buildSearchUrl(query = '', isLucky = false, baseUrl = './search/index.html') {
        let url = baseUrl;
        const params = [];
        
        if (query.trim()) {
            params.push(`q=${encodeURIComponent(query.trim())}`);
        }
        
        if (isLucky) {
            params.push('lucky=1');
        }
        
        // Add filter parameters if filters exist and are configured
        try {
            if (window.searchFilters) {
                const filterParams = window.searchFilters.encodeSourceFiltersToUrl();
                Object.entries(filterParams).forEach(([param, value]) => {
                    params.push(`${param}=${encodeURIComponent(value)}`);
                });
            }
        } catch (error) {
            // Filter encoding failed, proceeding with basic search
        }
        
        if (params.length > 0) {
            url += '?' + params.join('&');
        }
        
        return url;
    }

    /**
     * Parse URL parameters into an object
     */
    parseUrlParams(url = window.location.href) {
        const urlObj = new URL(url);
        return urlObj.searchParams;
    }

    /**
     * Update URL parameters without reload
     */
    updateUrlParameters(query = null, additionalParams = {}) {
        const url = new URL(window.location);
        
        // Update query parameter
        if (query !== null) {
            if (query.trim()) {
                url.searchParams.set('q', query.trim());
            } else {
                url.searchParams.delete('q');
            }
        }
        
        // Clear existing filter parameters
        ['r', 'm', 's', 'i'].forEach(param => {
            url.searchParams.delete(param);
        });
        
        // Update sources parameters
        const sourceParams = window.searchFilters ? window.searchFilters.encodeSourceFiltersToUrl() : {};
        Object.entries(sourceParams).forEach(([param, value]) => {
            url.searchParams.set(param, value);
        });
        
        // Add any additional parameters
        Object.entries(additionalParams).forEach(([param, value]) => {
            if (value !== null && value !== undefined) {
                url.searchParams.set(param, value);
            }
        });
        
        // Update browser history without reload
        window.history.replaceState({}, '', url);
    }

    /**
     * Perform search by redirecting to search page
     */
    performSearchRedirect(query, isLucky = false) {
        const url = this.buildSearchUrl(query, isLucky);
        window.location.href = url;
    }

    /**
     * Setup search input with Enter key handling
     */
    setupSearchInput(inputId, onSearchCallback) {
        const searchInput = document.getElementById(inputId);
        if (!searchInput) return;

        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                onSearchCallback(e);
            }
        });
    }

    /**
     * Highlight search terms in text
     */
    highlightText(text, query) {
        if (!query) return text;
        
        const words = query.split(/\s+/).filter(word => word.length > 0);
        let highlightedText = text;
        
        words.forEach(word => {
            const regex = new RegExp(`(${this.escapeRegExp(word)})`, 'gi');
            highlightedText = highlightedText.replace(regex, '<span class="highlight">$1</span>');
        });
        
        return highlightedText;
    }

    /**
     * Escape special regex characters
     */
    escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    /**
     * Generate text snippet with highlighted search terms
     */
    generateSnippet(content, query, maxLength = 200) {
        const words = query.toLowerCase().split(/\s+/);
        
        let bestPos = 0;
        let maxMatches = 0;
        
        for (let i = 0; i < content.length - maxLength; i += 20) {
            const snippet = content.substr(i, maxLength).toLowerCase();
            const matches = words.reduce((count, word) => {
                return count + (snippet.includes(word) ? 1 : 0);
            }, 0);
            
            if (matches > maxMatches) {
                maxMatches = matches;
                bestPos = i;
            }
        }
        
        let snippet = content.substr(bestPos, maxLength);
        if (bestPos > 0) snippet = '...' + snippet;
        if (bestPos + maxLength < content.length) snippet += '...';
        
        return this.highlightText(snippet, query);
    }


    /**
     * Create search result item HTML
     */
    createResultItemHtml(doc, query) {
        if (!doc) return '';

        const snippet = this.generateSnippet(doc.content, query);
        const categoryInfo = doc.category && doc.category !== 'root' ? ` > ${doc.category}` : '';
        
        return `
            <div class="result-item">
                <div class="result-title">
                    <a href="${doc.url}" target="_blank">${this.highlightText(doc.title, query)}</a>
                </div>
                <div class="result-source">${doc.source}${categoryInfo}</div>
                <div class="result-snippet">${snippet}</div>
            </div>
        `;
    }

    /**
     * Display search statistics
     */
    displaySearchStats(resultCount, query, containerId = 'searchStats') {
        const statsContainer = document.getElementById(containerId);
        if (!statsContainer) return;

        if (resultCount === 0) {
            statsContainer.style.display = 'none';
            return;
        }

        statsContainer.innerHTML = `Found ${resultCount} result${resultCount === 1 ? '' : 's'} for "${query}"`;
        statsContainer.style.display = 'block';
    }

    /**
     * Display no results message
     */
    displayNoResults(containerId = 'searchResults') {
        const resultsContainer = document.getElementById(containerId);
        if (resultsContainer) {
            resultsContainer.innerHTML = '<div class="no-results">No results found for your search.</div>';
        }
    }

}

// Global instance for backward compatibility
let searchInterface;

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    searchInterface = new SearchInterface();
});