// função sem retorno
function imprimirSoma(a , b){
    console.log(a + b)
}

imprimirSoma(2,3);// imprimi a soma
imprimirSoma(2);// imprimi NaN NOT A NUMBER
imprimirSoma(2,3,4,5,6,7,8);// soma apenas os primeiros 2 numeros


// função com retorno
function soma(a , b= 0){
    return a + b;
}

console.log(soma(2,3));// imprimi a soma

console.log(soma(2));// o segundo parametro esta por default com 0

console.log(soma());// not a number