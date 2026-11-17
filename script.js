// === Tab Switching ===
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-tab');

        tabButtons.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));

        btn.classList.add('active');
        document.getElementById(targetTab).classList.add('active');
    });
});

// === 💕 Floating Hearts Generator ===
const heartsContainer = document.querySelector('.hearts-container');

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    const size = Math.random() * 20 + 12;
    const leftPos = Math.random() * 92 + 4;
    const duration = Math.random() * 3 + 5;
    const colors = ['#ffd000', '#e6a800', '#ffeb99', '#ffc107', '#ffd700'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    heart.innerHTML = '❤️';
    heart.style.left = `${leftPos}%`;
    heart.style.fontSize = `${size}px`;
    heart.style.color = color;
    heart.style.animationDuration = `${duration}s`;
    
    heartsContainer.appendChild(heart);
    
    setTimeout(() => heart.remove(), duration * 1000);
}

setInterval(createHeart, 700);