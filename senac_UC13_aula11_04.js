/**
 * Exibe cada palavra de um array em ordem reversa.
 *
 * Esta função itera sobre um array de palavras, inverte cada palavra e 
 * imprime o resultado no console.
 *
 * @param {string[]} palavras - Um array de strings representando as palavras.
 */
function exibirPalavrasReverso(palavras) {
    for (let i = palavras.length - 1; i >= 0; i--) {
      const palavraInvertida = palavras[i].split('').reverse().join('');
      console.log(palavraInvertida);
    }
  }
  
  // Exemplo de uso:
  exibirPalavrasReverso(["café", "livro", "código", "javascript", "aprendizado"]);