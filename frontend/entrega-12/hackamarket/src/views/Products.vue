<template>
  <div>
    <!-- Declaramos vue-headful -->
    <vue-headful title="Productos" />
    <h1>Lista de productos</h1>
    <!-- Declaramos el componente allproducts -->
    <allproducts :products="products" />
  </div>
</template>

<script>
// Importamos componente AllProducts
import allproducts from "@/components/AllProducts.vue";
// Importamos Axios
import axios from "axios";
export default {
  name: "Products",
  // Registramos el componente
  components: {
    allproducts
  },
  data() {
    return {
      products: []
    };
  },
  methods: {
    // FUNCIÓN PARA OBTENER LOS PRODUCTOS
    getAllProducts() {
      let self = this;
      // LLAMADA AXIOS A LA API
      axios
        .get("http://localhost:3050/products")
        .then(function(response) {
          self.products = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  created() {
    this.getAllProducts();
  }
};
</script>

<style scoped>
h1 {
  color: white;
  font-size: 1.5rem;
}

/* MEDIA A PARTIR DE 700PX */
@media (min-width: 700px) {
  h1 {
    font-size: 2.5rem;
  }
}
</style>
