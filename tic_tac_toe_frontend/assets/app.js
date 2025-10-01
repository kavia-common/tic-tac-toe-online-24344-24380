(function () {
  'use strict';

  // Focus ring improvement for mouse users
  function handleMouseDown() {
    document.documentElement.classList.add('using-mouse');
  }
  function handleKeyDown(e) {
    if (e.key === 'Tab') {
      document.documentElement.classList.remove('using-mouse');
    }
  }
  window.addEventListener('mousedown', handleMouseDown);
  window.addEventListener('keydown', handleKeyDown);

  // Category buttons active state simulation
  const categories = document.querySelectorAll('.frame-8 .group');
  categories.forEach(btn => {
    btn.addEventListener('click', () => {
      categories.forEach(b => b.setAttribute('aria-pressed', 'false'));
      btn.setAttribute('aria-pressed', 'true');
    });
  });

  // Favorite heart micro interaction
  const hearts = document.querySelectorAll('.icon-btn.heart');
  hearts.forEach(h => {
    h.addEventListener('click', (e) => {
      e.preventDefault();
      h.classList.toggle('active');
      if (h.classList.contains('active')) {
        h.style.filter = 'drop-shadow(0 6px 16px rgba(37,99,235,0.35))';
      } else {
        h.style.filter = '';
      }
    });
  });
})();
