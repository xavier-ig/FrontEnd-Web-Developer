
const someTime = () => 3000;
const getTime = () => new Date().toISOString()

function processAsync(name, time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('process ' + name)
    }, time);
  })
}

const printError = (err) => console.error(err)

Promise.all([
  processAsync('1', someTime()),
  processAsync('2', someTime()),
  processAsync('3', someTime()),
  processAsync('4', someTime()),
  processAsync('5', someTime())
])
.then((results) => {
  results.forEach(result => console.log(result, getTime()))
})
.catch(printError)
.then()
.catch()
