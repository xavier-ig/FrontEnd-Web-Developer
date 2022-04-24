const someTime = () => 3000;
const getTime = () => new Date().toISOString();

function processAsync(processName, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("completed " + processName);
    }, time);
  });
}

async function processAll() {
  try {
    // dependencia
    const result1 = await processAsync("1", someTime());
    console.log(result1, getTime());
    const result2 = await processAsync("2", someTime());
    console.log(result2, getTime());
    const result3 = await processAsync("3", someTime());
    console.log(result3, getTime());
    const result4 = await processAsync("4", someTime());
    console.log(result4, getTime());
    const result5 = await processAsync("5", someTime());
    console.log(result5, getTime());

    // a partir de aqui
    // codigo para procesar todos los resultados
  } catch (err) {
    console.error(err);
  }
}

processAll();
