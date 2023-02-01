// // Варіант 8


let a = 4, b = 6, n = 40;
let h = (b - a) / n;

// функція 25
for (let x = a; x <= b; x += h) {
  let y25 = x + Math.sin(x) - Math.cos(x*3-1);
  console.log(x, y25);
}

// функція 16
for (let x = a; x <= b; x += h) {
  let y16 = 2*(-x) / 100;
  console.log(x, y16);
}

// функція 3
for (let x = a; x <= b; x += h) {
  let y3 = Math.pow(x + 4, 5);
  console.log(x, y3);
}

// функція 2
for (let x = a; x <= b; x += h) {
  let y2 = Math.exp(x);
  console.log(x, y2);
}

// функція 8
for (let x = a; x <= b; x += h) {
  let y8 = 20 / (1 + x * x);
  console.log(x, y8);
}



