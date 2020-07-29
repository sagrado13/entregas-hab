"use strict";

const temperaturas = [
  {
    city: "A coruña",
    min: 17,
    max: 23,
  },
  {
    city: "Ferrol",
    min: 15,
    max: 27,
  },
  {
    city: "Lugo",
    min: 12,
    max: 31,
  },
  {
    city: "Ourense",
    min: 18,
    max: 35,
  },
  {
    city: "Pontevedra",
    min: 18,
    max: 29,
  },
  {
    city: "Antártida",
    min: -50,
    max: -10,
  },
];

/*
  <table>
    <caption>Temperaturas</caption>
    <thead>
      <th>Ciudad</th>
      <th>Mínima</th>
      <th>Máxima</th>
    </thead>
    <tr>
      <td>A Coruña</td>
      <td>17</td>
      <td>23</td>
    </tr>
    tr....
  </table>

*/

// Seleccionamos los elementos donde vamos a meter la tabla

const section = document.querySelector("section.temp");

// Creamos los elementos necesarios
const table = document.createElement("table");
const caption = document.createElement("caption");
const thead = document.createElement("thead");

caption.textContent = "Temperaturas";
table.append(caption);

// Creamos la cabecera de la tabla

thead.innerHTML = `
  <th>Ciudad</th>
  <th>Mínima</th>
  <th>Máxima</th>
`;

table.append(thead);

// Recorremos el array

for (const temperatura of temperaturas) {
  // Creamos los elementos que componen la tabla y el tr
  const tr = document.createElement("tr");
  const city = document.createElement("td");
  const minTemp = document.createElement("td");
  const maxTemp = document.createElement("td");
  city.textContent = temperatura.city;
  minTemp.textContent = temperatura.min;
  minTemp.classList.toggle(classTemp(temperatura.min));
  maxTemp.textContent = temperatura.max;
  maxTemp.classList.toggle(classTemp(temperatura.max));

  // Metemos las columnas y el tr de la tabla
  tr.append(city);
  tr.append(minTemp);
  tr.append(maxTemp);
  table.append(tr);
}

section.append(table);

let level;
function classTemp(temperatura) {
  if (temperatura < 4) {
    return "lower";
  } else if (temperatura < 15) {
    return "low";
  } else if (temperatura < 25) {
    return "medium";
  } else if (temperatura < 30) {
    return "high";
  } else {
    return "higher";
  }
}
