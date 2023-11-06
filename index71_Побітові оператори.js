let a = 11;
let b = 12;
console.log(a, a.toString(2)); //11 1011
console.log(b, b.toString(2)); //12 1100
let c = a & b;
console.log(c, c.toString(2)); // 8 1000

let d = 11;
let e = 12;
console.log(d, d.toString(2)); //11 1011
console.log(e, e.toString(2)); //12 1100
let f = d | e;
console.log(f, f.toString(2)); //15 1111

// let d1 = 4;
// let e1 = 6;
// console.log(d1, d1.toString(2)); //4 100
// console.log(e1, e1.toString(2)); //6 110
// let f1 = d1 | e1;
// console.log(f1, f1.toString(2)); //6 110

let d1 = 0b1000;
let e1 = 0b1100;
// console.log(d1); // 8
// console.log(e1); //12
let f1 = d1 | e1;
console.log(f1.toFixed(2)); //12.00
console.log(f1.toString(2)); //1100

// ===========================================
const canRead = false;
const canWrite = true;
const canDelete = false;
const canEdit = true;

let userRole = 0b0101;
let adminRole = 0b1111;
let isAdmin = userRole & adminRole;
console.log("isAdmin", isAdmin); //5
console.log("isAdmin", isAdmin.toString(2)); //101 ~ userRole = 0b0101

let isAdmin2 = userRole === adminRole;
console.log("isAdmin2", isAdmin2); //false

let userRole1 = 0b0101;
let user2Role1 = 0b0010;
let isSameRole1 = (userRole1 & user2Role1) === userRole1;
console.log("isSameRole1", isSameRole1); //false

let userRole12 = 0b0101;
let user2Role12 = 0b0101;
let adminRole12 = 0b1111;
let friendRole = userRole12 | user2Role12;
console.log("friendRole", friendRole.toString(2)); //101
console.log("friendRole", friendRole === adminRole12); //false

let userRole2 = 0b0101;
let user2Role2 = 0b1010;
let adminRole2 = 0b1111;
let friendRole2 = userRole2 ^ user2Role2;
console.log("friendRole2", friendRole2.toString(2)); //1111
console.log("friendRole2", friendRole2 === adminRole2); //true

console.log(userRole2); //5 0101
console.log(~userRole2); //-6 1010
console.log("userRole2", userRole2.toString(2)); //101
// ===========================================

let adminRole3 = 0b1111;
adminRole3 = ~adminRole3;
console.log("~adminRole3", adminRole3.toString(2)); //-10000

let userRole3 = 0b0101;
userRole3 = ~userRole3;
console.log("~userRole3", userRole3.toString(2)); //-110
// ===========================================

let freeTea = 0b00001;
freeTea = freeTea << 1;
console.log(freeTea.toString(2)); //10
console.log(freeTea === 0b10000); //false

freeTea = freeTea << 1;
console.log(freeTea.toString(2)); //100
console.log(freeTea === 0b10000); //false

freeTea = freeTea << 1;
console.log(freeTea.toString(2)); //1000
console.log(freeTea === 0b10000); //false

freeTea = freeTea << 1;
console.log(freeTea.toString(2)); //10000
console.log(freeTea === 0b10000); //true

// ===========================================
let freeTea2 = 0b10000;
freeTea2 = freeTea2 >> 1;
console.log("freeTea2", freeTea2.toString(2)); //1000
console.log(freeTea2 === 0b00001); //false

freeTea2 = freeTea2 >> 1;
console.log(freeTea2.toString(2)); //100
console.log(freeTea2 === 0b00001); //false

freeTea2 = freeTea2 >> 1;
console.log(freeTea2.toString(2)); //10
console.log(freeTea2 === 0b00001); //false

freeTea2 = freeTea2 >> 1;
console.log(freeTea2.toString(2)); //1
console.log(freeTea2 === 0b00001); //true
// ===========================================
let freeTea3 = 0b10000;
freeTea3 >>= 1;
console.log("freeTea3", freeTea3.toString(2)); //1000
console.log(freeTea3 === 0b00001); //false

freeTea3 >>= 1;
console.log(freeTea3.toString(2)); //100
console.log(freeTea3 === 0b00001); //false

freeTea3 >>= 1;
console.log(freeTea3.toString(2)); //10
console.log(freeTea3 === 0b00001); //false

freeTea3 >>= 1;
console.log(freeTea3.toString(2)); //1
console.log(freeTea3 === 0b00001); //true
