const express = require("express")
const router = express.Router()

router.get("/hola", function (req, res) {
    res.status(200).send("Hola es mi primera ruta")
})

router.get("/mensaje", function (req, res) {
    res.status(200).send("Este es el mensaje de la segunda ruta")
})

router.get("/mensaje3", function (req, res) {
    res.status(200).send("Este es el mensaje de la segunda ruta")
})

router.get("/mensaje2", function (req, res) {
    res.status(200).send("Este es el mensaje de la segunda ruta siguiente")
})

router.get("/usuarios", function (req, res) {
    res.status(200).send({nombre: "Julian", apellido: "Gomez", provincia: "Buenos Aires"})
})

router.post("/album", (req, res) => {
    console.log("REQ", req);
    console.log("REQ:BODY", req.body);
    res.status(200).send(`Tu album es ${req.body.titulo} del artista ${req.body.artista}`)
})

router.post("/album/ultimos/:numeroDeAlbum", (req, res) => {
    console.log(req.params);
    res.status(200).send("estamos imprimiendo el params")
})


module.exports = router