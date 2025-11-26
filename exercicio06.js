// Exercício 7: Cálculo de desconto progressivo
// Imagine uma loja de roupas que dê um desconto ao cliente, dependendo do valor que ele
// pague. Faça um programa para loja, que solicite o valor total da compra ao usuário e assim,
// aplique um desconto de acordo com o valor total da compra. Siga a tabela:
// Valor total da compra até R$ 100,00: sem desconto.
// Valor total da compra de R$ 100,01 a R$ 200,00: desconto de 10%.
// Valor total da compra acima de R$ 200,00: desconto de 20%.
// Exiba o valor final da compra com o desconto aplicado.

alert("Informe o valor total de sua compra")

let valor = Number ( prompt("Digite o valor"));

if ( valor == 100){
    console.log("Sem desconto")
}
else if (valor >=100.01 && valor<= 200) {
     console.log("10% de Desconto")
}

else if (valor >=200.01) {
    console.log("20% de Desconto")
    
}







