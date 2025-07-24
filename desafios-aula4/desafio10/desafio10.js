let notaInput = undefined;
while (true) {
    notaInput = prompt(`Digite sua nota`);
    notaInput = notaInput !== null ? notaInput : undefined;
    if (notaInput === undefined || isNaN(notaInput) || notaInput === '') {
        alert(`Por favor, digite uma nota válida.`);
        continue;
    }
    else {
        nota = parseFloat(notaInput);
        if (nota > 10 || nota < 0) {
            alert(`Por favor, digite uma nota entre 0 e 10.`);
            continue;
        }
        if (nota > 7) {
            console.log(`Aprovado!`);
        }
        else {
            console.log(`Reprovado!`);
        }
    }
    break;
}   

