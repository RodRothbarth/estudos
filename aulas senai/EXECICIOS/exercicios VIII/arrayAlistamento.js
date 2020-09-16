let alistamento = []

for (let i = 0; i < 10; i++){
  
    alistamento.push(prompt(`Houve alistamento no ano 200${i}? (S/N)`))

}

let ano = alistamento.lastIndexOf("S")

if (ano === -1){

    alert("Não houve alistamento militar no período")

}else{

    alert(`O Último alistamento foi realizado em 200${ano}`)
    
}