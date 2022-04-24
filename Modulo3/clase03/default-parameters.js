const spanish = "Hola";
const english = "Hello";
const german = "Hallo";

function saludo({ nombre = "User", mensaje = english, signo = "!" } = {}) {
  return `${mensaje} ${nombre}${signo}`;
}

const name = "Bertha";

// const props = { nombre: name };

console.log(saludo());
