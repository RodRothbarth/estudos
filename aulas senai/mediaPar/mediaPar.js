var num1 = document.getElementById('num')
var add = 0
var result = 0
var count = 0
function soma(){
    if ((Number(num1.value)%2) == 0){
        add+= Number(num1.value)
        count++
        
        num1.value = ""
    }else{num1.value = ""
        }
}

function media(){
    if (count < 5){
        window.alert("DIGITE NO MÍNIMO 5 NÚMEROS PARES")    
    }else if (count > 5){
        window.alert("VOCÊ DIGITOU MAIS DO QUE 5 NÚMEROS!")    
    }else {
        result = add / 5
        window.alert(result)
    }
}