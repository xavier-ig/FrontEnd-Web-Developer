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
fetchAnimals()
  .then((animals) => {
    console.log('Result->', animals)
  })
  .catch((err) => console.error(`${err}`))
