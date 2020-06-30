function direcionar(sala){
    window.open(sala, "_parent")
}


function notas(){eu(); eud()}

    function eu(){
      const num1 = document.getElementById("nota1")
      const num2 = document.getElementById("nota2")
      const resultado = document.getElementById("finalGrade")
      resultado.value = ((parseFloat(num1.value) + parseFloat(num2.value))/2)
      if (resultado.value >= 5){
         document.getElementById("resultado").innerHTML = "Aprovado"
      } else {document.getElementById("resultado").innerHTML = "Reprovado"}
      
    }

    function eud(){
        const num1 = document.getElementById("notad1")
        const num2 = document.getElementById("notad2")
        const resultado = document.getElementById("finalGraded")
        resultado.value = ((parseFloat(num1.value) + parseFloat(num2.value))/2)
        if (resultado.value >= 5){
            document.getElementById("resultadod").innerHTML = "Aprovado"
        } else {document.getElementById("resultadod").innerHTML = "Reprovado"}
    }

    function eub(){
        const num1 = document.getElementById("nota1b")
        const num2 = document.getElementById("notab2b")
        const resultado = document.getElementById("finalGradeb")
        resultado.value = ((parseFloat(num1.value) + parseFloat(num2.value))/2)
        if (resultado.value >= 5){
            document.getElementById("resultadob").innerHTML = "Aprovado"
        } else {document.getElementById("resultadob").innerHTML = "Reprovado"}
    }
    
