// Baseado na array ["Meu", "nome", "é", "", "sou", "um", "aluno"]
// Troque o item vazio por um nome, atribuindo direto na sua posição.
// Exiba a frase do array utilizando um laço de repetição

var nome = ["Meu", "nome", "é", "", "sou", "um", "aluno"];
for(var i = 0; i < 1; i++){
    var novo = prompt("Qual o novo nome?");
    nome[3] = novo;
}

console.log(nome);