function processAsync(time, cb) {
  setTimeout(cb, time);
}

// wrapper
const exec = function (resolve, reject) {
  // codígo asincrono
  processAsync(3000, () => {
    resolve(['gato', 'perro', 'perico']) // manualmente
  })
}
const p = new Promise(exec)

// cuando la promesa se cumple
const onResolve = (result) => {
  console.log('Result->', result)
}

p.then(onResolve)

