let horas, minutos, segundos, momentoActual;

const mueveReloj = () => {

    momentoActual = new Date();
    horas = momentoActual.getHours();
    minutos = momentoActual.getMinutes();
    segundos = momentoActual.getSeconds();

    if (horas < 10) horas = `0${horas}`;
    if (minutos < 10) minutos = `0${minutos}`;
    if (segundos < 10) segundos = `0${segundos}`;

    document.getElementById('digits-container').innerHTML = `
        <div class="digits">
            <p id="horas">${horas}:</p>
            <p id="minutos">${minutos}:</p>
            <p id="segundos">${segundos}</p>
        </div>
    `

    // '<div class="digits">' + '<p id="horas">' + horas + '</p>' +
    // '<p id="minutos">' + minutos + '</p>' +
    // '<p id="segundos">' + segundos + '</p>' +
    // '</div>'

    // document.getElementById('digits-container'). innerHTML = horas + ' ' + minutos + ' ' + segundos;
}

setInterval(() => {
    mueveReloj()
}, 1000);

let requestOptions = {
    method: 'GET'
};

const generarClima = (result) => {
    console.log(JSON.parse(result))
    // convertir la repsuesta a un objeto de JS
    let datos = JSON.parse(result);

    const {current: { condition: {icon, text}, feelslike_c }} = datos;
    const {location: { name }} = datos;

    document.getElementById('clima').innerHTML = `
        <div class="clima">
            <h1 class="clima-title">${name}</h1>
            <div class"clima-distribution">
                <p>Condición</p>
                <img src="https:${icon}" alt="condicion del clima" />
                <p>${text}</p>
            </div>
            <div class="clima-elements">
                <p>Sensación térmica</p>
                <p>${feelslike_c} °C</p>
            </div>
        </div>
    `
}

pedirClima();

// Aqui manejamos el modal

let boton = document.getElementById('ciudad-clima');
let input = document.getElementById('nombre-ciudad');
console.log(input)

function pedirClima(ciudad = 'Pachuca') {
    fetch(`https://api.weatherapi.com/v1/current.json?key=54d31babced041509ac221222200409&q=${ciudad}&aqi=no`, requestOptions)
        .then((response) => response.text())
        .then((result) => generarClima(result))
        .catch(error => console.log('error', error))
}

boton.addEventListener('click', () => pedirClima(input.value))