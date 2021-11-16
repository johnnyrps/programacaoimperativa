// let nome = ["Johnny", "Pecego", "Débora", "Mariana"];

// let primeiroValor = nome.shift(); // .shift() elimina da array o primeiro valor e me retorna o primeiro valor eliminado do array, e ele não recebe parâmetro
// console.log(nome);
// console.log(primeiroValor);

// //.push() - Adiciona um ou mais elementos ao final do array - recebe um ou mais elementos como parâmetros - retorna o novo comprimento do array

// Arrays

// Como podemos agrupar muitas informações em uma única variável? 

// Para isso, temos um tipo de dado um pouco mais estruturado, denominado array, que armazena uma coleção de elementos, de modo que cada um deles pode ser identificado por um índice ou uma chave.

// Esta estrutura também é conhecida como variável indexada, vetor (unidimensional) ou matriz (no caso de ser multidimensional).

// -------
// Métodos de Arrays


// Agora que entendemos sobre arrays, vamos conhecer algumas funções que podemos utilizar com eles.

// Com elas (funções), podemos interagir com os arrays, modificando seus valores e obtendo informações relacionadas a eles.

// As funções que veremos serão: Push, Pop, Shift, Unshift, Join, IndexOf, LastIndexOf, Includes.
//-------

//Exercício lista de compras

//Objetivo
//Entender e aplicar as funções auxiliares relacionadas ao array.

// Crie um array que contenha nomes de produtos para compra. 

// Após isso, exiba no console os resultados das funções relacionadas aos arrays, que são: Join, Pop, Push, Shift e Unshift. 

// Também se deve escrever com suas palavras, o que cada função realiza. Seguem abaixo alguns exemplos.

// console.log(“O método Join realiza tal coisa”)
// console.log(RESULTADO_DO_JOIN)



let produtoCompras = ["Beleza", "Limpeza", "Frutas", "Verduras", "Carnes"];

// let juntaElemetos = produtoCompras.join("-")
// console.log("O método Join junta os elementos de um array usando um separador que especificamos caso não especificarmos ele vai usar vírgulas");
// console.log(produtoCompras);
// console.log(juntaElemetos);



// let eliminaUltimo = produtoCompras.pop()
// console.log("Elimina o último elemento de um array e retorna o elemento eliminado");
// console.log(produtoCompras);
// console.log(eliminaUltimo);

// let empurraUltimo = produtoCompras.push("Legumes")
// console.log("O Método Push adiciona um ou mais elementos ao final do array");
// console.log(empurraUltimo);
// console.log(produtoCompras);


// let eliminaPrimeiro = produtoCompras.shift("Legumes")
// console.log("O Método Shift elimina o primeiro elemento de um array");
// console.log(eliminaPrimeiro);
// console.log(produtoCompras);

// let adicionaElementos = produtoCompras.unshift("Legumes","Bebidas")
// console.log("O Método Unshift adiciona um ou mais elementos ao início de um array");
// console.log(adicionaElementos);
// console.log(produtoCompras);

//------Mesa 10-------

//O que esses códigos retornam?
// let numbers =[22, 33, 54, 66, 72]
// let numbers1 =[45, 46, 47, 48, 49]
// console.log(numbers[numbers.length])

// let grupoDeAmigos = [ ["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk", "Ironman"], ["Penélope Glamour", "Pierre Nodoyuna","Patán"] ]
// console.log(grupoDeAmigos[1][0])

// let str = "uma string qualquer”
// let grupoDeAmigos = [ [45, 89, 0], ["Digital", "House", true], ["string", "123","false", 54, true, str] ]
// console.log(grupoDeAmigos[2][grupoDeAmigos[2].length - 1])


//Array Invertido
// function invertido(){
//     let numbersinvert = numbers.slice(0).reverse();
// };
// console.log("O método reverse inverte os itens de um array. O Primeiro elemento do array se torna o último e o último torna-se o primeiro");
// console.log(invertido(numbers1));

// function imprimirInverso(){
//     let meuArray = [1, 2, 5, 7, 9, 4];
//     let meuArrayInvertido = meuArray.slice(0).reverse();
//     console.log(meuArray);
//     return meuArrayInvertido
    
// };

function inverter(num){
    let ret = new Array ;
    for(let i = num.length-1; i >= 0; i--) {
        ret.push(num[i]);
    }
   return ret;
}
let original = [1, 2, 3, 4, 5]
let originals = [6, 7, 8, 9, 10]

console.log(inverter(originals));