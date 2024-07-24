// Include the Confetti.js library
const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js';
document.head.appendChild(script);

// Trigger confetti on page load
script.onload = function() {
  confetti({
    particleCount: 100,
    spread: 160,
    origin: { y: 0.6 }
  });
};