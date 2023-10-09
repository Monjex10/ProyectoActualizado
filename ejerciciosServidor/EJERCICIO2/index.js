const express = require("express");
const app = express();
app.use(express.json());

app.get("/hola", (req, res) => {
  res.status(200).send("Hola mundo");
});
app.get("/mensaje", (req, res) => {
  res.status(200).send("este es el mensaje de la ruta 2");
});

app.listen(3000, () => {
  console.log("Servidor esta escuchando en el puerto 3000");
});
