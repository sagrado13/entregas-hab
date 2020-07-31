<template>
  <div class="home">
    <vue-headful title="Top artists Spain" />
    <h2>Top artists Spain</h2>
    <!-- Declaramos el componente topartistsspain-->
    <topartistsspain :artists="artists" />
  </div>
</template>

<script>
// Importamos la api
import api from "@/api/index.js";
// Importamos el componente de top artistas de España
import topartistsspain from "@/components/TopArtistSpain.vue";
export default {
  name: "TopArtistsSpain",
  // Registramos el componente
  components: {
    topartistsspain
  },
  // En Data se guardan la variable
  data() {
    return {
      artists: []
    };
  },
  created() {
    console.log("Created");
    api
      .getArtistsSpain()
      .then(response => (this.artists = response.data.topartists.artist));
  }
};
</script>

<style>
</style>