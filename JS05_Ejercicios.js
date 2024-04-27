//Perfil del usuario

let userData= prompt("Ingresa tú nombre de usuario: ");
let userAge=prompt("Ingresa tú edad: ");
let userMovies=prompt("Ingresa tú lista de peliculas favoritas separadas por comas: ");
const moviesArr=userMovies.split(' ');
var rndmIndex = Math.floor(Math.random() * moviesArr.length); //moviesArray
var rndmMovie = moviesArr[rndmIndex];
console.log(`Mi nombre de usuario es ${userData}, tengo ${userAge} años de edad y la película ${rndmMovie} es una de mis favoritas`);

//-------------------------------------------------------------------
// Numero mas alto
//Este ejemplo se imprime en alertas, no sé si sea una buena practica, pero me gustó el resultado, algo diferente a solo publicarlo en la consola :)

let shouldRetry;
do { 
let serieNum=prompt("Ingrese una serie de 10 numeros:")
const newArr=serieNum.split(' ');
if (newArr.length == [10]){
let array1=[];
let numArray=newArr.forEach((e)=>{array1.push(Number(e))});
const max=Math.max.apply(null, array1);
alert("El numero maximo es:  "+ max);
shouldRetry = confirm("¿Deseas volver a intentarlo con otra serie de numeros?");
}else if (newArr.length < [10]){
   alert("Ingresaste menos de 10 numeros, vuele a intentarlo");
    shouldRetry = true; 
}
else{
    alert("Ingresaste más de 10 numeros,vuelve a intentarlo");
    shouldRetry = true; 
}
}while (shouldRetry);
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
 * Escriba un programa que solicite un número entero n . Donde  1 <= n. Resuelve esto usando recursividad.
 */
let m=prompt("Para determinar el factorial, ingrese un numero: ");
function factorial(n) {
    if (n === 1) {
        return 1;
    }
   
    else if (n > 1) {
        return n * factorial(n - 1);
    }
    else{
        console.log("no calculo el factorial de 0 o de numeros negativos")
    }
}
console.log(factorial(m));


//-------------------------------------------------------------------
/**
 * matriz plana
 * Escriba un programa que tome la siguiente matriz anidada y la aplane (convirtiéndola en una matriz 1D). Utilice cualquier tipo de algoritmo que desee, como devoluciones de llamada, recursividad, etc.
 * let multiDimensión = [1, [2, 3, [4, 5, [6]]]];
 */