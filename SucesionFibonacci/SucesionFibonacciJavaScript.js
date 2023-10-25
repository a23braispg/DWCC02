const valor = [0, 1];
let i = 2;

while (i < 10) {
    const a = valor[i - 1];
    const b = valor[i - 2];
    valor.push(a + b);
    i++;
}

console.log(`Los 10 primeros números de la sucesion de Fibonacci son: `+valor.join(', '));

