
function tratarErro(error){
    throw new Error("...")
}

function imprimirNomeGritado(obj){
    try {
        console.log(obj.nme.toUpperCase() + '!!!')
    } catch (error) {
        tratarErro(error)
    }finally{
        console.log("final")
    }
    
}


const obj = {
    nome: "Roberto"
}
console.log(imprimirNomeGritado(obj))