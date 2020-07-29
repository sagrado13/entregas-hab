"use strict";

const binary = 1000;
const string = binary.toString();
const copyString = string.split(``);

function binaryConverter(copyString) {
  let result = 0;
  for (let i = copyString.length - 1; i >= 0; i--) {
    if (copyString[copyString.length - 1 - i] === `1`) {
      result += 2 ** [i];
    } else if (copyString[i] === `0`) {
      result += 0;
    }
  }
  return result;
}

console.log(binaryConverter(copyString));
