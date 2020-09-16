let form = {}
let pag2 = document.getElementById("show")

function info(){

form.name = document.getElementById('name').value
form.age = document.getElementById('age').value
form.phone = document.getElementById('phone').value

localStorage.setItem("info", JSON.stringify(form))
window.location.href = "cookie2.html"
}

function mostra(){ 
    pag2.innerHTML =  Object.values(JSON.parse(localStorage.getItem("info")))
}
