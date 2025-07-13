function verificarInteiro(value) {
    return Math.trunc(value) === value;
}

let numeroInput = undefined;
while (true) {
    numeroInput = parseInt(prompt('Digite um número inteiro'));
    numeroInput = numeroInput != null ? numeroInput : undefined
    if (numeroInput === undefined) {
        alert('Por favor, não deixe os espaços vazios.');
    }
    else {
        if (verificarInteiro(numeroInput)) {
            if (numeroInput < 0) {
                alert('Você digitou um número inteiro negativo.');
            }
            else {
                alert('Você digitou um número inteiro positivo.');
            }
            break;
        }
        else {
            alert('Por favor, digite um número inteiro.');
        }
        }
    }



