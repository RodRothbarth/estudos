//Numa floricultura são vendidos os seguintes tipos de flores: rosa  (R$12,60), begônia (R$8,50), dália (R$15,45), orquídea (R$22,30), tulipa (R$6,25), bromélia (R$7,90), girassol (R$9,20). Um cliente entra para comprar algumas flores, porém, tem apenas R$50 em dinheiro. Peça ao cliente quantas flores ele quer comprar e em seguida ele deve digitar os nomes das flores a comprar. Caso o valor não ultrapasse R$50, mostrar o valor a pagar (o vendedor só tem moedas de 1 real no momento, o valor deve ser arredondado para cima ou pra baixo caso passe ou fique abaixo de 50 centavos os decimais). Caso o valor ultrapasse R$50, ao final, mostrar uma mensagem avisando que não é possível comprar todas as flores.

let flowers = {rosa: 12.60, begônia: 8.50, dália: 15.45, orquídea: 22.30, tulipa: 6.25, bromélia: 7.90, girassol: 9.20};

let qty = Number(prompt("Quantas flores comprar?"));
let item = document.getElementById("flwr");
let bin = [];
let sum = 0;
let lista;

function Check(){
    if(sum > 50){
        alert("Desculpe! Não é possível comprar todas as flores.")
    }else{
        document.getElementById("aqui").innerHTML = `${Object.entries(lista)} <br> Subtotal: R$${sum}`
    }    
}

function Order(){
    
    switch(item.value){
        case "rosa": 
            sum += flowers.rosa
            bin.push("Rosa")
            alert("Produto adicionado com sucesso")
            break
        
        case "begônia": 
            sum += flowers.begônia 
            bin.push("Begônia")
            alert("Produto adicionado com sucesso")
            break

        case "dália":   
            sum += flowers.dália 
            bin.push("Dália")
            alert("Produto adicionado com sucesso")
            break

        case "orquídea":    
            sum += flowers.orquídea 
            bin.push("Orquídea")
            alert("Produto adicionado com sucesso")
            break

        case "tulipa":  
            sum += flowers.tulipa
            bin.push("Tulipa")
            alert("Produto adicionado com sucesso")
            break

        case "bromélia":    
            sum += flowers.bromélia
            bin.push("Bromélia")
            alert("Produto adicionado com sucesso")
            break

        case "girassol":    
            sum += flowers.girassol
            bin.push("Girassol")
            alert("Produto adicionado com sucesso")
            break

        }

    lista = bin.reduce(function(object, flower){
        console.log(object , flower);
    if (!object[flower]){
        object[flower] = 1;
    }else{
        object[flower]++;
    }
        return object;
    },{})           

    if(bin.length == qty){
        sum = Math.round(sum).toFixed(2)
        alert(sum)
        Check();
    }
}

//function Order(){
  
//     if(flowers.includes(flowers.keys(item))){
       

//         sum += Object.values(flowers.a) + "<br>"
//         bin.push(item)    
//         alert(`${item} adicionado com sucesso!`)
//         item = null            
//         }else{alert("digite algo valido!")
//     }
//     if(bin.length == qty){
//         Check()
//     }    
// }
