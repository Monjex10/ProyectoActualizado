// import { logOut } from "./utils/utils.js";

// const deleteSong = async (album, cancion) => {
//   try {
//     await axios.put(
//       `http://localhost:3000/song/delete/${album}?idSong=${cancion}`
//     );
//     await swal("cancion eliminada correctamente");
//     ul.innerHTML = ""; // limpia la lista actual
//     const response = await axios.get(`http://localhost:3000/album/${idAlbum}`);
//     const canciones = response.data.canciones;
//     canciones.map((cancion, index) => {
//       renderSongs(cancion, index);
//     });
//     const trash = document.querySelectorAll("#delete");
//     for (let i = 0; i < trash.length; i++) {
//       trash[i].addEventListener("click", () => {
//         deleteSong(idAlbum, canciones[i]._id);
//       });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

const nombre = document.querySelector("#nombre-usuario");

const onLoad = async () => {
  try {
    const response = await axios.get("../../../me");
    nombre.textContent = `Hola, ${response.data.nombre} ${response.data.apellido}`;
  } catch (error) {
    console.log(error.message);
    // window.location.href = "../index.html";
  }
};
const logOut = async () => {
  try {
    const response = await axios.post("../../logout");
  } catch (error) {
    console.log(error.message);
  }
};

const Logout = document.getElementById("logout");

Logout.addEventListener("click", () => {
  logOut();
  window.location.href = "./login/login.html";
});

const editar = document.querySelector("#editar");
const ico = document.querySelector("#eliminar");
editar.addEventListener("click", () => {
  ico.classList.toggle("eliminar");
});

onLoad();