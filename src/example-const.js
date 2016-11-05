const a = 1;
const b = 1;
console.log("a = %d, b = %d", a, b);
{
  const a = 2;
  const b = 2;
  console.log("a = %d, b = %d", a, b);
}
console.log("a = %d, b = %d", a, b);

try {
  a = 2;
}
catch (e) {
  console.log(e);
}

const dic = {c: 3, d: 4};
const {c, d} = dic; 
console.log(c);
console.log(d);
