<template>
  <div>
    <footer>Iñaki GV© , 2020-2021</footer>
  </div>
</template>

<script>
export default {
  name: "FooterCustom"
};
</script>

<style scoped>
footer {
  font-family: cursive;
  font-size: 0.6rem;
  color: white;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

/* MEDIA A PARTIR DE 700PX */
@media (min-width: 700px) {
  footer {
    font-size: 0.8rem;
  }
}

/* MEDIA A PARTIR DE 1000PX */
@media (min-width: 1000px) {
  footer {
    font-size: 1rem;
  }
}
</style>
