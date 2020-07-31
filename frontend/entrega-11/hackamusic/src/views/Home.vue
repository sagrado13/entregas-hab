<template>
  <div class="home">
    <vue-headful title="Top tags Spain | Home" />
    <h2>Top tags</h2>
    <!-- Declaramos componente toptags -->
    <toptags :tags="tags" />
  </div>
</template>

<script>
// Importamos la api
import api from "@/api/index.js";
// Importamos el componente
import toptags from "@/components/TopTags.vue";

export default {
  name: "Home",
  // Registramos el componente
  components: {
    toptags
  },
  // En Data se guardan la variable
  data() {
    return {
      tags: []
    };
  },
  created() {
    console.log("Created");
    api.getTopTags().then(response => (this.tags = response.data.tags.tag));
  }
};
</script>
