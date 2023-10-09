const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const url =
  "mongodb+srv://alanrobert7:Kukiño1245@cursointro.yg5v5ef.mongodb.net/?retryWrites=true&w=majority";

const routes = require("./routes/index");

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", routes);

const connectMongo = async () => {
  try {
    await mongoose.connect(url);
    app.listen(3000, () => {
      console.log(
        "Servidor escuchando en el puerto 3000 y la base de datos conectada"
      );
    });
  } catch (error) {
    console.log(error);
  }
};

connectMongo();
