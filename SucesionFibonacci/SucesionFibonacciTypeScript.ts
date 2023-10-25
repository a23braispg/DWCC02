const valor: number[] = [0, 1];
let i: number = 2;

while (i < 10) {
    const a: number = valor[i - 1];
    const b: number = valor[i - 2];
    valor.push(a + b);
    i++;
}

console.log(`Los 10 primeros números de la sucesión de Fibonacci son: ${valor.join(', ')}`);
