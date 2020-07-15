class RepositorioController {
    constructor() {
        throw new Error("Erro não instanciado");
    };

    static gerarRepositorio() {

        let repositoriorequi = new XMLHttpRequest();
        repositoriorequi.open("GET", `https://api.github.com/users/${textoUser.value}/repos`);

        repositoriorequi.onload = () => {
            let respostGit = document.getElementById('repositorio');
            let templateRepositorio = new RepositorioView();
            let listaRepos = JSON.parse(repositoriorequi.responseText);
            for (let i = 0; i < listaRepos.length; i++) {
                let repositorioGit = new Repositorio(
                    listaRepos[i].html_url);
                respostGit.innerHTML = templateRepositorio.templateRepositorio(repositorioGit.retornaRepositorio());


                console.log(respostGit)
            }
        };


        //console.log(userInput.value);

        // repositoriorequi.addEventListener("load", () => {
        //     if (repositoriorequi.status == 200) {
        //         let listaRepos = JSON.parse(repositoriorequi.responseText);
        //         console.log(listaRepos);
        //         for (let i = 0; i < listaRepos.length; i++) {

        //             let repositorio = new Repositorio(listaRepos[i].html_url);

        //             let reposGit = document.getElementById('repositorio');

        //             reposGit.innerHTML = RepositorioView.templateRepositorio(repositorio.retornaRepositorio());
        //         }
        //     }
        // });
        repositoriorequi.send();

    }

}