//cookie armazena ate 4gb de dados - local storage e session storage

//session/localStorage.setItem("id" key do storage , variavel[para set])
//session/localStorage.remove/getItem("id")
//JSON.stringfy() = transforma JSON em string
//JSON.parse()


let login = document.getElementById("word")
let pag2 = document.getElementById("show")

function record(){
    localStorage.setItem("word", login.value)
    window.location.href = "cookie2.html"
}

function mostra(){
    pag2.innerHTML = localStorage.getItem("word")  
}