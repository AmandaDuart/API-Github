class RepositorioView {
    constructor() {
        throw new Error("Erro não instanciado")
    }

    static templateRepositorio(repositorio) {
        return `
                <li>
                    <h1>${repositorio.nome}</h1>
                </li>
               `;
    }
}