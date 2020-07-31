<template>
  <div class="about">
    <vue-headful title="About" />
    <h2>Tools</h2>
    <table id="about">
      <tr>
        <th>Used Tools</th>
        <th @click="sweetalertOn()">
          <button>URL</button>
        </th>
      </tr>
      <tr>
        <td>Vue.js</td>
        <td>
          <a href="https://vuejs.org/" target="_blank">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png"
              alt="Logo Vue"
            />
          </a>
        </td>
      </tr>
      <tr>
        <td>Api last.fm</td>
        <td>
          <a href="https://www.last.fm/api/?lang=es" target="_blank">
            <img
              src="data:image/png;base64,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"
              alt="Logo last.fm"
            />
          </a>
        </td>
      </tr>
      <tr>
        <td>Axios</td>
        <td>
          <a href="https://www.npmjs.com/package/axios" target="_blank">
            <img
              src="https://www.luisllamas.es/wp-content/uploads/2019/05/axios.png"
              alt="Logo Axios"
            />
          </a>
        </td>
      </tr>
      <tr>
        <td>Sweetalert2</td>
        <td>
          <a href="https://sweetalert2.github.io/" target="_blank">
            <img
              src="https://camo.githubusercontent.com/1181c09308526f74624415e0127b57478d1819fe/68747470733a2f2f7261772e6769746875622e636f6d2f7377656574616c657274322f7377656574616c657274322f6d61737465722f6173736574732f7377616c322d6c6f676f2e706e67"
              alt="Logo Sweetalert2"
            />
          </a>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
// Importamos Sweetalert2
import Swal from "sweetalert2";

export default {
  name: "About",
  // Función donde configuramos el sweetalert2
  methods: {
    sweetalertOn() {
      Swal.fire({
        title: "Más info...",
        text:
          "Haz click en los logos para saber más de las herramientas utilizadas",
        icon: "info",
        confirmButtonText: "OK"
      });
    }
  }
};
</script>

<style scoped>
button {
  font-size: 2.5rem;
  box-shadow: 3px 3px 15px green inset;
}

button:hover {
  font-size: 3rem;
  box-shadow: 3px 3px 15px goldenrod inset;
}

img {
  width: 100px;
}
</style>