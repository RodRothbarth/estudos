//Fazer um programa no qual o usuário deve montar uma salada de frutas com uma cereja no final. Deve ser perguntado em sequência “Qual fruta adicionar? “. Quando for adicionado a cereja, finalizar com a frase “Sua salada de frutas está pronta! É composta por...”. Mostrar a “lista” de frutas e a quantidade de cada uma fruta.  Exemplo: Banana, Banana, Maçã, Uva, Laranja, Laranja, Laranja, Cereja!

let pedido = []
let recibo = document.getElementById("recibo")
function add(){  
    
    do{
        let fruta = prompt("Qual fruta adicionar?").toUpperCase()
        pedido.push(fruta) 
        alert(pedido)
        
    }while(pedido[pedido.length-1] != "CEREJA")
    
    let lista = pedido.reduce(function(object, frutas){
        console.log(object , frutas);
    if (!object[frutas]){
        object[frutas] = 1;
    }else{
        object[frutas]++;
    }
     return object;
},{})

        recibo.innerHTML = `Sua salada de frutas contém: ${JSON.stringify(lista)}`
        msg.innerHTML = "Sua salada de frutas está pronta!"
    
}