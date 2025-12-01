const readline = require('readline');
const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


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
leitor.question("👋 Olá! Qual é o nome do seu Herói? ", (nomeDigitado) => {
    
    
    leitor.question(`Muito prazer, ${nomeDigitado}! Agora, digite a quantidade de XP: `, (xpDigitado) => {
        
        
       let xp = parseInt(xpDigitado);
        
        
        if (isNaN(xp)) {
            console.log("❌ Ops! Você precisa digitar um número para o XP.");
        } else {
            
            let nivel = calcularNivel(xp);

            
            console.log("\n------------------------------------------------");
            console.log(`⚔️  Saudações, nobre ${nomeDigitado}!`);
            console.log(`   Com ${xp} pontos de experiência,`);
            console.log(`   O Herói de nome **${nomeDigitado}** está no nível de **${nivel}**`);
            console.log("------------------------------------------------\n");
        }

        
        leitor.close();
    });
});