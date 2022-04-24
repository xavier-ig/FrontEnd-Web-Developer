const obj = {
  firstName: "Isaac",
  age: 35,
  pets: ["Luna", "Gato"],
  address: { country: "MX" },
  dob: new Date(),
};

const pets = [];

// const firstName = obj.firstName;
// const age = obj.age;
// const pets = obj.pets;
// const address = obj.address;
const {
  firstName,
  pets: [firstPet],
  age,
  address: { ...address }, // destructure + rest // copia clone (referencia diferente)
} = obj;

address.country = "UK";

// console.log(firstName, age, firstPet, address, pets);

// console.log(obj.address);

// tecnica para copiar objetos. No recomendada
const copy = JSON.parse(JSON.stringify(obj));

copy.firstName = "Pao";

console.log(copy); // referencia diferente
console.log(obj);

console.log(obj === copy);
console.log(obj.dob.getFullYear());
console.log(copy.dob.getFullYear());
