// estrategia 1 para gerar valor padrao 

function soma1(a, b, c){
    a = a||1
    b = b||1
    c = c||1
    return a + b + c
}

console.log(soma1())// assume o valor de 1
console.log(soma1(), soma1(3))
console.log(soma1(), soma1(3),soma1(1,2,3),soma1(0,0,0,0))


function soma2(a=1, b=2, c=3){
    return a + b + c
}
console.log(soma2(), soma2(3),soma2(1,2,3),soma2(0,0,0,0))