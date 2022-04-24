// Usar en documento HTML
const button = document.getElementById("button");

button.onClick = function () {
  // this == button
  // scope local
  return () => {
    console.log("click me!");
    console.log(this); // button
    this.innerHTML = "You clicked!";
  };
};

const onClick = button.onClick();

button.addEventListener("click", onClick); // callback
