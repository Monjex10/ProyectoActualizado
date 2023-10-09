const express = require("express");
const router = express.Router();
const Producto = require("../models/index");

// creamos un producto
router.post("/producto", async (req, res) => {
  try {
    await Producto.create(req.body);
    res.status(200).send("Producto creado correctamente");
  } catch (error) {
    res.status(500).send("Error al agregar el producto");
  }
});

// listar todos los productos
router.get("/productos", async (req, res) => {
  try {
    const productos = await Producto.find();
    if (productos) {
      res.status(200).send(productos);
    } else {
      res.status(200).send("no hay productos guardados");
    }
  } catch (error) {
    res.status(500).send("Error");
  }
});

// borrar un producto
router.delete("/productos/:id", async (req, res) => {
    try {
       await Producto.findByIdAndDelete(req.params.id)     
        res.status(204).send("Producto borrado correctament")

    } catch (error) {
        res.status(500).send("Error");
    }
})

// actualizar un producto

outer.put("/producto/:id", async (req, res) => {
  try {
    const producto = await Producto.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    res.status(200).send({"producto modificado": producto})
  } catch (error) {
    res.status(500).send("Error");
  }
})
