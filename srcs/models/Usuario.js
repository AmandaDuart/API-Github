class Usuario {
    constructor(foto, usuarioGit, repositorio) {
        this._foto = foto;
        this._usuarioGit = usuarioGit;
        this._repositorio = repositorio;
    };

    retornaUsuario() {
        return {
            foto: this._foto,
            usuarioGit: this._usuarioGit,
            repositorio: this._repositorio,
        };
    };
};