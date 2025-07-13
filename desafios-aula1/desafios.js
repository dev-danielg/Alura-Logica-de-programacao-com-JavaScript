alert('Boas vindas ao nosso site!');
let nome = 'Lua';
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;
let mensagemDeErro = 'Erro! Preencha todos os campos.';
while (true) {
    let nome = prompt('Digite seu nome').trim();
    let idade = parseInt(prompt('Digite sua idade'));
    if (!nome || !idade) {
        alert(mensagemDeErro);
    }
    else {
        let nomeFormatado = `${nome[0].toUpperCase()}${nome.slice(1)}`;
        if (idade < 18) {
            alert(`${nomeFormatado} não pode tirar a habilitação!`);
        }
        else if (idade >= 18) {
            alert(`${nomeFormatado} pode tirar a habilitação!`);
        }
        break
    }
    
}
