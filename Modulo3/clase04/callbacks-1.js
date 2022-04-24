const time = 1000 // 1 segundo
const cb = () => console.log('Hello world asíncrono!')

console.log('Start')
setTimeout(cb, time)
console.log('End')
