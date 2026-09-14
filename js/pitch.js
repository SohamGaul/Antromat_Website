/**
 * ANTROMAT — MEITY GENESIS 3.0 PITCH DECK CONTROLLER
 * Clean continuous scroll utility with print-to-PDF / PPTX preparation.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Simple print shortcut (Ctrl+P or Cmd+P helper)
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'p') {
      // Allow default browser print dialog
    }
  });
});
