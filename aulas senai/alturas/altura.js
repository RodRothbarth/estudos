var joao = 175
var pedro = 160
var anos = 0

function altura(){
    while (pedro < joao){
        joao += 1
        pedro += 3
        anos++
    }
    window.alert(`levou ${anos} anos para Pedrinho ficar mais alto que Joãozinho`)
}