function saldoVitoria(vitoria, derrota) {
    return vitoria - derrota;
}

function classificarJogador(saldo) {
    if (saldo < 10) {
        return "Ferro";
    } else if (saldo >= 11 && saldo <= 20) {
        return "Bronze";
    } else if (saldo >= 21 && saldo <= 50) {
        return "Prata";
    } else if (saldo >= 51 && saldo <= 80) {
        return "Ouro";
    } else if (saldo >= 81 && saldo <= 90) {
        return "Diamante";
    } else if (saldo >= 91 && saldo <= 100) {
        return "Lendário";
    } else {
        return "Imortal";
    }
}

// Usando as funções:
let vitorias = 140;
let derrotas = 5;
let saldoTotal = saldoVitoria(vitorias, derrotas);
let nivel = classificarJogador(saldoTotal);

console.log(`O jogador tem saldo de ${saldoTotal} vitórias e está no nível ${nivel}.`);