"use strict";

const mariaTeam = (62 + 34 + 55) / 3;
const paulaTeam = (35 + 60 + 59) / 3;
const rebecaTeam = (40 + 39 + 63) / 3;

if (mariaTeam > paulaTeam && rebecaTeam) {
  console.log(`El equipo de Maria tiene mejor media ` + mariaTeam);
} else if (paulaTeam > rebecaTeam && mariaTeam) {
  console.log(`El equipo de Paula tiene mejor media ` + paulaTeam);
} else {
  console.log(`El equipo de Rebeca tiene mejor media ` + rebecaTeam);
}
