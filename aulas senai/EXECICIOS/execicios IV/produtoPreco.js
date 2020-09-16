let produtos = []
let precos = []
let menor = 0
let produtoMid = []
let soma = 0
let count = 0

for (let i = 0; i < 5; i++){

    produtos.push(prompt("Digite o produto:"))
    precos.push(Number(prompt("digite o preço do produto: ")))

    if(preco[i] < 50){
      
        menor++

    } else if(preco[i] <=100){

        produtoMid.push(produtos[i])

    } else {

        soma += preco[i]
        count++

    }


}

alert(menor)
alert(produtoMid)
alert(soma/count)

