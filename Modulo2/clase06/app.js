
console.log ("-------------Inicio------------");

/*
Programación funcional

En la programación funcional si cambia el dato original el resultado cambia, si quieres persistencia no debes cambiar los valores del registro original
*/

/* 

Uso de MAP 

Ayuda a poner varias cosas similares donde cambia el valor por medio de MAP puedes como rellenar la tarjeta por decir así

*/

let numbers = [1,2,3,4,5];

let doubles = numbers.map(function(number){
  return number*2;
})

console.log(numbers);
console.log(doubles);


/* Funciones puras - a la misma entrada se espera la misma salida */ 

console.log ("-------------Reto 1------------");

let number = 12345;

//let string = number.toString(); // '12345'
//let array = string.split('');

let array = number.toString().split(''); // con esto te puedes ahorrar las 2 líneas de arriba

console.log(number)
//console.log(string)
console.log(array)

//let arrayOfNumbers = array.map(function(number){
//  return Number(number);
//})

//versión optimizada del de arriba por que se puede tranformar directo
let arrayOfNumbers = array.map(Number)

console.log(arrayOfNumbers)

let sum = arrayOfNumbers.reduce(function(acumulador, valorActual){ 
  return acumulador + valorActual;
}, 0);

console.log(sum)


// Esto hace lo mismo que el anterior pero lo hace optimizadamente con programación funcional

function sumaDeDigitos(numero){
  return numero
          .toString()
          .split('')
          .map(Number)
          .reduce(function(acumulador, valorActual){ 
            return acumulador + valorActual;
          }, 0)
}

console.log(sumaDeDigitos('12345'))

console.log ("-------------Reto 2------------");

// Aplanado de Arrays - Alimenar a nuestra funcion con un arreglo de arreglos, la función debe entregar un arreglo como si no hubiera intermedios

function flatten(arreglos){

  return arreglos.reduce(function(acumulador, valorActual){
    return acumulador.concat(valorActual)
  }, []);

}

let arreglos = [[1,2,3],[4,5],[6]];

let arreglo = flatten(arreglos);

console.log(arreglos);
console.log(arreglo);

console.log ("-------------Reto 3------------");

// Agregar una función compact recibe un arreglo pero SIN los valores falsy - solo regresar los truty

function compact(array3) {
  return array3.filter(chkTruty)
}

function chkTruty(value){
  return Boolean(value)
}

let array3 = [0, 1, false, 2, '', 3];
let compactedArray = compact(array3);

console.log(compactedArray); // [1, 2, 3]

console.log ("-------------Reto 4------------");

//Función de alter order


