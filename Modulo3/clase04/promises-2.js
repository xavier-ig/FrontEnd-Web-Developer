function processAsync(time, cb) {
  setTimeout(cb, time);
}

// wrapper
const fetchAnimals = () => new Promise((resolve, reject) => {
  // codígo asincrono
  processAsync(3000, () => {
    resolve(['gato', 'perro', 'perico']) // manualmente
  })
})

// cuando la promesa se cumple
// chaining
fetchAnimals() 
  .then((animals) => {
    console.log('Result->', animals)
  })

