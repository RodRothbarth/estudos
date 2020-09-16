const { UV_FS_O_FILEMAP } = require("constants")

let apartamento = {}

apartamento.quartos = 3
apartamento.tipo = "Apartamento"
apartamento.endereco = "Rua Floriano Peixoto, 515"

console.log(`${apartamento.tipo} com ${apartamento.quartos} quartos localizado na ${apartamento.endereco}`)



let film = {}

film.name = prompt("Digite o nome do filme: ");
film.gender = prompt('Digite o Gênero do filme: ');
film.country = prompt("Digite o País de origem do filme: ");
film.year = prompt("Digite o ano do filme: ");

delete film.country;
film.year = "1988";

alert(Object.values(film)) //object.entries() mostra com o nome do elemento junto


