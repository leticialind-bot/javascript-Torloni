let mercedes = {
    modelo: "G63",  //caracteristicas - propriedades
    ano: 2025,
    fabricante: "mercedes",
    cor: "preto fosco",
    acelerar() { //comportamentos - metodos
        console.log("acelerando...vrum...vrum...");
    },
    freiar() {
        console.log("freiando....");
    }
};

console.log(mercedes.modelo);
console.log(mercedes.acelerar());

//criar um objeto professor tadeu ou jonas
// 3 propriedades nome, NIF , salario
// 2 comportamentos atribuirnota e baterponto
// alem disso, escolha mais uma propriedade e mais um comportamento


let professor = {
    nome: "Felipe Tadeu",
    datanasc: new date (2001, 8, 27),
    NIF: 9673625,
    salario: 8.000,
    hobbies: ["jogar cs", "correr"],

    atribuirnota() { },
    baterponto() {
        let horariobatido = new Date(2025, 10, 28, 17, 5);

        console.log(horariobatido);
    }
};



console.log(professor.hobbies);
console.log(professor.datanasc);
console.log(professor.nome);