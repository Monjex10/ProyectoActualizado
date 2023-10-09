// console.log("Hola mundo");

// FUNCIONES
// Una Función es un bloque de código que nos permite realizar una tarea en particular. Para que la Función se ejecute, "algo" debe invocarla. Es una herramienta muy útil porque estiliza el código y lo hace más escalable.

// Sintaxis
// Declarando una funcion
// function felizCumple() {
//   console.log("que los cumplas feliz");
//   console.log("que los cumplas feliz");
//   console.log("que los cumplas Carlos");
//   console.log("que los cumplas feliz");
// }

// Ejecutar la funcion
// felizCumple()

// Ejercicio de Pledu
// definimos
// function fechaYHora() {
//     console.log("son las 18:53 horas del miercoles");
// }

// Objeto Date() - nativo de javascript
// function fechaYHora() {
//     console.log(`La fecha y hora es ${Date()}`);
// }

// alert("hola yo tambien soy una funcion")
// prompt("ingrese un dato")

// Parametros de una función
// function felizCumple(nombre) {
//   console.log("que los cumplas feliz");
//   console.log("que los cumplas feliz");
//   console.log(`Que los cunplas feliz ${nombre}`);
//   console.log("que los cumplas feliz");
// }

// felizCumple("Roberto")

// Funcion con Numeros

// function areaCuadrado(lado) {
//     console.log("el area del cuadrado " + (lado * lado));
// }

// areaCuadrado(10)

// Multiples parametros
// function areaTriaungulo(base, altura) {
//     console.log("el area del triangulo es " + (base * altura) / 2 );
// }

// areaTriaungulo(10,5)

// function saludar(nombre1, nombre2, nombre3) {
//     console.log(`Hola ${nombre1}`);
//     console.log(`Hola ${nombre2}`);
//     console.log(`Hola ${nombre3}`);
// }

// saludar("Marta","Juan", "Juliana","Alejandro")

// Parametros por default
// function multiplicar( a = 10, b = 1) {
//     console.log(a*b);
// }

// multiplicar() // toma los valores por default

// Variables en javascript

// let nombreUsuario = prompt("quien cumple años hoy?");

// function felizCumple(nombre) {
//   console.log("que los cumplas feliz");
//   console.log("que los cumplas feliz");
//   console.log(`Que los cunplas feliz ${nombre}`);
//   console.log("que los cumplas feliz");
// }

// felizCumple(nombreUsuario);

// El Alcance de las variables en Javascript
// Variable globales y locales

// let nombre = "Juan"; // variable global

// function saludar() {
//   let apellido = "Lopez"; // variable local
//   console.log(`Hola ${nombre} ${apellido}`);
// }

// saludar();
// console.log(apellido); // esto va a dar is not defined

// KEYWORD RETURN
// function cuadrado(numero) {
//     console.log(numero * numero);
// }

// cuadrado(4)

// console.log("El resultado de 4 al cuadrado es: " + cuadrado(4));

// function cuadrado(numero) {
//     return numero * numero
//     console.log("se esta procesando el caluclo");
//     console.log(" esta es la parte final de la function");
// }

// console.log("El resultado de 4 al cuadrado es: " + cuadrado(4));

// let resultadoDeCuatro = cuadrado(4)

// let resultado = cuadrado(4)

// // HOISTING
// saludar1() // la puede ejecutar a pesar de que esta al principio de su declaración

// function saludar1() {
//     console.log(`Hola como estas? esta arriba`);
// }

// // OTRA MANERA DE DECLARAR UNA FUNCION
// let saludar2 = function () {
//     console.log(`Hola como estas? soy saludar 2`);
// }
// // solo la ejecuta si esta despues de su declaración
// saludar2()

// ARROW FUNCTION // se utiliza muy a menudo
// funcion clásica

// function sumar1(a, b) {
//     return a + b
// }

// // let resultado = sumar(5,10)
// let sumar2 = (a,b) => a + b

// let resultadoArrow = sumar2(5,10)

// CALLBACK FUNCTION
//function que es argumento de otra, y luego es ejecutada por esta.

// function test2(x, y) {
//   return x * 2;
//   console.log(x);
//   return x / 2;
// }

// test2(10);

// EJERCICIOS
// 2 - MATEMATICA SIMPLE
// 1-
// function triplicador(numero) {
//     return numero * 3
// }
// // 2-
// function multiplicador(numero1, numero2) {
//     return numero1 * numero2
// }

// // 3-
// function division(numero1, numero2) {
//     return numero1 / numero2
// }

// // 4-
// function resto(numero1, numero2) {
//     return numero1 % numero2
// }

// let resultado = resto(division(multiplicador(triplicador(5), 12), 12), 3)

// let resultado1 = triplicador(5)
// let resutlado2 = multiplicador(resultado1, 12)
// --- asi sucesivamente, seguir completando :)

// NIVEL 2
// 1-

// function contarDeA_n(contar_de_a, contar_hasta) {
//   let contador = 1;
//   while (contador <= contar_hasta) {
//     if (contador % contar_de_a == 0) {
//       console.log(`el numero de intervalo ${contador}`);
//     }
//     contador++;
//   }
// }

// contarDeA_n(2, 10);

// 2 - Saludar con Arrows

// function saludar(nombre) {
//   if (nombre === undefined) {
//     return "hola anónimo";
//   } else {
//     return "hola " + nombre;
//   }
// }

// let saludar = (nombre) => {
//   if (nombre === undefined) {
//     return "Hola anónimo";
//   } else {
//     return `Hola ${nombre}`;
//   }
// };

// 3-

// let nombreCompleto = (nombre, apellido) => `${nombre} ${apellido}`;

// let exclamar = str => str

// Continuar con las arrows function :) 

// 4- 

// const longitudDelNombre = (nombre = "") => nombre.length

// console.log( longitudDelNombre() ); // 0
// console.log( longitudDelNombre('Ana') ); // 3


// PROYECTO LIBRERIA SWEET ALERT 

function mostrarAlerta() {
    swal("Buena banda", "aca podes escuchar los mejores temas", "success");
}


