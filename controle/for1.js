const nota = [6.7, 7.4, 9.8, 8.1, 7.7]

for(let i in nota){
    console.log(i ,'=', nota[i])
}

const pessoa ={
    nome: "ana",
    sobrenome: "maria",
    idade: 24,
    peso: 78
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}