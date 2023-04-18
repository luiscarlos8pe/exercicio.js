const escola = 'luis';

console.log(escola.charAt(2));// mostra a posição do caracter numero 2
console.log(escola.charAt(8));// não dar erro, apenas motrar o valor vazio , quando escolhemos uma posição que nao existe
console.log(escola.charCodeAt(2));// pega o valor do caracter na posição 2 na tabela asc ou unicode
console.log(escola.indexOf(2));
console.log(escola.substr(2)); //imprimi a partir do caracter na posição 2
console.log(escola.substr(0,2));// ele mostra do 0 ate o numero 1, ou seja, ele imprimi ate a posição 2 sem incluir a posição 2
console.log('Escola ' .concat(escola).concat("!"));// concatena os valores
console.log('Escola ' + escola + "!");// concatena os valores
console.log(escola.replace("i", "D"));// faz a substituição dos valores
console.log(escola.replace(/\w/g, "D"));// substitui todos os caracteres por D
console.log('ana,maria,pedro'.split(','))// pega a virgula e transforma em separador e cria um array