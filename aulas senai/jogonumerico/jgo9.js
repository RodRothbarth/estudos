function escolha(){
let game = document.getElementById("select").value
console.log(game)
let msg = document.getElementById("resultado") 
let count = 0
let random = -1

switch (game){
    case "9":
        let num = window.prompt("Digite o número da sorte entre 0 e 9!")
        while (isNaN(num) == true){
            num = window.prompt("Digite um número entre 0 e 9!")
        }

        while (random != num){
            if (num >=0 && num <=9){
            random = Math.floor(Math.random() * 10)
            console.log(random)
            count++
            }else {
                 num = window.prompt("Digite um número entre 0 e 9!")
            }
        }
        msg.innerHTML = `Necessário(s) ${count} chute(s) para adivinhar o número ${num}!`; 
    break
    case "99":
        let num99 = window.prompt("Digite o número da sorte entre 0 e 99!")
        while (isNaN(num99) == true){
            num = window.prompt("Digite um número entre 0 e 99!")
        }

        while (random != num99){
            if (num99 >=0 && num99 <=99){
            random = Math.floor(Math.random() * 100)
            console.log(random)
            count++
            }else {
                 num99 = window.prompt("Digite um número entre 0 e 99!")
            }
        }
        msg.innerHTML = `Necessário(s) ${count} chute(s) para adivinhar o número ${num99}!`; 

    }
}    