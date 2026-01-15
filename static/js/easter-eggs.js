// Konami Code: ↑↑↓↓←→←→BA
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
  if (e.code === konamiCode[konamiIndex]) {
    konamiIndex++;
    if (konamiIndex === konamiCode.length) {
      activateEasterEgg();
      konamiIndex = 0;
    }
  } else {
    konamiIndex = 0;
  }
});

function activateEasterEgg() {
  // Flash the screen with neon colors
  const flash = document.createElement('div');
  flash.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #ff2a6d, #05d9e8, #d300c5);
    opacity: 0;
    pointer-events: none;
    z-index: 9999;
    transition: opacity 0.1s;
  `;
  document.body.appendChild(flash);
  
  // Flash sequence
  setTimeout(() => flash.style.opacity = '0.8', 0);
  setTimeout(() => flash.style.opacity = '0', 150);
  setTimeout(() => flash.style.opacity = '0.6', 300);
  setTimeout(() => flash.style.opacity = '0', 450);
  setTimeout(() => {
    flash.remove();
    alert('🎮 +30 Lives! You found the secret!');
  }, 500);
}
