function processAsync(processName, time, cb) {
  setTimeout(() => {
    console.log(`Start process ${processName}: ${new Date().toISOString()}`)
    cb()
    console.log(`End process ${processName}: ${new Date().toISOString()}`)
  }, time)
}

// race condition
processAsync('1', 1000, () => {
  console.log('Processing 1')

  processAsync('2', 3000, () => {  // 4 seg
    console.log('Processing 2')
  })

  processAsync('3', 2000, () => { // 3 seg
    console.log('Processing 3')
  })
})

processAsync('4', 999, () => {
  console.log('Processing 4')
})

// 4
// 1
// 3
// 2

