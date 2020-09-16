function escolha(){
let game = document.getElementById("select").value
let msg = document.getElementById("resultado") 
let count = 0
let random = -1

switch (game){
    case "9":
        let num = window.prompt("Digite o número da sorte entre 0 e 9!")
        console.log(Number.isInteger(Number(num)))
        while (!Number.isInteger(Number(num)) || num < 0 || num > 9){
            num = window.prompt("Elemento digitado não é um número entre 0 e 9!")
        }
        while (random != num){
            random = Math.floor(Math.random() * 10)
            console.log(random)
            count++
            console.log(`Número de tentativas ${count}. E o valor  random é ${random}`) 
        }
        msg.innerHTML = `Necessário(s) ${count} chute(s) para adivinhar o número ${num}!`; 
    break
    case "99":
        let num99 = window.prompt("Digite o número da sorte entre 0 e 99!")
        console.log(Number.isInteger(Number(num99)))
        while (!Number.isInteger(Number(num99)) || num99 < 0 || num99 > 99){
            num99 = window.prompt("Elemento digitado não é um número entre 0 e 99!")
        }
        while (random != num99){
            random = Math.floor(Math.random() * 100)
            console.log(random)
            count++
            console.log(`Número de tentativas ${count}. E o valor  random é ${random}`) 
        }
        msg.innerHTML = `Necessário(s) ${count} chute(s) para adivinhar o número ${num99}!`; 

    }
}    

area = document.getElementById('resultado')
        area.addEventListener('mouseenter', entrar)
        area.addEventListener('mouseout', sair)
        
function entrar(){
    area.style.background= 'green'
    area.innerText= 'Aperte em recomeçar para reiniciar ou em um jogo no seletor!' 
}

function sair(){
    area.style.background= 'white'
    area.innerText=  ''
}

let click = document.getElementById('reset')
click.addEventListener('click', resetar)
click.addEventListener('mousedown', sombra)

function resetar(){
    window.location.reload()
}

function sombra(){
    click.style.background= 'red'
}

let jogo = document.getElementById('painel')
    jogo.addEventListener('mouseover', texto)

function texto(){
    jogo.title = "Jogo de números aleatórios!"
}

let troca = document.getElementById('mudar').addEventListener('click', mudar)

function mudar(){
   area.classList.add("class") 
}