console.log("===1=============================");
console.log(Array.from("Hello World")); // ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"];

console.log("===2=============================");
console.log(Array.from(121321241)); //[]

console.log("===3=============================");
console.log(Array.from({ a: 1, b: 2, c: 3 })); //[]

console.log("===4=============================");
console.log(Array.from({ 0: "Hello", 1: "World", 2: "!!!" }));

console.log("===4.1=============================");
console.log(Array.from({ 0: "Hello", 1: "World", 2: "!!!", length: 3 })); //[ 'Hello', 'World', '!!!' ]

console.log("===4.2=============================");
console.log(
  Array.from({ 0: "Hello", 1: "World", 2: "!!!", length: 3 }, (elem, index) => {
    console.log(elem, index);
    return elem;
  })
);
// Hello 0
// World 1
// !!! 2
// [ 'Hello', 'World', '!!!' ]

console.log("===4.3=============================");
const obj = {
  0: "Hello",
  1: "World",
  2: "!!!",
  length: 3,
};
console.log(
  Array.from(
    obj,
    function (elem, index) {
      // стрілкова функція не підтрмимеється!!!
      // console.log("===4.3.1=============================");
      console.log(this);
      // console.log("===4.3.2=============================");
      console.log(elem, index);
      return elem;
    },
    obj
  )
);
// { '0': 'Hello', '1': 'World', '2': '!!!', length: 3 }
// Hello 0
// { '0': 'Hello', '1': 'World', '2': '!!!', length: 3 }
// World 1
// { '0': 'Hello', '1': 'World', '2': '!!!', length: 3 }
// !!! 2
// [ 'Hello', 'World', '!!!' ]

console.log("===4.4=============================");
const obj4 = {
  0: "Hello",
  1: "World",
  2: "!!!",
  length: 3,
  prefix: "():",
};
console.log(
  Array.from(
    obj4,
    function (elem, index) {
      return `${this.prefix}${elem}`;
    },
    obj4
  )
);
// ["():Hello", "():World", "():!!!"];

console.log("===5=============================");
const obj5 = {
  0: "Hello",
  1: "World",
  2: "!!!",
  length: 3,
  prefix: "():",
};
const arr = Array.from(
  obj5,
  function (elem, index) {
    return `${this.prefix}${elem}`;
  },
  obj4
);
console.log("===5.1=Перевірка масиву============================");
console.log(Array.isArray(arr)); // true

console.log("===5.2=============================");
console.log(Array.isArray("ryadok")); // false

console.log("===5.3=============================");
console.log(Array.isArray(obj)); // false

console.log("===5.4=Array.of============================");
console.log("===5.4.1=Array.of============================");
console.log(Array.of(1, 2, 3, 4, 5)); //[ 1, 2, 3, 4, 5 ]

console.log("===5.4.2=Array.of============================");
console.log([1, 2, 3, 4, 5]); //[ 1, 2, 3, 4, 5 ]

console.log("===6=============================");
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log("===6.1=============================");
console.log(Array.of(arr1, arr2)); //[ [ 1, 2, 3 ], [ 4, 5, 6 ] ]

console.log("===6.2=============================");
console.log(Array.of(...arr1, ...arr2)); //[ 1, 2, 3, 4, 5, 6 ]

console.log("===6.3=============================");
console.log([...arr1, ...arr2]); //[ 1, 2, 3, 4, 5, 6 ]

console.log("===7=============================");
console.log(arr1.at(1)); //2
console.log(arr1.at(10)); //undefined

console.log("===8=============================");
console.log("===8.1=============================");
let arr11 = [1, 2, 3];
const arr21 = [4, 5, 6];
const arr31 = arr11;
arr11 = [...arr11, 10];
console.log(arr31, arr11); //[ 1, 2, 3 ] [ 1, 2, 3, 10 ]

console.log("===8.2=============================");
console.log(arr11); //[1, 2, 3, 10];

console.log(
  "===8.3=додати елементи до масиву - push ============================"
);
arr11.push(10, 20, 30);
console.log(arr11); //[ 1,  2,  3, 10, 10, 20, 30 ]

console.log("===8.4=============================");
let arr111 = [1, 2, 3];
console.log("===8.4.1=============================");
console.log(arr111.push(10, 20, 30)); //6
console.log(arr111); //[1, 2, 3, 10, 20, 30];

console.log("===8.4.2=============================");
let arr1111 = [1, 2, 3];
console.log(arr1111.push(10, 20, 30, 40)); //7
console.log(arr1111); //[1, 2, 3, 10, 20, 30, 40];

console.log("===8.4.3=============================");
console.log(arr1111.push(10, 20, 30, 40)); //11
console.log(arr1111); //[ 1, 2, 3, 10, 20, 30, 40, 10, 20, 30, 40 ]

console.log("===8.4.4=============================");
console.log(arr1111.push(10, 20, 30, 40) - arr1111.length); //0
console.log(arr1111); //[ 1, 2, 3, 10, 20, 30, 40, 10, 20, 30, 40, 10, 20, 30, 40 ]

console.log("===8.4.5=============================");
console.log(-(arr1111.length - arr1111.push(10, 20, 30, 40))); //4 - додано 4и елемента
console.log(arr1111); //[ 1, 2, 3, 10, 20, 30, 40, 10, 20, 30, 40, 10, 20, 30, 40, 10, 20, 30, 40 ]

console.log("===9=pop - видалити елемент із масиву=====");
console.log(arr1111.pop()); //40 - видалено останній 40й елемент
console.log(arr1111); //[ 1, 2, 3, 10, 20, 30, 40, 10, 20, 30, 40, 10, 20, 30, 40, 10, 20, 30 ]

console.log("===10===зсув==================================");
let arr10 = [1, 2, 3];
console.log("===10.1=====================================");
console.log(arr10.shift()); //1
console.log(arr10); //[ 2, 3 ]

console.log("===10.2=====================================");
console.log(arr10.unshift(0, 1)); //4
console.log(arr10); //[ 0, 1, 2, 3 ]

console.log("===11=====================================");
console.log("===11.1=====================================");
const arr22 = [4, 5, 6];
console.log(arr22.includes(5)); //true
console.log(arr22); //[ 4, 5, 6 ]

console.log("===11.2=====================================");
console.log(arr22.includes(7)); //false
console.log(arr22); //[ 4, 5, 6 ]

console.log("===12=====================================");
console.log(arr22.indexOf(5)); //1
console.log(arr22.indexOf(50)); //-1
console.log(arr22); //[ 4, 5, 6 ]

console.log("===13=====================================");
const arr221 = [4, 5, 4.6, 4.7, 5, 6];
console.log(arr221.indexOf(5)); //1
console.log(arr221.lastIndexOf(5)); //4
console.log(arr221); //[ 4, 5, 4.6, 4.7, 5, 6 ]

console.log("===14=====================================");
const arr141 = [1, 2, 3, 4, 5];
const arr142 = [10, 20, 30, 40, 50];
const arr140 = [...arr141, ...arr142];
console.log("===14.1=====================================");
console.log(arr140); //[1, 2, 3, 4, 5, 10, 20, 30, 40, 50];

console.log("===14.2=====================================");
const arr1401 = arr141.concat(...arr142);
console.log(arr140); //[1, 2, 3, 4, 5, 10, 20, 30, 40, 50];

console.log("===15=====================================");
const arr15 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr15); //[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

arr15.copyWithin(2, 6, 8); //[0, 1, |6, 7,| 4, 5, 6, 7, 8, 9]
console.log(arr15);

console.log("===16=====================================");
const arr16 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("===16.1=====================================");
arr16.fill(2, 6, 9);
console.log(arr16); //[ 0, 1, 2, 3, 4, 5, 2, 2, 2, 9 ]

console.log("===16.2=====================================");
arr16.fill("2", 6, 9);
console.log(arr16); //[ 0, 1, 2, 3, 4, 5, '2', '2', '2', 9 ]

console.log("===16.3=====================================");
arr16.fill([1, 2], 6, 9);
console.log(arr16); //[ 0, 1, 2, 3, 4, 5, [ 1, 2 ], [ 1, 2 ], [ 1, 2 ], 9 ]

console.log("===16.4=====================================");
arr16.fill(123, 6, 9);
console.log(arr16); //[ 0, 1, 2, 3, 4, 5, 123, 123, 123, 9 ]

console.log("===17=====================================");
const arr17 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
arr17.reverse();
console.log(arr17); //[ 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ]

console.log("===18=====================================");
const arr18 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("===18.1=====================================");
const sortedArr = arr18.filter((value, index, array) => value % 2);
console.log(sortedArr); //[ 1, 3, 5, 7, 9 ]

console.log("===18.2=====================================");
const sortedArr2 = arr18.filter((value, index, array) => value % 2 === 0);
console.log(sortedArr2); //[ 0, 2, 4, 6, 8 ]

console.log("===18.3=====================================");
const filterFn = (value, index, array) => value % 2 === 0;
const filteredArr = arr18.filter(filterFn);
console.log("===18.3.1=====================================");
console.log(arr18); //[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log("===18.3.2=====================================");
console.log(filteredArr); //[ 0, 2, 4, 6, 8 ]

console.log("===19=====================================");
const arr19 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("===19.1=====================================");
const sortedArr19 = arr19.sort();
console.log(sortedArr19); //[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log("===19.2=====================================");
const sortedArr191 = [1, 2, 3, 4, 10, 20, 30, 40].sort();
console.log(sortedArr191); //[ 1, 10, 2, 20, 3, 30, 4, 40 ] , так як через unicode

console.log("===19.3=====================================");
const sortFn = (elem1, elem2) => elem1 - elem2;
const sortedArr193 = [1, 2, 3, 4, 10, 20, 30, 40].sort(sortFn);
console.log(sortedArr193); //[1, 2, 3, 4, 10, 20, 30, 40]

console.log("===19.4=====================================");
const sortFn194 = (elem1, elem2) => -(elem1 - elem2);
const sortedArr194 = [1, 2, 3, 4, 10, 20, 30, 40].sort(sortFn194);
console.log(sortedArr194); //[ 40, 30, 20, 10, 4,  3,  2,  1 ]

console.log("===19.5=====================================");
const sortFn195 = (elem1, elem2) => elem2 - elem1;
const sortedArr195 = [1, 2, 3, 4, 10, 20, 30, 40].sort(sortFn195);
console.log(sortedArr195); //[ 40, 30, 20, 10, 4,  3,  2,  1 ]

console.log("===19.6=====================================");
const sortFn196 = (elem1, elem2) => elem2 - elem1;
const sortedArr196 = [20, 1, 2, 10, 3, 4, 30, 40].sort(sortFn196);
console.log(sortedArr196); //[ 40, 30, 20, 10, 4,  3,  2,  1 ]

console.log("===19.7=====================================");
const sortFn197 = (elem1, elem2) => {
  return elem1 < elem2 ? 1 : -1;
};
const sortedArr197 = [20, 1, 2, 10, 3, 4, 30, 40].sort(sortFn197);
console.log(sortedArr197); //[ 40, 30, 20, 10, 4,  3,  2,  1 ]

console.log("===19.8=====================================");
const sortFn198 = (elem1, elem2) => {
  return elem1 > elem2 ? 1 : -1;
};
const sortedArr198 = [20, 1, 2, 10, 3, 4, 30, 40].sort(sortFn198);
console.log(sortedArr198); //[1, 2, 3, 4, 10, 20, 30, 40]

console.log("===19.9=====================================");
const sortFn199 = (elem1, elem2) => {
  if (elem1 === 10) {
    return 1;
  }
  return elem1 < elem2 ? 1 : -1;
};
const sortedArr199 = [20, 1, 2, 10, 3, 4, 30, 40].sort(sortFn199);
console.log(sortedArr199); //[ 40, 30, 20,  4, 3,  2,  1, 10 ]

console.log("===19.10=====================================");
const sortFn1910 = (elem1, elem2) => {
  if (elem1 % 2 === 0) {
    return 1;
  }
  return elem1 < elem2 ? 1 : -1;
};
const sortedArr1910 = [20, 1, 2, 10, 3, 4, 30, 40].sort(sortFn1910);
console.log(sortedArr1910); //[ 20, 1,  2, 10, 3, 4, 30, 40 ]

console.log("===19.11=====================================");
const sortFn1911 = (elem1, elem2) => {
  let result = elem1 - elem2;
  // if (elem1 % 2 === 0) {
  //   return 1;
  // }
  // return elem1 < elem2 ? 1 : -1;
  return result;
};
const sortedArr1911 = [20, 1, 2, 10, 3, 4, 30, 40].sort(sortFn1911);
console.log(sortedArr1911); //[ 1,  2,  3,  4, 10, 20, 30, 40 ]

console.log("===19.12=====================================");
const sortFn1912 = (elem1, elem2) => {
  let result = elem1 - elem2;
  if (elem1 % 2 === 0) {
    result += 10;
  }
  // return elem1 < elem2 ? 1 : -1;
  return result;
};
const sortedArr1912 = [20, 1, 2, 10, 3, 4, 30, 40].sort(sortFn1912);
console.log(sortedArr1912); //[ 1, 2,  3, 20, 10, 4, 30, 40 ]

console.log("===19.13=====================================");
const sortFn1913 = (elem1, elem2) => {
  // let result = elem1 - elem2;
  // if (elem1 % 2 === 0) {
  //   result += 10;
  // }
  // // return elem1 < elem2 ? 1 : -1;
  // return result;
  if (elem1 % 2 === elem2 % 2) {
    return 0;
  } else if (elem1 % 2 !== 0 && elem2 % 2 === 0) {
    return 1;
  } else {
    return -1;
  }
};
const sortedArr1913 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
].sort(sortFn1913);
console.log(sortedArr1913); //[ 2, 4, 6, 8, 10, 12, 14, 16,  1, 3, 5, 7, 9, 11, 13, 15 ] - зліва-парні, справа-непарні

console.log("===19.14=====================================");
console.log(["Arabic", "Info", "Zero", "City", "Aar"].sort()); //[ 'Aar', 'Arabic', 'City', 'Info', 'Zero' ]

console.log("===20=====================================");
const arr20 = [4, 5, 4.6, 4.7, 5, 6];
const arr201 = [-1, 4, 5, 4.6, 4.7, 5, 6];
console.log("===20.1=====================================");
console.log(arr20.every((elem, index, array) => elem >= 0)); //true

console.log("===20.2=====================================");
console.log(arr201.every((elem, index, array) => elem >= 0)); //false

console.log("===20.2=====================================");
console.log(arr201.some((elem, index, array) => elem >= 0)); //true - якщо тільки один елемент не буде підходити під умови some=один

console.log("===20.3=====================================");
console.log(arr201.some((elem, index, array) => elem < 0)); //true

console.log("===20.4=====================================");
console.log(arr201.every((elem, index, array) => elem < 0)); //false
