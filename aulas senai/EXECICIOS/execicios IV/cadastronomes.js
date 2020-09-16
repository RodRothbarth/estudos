let nome = []
let option = 100

do{
    option = Number(prompt("Digite a escolha desejada: "))

    switch (option){
    
    case 1: nome.push(prompt("Digite o nome a cadastrar: ")) 
    break;

    case 2: nomePesquisado = prompt("Digite o nome a pesquisar: ") 
    if(nome.includes(nomePesquisado) === true){
        alert("Este nome está cadastrado")
    }else {
        alert("Este nome não está cadastrado")
    }
    break;

    case 3: if (nome.length === 0){
        alert("Não existem nomes cadastrados!")
    }else{
        alert(nome.join('-'))
    }
    break;
} 

}while (option !== 0)