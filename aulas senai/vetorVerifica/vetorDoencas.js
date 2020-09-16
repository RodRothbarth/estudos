/* Desenvolver um programa que peça ao usuário o número de doenças a cadastrar, no qual ele deve cadastrar o nome da doença e se ela é transmitida por vírus, bactéria ou por ambos. Ao final, mostrar quatro listas: doenças transmitidas por vírus, doenças transmitidas por bactérias, doenças transmitidas porlista com todas doenças.*/

let desease = document.getElementById("illness")
let transmission = document.getElementById("select")
let list = [] 

function Desease (name, type){
this.name = name
this.type = type
}

function Cadastrar(){
    let add = new Desease(desease.value, transmission.value)
    list.push(add)
    alert("Doença cadastrada com sucesso!")
}

function Listar(){
    let completeList = ""
    let btn = document.getElementsByName("tipo")
    
    for (let i = 0; i < btn.length; i++) {
        if (btn[i].checked) {
            switch(btn[i].value){
                case "Bactéria": for(let i = 0; i<list.length; i++){
                    if(list[i].type === "bactéria"){
                        completeList += Object.values(list[i]) + "<br>"
                    }    
                }
                break
                
                case "Vírus": for(let i = 0; i<list.length; i++){
                    if(list[i].type === "vírus"){
                        completeList += Object.values(list[i]) + "<br>"
                    }    
                }
                break

                case "Ambos": for(let i = 0; i<list.length; i++){
                    if(list[i].type === "ambos"){
                        completeList += Object.values(list[i]) + "<br>"
                    }    
                }
                break

                case "Completa": for(let i = 0; i<list.length; i++){
                    completeList += Object.values(list[i]) + "<br>"        
                }
                break
            }    
        }
    }

   if(list.length == 0) {
       alert("Não há doenças cadastradas")
   }
    
  document.getElementById("aqui").innerHTML = completeList
}
