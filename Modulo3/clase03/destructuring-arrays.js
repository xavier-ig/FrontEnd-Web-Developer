const number = [1, 2, 3, 4, 5];

// const n1 = number[0];
// const n2 = number[1];
// const [n1, n2, , , n5] = number; // destructuring a un arreglo
const nLast = number[number.length - 1];

const [n1, n2, ...nRest] = number;
const [, , n5] = nRest;

// console.log(n1); // 1
// console.log(n2); // 2
// console.log(nLast); // 5
// console.log(n5); // 5
// console.log(nRest); // [ 3, 4, 5 ]
// console.log(number); // [ 1, 2, 3, 4, 5 ]

// const [, ...newNumbers] = number; // not mutate

// console.log(newNumbers);

// const nFirst = number.shift(); // mutate

// console.log(nFirst);
// console.log(number);

const newNumbers = number.slice(1);

console.log(newNumbers);
console.log(number);
