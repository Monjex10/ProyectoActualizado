const deleteSong = async (album, cancion) => {
  try {
    await axios.put(
      `http://localhost:3000/song/delete/${album}?idSong=${cancion}`
    );
    await swal("cancion eliminada correctamente");
    ul.innerHTML = ""; // limpia la lista actual
    const response = await axios.get(`http://localhost:3000/album/${idAlbum}`);
    const canciones = response.data.canciones;
    canciones.map((cancion, index) => {
      renderSongs(cancion, index);
    });
    const trash = document.querySelectorAll("#delete");
    for (let i = 0; i < trash.length; i++) {
      trash[i].addEventListener("click", () => {
        deleteSong(idAlbum, canciones[i]._id);
      });
    }
  } catch (error) {
    console.log(error);
  }
};