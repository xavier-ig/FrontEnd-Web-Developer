// function declaration
function fn1() {
  console.log("soy " + fn1.name);
}

// function expression
const fn2 = function () {
  console.log(`soy ${fn2.name}`);
};

// arrow function
const fn3 = () => {
  console.log("soy fn3");
};

fn1();
fn2();
fn3();

