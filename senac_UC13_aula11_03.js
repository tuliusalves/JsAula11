
/**
 * Calcula a média das notas de um conjunto de alunos.
 *
 * Esta função itera sobre um array de alunos, onde cada aluno é um array
 * contendo seu nome e suas notas. Para cada aluno, calcula a média das notas
 * e imprime o resultado no console.
 *
 * @param {Array<Array<string, number>>} alunos - Um array de alunos, onde cada
 *   aluno é um array com o nome (string) e as notas (números).
 * @returns {void}
 */
function calcularMediaAlunos() {
    // Array de alunos, onde cada elemento é um array com as notas
    const alunos = [
      ['João', 7, 8, 9],
      ['Maria', 6, 9, 10],
      ['Pedro', 8, 7, 8]
    ];
  
    // Itera sobre cada aluno
    for (let i = 0; i < alunos.length; i++) {
      const aluno = alunos[i];
      const nome = aluno[0];
      let soma = 0;
  
      // Calcula a soma das notas do aluno
      for (let j = 1; j < aluno.length; j++) {
        soma += aluno[j];
      }
  
      // Calcula a média e exibe o resultado
      const media = soma / (aluno.length - 1);
      console.log(`A média do aluno ${nome} é: ${media}`);
    }
  }
  
  calcularMediaAlunos();