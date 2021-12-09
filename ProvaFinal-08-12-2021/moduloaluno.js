// Micro desafio - Passo 1

// Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números). Crie um construtor para ele e importe-o como o módulo aluno.

//Passo 1

let Alunos = {
    nome: 'Johnny',
    faltas: 1,
    notas: [10, 9, 8, 9]
}
console.log(Alunos);


//Passo 2

function Aluno(nome, faltas, notas) {
    this.nome = nome,
    this.faltas = faltas,
    this.notas = notas,
    
    this.media =
        this.notas.reduce((acc, num) => {
            return acc + num;
        }) / this.notas.length;

    this.addFalta = () => {
        return this.faltas++;
    };
};

module.exports = Aluno;


