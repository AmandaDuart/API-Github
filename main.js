let userInput = document.getElementById('userInput');
let buttonPesquisar = document.getElementById('buttonPesquisar');
let textoUser = "";

buttonPesquisar.addEventListener("click", () => {
    textoUser = userInput.value;
    if (textoUser != "") {
        //UsuarioController.geraUsuario();
        RepositorioController.gerarRepositorio();

    } else {
        alert("Usuário errado !");
    }
});