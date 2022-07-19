// let nome;
// let idade;
// console.log(typeof nome);
// console.log(typeof idade);
// Os impressos saíram como undefined, pois não foram atribuídos valores as variáveis!
let nome = prompt("Qual seu nome?");
let idade = Number(prompt("Qual sua idade?"));
console.log(typeof nome);
console.log(typeof idade);
//Agora com os valores atribuídos corretamento os tipos das variaveis apareceram como esperado!
console.log("Olá", nome, ", você tem ",idade, "anos!");