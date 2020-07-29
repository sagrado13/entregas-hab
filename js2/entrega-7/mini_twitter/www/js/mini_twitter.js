"use strict";

// Selecciono todos los elementos que voy necesitar

const twittear = document.querySelector("form");
const tweetText = document.querySelector(`input[name="tweet"]`);
const listTweets = document.querySelector("ul#tweet");

// Creo un array para ir acumulando los tweets localmente

let tweets = [];

const localStorage = JSON.parse(window.localStorage.getItem("tweets"));

if (localStorage) {
  tweets = localStorage;
}

twittear.addEventListener("submit", (event) => {
  event.preventDefault();

  const text = tweetText.value;

  // Compruebo la longitud del tweet y si no es 0 o mayor de 250 lo añado con la fecha y hora

  if (text.length === 0) {
    alert(`Escribe algo`);
  } else if (text.length > 250) {
    alert(`No puedes pasar de 250 caracteres`);
  } else {
    const now = new Date();
    const dateTweet = `${format(now.getDate())}/${format(
      now.getMonth() + 1
    )}/${now.getFullYear()} a las ${format(now.getHours())}:${format(
      now.getMinutes()
    )}`;

    tweets.unshift({
      text: text,
      date: dateTweet,
    });

    window.localStorage.setItem("tweets", JSON.stringify(tweets));

    listTweets.value = "";
    tweetText.value = "";
    postTweets();
  }
});

// Función para publicar twets almacenados

function postTweets() {
  listTweets.innerHTML = "";
  let index = 0;

  const fragment = document.createDocumentFragment();

  for (const tweet of tweets) {
    const li = document.createElement("li");
    const p = document.createElement("p");
    const time = document.createElement("time");
    const footer = document.createElement("footer");
    const remove = document.createElement("button");
    const line = document.createElement("hr");

    p.textContent = tweet.text;
    time.textContent = tweet.date;
    remove.textContent = "Borrar";
    remove.setAttribute("class", "delete");
    remove.setAttribute("data-index", index);

    footer.append(time);
    footer.append(remove);

    li.append(p);
    li.append(footer);
    li.append(line);

    fragment.append(li);
    index++;

    listTweets.append(fragment);
  }
}

// Relacionamos el botón delete con el index del tweet, para borrar el que corresponde.

listTweets.addEventListener("click", (event) => {
  const target = event.target;
  if (target.matches("button.delete")) {
    const index = target.getAttribute("data-index");

    tweets.splice(index, 1);

    window.localStorage.setItem("tweets", JSON.stringify(tweets));
    postTweets();
  }
});

postTweets();

// Función para añadir un cero delante de los números menores de 10

function format(number) {
  if (number < 10) {
    return `0` + number;
  } else {
    return number;
  }
}
