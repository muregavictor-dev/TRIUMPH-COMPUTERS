document.addEventListener("DOMContentLoaded", function () {
    new Typed("#typed-output", {
      strings: [
        "Welcome to Trumph Computers.",
        "We sell quality computers & accessories.",
        "CCTV installation and networking services.",
        "Fast, reliable, affordable tech solutions."
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: "|"
    });
  });
  
  // Smooth scroll for navigation links (native supported with scroll-behavior smooth in CSS)
  // Additional small interactive animations or enhancements:

  // Subtle pulse animation on best seller/new/hot ribbons
  document.querySelectorAll('.ribbon').forEach(ribbon => {
    ribbon.animate([
      { transform: 'rotate(-15deg) scale(1)' },
      { transform: 'rotate(-15deg) scale(1.1)' },
      { transform: 'rotate(-15deg) scale(1)' }
    ], {
      duration: 2000 + Math.random() * 1000,
      iterations: Infinity
    });
  });

  // Accessibility: keyboard focus visible enhancements
  document.body.addEventListener('keydown', e => {
    if(e.key === "Tab") {
      document.body.classList.add('user-is-tabbing');
    }
  });
  document.body.addEventListener('mousedown', e => {
    document.body.classList.remove('user-is-tabbing');
  });
