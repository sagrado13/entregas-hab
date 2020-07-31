<template>
  <div>
    <table>
      <tr>
        <th>Rank</th>
        <th>Image</th>
        <th>Artist</th>
        <th>Title</th>
        <th>Duration</th>
        <th>Listeners</th>
        <th>URL</th>
      </tr>
      <tr v-for="track in tracks" :key="track.id">
        <td id="rank">{{Number(track['@attr'].rank) + 1}}</td>
        <td>
          <img :src="track.image[0]['#text']" />
        </td>
        <td>{{ track.artist.name }}</td>
        <td>{{ track.name }}</td>
        <td>{{ track.duration }} Seg.</td>
        <td>{{ track.listeners}}</td>
        <td>
          <a :href="track.url" target="_blank">
            <img :src="url" alt="Link más info..." />
          </a>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "TopTracksSpain",
  props: {
    tracks: Array
  },
  // En Data se guardan las variables
  data() {
    return {
      url: "https://socialwebssite.files.wordpress.com/2016/03/lastfm.png"
    };
  }
};
</script>

<style scoped>
img {
  width: 60px;
}
</style>