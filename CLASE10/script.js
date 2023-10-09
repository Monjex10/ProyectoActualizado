console.log("Hola mundo");

// STRING 

// let word = "holamascaracteres"
// console.log(word[0]);

// let largoDelString = word.length;
// console.log(word[word.length -1]);


// ARREGLOS 

// let arreglo = ["hola", "chau", 25, 987, "mouse"]

// arreglo[0] = "Hello"
// arreglo[5] = "teclado"
// arreglo[10] = "monitor"

// let coleccion = ["hola", "chau", 25, 987, null, function () {console.log("hola accediste a este elemento")}, "mouse"]

// PUSH Y POP

// let numbers = ["inicio"]

// numbers.push(10)
// numbers.push(5,"casa", "mate")
// numbers.push(100,200,300)
// numbers.pop()

// UNSHIFT Y SHIFT
// numbers.unshift(10,80,4,7,6)
// numbers.unshift("voy a ser el primero")
// numbers.shift()

// infexOf()

// let numeros = [2, 8, 23, "casa", "vista"]

// Filter - nos devuelve un nuevo arreglo

// let notas = [1,2,3,4,10,7,6,4,8,10,10,10]

// MANERA CLASICA CON PALABRA FUNCTION - SIN ARROW FUNCTION 
// let notasApribadas = notas.filter(function (nota) {
//     return nota == 10
// })

// CON ARROW FUNCTION => 
// let notasAprobadas = notas.filter((nota) => {
//     return nota == 10
// })

// SLICE 
// let puntajes = [0,1,2,3,4,5,6,7,8]
// let clone = puntajes.slice()

// SPLICE  - corta el array en el indice indicado y el segundo parametro podemos decir cuantos elementos eliminar
// puntajes.splice(2,3)


// JOIN Y SPLIT 

// let arreglo = ["hola", "mery", "¿como estas?"]

// arreglo.join("-") // nos convierte un arreglo en una cadena de caracteres 

// let cadena = "Hola Mery como estas?" // te convierte en un arreglo una cadena de caracteres 

// ----- ITERAR UN ARREGLO ---- 

// let colores = ["Rojo", "Azul", "Verde", "Amarillo"]

// console.log(colores[0]);
// console.log(colores[1]);
// console.log(colores[2]);
// console.log(colores[3]);

// let i = 0
// while (i < colores.length) {
//     console.log(colores[i] + " usando while");
//     i ++
// }

// for (let index = 0; index < colores.length ; index ++) {
//     console.log(colores[index] + " usando el for loop");
// }

// console.log("ya me sali del for loop");

/// FOREACH

// let numeros = [5, 6, 7, 8]
// numeros.forEach(function (num) {
//     console.log(num + 50 );
// })










