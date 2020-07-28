var num = document.getElementById("numero")
var exp = document.getElementById("expoente")
var res = document.getElementById("resultado")

function calc(){
        res.value = Math.pow(Number(num.value), Number(exp.value))
}