const jwt = require("jsonwebtoken");

// sign
// payload, secret, option

const payload = {
  nombre: "Josefina",
  apellido: "Gomez",
  privilegio: "user",
};

const secret = "milanesa";

const token = jwt.sign(payload, secret, { expiresIn: "3h" });
//console.log("ESTE ES EL TOKEN", token);

// verify
const decodificado = (secret) => {
  try {
    const decoded = jwt.verify(token, secret);
    return decoded;
  } catch (error) {
    return error.message;
  }
};


console.log("DECODIFICADO", decodificado(secret));