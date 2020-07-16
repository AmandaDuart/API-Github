class Usuario {
    constructor(foto, usuarioGit, followers, following) {
        this._foto = foto;
        this._usuarioGit = usuarioGit;
        this._followers = followers;
        this._following = following;
    };

    retornaUsuario() {
        return {
            foto: this._foto,
            usuarioGit: this._usuarioGit,
            followers: this._followers,
            following: this._following
        };
    };
};