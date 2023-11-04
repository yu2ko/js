const a = 0b0001;
const b = 0b0010;
const c = 0b0100;

let settings = 0b0000;

settings |= a;
//0000
//0001
//=
//0001

settings |= b;
//0001
//0010
//=
//0011

console.log((settings & c) === 0b0000); //true
//0011
//0100
//=
//0000

// console.log(!((settings & c) === 0b0000)); //false
isButtonOn = !((settings & c) === 0b0000); //false - кнопка C вимкнена
console.log(isButtonOn);

isButtonOn = !((settings & a) === 0b0000); //true - кнопка a вмикнена
console.log(isButtonOn);

isButtonOn = !((settings & b) === 0b0000); //true - кнопка b вмикнена
console.log(isButtonOn);
