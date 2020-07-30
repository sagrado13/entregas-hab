"use strict";

const os = require("os");
const chalk = require("chalk");

const total = os.totalmem() / 1000;
const free = os.freemem() / 1000;

function freeMem() {
  let result = (free * 100) / total;
  if (result < 15) {
    console.log(chalk`Tienes el {bgRed.white ${result.toFixed(2)}%} libre`);
  } else if (result > 15 && result < 50) {
    console.log(chalk`Tienes el {bgYellow.black ${result.toFixed(2)}%} libre`);
  } else {
    console.log(chalk`Tienes el {bgGreen.white ${result.toFixed(2)}%} libre`);
  }
}

freeMem();
