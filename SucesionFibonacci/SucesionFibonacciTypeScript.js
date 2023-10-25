var valor = [0, 1];
var i = 2;

while (i < 10) {
    var a = valor[i - 1];
    var b = valor[i - 2];
    valor.push(a + b);
    i++;
}

console.log("Los 10 primeros n\u00FAmeros de la sucesi\u00F3n de Fibonacci son: ".concat(valor.join(', ')));
