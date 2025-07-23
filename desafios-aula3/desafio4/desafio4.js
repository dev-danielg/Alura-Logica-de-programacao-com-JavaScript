function verificarInteiro(value) {
    return Math.trunc(value) === value;
}

let numeroInput = undefined;
while (true) {
    numeroInput = parseInt(prompt('Digite um número inteiro'));
    numeroInput = numeroInput != null ? numeroInput : undefined;
    if (numeroInput === undefined) {
        alert('Por favor, não deixe os espaços em branco.');
    }
    else {
        if (verificarInteiro(numeroInput)) {
            if (numeroInput <= 0) {
                alert('Por favor, digite um número maior que 0.');
                continue;
            }
            for (let i = 0; i < numeroInput + 1; i++) {
                console.log(`Número ${i}`);
            }
            break;
        }
        else {
            alert('Por favor, digite um número inteiro.');
        }
    }
}