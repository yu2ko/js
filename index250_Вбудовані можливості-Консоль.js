console.log("===1=====================================");
{
  let a = 5;
  a = 10;
  console.error("Помилка: змінна повинна бути 5"); //Помилка: змінна повинна бути 5 - звичайний колір

  // git bash terminal: node > console.error("Помилка: змінна повинна бути 5"); - звичайний колір
  // chrome: console > console.error("Помилка: змінна повинна бути 5"); - червоний колір

  // console.expection("Помилка: змінна повинна бути 5"); - не використовується, замінено console.error(),console.log()

  console.warn("Помилка: змінна повинна бути 5"); //chrome: console > console.warn("Помилка: змінна повинна бути 5"); - жовтий колір

  console.log("===debug=====================================");
  console.debug("Помилка: змінна повинна бути 5"); //chrome: console > console.debug("Помилка: змінна повинна бути 5"); - білий або синій колір(mac)
}

console.log("===2=====================================");
console.group("Group 1");
console.log("Test");
console.groupEnd();
// Group 1
//   Test

console.log("===3=====================================");
console.group("Group 1");

console.log("Test1");
console.warn("Test2");

console.group("Group 2");
console.debug("Test3");
console.groupEnd();

console.groupEnd();
// Group 1
//   Test1
//   Test2
//   Group 2
//     Test3

console.log("===4=====================================");
console.groupCollapsed("Group 1");

console.log("Test1");
console.warn("Test2");

console.groupCollapsed("Group 2");
console.debug("Test3");
console.groupEnd();

console.groupEnd();
// Group 1
//   Test1
//   Test2
//   Group 2
//     Test3

console.log("===5=====================================");
const counterLabel = "Timer";
console.time(counterLabel);

console.group("Group 1");

console.log("Test1");
console.warn("Test2");

console.timeLog(counterLabel);

console.group("Group 2");
console.debug("Test3");
console.groupEnd();

console.groupEnd();

console.timeEnd(counterLabel);
// Group 1
//   Test1
//   Test2
//   Timer: 0.644ms
//   Group 2
//     Test3
// Timer: 1.416ms

console.log("===6=====================================");
const counterLabel6 = "Timer";
console.time(counterLabel6);
console.count(counterLabel6);

console.timeLog(counterLabel6);
console.count(counterLabel6);

console.timeEnd(counterLabel6);
console.countReset(counterLabel6);
console.count(counterLabel6);
// Timer: 1
// Timer: 0.213ms
// Timer: 2
// Timer: 0.555ms
// Timer: 1;

console.log("===7=====================================");
const test1 = () => console.trace("Hello");
const test2 = () => test1();
const test3 = () => test2();
test3();
// Trace: Hello
//     at test1 (C:\Users\Master\projects\work\js-practice\index.js:103:29)
//     at test2 (C:\Users\Master\projects\work\js-practice\index.js:104:21)
//     at test3 (C:\Users\Master\projects\work\js-practice\index.js:105:21)
//     at Object.<anonymous> (C:\Users\Master\projects\work\js-practice\index.js:106:1)
//     at Module._compile (node:internal/modules/cjs/loader:1257:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1311:10)
//     at Module.load (node:internal/modules/cjs/loader:1115:32)
//     at Module._load (node:internal/modules/cjs/loader:962:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:83:12)
//     at node:internal/main/run_main_module:23:47

console.log("===8=====================================");
const data = [
  { name: "John", age: 25, city: "New York" },
  { name: "Alice", age: 30, city: "London" },
];
console.table(data);
// ┌─────────┬─────────┬─────┬────────────┐
// │ (index) │  name   │ age │    city    │
// ├─────────┼─────────┼─────┼────────────┤
// │    0    │ 'John'  │ 25  │ 'New York' │
// │    1    │ 'Alice' │ 30  │  'London'  │
// └─────────┴─────────┴─────┴────────────┘

console.log("===8.1=====================================");
const data81 = [1, 2, 3, 4];
console.table(data81);
// ┌─────────┬────────┐
// │ (index) │ Values │
// ├─────────┼────────┤
// │    0    │   1    │
// │    1    │   2    │
// │    2    │   3    │
// │    3    │   4    │
// └─────────┴────────┘

console.log("===8.2=====================================");
const data82 = [
  { name: "John", age: 25, city: "New York" },
  { name: "Alice", age: 30, city: "London" },
];
console.table(data82, ["name", "city"]);
// ┌─────────┬─────────┬────────────┐
// │ (index) │  name   │    city    │
// ├─────────┼─────────┼────────────┤
// │    0    │ 'John'  │ 'New York' │
// │    1    │ 'Alice' │  'London'  │
// └─────────┴─────────┴────────────┘

console.log("===9=====================================");
const a = 5;
const b = 10;
if (a > b) {
  //...
} else {
  console.warn("Info"); //Info
}

console.log("===9.1=====================================");
const a91 = 5;
const b91 = 10;
const result = a91 > b91;
console.assert(result, "Info"); //Assertion failed: Info (утверждение не выполнено/помилка твердження)
if (result) {
  //...
} else {
  //...
}

console.log("===9.2=====================================");
const a92 = 5;
const b92 = 10;
const result92 = a92 > b92;

if (!result92) {
  console.assert(result92, "Info"); //Assertion failed: Info (утверждение не выполнено/помилка твердження)
  console.log(result92, "Info"); //false Info
}

if (result92) {
  //...
} else {
  //...
}

console.log("===9.3=====================================");
const a93 = 5;
const b93 = 10;
const result93 = a93 > b93;
console.assert(result92, "Info"); //Assertion failed: Info (утверждение не выполнено/помилка твердження)
console.assert(!result92, "Info"); //не буде виводитися

console.log("===10=====================================");
console.clear(); //очистка консолі

console.log("===11=====================================");
console.log("%cHello World", "color: yellow; background-color: blue"); //Hello World - розмальовку можна побачити в браузері

console.log("===11=====================================");
// FaceBook - консоль
// Остановитесь!
// Эта функция браузера предназначена для разработчиков.
// Если кто - то сказал вам скопировать и вставить что - то здесь,
// чтобы включить функцию Facebook или «взломать» чей - то аккаунт, это мошенники.
// Выполнив эти действия, вы предоставите им доступ к своему аккаунту Facebook.
