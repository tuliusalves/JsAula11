// @ts-check
var tarefas = [];

/**
 * Função gerenciarTarefas irá inicializar os valores do array "tarefas".
 * Depois irár inserir outras três e imprimir. Após isso irá excluir a
 * última tarefa e por fim imprimir as tarefas restantes.
 * 
 * @param {string[]} tarefas array de string contendo as tarefas
 * 
 */
function gerenciarTarefas() {
    tarefas = ['Fazer café da manhã', 'tomar banho', 'comer café da manhã'];
    tarefas.push('Escovar os dentes');
    tarefas.push('Botar roupas para lavar');
    tarefas.push('estender roupas');

    console.log(tarefas);
    tarefas.pop();

    console.log(tarefas);
}

gerenciarTarefas();