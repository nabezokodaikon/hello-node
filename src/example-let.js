var a = 1;
let b = 1;
console.log("a = %d, b = %d", a, b);
{
  var a = 2;
  let b = 2;
  console.log("a = %d, b = %d", a, b);
}
console.log("a = %d, b = %d", a, b);

try {
  let c = 3;
  let c = 4;
}
catch (e) {
  console.log(e);
}
