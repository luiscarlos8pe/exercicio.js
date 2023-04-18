const pessoa={
    nome: 'ana',
    idade: 5,
    endereco:{
        rua: '24 de marco',
        numero: 25
    }
}

const {nome: n, idade:i}=pessoa
console.log(n,i)

const {sobrenome, bemhumorada = true}=pessoa // quando o valor nao existe no objeto 
console.log(sobrenome,bemhumorada)

const {endereco:{rua, numero}} = pessoa
console.log(rua,numero)