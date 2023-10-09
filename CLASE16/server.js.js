const express = require("express");
const mongoose = require("mongoose");
const url =
  "mongodb+srv://alanrobert7:Kukiño1245@cursointro.yg5v5ef.mongodb.net/";
const app = express();
app.use(express.json());
const routes = require("./routes/index");

const connectToMongo = async () => {
  try {
    await mongoose.connect(url);
    app.listen(3000, () => {
      console.log("servidor esta escuchando y conectado a la base de datos");
    });
  } catch (error) {
    console.log(error);
  }
};

app.use("/", routes);

connectToMongo();
