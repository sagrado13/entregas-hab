<template>
  <div>
    <!-- Declaramos vue-headful -->
    <vue-headful title="Registro" />
    <h1>Registrando nuevo cliente</h1>
    <p v-show="errorMsg">* Tienes campos vacíos *</p>
    <input type="text" v-model="name" placeholder="Nombre del cliente" />
    <br />
    <input type="text" v-model="user" placeholder="Usuario del cliente" />
    <br />
    <input type="email" v-model="email" placeholder="Email del cliente" />
    <br />
    <input type="password" v-model="password" placeholder="Contraseña del cliente" />
    <br />
    <input type="url" v-model="photo" placeholder="Fotografía (en URL) del cliente" />
    <br />
    <button @click="validatingData()">Añadir nuevo cliente</button>
  </div>
</template>

<script>
// Importamos Axios
import axios from "axios";
// Importamos sweetalert2
import Swal from "sweetalert2";

export default {
  name: "Register",
  data() {
    // Variables utilizadas
    return {
      name: "",
      user: "",
      email: "",
      password: "",
      photo: "",
      createClient: false,
      errorMsg: false
    };
  },
  methods: {
    // FUNCIÓN PARA AÑADIR CLIENTES
    addCustomers() {
      if (this.createClient === true) {
        let self = this;
        axios
          .post("http://localhost:3050/addCustomer", {
            name: self.name,
            user: self.user,
            email: self.email,
            password: self.password,
            photo: self.photo
          })
          .then(function(response) {
            console.log(response);
          })
          .catch(function(error) {
            console.log(error);
          });
        this.createClient = false;
        this.name = "";
        this.user = "";
        this.email = "";
        this.password = "";
        this.photo = "";
      } else {
        console.log(`Aquí hay algo que está mal`);
      }
    },
    // FUNCIÓN  PARA VALIDAR QUE SE RECIBEN TODOS LOS CAMPOS
    validatingData() {
      if (
        this.name === "" ||
        this.user === "" ||
        this.email === "" ||
        this.password === "" ||
        this.photo === ""
      ) {
        this.errorMsg = true;
        this.createClient = false;
        Swal.fire({
          icon: "error",
          title: "Tienes campos vacíos"
        });
      } else {
        this.errorMsg = false;
        this.createClient = true;
        this.addCustomers();
        Swal.fire({
          title: "Cliente añadido correctamente",
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
p {
  margin-bottom: 1.5rem;
  color: red;
  font-weight: bold;
}
</style>
