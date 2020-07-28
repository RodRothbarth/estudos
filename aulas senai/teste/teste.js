function direcionar(sala){
    window.open(sala, "_parent")
}

    function notaFinal(i){
      const num1 = document.getElementsByName("nota1")[i]
      const num2 = document.getElementsByName("nota2")[i]
      const resultado = document.getElementsByName("media")[i]
      const aprovacao = document.getElementsByName("resultado")[i]
      
      if (parseFloat(num1.value) > 10 || parseFloat(num2.value) > 10){
        window.alert('numero muito grande')
        num1.value = '0.0';
        num2.value = '0.0';
        resultado.value = '0.0';
      }
      resultado.value = ((parseFloat(num1.value) + parseFloat(num2.value))/2)
      if (resultado.value >= 7){
         aprovacao.innerHTML = "Aprovado"
      } else {aprovacao.innerHTML = "Reprovado"}
      
    }  

    function highScore(){
       var mat = document.getElementsByName('matricula')
        
        window.alert(mat)
    }


    