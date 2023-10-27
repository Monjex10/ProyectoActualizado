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

onLoad();

const divAlbums = document.querySelector(".albums");

const renderAlbums = (album) => {
  const div = document.createElement("div");
  const imgAlbum = document.createElement("img");
  const iconTrash = document.createElement("i");

  div.classList.add("albums-individual");
  let urlPortada = album.portada
    ? album.portada
    : "https://imgur.com/0uSALUr.png";
  imgAlbum.setAttribute("src", urlPortada);
  iconTrash.classList.add("fas");
  iconTrash.classList.add("fa-trash-alt");
  iconTrash.classList.add("trash");

  imgAlbum.addEventListener("click", () => {
    redirect(album._id);
  });
  div.appendChild(imgAlbum);
  div.appendChild(iconTrash);
  divAlbums.appendChild(div);
};
 
  
const getAlbums = async () => {
  try {
    const response = await axios.get("../album/todos");
    response.data.map((album) => {
      renderAlbums(album);
    });
    const trash = document.querySelectorAll("i");
    trash.forEach((icon, index) => {
      icon.addEventListener("click", () => {
        deleteAlbum(response.data[index]._id);
      });
    });
  } catch (error) {
    console.log(error);
  }
};
  
  getAlbums();

  const logOut = async () => {
    try {
      const response = await axios.post("../../logout");
      window.location.href = "./login/login.html";
    } catch (error) {
      console.log(error.message);
    }
  };
  
  const Logout = document.getElementById("logout");
  
  Logout.addEventListener("click", () => {
    logOut();
    window.location.href = "./login/login.html";
  });
  
