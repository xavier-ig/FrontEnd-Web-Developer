// const suma = (n1, n2) => {
//   return n1 + n2;
// };

const suma = (n1, n2) => n1 + n2; // implicit return

// const suma = (n1, n2) => {
//   n1 + n2; // all functions return undefined by default
// }; // ❌

const print = n => console.log(n);

print(suma(3, 5)); // 8
