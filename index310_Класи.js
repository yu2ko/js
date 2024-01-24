console.log("===1============================");
const User01 = {
  login: null,
  password: null,
  role: null,
  age: null,
};

function Animal() {
  this.test = "Hello World!";
}

function User02({ login, password, role, age }) {
  Animal.call(this);
  // Animal.apply(this); //дасть той же результат

  this.login = login;
  this.password = password;
  this.role = role;
  this.age = age;

  // Object.defineProperty(this, {
  //   //не зручно
  //   name: {
  //     get() {},
  //     set() {},
  //   },
  // });
}
console.log(new User02({}).test); //Hello World!

console.log("===2=Class===========================");
class User {
  login = null;
  password = null;
  role = null;
  age = null;

  isAdmin() {
    return this.role === "Admin";
  }
}
const user = new User();
console.log("===2.1============================");
console.log(user); //User { login: null, password: null, role: null, age: null }

// console.log("===2.2============================");
// console.log(typeof user); //object
// console.log("===2.3============================");
// console.log(user.__proto__); //{}
// console.log("===2.4============================");
// console.log(User.prototype); //{}
// console.log("===2.5============================");
// console.log(User.prototype === user.__proto__); //true
// console.log("===2.6============================");
// console.log(User.prototype.isPrototypeOf(user)); //true

console.log("===2.7============================");
console.log(user.isAdmin()); //false

console.log("===3.1============================");
// function verifyAdmin(fn) {
//   const result = fn();

//   if (!result) {
//     throw new Error("Не адмін");
//   }
//   return true;
// }
// verifyAdmin(user.isAdmin.bind(this));

//    throw new Error("Не адмін");
//     ^

// Error: Не адмін
//     at verifyAdmin (C:\Users\Master\projects\work\js-practice\index.js:66:11)
//     at Object.<anonymous> (C:\Users\Master\projects\work\js-practice\index.js:70:1)
//     at Module._compile (node:internal/modules/cjs/loader:1257:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1311:10)
//     at Module.load (node:internal/modules/cjs/loader:1115:32)
//     at Module._load (node:internal/modules/cjs/loader:962:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:83:12)
//     at node:internal/main/run_main_module:23:47

console.log("===3.2============================");
class User32 {
  login = null;
  password = null;
  role = null;
  age = null;

  isAdmin = () => {
    return this.role === "Admin";
  };
}
const user32 = new User32();
console.log("===3.2.1============================");
// console.log(user32.isAdmin()); //false
// function verifyAdmin(fn) {
//   const result = fn();

//   if (!result) {
//     throw new Error("Не адмін");
//   }
//   return true;
// }
// verifyAdmin(user32.isAdmin);

//    throw new Error("Не адмін");
//     ^

// Error: Не адмін
//     at verifyAdmin (C:\Users\Master\projects\work\js-practice\index.js:103:11)
//     at Object.<anonymous> (C:\Users\Master\projects\work\js-practice\index.js:107:1)
//     at Module._compile (node:internal/modules/cjs/loader:1257:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1311:10)
//     at Module.load (node:internal/modules/cjs/loader:1115:32)
//     at Module._load (node:internal/modules/cjs/loader:962:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:83:12)
//     at node:internal/main/run_main_module:23:47

console.log("===3.3============================");
class User33 {
  login = null;
  password = null;
  role = null;
  static age = null;

  isAdmin = () => {
    return this.role === "Admin";
  };

  verify = (user) => {
    return this.login === user.login;
  };

  createAdminUser = (login) => {
    const password = this.generateRandomPassword();
    return new User33();
  };

  static generateRandomPassword = () => {
    ///...
  };
}
const user33 = new User33();

// console.log(user33.isAdmin()); //false
function verifyAdmin(fn) {
  const result = fn();

  if (!result) {
    throw new Error("Не адмін");
  }
  return true;
}
// verifyAdmin(user33.isAdmin);

console.log("===3.3.1============================");
console.log(user33);
// User33 {
//   login: null,
//   password: null,
//   role: null,
//   age: null,
//   isAdmin: [Function: isAdmin]
// }
// console.log("===3.3.2============================");
console.log(User33.generateRandomPassword()); //undefined, коли використовується static generateRandomPassword = () =>...
// console.log(User33.generateRandomPassword());
//                    ^

// TypeError: User33.generateRandomPassword is not a function
//     at Object.<anonymous> (C:\Users\Master\projects\work\js-practice\index.js:168:20)
//     at Module._compile (node:internal/modules/cjs/loader:1257:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1311:10)
//     at Module.load (node:internal/modules/cjs/loader:1115:32)
//     at Module._load (node:internal/modules/cjs/loader:962:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:83:12)
//     at node:internal/main/run_main_module:23:47

// console.log("===3.3.3============================");
// console.log(user33.generateRandomPassword()); //undefined

console.log("===3.3.4============================");
console.log(user33);
// User33 {
//   login: null,
//   password: null,
//   role: null,
//   isAdmin: [Function: isAdmin],
//   verify: [Function: verify],
//   createAdminUser: [Function: createAdminUser]
// }

console.log("===3.3.5=static===========================");
console.log(User33);
// [class User33] {
//   age: null,
//   generateRandomPassword: [Function: generateRandomPassword]
// }

console.log("===4============================");
class User4 {
  login = null;
  password = null;
  #role = null;
  age = null; //static delete

  id = null;
  #id = 1000;

  isAdmin = () => {
    console.log(this.#id);
    this.#createAdminUser(); //приховує ззовні
    return this.role === "Admin";
  };

  // verify = (user) => {
  //   return this.login === user.login;
  // };

  #createAdminUser = (login) => {
    //приховує ззовні
    const password = this.generateRandomPassword();
    return new User5();
  };

  static generateRandomPassword = () => {
    ///...
  };

  get admin() {
    return this.#role === "Admin";
  }

  set admin(value) {
    this.#role = "Admin";
  }
}
const user4 = new User4();

// console.log(user4.isAdmin()); //false
function verifyAdmin(fn) {
  const result = fn();

  if (!result) {
    throw new Error("Не адмін");
  }
  return true;
}
// verifyAdmin(user4.isAdmin);

console.log("===4.1===========================");
console.log(user4); //User4 to user4
// User4 {
//   login: null,
//   password: null,
//   role: null,
//   age: null,
//   isAdmin: [Function: isAdmin],
//   createAdminUser: [Function: createAdminUser]
// }

console.log("===4.2===========================");
// console.log(user4.#id); //немає доступу
// console.log(user4.#id); //немає доступу
//                  ^

// SyntaxError: Private field '#id' must be declared in an enclosing class
//     at internalCompileFunction (node:internal/vm:73:18)
//     at wrapSafe (node:internal/modules/cjs/loader:1177:20)
//     at Module._compile (node:internal/modules/cjs/loader:1221:27)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1311:10)
//     at Module.load (node:internal/modules/cjs/loader:1115:32)
//     at Module._load (node:internal/modules/cjs/loader:962:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:83:12)
//     at node:internal/main/run_main_module:23:47

console.log("===4.3===========================");
console.log(user4.id); //null

console.log("===4.4===========================");
console.log(user4);
// User4 {
//   login: null,
//   password: null,
//   role: null,
//   age: null,
//   id: null,
//   isAdmin: [Function: isAdmin]
// }

console.log("===4.5===========================");
console.log(user4.admin); //false
console.log("===4.5.1===========================");
user4.admin = true;
console.log(user4.admin); //true

console.log("===4.6===========================");
// console.log(user4.#role);
// console.log(user4.#role);
//                  ^

// SyntaxError: Private field '#role' must be declared in an enclosing class
//     at internalCompileFunction (node:internal/vm:73:18)
//     at wrapSafe (node:internal/modules/cjs/loader:1177:20)
//     at Module._compile (node:internal/modules/cjs/loader:1221:27)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1311:10)
//     at Module.load (node:internal/modules/cjs/loader:1115:32)
//     at Module._load (node:internal/modules/cjs/loader:962:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:83:12)
//     at node:internal/main/run_main_module:23:47

console.log("===5============================");
class User5 {
  constructor(login, password) {
    this.login = login;
    this.password = password;
  }

  login = null;
  password = null;
  #role = null;
  age = null; //static delete

  id = null;
  #id = 1000;

  isAdmin = () => {
    console.log(this.#id);
    this.#createAdminUser(); //приховує ззовні
    return this.role === "Admin";
  };

  #createAdminUser = (login) => {
    //приховує ззовні
    const password = this.generateRandomPassword();
    return new User5();
  };

  static generateRandomPassword = () => {
    ///...
  };

  get admin() {
    return this.#role === "Admin";
  }

  set admin(value) {
    this.#role = "Admin";
  }
}
const user5 = new User5("Ivan", "dfksdk4123");

function verifyAdmin(fn) {
  const result = fn();

  if (!result) {
    throw new Error("Не адмін");
  }
  return true;
}
console.log(user5);
// User5 {
//   login: 'Ivan',
//   password: 'dfksdk4123',
//   age: null,
//   id: null,
//   isAdmin: [Function: isAdmin]
// }

console.log("===6=Наслідування з конструктором===");
class Person6 {
  constructor(name) {
    this.name = name;
  }

  test = () => {
    console.log("Hello World!", this.name);
  };
}

class User6 extends Person6 {
  constructor(login, password) {
    super(login);

    this.login = login;
    this.password = password;
  }

  login = null;
  password = null;
  #role = null;
  age = null;

  id = null;
  #id = 1000;

  isAdmin = () => {
    console.log(this.#id);
    this.#createAdminUser(); //приховує ззовні
    return this.role === "Admin";
  };

  #createAdminUser = (login) => {
    //приховує ззовні
    const password = this.generateRandomPassword();
    return new User6();
  };

  static generateRandomPassword = () => {
    ///...
  };

  get admin() {
    return this.#role === "Admin";
  }

  set admin(value) {
    this.#role = "Admin";
  }
}
const user6 = new User6("Ivan", "dfksdk4123");

function verifyAdmin(fn) {
  const result = fn();

  if (!result) {
    throw new Error("Не адмін");
  }
  return true;
}
console.log(user6.test());
// Hello World! Ivan
// undefined

console.log("===6.1============================");
console.log(user6 instanceof User6); //true
