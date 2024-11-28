//@ts-check
var estoque =[];

/**
* Descrição.
*
* @param {string[]} estoque array que contem os estoques
*
* @returns {string} retorna string contendo a quantidade de elementos do array
*/
var gerenciarEstoque =() =>{
    estoque=['Lápis','Folha A4','Borracha','Régua'];
    console.log(estoque);
    estoque[1]='Mouse pad';
    console.log(estoque);
    return `Quantidade de elementos no estoque: ${estoque.length}`;
}

console.log(gerenciarEstoque());