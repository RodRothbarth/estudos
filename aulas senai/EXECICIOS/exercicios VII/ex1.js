let quantidade = Number(prompt("Digite quantos números quer cadastrar:"))
let array = new Array(quantidade)
let soma = 0 

for (let i = 0; i < array.length; i++){
    array[i] = prompt("Digite um número: ")
    soma += Number(array[i])
}

alert (`A média dos valores é: ${(soma/2).toFixed}`)
