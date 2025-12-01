// Importamos o módulo 'readline' para ler dados do terminal
const readline = require('readline');

// Criamos a interface de entrada e saída
const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para calcular o nível (Lógica isolada)
function calcularNivel(xp) {
    if (xp < 1000) return "Ferro";
    else if (xp >= 1001 && xp <= 2000) return "Bronze";
    else if (xp >= 2001 && xp <= 5000) return "Prata";
    else if (xp >= 5001 && xp <= 7000) return "Ouro";
    else if (xp >= 7001 && xp <= 8000) return "Platina";
    else if (xp >= 8001 && xp <= 9000) return "Ascendente";
    else if (xp >= 9001 && xp <= 10000) return "Imortal";
    else return "Radiante";
}

// === Início da Interação ===

// 1. Pergunta o Nome
leitor.question("👋 Olá! Qual é o nome do seu Herói? ", (nomeDigitado) => {
    
    // 2. Pergunta o XP (dentro da resposta do nome para seguir a ordem)
    leitor.question(`Muito prazer, ${nomeDigitado}! Agora, digite a quantidade de XP: `, (xpDigitado) => {
        
        // Convertemos o texto digitado para número
        let xp = parseInt(xpDigitado);
        
        // Validamos se o usuário digitou um número válido
        if (isNaN(xp)) {
            console.log("❌ Ops! Você precisa digitar um número para o XP.");
        } else {
            // Chamamos a função para descobrir o nível
            let nivel = calcularNivel(xp);

            // 3. Exibimos a Saudação e o Resultado Final
            console.log("\n------------------------------------------------");
            console.log(`⚔️  Saudações, nobre ${nomeDigitado}!`);
            console.log(`   Com ${xp} pontos de experiência,`);
            console.log(`   O Herói de nome **${nomeDigitado}** está no nível de **${nivel}**`);
            console.log("------------------------------------------------\n");
        }

        // Encerramos o leitor para o programa finalizar
        leitor.close();
    });
});