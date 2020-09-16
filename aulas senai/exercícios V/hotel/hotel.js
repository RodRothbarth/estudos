let leitos = 130
let disponivel = (leitos/2)-25

function hotel(){
    do{
        disponivel -= Number(window.prompt("Digite o número de pessoas que entra (com números positivos) e o número de pessoas que saem (com números negativos). "))        
        window.alert(`Ainda existem ${disponivel} leitos disponíveis.`)
    }while (disponivel >= 0) 

        window.alert(`não é possível pois ultrapassa a capacidade em ${-disponivel} leitos`)
        disponivel = (leitos/2)-25
       hotel()
}
    