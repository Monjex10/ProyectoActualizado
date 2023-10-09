// hola mundo

// // Dot (. = puntos)y Bracket ([] = corchetes)

// // let auto = {
// //     marca: "Tesla",
// //     modelo: "Model Y",
// //     kilometros: 0,
// //     nuevo: true,
// //     arrancar: function () {
// //       alert("el auto se enciende!");
// //     },
// //   };

// // DOT .
// // auto.marca
// // auto.arrancar()

// // Bracket []

// // auto["marca"]
// // auto["modelo"]
// // auto["arrancar"]()

// // Ventajas y limitaciones 

// // DOT: 
// // 1- no acepta variables
// // 2- no podemos acceder que tengan propiedad con espacio o numeros 

// let auto = {
//     marca: "Tesla",
//     "1er service": "10000 km",
//     "pais de origen": "Estados Unidos",
//   };

// let acceso = "marca"
// auto[acceso]

// let auto1 = {
//     marca: "Tesla",
//     primerService: "10000 km",
//     paisDeOrigen: "Estados Unidos",
// };

// // MODIFICAR OBJETOS 

// let heroe = {
//     nombre: "mario",
//     trabajo: "plomero"
// }

// heroe["nombre"] = "Luis"
// heroe.trabajo = "Carpintero"

// // agregar una propiedad 

// heroe.nacionalidad = "argentino"
// heroe["provincia"] = "La pampa"

// // MODIFICAR OBJETOS VACIOS

// let perro = {}
// perro.nombre = "firulais"
// perro["edad"] = 6
// perro["ladrar"] = function () {
//     alert("cuidado perro malo")
// }
// perro["amigos"] = ["tom", "jerry", "caniche"]

// ```js
// // EJERCICIOS
// // 1- registro de P5

// // let alumnoP5 = {
// //     usuario: "Juan",
// //     edad: 23,
// //     direccion: "rivadavia 876",
// //     fechaDeNacimiento: "25/05/1987",
// //     contrasenia: "123456"
// // }

// // 2 - VARIABLE AUTO
// // let propertyKey = "modelo"
// // let anotherPropertyKey = "precio"
// // let nextProperty = "color"

// // let miAuto = {}
// // miAuto.marca = "Chevrolet" // dot (.)
// // miAuto["anio"] = 2018
// // miAuto["nuevo"] = false
// // miAuto[propertyKey] = "descapotable"
// // miAuto[anotherPropertyKey] = 15000
// // miAuto[nextProperty] = "rojo"

// // for (const key in miAuto) {
// //     console.log(`la clave es: ${key} y el valor es ${miAuto[key]}`);
// // }

// // NIVEL 2

// // 1- AUMENTAR LA NOTA

// let notasAlumnos = [
//   { Estudiante: "Juan", nota: 6 },
//   { Estudiante: "Mario", nota: 8 },
//   { Estudiante: "Julia", nota: 10 },
//   { Estudiante: "Sofia", nota: 2 },
// ];

// // notasAlumnos.forEach((alumno) => {
// //     if (alumno["nota"] >= 5 && alumno["nota"] <= 8) {
// //         alumno["nota"] += 2
// //     }
// // })

// // for (let i = 0; i < notasAlumnos.length; i++) {
// //     console.log(i, "esta es la i");
// //     console.log(notasAlumnos[i], "esta es lo que quiero ver");
// //   if (notasAlumnos[i]["nota"] >= 5 && notasAlumnos[i]["nota"] <= 8) {
// //     notasAlumnos[i]["nota"] += 2;
// //   }
// // }

// CLASE 11

let tickets = {
    BuenosAires: 0,
    Cordoba: 1,
    Mendoza: 100,
    Jujuy: 80,
    SanPablo: 12,
  };
  
  function getTickets(place) {
   disableSoldOutButtons(tickets);
    if (tickets[place] > 0) {
      swal("Sold!", `You have tickets to the ${place} concert`, "success");
      tickets[place]-- 
      if (tickets[place] == 0) {
        disableSoldOutButtons(place);
      }
    } else {
      swal(
        "Oh no!",
        `You are outta luck!, there are no more tickets for ${place}`,
        "info"
      );
    }
  }
  