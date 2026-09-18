// Retro Terminal Typing Effect
document.addEventListener('DOMContentLoaded', () => {
  const tagline = document.querySelector('.hero-text .tagline');
  if (tagline) {
    const originalText = tagline.textContent;
    tagline.textContent = '>';
    let index = 0;

    function typeEffect() {
      if (index < originalText.length) {
        tagline.textContent += originalText.charAt(index);
        index++;
        setTimeout(typeEffect, 40);
      }
    }
    typeEffect();
  }
});