function apresentar(nome){
    return `Meu nome é ${nome}`;
}
console.log(apresentar("João Marcos"));

console.log("=======================");

// Arrow function com um parâmetro
const apresenarArrow = nome => `Meu nome é ${nome}`;
console.log(apresenarArrow("Poliane"));

console.log("=======================");
// Arrow Function com dois parâmetros
const soma = (num1, num2) => num1 + num2;
console.log("O resultado da soma é: " + soma(2, 3));

console.log("=======================");

// Arrow Function com mais de uma linha de instrução

const somaNumerosPequenos = (num1, num2) => {
    if((num1 || num2) > 10){
        return "Somente de números de 1 a 9"
    } else {
        return num1 + num2;
    }
}

console.log("O resultado é: "+ somaNumerosPequenos(1, 5));

console.log("=======================");
const num1 = 5;
const num2 = 5;
const resultado = num1 + num2;
console.log("A soma é: " + resultado);

console.log("=======================");
// Refatorando o código acima:
function soma2(num1, num2) {
    return num1 + num2;
   }
   
   console.log("A soma é: " + soma2(5, 5))



