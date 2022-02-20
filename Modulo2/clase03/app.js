
function calculateAge(birthYear){
    let age = 2022 - birthYear;
    return age;
}

function yearsUntilRetirement (birthYear, name){
    let age = calculateAge(birthYear);

    let retirement = 67 - age;

    console.log(name + ' retires in ' + retirement + ' years');
}

yearsUntilRetirement(1983, 'Javier');

console.log ("-------------Next------------");


//ECMA version 5
function exponential_v5 (base, exp) {
    let result = base;
    for(let i = 1;i < exp;i++){
        result = result * base;
    }
    return result;
}

//ECMA version 6
const exponential = (base, exp) => {
    let result = 1;

    for(let i = 0; i < exp; i++){
        result *= base;
    }
    
    return result;
}


console.log('pot 2,2 ' + exponential(2,2));
console.log('pot 3,2 ' + exponential(3,2));
console.log('pot 2,3 ' + exponential(2,3));
console.log('pot 3,3 ' + exponential(3,3));
console.log('pot 4,2 ' + exponential(4,2));
console.log('pot 4,3 ' + exponential(4,3));

console.log ("-------------Next------------");

let square = function(number){
    return number*number;
}

let squareOffFour = square(4);
console.log("Square of 4: ", squareOffFour);

console.log ("-------------Next------------");

//Factoria con funcion recursiva
let factorial = function fac(number){
    return number < 2 ? 1 : number * fac(number - 1);
}

console.log("Factorial 5: ", factorial(5));

console.log ("-------------Next------------");


//Función de número mayor

function maxNumber(a, b){
    return a > b ? a : b;
}

console.log('Max 3 o 8 :', maxNumber(3,8));
console.log('Max 7 o 4 :', maxNumber(7,4));


console.log ("-------------Next -- Fibonacci ------------");

function fibonacci(limit){
    let f = 1;

    return limit > f ? fibonacci(limit - 1) + fibonacci(limit - 2) : f;
}

function secuenciaFibo(limit){
    if(limit < 0){
        return console.log("El límite solo puede ser positivo desde cero");
    }
    else
    {
        for(i=0;i<=limit;i++){
            console.log(fibonacci(i));
        }
    }
}
console.log("Fibonacci 0: ", secuenciaFibo(0));
console.log("Fibonacci 1: ", secuenciaFibo(1));
console.log("Fibonacci 2: ", secuenciaFibo(2));
console.log("Fibonacci 3: ", secuenciaFibo(3));
console.log("Fibonacci 4: ", secuenciaFibo(4));
console.log("Fibonacci 5: ", secuenciaFibo(5));
console.log("Fibonacci 6: ", secuenciaFibo(6));

console.log ("-------------Next -- Eloquent Farm ------------");

function printFarmInventory(number, label) {
    let numberString = String(number);

    console.log(`${fillString(numberString,3)} ${label}`);
}

function fillString(quantity, size){
    
    while(quantity.length < size) quantity = "0" + quantity;

    return quantity;
}

printFarmInventory(3, "Vacas");
printFarmInventory(11, "Gallinas");
printFarmInventory(7, "Puercos");