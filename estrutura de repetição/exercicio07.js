// faça um programa que receba um numero do usario e mostre
// no console a contagem regressiva até 0.

let numeroEscolhido = prompt("Digite um numero positivo: ");

while (numeroEscolhido > -1){
    //so entra no while se a condicao for verdadeiro

    console.log(numeroEscolhido);
    // numeroEscolhido = numeroEscolhido -1;
    numeroEscolhido--; //decrementa o valor escolhido, ou seja, faz a contagem regressiva
}