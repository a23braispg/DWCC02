function esNumeroPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i * i <= numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Introduce un número: ", function (input) {
    const numero = parseInt(input);
    if (esNumeroPrimo(numero)) {
        console.log(`${numero} es un número primo`);
    } else {
        console.log(`${numero} no es un número primo`);
    }
    rl.close();
});
