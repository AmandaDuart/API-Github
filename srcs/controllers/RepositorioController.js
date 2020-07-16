class RepositorioController {
    constructor() {
        throw new Error("Erro não instanciado");
    };

    static gerarRepositorio() {

        let repositoriorequi = new XMLHttpRequest();
        repositoriorequi.open("GET", `https://api.github.com/users/${textoUser}/repos`);

        repositoriorequi.onload = () => {
            let listaRepos = JSON.parse(repositoriorequi.responseText);
            for (let item of listaRepos) {
                let repositorioGit = new Repositorio(item.name);
                respostGit.innerHTML += RepositorioView.templateRepositorio(repositorioGit.retornaRepositorio());
            }
        };
        repositoriorequi.send();

    }

}