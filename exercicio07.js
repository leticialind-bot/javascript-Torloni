// // Exercício 8: Cálculo de IMC
// // Escreva um programa que solicita ao usuário seu peso em quilogramas e sua altura em metros.
// // Em seguida, calcule o Índice de Massa Corporal (IMC) utilizando a fórmula: IMC = peso / (altura
// // * altura). Com base no resultado, exiba uma mensagem indicando a faixa de peso em que o
// // usuário se encontra, de acordo com a tabela a seguir:
// // IMC menor que 18.5: Abaixo do peso
// // IMC de 18.5 a 24.9: Peso normal
// // IMC de 25.0 a 29.9: Sobrepeso
// // IMC de 30.0 a 34.9: Obesidade grau 1
// // IMC de 35.0 a 39.9: Obesidade grau 2
// // IMC maior ou igual a 40.0: Obesidade grau 3

let valorPeso = Number(prompt("Digite o valor do seu peso: "))
let valorAltura = Number(prompt("Digite a sua altura: "))

let soma = (valorPeso + valorAltura)

console.log(soma)

let divisao = (valorPeso / valorAltura)

console.log(divisao)

if(divisao <= 18.5) {
    console.log("Abaixo do peso")
    
}

else if (divisao >=18.5 && divisao <=24.9) {
    console.log("Peso Normal")
    
}

else if (divisao >=25.0 && divisao <=29.9) {
    console.log("Sobrepeso")
    
}

else if (divisao >= 30.0 && divisao <=34.9) {
    console.log("Obesidade grau 1")
    
}

else if (divisao >= 35.0 && divisao <=39.9) {
    console.log("Obesidade grau 2")
    
}

else if (divisao >= 40.0) {
    console.log("Obesidade grau 3")
    
}



alert("Seu IMC é: " + divisao.toFixed(2) + "\nconsole: " + console);