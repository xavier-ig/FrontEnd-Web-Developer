function processAsync(time, cb) {
  setTimeout(cb, time);
}

const someTime = () => 3000;
const getTime = () => new Date().toISOString()

// race condition v2
processAsync(someTime(), () => {
  console.log("process 1", getTime());
});

processAsync(someTime(), () => {
  console.log("process 2", getTime());
});

processAsync(someTime(), () => {
  console.log("process 3", getTime());
});

processAsync(someTime(), () => {
  console.log("process 4", getTime());
});

processAsync(someTime(), () => {
  console.log('process 5', getTime())
})
