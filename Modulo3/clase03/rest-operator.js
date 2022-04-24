// es6
function sumaRest(...numbers) {
  // console.log(Array.isArray(numbers)); // true
  return numbers.reduce((prev, current) => prev + current, 0);
}

// arguments
function sumaArgs() {
  // 'arguments' is an array-like object
  // console.log(Array.isArray(arguments)); // false
  // let total = 0;

  // for (let i = 0; i < arguments.length; i++) {
  //   total += arguments[i];
  // }

  // return total;

  const numbers = Array.prototype.slice.call(arguments); // [...arguments]

  return numbers.reduce((prev, current) => prev + current, 0);
}

console.log(sumaRest(1, 2, 3)); // overloading
console.log(sumaArgs(1, 2, 3)); // overloading
