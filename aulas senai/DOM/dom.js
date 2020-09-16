let aqui = [document.getElementsByName("candidato")]
let ali = document.getElementsByTagName("th")

let table = document.getElementById("table")
let tagTR = document.createElement("tr")
let tagTd = document.createElement("td")
let tagTR1 = document.createElement("tr")
let tagTd2 = document.createElement("td")

// tagTR.appendChild(tagTd)
// table.appendChild(tagTR)


function tabela(){
for (let i = 0; i < 4; i++){
    
    let tagTR = document.createElement("tr")
    
    tagTR.appendChild(document.createElement("td"))
    tagTR.appendChild(document.createElement("td"))
    tagTR.appendChild(document.createElement("td"))
    tagTR.appendChild(document.createElement("td"))
    table.appendChild(tagTR)
    }
}

document.getElementById("table").addEventListener("mouseover",)

function voltar(){
history.back()}

function frentar(){
    history.forward()
}