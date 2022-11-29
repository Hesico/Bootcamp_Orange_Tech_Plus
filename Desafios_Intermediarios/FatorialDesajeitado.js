// Desafio
// O fatorial de um número inteiro positivo N é o produto de todos os inteiros positivos menores ou iguais a n. 
// Fazemos um fatorial desajeitado usando os inteiros em ordem decrescente, 
// trocando as operações de multiplicação por uma rotação fixa de operações cuja ordem é:
// multiplicar '*', dividir '/', adicionar '+' e subtrair '-'. 
// Por exemplo, desajeitado(10) = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1.
// Lembre - se que no fatorial desajeitado as operações ainda são aplicadas usando a ordem usual de operações aritméticas. 
// Além disso, a divisão neste caso sempre resulta em um número inteiro, por exemplo, 90 / 8 = 11.
// Dado um inteiro N, retorne o fatorial desajeitado de n.

// Entrada
// A entrada consiste em um valor inteiro positivo N.

// Saída
// A saída consiste em retornar o valor do seu fatorial desajeitado de N, conforme exemplo abaixo.

// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário; 
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente. 

let lines = gets().split("\n"); 
let n = parseInt(lines.shift()); 

if (n <= 2) print(n);

let arr = [];

for (i = n ; i >= 1 ; i--){
  arr.push(i);
}

let total = Math.floor(arr.shift() * arr.shift() / arr.shift()) + arr.shift();

let arrays = [];
while(arr.length > 0){
  arrays.push(arr.splice(0,Math.min(4, arr.length)))
}

const calcula = (array) => {
 let num = array[0];
 if(array[1]) num *= array[1];
 if(array[2]) num /= array[2];

 let plus = array[3] || 0;
 return plus - Math.floor(num);
} 

arrays.forEach(e => total += calcula(e))
console.log(total) 