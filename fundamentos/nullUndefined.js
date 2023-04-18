let valor;
console.log(valor) // undefined pois nao atribuir nenhum valor 

valor = null; // foi definido um valor null , so que nao aponta para nenhum endereço de memoria
console.log(valor)
//console.log(valor.toString())// nao e possivel ler propiedade de uma valor null


const produto ={};
produto.nome= null;
console.log(!!produto.nome);