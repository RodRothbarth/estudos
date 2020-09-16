function teste(){
    let numeros = []
    let count = 0
    do{
        let digitado = Number(window.prompt("Digite 10 números entre 0 e 50:"))
        console.log(digitado)
        if(digitado >= 0 && digitado <=50){
            numeros.push(digitado)
            count++
        }else {window.alert("Digite 10 números entre 0 e 50!")}
    }while (count < 10) 
    window.alert(`O maior número digitado foi ${Math.max(...numeros)} e o menor ${Math.min(...numeros)}`)
}
