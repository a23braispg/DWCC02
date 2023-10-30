const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("¿Quieres usar 'if' o 'switch'? ", function (input) {
    if (input.toLowerCase() === 'if') {
        rl.question("Introduce tu edad: ", function (input) {
            const edad = parseInt(input);
            if (isNaN(edad)) {
                console.log("El caracter introducido no es un numero");
            } else {
                if (edad >= 0 && edad <= 12) {
                    console.log("Neno");
                } else if (edad >= 13 && edad <= 18) {
                    console.log("Adolescente");
                } else if (edad >= 19 && edad <= 30) {
                    console.log("Joven");
                } else if (edad >= 31 && edad <= 64) {
                    console.log("Adulto");
                } else if (edad >= 65 && edad <= 100) {
                    console.log("Jubilado");
                } else {
                    console.log("Edad fuera de rango");
                }
            }
            rl.close();
        });
    } else if (input.toLowerCase() === 'switch') {
        rl.question("Introduce tu edad: ", function (input) {
            const edad = parseInt(input);
            if (isNaN(edad)) {
                console.log("El caracter introducido no es un numero");
            } else {
                switch (true) {
                    case (edad >= 0 && edad <= 12):
                        console.log("Neno");
                        break;
                    case (edad >= 13 && edad <= 18):
                        console.log("Adolescente");
                        break;
                    case (edad >= 19 && edad <= 30):
                        console.log("Joven");
                        break;
                    case (edad >= 31 && edad <= 64):
                        console.log("Adulto");
                        break;
                    case (edad >= 65 && edad <= 100):
                        console.log("Jubilado");
                        break;
                    default:
                        console.log("Edad fuera de rango");
                        break;
                }
            }
            rl.close();
        });
    } else {
        console.log("Debes elegir 'if' o 'switch'");
        rl.close();
    }
});
