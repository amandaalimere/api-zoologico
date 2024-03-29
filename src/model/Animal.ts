/**
 * Classe que representa um Animal.
 */
export class Animal {
    // Propriedades privadas que armazenam informações sobre o animal.
    private nome: string;
    private idade: number;
    private genero: string;

    /**
     * Construtor da classe Animal.
     * @param _nome O nome do animal.
     * @param _idade A idade do animal.
     * @param _genero O gênero do animal.
     */
    constructor(_nome: string, _idade: number, _genero: string) {
        // Inicializa as propriedades do animal com os valores fornecidos.
        this.nome = _nome;
        this.idade = _idade;
        this.genero = _genero;
    }

    /**
     * Obtém o nome do animal.
     * @returns O nome do animal.
     */
    public getNome(): string {
        return this.nome;
    }

    /**
     * Define o nome do animal.
     * @param nome O nome a ser atribuído ao animal.
     */
    public setNome(nome: string): void {
        this.nome = nome;
    }

    /**
     * Obtém a idade do animal.
     * @returns A idade do animal.
     */
    public getIdade(): number {
        return this.idade;
    }

    /**
     * Define a idade do animal.
     * @param idade A idade a ser atribuída ao animal.
     */
    public setIdade(idade: number): void {
        this.idade = idade;
    }

    /**
     * Obtém o gênero do animal.
     * @returns O gênero do animal.
     */
    public getGenero(): string {
        return this.genero;
    }

    /**
     * Define o gênero do animal.
     * @param genero O gênero a ser atribuído ao animal.
     */
    public setGenero(genero: string): void {
        this.genero = genero;
    }
}