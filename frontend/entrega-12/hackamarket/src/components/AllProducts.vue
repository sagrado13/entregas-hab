<template>
  <div>
    <ul>
      <li v-for="product in products" :key="product.id">
        <img :src="product.imagen" />
        <p>
          <span>Nombre:</span>
          {{ product.nombre }}
        </p>
        <p>
          <span>Stock:</span>
          {{ product.stock }}
        </p>
        <p>
          <span>Disponibilidad:</span>
          <span
            :class="{ red: product.disponibilidad === 'No disponible', green: product.disponibilidad === 'Disponible' }"
          >{{ product.disponibilidad }}</span>
        </p>
        <button
          class="low"
          :class="{ notShow: product.disponibilidad === 'No disponible', show: product.disponibilidad === 'Disponible' }"
          @click="buyAlert()"
        >Comprar</button>
        <button
          :class="{ notShow: product.disponibilidad === 'No disponible', show: product.disponibilidad === 'Disponible' }"
          @click="reserveAlert()"
        >Reservar</button>
      </li>
    </ul>
  </div>
</template>

<script>
// Importamos sweetalert2
import Swal from "sweetalert2";

export default {
  name: "AllProducts",
  props: {
    products: Array
  },
  data() {
    // Variables utilizadas
    return {
      show: true,
      notShow: false
    };
  },
  methods: {
    // FUNCIÓN PARA LANZAR UN SWEETALERT2 CUANDO SE HACE CLICK EN EL BOTÓN RESERVAR
    reserveAlert() {
      Swal.fire({
        title: "¡Gracias por reservar el producto!",
        icon: "success",
        confirmButtonText: "OK"
      });
    },
    // FUNCIÓN PARA LANZAR UN SWEETALERT2 CUANDO SE HACE CLICK EN EL BOTÓN COMPRAR
    buyAlert() {
      Swal.fire({
        title: "¡Gracias por comprar el producto!",
        icon: "success",
        confirmButtonText: "OK"
      });
    }
  }
};
</script>

<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
ul li {
  color: white;
  font-family: fantasy;
  list-style: none;
  margin: 0.5rem;
  padding: 0.5rem;
  border-radius: 30px;
  box-shadow: 1px 1px 15px white;
  transition: all 0.5s;
}

ul li:hover {
  cursor: pointer;
  transform: translateY(-10px);
  box-shadow: 1px 1px 15px yellowgreen;
}

ul li img {
  width: 70%;
  margin-bottom: 1.5rem;
  border-radius: 20%;
}

ul li p {
  font-size: 0.7rem;
  margin-bottom: 0.3rem;
}

ul li p span {
  font-family: serif;
  font-weight: bold;
}

.red {
  color: red;
}
.green {
  color: yellowgreen;
}

.show {
  display: inline block;
}

.notShow {
  display: none;
}

/* MEDIA A PARTIR DE 700PX */
@media (min-width: 700px) {
  ul li {
    margin: 0.9rem;
    padding: 0.7rem;
  }
  ul li p {
    font-size: 0.85rem;
  }
}

/* MEDIA A PARTIR DE 1000PX */
@media (min-width: 1000px) {
  ul li {
    margin: 2rem;
    padding: 2rem;
  }

  ul li p {
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }

  ul li img {
    width: 100%;
  }
}
</style>
