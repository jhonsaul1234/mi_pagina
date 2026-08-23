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
  if (password === 'ramen') {
    message.classList.remove('hidden');
    message.innerHTML = `
      <span style="font-size:1.6rem;">❤️</span><br>
      <span style="font-size:1rem;">Yeny, tú vales oro.</span><br><br>
      <span style="font-size:0.85rem; font-weight:normal; color:#b71c36;">Sé que eres y serás una persona fuerte, y que a pesar de estar con alguien que quizá no te valore como mereces, yo solo quiero desearte de corazón que seas feliz y que nunca olvides lo mucho que vales. ❤️</span><br><br>
      <span style="font-size:0.85rem; font-weight:normal; color:#b71c36;">Y una cosa más… deja de comer tanto ramen JAJAJA.</span>
    `;
    document.getElementById('password').style.display = 'none';
    document.getElementById('unlock-btn').style.display = 'none';
    document.querySelector('.password-box label').style.display = 'none';
    showConfetti();
  } else {
    message.classList.remove('hidden');
    message.textContent = 'Contraseña incorrecta. Intenta de nuevo.';
  }
});

document.getElementById('password').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    document.getElementById('unlock-btn').click();
  }
});
