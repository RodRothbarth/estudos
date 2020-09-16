let alunos = [];
 
function Aluno(login, senha, nome, CPF, RG, dataNascim, nomeMae, nomePai, notas, materias, pagamentos){
    this.login = login;
    this.senha = senha;
    this.nome = nome;
    this.CPF = CPF;
    this.RG = RG;
    this.dataNascim = dataNascim;
    this.nomeMae = nomeMae;
    this.nomePai = nomePai;
    this.notas = notas;
    this.materias = materias;
    this.pagamentos = pagamentos;
}
 
let aluno1 = new Aluno("bruno@senai.com", "bruno123","Bruno Rogerio Candido", "123456879", "3265857","00/00/0000", "Maria", "Joao", [2,2,2,2,(2+2+2+2)/4], ["historia"], ["ok", "ok"]);
let aluno2 = new Aluno("rodrigo@senai.com", "rodrigo123","Rodrigo Rothbarth", "32569875461", "5874632","00/00/0000", "Lucia", "Marcos", [2,2,2,2,(2+2+2+2)/4], ["historia"], ["ok", "ok"]);
let aluno3 = new Aluno("maria@senai.com", "maria123","Maria Duz", "15498745", "32565412365","00/00/0000", "Flavia", "Vitor", [2,2,2,2,(2+2+2+2)/4], ["historia"], ["ok", "ok"]);
let aluno4 = new Aluno("rafael@senai.com", "rafael123","Rafael Matos", "32156545", "98563214587","00/00/0000", "Maria", "Eduardo", [2,2,2,2,(2+2+2+2)/4], ["historia"], ["ok", "ok"]);
 
alunos.push(aluno1, aluno2, aluno3, aluno4);

function validation(){
    let usern = document.getElementById("usuario")
    let pssw = document.getElementById("senha")

    for (i = 0; i < alunos.length; i++){
        if (alunos[i].login == usern.value){
            if(alunos[i].senha == pssw.value){
                    console.log("Sucesso")
            }else
                window.alert("Senha Incorreta");
                
        }else
            window.alert("Login Incorreto");

    }

    usern.value = ""
    pssw.value = ""
}    
