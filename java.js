onload = () => {
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
    }, 1000);
};

// Additional floating petals effect
function createFloatingPetals() {
    const petals = ['🌸', '🌺', '🌷', '🌹', '💐', '✨', '🎂'];
    setInterval(() => {
        if (document.body.classList.contains('not-loaded')) return;
        const petal = document.createElement('div');
        petal.className = 'floating-petal';
        petal.innerHTML = petals[Math.floor(Math.random() * petals.length)];
        petal.style.left = Math.random() * 100 + '%';
        petal.style.bottom = '-20px';
        petal.style.fontSize = (Math.random() * 20 + 16) + 'px';
        petal.style.opacity = Math.random() * 0.6 + 0.3;
        petal.style.animationDuration = Math.random() * 5 + 4 + 's';
        petal.style.animationDelay = '0s';
        document.body.appendChild(petal);
        setTimeout(() => petal.remove(), 8000);
    }, 800);
}

// Start petals after load
setTimeout(() => {
    createFloatingPetals();
}, 1500);