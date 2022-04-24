function processAsync(time, cb) {
  setTimeout(cb, time);
}

// wrapper
const fetchAnimals = () => new Promise((resolve, reject) => {
  processAsync(3000, () => {
    reject(new Error('Algo salió mal'))
  })
})

// cuando la promesa no se cumple

const printAnimals = (animals) => {
  console.log('Result->', animals)
}

const printError = (err) => console.error(`${err}`)

fetchAnimals().then(printAnimals, printError)

