var a;
if (a == undefined) {
  console.log("The a is undefined.")
}

var b = a + 1;
if (Number.isNaN(b)) {
  console.log("The b is NaN.");
}

if (!Number.isFinite(b)) {
  console.log("The b is Undefined.");
}

if (!Number.isNaN(null)) {
  console.log("The null is not NaN.");
} 

if (!Number.isFinite(null)) {
  console.log("The null is Undefined.");
}

if (!Number.isNaN(undefined)) {
  console.log("The undefined is not NaN.");
}

if (!Number.isFinite(undefined)) {
  console.log("The undefined is Undefined.");
}

if (a == null) {
  console.log("Undefined is null");
}

if (b != null) {
  console.log("NaN is not null");
}
