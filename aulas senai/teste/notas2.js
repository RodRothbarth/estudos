var tbody= document.getElementById("oi")

var turma = [
    
    {nome:"Rodrigo", nota1: "nota1", nota2:"nota2", nota3:"nota3", nota4:"nota4", media:"media"},

]

for(i = 0; i < Array.length; i++){
    document.getElementById(array[i].value)...
}
// aluno.forEach(function (aluno) {
//     var tr = document.createElement('tr');
//     for (var p in aluno) {
//         var td = document.createElement('td');
//         td.innerHTML = aluno[p];
//         tr.appendChild(td);
//     };
//     tbody.appendChild(tr);
// });

function mostrar(){
    var total = 0
    for (i = 0; i < aluno[0].notas.length; i++){
        total += aluno[0].notas[i]
    }
    aluno[0].media = total/aluno[0].notas.length
    window.alert(Object.values(aluno[0].nome))
}

