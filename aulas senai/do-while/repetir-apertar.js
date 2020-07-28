var text = ""
var test = 0
var i = 0
function fazer(){
    do{
    text += "<br> aperta o botão cara!" + i
    i++
} while(test == 0)
document.getElementById("loop").innerHTML = text}

function click(){
    test = 1
}


