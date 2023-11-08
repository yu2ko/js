// let sum = 0;
// let count = 1;

// do {
//   sum += count;
//   count++;
//   console.log(count, sum);
// } while (count <= 5);

let container = 5;
let storage = 20;

let car = 3;

do {
  car++;
  storage -= container;
  console.log(car, storage);
} while (car < 3);
if (car > 3) {
  console.log("Нам потрібна нова машина");
}
