// document-opener.js

/**
 * Apre/chiude il pannello document-panel
 * @param {HTMLElement} header — il div.panel-header cliccato
 */
function togglePanel(header) {
  const panel   = header.parentElement;
  const content = panel.querySelector('.panel-content');
  const toggle  = panel.querySelector('.panel-toggle');

  content.classList.toggle('expanded');
  toggle .classList.toggle('expanded');
}

// Esponi globalmente, così l’onclick inline lo trova
window.togglePanel = togglePanel;
