// World - тіло коду
const productName = "Мікрофон";
const productDefault = "Назва товару";

const newProductName = "Мікрофон 3000";
const userRole = "admin";
const userRole2 = "user";

const updateProductName = userRole === "admin" ? newProductName : productName;
console.log("updateProductName", updateProductName); //Мікрофон 3000

const updateProductName2 = userRole2 === "admin" ? newProductName : productName;
console.log("updateProductName2", updateProductName2); //Мікрофон

// =======================================================================================

const productName3 = "";
const productDefault3 = "Назва товару";

const newProductName3 = "Мікрофон 3000";
const userRole31 = "admin";
const userRole32 = "user";

const updateProductName3 =
  userRole32 === "admin" ? newProductName3 : productName3 || productDefault3;
console.log("updateProductName3", updateProductName3); //Назва товару

// =======================================================================================

const productName4 = "Мікрофон";
const productDefault4 = "Назва товару";

const newProductName4 = "Мікрофон 3000";
const userRole41 = "admin";
const userRole42 = "user";

const updateProductName4 =
  (userRole41 === "admin" && newProductName4) || productName4;
console.log("updateProductName4", updateProductName4); //Мікрофон 3000 - Альтернатива тернарного оператора

const updateProductName41 =
  userRole41 === "admin"
    ? console.log("isAdmin") || newProductName4
    : console.log("noAdmin") || productName4;
console.log("updateProductName41", updateProductName4); //Мікрофон 3000

// =======================================================================================

// Country #1 - блок коду
{
  let test = "test";
  test = productName; //зможе присвоїтись, так як ця змінна знаходиться в тілі коду
  // test = test2; не зможе присвоїтись, так як ця змінна знаходиться в блоці коду Country #2
  console.log(test); //Мікрофон
  {
    let info = "Hello World!";
    info = `${info} ${test}`; //між `` та "" є різниця!
    console.log("test", info); //test Hello World! Мікрофон
  }
  {
    let info = "Hello World!";
    info = `${info} ${test}`; //між `` та "" є різниця!
    console.log("test", info); //test Hello World! Мікрофон
  }
}

// Country #2 - блок коду
{
  let test = "test";
  const test2 = "Hello";
  console.log(test2); //Hello
}
