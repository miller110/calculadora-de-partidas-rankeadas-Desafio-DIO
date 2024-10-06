const prompt = require('prompt-sync')();

function classifyRanked(victories, defeats) {
    let level = '';
    let rankedCount = victories - defeats;

    if (rankedCount < 10) {
        level = 'Ferro';
    } else if (rankedCount >= 11 && rankedCount <= 20) {
        level = 'Bronze';
    } else if (rankedCount >= 21 && rankedCount <= 50) {
        level = 'Prata';
    } else if (rankedCount >= 51 && rankedCount <= 80) {
        level = 'Ouro';
    } else if (rankedCount >= 81 && rankedCount <= 90) {
        level = 'Diamante';
    } else if (rankedCount >= 91 && rankedCount <= 100) {
        level = 'Lendário';
    } else if (rankedCount >= 101) {
        level = 'Imortal';
    }

    return `O Herói tem um saldo de ${rankedCount} vitórias e está no nível ${level}`;
}

function main() {
    let victories = parseInt(prompt('Digite o número de vitórias: '));
    let defeats = parseInt(prompt('Digite o número de derrotas: '));

    while(true){
        if (isNaN(victories, defeats)) {
            console.log('Erro: Por favor, digite apenas números inteiros');
            continue;
        }
        break;
    }

    while(true) {
        console.log('\n**************************************************************');
        console.log(`-------------- Vitórias: ${victories} | Derrotas: ${defeats} --------------`);
        console.log('1. Calcular o nível \n2. Adicionar vitória \n3. Adicionar derrota \n4. Sair');
        console.log('**************************************************************');

        let option = parseInt(prompt('Escolha uma opção: '));

        switch (option) {
            case 1:
                console.log(classifyRanked(victories, defeats));
                return;
            case 2:
                victories += 1;
                console.log('Vitória adicionada!');
                break;
            case 3:
                defeats += 1;
                console.log('Derrota adicionada!');
                break;
            case 4:
                console.log('Saindo do sistema...');
                return;
            default:
                console.log('Erro: Por favor, digite um número de 1 a 4');
                continue;
        }
    }
}

main();