const bcrypt = require("bcrypt");

// Hasheando la contraseña
const saltRounds = 10;

const hashPassword = async (password) => {
  const hash = await bcrypt.hash(password, saltRounds);
  console.log("HASH", hash);
};

hashPassword("edificio");

// comparación
const check = async (userPassword, dbUserPassword) => {
  const match = await bcrypt.compare(userPassword, dbUserPassword);
  console.log("MATCH", match);
};

// check(
//   "casachica",
//   "$2b$10$VWj1mJWNN3YlAniK1/a7PuGt7JuGfBOf0wC7fKP01NfyPlTZNzOOW"
// );