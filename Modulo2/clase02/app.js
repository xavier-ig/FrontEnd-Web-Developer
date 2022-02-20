/*
let time = 13

let greeting;

if (time >= 0 && time < 12){
    greeting = "Good morning";
} else if (time >= 12 && time <= 19){
    greeting = "Good afternoon!";
} else if (time >= 20 && time <=23){
    greeting = "Good evening!";
} else{
    greeting = "Hora inválida";
}

console.log(greeting);

*/

/*
for(let i=1;i <= 100;i++){
    if(i % 2 === 0) console.log('Par', i);
}

for(let i=1;i <= 100;i++){
    if(i % 2 !== 0) console.log('Impar', i);
}

for(let i=1;i <= 100;i++){
    if(i % 5 === 0) console.log('Div 5', i);
}

*/

//Entre si y entre 1

for(let i=2;i <= 100;i++){
    let isPrime = true;

    for(let j=2;j <= i;j++){ 
        if(i % j === 0 && j !== i) isPrime = false;
    }

    if(isPrime) console.log('Primo', i);
}