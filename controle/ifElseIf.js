Number.prototype.enter = function(inicio, fim){
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
    if(nota.enter(9,10)){
        console.log("Quadro de honra")
    }else if(nota.enter(7,8.99)){
        console.log("Aprovado")
    }else if(nota.enter(4,6.99)){
        console.log("Recuperação")
    }else if(nota.enter(0,3.99)){
        console.log("Reprovado")
    }else{
        console.log("Nota invalida")
    }

    console.log("fim")
}

imprimirResultado(10)