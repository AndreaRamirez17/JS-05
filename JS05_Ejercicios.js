/**
 * Perfil del usuario
 * Escriba un programa que solicite al usuario sus datos: nombre de usuario, edad y una lista de sus películas favoritas. Almacene la información y luego muéstrela en la consola. Tenga en cuenta que el resultado de las películas debe agregar un pequeño mensaje como: 'La película {película} es una de mis favoritas'.
 */
let userData= prompt("Ingresa tú nombre de usuario: ");
let userAge=prompt("Ingresa tú edad: ");
let userMovies=prompt("Ingresa tú lista de peliculas favoritas separadas por comas: ");
const moviesArr=userMovies.split(',');
var rndmIndex = Math.floor(Math.random() * moviesArr.length); //moviesArray
var rndmMovie = moviesArr[rndmIndex];
console.log(`Mi nombre de usuario es ${userData}, tengo ${userAge} años de edad y la película ${rndmMovie} es una de mis favoritas`);

//-------------------------------------------------------------------
/**
 * Numero mas alto
 * Escribe un programa que solicite 10 números. Usando operadores lógicos y cualquier otra función/estructura de JavaScript que haya visto antes, determine y genere el mayor de esos números.
 */
//-------------------------------------------------------------------
/**
 * Alarma
 * Escribe un programa que pregunte a un usuario la cantidad de segundos necesarios hasta que se ejecute una alarma (mensaje) junto con un texto para mostrar una vez que hayan pasado esos segundos en tiempo real.
 * Ejemplo de resultado : "Hora de acostarse después de 10 segundos".
 */
//-------------------------------------------------------------------
/**
 * Palíndromo
 * Escriba un programa que solicite una palabra u oración (puede estar en mayúscula, tener espacios y puntuación). Averigua si la oración/palabra es un palíndromo o no. Ignorando la puntuación, los espacios y las letras mayúsculas.
 */
//-------------------------------------------------------------------
/**
 * Factorial
 * Escriba un programa que solicite un número entero n . Donde  1 <= norte. Resuelve esto usando recursividad.
 */
//-------------------------------------------------------------------
/**
 * matriz plana
 * Escriba un programa que tome la siguiente matriz anidada y la aplane (convirtiéndola en una matriz 1D). Utilice cualquier tipo de algoritmo que desee, como devoluciones de llamada, recursividad, etc.
 * let multiDimensión = [1, [2, 3, [4, 5, [6]]]];
 */