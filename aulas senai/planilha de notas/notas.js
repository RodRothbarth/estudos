function direcionar(sala){
    window.open(sala, "_parent")
}


    function notaFinal(i){
      const num1 = document.getElementsByName("nota1")[i]
      const num2 = document.getElementsByName("nota2")[i]
      const resultado = document.getElementsByName("media")[i]
      resultado.value = ((parseFloat(num1.value) + parseFloat(num2.value))/2)
      
      if (resultado.value >= 5){
         document.getElementsByName("resultado")[i].innerHTML = "Aprovado"
      } else {document.getElementsByName("resultado")[i].innerHTML = "Reprovado"}
      
    }    
