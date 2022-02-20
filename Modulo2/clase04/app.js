
console.log ("-------------Inicio------------");

let array = [1, 3, 4, 6, 8, 9, 5, 9] //arreglo inicial
//[2, 6, 8, 12, 16, 18, 10, 18] // arreglo final

let arrayFinal = (array) => {
    let multiplica = []

    for(let i = 0;i < array.length;i++){
        //    array[i] *= 2;
        multiplica.push(array[i] * 2);
    }
    return multiplica;
}

console.log(arrayFinal(array))
console.log(array)

console.log ("-------------Promedio calificaciones------------");

let calificaciones = [10, 9, 2, 6, 9, 5, 8, 7, 6, 8]

function promedio(calificaciones){
    let prom = 0;

    for(let i = 0;i < calificaciones.length;i++){
        prom += calificaciones[i];
    }

    return (prom / calificaciones.length);
}

console.log("Calificaciones:", calificaciones)
console.log("Promedio:", promedio(calificaciones))

console.log ("-------------Objetos------------");

let john = {
    firstName: "John",
    lastName: "Doe",
    birthDay: [15, 09, 1990], //se pueden agregar arreglos dentro de objetos
    fechaNac: { // se pueden crear objetos dentro de objetos
        dia: 4,
        mes: 5,
        anio: 1983
    }
}

console.log(john.firstName)
console.log(john['firstName'])

//let nombreCompleto = john.firstName + ' ' + john.lastName;
let fechaNacimiento = john.birthDay[0] + '-' + john.birthDay[1] + '-' + john.birthDay[2];

let nombreCompleto = `${john.firstName} ${john.lastName} fecha de nacimiento ${john.birthDay[0]}-${john.birthDay[1]}-${john.birthDay[2]}`;

console.log(nombreCompleto)

console.log ("-------------Objetos - Convertir de objeto a array------------");

let auto = {
    brand: 'Nissan',
    model: 'Sentra',
    year: 2020
}

//Object.keys - regresa los nombres de las propiedades de un objeto en ARRAY

function keyValuePairs(objeto){
    let keys = Object.keys(objeto);
    let pares = [];

    for(let i = 0;i < keys.length;i++){
        pares.push([keys[i], objeto[keys[i]]]);
    }

    return pares;
}

let arregloDeObjeto = keyValuePairs(auto);

console.log(arregloDeObjeto);

console.log ("-------------Objetos - Convertir de array a objeto------------");


function convertArrayToObject(array){
    let objetoDeArray = {};

    for(let i = 0;i < array.length;i++){
        objetoDeArray[array[i][0]] = array[i][1];
    }
    return objetoDeArray;
}

let objetoFromArray = Object.fromEntries(arregloDeObjeto)

console.log(objetoFromArray);
console.log(convertArrayToObject(arregloDeObjeto));

console.log ("-------------Objetos - PLUCK ------------");


let singers = [
    { name: 'Steven Tyler', band: 'Aerosmith', born: 1948 },
    { name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 },
    { name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },
    { name: 'Chris Cornell', band: 'Soundgarden', born: 1964 },
  ];

function pluck(object, propiedad){
    let arr = [];

    for(let i = 0;i < object.length;i++){
        arr.push(object[i][propiedad])
    }
    return arr;
}

  console.log( pluck(singers, 'name') );
// ["Steven Tyler", "Karen Carpenter", "Kurt Cobain", "Chris Cornell"]

console.log( pluck(singers, 'band') );
// ["Aerosmith", "The Carpenters", "Nirvana", "Soundgarden"]

console.log( pluck(singers, 'born') );
// [1948, 1950, 1967, 1964]