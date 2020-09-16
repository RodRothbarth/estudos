let guloseimas = [6.00, 3.00, 8.50]
let total = []
let subTotal = 0
function lanche(){
    let lista = Number(window.prompt("Quantas guloseimas deseja?"))
    let count = 0
    do{
        let produto = window.prompt("Qual guloseima deseja? pipoca, chocolate ou refrigerante")
        let quant = Number(window.prompt("quantos?"))

        switch(produto){
            case "pipoca": total.push(quant * guloseimas[0])
            break
            case "chocolate": total.push(quant * guloseimas[1])
            break
            case "refrigerante": total.push(quant * guloseimas[2])
            break
        }
        count++
        window.alert(total)
    }while(count < lista)

    for (let i = 0; i <total.length; i++){
        subTotal += total[i]
        window.alert(subTotal)
    }
    window.alert(`Total a pagar ${subTotal}`)
}