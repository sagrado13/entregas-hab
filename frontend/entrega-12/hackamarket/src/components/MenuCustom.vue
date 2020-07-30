<template>
  <div>
    <div id="nav">
      <img src="../assets/logohack.png" alt="Logo página" />
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'About' }">About</router-link>
      <router-link :to="{ name: 'Products' }">Productos</router-link>
      <router-link :to="{ name: 'AddProduct' }">Añadir Producto</router-link>
      <router-link :to="{ name: 'Customers' }">Clientes</router-link>
      <router-link :to="{ name: 'Register' }">Registro</router-link>
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
  background: lightgray;
  top: 0;
  font-size: 0.5rem;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  display: block;
}

#nav a.router-link-exact-active {
  color: orangered;
  font-size: 0.8rem;
}

#nav img {
  width: 20%;
}

/* MEDIA A PARTIR DE 700PX */
@media (min-width: 700px) {
  #nav {
    font-size: 1rem;
  }

  #nav a.router-link-exact-active {
    color: orangered;
    font-size: 2rem;
  }
  #nav img {
    max-width: 140px;
  }
}
</style>
