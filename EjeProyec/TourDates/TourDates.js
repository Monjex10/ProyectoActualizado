CLASE 06

let nombreUsuario = prompt("¿Cual es tu nombre?")
let edadUsuario = prompt("¿Cual es tu edad?")

alert(`Hola ${nombreUsuario} de ${edadUsuario}, te interesaria adquirir tickest? 🎟️`)

CLASE 07
let nombre = prompt('Cuál es tu nombre?')
const span = document.querySelector('#welcome')

if(nombre.length < 2){
    nombre = prompt('Demasiado corto, dinos, cuál es realmente tu nombre?')
}

span.textContent=`Hola, ${nombre}`

CLASE 08

let nombre = prompt("Cuál es tu nombre?").toUpperCase();

while (nombre.length < 3) {
  nombre = prompt(
    "Mmmm, tu nombre no puede ser tan corto, ingresa al menos 3 letras"
  ).toUpperCase();
}

const span = document.getElementById("welcome");
span.textContent = `Hola, ${nombre}`;
const i = document.querySelector("i");
i.setAttribute("class", "fa fa-ticket");

CLASE 09

function getTickets(place, noTickets) {
  noTickets
    ? swal(
        "Oh no!",
        `You are outta luck!, there are no more tickets for ${place}`,
        "info"
      )
    : swal("Sold!", `You have tickets to the ${place} concert`, "success");
}



function getTickets(place, noTickets) {
  if (noTickets) {
    swal(
      "Oh no!",
      `You are outta luck!, there are no more tickets for ${place}`,
      "info"
    );
  } else {
    swal("Sold!", `You have tickets to the ${place} concert`, "success");
  }
}


let edadUsuario = parseInt(prompt("¿Cual es tu edad?"));
let botones = document.querySelectorAll("button");

if (edadUsuario < 18) {
  swal(
    "Advertencia",
    "Al ser menor de edad no vas a poder comprar Tickets",
    "warning"
  );
  for (let i = 0; i < botones.length; i++) {
    botones[i].setAttribute("disabled", "disabled");
    botones[i].style.backgroundColor = "gray";
    botones[i].style.cursor = "default";
  }
}
