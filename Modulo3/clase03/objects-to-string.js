// Extra: Objects to string

const persona = {
  name: "Juan ",
  toString: function () {
    return `Soy ${this.name}`;
  },
};

console.log(String(persona)); // casting // parsing