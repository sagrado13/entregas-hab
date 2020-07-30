<template>
  <div>
    <!-- Declaramos vue-headful -->
    <vue-headful title="Clientes" />
    <h1>Listado de clientes</h1>
    <!-- Declaramos el componente allcustomers -->
    <allcustomers v-on:data="showInfoCustomer" v-on:delete="deleteCustomer" :customers="customers" />

    <!-- MODAL PARA ACTUALIZAR CLIENTE -->
    <div v-show="seeModal" class="modal">
      <div class="modalBox">
        <h3>Actualiza los datos del cliente:</h3>
        <p>Id del cliente: {{idCliente }}</p>
        <input type="text" placeholder="Nombre del cliente" v-model="updatedName" />
        <br />

        <input type="text" placeholder="Usuario del cliente" v-model="updatedUser" />
        <br />
        <input type="password" placeholder="Password del cliente" v-model="updatedPassword" />
        <br />
        <input type="email" placeholder="Email del cliente" v-model="updatedEmail" />
        <br />
        <input type="url" placeholder="URL de la foto del cliente" v-model="updatedPhoto" />

        <br />
        <button id="cancel" @click="seeModal =! seeModal">Cancelar</button>
        <button id="update" @click="updateCustomer()">Actualizar cliente</button>
      </div>
    </div>
  </div>
</template>

<script>
// Importamos componente AllCustomers
import allcustomers from "@/components/AllCustomers.vue";
// Importamos Axios
import axios from "axios";
// Importamos sweetalert2
import Swal from "sweetalert2";

export default {
  name: "Customers",
  // Registramos el componente
  components: {
    allcustomers
  },
  data() {
    // Variables utilizadas
    return {
      customers: [],
      idCliente: "",
      updatedName: "",
      updatedUser: "",
      updatedPassword: "",
      updatedEmail: "",
      updatedPhoto: "",
      seeModal: false
    };
  },
  methods: {
    // FUNCIÓN PARA OBTENER LOS CLIENTES
    getAllCustomers() {
      let self = this;
      // LLAMADA AXIOS A LA API
      axios
        .get("http://localhost:3050/customers")
        .then(function(response) {
          self.customers = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // FUNCIÓN PARA MOSTRAR DATOS DE CLIENTE EN EL MODAL
    showInfoCustomer(dataCustomer) {
      this.updatedName = dataCustomer.nombre;
      this.updatedUser = dataCustomer.usuario;
      this.updatedPassword = dataCustomer.password;
      this.updatedEmail = dataCustomer.email;
      this.updatedPhoto = dataCustomer.foto;
      this.idCliente = dataCustomer.id;

      this.seeModal = true;
    },
    // FUNCIÓN PARA ACTUALIZAR CLIENTE
    updateCustomer() {
      let self = this;
      axios
        .put("http://localhost:3050/update/" + self.idCliente, {
          name: self.updatedName,
          user: self.updatedUser,
          password: self.updatedPassword,
          email: self.updatedEmail,
          photo: self.updatedPhoto
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
      Swal.fire({
        title: "Cliente actualizado correctamente",
        icon: "success",
        confirmButtonText: "OK"
      });
      setTimeout(function() {
        location.reload();
      }, 4000);
    },
    deleteCustomer(indexCustomer) {
      let self = this;
      axios
        .delete("http://localhost:3050/delete/" + indexCustomer)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
      Swal.fire({
        title: "Cliente borrado correctamente",
        icon: "success",
        confirmButtonText: "OK"
      });
      setTimeout(function() {
        location.reload();
      }, 4000);
    }
  },
  created() {
    this.getAllCustomers();
  }
};
</script>

<style scoped>
h1 {
  color: white;
  font-size: 1.5rem;
}
div.modal button {
  width: 80%;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
}

.modalBox {
  background: #fefefe;
  margin: 2% auto;
  padding: 3rem;
  width: 50%;
  border: 1px solid #888;
  background: rgb(0, 0, 0.5);
}

@media (min-width: 400px) {
  #cancel {
    width: 130px;
  }
  #update {
    width: 130px;
  }
}

@media (min-width: 700px) {
  h1 {
    font-size: 2rem;
  }
  #cancel {
    width: 150px;
  }
  #update {
    width: 150px;
  }
}

@media (min-width: 1000px) {
  h1 {
    font-size: 2.5rem;
  }
  #cancel {
    width: 170px;
  }
  #update {
    width: 170px;
  }
}
</style>