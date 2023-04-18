function soBoaNoticia(nota){
    if(nota >= 7){
        console.log("Aprovado com " + nota);
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.2)

function seForVerdadeEuFalo(valor){
    if(valor){
        console.log("É verdade... " + valor);
    }
}

seForVerdadeEuFalo()// false valor vazio
seForVerdadeEuFalo(null)// false valor nullo
seForVerdadeEuFalo(false)
seForVerdadeEuFalo("")// false String vazia
seForVerdadeEuFalo(true)
seForVerdadeEuFalo(0) // false valor 0
seForVerdadeEuFalo(" ")
seForVerdadeEuFalo()