<template>
  <div>
    <!-- Declaramos vue-headful -->
    <vue-headful title="404 Not Found" />
    <img src="../assets/NotFound.jpg" alt="Error 404 not found" />
    <p>Parece que te has perdido un poco...</p>
  </div>
</template>

<script>
export default {
  name: "Error"
};
</script>

<style scoped>
img {
  margin-top: 3rem;
  max-width: 80%;
}
p {
  color: white;
  font-size: 0.7rem;
}

/* MEDIA A PARTIR DE 700PX */
@media (min-width: 700px) {
  img {
    margin-top: 6rem;
  }
  p {
    font-size: 1rem;
  }
}
</style>
