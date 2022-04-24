function saludar(signo = "") {
    console.log("Hola " + this.name + signo);
}

function Persona(name) {
    this.name = name;
    this.saludar = saludar;
}

const martha = new Persona("martha");
martha.saludar("😻");