
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

// race condition v2
processAsync('1', someTime())
  .then((result) => {
    console.log(result, getTime());
  })
  .catch(printError)

processAsync('2', someTime())
  .then((result) => {
    console.log(result, getTime());
  })
  .catch(printError)

processAsync('3', someTime())
  .then((result) => {
    console.log(result, getTime());
  })
  .catch(printError)

processAsync('4', someTime())
  .then((result) => {
    console.log(result, getTime());
  })
  .catch(printError)

processAsync('5', someTime())
  .then((result) => {
    console.log(result, getTime());
  })
  .catch(printError)
