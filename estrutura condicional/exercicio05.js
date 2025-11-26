let n1 = Number ( prompt(" Digite o primeiro número da sua sequência"));
let n2 = Number ( prompt(" Digite o segundo número da sua sequência"));
let n3 = Number ( prompt(" Digite o terceiro número da sua sequência"));


if ( n1 < n2 && n2 < n3 ) {
     alert(" Os números estão em ordem crescente");
} else{
     alert(" Os números não estão em ordem crescente");
}

let primeiroNumero = parsetInt(prompt("Digite o primeiro numero"));
let segundoNumero = parsetInt(prompt("Digite o segundo numero"));
let terceiroNumero = parsetInt(prompt("Digite o terceiro numero"));

if (primeiroNumero < segundoNumero && segundoNumero < terceiroNumero) {
     alert("Os números estão em ordem crescente")
}

if (terceiroNumero > segundoNumero && segundoNumero > primeiroNumero){
     alert ("Os numeros estao decrescente")
}

else{
     alert ("os números estão em ordem aleatória.")
}