const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const mediaDosAlunos = [10, 8, 7.5, 9];

// includes ->  retorna um booleano
// indexOf -> retorna um índice, no caso retorna o elemento que está no índice 3 que é 'Ana'

let listaDeNotasEAlunos = [alunos, mediaDosAlunos];

const exibeNomeNota = (nomeDoAluno) => {
    if(listaDeNotasEAlunos[0].includes(nomeDoAluno)){
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno);
        return 'Aluno(a): ' + listaDeNotasEAlunos[0][indice] + 
        ', sua média é: ' + listaDeNotasEAlunos[1][indice];
    } else {
        return "Aluno não esta cadastrado"
    }
}

console.log(exibeNomeNota("Juliana"));


