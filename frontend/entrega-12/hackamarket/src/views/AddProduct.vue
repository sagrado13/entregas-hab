<template>
  <div>
    <!-- Declaramos vue-headful -->
    <vue-headful title="Añadir producto" />
    <h1>Añadiendo producto nuevo</h1>
    <p v-show="errorMsg">* Tienes campos vacíos *</p>
    <input type="text" v-model="name" placeholder="Nombre del producto" />
    <br />
    <input type="number" v-model="stock" placeholder="Stock del producto" />
    <br />
    <input type="text" v-model="availability" placeholder="Disponibilidad del producto" />
    <br />
    <input type="url" v-model="imagen" placeholder="Imagen (en URL) del producto" />
    <br />
    <button @click="validatingData()">Añadir nuevo producto</button>
  </div>
</template>

<script>
// Importamos Axios
import axios from "axios";
// Importamos sweetalert2
import Swal from "sweetalert2";

export default {
  name: "AddProduct",
  data() {
    return {
      name: "",
      stock: "",
      availability: "",
      imagen: "",
      createProduct: false,
      errorMsg: false
    };
  },
  methods: {
    // FUNCIÓN PARA AÑADIR PRODUCTOS
    addProduct() {
      if (this.createProduct === true) {
        let self = this;
        axios
          .post("http://localhost:3050/addProduct", {
            name: self.name,
            stock: self.stock,
            availability: self.availability,
            imagen: self.imagen
          })
          .then(function(response) {
            console.log(response);
          })
          .catch(function(error) {
            console.log(error);
          });
        this.createProduct = false;
        this.name = "";
        this.stock = "";
        this.availability = "";
        this.imagen = "";
      } else {
        console.log(`Aquí hay algo que está mal fijo`);
      }
    },
    // FUNCIÓN PARA VALIDAR QUE SE RECIBEN TODOS LOS DATOS
    validatingData() {
      if (
        this.name === "" ||
        this.stock === "" ||
        this.availability === "" ||
        this.imagen === ""
      ) {
        this.errorMsg = true;
        this.createProduct = false;
        Swal.fire({
          icon: "error",
          title: "Tienes campos vacíos"
        });
      } else {
        this.errorMsg = false;
        this.createProduct = true;
        this.addProduct();
        Swal.fire({
          title: "Producto añadido correctamente",
          icon: "success",
          confirmButtonText: "OK"
        });
        setTimeout(function() {
          location.reload();
        }, 4000);
      }
    }
  }
};
</script>

<style scoped>
</style>