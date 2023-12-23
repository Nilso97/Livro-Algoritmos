function buscaBinaria(listaDeNomes, nome) {
    let attempt = 1
    let baixo = 0;
    let alto = listaDeNomes.length - 1;

    while (baixo <= alto) {
        let meio = Math.floor((baixo + alto) / 2);
        let aposta = listaDeNomes[meio];

        if (aposta === nome) {
            console.log(`Foram necessários ${attempt} palpites até encontrar o nome ${nome}`);
            return meio;
        }

        attempt += 1

        if (meio > listaDeNomes.indexOf(nome, baixo)) {
            alto = meio - 1;
        } else {
            baixo = meio + 1;
        }
    }
    return -1;
}

listaDeNomes = [
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
console.log(buscaBinaria(listaDeNomes, "Amanda"));