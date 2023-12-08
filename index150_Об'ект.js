const a = {
  null: 100,
  100: 100,
  amount: 100,
  // ключ: значення,
  // ключ: значення,
};
console.log("===1.1=============================");
console.log(a.null); //100 - null не використовують!
console.log("===1.2=============================");
console.log(a); //{ '100': 100, null: 100, amount: 100 }

console.log("===2=============================");
const a2 = {
  amount: 100,
};
console.log(a2); //{ amount: 100 }

console.log("===3=============================");
const a3 = {
  ["text"]: "Hello World!",
};
console.log(a3.text); //Hello World!

console.log("===4=============================");
const name = "key";
const a4 = {
  [name]: "Hello World",
  [1 + 2]: "Hello World!",
  [console.log()]: "Hello World.",
};
console.log("===4.1=============================");
console.log(a4[name]); //Hello World
console.log("===4.2=============================");
console.log(a4[1 + 2]); //Hello World!
console.log("===4.3=============================");
console.log(a4[console.log()]); //Hello World.
console.log("===4.4=============================");
console.log(a4); //{ '3': 'Hello World!', key: 'Hello World', undefined: 'Hello World.' }

console.log("===5.1=============================");
// функція-конструктор
const b = Object();
console.log(b); //{}

console.log("===5.2=============================");
const b2 = {};
console.log(b); //{}

console.log("===6=============================");
const key = "234443qwrrqr";
const c = {
  amount: 100,
  [key]: "Hello World!",
};

console.log(c.amount); //100
console.log(c[key]); //Hello World!
console.log(c); //{ amount: 100, '234443qwrrqr': 'Hello World!' }

console.log("===6.1=============================");
delete c.amount;
console.log(c); //{ '234443qwrrqr': 'Hello World!' }

console.log("===6.2=============================");
const key2 = "234443qwrrqr";
const c2 = {
  amount: 100,

  info: {
    name: "Ivan",
    age: 35,
  },
  [key2]: {
    [key2]: "Ivan",
    age: 35,
  },
  [key2]: "GoldKey",
};
console.log("===6.2.1=(c2.info.name)============================");
console.log(c2.info.name); //Ivan
console.log("===6.2.2=(c2[key2][key2])============================");
console.log(c2[key2][key2]); // Ivan //буде undefined, якщо [key2]: "GoldKey" буде перезаписан
console.log("===6.2.2=(c2[key2][key2])============================");
console.log(c2);
// {
//   amount: 100,
//   info: { name: 'Ivan', age: 35 }
//   '234443qwrrqr': 'GoldKey',
// }

console.log("===6.3=============================");
const key3 = "234443qwrrqr";
const c3 = {
  amount: 100,
  [key3]: {
    [key3]: "Ivan",
    age: 35,
  },
  [key3]: "GoldKey",
};
console.log(c3); //{ amount: 100, '234443qwrrqr': 'GoldKey' }

console.log("===6.4=============================");
const key4 = "234443qwrrqr";
const c4 = {
  amount: 100,
  [key4]: {
    [key4]: "Ivan",
    age: 35,
  },
};
console.log(c4); //{ amount: 100, '234443qwrrqr': { '234443qwrrqr': 'Ivan', age: 35 } }
console.log("===6.5=============================");
console.log(c4.del); //undefined - так як нема

console.log("===7.1=============================");
const person = {
  name: "Ivan",
  age: 25,
  occupation: "Розробник програмного забезпечення",

  address: {
    city: "Київ",
    street: "вулиця Шевченка",
    houseNumber: 10,
  },
};

for (const key in person) {
  console.log(key);
}
// name;
// age;
// occupation;
// address;

console.log("===7.2=============================");
const person2 = {
  name: "Ivan",
  age: 25,
  occupation: "Розробник програмного забезпечення",

  address: {
    city: "Київ",
    street: "вулиця Шевченка",
    houseNumber: 10,
  },
};

console.log("===7.2.1=============================");
for (const key in person2) {
  console.log(person2[key]);
}
// Ivan
// 25
// Розробник програмного забезпечення
// { city: 'Київ', street: 'вулиця Шевченка', houseNumber: 10 }

console.log("===7.2.2=============================");
for (const key in person2) {
  const item = person2[key];

  if (typeof person2[key] === "object") {
    for (const key2 in item) {
      console.log(item[key2]);
    }
  } else {
    console.log(item);
  }
}
// Ivan
// 25
// Розробник програмного забезпечення
// Київ
// вулиця Шевченка
// 10

console.log("===8.1=============================");
const a1 = { test: 1 };
const b1 = { test: 1 };
console.log(a === b); //false

console.log("===8.2=============================");
const a21 = { test: 1 };
const b21 = a21;
console.log(a21 === b21); //true

console.log("===8.3=============================");
const a211 = [{ test: 1 }];
const b211 = a211;
console.log(a211 === b211); //true

console.log("===9.1=деструктурізація============================");
const person3 = {
  name1: "Ivan",
  age: 25,
  occupation: "Розробник програмного забезпечення",

  address: {
    city: "Київ",
    street: "вулиця Шевченка",
    houseNumber: 10,
  },
};
const { age, name1, address } = person3;
console.log(age, name1, address); //25 Ivan { city: 'Київ', street: 'вулиця Шевченка', houseNumber: 10 }

console.log("===9.2=деструктурізація============================");
const person4 = {
  name4: "Ivan",
  age4: 25,
  occupation4: "Розробник програмного забезпечення",

  address4: {
    city4: "Київ",
    street4: "вулиця Шевченка",
    houseNumber4: 10,
  },
};
const {
  age4,
  name4,
  address4: { city4, street4, zipcode = 41023 }, //значення по замовченню
  ...rest //решта
} = person4;
//якщо треба пропустити елемент - просто, його не вказуємо(нема порядку комірок, витягуємо по ключам)
console.log("===9.2.1=деструктурізація============================");
console.log(age4, name4, city4, street4, zipcode); //25 Ivan Київ вулиця Шевченка 41023
console.log("===9.2.2=деструктурізація=rest===========================");
console.log(rest); //{ occupation4: 'Розробник програмного забезпечення' }

console.log("===10.1=============================");
function getAddress({
  address: { city, street, houseNumber, zipcode = 1000 },
}) {
  return `Ваша адреса: ${city}, ${street}, ${houseNumber}, ${zipcode}`;
}
const test = getAddress(person);
console.log(test); //Ваша адреса: Київ, вулиця Шевченка, 10, 1000

console.log("===10.2=============================");
const person10 = {
  name10: "Ivan",
  age10: 25,
  occupation10: "Розробник програмного забезпечення",

  address10: {
    city10: "Київ",
    // street10: "вулиця Шевченка",
    houseNumber10: 10,
  },
};
function getAddress10({
  address10: {
    city10,
    street10 = "Не вказано",
    houseNumber10,
    zipcode10 = 1000,
  },
}) {
  return `Ваша адреса: ${city10}, ${street10}, ${houseNumber10}, ${zipcode10}`;
}
const test2 = getAddress10(person10);
console.log(test2); //Ваша адреса: Київ, Не вказано, 10, 1000

console.log("===10.3=============================");
const person11 = {
  name11: "Ivan",
  age11: 25,
  occupation11: "Розробник програмного забезпечення",

  address11: {
    city11: "Київ",
    // street11: "вулиця Шевченка",
    houseNumber11: 10,
  },
};
function getAddress11({
  address11: {
    city11,
    street11 = "Не вказано",
    houseNumber11,
    zipcode11 = 1000,
  },
}) {
  return `Ваша адреса: ${city11}, ${street11}, ${houseNumber11}, ${zipcode11}`;
}
const test3 = getAddress11({
  address11: { street11: "Hello", city11: "Kyiv" },
});
console.log(test3); //Ваша адреса: Kyiv, Hello, undefined, 1000

console.log("===10.4=============================");
const person12 = {
  name12: "Ivan",
  age12: 25,
  occupation12: "Розробник програмного забезпечення",

  address12: {
    city12: "Київ",
    // street12: "вулиця Шевченка",
    houseNumber12: 10,
  },
};
function getAddress12({
  address12: {
    city12,
    street12 = "Не вказано",
    houseNumber12,
    zipcode12 = 1000,
  } = {
    //Вказано по замовченню
    city12: "Не вказано",
    street12: "Не вказано",
    houseNumber12: 10,
    zipcode12: 1000,
  },
}) {
  return `Ваша адреса: ${city12}, ${street12}, ${houseNumber12}, ${zipcode12}`;
}
const test4 = getAddress12({
  address11: { street11: "Hello", city11: "Kyiv" },
});
console.log(test4); //Ваша адреса: Не вказано, Не вказано, 10, 1000

console.log("===10.5=============================");
const person13 = {
  name13: "Ivan",
  age13: 25,
  occupation13: "Розробник програмного забезпечення",

  address13: {
    city13: "Київ",
    // street13: "вулиця Шевченка",
    houseNumber13: 10,
  },
};
function getAddress13({ address }) {
  if (address) {
    const {
      city13,
      street13 = "Не вказано",
      houseNumber13,
      zipcode13 = 1000,
    } = address;
    return `Ваша адреса: ${city13}, ${street13}, ${houseNumber13}, ${zipcode13}`;
  }
  return "Нема даних";
}

const test5 = getAddress13({ city13: "Kyiv" });
console.log(test5); //Нема даних

console.log("===10.6=============================");
const role = {
  value: "admin",
  status: 3,
};

const person14 = {
  name13: "Ivan",
  age13: 25,
  occupation14: "Розробник програмного забезпечення",

  ...role,

  address14: {
    city14: "Київ",
    // street14: "вулиця Шевченка",
    houseNumber13: 10,
  },
};
console.log(person14);
// {
//   name13: 'Ivan',
//   age13: 25,
//   occupation14: 'Розробник програмного забезпечення',
//   value: 'admin',
//   status: 3,
//   address14: { city14: 'Київ', houseNumber13: 10 }
// }

console.log("===10.7=============================");
const role2 = {
  value: "admin",
  status: 3,
};

const person15 = {
  name13: "Ivan",
  age13: 25,
  occupation13: "Розробник програмного забезпечення",

  info: role,

  address15: {
    city15: "Київ",
    // street15: "вулиця Шевченка",
    houseNumber15: 10,
  },
};
console.log(person15);
// {
//   name13: 'Ivan',
//   age13: 25,
//   occupation13: 'Розробник програмного забезпечення',
//   info: { value: 'admin', status: 3 },
//   address15: { city15: 'Київ', houseNumber15: 10 }
// }

console.log("===10.8=============================");
const role3 = {
  value: "admin",
  status: 3,
};

const person16 = {
  name16: "Ivan",
  age16: 25,
  occupation16: "Розробник програмного забезпечення",

  info: role,

  address16: {
    city16: "Київ",
    // street16: "вулиця Шевченка",
    houseNumber16: 10,
  },

  getAddress: function () {
    return "Адреса клієнта";
  },

  getAddress161: function () {
    return person16.address16;
  },

  getAddress162: function () {
    return this.address16;
  },
};

const person16x = person16;

console.log(person16.getAddress()); //Адреса клієнта
console.log(person16.getAddress161()); //{ city16: 'Київ', houseNumber16: 10 }
console.log(person16.getAddress162()); //{ city16: 'Київ', houseNumber16: 10 }
console.log(person16x.getAddress162()); //{ city16: 'Київ', houseNumber16: 10 }

const person16y = { ...person16 };
delete person16.address16;
console.log(person16y.getAddress161()); //undefined
console.log(person16y.getAddress162()); //{ city16: 'Київ', houseNumber16: 10 }

console.log(person16.name16); //Ivan
console.log(!!person16.name16); //true
console.log(!!person16.surname); //false //нема

console.log("name16" in person16); //true
console.log("surname" in person16); //false //нема

//Літерал
console.log("===11.1=============================");
const d = String("Test");
console.log(d); //Test

console.log("===11.2=============================");
Number.prototype.toOwnString = function () {
  console.log(this); //[Number: 1]
  return `Число: ${this}`;
};
const f = 1;
const g = f.toOwnString();
console.log(g); //Число: 1

console.log("===11.3=============================");
function Test() {
  this.world = "World";
  return "Hello" + this.world;
}
console.log(Test()); //HelloWorld
console.log("===11.4=============================");
Test.hello = "Hello";
console.log(Test.hello); //Hello
