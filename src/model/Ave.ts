import { Animal } from "./Animal";
import { DatabaseModel } from "./DatabaseModel";

const database = new DatabaseModel().pool;
/**
 * Representa uma ave no zoológico, que é uma subclasse de Animal.
 */
export class Ave extends Animal {
    /**
     * A envergadura da ave.
     */
    private envergadura: string;

    /**
     * Cria uma nova instância de Ave.
     * 
     * @param _nome O nome da ave.
     * @param _idade A idade da ave.
     * @param _genero O gênero da ave.
     * @param _envergadura A envergadura da ave.
     */
    constructor(_nome: string, 
                _idade: number, 
                _genero: string, 
                _envergadura: string) {
        super(_nome, _idade, _genero);
        this.envergadura = _envergadura;
    }

    /**
     * Obtém a envergadura da ave.
     * 
     * @returns A envergadura da ave.
     */
    public getEnvergadura(): string {
        return this.envergadura;
    }

    /**
     * Define a envergadura da ave.
     * 
     * @param _envergadura A envergadura a ser atribuída à ave.
     */
    public setEnvergadura(_envergadura: string): void {
        this.envergadura = _envergadura;
    }

    static async listarAves() {
        const listaDeAves: Array<Ave> = [];
        try {
            const queryReturn = await database.query(`SELECT * FROM ave`);
            queryReturn.rows.forEach(ave => {
                listaDeAves.push(ave);
            });

            // só para testar se a lista veio certa do banco
            console.log(listaDeAves);

            return listaDeAves;
        } catch (error) {
            console.log('Erro no modelo');
            console.log(error);
            return "error";
        }
    }

    static async cadastrarAve(ave: Ave): Promise<any> {
        try {
            let insertResult = false;
            await database.query(`INSERT INTO ave (nome, idade, genero, envergadura)
                VALUES
                ('${ave.getNome().toUpperCase()}', ${ave.getIdade()}, '${ave.getGenero().toUpperCase()}', '${ave.getEnvergadura().toUpperCase()}');
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