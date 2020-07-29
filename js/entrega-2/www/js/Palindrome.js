"use strict";

let str = `Anne, I vote more cars race Rome-to-Vienna`;
str = str.toLowerCase();
for (let i = 0; i < str.length; i++) {
  str = str.replace(` `, ``);
  str = str.replace(`-`, ``);
  str = str.replace(`,`, ``);
}
console.log(str);

function palindrome(word) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== word[word.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(palindrome(str));

/* var re = /apples/gi;
var str = "Apples are round, and apples are juicy.";
var newstr = str.replace(re, "oranges");
console.log(newstr);
 */
