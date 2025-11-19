alert("Informe ás notas de 0 á 10")

let nota1 = parseFloat(prompt("Digite a primeira nota: "))
let nota2 = parseFloat(prompt("Digite a primeira nota: "))
let nota3 = parseFloat(prompt("Digite a primeira nota: "))
let nota4 = parseFloat(prompt("Digite a primeira nota: "))

let media = (nota1 + nota2 + nota3 + nota4)/4

console.log("A media do aluno é: " + media)

if(media >= 7){
    console.log("Aprovado")
}
else if(media <7 && media>= 5){
    console.log("Recuperação")
}
else{
    console.log("Reprovado")
}





// let numero01 = parseInt(prompt("Digite o primeiro número: "))

// let numero02 = parseInt(prompt("Digite o segundo número: "))

// let numero03 = parseInt(prompt("Digite o terceiro número: "))

// let numero04 = parseInt(prompt("Digite o quarto número: "))

// let soma = (numero01 + numero02 + numero03 + numero04)/4

// console.log(soma)

// if (numero04 % 4 === 0) {
//     alert ("numero01 + numero02 + numero03 + numero04");
    
// }