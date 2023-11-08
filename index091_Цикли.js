// while (true) {
// let a = 1;
// console.log("Hello World!", a);
// ...
// }
// =====================================================================

// let count = 0;

// while (count < 5) {
//   console.log("Hello World!", count); //Hello World! 0 Hello World! 1 Hello World! 2 Hello World! 3 Hello World! 4 Hello World! 5
//   count++;
// }

// =====================================================================
// let count = 0;
// let isFast = true;

// while (count < 5) {
//   console.log("Hello World!", count); //Hello World! 0

//   if (isFast) {
//     count = 5;
//   } else {
//     count++;
//   }
// }

// =====================================================================
let count = 0;
let isFast = true;

while (count < 5) {
  console.log("Hello World!", count); //Hello World! 0 Hello World! 1 Hello World! 2 Hello World! 3

  if (isFast && count >= 3) {
    count = 5;
  } else {
    count++;
  }
}
