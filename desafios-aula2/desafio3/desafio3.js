function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
alert(`------------ Bem vindo ao gerador de números aleatórios! ------------
    \nSerá gerado um número aleatório de 0 a 200 que sera sua pontuação.\nSe sua pontuação for igual ou maior que 100, você vence.\nPelo contrário, você perde, e poderá tentar mais vezes.`);
let pergunta = undefined;
let pontuacao = undefined;
let tentativa = 1;
while (true) {
    pontuacao = numeroAleatorio(0, 200);
    console.log(`Pontuação: ${pontuacao}\nTentativas: ${tentativa}`);
    if (pontuacao < 100) {
        alert(`Você perdeu... Sua pontuação foi de ${pontuacao} pontos.`);
        while (true) {
            pergunta = prompt('Gostaria de tentar de novo? [S/N]').trim().toLocaleUpperCase()[0];
            console.log(`Pergunta: ${pergunta}`);
            if (pergunta === 'N' || pergunta === 'S') {
                break;
            }
            else {
                alert('Por favor, digite apenas S ou N.');
            }
        }
        if (pergunta === 'N') {
            alert(`Saindo do jogo...`)
            break;
        }
        else if (pergunta === 'S') {
            alert('Resetando o jogo e gerando outro número...');
            tentativa++;
            continue;
        }    
}
    else {
        alert(`Você venceu! Sua pontuação foi de ${pontuacao} pontos.\nForam ${tentativa} tentativa(s) até vencer.`);
        break;
    }
}
alert('Obrigado por jogar!');