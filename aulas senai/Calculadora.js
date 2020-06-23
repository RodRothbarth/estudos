const select = document.getElementById("select")
const num1 = document.getElementById("numero1")
const num2 = document.getElementById("numero2")
const resultado = document.getElementById("resultado")

function calcular(){

const msgerro = 'Favor entrar apenas números'

    if (!Number.isNaN(numero1.value) && !Number.isNaN(numero2.value)){
        switch (select.value){
            case "adicao":
                resultado.value= Number(num1.value) + Number(num2.value);
            break
            case "subtracao":
                resultado.value= Number(num1.value) - Number(num2.value)  ;
            break
            case "divisao":
                if(Number(num2.value) === 0){
                    window.alert("Divisão por zero não é permitida")
                } else{
                    resultado.value= Number(num1.value) / Number(num2.value); 
                } 
            break
            case "multiplicacao": 
            console.log(Number(num1.value) * Number(num2.value));
            resultado.value= Number(num1.value) * Number(num2.value)    
            break
            default:
                console.log("não foi")
        }                   
    } else {console.error(msgerro)
        }
}

function resetar(){
    num1.value = null;
    num2.value = null;
    resultado.value = null;
    }