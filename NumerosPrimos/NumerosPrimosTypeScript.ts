function esNumeroPrimo(numero: number): boolean {
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

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Introduce un número: ", function (input: string) {
    const numero: number = parseInt(input);

    if (esNumeroPrimo(numero)) {
        console.log(`${numero} es un número primo.`);
    } else {
        console.log(`${numero} no es un número primo.`);
    }

    readline.close();
});
