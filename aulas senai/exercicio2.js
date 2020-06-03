//senha
function login(senha){
       let pass = "Rodrigo123"
    if (senha === pass){
        console.log("Acesso Permitido")
    }
    else{ 
        console.log("Acesso Negado")
    }
}


//poligono
function poligonos(numero){
    switch(numero){
        case 3:
            console.log('TRIANGULO');
            break;
        
        case 4:
            console.log('QUADRADO');
            break;
        case 5: 
            console.log('PENTAGONO')
            break;
        default:
            console.log('POLIGONO INVÁLIDO')
                  
    }
}

//par ou inpar
function paridade(numero){
    numero = numero%2
    if (numero == 0){
        console.log('Número Par')
    }else {
        console.log('Númeroa Ímpar')
    }
}

// mes do ano
function mesDoAno(numero){
    switch(numero){
        case 1:
            console.log('JANEIRO');
            break;
        case 2:
            console.log('FEVEREIRO');
            break;
        case 3: 
            console.log('MARÇO')
            break;
        case 4:
            console.log('ABRIL');
            break;        
        case 5:
            console.log('MAIO');
            break;
        case 6: 
            console.log('JUNHO')
            break;
        case 7:
            console.log('JULHO');
            break;            
        case 8:
            console.log('AGOSTO');
            break;
        case 9: 
            console.log('SETEMBRO')
            break;
        case 10:
            console.log('OUTUBRO');
            break;        
        case 11:
            console.log('NOVEMBRO');
            break;
        case 12: 
            console.log('DEZEMBRO')
            break;
        default:
            console.log('MÊS INVÁLIDO')
    }
}

//genero

function genero(letra){
    if (letra == "F"|| letra == "f"){
        console.log('Feminino')
    }else    if (letra == "M" || letra =="m"){
        console.log('Masculino')
    }else {
        console.log("Por favor, insira 'f' ou 'm'")
    }
}

// numero maior e menor
function numero(num1, num2, num3){
    if (num1 >= num2 && num1 >=num3){
        console.log('Maior: ' + num1)
    }else if(num2 >= num1 && num2 >=num3){
        console.log('Maior: ' + num2)
    }else {
        console.log('Maior: ' + num3)
    }
    if (num1 <= num2 && num1 <=num3){
        console.log('Menor: ' + num1)
    }else if(num2 <= num1 && num2 <=num3){
        console.log('Menor: ' + num2)
    }else {
        console.log('Menor: ' + num3)
    }
}
