const valores = [7.7,8.9,6.3,9.2] //criando array
console.log(valores[0],valores[3]);// imprimindo valores do array 
console.log(valores[4]);// imprimindo valor vazio do arrai = undefined
console.log(valores[4] = 10); // atribuindo valor a um array

console.log(valores.length);// pega o tamanho do array

valores.push({id:3},true,false,null,'teste')// adiciona valores no  array
console.log(valores)
console.log(valores.pop());// exclui o ultimo elemento do array
console.log(valores)
console.log(typeof valores)
delete valores[0]
console.log(valores)