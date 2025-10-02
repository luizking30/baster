// script.js

// Constante para o nome do jogador (não pode ser alterado depois)
const nomeJogador = "Luiz";

// Variável para idade
let idade = 20;

// Variável para status online
let estaOnline = true;

// Objeto com informações do jogo favorito
let jogoFavorito = {
  nome: "The Legend of Zelda: Breath of the Wild",
  anoLancamento: 2017
};

// Array com últimas 3 pontuações
let ultimasPontuacoes = [1500, 2300, 1800];

// Mostrando no console valores e tipos
console.log("Nome do jogador:", nomeJogador, "| Tipo:", typeof nomeJogador);
console.log("Idade:", idade, "| Tipo:", typeof idade);
console.log("Está online:", estaOnline, "| Tipo:", typeof estaOnline);
console.log("Jogo favorito:", jogoFavorito, "| Tipo:", typeof jogoFavorito);
console.log("Últimas pontuações:", ultimasPontuacoes, "| Tipo:", typeof ultimasPontuacoes);

// Alterando idade e status online
idade = 21;
estaOnline = false;

console.log("Nova idade:", idade);
console.log("Novo status online:", estaOnline);

// Desafio extra: média das pontuações
let soma = ultimasPontuacoes[0] + ultimasPontuacoes[1] + ultimasPontuacoes[2];
let media = soma / ultimasPontuacoes.length;

console.log("Média das últimas pontuações:", media);
