// Desafio
// Seu Raimundo tem uma lista de números. Porém, ele gosta muito das coisas em ordem e deseja que você o ajude a construir um programa que pegue todas as listas dele, uma de cada vez, e coloque os inteiros pares no início e os inteiros ímpares no final.

// Entrada
// A entrada são arrays de tamanho variado que possuem somente números inteiros.

// Saída
// A saída deverá retornar todos os valores pares para o começo do array, seguido pelos ímpares, conforme exemplo abaixo:

let arr = gets().split(''); 
let arrayVazio = [];

arr.forEach(e => e % 2 == 0 ? arrayVazio.unshift(e) : arrayVazio.push(e));

console.log(arrayVazio.join(","));