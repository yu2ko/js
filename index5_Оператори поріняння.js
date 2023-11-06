const personAge = 10;
const dogAge = "10";
console.log(personAge == dogAge); //true

// const personAge = true;
// const dogAge = "1";
// console.log(personAge == dogAge); //true

// const personAge = false;
// const dogAge = "0";
// console.log(personAge == dogAge); //true

// const personAge = 0;
// const dogAge = -0;
// console.log(personAge == dogAge); //true

// const personAge = 0;
// const dogAge = undefind;
// console.log(personAge == dogAge); //true динамічна типизація

// const personAge = 0;
// const dogAge = undefind;
// console.log(personAge === dogAge); //false статична типизація

// const personAge = false;
// const dogAge = "0";
// console.log(personAge === dogAge); //false статична типизація

// const personAge = 10;
// const dogAge = "10";
// console.log(personAge != dogAge); //false

// const personAge = "0";
// const dogAge = 0;
// console.log(personAge == dogAge); //true

// const personAge = "0";
// const dogAge = 0;
// console.log(personAge != dogAge); //false

// const personAge = "1";
// const dogAge = 0;
// console.log(personAge != dogAge); //true

// const personAge = "0";
// const dogAge = 0;
// console.log(personAge !== dogAge); //true

// const personAge = 0;
// const dogAge = 0;
// console.log(personAge !== dogAge); //false

const personAge2 = 10;
const dogAge2 = "50";
console.log(personAge2 < dogAge2); //true

// const personAge2 = 0;
// const dogAge2 = true;
// console.log(personAge2 < dogAge2); //true

// const personAge2 = 1;
// const dogAge2 = "false";
// console.log(personAge2 < dogAge2); //false

// const personAge2 = 1;
// const dogAge2 = "";
// console.log(personAge2 < dogAge2); //true

// const personAge2 = true;
// const dogAge2 = "1";
// console.log(personAge2 <= dogAge2); //true

console.log(null >= 0); //true
console.log(null == 0); //false null не буде перетворюватися

console.log("0" >= "sdsdsdsds"); //false "sdsdsdsds"-перетворюється в 1
console.log("sdsdsdsds" >= "0"); //true "sdsdsdsds"-перетворюється в 1
