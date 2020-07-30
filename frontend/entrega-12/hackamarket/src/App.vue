<template>
  <div id="app">
    <div id="nav"></div>
    <!-- Declaramos componente menú -->
    <menucustom />
    <router-view />
    <!-- Declaramos componente loaderspinner -->
    <loaderspinner v-show="loading" />
    <!-- Declaramos componente footer -->
    <footercustom />
  </div>
</template>

<script>
// Importamos componente del menú
import menucustom from "@/components/MenuCustom.vue";
// Importamos componente del footer
import footercustom from "@/components/FooterCustom.vue";
// Importamos componente spinner
import loaderspinner from "@/components/LoaderSpinner.vue";

export default {
  name: "App",
  // Registramos los componentes
  components: {
    menucustom,
    footercustom,
    loaderspinner
  },
  // En Data se guardan la variable
  data() {
    return {
      loading: true
    };
  },
  // Función para dejar de mostrar spinner en medio segundo
  methods: {
    showLoading() {
      setTimeout(() => {
        this.loading = false;
      }, 500);
    }
  },
  created() {
    this.showLoading();
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html,
body {
  font-family: sans-serif;
  background: rgb(22, 22, 22);
}
#app {
  text-align: center;
  color: #2c3e50;
}

h1 {
  margin-top: 3rem;
  color: white;
  font-size: 1.5rem;
}

input {
  outline: 0;
  border-width: 0 0 3px;
  border-color: yellowgreen;
  margin-top: 1.5rem;
  padding: 0.2rem;
  width: auto;
  font-size: 0.9rem;
  text-align: center;
  background: rgb(22, 22, 22);
  color: white;
}

button {
  font-size: 0.7rem;
  border-radius: 20px;
  outline: 0;
  padding: 0.2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  box-shadow: 5px 5px 30px orangered inset;
  transition: all 0.4s;
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 0.3rem;
}

button:hover {
  cursor: pointer;
  transform: translateY(-6px);
  box-shadow: 5px 5px 30px yellowgreen inset;
}

/* MEDIA A PARTIR DE 700PX */
@media (min-width: 700px) {
  h1 {
    margin-top: 6rem;
    font-size: 2rem;
  }
  button {
    font-size: 0.85rem;
  }
}

/* MEDIA A PARTIR DE 1000PX */
@media (min-width: 1000px) {
  h1 {
    font-size: 2.5rem;
  }
  button {
    font-size: 1rem;
  }
}
</style>
