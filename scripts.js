function showConfetti() {
  const envelope = document.querySelector('.flying-envelope');
  for (let i = 0; i < 40; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = (Math.random() * 180 + 10) + 'px';
    confetti.style.background = `hsl(${Math.random()*360}, 80%, 60%)`;
    confetti.style.animationDelay = (Math.random() * 0.8) + 's';
    envelope.appendChild(confetti);
    setTimeout(() => confetti.remove(), 2000);
  }
}

document.getElementById('unlock-btn').addEventListener('click', function() {
  const password = document.getElementById('password').value.trim().toLowerCase();
  const message = document.getElementById('secret-message');
  const box = document.querySelector('.password-box');
  if (password === 'luanita') {
    message.classList.remove('hidden');
    message.innerHTML = `
      <span style="font-size:2.5rem;">❤️</span><br>
      <span style="color:#ffd700; font-size:1.5rem; text-shadow:0 0 16px rgba(255,215,0,0.8);">¡Cuanto más tiempo estoy contigo más te amo, Luana!</span><br><br>
      <span style="font-size:1.1rem; font-weight:normal; color:#fff; text-shadow: 0 0 8px rgba(255,255,255,0.3);">Sé que a veces cometo errores, pero cada día trato de mejorar para ti y para nosotros. Gracias por tu paciencia, tu amor y por estar a mi lado. Eres mi mayor inspiración y mi felicidad. ¡Te amo con todo mi corazón! 💖</span>
    `;
    document.getElementById('password').style.display = 'none';
    document.getElementById('unlock-btn').style.display = 'none';
    document.querySelector('.password-box label').style.display = 'none';
    showConfetti();
  } else {
    message.classList.remove('hidden');
    message.style.color = '#ff4444';
    message.style.borderColor = '#ff0000';
    message.style.fontSize = '1.1rem';
    message.textContent = '❌ Contraseña incorrecta. Intenta de nuevo.';
  }
});

document.getElementById('password').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    document.getElementById('unlock-btn').click();
  }
});
