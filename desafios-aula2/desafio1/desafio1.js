let usuarioInput = null;
while (true) {
    usuarioInput = prompt('Qual é o dia da semana?').trim();
    console.log(`Input do usuário: ${usuarioInput}`);
    if (usuarioInput) {
        usuarioInputFormatado = usuarioInput.toLocaleLowerCase().replace('-', '').replace('feira', '');
        console.log(`Input do usuário formatado: ${usuarioInputFormatado}`);
        if (['domingo', 'sábado'].includes(usuarioInputFormatado)) {
            alert('Bom final de semana!');
            break;
        }
        else if (['segunda', 'terça', 'quarta', 'quinta', 'sexta'].includes(usuarioInputFormatado)) {
            alert('Boa semana!');
            break;
        }
    }
    else if (!usuarioInput) {
        alert('Digite um dia da semana.');
    }
}

