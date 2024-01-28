var tentativa: number = 1
var esquerda: number = 0;

var nomes: string[] = [
    "Alice", "Ana", "André", "Antônio", "Beatriz", "Bernardo", "Bianca", "Bruno",
    "Camila", "Carlos", "Carolina", "Cauã", "Cecília", "César", "Clara", "Daniel",
    "Daniela", "Davi", "Débora", "Diego", "Eduardo", "Elena", "Elias", "Emily",
    "Enzo", "Esther", "Fernanda", "Fernando", "Flávia", "Francisco", "Gabriel", "Gabriela",
    "Giovanni", "Giovanna", "Guilherme", "Helena", "Henrique", "Isabela", "Isaac", "Isadora",
    "João", "Júlia", "Juliano", "Laura", "Leonardo", "Letícia", "Lívia", "Lucas",
    "Luísa", "Luan", "Lúcia", "Luiz", "Luna", "Manuela", "Marcelo", "Mariana",
    "Mário", "Mateus", "Miguel", "Natália", "Nicolas", "Nilso", "Nina", "Olivia", "Otávio",
    "Pablo", "Pâmela", "Pedro", "Rafael", "Rebeca", "Renan", "Renata", "Ricardo",
    "Roberta", "Rodrigo", "Sabrina", "Samuel", "Sara", "Sérgio", "Sophia", "Thiago",
    "Valentina", "Vicente", "Vitória", "William", "Yasmin", "Yuri", "Zoe",
    "Adriana", "Alexandre", "Amanda", "Andressa", "Arthur", "Bárbara", "Caio", "Catarina",
    "Christian", "Cláudia", "Cristiano", "Diana", "Dário", "Elaine", "Emanuel", "Fabiana",
    "Felipe", "Fernandina", "Gustavo", "Giselle", "Hugo", "Isabel", "Igor", "Janaína",
    "José", "Juliana", "Kaique", "Karen", "Leandro", "Larissa", "Lorenzo", "Lorena",
    "Marcela", "Matheus", "Mirella", "Nathan", "Nathalia", "Osvaldo", "Patrícia", "Paulo",
    "Priscila"
];

function buscaBinaria(nomes: string[], nome: string): number {
    let direita = nomes.length - 1;
    while (esquerda <= direita) {
        let meio = Math.floor((esquerda + direita) / 2);
        let aposta = nomes[meio];

        if (aposta === nome) {
            console.log(`Foram necessários ${tentativa} palpites até encontrar o nome ${nome}`);
            return meio;
        }
        tentativa += 1
        if (meio > nomes.indexOf(nome, esquerda)) {
            direita = meio - 1;
        } else {
            esquerda = meio + 1;
        }
    }
    return -1;
}

buscaBinaria(nomes, "Mateus");