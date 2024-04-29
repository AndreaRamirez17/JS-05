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
// Alarma

let segundos=2;//prompt("ingrese la cantidad de segundos necesarios hasta que se ejecute una alarma ");
let miliseg=segundos*1000;
setTimeout(() => {
    console.log("Hora de acostarse despues de "+ segundos+ " segundos" );
  }, miliseg);

//-------------------------------------------------------------------
//Palíndromo
 
const oracion = prompt("Ingrese una palabra u oración:");
function Palindromo(cadena) {
    const cadena1 = cadena.replace(/[^\w]/g, '').toLowerCase();
    //replace(/[^\w]/g, '') reemplaza todos los caracteres que NO son alfanuméricos en una cadena por una cadena vacía 
    //Documentación Principal: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/replace
    const inArr = cadena1.split('');
    const reverseEl = inArr.slice().reverse();
    const revArr = reverseEl.join('');
    return cadena1 === revArr;
}

if (Palindromo(oracion)) {
 console.log("Es un palíndromo.");
} else {
  console.log("No es un palíndromo.");
}

  


//-------------------------------------------------------------------
//Factorial
 
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
// Matriz Plana

let multiDimensión = [1, [2, 3, [4, 5]]];
let arreglo2=[];
let arreglo=multiDimensión.forEach((e)=>{arreglo2.push(String(e))})
var arrFinal = arreglo2.map(function(elemento) {
    // map es para transformar cada elemento del array según la función proporcionada, lo usaba mucho en python jaja
    if (elemento.includes(',')) {
        return elemento.split(',').map(function(numero) { 
            // con includes(',') verificamos si los elementos contienen una coma  
            // usamos map() nuevamente en el array resultante para convertir cada subcadena en un número utilizando parseInt()
            return parseInt(numero);
        });
    }
    return parseInt(elemento);
    // Si el elemento no contiene una coma, simplemente lo convertimos directamente en un número 
}).flat(); // flat() es para aplanar el array de arrays en un único array
console.log(arrFinal);

