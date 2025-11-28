// 8. Faça um programa que receba a idade do usuário, enquanto a
// resposta do usuário for menor que 18 anos continue a solicitar a
// idade e mostre uma mensagem quando a idade do usuário for
// maior que 18.

let numeroIdade = parseInt(prompt("Dígite sua idade: "))

while (numeroIdade < 18){

numeroIdade = parseInt(prompt("Qual é a sua idade?"))
}

if(numeroIdade >= 18){
    alert("Você é maior de 18 !")
}