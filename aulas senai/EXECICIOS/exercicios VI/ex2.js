function teste(){
    let altitude = 5360
    let dias = 0

    do{
        let digitado = Number(window.prompt("Digite a altura percorrida hoje em METROS!"))
        
        altitude += digitado
        dias++      
        window.alert(dias)
        window.alert(altitude)
    
    }while (altitude <= 8848 && dias < 8)
    
    if(dias >= 8 && altitude < 8848){
    window.alert("Você deve voltar, pois corre risco de ficar sem oxigênio!")
    }else{window.alert(`Você levou um total de ${dias}!`)
    }

}

