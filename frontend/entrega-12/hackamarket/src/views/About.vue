<template>
  <div class="about">
    <!-- Declaramos vue-headful -->
    <vue-headful title="About" />
    <h1>Sobre mí</h1>
    <p>Hola a todos</p>
    <img src="../assets/predator.gif" alt="Gif de predator" />
    <p>
      Hay poco que contar sobre mí. Esto es un ejercicio de Vue del Bootcamp de
      HACK A BOSS que tengo que hacer obligatoriamente para aprobar el curso.
    </p>
    <h2>Tecnologías utilizadas:</h2>
    <ul>
      <li>Vue.js</li>
      <li>JavaScript</li>
      <li>Axios</li>
      <li>HTML</li>
      <li>CSS</li>
      <li>Sweetalert2</li>
      <li>Vue-headful</li>
      <li>MySQL</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<style scoped>
img {
  width: 80%;
}
p {
  font-size: 0.7rem;
  color: white;
  margin: 1rem;
}

h2 {
  color: white;
  margin-top: 3rem;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  text-decoration-line: underline;
}

ul li {
  color: white;
  margin: 0.1rem;
  font-size: 0.7rem;
}

/* MEDIA A PARTIR DE 700PX */
@media (min-width: 700px) {
  img {
    width: 60%;
  }
  p {
    font-size: 0.85rem;
  }

  h2 {
    font-size: 1.4rem;
  }

  ul li {
    font-size: 0.85rem;
  }
}
</style>
