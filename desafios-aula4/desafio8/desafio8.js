let numeroInput = undefined;
while (true) {
    numeroInput = prompt(`Digite um número`);
    console.log(numeroInput);
    numeroInput = numeroInput != null ? numeroInput : undefined;
    if (numeroInput === undefined || numeroInput === "" || isNaN(numeroInput)) {
        alert(`Por favor, digite um número.`);
        continue;
    }
    numero = Number(numeroInput);
    console.log(numero)
    if (numero < 0) {
        console.log(`Número negativo.`);
    }
    else if (numero > 0) {
        console.log(`Número positivo.`);
    }
    else {
        console.log(`Número 0.`);
    }
    break;
}

