const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Album = require("../models/album");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const saltRounds = 10;
const secret = "milanesa";

const hashPassword = async (password) => {
  const hash = await bcrypt.hash(password, saltRounds);
  return hash;
};
// Ruta para crear un usuario
router.post("/createuser", async (req, res) => {
  const { password, email, nombre, apellido } = req.body;
  const hashed = await hashPassword(password);
  const usuario = {
    password: hashed,
    email,
    nombre,
    apellido,
  };
  try {
    await User.create(usuario);
    res.status(200).send("usuario creado correctamente");
  } catch (error) {
    res.status(500).send({ "error al crear el usuario": error });
  }
});

// Ruta para el login
router.post("/login", async (req, res) => {
  try {
    const email = req.body.usuario;
    const password = req.body.contrasena;
    const user = await User.findOne({ email: email });
    console.log(user);
    const match = await bcrypt.compare(password, user.password);
    console.log(match);
    const payload = { email, nombre: user.nombre, apellido: user.apellido };
    if (match) {
      const token = jwt.sign(payload, secret);
      res.cookie("token", token);
      res.status(200).send(payload);
    } else {
      res.status(401).send({ message: "La contraseña no coincide" });
    }
  } catch (error) {
    res.status(401).send({ message: error.message });
  }
});

// Ruta para el logout
router.post("/logout", async (req, res) => {
  try {
    res.clearCookie("token");
    res.sendStatus(204);
  } catch (error) {
    res.sendStatus(500);
  }
});

// Ruta /me para restringir el acceso a quienes no se loguean
router.get("/me", (req, res) => {
  try {
    const token = req.cookies.token;
    const payload = jwt.verify(token, secret);
    res.send(payload);
  } catch (error) {
    res.status(401).send(error.message);
  }
});

// Una ruta que reciba un id por params y retorne la data del usuario nuevamente, excluyendo la contraseña.
router.get("/usuario/:id", async (req, res) => {
  try {
    let respuesta = await User.findById(req.params.id);
    res.status(200).send({
      usuario: {
        nombre: respuesta.nombre,
        apellido: respuesta.apellido,
        email: respuesta.email,
      },
    });
  } catch (error) {
    res.status(500).send({ "error al crear el usuario": error });
  }
});

// Una ruta para editar los datos de un usuario.
router.put("/usuario/edit/:id", async (req, res) => {
  try {
    const usuario = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).send(usuario);
  } catch (error) {
    res.status(500).send({ "error al editar el usuario": error });
  }
});

// Una ruta para agregar un album.
router.post("/album/agregar", async (req, res) => {
  try {
    let album = await Album.create(req.body);
    res.status(200).send({ "Album creado": album });
  } catch (error) {
    res.status(500).send({ "error al agregar un album": error });
  }
});

// Una ruta para editar un album.
router.put("/album/:id", async (req, res) => {
  try {
    const album = await Album.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).send(album);
  } catch (error) {
    res.status(500).send({ "error al agregar un album": error });
  }
});

// Una ruta para agregar o eliminar una canción del album.
router.put("/song/delete/:idAlbum", async (req, res) => {
  let idSong = req.query.idSong;
  try {
    let album = await Album.findById(req.params.idAlbum);
    let albumActualizado = album.canciones.filter(
      (cancion) => cancion._id != idSong
    );
    album.canciones = albumActualizado;
    await Album.findByIdAndUpdate(req.params.idAlbum, album, {
      new: true,
    });
    res.status(200).send({ mensaje: "Cancion eliminada correctamente" });
  } catch (error) {
    res.status(500).send(error);
  }
});

// Una ruta para agregar una canción del album.
router.put("/song/:idAlbum", async (req, res) => {
  try {
    let album = await Album.findById(req.params.idAlbum);
    album.canciones.push(req.body);
    await Album.findByIdAndUpdate(req.params.idAlbum, album, {
      new: true,
    });
    res.status(200).send(album);
  } catch (error) {
    res.status(500).send({ "error solicitar todos los albums": error });
  }
});

// Una ruta que devuelva todos los albums.
router.get("/album/todos", async (req, res) => {
  try {
    let albums = await Album.find();
    res.status(200).send(albums);
  } catch (error) {
    res.status(500).send({ "error solicitar todos los albums": error });
  }
});

// Una ruta que devuelva la información de un album especifíco.
router.get("/album/:id", async (req, res) => {
  try {
    let album = await Album.findById(req.params.id);
    res.status(200).send(album);
  } catch (error) {
    res.status(500).send({ "error solicitar todos los albums": error });
  }
});

// Una ruta para eliminar un album.
router.delete("/album/:idAlbum", async (req, res) => {
  try {
    await Album.findByIdAndDelete(req.params.idAlbum);
    res.status(200).send("Album eliminado correctamente");
  } catch (error) {
    res.status(500).send({ "error al eliminar el album": error });
  }
});

module.exports = router;
