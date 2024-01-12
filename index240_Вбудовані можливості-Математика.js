console.log("===1=====================================");
console.log(Math.PI); //3.141592653589793

console.log("===2=====================================");
const a = 5;
const b = 10;
const c = -5;
const d = 0;
const e = "0";
const f = "0ffc";

const arr = [20, 30, 40];
console.log(Math.max(a, b, c, ...arr)); //40
console.log(Math.min(a, b, c, ...arr)); //-5

console.log("===2.1=====================================");
console.log(Math.sign(c)); //-1
console.log(Math.sign(d)); //0
console.log(Math.sign(e)); //0
console.log(Math.sign(f)); //NaN

console.log("===3=====================================");
console.log(Math.pow(a, 3)); //125

console.log("===4=====================================");
console.log(Math.sqrt(b)); //3.1622776601683795
console.log(Math.sqrt(16)); //4

console.log("===5=====================================");
console.log(Math.floor(1.1), Math.floor(1.5), Math.floor(1.9)); //1 1 1
console.log(Math.ceil(1.156), Math.ceil(1.556), Math.ceil(1.956)); //2 2 2
console.log(Math.round(1.156), Math.round(1.499), Math.round(1.956)); //1 1 2
console.log(Math.round(1.156), Math.round(1.5), Math.round(1.956)); //1 2 2
console.log(Math.trunc(1.156), Math.trunc(1.5), Math.trunc(1.956)); //1 1 1

console.log("===6=====================================");
console.log(Math.random()); //0.821699108720541

console.log("===7=====================================");
const random = Math.trunc(Math.random() * 10) + 1;
console.log(random); //9

console.log("===8=====================================");
console.log(0.1 + 0.2); //0.30000000000000004
console.log(Math.fround(0.1 + 0.2) === Math.fround(0.3)); //true

console.log("===8.1=====================================");
console.log(0.1 + 0.2); //0.30000000000000004
console.log(Math.fround(0.1 + 0.2)); //0.30000001192092896
console.log(Math.fround(0.3)); //0.30000001192092896
console.log(0.3); //0.3

console.log("===8.2=====================================");
console.log(Math.floor(0.1 + 0.2) === Math.floor(0.3)); //true
console.log(Math.round(0.1 + 0.2) === Math.round(0.3)); //true
