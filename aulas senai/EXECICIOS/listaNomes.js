var newName = document.getElementById('nome')
var newAge = document.getElementById('idade')

var idade = []
var nome = []
var maisNovo =[]
var media = 0


function addCadastro(){
    nome.push(newName.value)
    idade.push(newAge.value)
    newAge.value = null
    newName.value = null
}


function anos(){
    for (i = 0; i < idade.length; i++){
        media += Number(idade[i]) 
    }
    media = media / idade.length   

 valores = []
var idx = idade.indexOf(Math.min(...idade).toString())
while (idx != -1) {
  valores.push(idx);
  idx = idade.indexOf(Math.min(...idade).toString(), idx + 1);
  
}

for (i = 0; i < valores.length; i++){
    var a = valores[i]
    maisNovo.push(nome[a])
     
}   
 window.alert(`A média das idades é de ${media} anos. `)
 window.alert(`O(s) habitante(s) mais novo(s): ${maisNovo} `)
     
}
