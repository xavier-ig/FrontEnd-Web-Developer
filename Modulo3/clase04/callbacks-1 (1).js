// start
const start = new Date()
console.log('Start', start.getSeconds(), start.getMilliseconds())


const time = 1000 // 1 segundo en milisegundos
const cb = () => {
  const asyncTime = new Date()
  console.log('Hello world asíncrono!', asyncTime.getSeconds(), asyncTime.getMilliseconds())
}

// async
setTimeout(cb, time)

// long sync process
let i = 0
while(++i <= 10000000) {}

// end
const end = new Date()
console.log('End', end.getSeconds(), end.getMilliseconds())

// NO! while (true) {} // infinity loop - bloquear el event loop
