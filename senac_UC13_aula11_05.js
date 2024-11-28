
/**
 * Implementa um jogo de adivinhação de números.
 *
 * O usuário tenta adivinhar um número aleatório entre 1 e 10. O jogo continua até
 * que o usuário acerte ou digite "sair".
 *
 * @returns {void}
 */
function jogoAdivinhacao() {
    const numeroSecreto = Math.floor(Math.random() * 10) + 1;
    let chute;
  
    while (true) {
      chute = prompt("Adivinhe um número entre 1 e 10 (ou digite 'sair' para sair):");
  
      if (chute.toLowerCase() === 'sair') {
        console.log("Você desistiu do jogo.");
        break;
      }
  
      const numeroChutado = Number(chute);
  
      if (isNaN(numeroChutado)) {
        console.log("Digite um número válido ou 'sair'.");
      } else if (numeroChutado === numeroSecreto) {
        console.log("Parabéns! Você acertou!");
        break;
      } else {
        console.log("Tente novamente.");
      }
    }
  }
  
  jogoAdivinhacao();