// Desafio  
// Dado um inteiro n, retorne o menor número de números quadrados perfeitos cuja soma seja n. Um quadrado perfeito é um inteiro que é o quadrado de um inteiro; em outras palavras, é o produto de algum inteiro consigo mesmo. Por exemplo, 1, 4, 9 e 16 são quadrados perfeitos, enquanto 3 e 11 não são. 

// Entrada
// A entrada consiste em um número inteiro n, representando o valor total. 

// Saída
// A saída consiste em retornar o menor número de números quadrados perfeitos. 

// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let lines = gets().split("\n");
let n = parseInt(lines.shift());

let total = getMinimal(n, 0);

console.log(total)

function getMinimal(num, count) {
  let arr = [];

  for (let i = 1; i * i <= num; i++) {
    arr.push(i * i);
  }

  count++;

  if (arr.includes(num)) return count;

  arr = arr.map(e => getMinimal(num - e, count));

  return Math.min(...arr);
}