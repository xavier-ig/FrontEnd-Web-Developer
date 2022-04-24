const someTime = () => 1000;
const getTime = () => new Date().toISOString();

function processAsync(processName, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() >= 0.8) {
        resolve("completed " + processName);
      } else {
        reject(new Error("Oops algo salio mal"));
      }
    }, time);
  });
}

// async con promesas
// processAsync("1", someTime())
//   .then((result) => console.log(result))
//   .catch(console.error);

// async pero se lee como sync
async function getResult() {
  try {
    const result = await processAsync("3", someTime());
    console.log(result);
  } catch (err) {
    console.error("Catch:", err);
  }
}

getResult();
