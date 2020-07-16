class UsuarioView {
    constructor() {
        throw new Error("Erro não instanciado")
    }

    static templateUsuario(usuario) {
        return `<div class="container">
                    
                    <div class="titulo">
                        <h1>${usuario.usuarioGit}</h1>
                    </div>
                    <div class="op1">
                        <label>Seguidores</label>
                        <h1>${usuario.followers}</h1>
                    </div>
                    <div  class="op2">
                        <label>Seguindo</label>
                        <h1> ${usuario.following}</h1>
                    </div>
                   
                </div> 
                <div id ="foto">
                <img src = "${usuario.foto}" >
            </div>`;
    }
}