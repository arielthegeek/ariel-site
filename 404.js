document.addEventListener('DOMContentLoaded', () => {
    const glitchEffect = document.querySelectorAll('.glitch');
    glitchEffect.forEach(el => {
        el.style.animationDelay = Math.random() * 2 + 's';
    });
});