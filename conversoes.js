// tipo de dados
// booleanos

// Conversão implícita
// const numero = 456;
// const numeroString = "456";


// console.log(numero === numeroString);
// console.log(numero == numeroString);
// console.log(numero + numeroString);


// Conversão explícita

// Number
// String

// const numero = 456;
// const numeroString = "456a";

// // O Number converte a String em um número
// console.log(numero + Number(numeroString));

// // A String converte um número em uma String
// console.log(String(numero) + numeroString)

// Praticando ...

// Outras conversões de String()
let telefone = 12341234;
console.log("O telefone é " + String(telefone)); 
// teremos a conversão do número 12341234 para uma string “12341234” 
// e assim poderemos fazer a concatenação entre as strings

let telefone2 = 12341234;
console.log("O telefone é " + telefone2.toString()); 
// o .toString() é uma outra forma para  fazer essa conversão, 
// que é mais parecida com outras linguagens de programação.

let usuarioConectado = false;
console.log(String(usuarioConectado)); 
// teremos a conversão da booleana para string, nesse caso teremos 
// uma string “false”.
usuarioConectado = true;
console.log(String(usuarioConectado)); 
// agora teremos uma string “true”.

// Outras conversões de Number()
// Vamos calcular a área de um retângulo
let largura = "10";
let altura = "5";
console.log(Number(largura) * Number(altura)); 
// teremos a conversão de String para números, possibilitando 
// a realização da da multiplicação

let largura2 = "10";
let altura2 = "5";
console.log( + largura2 * + altura2); 
// teremos a conversão de String para números realizado usando 
// o + antes das variáveis

let meuNome = "leonardo";
console.log(Number(meuNome)); 
// como a variável meuNome não contém apenas números ele retorna 
// o erro NaN (Not a Number, não é número);
console.log( + meuNome); 
// a conversão também retornará NaN


let usuarioConectado2 = false;
console.log(Number(usuarioConectado2)); 
// teremos a conversão da booleana para número, sendo que false (falso) 
// retorna o número 0.
let usuarioConectado3 = true;
console.log(Number(usuarioConectado3)); 
// agora teremos a conversão de true (verdadeiro) para o número 1.


let cpfUsuario = "12312312312";

// Palavras reservadas não podem ser utilizadas como nome de variáveis
// let var = 0;
// let if = 0;
// let const = "Alura";

/*
    ============================= Palavras Reservadas =============================
    arguments
as
async
await
break
case
catch
class
const
continue
debugger
default
delete
do
else
eval
export
extends
false
finally
for
from
function
get
if
import
in
instanceof
let
of
new
null
return
set
static
super
switch
target
this
throw
true
try
typeof
var
void
while
with
yield

*/

/** 
 *  Como as linguagens estão em constante desenvolvimento, 
 * o JavaScript também restringe o uso de mais algumas palavras 
 * que podem ser utilizadas nas próximas versões:
    enum
    implements
    interface
    package
    private
    protected
    public
*/


var respostaDeTudo = 42
let idade = 29
const pi = 3.14

{
    var respostaDeTudo = 3.14
    let idade = 42
    const pi = 29
    console.log(respostaDeTudo, idade, pi)

}
console.log(respostaDeTudo, idade, pi)

/**
 * Variáveis declaradas com var ou let podem ser reatribuídas. 
 * Porém, uma variável declarada com let só pode ser usada no 
 * mesmo escopo em que está definida. No caso da declaração const, 
 * significa que a variável sempre terá uma referência ao mesmo 
 * objeto ou valor primitivo, porque essa referência não pode ser 
 * alterada. A referência em si é imutável, mas o valor mantido pela 
 * variável não se torna imutável.
 */



 let minhaLet;
 console.log(minhaLet); //undefined
 
 // atribuindo um valor com TIPO DE DADO STRING
 minhaLet = "eu sou um texto";
 console.log(minhaLet); // "eu sou um texto"
 
 // reatribuindo, desta vez com dado do TIPO NUMBER
 minhaLet = 100;
 console.log(minhaLet); //100











