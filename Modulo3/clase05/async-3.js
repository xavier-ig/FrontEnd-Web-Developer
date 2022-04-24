const someTime = () => Math.floor(Math.random() * 10) * 1000;
const getTime = () => new Date().toISOString();

function processAsync(name, time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("process " + name);
    }, time);
  });
}

const printError = (err) => console.error(err);

// race condition v2
async function process() {
  console.log("start", getTime());
  // indenpendiente
  const arr = [
    processAsync("1", someTime()),
    processAsync("2", someTime()),
    processAsync("3", someTime()),
    processAsync("4", someTime()),
    processAsync("5", someTime()),
  ];

  const results = await Promise.all(
    arr.map(async (p) => {
      const r = await p; // result 1
      console.log(r, getTime());
      const [, name] = r.split(" "); // ["result", "1"]
      return Number(name) * 2; // 2
    })
  );

  // const results = await Promise.all(arr);

  console.log(results);
  console.log("end", getTime());
}

process();
