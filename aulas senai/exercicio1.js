
const erro = "Número inválido! Resultado não pode ser negativo"

function somar(num1, num2){
    let resultado = num1 + num2
    if (resultado<0){
       return console.error(erro)
    }
    return resultado
}

function subtrair(num1, num2){
    let resultado = num1 - num2
    if (resultado<0){
      return  console.error(erro)
    }
    return resultado
}

function multiplicar(num1, num2){
    let resultado = num1 * num2
    if (resultado<0){
       return console.error(erro)
    }
    return resultado
}

function dividir(num1, num2){
    if (num1 >= 0 && num2 >0){
        let resultado = num1 / num2
        if (resultado<0){
          return  console.error(erro)
     }
     return resultado
    }
    else{
        console.error("Não pode haver divisão por zero ou dividir números negativos")
    }
}

function exponencial(num1, num2){
    let resultado = num1 ** num2
    if (resultado<0){
      return  console.error(erro)
    }
    return resultado
}

function raiz(num1){
    if (num1 <= 0){
        return  console.error(erro)
     }
    let resultado = Math.sqrt(num1)    
    if (resultado<0){
      return  console.error(erro)
    }
    return resultado
}

