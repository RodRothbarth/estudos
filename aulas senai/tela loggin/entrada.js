function validation(){
    let usern = document.getElementById("username")
    let pssw = document.getElementById("password")
    let uArray = ["joao", "caio", "bruno"]
    let pArray = ["1234", "senha", "senha123"]
    let idFlag = 0

    for (i = 0; i < uArray.length; i++){
        if ((uArray[i] == usern.value) && (pArray[i] == pssw.value)){ 
            idFlag = 1
        } 
    }
    if (idFlag){
        window.open("sucesso.html")
        usern.value = ""
        pssw.value = ""
    } else {
        window.alert("Ocorreu um erro! Por Favor digitar User Name ou/e Senha corretos!")
        usern.value = ""
        pssw.value = ""
    }
}