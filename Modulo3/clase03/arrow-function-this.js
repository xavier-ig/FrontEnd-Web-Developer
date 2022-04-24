// Usar en documento HTML
const button = document.getElementById("button");

const onClick = function () {
  console.log("click me!");
  console.log(this); // button
  this.innerHTML = "You clicked!";
};

// arrow function hace un biding automático con el scope padre
// const onClick = () => {
//   console.log("click me!");
//   console.log(this); // window! cuidado! 😱
//   this.innerHTML = "You clicked!";
// };

// ejemplo de arrow function que no debe usarse como método.
// const obj = {
//   name: "Juan",
//   sayHello:  () => {
//     console.log("hi " + this.name + "!"); // oops! this es window
//   },
// };

button.addEventListener("click", onClick); // callback

// obj.sayHello();
