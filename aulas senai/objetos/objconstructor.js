const { get } = require("http")

let alunos = []



function Person(first, last, age, eye){

    this.firstName = first
    this.lastName = last
    this.age = age
    this.eyeColor = eye

} //função construtora de objetos

let pessoa = new Person ("Rodrigo", "Rothbarth", 32, "Brown")
let pessoa1 = new Person ("Bernardo", "Rothbarth", 31, "Brown")

alunos.push(pessoa, pessoa1)


console.table(alunos) // console.table sai uma tabela com as informações do arrey

// tentar pegar do html um arrey com getElementsByName para usar como parametro do new Person()
// let novo = document.getElementsByName