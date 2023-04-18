const imprimiResultado = function (nota) {
    switch(Math.floor(nota)){
        case 10:
        case 9:
            console.log("Quadro de honra");
            break
            case 8: case 7:       
                    console.log("Quadro de honra");
                    break
                    case 4: case 5: case 6:       
                        console.log("Recuperação");
                    break
                    case 0: case 1: case 2: case 3:        
                    console.log("Reprovado");
                break
                default:
                    console.log("opcao nao existe")
            
            
            
    }
}

imprimiResultado(10)
imprimiResultado(6)
imprimiResultado(3)