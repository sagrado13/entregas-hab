<template>
  <div>
    <ul>
      <li v-for="(customer, index) in customers" :key="customer.id">
        <img :src="customer.foto" />
        <p>
          <span>Nombre:</span>
          {{ customer.nombre }}
        </p>
        <p>
          <span>Usuario:</span>
          {{ customer.usuario }}
        </p>
        <p>
          <span>Email:</span>
          {{ customer.email }}
        </p>
        <p>
          <span>Contraseña:</span>
          {{ customer.password }}
        </p>
        <button @click="sendCustomerData(index)">Editar</button>
        <button @click="sendIndexCustomer(index)">Borrar</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AllCustomer",
  props: {
    customers: Array
  },
  methods: {
    sendCustomerData(index) {
      let dataCustomer = this.customers[index];
      this.$emit("data", dataCustomer);
    },
    sendIndexCustomer(index) {
      let indexCustomer = this.customers[index].id;
      this.$emit("delete", indexCustomer);
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
span {
  font-family: serif;
  font-weight: bold;
}
ul li {
  color: white;
  font-family: fantasy;
  list-style: none;
  margin: 0.5rem;
  padding: 0.7rem;
  border-radius: 80px;
  box-shadow: 1px 1px 15px white;
  transition: all 0.4s;
}

ul li:hover {
  cursor: pointer;
  transform: translateY(-10px);
  box-shadow: 1px 1px 15px yellowgreen;
}

ul li p {
  font-size: 0.7rem;
  margin-bottom: 0.2rem;
}

ul li img {
  border-radius: 50%;
  width: 60%;
  margin-bottom: 1rem;
}

@media (min-width: 700px) {
  ul li {
    margin: 0.9rem;
  }
  ul li p {
    font-size: 0.85rem;
  }
}

@media (min-width: 1000px) {
  ul li {
    margin: 1.5rem;
    padding: 1.2rem;
  }
  ul li p {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  ul li img {
    width: 80%;
  }
}
</style>