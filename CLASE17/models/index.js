const mongoose = require("mongoose");

const Producto = new mongoose.Schema({
  nombre: { type: String },
  tipo: { type: String },
  stock: { type: Number, min: [0, "nos puede ser negativo"] },
  precio: { type: Number },
});

module.exports = mongoose.model("Producto", Producto)