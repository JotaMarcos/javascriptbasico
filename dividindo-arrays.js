const nomes = [
    'João', 'Julian', 'Ana', 
    'Caio', 'Lara', 'Marjorie', 'Guilherme', 
    'Aline', 'Fabiana','Andre', 'Carlos', 
    'Paulo', 'Bia', 'Vivian', 'Isabela', 
    'Vinícius', 'Renan', 'Renata', 'Daisy', 
    'Camilo'
];

console.log("Tamanho do Array: ", nomes.length);
console.log();
const sala1 = nomes.slice(0, nomes.length/2);
const sala2 = nomes.slice(nomes.length/2);

console.log("=====================================================================================================================");
console.log(`Alunos da sala 1:  ${sala1}`);
console.log("=====================================================================================================================");
console.log(`Alunos da sala 2:  ${sala2}`);

console.log();
console.log("#####################################################################################################################");
console.log(`################################################# CESTA DE COMPRAS ##################################################`);
console.log("#####################################################################################################################");
console.log();

const frutas = [
    'Abacate', 'Manga', 'Tucumã', 'Jinipapo', 
    'Cajá', 'Taperebá', 'Buriti', 'Castanha',
    'Graviola', 'Cupuaçu', 'Bacuri', 'Biribá'
];

console.log(`Total de Frutas: ${frutas.length}`);
console.log("=====================================================================================================================");

const cesta1 = frutas.slice(0, frutas.length/2);

const cesta2 = frutas.slice(frutas.slice(frutas.length/2));

console.log(`Cesta de Compras 1: ${cesta1}`);
console.log("=====================================================================================================================");
console.log();
console.log(`Cesta de Compras 2: ${cesta2}`);
console.log("#####################################################################################################################");


