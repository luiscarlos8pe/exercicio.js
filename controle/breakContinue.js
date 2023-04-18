const nota = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for( let i in nota){
    if(i == 5){
        break
    }
        console.log(`${i} = ${nota[i]}`)  
}

console.log("-----______")

for( let i in nota){
    if(i == 5){
        continue
    }
        console.log(`${i} = ${nota[i]}`)  
}