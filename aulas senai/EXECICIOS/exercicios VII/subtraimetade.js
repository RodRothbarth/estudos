let numeros = new Array (10)
let primeiraMetade = 0
let segundaMetade = 0

for (let i = 0; i < numeros.length; i++){

    numeros[i] = Number(prompt("Digite o número: "))

    if (i < 5){
        primeiraMetade = numeros[i]
    }else{
        segundaMetade = numeros[i]
    }

}