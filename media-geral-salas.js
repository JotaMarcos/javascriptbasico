const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function mediaSala(notasDaSala){
    const somaDasNotas = notasDaSala.reduce((acum, 
        atual) => atual + acum, 0);
    return somaDasNotas/notasDaSala.length;
}

console.log(`Média da Sala de JavaScript: ${mediaSala(salaJS)}`);
console.log(`Média da Sala de Java: ${mediaSala(salaJava)}`);
console.log(`Média da Sala de Python: ${mediaSala(salaPython)}`);


console.log();

const notas = [10, 6.5, 8, 7];
const media = notas.reduce((acum, atual) => atual + acum, 0) / notas.length;
console.log("A média é: " + media);

console.log();

const numeros = [43, 50, 65, 12];
// const soma = numeros.reduce((acum, atual) => atual + acum, 0);
// console.log("O valor da soma é: " + soma); //170

console.log();
function operacaoNumerica(acum, atual) {
    return atual + acum;
   }   
const soma = numeros.reduce(operacaoNumerica, 0);

console.log("O valor da soma é: " + soma);

