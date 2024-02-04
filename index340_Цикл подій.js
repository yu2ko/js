console.log("===1===============================");
function consoleLog() {
  const test = "Hello World!";

  console.log("4");
  console.log("5");
  console.log("6");

  // return consoleLog(); // щоб перезгрузити стек визовів
  // 	node:internal/streams/readable:924
  // Readable.prototype.removeListener = function(ev, fn) {
  //                                             ^

  // RangeError: Maximum call stack size exceeded
  //     at Readable.removeListener (node:internal/streams/readable:924:45)
  //     at console.value (node:internal/console/constructor:312:16)
  //     at console.log (node:internal/console/constructor:379:26)
  //     at consoleLog (C:\Users\Master\projects\work\js-practice\index.js:5:11)
  //     at consoleLog (C:\Users\Master\projects\work\js-practice\index.js:9:10)
  //     at consoleLog (C:\Users\Master\projects\work\js-practice\index.js:9:10)
  //     at consoleLog (C:\Users\Master\projects\work\js-practice\index.js:9:10)
  //     at consoleLog (C:\Users\Master\projects\work\js-practice\index.js:9:10)
  //     at consoleLog (C:\Users\Master\projects\work\js-practice\index.js:9:10)
  //     at consoleLog (C:\Users\Master\projects\work\js-practice\index.js:9:10)
}

console.log("1");
console.log("2");
console.log("3");

consoleLog();
// 1
// 2
// 3
// 4
// 5
// 6

console.log("===2===============================");
// for (let i = 0; i < 10000; i++) {
//   console.log(i);
// }

console.log("===3===============================");
// console.log("Перший");

// setTimeout(() => {
//   console.log("Другий");
// }, 1000 * 2);

// console.log("Третій");
// Перший;
// Третій;
// Другий;

console.log("===4===============================");
// setTimeout(() => {
//   console.log("Перший");
// }, 0);

// setTimeout(() => {
//   console.log("Другий");
// }, 0);

// console.log("Третій");

// console.log("Четвертий");
// Третій;
// Четвертий;
// Перший;
// Другий;

console.log("===5===============================");
// setTimeout(() => {
//   console.log("Перший");
// }, 0);

// setImmediate(() => {
//   console.log("Другий");
// });

// console.log("Третій");

// console.log("Четвертий");
// Третій;
// Четвертий;
// Перший;
// Другий;

console.log("===6===============================");
// // setImmediate має нижчий приорітет, аніж setTimeout
// setImmediate(() => {
//   console.log("Перший");
// });

// //setTimeout має більший приорітет, аніж setImmediate
// setTimeout(() => {
//   console.log("Другий");
// }, 0);

// console.log("Третій");

// console.log("Четвертий");
// // Третій;
// // Четвертий;
// // Другий;
// // Перший;

console.log("===7===============================");
// // setImmediate має нижчий приорітет, аніж setTimeout
// setImmediate(() => {
//   console.log("Перший");
// });

// //setTimeout має більший приорітет, аніж setImmediate
// setTimeout(() => {
//   console.log("Другий");
// }, 5000);

// setInterval(() => {
//   console.log("П'ятий");
// }, 1000);

// console.log("Третій");

// console.log("Четвертий");
// // Третій
// // Четвертий
// // Перший
// // П'ятий
// // П'ятий
// // П'ятий
// // П'ятий
// // Другий
// // П'ятий
// // П'ятий
// // П'ятий
// // П'ятий
// // П'ятий
// // П'ятий
// // П'ятий
// // П'ятий
// // П'ятий
// // П'ятий...
// // Як виправити?

console.log("===8===============================");
// setImmediate(() => {
//   console.log("Перший");
// });

// const intervalId = setInterval(() => {
//   console.log("П'ятий");
// }, 1000);

// setTimeout(() => {
//   console.log("Другий");
//   clearInterval(intervalId);
// }, 5000);

// console.log("Третій");

// console.log("Четвертий");
// // Третій
// // Четвертий
// // Перший
// // П'ятий
// // П'ятий
// // П'ятий
// // П'ятий
// // Другий

console.log("===8===============================");
// const immediateId = setImmediate(() => {
//   console.log("Перший");
// });

// const intervalId = setInterval(() => {
//   console.log("П'ятий");
// }, 1000);

// setTimeout(() => {
//   console.log("Другий");
//   clearInterval(intervalId);
// }, 5000);

// console.log("Третій");

// console.log("Четвертий");

// clearImmediate(immediateId);
// // Третій
// // Четвертий
// // П'ятий
// // П'ятий
// // П'ятий
// // П'ятий
// // Другий
// ////немає "Перший"

console.log("===9===============================");
const immediateId = setImmediate(() => {
  console.log("Перший");
});

const intervalId = setInterval(() => {
  console.log("П'ятий");
}, 1000);

const timeoutId = setTimeout(() => {
  console.log("Другий");
  clearInterval(intervalId);
}, 5000);

console.log("Третій");

console.log("Четвертий");

clearImmediate(immediateId);

clearTimeout(timeoutId);
// Третій
// Четвертий
// П'ятий
// П'ятий
// П'ятий
// П'ятий
// П'ятий
// П'ятий
// П'ятий
// П'ятий
// П'ятий
// П'ятий
// П'ятий
// П'ятий
// П'ятий
// П'ятий...
