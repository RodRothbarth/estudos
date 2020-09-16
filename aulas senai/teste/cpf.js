
function TestaCPF(strCPF) {
    var Soma = 0;
    var Resto;
    
  if (strCPF == "00000000000") return false;

  for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;

  Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
    
}

function Chamar(){
    var strCPF = document.getElementById("cpf").value;
    TestaCPF(strCPF);
    if (TestaCPF(strCPF) == true) {
        alert("Você digitou um CPF Válido!")
    }else{
        alert("Você digitou um CPF Inválido!")
    } 
}