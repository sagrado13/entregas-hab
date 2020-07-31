<template>
  <div>
    <input type="search" v-model="search" placeholder="Search artist" />
    <table>
      <tr>
        <th>Rank</th>
        <th>Image</th>
        <th>Artist</th>
        <th>Listeners</th>
        <th>URL</th>
      </tr>
      <tr v-for="(artist, index) in filtered" :key="artist.id">
        <td id="rank">{{ index+1 }}</td>
        <td>
          <img :src="artist.image[0]['#text']" />
        </td>
        <td>{{ artist.name }}</td>
        <td>{{ artist.listeners }}</td>
        <td>
          <a :href="artist.url" target="_blank">
            <img :src="url" alt="Link más info..." />
          </a>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "TopArtistSpain",
  props: {
    artists: Array
  },
  // En Data se guardan las variables
  data() {
    return {
      search: "",
      url: "https://socialwebssite.files.wordpress.com/2016/03/lastfm.png"
    };
  },
  // Filtramos artists según lo que se reciba en el input
  computed: {
    filtered() {
      if (!this.search) {
        return this.artists;
      }
      return this.artists.filter(artist =>
        artist.name.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  }
};
</script>

<style scoped>
img {
  width: 60px;
}
</style>
