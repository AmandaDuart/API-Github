class RepositorioView {
    constructor() {
        throw new Error("Erro não instanciado")
    }

    static templateRepositorio(usuario) {
        return `<img src = "${usuario.foto}" >
                <div>
                    <h1>${usuario.usuarioGit}</h1>
                </div>
                <div>
                    <h1>${usuario.repositorio}</h1>
                </div>
               `;
    }
}