// função que pega o salário do mês e calcula o custo hora:
function ganhoPorHora(salario, horasTrabalhadasNoMes){
    const salarioHora = (salario / horasTrabalhadasNoMes);

    return (salarioHora);
}

console.log("O Valor da hora paga é R$ ", ganhoPorHora(3000, 176));

console.log("=============================================");

function ganhoPorHora2(salario, horasTrabalhadasNoMes){
    const salarioHora2 = (salario / horasTrabalhadasNoMes);

    return Math.round(salarioHora2);
}

console.log("O Valor da hora paga é R$ ", ganhoPorHora2(3000, 176));

console.log("=============================================");

// Duas casas decimais para sempre para cima
function ganhoPorHora3(salario, horasTrabalhadasNoMes){
    const salarioHora3 = (salario / horasTrabalhadasNoMes);

    const total = salarioHora3.toFixed(2);

    return total;
}

console.log("O Valor da hora paga é R$ ", ganhoPorHora3(3000, 176));

// Formatando o resultado para Real
console.log("=============================================");

function ganhoPorHora4(salario, horasTrabalhadasNoMes){
    const salarioHora4 = (salario / horasTrabalhadasNoMes);

    const formatado = salarioHora4.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});

    return formatado;
}

console.log("O Valor da hora paga é ", ganhoPorHora4(3000, 176));

console.log("=============================================");








