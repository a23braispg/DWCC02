function esNumeroPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (var i = 2; i * i <= numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}
var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question("Introduce un número: ", function (input) {
    var numero = parseInt(input);
    if (esNumeroPrimo(numero)) {
        console.log("".concat(numero, " es un n\u00FAmero primo."));
    }
    else {
        console.log("".concat(numero, " no es un n\u00FAmero primo."));
    }
    readline.close();
});
