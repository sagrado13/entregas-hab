<template>
  <div>
    <input type="search" v-model="search" placeholder="Search style" />
    <table>
      <tr>
        <th>Rank</th>
        <th>Style</th>
        <th>Reach</th>
        <th>Taggings</th>
        <th>URL</th>
      </tr>
      <tr v-for="(tag, index) in filtered" :key="tag.id">
        <td id="rank">{{ index+1 }}</td>
        <td>{{ tag.name }}</td>
        <td>{{ tag.reach }}</td>
        <td>{{ tag.taggings }}</td>
        <td>
          <a :href="tag.url" target="_blank">
            <img :src="url" alt="Link más info..." />
          </a>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "TopTags",
  props: {
    tags: Array
  },
  // En Data se guardan las variables
  data() {
    return {
      search: "",
      url: "https://socialwebssite.files.wordpress.com/2016/03/lastfm.png"
    };
  },
  // Filtamos tags  según lo que se recibe del input
  computed: {
    filtered() {
      if (!this.search) {
        return this.tags;
      }
      return this.tags.filter(tag =>
        tag.name.toLowerCase().includes(this.search.toLowerCase())
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