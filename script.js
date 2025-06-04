let life = 31;
let xp = 0;
let coins = 0;

const lifeSpan = document.getElementById('life');
const xpSpan = document.getElementById('xp');
const coinSpan = document.getElementById('coins');
const pupil = document.getElementById('pupil');
const eye = document.getElementById('eye');

// Moves eye toward cursor
document.addEventListener('mousemove', (e) => {
  const rect = eye.getBoundingClientRect();
  const dx = e.clientX - (rect.left + rect.width / 2);
  const dy = e.clientY - (rect.top + rect.height / 2);
  const angle = Math.atan2(dy, dx);
  const radius = 10;

  pupil.style.transform = `translate(${Math.cos(angle) * radius}px, ${Math.sin(angle) * radius}px)`;
});

// Play increases XP
function playWithEye() {
  xp += 1;
  coins += Math.floor(Math.random() * 3);
  updateStats();
}

// Mission decreases life but may return more coins
function sendOnMission() {
  if (life <= 0) return;
  life -= 1;
  const loot = Math.floor(Math.random() * 5) + 1;
  xp += 2;
  coins += loot;
  updateStats();
}

// Update the HUD
function updateStats() {
  lifeSpan.textContent = life;
  xpSpan.textContent = xp;
  coinSpan.textContent = coins;
}
