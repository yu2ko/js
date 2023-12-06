const a = 1;
const b = 2;
const c = 3;

// let list = [1];
// let list = ["Text"];
// let list = [true];
// let list = [null];

console.log("===1===========================");
let list = [() => {}];
console.log(list); //[[Function(anonymous)]];

console.log("===2===========================");
let list2 = [function Name() {}];
console.log(list2); //[ [Function: Name] ];

console.log("===3===========================");
const getOne = () => 1;
let list3 = [
  function Name() {},
  100,
  "Text",
  null,
  undefined,
  1 + 2,
  5 < 6,
  getOne(),
  a,
  b,
  c,
];
console.log(list3); //[ [Function: Name], 100, 'Text', null, undefined, 3, true, 1, 1, 2, 3 ];

console.log("===4===========================");
const testArr = Array(5); //не рекомендується використовувати, як устаріле
console.log(testArr); //[ <5 empty items> ]

const testArr2 = Array(5);
testArr2[0] = "Start";
testArr2[1] = 2;
testArr2[20] = 20;
console.log(testArr2); //[ 'Start', 2, <18 empty items>, 20 ]

console.log("===5===========================");
const testArr3 = [];
testArr3[0] = "Start";
testArr3[1] = 2;
testArr3[2] = 20;
console.log(testArr3); //[ 'Start', 2, 20 ]
console.log(testArr3.length); //3

console.log("===6===========================");
const testArr4 = [];
testArr4[0] = "Start";
testArr4[1] = 2;
testArr4[2] = 20;
testArr4[testArr4.length] = 30;
testArr4[testArr4.length] = 40;
console.log(testArr4); //[ 'Start', 2, 20, 30, 40 ]
console.log(testArr4[testArr.length]); //undefined
console.log(testArr4[testArr.length - 1]); //40

console.log("===7===========================");
const testArr5 = [];
testArr5[0] = "Start";
testArr5[1] = 2;
testArr5[2] = 20;
testArr5[testArr5.length] = 30;
testArr5[testArr5.length] = 40;

testArr5[null] = "Test";
testArr5["test"] = "Test123"; //не рекомендується використовувати

console.log(testArr5); //[ 'Start', 2, 20, 30, 40, null: 'Test', test: 'Test123' ]
console.log(testArr5.test); //Test123

console.log("===8===========================");
const testArr6 = [];
testArr6[0] = "Start";
testArr6[1] = 2;
testArr6[2] = 20;
testArr6[testArr6.length] = 30;
testArr6[testArr6.length] = 40;

delete testArr6[0];

console.log(testArr6); //[ <1 empty item>, 2, 20, 30, 40 ]

console.log("===9===========================");
const big = [[[1], [2, 3, 4, 5], [3]], [[2]], [[3]]];
console.log(big[0][1][2]); //4

console.log("===10===========================");
const location = [
  [100, 200],
  [105, 190],
  [110, 180],
];

for (const point of location) {
  console.log(point); //[100, 200][(105, 190)][(110, 180)];
}

console.log("===11===========================");
for (const point of location) {
  for (const coord of point) {
    console.log(coord);
    // 100
    // 200
    // 105
    // 190
    // 110
    // 180
  }
}

console.log("===12===========================");
for (const point in location) {
  //не бажано використовувати у масивах
  // console.log(point); // 0 1 2
  console.log(location[point]); // [100, 200][105, 190][110, 180];
}

console.log("===13===========================");
// "in" used rarerly then "for"  //не бажано використовувати у масивах
for (const pointIndex in location) {
  console.log(location[pointIndex]);

  for (const coordIndex in location[pointIndex]) {
    console.log(location[pointIndex][coordIndex]);
  }
}
// [100, 200];
// 100;
// (200)[(105, 190)];
// 105;
// (190)[(110, 180)];
// 110;
// 180;

console.log("===14===========================");
// переробимо останнє вище на цикл:
for (let i = 0; i < location.length; i++) {
  console.log(location[i]); // [100, 200][(105, 190)][(110, 180)];

  for (let j = 0; j < location[i].length; j++) {
    console.log(location[i][j]); // [100, 200][(105, 190)][(110, 180)];
  }
}
// [100, 200];
// 100;
// (200)[(105, 190)];
// 105;
// (190)[(110, 180)];
// 110;
// 180;

console.log("===15===========================");
const l1 = [];
const l2 = [];

console.log(l1 === l2); //false
console.log(l1 == l2); //false

console.log("===16===========================");
const l11 = Array();
const l21 = Array();

console.log(l11 === l21); //false
console.log(l11 == l21); //false

console.log(l11.toString() === l21.toString()); //true
console.log(l11.toString() == l21.toString()); //true

console.log("===17===========================");
const l111 = [1, 2, 3];
const l211 = [1, 2, 3];

console.log(l111.toString() === l211.toString()); //true
console.log(l111.toString() == l211.toString()); //true
console.log(l111.toString(), l211.toString()); //1,2,3 1,2,3

console.log("===18===========================");
const l3 = [1, 3, 2];
const l4 = [1, 2, 3];

console.log(l3.toString() === l4.toString()); //false
console.log(l3.toString() == l4.toString()); //false
console.log(l3.toString(), l4.toString()); //1,3,2 1,2,3

console.log("===19===========================");
const l5 = [1, 3, 2];
const l6 = [1, 2, 3];

const l7 = l5;

console.log(l5, l7); //[ 1, 3, 2 ] [ 1, 3, 2 ]

console.log("===20===========================");
delete l5[0];

console.log(l5, l7); //[ <1 empty item>, 3, 2 ] [ <1 empty item>, 3, 2 ]

console.log("===21===========================");
const location2 = [
  [100, 200],
  [105, 205],
  [110, 190],
];

const loc1 = location2[0];
const loc2 = location2[1];

const [a1, b1] = location2;

console.log(a1, b1); //[ 100, 200 ] [ 105, 205 ]

console.log("===22===========================");
const location3 = [
  [100, 200],
  [105, 205],
  [110, 190],
];
const [loc11, loc21] = location3;

console.log(loc11, loc21); //[ 100, 200 ] [ 105, 205 ]
console.log(loc21, loc11); //[ 105, 205 ] [ 100, 200 ]

console.log("===23===========================");
const location4 = [
  [100, 200],
  [105, 205],
  [110, 190],
];
const [loc111, , loc311] = location4;

console.log(loc111, loc311); //[ 100, 200 ] [ 110, 190 ]

console.log("===24===========================");
const location5 = [
  [100, 200],
  [105, 205],
  [110, 190],
  // [110, 190],
];
const [loc1111, ...rest] = location5;

console.log(loc1111, rest); //[ 100, 200 ] [ [ 105, 205 ], [ 110, 190 ] ]

console.log("===24.1===========================");
const [loc2111, loc3111, loc4111 = "Test"] = rest; //виведе по замовченню, якщо нема 4го; якщо є - виведе значення [110, 190]

console.log(loc4111); //Тest

console.log("===24.2===========================");
const [[p1, p2], loc31111, loc41111 = "Test"] = rest;
console.log(p1, p2); //105 205

console.log("===25===========================");
const l51 = [1, 3, 2];
const l61 = [1, 2, 3];

// const [...l71] = l51;
const l71 = [...l51]; //працює аналогічно const [...l71] = l51

delete l51[0];

console.log(l51, l71); //[ <1 empty item>, 3, 2 ] [ 1, 3, 2 ]

console.log("===26===========================");
// const l511 = null;
let l511 = [2, 3, 4];
let l611 = [1, 2, 3];

// const [...l71] = l51;
const l711 = [100, ...(l511 || [])]; //працює аналогічно const [...l71] = l51

// console.log(l511, l711); //[ 2, 3, 4 ] [ 100, 2, 3, 4 ]

delete l511[0];

console.log(l511, l611); //[ <1 empty item>, 3, 4 ] [ 100, 2, 3, 4 ]

console.log("===26.1===========================");
[l511, l611] = [l611, l511];
console.log(l511, l611); //[ 1, 2, 3 ] [ <1 empty item>, 3, 4 ]

console.log("===27=============================");
function printFullname(name, surname, lastname) {
  return `${name} ${surname} ${lastname}`;
}

console.log(printFullname("Ivan", "Ivanovych", "Ivanenko")); //Ivan Ivanovych Ivanenko

console.log("===28=============================");
function printFullname(...arg) {
  console.log(arg);
  return arg.toString();
  // return `${name} ${surname} ${lastname}`;
}

console.log(printFullname("Ivan", "Ivanovych", "Ivanenko")); //[ 'Ivan', 'Ivanovych', 'Ivanenko' ] √ Ivan,Ivanovych,Ivanenko

console.log("===28=============================");
function sumAllNum(...nums) {
  let sum = 0;
  // for (const n in nums) {   //не бажано використовувати у масивах
  for (const n of nums) {
    sum += n;
  }
  return sum;
}

// console.log(sumAllNum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16)); //00123456789101112131415 for (const n in nums) {
console.log(sumAllNum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16)); //136 (const n of nums)

console.log("===28.1=============================");
function sumAllNum(...nums) {
  let sum = 0;
  for (const n of nums) {
    sum += n;
  }
  return [sum, nums.length];
}

const [sum, numlength] = sumAllNum(
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16
);

console.log(sum, numlength); //136 16

console.log("===29=============================");
function printFullname([name, surname, lastname, ...arg]) {
  // console.log(arg);
  // return arg.toString();
  return `${name} ${surname} ${lastname} ${
    arg.length ? `(${arg.toString()})` : ""
  }`;
}

console.log(printFullname(["Ivan", "Ivanovych", "Ivanenko", "Admin", "18"])); //Ivan Ivanovych Ivanenko (Admin,18)
