let haddad = 0
let bolsonaro =0
let ciro = 0
let amoedo = 0
let branco = 0
let eleitores = 0

function sufragio() {
    eleitores+=1 
    var radios = document.getElementsByName("candidato");
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            window.alert("Escolheu: " + radios[i].value);
            switch (radios[i].value){
                case "Bolsonaro": bolsonaro += 1;
                break;        
                case "Haddad": haddad += 1;
                break;        
                case "Ciro": ciro += 1;
                break;        
                case "Amoedo":  amoedo += 1;
                break;        
                case "branco": branco += 1;
                break;                 
            }         
        }
    }   
}
function total(){
    let votosValidos = ((eleitores-branco)/eleitores)*100
    let votosBrancos = (branco/eleitores)*100
    window.alert(`Com o total de ${eleitores} de eleitores. Votos Válidos:  ${votosValidos} %, Votos Brancos: ${votosBrancos} %`)
}
