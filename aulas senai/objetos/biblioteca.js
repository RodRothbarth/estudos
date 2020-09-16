// desenvolver um programa de cadastro para bibliotecas


let stock = []

let title = document.getElementById()
let publisher = document.getElementById()
let writer = document.getElementById()
let launch = document.getElementById()
let inStock = document.getElementById()

let sel = document.getElementById() 

function Livros(name, publish, author, year, copies ){
    this.title = name
    this.publisher = publish
    this.writer = author
    this.launch = year
    this.inStock = copies
}

function selection(){
    switch(sel.value){
        case "": add()
        break

        case"": erase()
        break

        case"": list()
    }
}

function add(){
     livro = new cadastro(title.value, publisher.value, writer.value, launch.value, inStock.value)
     stock.push(livro)
}

function erase(){
    for (let i =0; i<stock.length; i++){
        if (title.value === stock[i.title]){
            stock.splice(i, 1)
        }
    }    
}

function list(){
 let completeList = ""

 for (let i = 0; i < stock.length; i++){
     completeList += Object.values(stock[i]) + " - "
 }
 alert(completeList)

}