let nMultas = 0
let valorM = []
let pontosM = []
let somaP = 0
let somaM = 0

function multas(){
   nMultas = window.prompt("Digite o números de multas a cadastrar.")
   do{ 
        valorM.push(window.prompt("Qual valor da Multa?"))
        pontosM.push(window.prompt("Quantos pontos foram perdidos?"))  
    }while (valorM.length < Number(nMultas))
   
    for(let i = 0; i < pontosM.length; i++){
        somaP += Number(pontosM[i]) 
    }
    for(let i = 0; i < valorM.length; i++){
        somaM += Number(valorM[i]) 
    }
    
    window.alert(`Com ${somaP} pontos. E pagar $ ${somaM}`)
    if (somaP <= 21){ window.alert(`Com ${somaP} pontos. Você está regular!"`)
    }else{
    window.alert(`Com ${somaP} pontos. Você está Irregular!"`)
    }
}


