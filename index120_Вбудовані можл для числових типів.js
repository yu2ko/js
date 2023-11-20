const a1 = 10;
console.log(a1); //10

const b1 = Number(10);
console.log(b1); //10

console.log(a1 === b1); //true

console.log(a1 + b1); //20

console.log("====================================");
const a = 0.1;
const b = 0.2;
const c = 0.3;

const d = a + b;

console.log(d); //0.30000000000000004
console.log(Number.EPSILON); //2.220446049250313e-16

console.log(d - c < Number.EPSILON); //true

console.log(d - c < Number.EPSILON && c - d < Number.EPSILON); //true

console.log("====================================");
console.log(Number.MIN_SAFE_INTEGER); //-9007199254740991
console.log(Number.MAX_SAFE_INTEGER); //9007199254740991

console.log("====================================");
console.log(Number.MIN_VALUE); //5e-324
console.log(Number.MAX_VALUE); //1.7976931348623157e+308

console.log("=reviewNumber===================================");
function reviewNumber(num) {
  if (isNaN(num)) {
    return console.log("Is Not a Number", num);
  }
  if (!num && num !== 0) {
    return console.log("Bad number", num);
  }

  if (!Number.isInteger(num)) {
    return console.log("Дробове число", num);
  }

  return console.log(num); //10.5
}

reviewNumber(10.5);

console.log("=Перевірка на безпечне ціле число============");
function reviewNumber(num) {
  if (isNaN(num)) {
    return console.log("Is Not a Number", num);
  }
  if (!num && num !== 0) {
    return console.log("Bad number", num);
  }

  if (!Number.isInteger(num)) {
    return console.log("Дробове число", num);
  }

  if (!Number.isSafeInteger(num)) {
    return console.log("Небезпечне число", num);
  }

  return console.log(num); //Небезпечне число 9007199254740992
}

reviewNumber(Number.MAX_SAFE_INTEGER + 1);

console.log("====================================");
const f1 = Number(10);
const f2 = f1.toFixed();
const f3 = f2.charAt();

Number(10).toFixed().charAt();

console.log("=correct===================================");
(10000).toFixed();

const a11 = Number("10000.1").toFixed(); //округлення

const w1 = Number("1.00001");
const w11 = Number("1.00001 f1");

const w2 = parseInt("1000", 2); //більш використовується //8

console.log(w1, w11, w2); //1.00001 NaN 8

console.log(a11); //10000 з округленням

console.log("=toFixed===================================");
const j1 = 1.1233567;
const j3 = j1.toFixed(4);

console.log(j3); //j1.toFixed(0)- 1; j1.toFixed(1)- 1.1; j1.toFixed(4)- 1.1234
console.log(typeof j3);

console.log("=toPrecision===================================");
const g1 = 1123.3567;
const g3 = parseFloat(g1.toPrecision(5));

console.log(g3); //g1.toPrecision(5)- 1123.4; g1.toPrecision(4)- 1123; g1.toPrecision(3)- 1120; g1.toPrecision(1)- 1000
console.log(typeof g3);

console.log("=toPrecision===================================");
const h1 = 1600.3567;
const h3 = parseFloat(h1.toPrecision(1));

console.log(h3); //g1.toPrecision(1)- 2000
console.log(typeof h3);

console.log("=toExponantial===================================");
const l1 = 999999923234242;
const l3 = l1.toExponential(4); //рядок
const l4 = parseFloat(l3);
const l41 = parseInt(l3);

console.log(l3); //toExponential(4) - 1.0000e+15
console.log(typeof l3); //string

console.log(l4); //1000000000000000
console.log(typeof l4); //number

console.log(l41); //1
console.log(typeof l41); //number

console.log("=toExponantial2===================================");
const l11 = 999999923234242;
const l31 = l11.toExponential();
// const l51 = Number(l31);
const l51 = parseFloat(l31);
const l61 = l51.toString(2);

console.log(l31, l51); //9.99999923234242e+14 999999923234242
console.log(l11 === l51); //true

console.log(l61); //11100011010111111010100000001100110010010111000010
