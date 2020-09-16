/*crie um vetor com 10 numeros para buscar o index de um numero procurado nele.*/

let num = [2, 4, 5, 12, 22, 2, 4, 8, 10, 14]
let id = []

let pesquisa = Number(prompt("Digite o número a ser pesquisado: "))

for (let i = 0; i < num.length; i++){
    if(pesquisa === num[i]){
        id.push(i)
    }
}

alert(id)

