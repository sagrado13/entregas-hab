<template>
  <div class="toptracks">
    <vue-headful title="Top tracks Spain" />
    <h2>Top tracks Spain</h2>
    <!-- Declaramos el componente  toptracksspain-->
    <toptracksspain :tracks="tracks" />
  </div>
</template>

<script>
// Importamos la api
import api from "@/api/index.js";
// Importamos componente
import toptracksspain from "@/components/TopTracksSpain.vue";
export default {
  name: "TopTracks",
  // Registramos el componente
  components: {
    toptracksspain
  },
  // En Data se guardan la variable

  data() {
    return {
      tracks: []
    };
  },
  created() {
    console.log("Created");
    api
      .getTopTracksSpain()
      .then(response => (this.tracks = response.data.tracks.track));
  }
};
</script>
