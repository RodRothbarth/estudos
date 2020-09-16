let primarias = []
let secundarias = []

for (let i = 0; i < 6; i++){
    if ( i < 4){

        primarias.push(prompt("Digite a cor primária:"))

    }else{

        secundarias.push(prompt("Digite a cor secundádia:"))

    }

};

let cores = primarias.concat(secundarias);

cores.push(prompt("Adicionar no fim da lista:"));
cores.unshift(prompt("Adicionar no inicio na lista:"));

alert(cores)