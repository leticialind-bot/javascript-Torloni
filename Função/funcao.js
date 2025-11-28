function exibirTabuadaEscolhida() {

    let tabuadaescolhida = parseInt(prompt("Digite um numero da tabuada desejada: "));



    console.log(`//========TABUADA X ${tabuadaescolhida}=======`);

    for (let i = 1; i <= 10; i++) {
        //      2 x 4 =
        console.log(tabuadaescolhida + " X " + i + " = " + (tabuadaescolhida * i));
    }
}



//Chama a minha função
// exibirTabuadaEscolhida();


// crie uma funcao para que solicite o nome da pessoa e exibam

function exibirNomeDoUsuario() {

    let nomeSolicitado = prompt("Digite seu nome: ")

    return nomeSolicitado;
}

//let nome = exibirNomeDoUsuario();

//alert(nome);

function somarDoisNumeros(numero1, numero2) {

    console.log(numero1 + numero2);
}

somarDoisNumeros(10, 10);



//crie uma função para o exercicio 08 de estrutura condicional
//passe via parametro o peso e a altura.

function calcularIMC(peso, altura) {

    let IMC = peso / (altura * altura);

    if (IMC < 18.5) {
        alert("Abaixo do peso")
    }
    else if (IMC >= 18.5 && IMC <= 24.9) {
        alert("Peso normal");
    }
    else if (IMC >= 25 && IMC <= 29.9) {
        alert("Sobrepeso");
    }
    else if (IMC >= 30.0 && IMC <= 34.9) {
        alert("Obesidade grau 1")
    }
    else if (IMC >= 35.0 && IMC <= 39.9) {
        alert("Obesidade grau 2")
    }
    else {
        alert("Obedesidade grau 3")
    }

}


let peso = parseFloat(prompt("Digite o seu peso em quilograma: "));
let alturaDigitado = parseFloat(prompt("Digite o sua altura: "));

calcularIMC(pesoDigitado, alturaDigitado);
