calculatorPro();
salidaCalculator();

function calculatorPro() {
    const userNumbers = getNumbers();
    getResults();

    function getNumbers() {
        let arrayOfNumbersString = [];
        let number;
        do {
            number = prompt(
                "Introduce cifras para operar. Cancelar para parar. Si cancelas la segunda cifra, hace la raiz cuadrada de la primera."
            );
            arrayOfNumbersString.push(number);
            if (isNaN(number)) {
                alert("Not a number!.");
            } else if (arrayOfNumbersString[1] === null) {
                console.log(
                    "La raiz cuadrada de tu cifra es: " +
                        Math.sqrt(arrayOfNumbersString[0]).toFixed(3)
                );
                console.log("¡Hasta pronto! :)");
                break;
            }
        } while (number !== null);
        arrayOfNumbersString.pop();
        return arrayOfNumbersString.map(Number);
    }

    function getResults() {
        let arrayOfResults = [];
        let suma = 0;
        let valorInicialResta = userNumbers[0] * 2;
        if (userNumbers.length > 1) {
            for (let i = 0; i < userNumbers.length; i++) {
                suma += userNumbers[i];
            }

            let resta = userNumbers.reduce(
                (previousValue, currentValue) => previousValue - currentValue,
                valorInicialResta
            );

            let multiplicacion = userNumbers.reduce(
                (previousValue, currentValue) => previousValue * currentValue
            );

            let division = userNumbers.reduce(
                (previousValue, currentValue) => previousValue / currentValue
            );

            arrayOfResults.push(
                suma,
                resta,
                multiplicacion.toFixed(3),
                division.toFixed(3)
            );

            console.log("Los resultados obtenidos son:");
            console.log("El resultado de la suma es " + arrayOfResults[0]);
            console.log("El resultado de la resta es " + arrayOfResults[1]);
            console.log(
                "El resultado de la multiplicación es " + arrayOfResults[2]
            );
            console.log("El resultado de la división es " + arrayOfResults[3]);
            console.log("¡Hasta pronto! :)");
        }
    }
}
function salidaCalculator() {
    let salida;
    do {
        salida = prompt("¿Quieres hacer nuevas operaciones? y/n");
        if (salida === "y") {
            calculatorPro();
        } else {
            console.log("Bye! :D");
        }
    } while (salida === "y");
}
