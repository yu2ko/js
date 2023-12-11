console.log("===1=============================");
const a = {
  name: "Olga",
  age: 34,
};
///..........
const key = "name";
a[key] = "user";
console.log(a); //{ name: 'user', age: 34 }

console.log("===2=============================");
const phoneBook = {
  0: 1,
  olga: "+380664567689",
};
///..........
function addToPhoneBook(phone, id) {
  const key = Symbol(id + phoneBook[0]);

  phoneBook[key] = phone;
  phoneBook[0]++;
}
addToPhoneBook("+3800678887766", "olga");
///..........
addToPhoneBook("+3800501112233", "olga");
console.log(phoneBook);
// {
//   '0': 3,
//   olga: '+380664567689',
//   [Symbol(olga1)]: '+3800678887766',
//   [Symbol(olga2)]: '+3800501112233'
// }

console.log("===3=============================");
const sym1 = Symbol("Test");
const sym2 = Symbol("Test");
console.log(sym1 === sym2); //false

console.log("===4=============================");
const phoneBook2 = {
  olga: "+380664567689",
};
///..........
function addToPhoneBook2(phone, id) {
  const key = Symbol(id);

  phoneBook2[key] = phone;
  return key;
}
const olga1 = addToPhoneBook2("+3800678887766", "olga");
///..........
const olga2 = addToPhoneBook2("+3800501112233", "olga");
console.log(phoneBook2);
// {
//   '0': 3,
//   olga: '+380664567689',
//   [Symbol(olga1)]: '+3800678887766',
//   [Symbol(olga2)]: '+3800501112233'
// }
console.log(phoneBook2.olga1); //undefined
console.log(phoneBook2["Symbol(olga)"]); //undefined
console.log(phoneBook2[olga1]); //+3800678887766

console.log("===4.2=============================");
console.log(olga1.description); //olga

console.log("===5=============================");
const user = {
  name: "Olga",
  id: 351305123,
  bookId: null,
  // getPhone: function (book) {   //!!!функція, яка знаходиться всередині властивості, називається методом
  getPhone(book) {
    return book[this.bookId];
  },
};
const phoneBook3 = {
  olga: "+380664567689",
};
///..........
function addToPhoneBook3(phone, user) {
  const key = Symbol(user.id);

  phoneBook3[key] = phone;

  user.bookId = key;
}
addToPhoneBook3("+3800501112233", user);
console.log(user.getPhone(phoneBook3)); //+3800501112233

console.log("===6=============================");
const user6 = {
  name: "Olga",
  id: 351305123,
  bookId: null,
  // getPhone: function (book) {   //!!!функція, яка знаходиться всередині властивості, називається методом
  getPhone(book) {
    return book[this.bookId];
  },
};
const phoneBook6 = {
  olga: "+380664567689",
};
///..........
function addToPhoneBook6(phone, user) {
  const key = Symbol(user.id);

  phoneBook6[key] = phone;

  user.bookId = key;
}
///..............
addToPhoneBook6("+3800501112233", user);

///..............
addToPhoneBook6("+38006865657788", user);
console.log(user.getPhone(phoneBook6)); //+38006865657788;
console.log("===6.2=============================");
console.log(phoneBook6);
// {
//   olga: '+380664567689',
//   [Symbol(351305123)]: '+3800501112233',
//   [Symbol(351305123)]: '+38006865657788'
// }

console.log("===6.2=============================");
const a1 = Symbol("1");
const b1 = Symbol("1");
console.log(a1 === b1); //false
console.log(String(a1) === String(b1)); //true
console.log(String(a1), String(b1)); //Symbol(1) Symbol(1)
console.log(a1.description === b1.description); //true
console.log(a1.toString === b1.toString); //true

console.log("===6.3=============================");
const a12 = Symbol.for("1");
const b12 = Symbol.for("1");
console.log(a12 === b12); //true
console.log(a12, b12); //Symbol(1) Symbol(1)

console.log("===7=============================");
const user7 = {
  name: "Olga",
  id: 351305123,
  bookId: null,
  getPhone(book) {
    return book[this.bookId];
  },
};
const phoneBook7 = {
  olga: "+380664567689",
};
///..........
function addToPhoneBook7(phone, user7) {
  const key = Symbol.for(user7.id);

  phoneBook7[key] = phone;

  user7.bookId = key;
}
///..............
addToPhoneBook7("+3800501112233", user7);

///..............
addToPhoneBook7("+38006865657788", user7);
console.log(user7.getPhone(phoneBook7));
console.log(phoneBook7);
// +38006865657788
// { olga: '+380664567689', [Symbol(351305123)]: '+38006865657788' }

console.log("===8=============================");
const user8 = {
  name: "Olga",
  id: 351305123,
  bookId: null,
  getPhone(book) {
    return book[this.bookId];
  },
};
const phoneBook8 = {
  olga: "+380664567689",
};
///..........
function addToPhoneBook8(phone, user8) {
  const symId = Symbol.for(user8.id);

  phoneBook8[symId] = phone;

  user8.bookId = symId;
}
///..............
addToPhoneBook8("+3800501112233", user8);

///..............
addToPhoneBook8("+38006865657788", user8);
console.log(user8.getPhone(phoneBook8));
console.log(phoneBook8);
const symId = user8.bookId;
console.log(Symbol.keyFor(symId));

console.log("===9=============================");
const user9 = {
  name: "Olga",
  id: 351305123,
  bookId: null,
  getPhone(book) {
    return book[this.bookId];
  },
};
const phoneBook9 = {
  me: "+380674335551",
  name: "Phone Book",
};
///..........
function addToPhoneBook9(phone, user9) {
  const symId9 = Symbol.for(user9.id);

  phoneBook9[symId9] = phone;

  user9.bookId = symId9;
}
///..............
addToPhoneBook9("+3800501112233", user9);

///..............
addToPhoneBook9("+38006865657788", user9);
// console.log(user9.getPhone(phoneBook9));
// console.log(phoneBook9);
const symId9 = user9.bookId;
// console.log(Symbol.keyFor(symId9));
for (const key in phoneBook9) {
  console.log(key);
  // me;
  // name;
}
console.log("===9.2=============================");
console.log(phoneBook9);
// {
//   me: '+380674335551',
//   name: 'Phone Book',
//   [Symbol(351305123)]: '+38006865657788'
// }

console.log("===9.3=const value of============================");
for (const value of [1, 2, 3, 4, 5]) {
  console.log(value);
}
// 1;
// 2;
// 3;
// 4;
// 5;

console.log("===9.4=const key in============================");
for (const key in [1, 2, 3, 4, 5]) {
  console.log(key);
}
// 0;
// 1;
// 2;
// 3;
// 4;

console.log("===10=============================");
let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from;

    return this;
  },
  next() {
    return this.current <= this.to
      ? { done: false, value: this.current++ }
      : { done: true };
  },
};

console.log("===10.1=============================");
for (let num of range) {
  console.log(num);
}
// 1
// 2
// 3
// 4
// 5

console.log("===10.2=============================");
const iterator = range[Symbol.iterator]();
do {
  console.log(iterator.current);
  result = iterator.next();
} while (!result.done);
// 1
// 2
// 3
// 4
// 5
// 6

console.log("===10.3=============================");
const arr = [1, 2, 3, 4, 5];
const iterator3 = arr[Symbol.iterator]();
result = iterator3.next();
do {
  console.log(result.value);
  result = iterator3.next();
} while (!result.done);
// 1
// 2
// 3
// 4
// 5
