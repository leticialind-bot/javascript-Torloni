// Faça um programa que imprima na tela a tabuada de um número qualquer escolhido pelo usuario até o 10

let tabuadaescolhida = parseInt(prompt("Digite um numero de 1 á 10: "));

//========TABUADA X=======

// 2 x 1 = 2
// 2 x 2 = 4
// 2 x 3 = 6
// 2 x 4 = 8

//1 numero dentro da condição do for - inicialização - variavel
//2 numero dentro da condição do for - condição - verifica a volta da variavel
//3 numero dentro da condição do for - incremento - soma as voltas
// i++ igual a i = i+1

console.log(`//========TABUADA X ${tabuadaescolhida}=======`);

for(let i = 1; i <= 10; i++){
    //      2 x 4 =
    console.log(tabuadaescolhida + " X " + i + " = " + (tabuadaescolhida * i ));
}

