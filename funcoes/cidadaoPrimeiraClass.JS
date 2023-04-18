
// criar de forma literal
function fun1(){}

// criando uma constante
const fun2 = function(){}


// armazenar dentro de um array
const array = [function func(a,b){return a + b}, fun1, fun2]
console.log(array[0](2,5))

// aemazenando um obj
const obj = {}
obj.falar = function () {return 'OPA'}
console.log(obj.falar())


//pássando funcao como parametro 
function run(fun){
    fun()
}
run(function(){console.log('Executando')})

// uma funcao pode retornar ou conter outra funcao 
function soma(a ,b){
    return function(c){
        console.log(a + b + c)
    }
}
soma(2,3)(5)