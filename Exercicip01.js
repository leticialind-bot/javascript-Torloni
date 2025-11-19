let login = prompt("Digite seu Email: ")

switch (login) {
    case "admin":
        console.log("Login bem sucedido")
        break;



    default:
        console.log("Login Incorreto")
        break;


}
let senha = prompt("Insira sua senha: ")

switch (senha) {
    case "senha123":
        console.log("Senha correta")
        break;

    default:
        console.log("Senha Incorreta")
        break;
}