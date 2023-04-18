console.log(Math.ceil(6,1))

const obj1 = {}
obj1.nome="Lucas"
//obj1["nome"]="Andre" tambem atribui nome

function obj(nome){
    this.nome = nome;
    this.exec = function(){
        console.log("exec...")
    }
}
const obj2 = new obj("Lucas");
console.log(obj2.nome)

const obj3 = new obj("Pedro");
console.log(obj3.nome)
obj3.exec()