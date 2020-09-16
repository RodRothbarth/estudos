//Você está fazendo um mochilão pela Europa e precisa saber qual a distância que vai percorrer em determinada viagem ou trecho da viagem, utilizando trem. De Bruxelas até Berlim são 764km e de Berlim até Praga são 350km. De Praga até Viena são mais 292km. De Viena até Budapeste, são outros 242km. Faça um sistema no qual o usuário digite a cidade de origem, em seguida a cidade de destino. Mostrar na tela a distância (km) da viagem.

let cidades = ["bruxelas", "berlim", "praga", "viena", "budapeste"]
let trilho = [764, 350, 292, 242]
let totalViagem = 0
let partida = cidades.indexOf(prompt("Digite a cidade de partida:"))
let chegada = cidades.indexOf(prompt("Digite cidade de chegada:"))

if (partida < chegada){
    for(let i = partida; i < chegada; i++){
        totalViagem += trilho[i]        
    }    
    totalViagem -= (trilho[partida])
}else{
    for(let i = chegada; i < partida; i++){
        totalViagem += trilho[i]        
    }    
    totalViagem -= (trilho[partida])
}

alert(`Sua viagem será de ${totalViagem} km.`)