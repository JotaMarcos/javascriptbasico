// Array de números em JavaScript
var lista = [10, 1, 5, 9, 8, 12,15];

console.log(lista.sort());
// função sort() usa por padrão a ordenação alfabética baseada na tabela Unicode.

console.log("============================================");


// Então como ordenar? Vamos criar uma função de comparação
function comparaNumeros(a, b){
    if(a == b){
        return 0;
    }
    if(a < b){
        return -1;
    }
    if(a > b){
        return 1;
    }
}

console.log(lista.sort(comparaNumeros));
// [1, 5, 8, 9, 10, 12, 15]

console.log("============================================");

// Simplificando a função
console.log(lista.sort((a, b) => a - b));
// [1, 5, 8, 9, 10, 12, 15]




