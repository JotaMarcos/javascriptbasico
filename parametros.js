// Parâmetros de função
// function soma(numero1, numero2){
//     return numero1 + numero2;
// }

// console.log(soma(2, 2));
// console.log(soma(245, 20));
// console.log(soma(-500, 60));

// Parâmetros x Argumentos

// Ordem dos parâmetros
// function nomeIdade(nome, idade){
//     return `Meu nome é ${nome} e minha idade é ${idade} anos.`
// }

// // Atenção com a ordem dos parâmetros passados
// // console.log(nomeIdade(37, "João Marcos"));
// console.log(nomeIdade("João Marcos", 37));

function soma(numero1, numero2){
    return numero1 + numero2;
}


function multiplica(numero1 = 1, numero2 = 1){
    return numero1 * numero2;
}
                            //9         //6
console.log(multiplica(soma(4, 5)));

console.log("=====================================");

function cumprimentaPessoa(pessoa){
    console.log(`oi, ${pessoa}!`)
   }
   
   cumprimentaPessoa('Helena')


   console.log("=====================================");
   function cumprimentar(){
    return 'Oi gente!'
   }
   
   function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
   }
   
   cumprimentaPessoa('Paula') // “Oi gente! Meu nome é Paula”
   
   console.log("=====================================");

   function operacaoMatematica(numero1, numero2, numero3) {
    return numero1 + numero2 + numero3
   }
   
   operacaoMatematica(15, 30, 45) // 90;
   console.log("=====================================");
   function comParametro(param) {
        console.log(param)
    }
    
    comParametro()



