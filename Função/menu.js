// 1
function calcularIMC(peso, altura) {

    let imc = peso / (altura * altura);


    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        classificacao = "Peso normal";
    } else if (imc >= 25.0 && imc <= 29.9) {
        classificacao = "Sobrepeso";
    } else if (imc >= 30.0 && imc <= 34.9) {
        classificacao = "Obesidade grau 1";
    } else if (imc >= 35.0 && imc <= 39.9) {
        classificacao = "Obesidade grau 2";
    } else {
        classificacao = "Obesidade grau 3";
    }

    alert("Seu IMC é: " + imc.toFixed(2) + "\nClassificação: " + classificacao);

}

let pesoDigitado = parseFloat(prompt("Digite seu peso em kg:"));
let alturaDigitada = parseFloat(prompt("Digite sua altura em metros:"));

calcularIMC(pesoDigitado, alturaDigitada);


// 2
function exibirTabuadaEscolhida() {

    let tabuadaescolhida = parseInt(prompt("Digite um numero da tabuada desejada: "));



    console.log(`//========TABUADA X ${tabuadaescolhida}=======`);

    for (let i = 1; i <= 10; i++) {
        //      2 x 4 =
        console.log(tabuadaescolhida + " X " + i + " = " + (tabuadaescolhida * i));
    }
}


//3
function Conferirdias() {
    let numeros = prompt("Digite um número de 1 a 7: ")
    switch (numeros) {
        case "1":
            console.log("Segunda-feira")
            break;
        case "2":
            console.log("Terça-feira")
            break;
        case "3":
            console.log("Quarta-feira")
            break;
        case "4":
            console.log("Quinta-feira")
            break;
        case "5":
            console.log("Sexta-feira")
            break;
        case "6":
            console.log("Sábado")
            break;
        case "7":
            console.log("Domingo")
            break;

        default:
            console.log("O número informado não é válido!")
            break;
    }

}




//  4
function confirirSequencia() {
    let primeironumero = parseInt(prompt("digite o primeiro numero"))
    let segundonumero = parseInt(prompt("digite o segundo numero"))
    let terceironumero = parseInt(prompt("digite o terceiro numero"))



    if (primeironumero < segundonumero && segundonumero < terceironumero) {
        alert(" Os números estão em ordem crescente");
    }
    if (primeironumero > segundonumero && segundonumero > terceironumero) {
        alert(" Os números estão em ordem decrescente");
    }
    if (primeironumero <= segundonumero && segundonumero >= terceironumero) {
        alert("os numeros estao em orden aleatoria")
    }
}


// 5
function descontoDaCompra() {
    let valorCompra = Number(prompt("Digite o valor total da compra: "));

    let desconto = 0;

    if (valorCompra <= 100) {
        desconto = 0;
    } else if (valorCompra <= 200) {
        desconto = valorCompra * 0.10;
    } else {
        desconto = valorCompra * 0.20;
    }

    let valorFinal = valorCompra - desconto;

    alert("Valor da compra: R$ " + valorCompra.toFixed(2) +
        "\nDesconto aplicado: R$ " + desconto.toFixed(2) +
        "\nValor final a pagar: R$ " + valorFinal.toFixed(2));
}