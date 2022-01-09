// Funções de ordem superior
// const usuarioLogin = () => {
//     let array = [];
//     for( i = 0; i < 90000; i++){
//       array.push(i);
//     }
//     return "Usuário logado com sucesso!"
//   }
  
//   const verificaLogin = () => {
//     let array = [];
//     for( i = 0; i < 90000; i++){
//       array.push(i);
//     }
//     return "Verificação realizada com sucesso! Usuário logado com sucesso!"
//   }
  
// console.log(usuarioLogin());
// console.log(verificaLogin());


// Refatorando

// const usuarioLogin = (usuario) => {
//     let array = []
//     for( i = 0; i < 90000; i++){
//       array.push(i);
//     }
//     return `O usuário ${usuario} logou com sucesso no sistema!`
//   }
  
//   console.log(usuarioLogin("Spock"));

// Retornando uma função
// const acesso = (login) => {
//     return `${login} logou com sucesso no sistema!`;
//   }
  
//   const usuarioLogin = (login) => {
//     let array = [];
//     for( i = 0; i < 90000; i++){
//       array.push(i);
//     }
//     return acesso(login);
//   }
  
//   console.log("O usuário " + usuarioLogin("Spock"));

// Recebendo uma função e retornando uma função


// function acesso(login) {
//     return `${login} logou com sucesso no sistema!`

// }
  
//   const usuarioLogin = (login) => {
//     let array = []
//     for( i = 0; i < 90000; i++){
//         array.push(i);
//     }
//     return acesso(login)
//   }
  
//   const direcaoLogin = (login) => {
//     let array = []
//     for( i = 0; i < 900000; i++){
//         array.push(i);
//     }
//     return acesso(login);
//   }
  
//  console.log( "O(A) usuário(a)" + direcaoLogin("Uhura"));


// Refatorar a função login() para receber e retornar funções
const acesso = (nome) => {
    return `O(A) usuário(a) ${nome} logou com sucesso no sistema!`
  }
  
  const autentica = (cargo) => {
    let array = []
    for( i = 0; i < cargo; i++){
      array.push(i)
    }
    return true;
  }
  
  const login = (pessoa, autentica) => {
    if(pessoa.cargo === `funcionario`) {
       autentica(90000)
    } else if(pessoa.cargo === `direcao`) {
       autentica(900000)
    }
   return acesso(pessoa.nome)
  }

  console.log(login({cargo: `diretoria`, nome: `Uhura`}, autentica));








