"use strict";

let firstNumber, secondNumber, result;
let sign = `+`;
firstNumber = prompt("Introduce el primer numero");
sign = prompt("Introduce el signo de la operacion");
secondNumber = prompt("Introduce el segundo numero");

switch (sign) {
  case `+`:
    result = +firstNumber + +secondNumber;
    console.log(`El resultao es ` + result);
    break;
  case `-`:
    result = firstNumber - secondNumber;
    console.log(`El resultado es ` + result);
    break;
  case `*`:
    result = firstNumber * secondNumber;
    console.log(`El resultado es ` + result);
    break;
  case `/`:
    result = firstNumber / secondNumber;
    console.log(`El resultado es ` + result);
    break;
  case `**`:
    result = firstNumber ** secondNumber;
    console.log(`El resultado es ` + result);
  default:
    console.error(
      `Operacion incorrecta, por favor seleccione suma, resta, multiplicacion, division o potencia`
    );
}
