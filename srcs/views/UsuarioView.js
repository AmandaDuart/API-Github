class UsuarioView {
    constructor() {
        throw new Error("Erro não instanciado")
    }

    static templateUsuario(usuario) {
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