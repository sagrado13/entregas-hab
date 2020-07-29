"use strict";

let numberThrown = 0;
let totalPoints = 0;

for (let i = 1; totalPoints < 50; i++) {
  let dice = Math.round(Math.random() * 5 + 1);
  totalPoints += dice;
  numberThrown++;
  if (totalPoints < 50) {
    console.log(
      `Tirada ${numberThrown}: ha salido un ${dice}. Tienes un total de ${totalPoints} puntos.`
    );
  } else {
    console.log(
      `¡Enhorabuena, ha salido un ${dice}! ¡Has ganado con un total de ${totalPoints} puntos!`
    );
  }
}
