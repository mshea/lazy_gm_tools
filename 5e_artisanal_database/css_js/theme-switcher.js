/**
 * Theme Switcher for 5e Artisanal Database
 *
 * Dynamically loads theme CSS files and persists the user's choice in localStorage.
 * Works from any page depth in the project by auto-detecting the path to css_js/.
 *
 * --- Adding Custom Themes ---
 *
 * 1. Create a CSS file in css_js/ (e.g., css_js/ocean.css) with a
 *    [data-theme="ocean"] selector block containing CSS variable overrides.
 *
 * 2. Register it by adding this block BEFORE the theme-switcher.js script tag
 *    (or anywhere on the page before this script runs):
 *
 *    <script>
 *    window.CUSTOM_THEMES = window.CUSTOM_THEMES || [];
 *    window.CUSTOM_THEMES.push({
 *      id: 'ocean',
 *      label: 'Ocean',
 *      file: 'ocean.css'
 *    });
 *    </script>
 *
 * 3. The theme will appear in the dropdown automatically.
 *
 * Themes are stored in localStorage under the key '5eadb-theme' by their ID.
 * A blank ID means "System" (no theme applied — uses browser/user preference).
 */
(function() {
    'use strict';

    const KEY = '5eadb-theme';
    const BUILTIN = [
        { id: '',          label: 'System' },
        { id: 'light',     label: 'Light' },
        { id: 'dark',      label: 'Dark',        file: 'dark.css' },
        { id: 'parchment', label: 'Parchment',   file: 'parchment.css' },
        { id: 'terminal',  label: 'Terminal',    file: 'terminal.css' },
        { id: 'compact',   label: 'Compact',     file: 'compact.css' }
    ];

    /* ---- Path resolution ---- */

    var cssDir = null;

    function resolveCssDir() {
        if (cssDir) return cssDir;

        // Find our own script tag to determine relative path to css_js/
        var scripts = document.getElementsByTagName('script');
        for (var i = 0; i < scripts.length; i++) {
            var src = scripts[i].src || '';
            var m = src.match(/^(.*\/)theme-switcher\.js/);
            if (m) {
                cssDir = m[1];
                return cssDir;
            }
        }

        // Fallback: assume we're in the same directory as the page
        // and css_js is a sibling directory.
        var path = window.location.pathname;
        // Remove filename, keep directory
        var dir = path.substring(0, path.lastIndexOf('/') + 1);
        cssDir = dir + 'css_js/';
        return cssDir;
    }

    /* ---- Theme helpers ---- */

    function allThemes() {
        return BUILTIN.concat(window.CUSTOM_THEMES || []);
    }

    function findTheme(id) {
        var list = allThemes();
        for (var i = 0; i < list.length; i++) {
            if (list[i].id === id) return list[i];
        }
        return null;
    }

    function removeExistingThemeLink() {
        var old = document.getElementById('tc');
        if (old) old.parentNode.removeChild(old);
    }

    function applyTheme(id) {
        // Clear the data-theme attribute first
        document.documentElement.removeAttribute('data-theme');

        // Remove any previously loaded theme stylesheet
        removeExistingThemeLink();

        var t = findTheme(id);
        if (!t) {
            // Unknown theme – treat as system
            localStorage.removeItem(KEY);
            return;
        }

        if (t.file) {
            // Theme with external CSS file
            document.documentElement.setAttribute('data-theme', t.id);
            var link = document.createElement('link');
            link.rel = 'stylesheet';
            link.id = 'tc';
            link.href = resolveCssDir() + t.file;
            link.onerror = function() {
                console.warn('5eADB theme: failed to load "' + t.file + '"');
            };
            document.head.appendChild(link);
            localStorage.setItem(KEY, t.id);
        } else if (t.id === 'light') {
            // Light means remove data-theme (falls back to :root vars in 5eadb.css)
            localStorage.setItem(KEY, 'light');
        } else {
            // System (blank id)
            localStorage.removeItem(KEY);
        }
    }

    /* ---- Build the dropdown ---- */

    function createDropdown() {
        var s = document.createElement('select');
        s.className = 'theme-switcher';
        s.setAttribute('aria-label', 'Theme');
        s.title = 'Switch theme';

        var list = allThemes();
        var cur = localStorage.getItem(KEY) || '';

        for (var i = 0; i < list.length; i++) {
            var o = document.createElement('option');
            o.value = list[i].id;
            o.textContent = list[i].label;
            if (list[i].id === cur) o.selected = true;
            s.appendChild(o);
        }

        s.addEventListener('change', function() {
            applyTheme(this.value);
        });

        document.body.appendChild(s);
    }

    /* ---- Init ---- */

    // Restore saved theme on load
    var saved = localStorage.getItem(KEY);
    if (saved) {
        // Wait for DOM to be ready so cssDir resolves correctly
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', function() {
                applyTheme(saved);
            });
        } else {
            applyTheme(saved);
        }
    }

    // Insert the dropdown
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createDropdown);
    } else {
        createDropdown();
    }
})();