"use strict";

const body = document.body;
const clock = document.querySelector("header h1");
const greet = document.querySelector("header h2");

// añade un 0 inicial al número si es menor que 10
function format(number) {
  if (number < 10) {
    return `0` + number;
  } else {
    return number;
  }
}

//Función para crear el reloj
function writeClock() {
  const now = new Date();
  const hour = format(now.getHours());
  const minute = format(now.getMinutes());
  const second = format(now.getSeconds());
  // const milliseconds = format(now.getMilliseconds());

  //Para que los dos puntos parpadeen
  const separator = second % 2 > 0 ? ":" : " ";

  clock.textContent = `
  ${hour}${separator}${minute}${separator}${second}
  `;

  // Creamos una función que dependiendo en que parte del día estamos nos devuelva un saludo y un fondo distinto
  let greeting;
  let time;

  function getGreeting() {
    if (hour <= 6 || hour >= 22) {
      greeting = "Buenas noches";
      time = "night";
    } else if (hour <= 12) {
      greeting = "Buenos dias";
      time = "morning";
    } else {
      greeting = "Buenas tardes";
      time = "afternoon";
    }
  }

  getGreeting();
  greet.textContent = greeting;
  body.setAttribute("class", time);

  //Miramos si hay una alarma creada
  const header = clock.parentElement;
  const alarmHour = header.dataset.hour;
  const alarmMinute = header.dataset.minute;
  const alarmSecond = header.dataset.second;

  // Comprobamos que la alarma coincida con la hora actual, y si coincide detenemos el reloj y mostramos alarma en pantalla
  function alarm() {
    if (
      Number(alarmHour) === Number(hour) &&
      Number(alarmMinute) === Number(minute) &&
      Number(alarmSecond) === Number(second)
    ) {
      clearInterval(interval);
      body.setAttribute("class", "alarm");
      greet.textContent = "ALARM !!!";
      clock.textContent = `
    ${hour}:${minute}:${second}
  `;
    }
  }

  alarm();
}

writeClock();
const interval = setInterval(writeClock, 1000);
