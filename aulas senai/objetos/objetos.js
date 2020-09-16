let cadastro = {
    nome: "rodrigo",
    rg: 98765432101,
    cargo: "", //pode criar um elemento vazio
    salario: 1565.00,
    contratacao: "17/05/2020"
}

cadastro.ferias = "nao participante";  //object.property = value; adiciona um elemento novo
delete cadastro.ferias; // delete meuObjeto.propriedade ; deleta o elemento desejado

for ( variavel in cadastro){
    txt += cadastro[variavel]
} // exemplo de laço for para objetos