// Strings no JavaScript
const texto1 = "Olá, Mundo do Desenvolvimento Back End com JavaScript!!!";
const texto2 = 'Olá, Mundo do Desenvolvimento Web com JavaScript!!!';
// const senha = "SenhaSuperSegura456!"
const StringDeNumeros = "34567";
const citacao = 'O João disse: "Olá!"'

console.log(texto1);
console.log(texto2);
// console.log(senha);
console.log(StringDeNumeros);
console.log(citacao);

// Concatenação (+)
const nome = "João ";
const segundoNome = "Marcos";
const idade = 36;
const frase = "E sou Desenvolvedor Back End \\o/ !!!"

console.log("Olá! Eu sou " + nome + segundoNome 
+ " e tenho " + idade + " anos.");
console.log(frase);

// Transformação/conversão do código Unicode em caractere
const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

// Template string ou Template literal
/* 
    Template Strings são strings que permitem expressões embutidas. 
    Você pode utilizar string multi-linhas e interpolação de string com elas.
*/
// ===================================================================================
/*
    `corpo de texto`

    `texto linha 1
    texto linha 2`

    `texto string ${expression} texto string`

    tag `texto string ${expression} texto string`
*/

// Strings multi-linhas
console.log('texto string linha 1\n' +
'texto string linha 2');
// "texto string linha 1
// texto string linha 2"

console.log(`texto string linha 1
texto string linha 2`);
// "texto string linha 1
//  texto string linha 2"

// Interpolação de Expressões
// Para encapsular expressões dentro 
// de strings, você precisava utilizar a seguinte sintaxe:
var a = 5;
var b = 10;
console.log('Quinze é ' + (a + b) + ' e\nnão ' + (2 * a + b) + '.');
// "Quinze é 15 e
// não 20."

// Com template strings, você pode utilizar as substituições 
// sintáticas tornando o código mais legível:
var a = 5;
var b = 10;
console.log(`Quinze é ${a + b} e
não ${2 * a + b}.`);
// "Quinze é 15 e
// não 20."

// Tagged template strings
// Uma forma mais avançada dos template string são os template 
// strings com marcações ou tags, ou tagged template strings
var a = 5;
var b = 10;

function tag(strings, ...values) {
  console.log(strings[0]); // "Olá,  "
  console.log(strings[1]); // "Mundo Web!"
  console.log(values[0]);  // 15
  console.log(values[1]);  // 50

  return "Bazinga!";
}

tag`Olá, ${ a + b } Mundo Web! ${ a * b}`;
// "Bazinga! huhahuhahuha..."


// Strings Raw

// A propriedade especial raw, disponível no primeiro argumento da função 
// da tagged template string acima, permite o acesso as strings de maneira pura 
// (raw) exatamente como elas foram especificadas:
function tag(strings, ...values) {
    return strings.raw[0];
  }
  
  tag`string text line 1 \n string text line 2`;
  // "string text line 1 \\n string text line 2"

  // Adicionalmente, o método String.raw() permite a criação de strings cruas, 
  // exatamente como as template functions e as concatenações deveram criar.
  String.raw`Hi\n${2+3}!`; // "Hi\\n5!"

const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false

console.log("=======================");


const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true


const senha2 = "minhaSenha123"
console.log(senha2.length) // 13 caracteres







