console.log("===1=====================================");
const dictionary = new Map();
console.log(dictionary); //Map(0) {}

console.log("===2=====================================");
const button = new Map([
  ["color", "red"],
  ["size", "32px"],
]);
console.log(button); //Map(2) { 'color' => 'red', 'size' => '32px' }

console.log("===3=====================================");
const obj = {
  color: "red",
  size: "32px",
};
const button2 = new Map(Object.entries(obj));
console.log(button2); //Map(2) { 'color' => 'red', 'size' => '32px' }

console.log("===4=====================================");
const set = new Set(["red", "32px"]);
const button3 = new Map(set.entries());
console.log(button3); //Map(2) { 'red' => 'red', '32px' => '32px' }

console.log("===5.1=====================================");
const set5 = new Set(["red", "32px"]);
const button5 = new Map(Object.entries(Object.fromEntries(set5.entries())));
console.log(button5); //Map(2) { 'red' => 'red', '32px' => '32px' }

console.log("===5.2=====================================");
console.log(button5.entries()); //[Map Entries] { [ 'red', 'red' ], [ '32px', '32px' ] }

console.log("===6=====================================");
const button6 = new Map([
  ["color", "red"],
  ["size", "32px"],
]);
const set6 = new Set(button6);
console.log(set6); //Set(2) { [ 'color', 'red' ], [ 'size', '32px' ] }

console.log("===6.1=====================================");
const set61 = new Set(button6.keys());
console.log(set61); //Set(2) { 'color', 'size' }

console.log("===6.2=====================================");
const set62 = new Set(button6.values());
console.log(set62); //Set(2) { 'red', '32px' }

console.log("===7=====================================");
const button7 = new Map([
  ["color", "red"],
  ["size", "32px"],
]);

console.log("===7.1=====================================");
for (const [key, value] of button) {
  console.log(key, value);
}
// color red
// size 32px

console.log("===7.2=====================================");
for (const value of button) {
  console.log(value); //["color", "red"]["size", "32px"];
}

console.log("===7.3=====================================");
for (const value in [1, 2, 3, 4]) {
  console.log(value);
}
// 0
// 1
// 2
// 3

console.log("===7.4=lifehack====================================");
// const button7 = new Map([
//   ["color", "red"],
//   ["size", "32px"],
// ]);
for (const value in Object.fromEntries(button7.entries())) {
  console.log(value);
}
// color;
// size;

console.log("===7.5=====================================");
// const button7 = new Map([
//   ["color", "red"],
//   ["size", "32px"],
// ]);
for (const [key, value] of button7) {
  console.log(key, value);
}
// color red
// size 32px

console.log("===8=====================================");
const button8 = new Map([
  ["color", "red"],
  ["size", "32px"],
]);
button.forEach((value, key, map) => console.log(value, key, map));
// red color Map(2) { 'color' => 'red', 'size' => '32px' }
// 32px size Map(2) { 'color' => 'red', 'size' => '32px' }

console.log("===9=====================================");
const button9 = new Map([
  ["color", "red"],
  ["size", "32px"],
]);
console.log(button9.size); //2

console.log("===9.1=нічого не змінилось====================================");
const button91 = new Map([
  ["color", "red", "32"],
  ["size", "32px"],
]);
console.log(button91.size); //2
console.log(button91); //Map(2) { 'color' => 'red', 'size' => '32px' }

console.log("===9.2=====================================");
const button92 = new Map([
  ["color", "red", "32"],
  ["size", "32px"],
  [123],
  [123, 123, 123],
]);
console.log(button92.size); //3
console.log(button92); //Map(3) { 'color' => 'red', 'size' => '32px', 123 => 123 }

console.log("===9.3=====================================");
const button93 = new Map([
  ["color", "red", "32"],
  ["size", "32px"],
  [1111111],
  [123, 123, 123],
]);
console.log(button93.size); //3
console.log(button93);
// Map(4) {
//   'color' => 'red',
//   'size' => '32px',
//   1111111 => undefined,
//   123 => 123
// }

console.log("===10=====================================");
const button10 = new Map([
  ["color", "red", "32"],
  ["size", "32px"],
]);
button10.color = true;
console.log(button10.size); //2
console.log(button10["color"]); //true

console.log("===10=не бажано-ламає словник, тому що число========");
const button11 = new Map([
  ["color", "red", "32"],
  ["size", "32px"],
]);
button11.color = 1000;
console.log(button11.size); //2
console.log(button11); //Map(2) { 'color' => 'red', 'size' => '32px', color: 1000 }

console.log("===11=====================================");
const button111 = new Map([
  ["color", "red"],
  ["size", "32px"],
]);
console.log("===11.1=====================================");
button111.set("color", 1000);
console.log(button111); //Map(2) { 'color' => 1000, 'size' => '32px'

console.log("===11.2=====================================");
button111.set("weight", 600);
console.log(button111); //Map(3) { 'color' => 1000, 'size' => '32px', 'weight' => 600 }

console.log("===11.3=====================================");
console.log(button111.get("weight")); //600

console.log("===11.3=====================================");
console.log(button111.delete("weight")); //true
console.log(button111); //Map(2) { 'color' => 1000, 'size' => '32px' }
console.log(button111.delete("weight")); //false
console.log(button111); //Map(2) { 'color' => 1000, 'size' => '32px' }

console.log("===11.4=====================================");
console.log(button111.has("weight")); //false
console.log(button111.has("color")); //true
console.log(button111); //Map(2) { 'color' => 1000, 'size' => '32px' }

console.log("===11.5=====================================");
console.log(button111); //Map(2) { 'color' => 1000, 'size' => '32px' }
button111.clear();
console.log(button111); //Map(0) {}

console.log("===12=====================================");
const LANG_LIST = {
  UA: "uk - UA",
  EU: "eu - US",
};

let activeLang = LANG_LIST.EU;

const product = {
  price: 100,
  amount: 3,

  info: new Map([
    [LANG_LIST.UA, { title: "Заголовок", info: "Інформація" }],
    [LANG_LIST.EU, { title: "Title", info: "Info" }],
  ]),
};

console.log("===12.1=====================================");
console.log(product);
// {
//   price: 100,
//   amount: 3,
//   info: Map(2) {
//     'uk - UA' => { title: 'Заголовок', info: 'Інформація' },
//     'eu - US' => { title: 'Title', info: 'Info' }
//   }
// }

console.log("===12.2=====================================");
let info = product.info.get(activeLang);
console.log(info); //{ title: 'Title', info: 'Info' }

console.log("===12.3=====================================");
activeLang = LANG_LIST.UA;
info = product.info.get(activeLang);
console.log(info); //{ title: 'Заголовок', info: 'Інформація' }

console.log("===12.4=====================================");
console.log(product.info.has(activeLang)); //true

console.log("===13=====================================");
const user1 = {
  id: 1323,
  name: "Ivan",
};

const user2 = {
  id: 4231,
  name: "Anton",
};

const product1 = {
  id: 5314,
  name: "Mobile Phone",
};

const product2 = {
  id: 5335,
  name: "Apple",
};

console.log("===13.1=====================================");
const userProduct = new Map();
userProduct.set(user1, product1).set(user2, product2);
console.log(userProduct);
// Map(2) {
//   { id: 1323, name: 'Ivan' } => { id: 5314, name: 'Mobile Phone' },
//   { id: 4231, name: 'Anton' } => { id: 5335, name: 'Apple' }
// }

console.log("===13.2=====================================");
console.log(userProduct.has(user1)); //true

console.log("===13.3=====================================");
console.log(userProduct.get(user2)); //{ id: 5335, name: 'Apple' }

console.log("===13.4=====================================");
const productClientList = new Map();
productClientList.set(product1, new Set());
console.log(productClientList); //Map(1) { { id: 5314, name: 'Mobile Phone' } => Set(0) {} }

console.log("===13.5=====================================");
const productClientList2 = new Map([[product1, new Set()]]);
productClientList2.set(product1, productClientList2.get(product1).add(user1));
console.log(productClientList2);
// Map(1) {
//   { id: 5314, name: 'Mobile Phone' } => Set(1) { { id: 1323, name: 'Ivan' } }
// }

console.log("===13.5.2=====================================");
productClientList2.set(product1, productClientList2.get(product1).add(user2));
console.log(productClientList2);
// Map(1) {
//   { id: 5314, name: 'Mobile Phone' } => Set(2) { { id: 1323, name: 'Ivan' }, { id: 4231, name: 'Anton' } }
// }

console.log("===13.6=====================================");
const has = productClientList2.get(product1).has(user1);
console.log(has); //true
