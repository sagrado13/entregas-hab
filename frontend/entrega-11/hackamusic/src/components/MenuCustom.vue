<template>
  <div>
    <div id="nav">
      <router-link :to="{name: 'Home'}">Home</router-link>
      <router-link :to="{name: 'TopArtistsSpain'}">Top Artists</router-link>
      <router-link :to="{name: 'TopTracksSpain'}">Top Tracks</router-link>
      <router-link :to="{name: 'About'}">About</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuCustom"
};
</script>

<style scoped>
#nav {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  width: 100%;
  box-shadow: 5px 5px 30px lightslategray inset;
  background: white;
  top: 0;
  font-size: 1.5rem;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: goldenrod;
  font-size: 40px;
}
</style>