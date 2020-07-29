"use strict";

let firstNumber, secondNumber, sign, result;
firstNumber = +prompt(`Introduce el primer numero`);
sign = prompt(`Introduce el signo de la operacion`);
secondNumber = +prompt(`Introduce el segundo numero`);

if (sign === `+`) {
  result = firstNumber + secondNumber;
  console.log(`El resultado es ` + result);
} else if (sign === `-`) {
  result = firstNumber - secondNumber;
  console.log(`El resultado es ` + result);
} else if (sign === `*`) {
  result = firstNumber * secondNumber;
  console.log(`El resultado es ` + result);
} else if (sign === `/`) {
  result = firstNumber / secondNumber;
  console.log(`El resultado es ` + result);
} else if (sign === `**`) {
  result = firstNumber ** secondNumber;
  console.log(`El resultado es ` + result);
} else {
  console.error(
    `Operacion incorrecta, por favor seleccione suma, resta, multiplicacion, division o potencia`
  );
}
