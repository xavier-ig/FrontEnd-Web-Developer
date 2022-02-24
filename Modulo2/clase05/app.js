
console.log ("-------------Inicio------------");

let Vec = function(x, y) {
  this.x = x;
  this.y = y;
  this.prototype.plus = function (Vec2) {
    this.x += Vec2.x;
    this.y += Vec2.y;
  };
}

let vec1 = new Vec(1, 2);
let vec2 = new Vec(2, 3);


Vec.prototype.minus = function(Vec2){
  this.x -= Vec2.x;
  this.y -= Vec2.y;
}

Vec.prototype.lenght = function(){
  this.lenght = this.x+thix.x + this.y*this.y;
}

console.log(vec1.plus(vec2)); // Vec { x: 3, y: 5 }
console.log(vec1.minus(vec2)); // Vec { x: -1, y: -1 }
console.log(vec1.length()); // 2.23606797749979
