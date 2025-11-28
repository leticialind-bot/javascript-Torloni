//calcular a soma dos numero de 1 á 100 utilizando a estrutura while

let numero = 1; //variavel inicializadora
let soma = 0;

//condição
while (numero <= 100) {
    soma = soma + numero; // esta somando os numeros
    numero++; //imcremento de cada volta
}


alert("A soma dos numeros de 1 á 100 é: " + soma);