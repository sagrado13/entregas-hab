<template>
  <div id="app">
    <div id="nav"></div>
    <!-- Declaramos componente menú-->
    <menucustom />
    <h1>Hack A Music</h1>
    <img src="./assets/AdmiredQuickBream-size_restricted.gif" />
    <br />
    <router-view />
    <!-- Declaramos componente spiner-->
    <loaderspiner v-show="loading" />
    <!-- Declaramos componente footer-->
    <footercustom />
  </div>
</template>

<script>
// Importamos componentes
import menucustom from "@/components/MenuCustom.vue";
import footercustom from "@/components/FooterCustom.vue";
import loaderspiner from "@/components/LoaderSpiner.vue";

export default {
  name: "App",
  // Registramos los componentes
  components: {
    menucustom,
    footercustom,
    loaderspiner
  },
  // En Data se guardan la variable
  data() {
    return {
      loading: true
    };
  },
  mounted() {
    this.showLoading();
  },
  // Función para dejar de mostrar spinner en medio segundo
  methods: {
    showLoading() {
      setTimeout(() => {
        this.loading = false;
      }, 500);
    }
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
  height: 100vh;
  font-family: fantasy;
  background-image: url("./assets/wp3307398.jpg");
  background-size: cover;
}

#app {
  text-align: center;
  color: #2c3e50;
}

h1 {
  color: white;
  padding-top: 3rem;
  margin: 1rem;
  font-size: 3rem;
}

h2 {
  color: white;
  font-size: 2rem;
}

input {
  width: 20%;
  margin-top: 1rem;
  font-size: 1rem;
  padding: 0.5rem;
  text-align: center;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border: 1.5px solid;
}

table {
  margin: auto;
  margin-top: 1rem;
  margin-bottom: 5rem;
}
#about {
  font-size: 3rem;
}

th {
  border: 1px solid;
  background-color: yellowgreen;
  padding: 1rem;
  box-shadow: 1px 1px 10px green inset;
}

td {
  background: white;
  padding: 0.5rem;
  border: 1px solid;
}

#rank {
  background-color: lightgray;
}
</style>
