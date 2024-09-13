// Função para calcular o tempo juntos
function calculateTimeTogether() {
    const startDate = new Date('2024-05-29'); // Data do início do namoro
    const now = new Date();
    const diff = now - startDate;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);
  
    const timeTogether = document.getElementById('time-together');
    if (years > 0) {
      timeTogether.textContent = `${years} anos, ${months % 12} meses e ${days % 30} dias juntos`;
    } else if (months > 0) {
      timeTogether.textContent = `${months} meses e ${days % 30} dias juntos`;
    } else {
      timeTogether.textContent = `${days} dias juntos`;
    }
  }
  
  // Atualiza o tempo na página
  calculateTimeTogether();
  setInterval(calculateTimeTogether, 1000 * 60 * 60); // Atualiza a cada hora
  