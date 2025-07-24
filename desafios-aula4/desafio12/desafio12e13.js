function gerarNumAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(gerarNumAleatorio(1, 10));
console.log(gerarNumAleatorio(1, 1000));