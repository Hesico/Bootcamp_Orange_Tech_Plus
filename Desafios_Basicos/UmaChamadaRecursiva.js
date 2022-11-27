// Descrição
// Neste desafio, receba um número inteiro N, calcule e imprima o somatório de todos os números de N até 0.   

// Entrada
// A Entrada será composta por um número inteiro, N. 

// Saída
// Será  impresso o somatório de N até 0, como no exemplo a baixo: 

// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let n = parseInt(gets());
print(somatorio(n))

function somatorio(n){
  let total = 0;
  for(let i = n; i>=0; i--){
    total += i;
  }
  return total;
}