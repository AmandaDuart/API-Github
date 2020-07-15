 class UsuarioController {
     constructor() {
         throw new Error("Erro não instanciado");
     };

     static geraUsuario() {

         let requisicao = new XMLHttpRequest();
         requisicao.open("GET", `https://api.github.com/users/${textoUser}`);
         //console.log(userInput.value);

         requisicao.addEventListener("load", () => {
             if (requisicao.status == 200) {
                 let listaUsuarios = JSON.parse(requisicao.responseText);

                 let usuario = new Usuario(listaUsuarios.avatar_url, listaUsuarios.login, listaUsuarios.repos_url);

                 let usuarioGit = document.getElementById('usuarioGit');

                 usuarioGit.innerHTML = UsuarioView.templateUsuario(usuario.retornaUsuario());
                 console.log(usuario);

             }
         })

         requisicao.send();

     }

 }