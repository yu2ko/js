console.log("===1============================");
// const a1 = 10;
// a1 = 5;
// a = 5;
//   ^
// TypeError: Assignment to constant variable.
//     at Object.<anonymous> (C:\Users\Master\projects\work\js-practice\index.js:3:3)
//     at Module._compile (node:internal/modules/cjs/loader:1257:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1311:10)
//     at Module.load (node:internal/modules/cjs/loader:1115:32)
//     at Module._load (node:internal/modules/cjs/loader:962:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:83:12)
//     at node:internal/main/run_main_module:23:47

console.log("===2============================");
// try {
//   const a = 10;
//   a = 5;
// } catch {
//   console.log("hello world"); //hello world
// }
// console.log("2"); //2

console.log("===3============================");
// try {
//   const a3 = 10;
// 	a3 = 5;
// 	console.log("1") - //не буде виконуватися
// } catch (err) {
//   console.log(err);
//   // TypeError: Assignment to constant variable.
//   //   at Object.<anonymous> (C:\Users\Master\projects\work\js-practice\index.js:27:6)
//   //   at Module._compile (node:internal/modules/cjs/loader:1257:14)
//   //   at Module._extensions..js (node:internal/modules/cjs/loader:1311:10)
//   //   at Module.load (node:internal/modules/cjs/loader:1115:32)
//   //   at Module._load (node:internal/modules/cjs/loader:962:12)
//   //   at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:83:12)
//   //   at node:internal/main/run_main_module:23:47
// } finally {
//   console.log("2"); //2
// }

console.log("===4============================");
// function getUserData(userId) {
//   try {
//     const a4 = 10;
//     a4 = 5;
//     //...робить запит до БД
//   } catch (err) {
//     //...-помилка про те,що дані з сервера не можуть бути отримані
//     const newError = new Error(
//       `Помилка.Не можливо отримати дані користувача ${userId}`,
//       { cause: err }
//     );
//     console.log(newError);
//   }
// }
// getUserData(10123);
// Error: Помилка.Не можливо отримати дані користувача 10123
//     at getUserData (C:\Users\Master\projects\work\js-practice\index.js:51:22)
//     at Object.<anonymous> (C:\Users\Master\projects\work\js-practice\index.js:58:1)
//     ... 5 lines matching cause stack trace ...
//     at node:internal/main/run_main_module:23:47 {
//   [cause]: TypeError: Assignment to constant variable.
//       at getUserData (C:\Users\Master\projects\work\js-practice\index.js:47:8)
//       at Object.<anonymous> (C:\Users\Master\projects\work\js-practice\index.js:58:1)
//       at Module._compile (node:internal/modules/cjs/loader:1257:14)
//       at Module._extensions..js (node:internal/modules/cjs/loader:1311:10)
//       at Module.load (node:internal/modules/cjs/loader:1115:32)
//       at Module._load (node:internal/modules/cjs/loader:962:12)
//       at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:83:12)
//       at node:internal/main/run_main_module:23:47
// }

console.log("===5.1============================");
function getUserData(userId) {
  try {
    const a4 = 10;
    a4 = 5;
    //...робить запит до БД
  } catch (err) {
    //...-помилка про те,що дані з сервера не можуть бути отримані
    throw (newError = new Error(
      `Помилка.Не можливо отримати дані користувача ${userId}`,
      { cause: err }
    ));
    console.log(newError);
  }
}

console.log("===5.2============================");
function updateUserData(userId) {
  try {
    const data = getUserData(userId);
    data.name = "Ivan";
    //...
  } catch (err) {
    const newError = new Error(
      `Помилка.Не можливо оновити дані користувача ${userId}`,
      { cause: err }
    );
    console.log(newError);
  }
}
updateUserData(3123);
// Error: Помилка.Не можливо оновити дані користувача 3123
//     at updateUserData (C:\Users\Master\projects\work\js-practice\index.js:98:22)
//     at Object.<anonymous> (C:\Users\Master\projects\work\js-practice\index.js:105:1)
//     ... 5 lines matching cause stack trace ...
//     at node:internal/main/run_main_module:23:47 {
//   [cause]: Error: Помилка.Не можливо отримати дані користувача 3123
//       at getUserData (C:\Users\Master\projects\work\js-practice\index.js:83:23)
//       at updateUserData (C:\Users\Master\projects\work\js-practice\index.js:94:18)
//       ... 6 lines matching cause stack trace ...
//       at node:internal/main/run_main_module:23:47 {
//     [cause]: TypeError: Assignment to constant variable.
//         at getUserData (C:\Users\Master\projects\work\js-practice\index.js:79:8)
//         at updateUserData (C:\Users\Master\projects\work\js-practice\index.js:94:18)
//         at Object.<anonymous> (C:\Users\Master\projects\work\js-practice\index.js:105:1)
//         at Module._compile (node:internal/modules/cjs/loader:1257:14)
//         at Module._extensions..js (node:internal/modules/cjs/loader:1311:10)
//         at Module.load (node:internal/modules/cjs/loader:1115:32)
//         at Module._load (node:internal/modules/cjs/loader:962:12)
//         at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:83:12)
//         at node:internal/main/run_main_module:23:47
//   }
// }

console.log("===6.1============================");
function getUserData(userId) {
  try {
    const a4 = 10;
    a4 = 5;
    //...робить запит до БД
  } catch (err) {
    //...-помилка про те,що дані з сервера не можуть бути отримані
    throw (newError = new Error(
      `Помилка.Не можливо отримати дані користувача ${userId}`,
      { cause: err }
    ));
    console.log(newError);
  }
}

console.log("===6.2============================");
function updateUserData(userId) {
  try {
    const data = getUserData(userId);
    data.name = "Ivan";
    //...
  } catch (err) {
    const newError = new Error(
      `Помилка.Не можливо оновити дані користувача ${userId}`,
      { cause: err }
    );
    console.log(newError.message); //Помилка.Не можливо оновити дані користувача 3123
  }
}
updateUserData(3123);

console.log("===6.3============================");
console.log(newError.message); //Помилка.Не можливо оновити дані користувача 3123

console.log("===7============================");
function sumNum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Аргументи не є числами");
  }
  return a + b;
}

try {
  sumNum(10, "abc");
} catch (err) {
  console.log(err.message); //Аргументи не є числами

  console.log("===7.1============================");
  console.log(err.name); //Error
}

console.log("===8============================");
const ERROR_ID_LIST = { NOT_NUMBER: 1 };
function sumNum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    const error = TypeError("Аргументи не є числами");
    error.name = ERROR_ID_LIST.NOT_NUMBER;
    throw error;
  }
  return a + b;
}

try {
  sumNum(10, "abc");
} catch (err) {
  if (err.name === ERROR_ID_LIST.NOT_NUMBER) {
    sumNum(10, 0);
  }
}

console.log("===9============================");
function updateUserData(userId) {
  try {
    const data = getUserData(userId);
    data.name = "Ivan";
    //...
  } catch (err) {
    const newError = new Error(
      `Помилка.Не можливо оновити дані користувача ${userId}`,
      { cause: err }
    );
    console.log(newError.cause);
  }
}
updateUserData(3123);
// Error: Помилка.Не можливо отримати дані користувача 3123
//     at getUserData (C:\Users\Master\projects\work\js-practice\index.js:137:23)
//     at updateUserData (C:\Users\Master\projects\work\js-practice\index.js:203:18)
//     ... 6 lines matching cause stack trace ...
//     at node:internal/main/run_main_module:23:47 {
//   [cause]: TypeError: Assignment to constant variable.
//       at getUserData (C:\Users\Master\projects\work\js-practice\index.js:133:8)
//       at updateUserData (C:\Users\Master\projects\work\js-practice\index.js:203:18)
//       at Object.<anonymous> (C:\Users\Master\projects\work\js-practice\index.js:214:1)
//       at Module._compile (node:internal/modules/cjs/loader:1257:14)
//       at Module._extensions..js (node:internal/modules/cjs/loader:1311:10)
//       at Module.load (node:internal/modules/cjs/loader:1115:32)
//       at Module._load (node:internal/modules/cjs/loader:962:12)
//       at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:83:12)
//       at node:internal/main/run_main_module:23:47
// }

console.log("===10============================");
function updateUserData(userId) {
  try {
    const data = getUserData(userId);
    data.name = "Ivan";
    //...
  } catch (err) {
    const newError = new Error(
      `Помилка.Не можливо оновити дані користувача ${userId}`,
      { cause: err }
    );
    console.log(newError.stack);
  }
}
updateUserData(3123);
// Error: Помилка.Не можливо оновити дані користувача 3123
//     at updateUserData (C:\Users\Master\projects\work\js-practice\index.js:239:22)
//     at Object.<anonymous> (C:\Users\Master\projects\work\js-practice\index.js:246:1)
//     at Module._compile (node:internal/modules/cjs/loader:1257:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1311:10)
//     at Module.load (node:internal/modules/cjs/loader:1115:32)
//     at Module._load (node:internal/modules/cjs/loader:962:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:83:12)
//     at node:internal/main/run_main_module:23:47

console.log("===11============================");
function updateUserData(userId) {
  try {
    const data = getUserData(userId);
    data.name = "Ivan";
    //...
  } catch (err) {
    const newError = new Error(
      `Помилка.Не можливо оновити дані користувача ${userId}`,
      { cause: err }
    );
    console.log(newError.toString()); //Error: Помилка.Не можливо оновити дані користувача 3123
  }
}
updateUserData(3123);
