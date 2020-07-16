class Repositorio {
    constructor(nome) {
        this._nome = nome;
    };

    retornaRepositorio() {
        return {
            nome: this._nome
        };
    };
};