console.log("===1============================");
const User = {
  login: null,
  password: null,
  role: null,
  age: null,
};

function createUser({ login, password, isAdmin }) {
  return Object.create(User, {
    login: {
      value: login,
    },
    password: {
      value: password,
    },
    role: {
      value: isAdmin ? "Admin" : "User",
    },
    verify: {
      value(password) {
        return this.password === password;
      },
    },
  });
}
//======================================

const registerData = {
  login: "Ivan",
  password: "123qwe342",
};

const user = createUser(registerData);

// const user = Object.create(User, {
//   login: {
//     value: registerData.login,
//   },
//   password: {
//     value: registerData.password,
//   },
//   verify: {
//     value(password) {
//       return this.password === password;
//     },
//   },
// });

// console.log("===1.1============================");
// console.log(user.login); //Ivan

// console.log("===1.2============================");
// console.log(user.password); //123qwe342

// console.log("===1.3============================");
// console.log(user); //{}

console.log("===1.4============================");
console.log(user.verify("test")); //false

//======================================

console.log("===2============================");
const adminData = {
  login: "Ivan",
  password: "123qwe342",
  isAdmin: true,
};

const admin = createUser(adminData);
console.log(admin.password); //123qwe342

// const adminUser = Object.create(User, {
//   login: {
//     value: registerData.login,
//   },
//   password: {
//     value: registerData.password,
//   },
//   role: {
//     value: adminData.isAdmin ? "Admin" : "User",
//   },
//   verify: {
//     value(password) {
//       return this.password === password;
//     },
//   },
// });

//======================================

console.log("===3===перенесено на початок!=========================");
// function createUser({ login, password, isAdmin }) {
//   return Object.create(User, {
//     login: {
//       value: login,
//     },
//     password: {
//       value: password,
//     },
//     role: {
//       value: isAdmin ? "Admin" : "User",
//     },
//     verify: {
//       value(password) {
//         return this.password === password;
//       },
//     },
//   });
// }
const testData = {
  login: "Ivan",
  password: "123qwe342",
};
const testUser = createUser(testData);
console.log(testUser.login); //Ivan

//=====================================================
//=====================================================
//=====================================================

console.log("===4=Finish version===========================");
const User4 = {
  login: null,
  password: null,
  role: null,
  age: null,
};

function createUser4({ login, password, isAdmin }) {
  return Object.create(User4, {
    login: {
      value: login,
    },
    password: {
      value: password,
    },
    role: {
      value: isAdmin ? "Admin" : "User",
    },
    verify: {
      value(password) {
        return this.password === password;
      },
    },
  });
}
//======================================

const registerData4 = {
  login: "Ivan",
  password: "123qwe342",
};

const user4 = createUser4(registerData4);

// console.log("===4.1============================");
console.log(user4.verify("test")); //false

//======================================

const adminData4 = {
  login: "Ivan",
  password: "123qwe342",
  isAdmin: true,
};

const admin4 = createUser4(adminData4);

// console.log("===4.2============================");
console.log(admin4.password); //123qwe342

//======================================

const testData4 = {
  login: "Ivan",
  password: "123qwe342",
};
const testUser4 = createUser4(testData4);

// console.log("===4.3============================");
console.log(testUser4.login); //Ivan

//=====================================================
//=====================================================
//=====================================================

console.log("===5=Функція-конструктор замінює прототип===========");
// const User5 = {
//   login: null,
//   password: null,
//   role: null,
//   age: null,
// };

function User5({ login = null, password = null, isAdmin = 0, age = 0 }) {
  console.log("new", new.target);
  // new [Function: User5]
  // ===5.1============================
  // false
  // new [Function: User5]
  // ===5.2============================
  // 123qwe342
  // new [Function: User5]
  // ===5.3============================
  // Ivan

  this.login = login;
  this.password = password;
  this.role = isAdmin ? "Admin" : "User";
  this.age = age;
  this.verify = function (password) {
    return this.password === password;
  };
}

// function UserAdmin({ login = null, password = null, isAdmin = 0, age = 0 }) {
//   this.login = login;
//   this.password = password;
//   this.role = isAdmin ? "Admin" : "User";
//   this.age = age;
//   this.verify = function(password) {
//     return this.password === password;
//   };
// }

// return Object.create(User5, {
//   login: {
//     value: login,
//   },
//   password: {
//     value: password,
//   },
//   role: {
//     value: isAdmin ? "Admin" : "User",
//   },
//   verify: {
//     value(password) {
//       return this.password === password;
//     },
//   },
// });

//======================================

const registerData5 = {
  login: "Ivan",
  password: "123qwe342",
};

const user5 = new User5(registerData5);

// user5.verify = function (password) {
//   return this.password === password;
// };
//альтернативний варіант
// function userVerify (password) {
//   return this.password === password;
// };

// console.log("===5.1============================");
console.log(user5.verify("test")); //false

//======================================

const adminData5 = {
  login: "Ivan",
  password: "123qwe342",
  isAdmin: true,
};

const admin5 = new User5(adminData5);

// console.log("===5.2============================");
console.log(admin5.password); //123qwe342

//======================================

const testData5 = {
  login: "Ivan",
  password: "123qwe342",
};
const testUser5 = new User5(testData5);

// console.log("===5.3============================");
console.log(testUser5.login); //Ivan

//=====================================================
//=====================================================
//=====================================================

console.log("===6=Finish Функція-конструктор замінює прототип===========");

function User6({ login = null, password = null, isAdmin = 0, age = 0 }) {
  console.log("new", new.target);

  this.login = login;
  this.password = password;
  this.role = isAdmin ? "Admin" : "User";
  this.age = age;
  this.verify = function (password) {
    return this.password === password;
  };
}

//======================================

const registerData6 = {
  login: "Ivan",
  password: "123qwe342",
};

const user6 = new User6(registerData6);

// console.log("===6.1============================");
console.log(user6.verify("test")); //false

//======================================

const adminData6 = {
  login: "Ivan",
  password: "123qwe342",
  isAdmin: true,
};

const admin6 = new User6(adminData6);

// console.log("===6.2============================");
console.log(admin6.password); //123qwe342

//======================================

const testData6 = {
  login: "Ivan",
  password: "123qwe342",
};
const testUser6 = new User6(testData6);

// console.log("===6.3============================");
console.log(testUser6.login); //Ivan

//=====================================================
//=====================================================
//=====================================================

console.log("===7==============================");

function User7(data) {
  // console.log("new", new.target);

  if (new.target) {
    const { login = null, password = null, isAdmin = 0, age = 0 } = data;

    this.login = login;
    this.password = password;
    this.role = isAdmin ? "Admin" : "User";
    this.age = age;

    this.verify = function (password) {
      return this.password === password;
    };
  } else {
    return new User7(data);
  }
}

//======================================

const registerData7 = {
  login: "Ivan",
  password: "123qwe342",
};

const user7 = User7(registerData7);

// console.log("===7.1============================");
console.log(user7.verify("test")); //false

//======================================

const adminData7 = {
  login: "Ivan",
  password: "123qwe342",
  isAdmin: true,
};

const admin7 = User7(adminData7);

// console.log("===7.2============================");
console.log(admin7.password); //123qwe342

//======================================

const testData7 = {
  login: "Ivan",
  password: "123qwe342",
};
const testUser7 = User7(testData7);

// console.log("===7.3============================");
console.log(testUser7.login); //Ivan

//=====================================================
//=====================================================
//=====================================================

console.log("===8==============================");

function User8(data) {
  // console.log("new", new.target);

  if (new.target) {
    const { login = null, password = null, isAdmin = 0, age = 0 } = data;

    const role = isAdmin ? "Admin" : "User";

    const verify = function (password) {
      return this.password === password;
    };

    return {
      login,
      password,
      role,
      age,
      verify,
    };
  } else {
    return new User8(data);
  }
}

//======================================

const registerData8 = {
  login: "Ivan",
  password: "123qwe342",
};

const user8 = User8(registerData8);

// console.log("===8.1============================");
console.log(user8.verify("test")); //false

//======================================

const adminData8 = {
  login: "Ivan",
  password: "123qwe342",
  isAdmin: true,
};

const admin8 = User8(adminData8);

// console.log("===8.2============================");
console.log(admin8.password); //123qwe342

//======================================

const testData8 = {
  login: "Ivan",
  password: "123qwe342",
};
const testUser8 = User8(testData8);

// console.log("===8.3============================");
console.log(testUser8.login); //Ivan

//=====================================================
//=====================================================
//=====================================================

console.log("===9==============================");

function User9(data) {
  // console.log("new", new.target);

  if (new.target) {
    const { login = null, password = null, isAdmin = 0, age = 0 } = data;

    const role = isAdmin ? "Admin" : "User";

    const object = {
      login,
      password,
      role,
      age,
    };

    if (role === "Admin") {
      object.verify = function (password) {
        return this.password === password;
      };
    }

    if (age >= 50) {
      object.login = String(object.login).toUpperCase();
    }

    return object;
  } else {
    return new User9(data);
  }
}

//======================================

const registerData9 = {
  login: "Ivan",
  password: "123qwe342",
  isAdmin: true,
};

const user9 = User9(registerData9);

// console.log("===9.1============================");
console.log(user9.verify("test")); //false

//======================================

const adminData9 = {
  login: "Ivan",
  password: "123qwe342",
  isAdmin: true,
};

const admin9 = User9(adminData9);

// console.log("===9.2============================");
console.log(admin9.password); //123qwe342

//======================================

const testData9 = {
  login: "Ivan",
  password: "123qwe342",
  age: 50,
};
const testUser9 = User9(testData9);

// console.log("===9.3============================");
console.log(testUser9.login); //IVAN

console.log("===9.4============================");
console.log(testUser9 === User9); //false

console.log("===9.5============================");
console.log(testUser9.__proto__ === User9); //false

console.log("===9.6============================");
console.log(User9.prototype); //{}

console.log("===9.7============================");
console.log(testUser9.__proto__ === User9.prototype); //false

console.log("===9.8============================");
console.log(Object.getPrototypeOf(testUser9) === User9.prototype); //false

//=====================================================
//=====================================================
//=====================================================

console.log("===10==============================");

function User10(data) {
  // console.log("new", new.target);

  if (new.target) {
    const { login = null, password = null, isAdmin = 0, age = 0 } = data;

    const role = isAdmin ? "Admin" : "User";

    const object = Object.assign(this, {
      login,
      password,
      role,
      age,
    });

    if (role === "Admin") {
      object.verify = function (password) {
        console.debug(password, this);
        return this.password === password;
      };
    }

    if (age >= 50) {
      object.login = String(object.login).toUpperCase();
    }

    object.toString = function () {
      return `Користувач ${this.login}`;
    };

    return object;
  } else {
    return new User10(data);
  }
}

//======================================

const registerData10 = {
  login: "Ivan",
  password: "123qwe342",
  isAdmin: true,
  age: 50,
};

User10.prototype.test = "Hello World";

const user10 = User10(registerData10);

console.log(user10.toString()); //Користувач IVAN

// console.log("===10.1============================");
console.log(user10.test); //Hello World

//======================================

const adminData10 = {
  login: "Ivan",
  password: "123qwe342",
  isAdmin: true,
};

const admin10 = User10(adminData10);

// console.log("===10.2============================");
console.log(admin10.password); //123qwe342

//======================================

const testData10 = {
  login: "Ivan",
  password: "123qwe342",
  age: 50,
};
const testUser10 = User10(testData10);

// console.log("===10.3============================");
console.log(testUser10.login); //IVAN

console.log("===10.4============================");
console.log(Object.getPrototypeOf(testUser10) === User10.prototype); //true

console.log("===10.5============================");
console.log(User10.length); //1

console.log("===10.6============================");
const test = User10;
console.log(test.name); //User10

//======================================
console.log("===10.7============================");
console.log(user10.verify("123qwe342"));
// 123qwe342 User10 {
//   login: 'IVAN',
//   password: '123qwe342',
//   role: 'Admin',
//   age: 50,
//   verify: [Function (anonymous)],
//   toString: [Function (anonymous)]
// }
// true

console.log("===10.8============================");
let verifyUser = user10.verify;
console.log(verifyUser); //[Function (anonymous)]

console.log("===10.9============================");
console.log(verifyUser("123qwe342")); //false
// 123qwe342 <ref *1> Object [global] {
//   global: [Circular *1],
//   queueMicrotask: [Function: queueMicrotask],
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   structuredClone: [Getter/Setter],
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   atob: [Getter/Setter],
//   btoa: [Getter/Setter],
//   performance: [Getter/Setter],
//   fetch: [AsyncFunction: fetch],
//   crypto: [Getter]
// }
// false

console.log("===10.10============================");
console.log(verifyUser.apply(user10, ["123qwe342"]));
// 123qwe342 User10 {
//   login: 'IVAN',
//   password: '123qwe342',
//   role: 'Admin',
//   age: 50,
//   verify: [Function (anonymous)],
//   toString: [Function (anonymous)]
// }
// true

console.log("===10.11============================");
verifyUser = user10.verify.bind(user10, "123qwe342");
console.log(verifyUser());
// 123qwe342 User10 {
//   login: 'IVAN',
//   password: '123qwe342',
//   role: 'Admin',
//   age: 50,
//   verify: [Function (anonymous)],
//   toString: [Function (anonymous)]
// }
// true

console.log("===11============================");
function Animal(name) {
  this.name = name;
}

function Person(name, age) {
  Animal.call(this, name);
  this.age = age;
}
const user11 = new Person("Ivan", 32);
console.log(user11.name); //Ivan

console.log("===12============================");
function Animal12(name) {
  this.name = name;
}

function Person12(name, age) {
  Animal12.apply(this, [name]);
  this.age = age;
}
const user12 = new Person12("Ivan", 32);
console.log(user12.name); //Ivan

console.log("===13============================");
function Animal13(name) {
  this.name = name;
}

const Person13 = function (name, age) {
  Animal13.call(this, name);
  this.age = age;
};
const user13 = new Person13("Ivan", 32);
console.log(user13.name); //Ivan
