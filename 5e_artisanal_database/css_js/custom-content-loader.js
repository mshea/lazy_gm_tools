// Custom Content Loader for 5e Artisanal Database

// Content type configurations
const CONTENT_TYPES = {
  monster: {
    dataVariable: 'customMonsterCombatStats',
    markdownVariable: 'monsterMarkdown',
    listElementId: 'monster-list',
    linksElementId: 'monster-links',
    contentElementId: 'monster-content',
    displayElementId: 'monster-display',
    singularName: 'Monster',
    pluralName: 'Monsters',
    breadcrumbPath: 'monsters',
    listTitle: 'Available Monsters'
  },
  item: {
    dataVariable: 'customMagicItemsData',
    markdownVariable: 'magicItemMarkdown',
    listElementId: 'item-list',
    linksElementId: 'item-links',
    contentElementId: 'item-content',
    displayElementId: 'item-display',
    singularName: 'Magic Item',
    pluralName: 'Magic Items',
    breadcrumbPath: 'magic_items',
    listTitle: 'Available Magic Items'
  },
  spell: {
    dataVariable: 'customSpellsData',
    markdownVariable: 'spellMarkdown',
    listElementId: 'spell-list',
    linksElementId: 'spell-links',
    contentElementId: 'spell-content',
    displayElementId: 'spell-display',
    singularName: 'Spell',
    pluralName: 'Spells',
    breadcrumbPath: 'spells',
    listTitle: 'Available Spells'
  }
};

// Current content type
let currentContentType = null;

// Initialize content loader
function initializeCustomContentLoader(contentType) {
  if (!CONTENT_TYPES[contentType]) {
    throw new Error(`Unknown content type: ${contentType}`);
  }
  
  currentContentType = contentType;
  
  // Load content on page ready
  window.addEventListener('DOMContentLoaded', function() {
    // Delay to ensure data files loaded
    setTimeout(() => {
      const fileParam = getURLParameter('file');
      if (fileParam) {
        loadMarkdownFile(fileParam);
      } else {
        showContentList();
      }
    }, 100);
  });
}

// Get available content
function getAvailableContent() {
  const config = CONTENT_TYPES[currentContentType];
  
  let dataVariable = window[config.dataVariable];
  
  // Try global scope if not in window
  if (!dataVariable) {
    dataVariable = eval(config.dataVariable);
  }
  
  
  if (dataVariable) {
    return dataVariable.map(item => ({
      name: item.name,
      file: item.htmlLink.split('?file=')[1]
    })).sort((a, b) => a.name.localeCompare(b.name));
  }
  return [];
}

// Get URL parameter
function getURLParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Load markdown file
function loadMarkdownFile(filePath) {
  loadJavaScriptFile(filePath);
}

// Load JavaScript file
function loadJavaScriptFile(filePath) {
  const config = CONTENT_TYPES[currentContentType];
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = filePath;
  
  script.onload = function() {
    setTimeout(() => {
      const markdownContent = window[config.markdownVariable];
      if (markdownContent) {
        const showRaw = getURLParameter('raw');
        const currentFile = getURLParameter('file');
        
        if (showRaw) {
          document.getElementById(config.displayElementId).innerHTML = `<pre><code>${markdownContent}</code></pre>`;
          document.getElementById('markdown-link-container').innerHTML = `<a href="?file=${currentFile}">HTML</a>`;
        } else {
          const converter = new showdown.Converter({tables: true});
          const html = converter.makeHtml(markdownContent);
          document.getElementById(config.displayElementId).innerHTML = html;
          document.getElementById('markdown-link-container').innerHTML = `<a href="?file=${currentFile}&raw=true">Markdown</a>`;
        }
        
        const nameMatch = markdownContent.match(/^# (.+)$/m);
        if (nameMatch) {
          const contentName = nameMatch[1];
          document.title = contentName;
          document.querySelector('body > div').innerHTML = `<a href="../../index.html">5e Artisanal Database</a> → <a href="../index.html">${config.pluralName}</a> → <a href="index.html">Custom ${config.pluralName}</a> → ${contentName}`;
        }
        
        document.getElementById(config.listElementId).style.display = 'none';
        document.getElementById(config.contentElementId).style.display = 'block';
      }
    }, 50);
  };
  
  
  document.head.appendChild(script);
}


// Show content list
function showContentList() {
  const config = CONTENT_TYPES[currentContentType];
  
  document.title = `Custom ${config.pluralName}`;
  document.querySelector('body > div').innerHTML = `<a href="../../index.html">5e Artisanal Database</a> → <a href="../index.html">${config.pluralName}</a> → Custom ${config.pluralName}`;
  
  const listElement = document.getElementById(config.linksElementId);
  listElement.innerHTML = '';
  
  const availableContent = getAvailableContent();
  
  
  availableContent.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `?file=${item.file}`;
    a.textContent = item.name;
    li.appendChild(a);
    listElement.appendChild(li);
  });
  
  document.getElementById(config.listElementId).style.display = 'block';
  document.getElementById(config.contentElementId).style.display = 'none';
}


// Export functions
window.getAvailableContent = getAvailableContent;
window.getURLParameter = getURLParameter;
window.loadMarkdownFile = loadMarkdownFile;
window.showContentList = showContentList;
window.initializeCustomContentLoader = initializeCustomContentLoader;