console.log("===1=====================================");
const set = new Set(["123", "123", "123", 123, null]);
console.log(set); //Set(3) { '123', 123, null }

console.log("===2=====================================");
const userIdList = new Set([40132, 45451, 65431, 506541]);
console.log(userIdList); //Set(4) { 40132, 45451, 65431, 506541 }

console.log("===2.1=====================================");
for (const value of userIdList) {
  console.log(value);
}
// 40132;
// 45451;
// 65431;
// 506541;

console.log("===2.2=====================================");
userIdList.forEach((value, value2, set) => console.log(value));
// 40132;
// 45451;
// 65431;
// 506541;

console.log("===3=====================================");
console.log(userIdList.size); //4

console.log("===4=====================================");
// const userIdList = new Set([40132, 45451, 65431, 506541]);
console.log(userIdList); // Set(4) { 40132, 45451, 65431, 506541 }
userIdList.add(40133);
console.log(userIdList); // Set(5) { 40132, 45451, 65431, 506541, 40133 }
console.log(userIdList.size); // 5

console.log("===5=====================================");
// const userIdList = new Set([40132, 45451, 65431, 506541, 40133]);
console.log(userIdList); // Set(5) { 40132, 45451, 65431, 506541, 40133 }
userIdList.delete(40133);
console.log(userIdList); // Set(4) { 40132, 45451, 65431, 506541 }
console.log(userIdList.size); // 4

console.log("===6.1=====================================");
const result = userIdList.delete(40133);
console.log(result); //false

console.log("===6.2=====================================");
// const userIdList = new Set([40132, 45451, 65431, 506541]);
console.log(userIdList); //Set(4) { 40132, 45451, 65431, 506541 }
const result2 = userIdList.delete(40133);
console.log(result2); //false;

console.log("===6.2=====================================");
// const userIdList = new Set([40132, 45451, 65431, 506541]);
console.log(userIdList);
const result3 = userIdList.delete(40132);
console.log(result3);

console.log("===6.3=====================================");
// const userIdList = new Set([45451, 65431, 506541]);
console.log(userIdList); //Set(3) { 45451, 65431, 506541 }
console.log(userIdList.has(45451)); //true
console.log(userIdList.has(45452)); //false
console.log(userIdList.has("45452")); //false

console.log("===7=====================================");
userIdList.clear();
console.log(userIdList); //Set(0) {}

console.log("===8=====================================");
const userIdList8 = new Set([40132, 45451, 65431, 506541]);
const key = userIdList8.keys();
console.log(key); //[Set Iterator] { 40132, 45451, 65431, 506541 }

console.log("===9=====================================");
// const userIdList8 = new Set([40132, 45451, 65431, 506541]);
const values = userIdList8.values();
console.log(values); //[Set Iterator] { 40132, 45451, 65431, 506541 }

console.log("===10.1=====================================");
// const userIdList8 = new Set([40132, 45451, 65431, 506541]);
const entries = userIdList8.entries();
console.log(entries);
// [Set Entries] {
//   [ 40132, 40132 ],
//   [ 45451, 45451 ],
//   [ 65431, 65431 ],
//   [ 506541, 506541 ]
// }

console.log("===10.2=====================================");
// const userIdList8 = new Set([40132, 45451, 65431, 506541]);
const entry = userIdList8.entries();
const obj = Object.fromEntries(entry);
console.log(obj); //{ '40132': 40132, '45451': 45451, '65431': 65431, '506541': 506541 }

console.log("===10.3=====================================");
// const userIdList8 = new Set([40132, 45451, 65431, 506541]);
const valueList = userIdList8.values();
const arr = Array.from(valueList);
console.log(arr); //[ 40132, 45451, 65431, 506541 ]

console.log("===11.1=====================================");
const arr11 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
const set11 = new Set(arr11);
const arr112 = [...set11];
console.log(arr112); //[ 1, 2, 3, 4, 5 ]

console.log("===11.2=====================================");
// const arr11 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
// const set11 = new Set(arr11);

// const arr1122 = Array.from(set11.values()); //1st variant
const arr1122 = Array.from(set11); //2nd variant
console.log(arr1122); //[ 1, 2, 3, 4, 5 ]

console.log("===12=====================================");
const categoryList = new Set();

function addCategory(category) {
  if (categoryList.has(category)) {
    console.log("Ця категорія вже є");
    return false;
  }
  categoryList.add(category);
  return true;
}
console.log(addCategory("спорт"));
console.log(addCategory("спорт"));
console.log(addCategory("їжа"));

console.log("===13=====================================");
const students = [
  { id: 1, name: "John", course: "Math" },
  { id: 2, name: "Jane", course: "Science" },
  { id: 3, name: "Adam", course: "Math" },
  { id: 4, name: "Eve", course: "English" },
  { id: 5, name: "Kate", course: "Science" },
];
const courseList = new Set(students.map((student) => student.course));
console.log("===13.1=====================================");
console.log(courseList); //Set(3) { 'Math', 'Science', 'English' }

console.log("===13.2=====================================");
console.log(Array.from(courseList)); //[ 'Math', 'Science', 'English' ]
