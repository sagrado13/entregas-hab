// DECLARANDO COSAS QUE INSTALÉ
const express = require("express");

const cors = require("cors");

const bodyParser = require("body-parser");

const mysql = require("mysql");

const app = express();

// COSAS QUE USA APP
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// CONEXIÓN A LA BBDD
const connection = mysql.createConnection({
  host: "localhost",
  user: "inaki",
  password: "19101989",
  database: "market",
});

// REALIZANDO CONEXIÓN
connection.connect((error) => {
  if (error) throw error;
  console.log(`DATABASE UP`);
});

// CONEXIÓN A LA API
const PORT = 3050;

// CONEXIÓN DEL SERVICIO
app.listen(PORT, () => console.log(`API UP`));

// AÑADIR CLIENTES A LA BBDD
app.post("/addCustomer", (req, res) => {
  // SECUENCIA SQL
  const sql = `INSERT INTO listaclientes SET ?`;

  // OBJETO DE DATOS DEL NUEVO CLIENTE
  const newCustomer = {
    nombre: req.body.name,
    usuario: req.body.user,
    email: req.body.email,
    password: req.body.password,
    foto: req.body.photo,
  };

  // CONEXIÓN A LA BBDD
  connection.query(sql, newCustomer, (error) => {
    if (error) throw error;
    console.log(`Cliente creado con éxito`);
  });
});

// OBTENIENDO TODOS LOS CLIENTES
app.get("/customers", (req, res) => {
  // SECUENCIA SQL
  const sql = `SELECT * FROM listaclientes`;

  // CONEXIÓN A LA BBDD
  connection.query(sql, (error, results) => {
    if (error) throw error;
    if (results.length > 0) {
      res.json(results);
    } else {
      console.log(`No hay resultados para la búsqueda de clientes`);
    }
  });
});

// ACTUALIZANDO CLIENTE EN LA BBDD
app.put("/update/:id", (req, res) => {
  // DATOS QUE RECIBIMOS DE LA VISTA
  const id = req.params.id;
  const name = req.body.name;
  const user = req.body.user;
  const password = req.body.password;
  const email = req.body.email;
  const photo = req.body.photo;

  // SECUENCIA SQL
  const sql = `UPDATE listaclientes SET nombre='${name}', usuario='${user}', password='${password}', email='${email}', foto='${photo}' WHERE id='${id}'`;

  // CONEXIÓN A LA BBBD
  connection.query(sql, (error) => {
    if (error) throw error;
    console.log(`Cliente actualizado correctamente`);
  });
});

// BORRARNDO CLIENTES DE LA BBDD
app.delete("/delete/:id", (req, res) => {
  // DATOS QUE LLEGAN DE LA VISTA
  const id = req.params.id;

  // SECUENCIA SQL
  const sql = `DELETE FROM listaclientes WHERE id=${id}`;

  // CONEXIÓN AL A BBDD
  connection.query(sql, (error) => {
    if (error) throw error;
    console.log(`Cliente borrado correctamente`);
  });
});

// OBTENIENDO TODOS LOS PRODUCTOS
app.get("/products", (req, res) => {
  // SECUENCIA SQL
  const sql = `SELECT * FROM listaproductos`;

  // CONEXIÓN A LA BBDD
  connection.query(sql, (error, results) => {
    if (error) throw error;
    if (results.length > 0) {
      res.json(results);
    } else {
      console.log(`No hay resultados para la búsqueda de productos`);
    }
  });
});

// AÑADIR PRODUCTO A LA BBDD
app.post("/addProduct", (req, res) => {
  // SECUENCIA SQL
  const sql = `INSERT INTO listaproductos SET ?`;

  // OBJETO DE DATOS DEL NUEVO PRODUCTO
  const newProduct = {
    nombre: req.body.name,
    stock: req.body.stock,
    disponibilidad: req.body.availability,
    imagen: req.body.imagen,
  };

  // CONEXIÓN A LA BBDD
  connection.query(sql, newProduct, (error) => {
    if (error) throw error;
    console.log(`Producto añadido correctamente`);
  });
});
