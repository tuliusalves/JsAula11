# JsAula11
<h3>Exercício 01</h3>
<p>Crie um script que gerencie uma lista de tarefas. O script deve:
Criar um array vazio chamado tarefas.
Adicionar três tarefas usando o método .push().
Remover a última tarefa adicionada usando .pop().
Exibir o array final no console.</p>
<h4>Resolução</h4>
<p>Inicialização do Array:

var tarefas = [];: Cria um array vazio para armazenar as tarefas.
Atribuição de Tarefas Iniciais:

tarefas = ['Fazer café da manhã', 'tomar banho', 'comer café da manhã'];: Adiciona as três primeiras tarefas ao array.
Adição de Novas Tarefas:

tarefas.push('Escovar os dentes');: Adiciona a tarefa "Escovar os dentes" ao final do array.
tarefas.push('Botar roupas para lavar');: Adiciona a tarefa "Botar roupas para lavar" ao final do array.
tarefas.push('estender roupas');: Adiciona a tarefa "estender roupas" ao final do array.
Impressão do Array Completo:

console.log(tarefas);: Imprime no console todas as tarefas do array, incluindo as adicionadas anteriormente.
Remoção da Última Tarefa:

tarefas.pop();: Remove e retorna o último elemento do array (a tarefa "estender roupas").
Impressão do Array Atualizado:

console.log(tarefas);: Imprime novamente o array, agora com a última tarefa removida.</p>

<h3>Exercício 02</h3>
<p>Crie um script que gerencie um estoque. O script deve:
Criar um array estoque com 4 itens iniciais.
Atualizar o segundo item no array.
Exibir o número total de itens no estoque usando .length.</p>

<h4>Resolução</h4>
<p>
Declaração do Array:var estoque = [];: Cria um array vazio para armazenar os itens do estoque.
Função gerenciarEstoque:

Inicialização do Estoque:
estoque=['Lápis','Folha A4','Borracha','Régua'];: Adiciona os primeiros itens ao estoque.
Primeira Impressão:
console.log(estoque);: Imprime no console o estado inicial do estoque, mostrando os itens adicionados.
Alteração de um Item:
estoque[1]='Mouse pad';: Substitui o segundo item do estoque (índice 1) por "Mouse pad".
Segunda Impressão:
console.log(estoque);: Imprime novamente o estoque, agora com a alteração feita.
Retorno da Quantidade:
returnQuantidade de elementos no estoque: ${estoque.length};: Retorna uma string informando a quantidade de elementos (itens) atualmente no estoque.
Chamada da Função:
console.log(gerenciarEstoque());: Chama a função gerenciarEstoque e imprime o valor retornado, ou seja, a quantidade de itens no estoque.</p>

<h3>Exercício 03</h3>
<p>Crie um script que armazene as notas de três alunos em um array aninhado. O script deve:
Criar um array alunos onde cada elemento é um array contendo as notas de um aluno.
Usar um loop aninhado para calcular a média das notas de cada aluno.
Exibir o nome de cada aluno e sua respectiva média.</p>
<h4>Resolução</h4>
<p>
A função calcularMediaAlunos é devidamente documentada com JSDoc, explicando seu propósito, os parâmetros e o tipo de retorno.
O parâmetro alunos é um array de arrays, onde cada subarray representa um aluno e contém seu nome (string) e suas notas (números).<br>
Array de Alunos:
Um array chamado alunos é criado, contendo três elementos. Cada elemento é um array que representa um aluno, com o nome na primeira posição e as notas nas posições seguintes.
Loop Externo:
O primeiro loop for itera sobre cada aluno no array alunos.
A cada iteração, o aluno atual é armazenado na variável aluno.
Extração do Nome:
O nome do aluno é extraído do primeiro elemento do array aluno e armazenado na variável nome.
Cálculo da Soma das Notas:
O segundo loop for itera sobre as notas do aluno, começando do índice 1 (pois o índice 0 contém o nome).
A cada iteração, a nota atual é adicionada à variável soma.
Cálculo da Média:
A média é calculada dividindo a soma das notas pelo número de notas (que é igual ao comprimento do array aluno menos 1, pois o primeiro elemento é o nome).
O resultado é armazenado na variável media.
Impressão do Resultado:
A média calculada é impressa no console, juntamente com o nome do aluno.</p>

<h3>Exercício 04</h3>
<p>Crie um script que leia um array de palavras e exiba cada palavra no console em ordem reversa. O script deve:
Criar um array palavras com pelo menos 5 palavras.
Usar um loop for reverso para exibir cada palavra no console.</p>
<h4>Resolução</h4>
<p>
A função exibirPalavrasReverso é devidamente documentada com JSDoc, explicando seu propósito, o parâmetro e o tipo de retorno (implícito, pois a função não retorna nenhum valor).
Loop for:

O loop for itera sobre o array de palavras, mas de trás para frente.
Inicialização: i = palavras.length - 1: O contador i é inicializado com o índice do último elemento do array.
Condição: i >= 0: O loop continua enquanto o índice i for maior ou igual a 0.
Incremento: i--: O contador i é decrementado a cada iteração.
Inversão da Palavra:
palavras[i].split(''): Divide a palavra atual em um array de caracteres individuais.
.reverse(): Inverte a ordem dos caracteres no array.
.join(''): Junta os caracteres novamente em uma única string, formando a palavra invertida.
Impressão:
console.log(palavraInvertida);: Imprime a palavra invertida no console.</p>

<h3>Exercício 05</h3>
<p>Crie um script que peça ao usuário para adivinhar um número entre 1 e 10. O script deve:
Continuar pedindo números até que o usuário acerte. Parar imediatamente se o usuário digitar "sair". Exibir
mensagens para respostas corretas e para o comando "sair".</p>
<h4>Resolução</h4>
<p>Geração do número secreto:

const numeroSecreto = Math.floor(Math.random() * 10) + 1;: Gera um número aleatório entre 1 e 10 e armazena em numeroSecreto.
Loop principal:

while (true): Cria um loop infinito que continuará até que seja explicitamente interrompido.
Pedindo o chute do usuário:

chute = prompt("Adivinhe um número entre 1 e 10 (ou digite 'sair' para sair);
 Solicita ao usuário que digite um número ou a palavra "sair".
Verificando a entrada do usuário:

if (chute.toLowerCase() === 'sair'): Verifica se o usuário digitou "sair" (em qualquer combinação de maiúsculas e minúsculas) para encerrar o jogo.
const numeroChutado = Number(chute);: Converte o chute do usuário para um número.
if (isNaN(numeroChutado)): Verifica se o valor digitado não é um número válido.
else if (numeroChutado === numeroSecreto): Verifica se o número chutado é igual ao número secreto.
else: Se nenhuma das condições anteriores for verdadeira, o usuário deve tentar novamente.
Mensagens para o usuário:

Exibe mensagens informando se o usuário acertou, errou ou digitou um valor inválido.</p>