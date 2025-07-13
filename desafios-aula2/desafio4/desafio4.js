function saldoAleatorio(min, max) {
    const saldoGerado =  Math.random() * (max - min + 1) + min;
    const saldoGeradoFormatado = saldoGerado.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
    return saldoGeradoFormatado;
}

saldo = saldoAleatorio(0, 10000);
alert(`O saldo na sua conta é de: ${saldo}`);