const p = new Promise(() => {})

console.log(p) // pending

const pResolved = Promise.resolve({ data: true })

console.log(pResolved) // resolved

const pReject = Promise.reject(new Error('oops'))

console.log(pReject) // reject
