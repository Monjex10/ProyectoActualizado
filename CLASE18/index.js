let h2 = document.querySelector("h2")


function generateId() {
    let numeroAleatorio = Math.ceil(Math.random() * 500)
    return numeroAleatorio
}



async function getPokemon() {
    let id = generateId()
    try {
      const respuesta = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)     
       


    } catch (error) {
        console.log(error);
    }

}

getPokemon()