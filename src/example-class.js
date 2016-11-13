"use strict"

function Before(x, y) {
  this.x = x;
  this.y = y;
}

Before.prototype.getArea = function() {
  return this.x * this.y;
}

var b = new Before(2, 3);
console.log("b.x = %d, b.y = %d, b.area = %d", b.x, b.y, b.getArea());

class After {

  static getEmpty() {
    return 0;
  }

  constructor(args) {
    if (args) {
      this.x = (args.x)? args.x: After.getEmpty();
      this.y = (args.y)? args.y: After.getEmpty();
    } else {
      this.x = After.getEmpty();
      this.y = After.getEmpty();
    }
  }

  getArea() {
    return this.x * this.y;
  }
}

var a = new After({x: 4, y: 5});
console.log("a.x = %d, a.y = %d, a.area = %d", a.x, a.y, a.getArea());

if (a.z) {
  console.log("a.z is found."); 
} else {
  console.log("a.z is not found.");
}

var c = new After();
console.log("c.x = %d, c.y = %d, c.area = %d", c.x, c.y, c.getArea());

After.getEmpty = function() { return -1; }
var d = new After();
console.log("d.x = %d, d.y = %d, d.area = %d", d.x, d.y, d.getArea());
