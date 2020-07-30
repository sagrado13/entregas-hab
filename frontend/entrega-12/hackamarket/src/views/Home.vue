<template>
  <div class="home">
    <!-- Declaramos vue-headful -->
    <vue-headful title="Home" />
    <h1>¡Bienvenido!</h1>
    <img
      src="../assets/mr-autthaporn-pradidpong-EZt7OJagHyY-unsplash.jpg"
      alt="Imagen de una tienda"
    />
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {}
};
</script>

<style scoped>
.home img {
  margin-top: 4rem;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
}
.home h1 {
  color: goldenrod;
  font-size: 1.5rem;
  position: absolute;
  width: 100%;
}

/* MEDIA A PARTIR DE 700PX */
@media (min-width: 700px) {
  .home h1 {
    margin-top: 6rem;
    font-size: 2.5rem;
    position: absolute;
    width: 100%;
  }
}

/* MEDIA A PARTIR DE 1000PX */
@media (min-width: 1000px) {
  .home h1 {
    margin-top: 13rem;
    font-size: 3.3em;
  }
}
</style>
