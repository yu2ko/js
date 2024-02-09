console.log("===1===============================");
// async function performFile(path) {
//   const content = await loadFile(path);
//   //
//   const data = await convertFile(content);
//   //
//   const convertedContent = await getInfoFromFile(data);
//   //
//   await saveFile(convertedContent);
//   //
//   await sendFileToClient();
// }

// performFile("file.png");

console.log("===2.1===============================");
// function convertFile(content, callback) {
//   setTimeout(function () {
//     // console.log("222222")
//     callback(null, `Конвертований вміст: ${content.toUpperCase()}`);
//   }, 1000);
// }

// function loadFile(filename) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // console.log("222222")
//       resolve(`Вміст файлу ${filename}`);
//     }, 2000);
//   });
// }

// function convertFile(content) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Конвертований вміст: ${content.toUpperCase()}`);
//     }, 1000);
//   });
// }

// function saveFile(convertedContent) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       //console.log("saveFile")
//       reject("Error test");
//     }, 1500);
//   });
// }

// function sendFileToClient() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       //console.log("sendFileToClient")
//       reject("Error test 2");
//     }, 5000);
//   });
// }

// function getInfoFromFile(file) {
//   //console.log(file,1111)

//   return Promise.resolve(file + 100);
// }

// async function performFile(path) {
//   const content = await loadFile(path);

//   return [
//     async () => {
//       const data = await convertFile(content);

//       return [
//         async () => {
//           const convertedContent = await getInfoFromFile(data);

//           await saveFile(convertedContent);

//           await sendFileToClient();
//         },
//         data,
//       ];
//     },
//     content,
//   ];
// }

// performFile("file.png").then(([next, content]) => console.log(next, content));
// // [AsyncFunction (anonymous)] Вміст файлу file.png

console.log("===2.2===============================");
// function convertFile(content, callback) {
//   setTimeout(function () {
//     // console.log("222222")
//     callback(null, `Конвертований вміст: ${content.toUpperCase()}`);
//   }, 1000);
// }

// function loadFile(filename) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // console.log("222222")
//       resolve(`Вміст файлу ${filename}`);
//     }, 2000);
//   });
// }

// function convertFile(content) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Конвертований вміст: ${content.toUpperCase()}`);
//     }, 1000);
//   });
// }

// function saveFile(convertedContent) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       //console.log("saveFile")
//       reject("Error test");
//     }, 1500);
//   });
// }

// function sendFileToClient() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       //console.log("sendFileToClient")
//       reject("Error test 2");
//     }, 5000);
//   });
// }

// function getInfoFromFile(file) {
//   //console.log(file,1111)

//   return Promise.resolve(file + 100);
// }

// async function performFile(path) {
//   const content = await loadFile(path);

//   return [
//     async () => {
//       const data = await convertFile(content);

//       return [
//         async () => {
//           const convertedContent = await getInfoFromFile(data);

//           await saveFile(convertedContent);

//           await sendFileToClient();
//         },
//         data,
//       ];
//     },
//     content,
//   ];
// }

// async function main() {
//   const [next, content] = await performFile("file.png");

//   console.log(next, content);

//   //.....code.................

//   await next();
// }

// main();
// // [AsyncFunction (anonymous)] Вміст файлу file.png

console.log("===3===============================");
function* myGenerator() {
  console.log("Start");
  yield 1;

  console.log("Start 2");
  yield 2;

  console.log("Start 3");
  yield 3;

  console.log("End");
  return 4;
}

const generator = myGenerator();

console.log(generator); //Object [Generator] {}
console.log(generator.value); //undefined
console.log(generator.done); //undefined

console.log("===3.1===============================");
const result1 = generator.next();
console.log(result1);
// Start
// { value: 1, done: false }

console.log("===3.2===============================");
const result2 = generator.next();
console.log(result2);
// Start 2
// { value: 2, done: false }

console.log("===3.3===============================");
const result3 = generator.next();
console.log(result3);
// Start 3
// { value: 3, done: false }

console.log("===3.4===============================");
const result4 = generator.next();
console.log(result4);
// End
// { value: 4, done: true }

console.log("===4===============================");
function* processOrder(order) {
  yield validateOrder(order);
  yield processPayment(order);
  yield sendOrderConfirmation(order);

  return order;
}

function validateOrder(order) {
  const isValid = order.quantity > 0;
  return isValid;
}

function processPayment(order) {
  const isPaymentSuccessful = Math.random() < 0.5;
  return isPaymentSuccessful;
}

function sendOrderConfirmation() {
  const isConfirmationSent = true;
  return isConfirmationSent;
}

const order = { id: 123, product: "Товар", quantity: 2 };

const orderProcessing = processOrder(order);

const isValidateOrder = orderProcessing.next().value;
if (isValidateOrder === false) {
  //...
}

const isProcessPayment = orderProcessing.next().value;
if (isProcessPayment === false) {
  //...
}

console.log(orderProcessing.next());
console.log(orderProcessing.next());
// { value: true, done: false }
// { value: { id: 123, product: 'Товар', quantity: 2 }, done: true }

console.log("===5===============================");
function* generatorFunction() {
  yield "First value";
  yield "Second value";
  // return 3 //не буде повертатись
}

const generator5 = generatorFunction();
for (let value of generator5) {
  console.log(value);
}
// First value
// Second value

console.log("===6===============================");
function* generatorOne() {
  yield "1 1";
  yield "1 2";
}

function* generatorTwo() {
  yield* generatorOne();
  yield "2 1";
  yield "2 2";
}

const generator6 = generatorTwo();

console.log(generator6.next());
console.log(generator6.next());
console.log(generator6.next());
console.log(generator6.next());

// { value: '1 1', done: false }
// { value: '1 2', done: false }
// { value: '2 1', done: false }
// { value: '2 2', done: false }

console.log("===7===============================");
function* myGenerator7() {
  yield 1;
  const value = yield 2;
  yield 3;
  yield value;
}

const generator7 = myGenerator7();

console.log(generator7.next().value);
console.log(generator7.next().value);
console.log(generator7.next(4).value);
console.log(generator7.next().value);

// 1
// 2
// 3
// 4

console.log("===8===============================");
function* myGenerator8() {
  const test = yield 1;
  console.log("test", test);
  const value = yield 2;
  yield 3;
  yield value;
}

const generator8 = myGenerator8();

console.log(generator8.next().value);
console.log(generator8.next(4).value);
console.log(generator8.next(4).value);
console.log(generator8.next().value);

// 1
// test 4
// 2
// 3
// 4

console.log("===9===============================");
function* myGenerator9() {
  const test = yield 1;

  return 10;

  console.log("test", test);
  const value = yield 2;
  yield 3;
  yield value;
}

const generator9 = myGenerator9();

console.log(generator9.next().value);

console.log(generator9.next().value);

console.log(generator9.next(4).value);
console.log(generator9.next(4).value);
console.log(generator9.next().value);

// 1;
// 10;
// undefined;
// undefined;
// undefined;

console.log("===10===============================");
function* myGenerator10() {
  const test = yield 1;

  return 10;

  console.log("test", test);
  const value = yield 2;
  yield 3;
  yield value;
}

const generator10 = myGenerator10();

console.log(generator10.next().value);

console.log(generator10.next());

console.log(generator10.next(4).value);
console.log(generator10.next(4).value);
console.log(generator10.next().value);

// 1
// { value: 10, done: true }
// undefined
// undefined
// undefined

console.log("===11===============================");
function* myGenerator11() {
  const test = yield 1;

  return 10;

  console.log("test", test);
  const value = yield 2;
  yield 3;
  yield value;
}

const generator11 = myGenerator11();

console.log(generator11.next().value);

console.log(generator11.return(100));

console.log(generator11.next(4).value);
console.log(generator11.next(4).value);
console.log(generator11.next().value);

// 1
// { value: 100, done: true }
// undefined
// undefined
// undefined

console.log("===12===============================");
// function* myGenerator12() {
//   const test = yield 1;

//   return 10;

//   console.log("test", test);
//   const value = yield 2;
//   yield 3;
//   yield value;
// }

// const generator12 = myGenerator12();

// console.log(generator12.next().value);

// console.log(generator12.throw(100));

// console.log(generator12.next(4).value);
// console.log(generator12.next(4).value);
// console.log(generator12.next().value);

// // 1

// // C:\Users\Master\projects\work\js-practice\index.js:428
// //   const test = yield 1;
// //                ^
// // 100
// // (Use `node --trace-uncaught ...` to show where the exception was thrown)

// // Node.js v20.3.1

console.log("===13===============================");
// function* myGenerator13() {
//   const test = yield 1;

//   return 10;

//   console.log("test", test);
//   const value = yield 2;
//   yield 3;
//   yield value;
// }

// const generator13 = myGenerator13();

// console.log(generator13.next().value);

// console.log(generator13.throw(new Error()));

// console.log(generator13.next(4).value);
// console.log(generator13.next(4).value);
// console.log(generator13.next().value);

// // 1
// // C:\Users\Master\projects\work\js-practice\index.js:460
// //   const test = yield 1;
// //                ^

// // Error
// //     at Object.<anonymous> (C:\Users\Master\projects\work\js-practice\index.js:474:31)
// //     at Module._compile (node:internal/modules/cjs/loader:1257:14)
// //     at Module._extensions..js (node:internal/modules/cjs/loader:1311:10)
// //     at Module.load (node:internal/modules/cjs/loader:1115:32)
// //     at Module._load (node:internal/modules/cjs/loader:962:12)
// //     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:83:12)
// //     at node:internal/main/run_main_module:23:47

// // Node.js v20.3.1

console.log("===14===============================");
function* myGenerator14() {
  try {
    const test = yield 1;

    return 10;

    console.log("test", test);
    const value = yield 2;
    yield 3;
    yield value;
  } catch (e) {
    console.log(e);
  }
}

const generator14 = myGenerator14();

console.log(generator14.next().value);

console.log(generator14.throw(new Error()));

// console.log(generator14.next(4).value);
// console.log(generator14.next(4).value);
// console.log(generator14.next().value);

// 1
// Error
//     at Object.<anonymous> (C:\Users\Master\projects\work\js-practice\index.js:516:31)
//     at Module._compile (node:internal/modules/cjs/loader:1257:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1311:10)
//     at Module.load (node:internal/modules/cjs/loader:1115:32)
//     at Module._load (node:internal/modules/cjs/loader:962:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:83:12)
//     at node:internal/main/run_main_module:23:47
// { value: undefined, done: true }
// undefined
// undefined
// undefined

console.log("===15===============================");
function* myGenerator15() {
  try {
    const test = yield 1;

    return 10;

    console.log("test", test);
    const value = yield 2;
    yield 3;
    yield value;
  } catch (e) {
    // console.log(e);
  }
}

const generator15 = myGenerator15();

console.log(generator15.next().value);

console.log(generator15.throw(new Error()));

// console.log(generator15.next(4).value);
// console.log(generator15.next(4).value);
// console.log(generator15.next().value);

// 1
// { value: undefined, done: true }

console.log("===16===============================");
function* myGenerator16() {
  try {
    const test = yield 1;

    return 10;

    console.log("test", test);
    const value = yield 2;
    yield 3;
    yield value;
  } catch (e) {
    // console.log(e);
    yield 1000;
    yield 2000;
    yield 3000;
    yield 4000;
  }
}

const generator16 = myGenerator16();

console.log(generator16.next().value);

console.log(generator16.throw(new Error()));

console.log(generator16.next(4).value);
console.log(generator16.next(4).value);
console.log(generator16.next().value);

// 1
// { value: 1000, done: false }
// 2000
// 3000
// 4000

console.log("===17===============================");
function* myGenerator17() {
  try {
    const test = yield 1;

    return 10;

    console.log("test", test);
    const value = yield 2;
    yield 3;
    yield value;
  } catch (e) {
    // console.log(e);
    yield 1000;
  } finally {
    yield 2000;
  }
  yield 3000;
  yield 4000;
}

const generator17 = myGenerator17();

console.log(generator17.next().value);

console.log(generator17.throw(new Error()));

console.log(generator17.next(4).value);
console.log(generator17.next(4).value);
console.log(generator17.next().value);

// 1
// { value: 1000, done: false }
// 2000
// 3000
// 4000

console.log("===18===конкурує з 19,20,21============================");
// const asyncFunc = () => new Promise((resolve) => setTimeout(resolve, 1000));

// async function* asyncGenerator() {
//   await asyncFunc();
//   yield "After 1 second";
//   await asyncFunc();
//   yield "After 2 second";
// }

// async function runGenerator() {
//   const generator = asyncGenerator();

//   let result = null;

//   result = await generator.next();

//   console.log(result);

//   result = await generator.next();

//   // result.value;

//   console.log(result);
// }
// runGenerator();

// // { value: 'After 1 second', done: false }
// // { value: 'After 2 second', done: false }

console.log("===19===конкурує з 18,20,21============================");
// const asyncFunc19 = () => new Promise((resolve) => setTimeout(resolve, 1000));

// async function* asyncGenerator19() {
//   await asyncFunc19();
//   yield "After 1 second";
//   await asyncFunc19();
//   yield "After 2 second";
// }

// async function runGenerator19() {
//   const generator19 = asyncGenerator19();

//   for await (const result19 of generator19) {
//     console.log(result19);

//     await asyncFunc19();
//   }
// }
// runGenerator19();

// // After 1 second
// // After 2 second

console.log("===20===конкурує з 18,19,21============================");
// // Функція, яка симулює завантаження даних з сервера
// function fetchDataFromServer() {
//   return new Promise((resolve, reject) => {
//     // симулюємо асинхронний запит до сервера
//     setTimeout(() => {
//       const randomNumber = Math.random();
//       if (randomNumber < 0.7) {
//         resolve("Дані успішно завантажені");
//       } else {
//         reject("Помилка завантаження даних");
//       }
//     }, 1000);
//   });
// }

// // Функція для конвертації даних
// function convertData(data) {
//   return new Promise((resolve) => {
//     // Симулюємо асинхронну конвертацію даних
//     setTimeout(() => {
//       const convertedData = data.toUpperCase(); //Приклад конвертації даних
//       resolve(convertedData);
//     }, 500);
//   });
// }

// //Генераторний метод, що використовує `yield` для послідовного завантаження даних з сервера
// async function* fetchData() {
//   try {
//     yield "pending"; //Повертаємо статус "pending"

//     const result20 = await fetchDataFromServer(); //Завантажуємо дані з сервера
//     yield "success"; //Повертаємо статус "success"

//     const convertedData20 = await convertData(result20); //Конвертуємо дані

//     return convertedData20; //Повертаємо конвертовані дані
//   } catch (error) {
//     yield "error"; //Повертаємо статус "error "
//   }
// }

// (async () => {
//   const generator20 = fetchData();

//   console.log(await generator20.next());
//   console.log(await generator20.next());
//   console.log(await generator20.next());
// })();

// // { value: 'pending', done: false }
// // { value: 'error', done: false }
// // { value: undefined, done: true }

or(random);

// { value: 'pending', done: false }
// { value: 'success', done: false }
// { value: 'ДАНІ УСПІШНО ЗАВАНТАЖЕНІ', done: true }

console.log("===21===конкурує з 18,19,20============================");
// Функція, яка симулює завантаження даних з сервера
function fetchDataFromServer() {
  return new Promise((resolve, reject) => {
    // симулюємо асинхронний запит до сервера
    setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber < 0.7) {
        resolve("Дані успішно завантажені");
      } else {
        reject("Помилка завантаження даних");
      }
    }, 1000);
  });
}

// Функція для конвертації даних
function convertData(data) {
  return new Promise((resolve) => {
    // Симулюємо асинхронну конвертацію даних
    setTimeout(() => {
      const convertedData = data.toUpperCase(); //Приклад конвертації даних
      resolve(convertedData);
    }, 500);
  });
}

//Генераторний метод, що використовує `yield` для послідовного завантаження даних з сервера
async function* fetchData() {
  try {
    const result21 = await fetchDataFromServer(); //Завантажуємо дані з сервера

    yield "pending"; //Повертаємо статус "pending"

    const convertedData21 = await convertData(result21); //Конвертуємо дані

    yield "success"; //Повертаємо статус "success"

    return convertedData21; //Повертаємо конвертовані дані
  } catch (error) {
    yield "error"; //Повертаємо статус "error "
  }
}

(async () => {
  const generator21 = fetchData();

  console.log(await generator21.next());
  console.log(await generator21.next());
  console.log(await generator21.next());
})();

// { value: 'error', done: false }
// { value: undefined, done: true }
// { value: undefined, done: true }

or(random);

// { value: 'pending', done: false }
// { value: 'success', done: false }
// { value: 'ДАНІ УСПІШНО ЗАВАНТАЖЕНІ', done: true }
