"use strict";
let letters = `Hoy es un dia estupendo y fantastico`;

function letterCount(str) {
  letters = str.split(` `);
  let longest = letters[0];
  letters.map((letter) => {
    if (letter.length > longest.length) {
      longest = letter;
    }
  });
  return longest;
}

console.log(letterCount(letters));
