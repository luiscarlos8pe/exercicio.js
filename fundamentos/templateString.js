const nome = "rebeca";
const concatenacao = "ola " + nome + "!";

console.log(concatenacao)

const template = `
        ola
        ${nome}
`
console.log(concatenacao, template)

// expressoes 
console.log(`1 + 1 = ${1 + 1}`);

const up = texto => texto.toUpperCase();
console.log(`Ei.. ${up("cuidado")}!`);