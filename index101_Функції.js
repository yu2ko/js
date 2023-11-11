// const result = `${amount * 4}${unit}`;
function calcSpace(amount, unit) {
  // return result;
  return `${amount * 4}${unit}`; //якщо функція проста
}
console.log("v1======");
console.log(calcSpace(5, "px")); //20px

// const test = console.log("test");
// console.log(test); //функція нічого не повертає - undefined

// ===================================================================
function calcSpace(amount, unit) {
  if (unit !== undefined) {
    return `${amount * 4}${unit}`;
  } else {
    // console.log("Error");
    return "Error";
  }
}
console.log("v2======");
console.log(calcSpace(5, "px")); //20px
// console.log(calcSpace(5));

// ===================================================================
function calcSpace(amount, unit) {
  if (unit !== undefined) {
    unit = "px";
  }
  return `${amount * 4}${unit}`;
}
console.log("v3======");
console.log(calcSpace(5, "px")); //20px

// ===================================================================
function calcSpace(amount, unit = "px") {
  return `${amount * 4}${unit}`;
}
console.log("v4======");
console.log(calcSpace(5, "px")); //20px

// ===================================================================
function calcSpace(amount, unit = "px") {
  return `${amount * 4}${unit}`;
}
console.log("v5======");
console.log(calcSpace(5)); //20px

// ===================================================================
function calcSpace(amount, unit = 2 + 2) {
  return `${amount * 4}${unit}`;
}
console.log("v6======");
console.log(calcSpace(5)); //204

// ===================================================================
function calcSpace(amount, unit = console.log("unit is not set") || "px") {
  return `${amount * 4}${unit}`;
}
console.log("v7======");

console.log(calcSpace(5)); //unit is not set √ 20px

// ===================================================================
function calcSpace(amount, unit = "px") {
  return `${amount * 4}${unit}`;
}
console.log("v8======");
console.log(calcSpace(5)); //20px
