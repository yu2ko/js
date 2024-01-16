console.log("===1============================");
const regexp = /test/g;
console.log(regexp); //test/g

console.log("===2============================");
const regexp1 = RegExp("test", "g");
console.log(regexp1); //test/g

console.log("===3============================");
const regexp3 = /test/gims;
console.log(regexp3.flags); //gmsi

console.log("===3.1============================");
console.log(regexp3.global); //true g
console.log(regexp3.multiline); //true m
console.log(regexp3.dotAll); //true s
console.log(regexp3.ignoreCase); //true i

console.log("===4============================");
const regexp4 = /test/gims;
const result = regexp4.exec("This is a test");
console.log(result); //[ 'test', index: 10, input: 'This is a test', groups: undefined ]

console.log("===4.1============================");
const regexp41 = /.est/gims;
const result41 = regexp41.exec("This is a test and est");
console.log(result41); //[ 'test', index: 10, input: 'This is a test and est', groups: undefined ]

console.log("===4.2============================");
const regexp42 = /(.e)(st)/gims;
const result42 = regexp42.exec("This is a test and est");
console.log(result42);
// [
//   'test',
//   'te',
//   'st',
//   index: 10,
//   input: 'This is a test and est',
//   groups: undefined
// ]

console.log("===4.2.1============================");
console.log(result42[0]); //test

console.log("===4.2.2============================");
console.log(result42[1]); //te

console.log("===4.2.3============================");
console.log(result42[2]); //st

console.log("===4.3============================");
const regexp43 = /(?<group1>.e)(?<group2>st)/gims;
const result43 = regexp43.exec("This is a test and est");
console.log(result43);
// [
//   'test',
//   'te',
//   'st',
//   index: 10,
//   input: 'This is a test and est',
//   groups: [Object: null prototype] { group1: 'te', group2: 'st' }
// ]

console.log("===4.3.1============================");
console.log(result43.groups); //[Object: null prototype] { group1: 'te', group2: 'st' }

console.log("===4.4============================");
const regexp44 = /(?<group1>.e)(?<group2>st)/gims;
console.log("===4.4.1============================");
console.log(regexp44.exec("This is a test and est"));
// [
//   'test',
//   'te',
//   'st',
//   index: 10,
//   input: 'This is a test and est',
//   groups: [Object: null prototype] { group1: 'te', group2: 'st' }
// ]
console.log("===4.4.2============================");
// const regexp44 = /(?<group1>.e)(?<group2>st)/gims;
console.log(regexp44.exec("This is a test and est"));
// [
//   ' est',
//   ' e',
//   'st',
//   index: 18,
//   input: 'This is a test and est',
//   groups: [Object: null prototype] { group1: ' e', group2: 'st' }
// ]

console.log("===4.4.3============================");
// const regexp44 = /(?<group1>.e)(?<group2>st)/gims;
console.log(regexp44.exec("This is a test and est")); //null

console.log("===5============================");
// const regexp44 = /(?<group1>.e)(?<group2>st)/gims;
console.log(regexp44.test("This is a test and est")); //true

console.log("===6============================");
// const regexp44 = /(?<group1>.e)(?<group2>st)/gims;
console.log(regexp44.source); //(?<group1>.e)(?<group2>st)

console.log("===7============================");
regexp.lastIndex = 11;
console.log("===7.1============================");
// const regexp44 = /(?<group1>.e)(?<group2>st)/gims;
console.log(regexp44.exec("This is a test and est"));
// [
//   ' est',
//   ' e',
//   'st',
//   index: 18,
//   input: 'This is a test and est',
//   groups: [Object: null prototype] { group1: ' e', group2: 'st' }
// ]

console.log("===7.2============================");
// const regexp44 = /(?<group1>.e)(?<group2>st)/gims;
console.log(regexp44.exec("This is a test and est")); //null

console.log("===8============================");
const regexp45 = /(?<group1>.e)(?<group2>st)/gims;
const test = "This is a test and est";
console.log(test.replace(regexp45, "###")); //This is a ### and###
console.log(test.replaceAll(regexp45, "###")); //This is a ### and###

console.log("===8.1============================");
console.log(test.search(regexp45)); //10

console.log("===9============================");
console.log(test.match(regexp45, "###")); //[ 'test', ' est' ]
console.log(test.matchAll(regexp45, "###")); //Object [RegExp String Iterator] {}

console.log("===10============================");
// const regexp45 = /(?<group1>.e)(?<group2>st)/gims;
const result10 = test.matchAll(regexp45);
console.log(result10.next());
// {
//   value: [
//     'test',
//     'te',
//     'st',
//     index: 10,
//     input: 'This is a test and est',
//     groups: [Object: null prototype] { group1: 'te', group2: 'st' }
//   ],
//   done: false
// }
console.log(result10.next());
// {
//   value: [
//     ' est',
//     ' e',
//     'st',
//     index: 18,
//     input: 'This is a test and est',
//     groups: [Object: null prototype] { group1: ' e', group2: 'st' }
//   ],
//   done: false
// }
