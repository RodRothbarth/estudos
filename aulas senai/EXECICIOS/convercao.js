 c = document.getElementById('celsious')
 f = document.getElementById('fahrenheit')

function converter(){
      
 f.value= (Number(c.value)/5) * 9 + 32
}