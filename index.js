console.log("===1=====================================");
const userList = [
  {
    id: 1,
    name: "Дима",
    age: 19,
  },
  {
    id: 54,
    name: "Іван",
    age: 35,
  },
  {
    id: 6412,
    name: "Антон",
    age: 41,
  },
];
const userBigAge = userList.sort((user1, user2) => {
  return user2.age - user1.age;
});
console.log("===1.1=====================================");
console.log(userBigAge);
// [
//   { id: 6412, name: "Антон", age: 41 },
//   { id: 54, name: "Іван", age: 35 },
//   { id: 1, name: "Дима", age: 19 },
// ];
console.log("===1.2=====================================");
console.log(userBigAge[0]); //{ id: 6412, name: 'Антон', age: 41 }

console.log("===1.3=====================================");
const userList2 = [
  {
    id: 1,
    name: "Дима",
    age: 19,
  },
  {
    id: 54,
    name: "Іван",
    age: 35,
  },
  {
    id: 6412,
    name: "Антон",
    age: 41,
  },
];
let minAge = 30;
const userBigAge2 = userList2.find(({ age }) => age >= minAge);
console.log(userBigAge2);

console.log("===1.4=====================================");
const userBigAge3 = userList2.findIndex(({ age }) => age >= minAge);
console.log(userBigAge3); //1

console.log("===1.5=====================================");
minAge = 50;
const userBigAge4 = userList2.findIndex(({ age }) => age >= minAge);
console.log(userBigAge4); //-1 нема такого

console.log("===1.6=====================================");
const userBigAge5 = userList2.find(({ age }) => age >= minAge);
console.log(userBigAge5); //undefined

console.log("===1.7=====================================");
minAge = 30;
const userBigAge7 = userList2.findLast(({ age }) => age >= minAge);
console.log(userBigAge7); //{ id: 6412, name: 'Антон', age: 41 }

console.log("===1.8=====================================");
const userBigAge8 = userList2.findLastIndex(({ age }) => age >= minAge);
console.log(userBigAge8); //2

console.log("===1.9=====================================");
console.log(userList2.keys()); //Object [Array Iterator] {}

console.log("===1.10=====================================");
const iter = userList2.keys();
for (const elem of iter) {
  console.log(elem);
}
// 0
// 1
// 2

console.log("===1.11=====================================");
const iter2 = userList2.values();
console.log(iter2); //Object [Array Iterator] {}

console.log("===1.12=====================================");
console.log(iter2[2]); //undefined

console.log("===1.13=====================================");
for (const elem of iter2) {
  console.log(elem);
}
// { id: 1, name: 'Дима', age: 19 }
// { id: 54, name: 'Іван', age: 35 }
// { id: 6412, name: 'Антон', age: 41 }

console.log("===1.14=====================================");
const iter3 = userList2.values();

console.log(iter3);

const result = iter3.next();

console.log(result);

for (const elem of iter3) {
  console.log(elem);
}
// Object [Array Iterator] {}
// { value: { id: 1, name: 'Дима', age: 19 }, done: false }
// { id: 54, name: 'Іван', age: 35 }
// { id: 6412, name: 'Антон', age: 41 }

console.log("===1.15=====================================");
console.log(userList2.toString()); //[object Object],[object Object],[object Object]

console.log("===1.16=====================================");
const arr = ["Apple", "Hotdog", "Bread", "Milk"];

console.log("===1.16.1=====================================");
console.log(arr.toString()); //Apple,Hotdog,Bread,Milk

console.log("===1.16.2=====================================");
console.log(arr.join(", ")); //Apple, Hotdog, Bread, Milk

console.log("===1.16.3=====================================");
console.log(arr.join("... ")); //Apple... Hotdog... Bread... Milk

console.log("===17=splice====================================");
// const arr = ["Apple", "Hotdog", "Bread", "Milk"];

const arrSmall = arr.splice(1);

console.log(arrSmall); //[ 'Hotdog', 'Bread', 'Milk' ]
console.log(arr); //[ 'Apple' ]

console.log("===18=====================================");
const arr2 = ["Apple", "Hotdog", "Bread", "Milk"];

const arrSmall2 = arr2.splice(1, 2);

console.log(arrSmall2); //[ 'Hotdog', 'Bread' ]
console.log(arr2); //[ 'Apple', 'Milk' ]

console.log("===19=====================================");
const arr3 = ["Apple", "Hotdog", "Bread", "Milk"];

const arrSmall3 = arr3.splice(1, 2, "Tea", "Cheese");

console.log(arrSmall3); //[ 'Hotdog', 'Bread' ]
console.log(arr3); //[ 'Apple', 'Tea', 'Cheese', 'Milk' ]

console.log("===20=====================================");
const arr4 = ["Apple", "Hotdog", "Bread", "Milk"];

const arrSmall4 = arr4.splice(1, 2, ...userList2);

console.log(arrSmall4); //[ 'Hotdog', 'Bread' ]
console.log(arr4);
// [
//   "Apple",
//   { id: 1, name: "Дима", age: 19 },
//   { id: 54, name: "Іван", age: 35 },
//   { id: 6412, name: "Антон", age: 41 },
//   "Milk",
// ];

console.log("===21=====================================");
const arr5 = ["Apple", "Hotdog", "Bread", "Milk"];

const arrSmall5 = [...arr5].splice(1, 2, ...userList2);

console.log(arrSmall5); //[ 'Hotdog', 'Bread' ]
console.log(arr5); //[ 'Apple', 'Hotdog', 'Bread', 'Milk' ]

console.log("===22=====================================");
const arr6 = ["Apple", "Hotdog", "Bread", "Milk"];

const arrSmall6 = arr6.splice(1, 0, ...userList2);

console.log(arrSmall6); //[]
console.log(arr6);
// [
//   "Apple",
//   { id: 1, name: "Дима", age: 19 },
//   { id: 54, name: "Іван", age: 35 },
//   { id: 6412, name: "Антон", age: 41 },
//   "Hotdog",
//   "Bread",
//   "Milk"
// ];

console.log("===23=slice====================================");
const arr7 = ["Apple", "Hotdog", "Bread", "Milk"];

const arrSmall7 = arr7.slice(1, 3);

console.log(arrSmall7); //[ 'Hotdog', 'Bread' ]
console.log(arr7); //[ 'Apple', 'Hotdog', 'Bread', 'Milk' ]

console.log("===24=====================================");
const userList3 = [
  {
    id: 1,
    name: "Дима",
    age: 19,
  },
  {
    id: 54,
    name: "Іван",
    age: 35,
  },
  {
    id: 6412,
    name: "Антон",
    age: 41,
  },
];

console.log("===24.1=====================================");
const result3 = userList3.reduce((num, user, userIndex, array) => {
  console.log(num);
  return num * 2;
}, 0);
// 0
// 0
// 0

console.log("===24.2=====================================");
const result4 = userList3.reduce((num, user, userIndex, array) => {
  console.log(num);
  return num * 2;
}, 1);
// 1
// 2
// 4

console.log("===24.3=====================================");
const result5 = userList3.reduce((num, user, userIndex, array) => {
  console.log(num, user.age);
  return user.age > num ? user.age : num;
}, 0);
// 0 19
// 19 35
// 35 41

console.log("===24.3=====================================");
const result6 = userList3.reduce((num, user, userIndex, array) => {
  console.log(num, user.age);
  return user.age > num ? user.age : num;
}, 1);
// 1 19
// 19 35
// 35 41

console.log("===24.4=====================================");
const userList4 = [
  {
    //поміняли місцями
    id: 6412,
    name: "Антон",
    age: 41,
  },
  {
    id: 1,
    name: "Дима",
    age: 19,
  },
  {
    id: 54,
    name: "Іван",
    age: 35,
  },
];
const result7 = userList4.reduce((num, user, userIndex, array) => {
  console.log(num, user.age);
  return user.age > num ? user.age : num;
}, 1);
// 1 41
// 41 19
// 41 35
console.log("===24.4.1=====================================");
console.log(result7); //41

console.log("===25=====================================");
const userList5 = [
  {
    //поміняли місцями
    id: 6412,
    name: "Антон",
    age: 41,
    balance: 300,
  },
  {
    id: 1,
    name: "Дима",
    age: 19,
    balance: 0,
  },
  {
    id: 54,
    name: "Іван",
    age: 35,
    balance: 10200,
  },
];
console.log("===25.1=====================================");
const totalBalance = userList5.reduce((num, user) => num + user.balance, 0);
console.log(totalBalance); //10500

console.log("===25.2=====================================");
const result8 = userList5.reduceRight((num, user, userIndex, array) => {
  console.log(num, user.age);
  return user.age > num ? user.age : num;
}, 1);
console.log(result8);
// 1 35
// 35 19
// 35 41
// 41

console.log("===25.3=====================================");
const result9 = userList5.reverse().reduce((num, user, userIndex, array) => {
  console.log(num, user.age);
  return user.age > num ? user.age : num;
}, 1);
console.log(result8);
// 1 35
// 35 19
// 35 41
// 41

console.log("===26=====================================");
const userList6 = [
  {
    //поміняли місцями
    id: 6412,
    name: "Антон",
    age: 41,
    balance: 300,
  },
  {
    id: 1,
    name: "Дима",
    age: 19,
    balance: 0,
  },
  {
    id: 54,
    name: "Іван",
    age: 35,
    balance: 10200,
  },
];
const result26 = userList6.map((user, index, array) => {
  return 1;
});
console.log(result26);
// [1, 1, 1];

console.log("===27=====================================");
const userList7 = [
  {
    //поміняли місцями
    id: 6412,
    name: "Антон",
    age: 41,
    balance: 300,
  },
  {
    id: 1,
    name: "Дима",
    age: 19,
    balance: 0,
  },
  {
    id: 54,
    name: "Іван",
    age: 35,
    balance: 10200,
  },
];
const result27 = userList7.map((user, index, array) => {
  return user.name;
});
console.log(result27.join(", "));
// Антон, Дима, Іван

console.log("===28=====================================");
const userList8 = [
  {
    //поміняли місцями
    id: 6412,
    name: "Антон",
    age: 41,
    balance: 300,
  },
  {
    id: 1,
    name: "Дима",
    age: 19,
    balance: 0,
  },
  {
    id: 54,
    name: "Іван",
    age: 35,
    balance: 10200,
  },
];
const result28 = userList8.map((user, index, array) => {
  user.balanceLimit = 1000 - user.balance;
  if (user.balanceLimit < 0) {
    user.balanceLimit = 0;
  }
  return user;
});
console.log(result28);
// [
//   { id: 6412, name: "Антон", age: 41, balance: 300, balanceLimit: 700 },
//   { id: 1, name: "Дима", age: 19, balance: 0, balanceLimit: 1000 },
//   { id: 54, name: "Іван", age: 35, balance: 10200, balanceLimit: 0 },
// ]

console.log("===29=====================================");
const flatArray = [[[[[[[[[[[[100]]]]]]]]]]]];
console.log(flatArray.flat()); //[ [ [ [Array] ] ] ]

console.log("===30=====================================");
const flatArray2 = [
  [100, 200],
  [220, 300],
  [430, 500],
];
console.log(flatArray2.flat()); //[ 100, 200, 220, 300, 430, 500 ]

console.log("===31=====================================");
const flatArray3 = [
  [
    [100, 105],
    [200, 205],
  ],
  [220, 230],
  [430, 455],
];
console.log("===31.1=====================================");
console.log(flatArray3.flat(2)); //[100, 105, 200, 205, 220, 230, 430, 455]

console.log("===31.2=====================================");
console.log(flatArray3.flat(1)); //[[100, 105], [200, 205], 220, 230, 430, 455]

console.log("===31.3=====================================");
console.log(flatArray3.flat()); //[[100, 105], [200, 205], 220, 230, 430, 455]

console.log("===32=====================================");
const flatArray4 = [
  [
    [
      [
        [
          [100, 105],
          [200, 205],
        ],
      ],
    ],
  ],
  [220, 230],
  [430, 455],
];
console.log(flatArray4.flat(50)); //50 - з запасом
// [
//   100, 105, 200,
//   205, 220, 230,
//   430, 455
// ]

console.log("===33=====================================");
const flatArray5 = [
  [100, 105],
  [200, 205],
  [220, 230],
  [430, 455],
];
console.log("===33.1=====================================");
console.log(flatArray5.map((el) => el[0] - el[1])); //[ -5, -5, -10, -25 ]

console.log("===33.2=====================================");
console.log(flatArray5.map((el) => [...el, el[0] - el[1]]));
// [
//   [100, 105, -5],
//   [200, 205, -5],
//   [220, 230, -10],
//   [430, 455, -25]
// ]

console.log("===33.3=====================================");
console.log(flatArray5.flatMap((el) => [...el, el[0] - el[1]]));
// [100, 105, -5, 200, 205, -5, 220, 230, -10, 430, 455, -25]

console.log("===34=====================================");
const flatArray6 = [
  [
    [100, 105],
    [200, 205],
  ],
  [
    [220, 230],
    [430, 455],
  ],
];
console.log("===34.1=====================================");
const result34 = flatArray6.map((el) => {
  console.log(el);
  return el;
});
// [ [100, 105], [200, 205] ]
// [ [220, 230], [430, 455] ]

console.log("===34.2=====================================");
// const flatArray6 = [
//   [
//     [100, 105],
//     [200, 205],
//   ],
//   [
//     [220, 230],
//     [430, 455],
//   ],
// ];
const result35 = flatArray6.map((el) => {
  console.log(el);
  // [ [100, 105], [200, 205] ]
  // [ 100, 105][ 200, 205 ];

  el.map((it) => {
    console.log(it);
    // [ [220, 230], [430, 455] ]
    // [ 220, 230 ][ 430, 455];

    return it;
  });

  return el;
});

console.log("===34.3=====================================");
// const flatArray6 = [
//   [
//     [100, 105],
//     [200, 205],
//   ],
//   [
//     [220, 230],
//     [430, 455],
//   ],
// ];
const result36 = flatArray6.map((el) => {
  el.map((it) => {
    return it[0] - it[1];
  });

  return el;
});

console.log(result36); //[ [ [ 100, 105 ], [ 200, 205 ] ], [ [ 220, 230 ], [ 430, 455 ] ] ]

console.log("===34.4=====================================");
const result37 = flatArray6.map((el) => {
  return el.map((it) => {
    return it[0] - it[1];
  });
});

console.log(result37); //[ [ -5, -5 ], [ -10, -25 ] ]

console.log("===34.5=====================================");
const result38 = flatArray6.map((el) => {
  const newArr = el.map((it) => {
    return it[0] - it[1];
  });
  console.log(newArr);

  return newArr;
});
// [-5, -5]
// [-10, -25];

console.log("===34.6=====================================");
const result39 = flatArray6.flatMap((el) => {
  return el.map((it) => {
    return it[0] - it[1];
  });
});
console.log(result39); //[ -5, -5, -10, -25 ]

console.log("===34.7=====================================");
result39.forEach((elem, index, array) => {
  console.log(elem);
});
// -5 - 5 - 10 - 25
