const express = require("express");
const app = express();
app.use(express.json());

app.get("/hello", (req, res) => {
  res.status(200).send("mi primer hola mundo con un servidor");
});

app.listen(3000, () => {
  console.log("servidor esta escuchando");
});
