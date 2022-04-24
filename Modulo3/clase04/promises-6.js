const someTime = () => 3000;
const getTime = () => new Date().toISOString()

function processAsync(processName, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('completed ' + processName)
    }, time);
  })
}

processAsync('1', someTime())
  .then((result1) =>  {
    console.log(result1, getTime())
    return processAsync('2', someTime())
  })
  .then((result2) => {
    console.log(result2, getTime())
    return processAsync('3', someTime())
  })
  .then(result3 => {
    console.log(result3, getTime())
    return processAsync('4', someTime())
  })
  .then(result4 => {
    console.log(result4, getTime())
    return processAsync('5', someTime())
  })
  .then(result5 => {
    console.log(result5, getTime())
  })
  .catch(err => console.log(err))
