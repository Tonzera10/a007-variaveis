let a = Number(prompt("Digite o valor de a:"));
let b = Number(prompt("Digite o valor de b:"));
let c;

c = a;
a = b;
b = c;

console.log("O novo valor de a é", a);
console.log("O novo valor de b é", b);