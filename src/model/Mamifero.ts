import { Animal } from "./Animal";
import { DatabaseModel } from "./DatabaseModel";

const database = new DatabaseModel().pool;

/**
 * Classe que representa um Mamífero, uma extensão da classe Animal.
 */
export class Mamifero extends Animal {

    /**
     * Propriedade privada que armazena a raça do mamífero.
     */
    private raca: string;

    /**
     * Construtor da classe Mamifero.
     * @param _raca A raça do mamífero.
     * @param _nome O nome do mamífero.
     * @param _idade A idade do mamífero.
     * @param _genero O gênero do mamífero.
     */
    constructor(_raca: string, _nome: string, _idade: number, _genero: string) {
        // Chama o construtor da classe pai (Animal) para inicializar as propriedades básicas.
        super(_nome, _idade, _genero);
        
        // Inicializa a propriedade específica para Mamifero.
        this.raca = _raca;
    }

    /**
     * Obtém a raça do mamífero.
     * @returns A raça do mamífero.
     */
    public getRaca(): string {
        return this.raca;
    }

    /**
     * Define a raça do mamífero.
     * @param raca A raça a ser atribuída ao mamífero.
     */
    public setRaca(raca: string): void {
        this.raca = raca;
    }

    static async listarMamiferos() {
        const listaDeMamiferos: Array<Mamifero> = [];
        try {
            const queryReturn = await database.query(`SELECT * FROM  repti`);
            queryReturn.rows.forEach(reptil => {
                listaDeMamiferos.push(reptil);
            });

            // só pra testar se a lista veio certa do banco
            console.log(listaDeMamiferos);

            return listaDeMamiferos;
        } catch (error) {
            console.log('Erro no modelo');
            console.log(error);
            return "error";
        }
    }
    static async cadastrarMamifero(mamifero: Mamifero): Promise<any> {
        try {
            let insertResult = false;
            await database.query(`INSERT INTO mamifero (nome, idade, genero, raca)
                VALUES
                ('${mamifero.getNome().toUpperCase()}', ${mamifero.getIdade()}, '${mamifero.getGenero().toUpperCase()}', '${mamifero.getRaca().toUpperCase()}');
            `).then((result) => {
                if(result.rowCount != 0) {
                    insertResult = true;
                }
            });
            return insertResult;
        } catch(error) {
            return error;
        }
    }
}