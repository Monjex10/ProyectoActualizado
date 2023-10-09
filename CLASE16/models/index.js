const mongoose = require("mongoose");

const Propiedad = new mongoose.Schema({
  direccion: {
    calle: { type: String, required: true },
    barrio: { type: String, required: true },
    numero: { type: Number, required: true },
  },
  operacion: { type: String, enum: ["alquiler", "venta"] },
  tipo: {
    type: String,
    required: [true, "el tipo de propiedad es requerido"],
    lowercase: true,
    trim: true,
    enum: {
      values: ["departamentos", "casas", "ph"],
      message: "tipo incorrecto",
    },
  },
  fechaVenta: { type: Date },
  antiguedad: {
    type: Number,
    min: [0, "no puede ser negativa la propiedad"],
    max: [30, "No apto para operaciones por su antiguedad"],
  },
  precio: { type: Number },
  visitante: [{ apellido: { type: String }, fecha: { type: Date } }],
});

module.exports = mongoose.model("Propiedad", Propiedad);
