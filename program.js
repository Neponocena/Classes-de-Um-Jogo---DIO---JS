class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = "ataque desconhecido";

        switch (this.tipo.toLowerCase()) {
            case "mago":
                ataque = "Magia";
                break;
            case "guerreiro":
                ataque = "Espada";
                break;
            case "monge":
                ataque = "Artes Marciais";
                break;
            case "ninja":
                ataque = "Shuriken";
                break;
            default:
                break;
        }

        console.log(`${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
}


const nome = prompt("Nome do Heroi:");
const idade = parseInt(prompt("Idade do Heroi:"));
const tipo = prompt(`Qual o tipo do Heroi?
- guerreiro
- mago
- ninja
- monge`);

const heroi = new Heroi(nome, idade, tipo);

console.log("=====Ataque do Heroi=====");
heroi.atacar();
