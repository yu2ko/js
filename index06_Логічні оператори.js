const userRole = 1;
const adminRole = 2;

// ==============================================================
const productStockPrice = 99;
const defaultProductPrice = 150;
const adminPrice = 0;
const productPrice =
  adminPrice ?? productStockPrice ?? defaultProductPrice ?? 100;
console.log("productPrice", productPrice); // 0
// ==============================================================
const productStockPrice2 = 99;
const defaultProductPrice2 = 150;
const adminPrice2 = null;
const productPrice21 =
  adminPrice2 ?? productStockPrice2 ?? defaultProductPrice2 ?? 100;
console.log("productPrice21", productPrice21); // 99
// ==============================================================
const productStockPrice3 = null;
const defaultProductPrice3 = null;
const adminPrice3 = null;
const productPrice31 =
  adminPrice3 ?? productStockPrice3 ?? defaultProductPrice3 ?? 100;
console.log("productPrice31", productPrice31); // 100
// ==============================================================
const productStockPrice4 = null;
const defaultProductPrice4 = null;
const adminPrice4 = false;
const productPrice41 =
  adminPrice4 ?? productStockPrice4 ?? defaultProductPrice4 ?? 100;
console.log("productPrice41", productPrice41); // false
// ==============================================================
const productStockPrice5 = null;
const defaultProductPrice5 = null;
const adminPrice5 = false;
const productPrice51 =
  adminPrice5 || productStockPrice5 || defaultProductPrice5 || 100;
console.log("productPrice51", productPrice51); // false
// ==============================================================

const ivanRole = userRole;
const ivanBalance = 300;

// const isAdmin = ivanRole === adminRole;
// const canBuy = ivanBalance >= productPrice;

// const result1 = isAdmin === true;
// const result2 = canBuy === true;

// const result = result1 === result2;

const result = ivanRole === adminRole || ivanBalance >= productPrice; //true
console.log("result", result);

const productPrice2 = 400;
const result3 = ivanRole === adminRole || ivanBalance >= productPrice2; //false
console.log("result3", result3);

const name = "" || "Ivan"; //Ivan
console.log("name", name);

const name2 = "Ivan" || null; //Ivan
console.log("name2", name2);

const name3 = 123 || null; //123
console.log("name3", name3);

const name4 = 0 || null; //null
console.log("name4", name4);

const name5 = 0 || console.log("Hello"); //Hello undefined
console.log("name5", name5);

const defaultUserName = null;
const ivanName = null;
const authorName = ivanName || defaultUserName || "Автор";
console.log("authorName", authorName); //Автор

const defaultUserName2 = null;
const ivanName2 = "Ivan";
const authorName2 = ivanName2 || defaultUserName2 || "Автор";
console.log("authorName2", authorName2); //Ivan

// =============================================================

const defaultUserName3 = null;
const ivanName3 = "Ivan";
const authorName3 = ivanName3 && defaultUserName2 && "Автор";
console.log("authorName3", authorName3); //null

const ivanRole4 = 1;
const adminRole4 = 2;
const ivanBalance4 = 100;
const productPrice4 = 50;
const result4 = ivanRole4 === adminRole4 || ivanBalance4 >= productPrice4;
console.log("result4", result4); // -+ true

const result40 = ivanRole4 === adminRole4 || ivanBalance4 <= productPrice4;
console.log("result40", result40); // -- false

const result41 = ivanRole4 !== adminRole4 || ivanBalance4 >= productPrice4;
console.log("result41", result41); // ++ true

const result5 = ivanRole4 === adminRole4 && ivanBalance4 >= productPrice4;
console.log("result5", result5); // -+ false

const result50 = ivanRole4 !== adminRole4 && ivanBalance4 <= productPrice4;
console.log("result50", result50); // -- false

const result51 = ivanRole4 !== adminRole4 && ivanBalance4 >= productPrice4;
console.log("result51", result51); // ++ true

// || - хоча б одна умова "+" - true, коли всі "-" - false
// && - тільки коли всі умови "+" - true

const authorName4 = (ivanRole === adminRole && "Admin") || "User";
console.log("authorName4", authorName4); // User

const authorName5 = !(ivanRole === adminRole && "Admin") || "User";
console.log("authorName5", !authorName5); // false

const authorName6 = !(ivanRole === adminRole && "Admin") || "User";
console.log("authorName6", authorName6); // true

const authorName7 = !(ivanRole === adminRole && "Admin") && "User";
console.log("authorName7", authorName7); // User

// const ivanName = null;
console.log("ivanName", ivanName); // null

// const ivanName = null;
console.log("ivanName", !ivanName); // true

// const ivanName = null;
console.log("ivanName", !!ivanName); // false

const ivanName41 = 0;
console.log("ivanName41", !!ivanName41); // false

const ivanName42 = "";
console.log("ivanName42", !!ivanName42); // false

const ivanName43 = "false";
console.log("ivanName43", !!ivanName43); // true

const ivanName44 = "undefind";
console.log("ivanName44", !!ivanName44); // true

// ================================================================
let productTitle = "Навушники";
productTitle = productTitle || "Назва товару";
console.log("productTitle", productTitle); // Навушники

let productTitle1 = "Навушники";
productTitle1 ||= "Назва товару";
console.log("productTitle1", productTitle1); // Навушники

let productTitle2 = "";
productTitle2 = productTitle2 || "Назва товару";
console.log("productTitle2", productTitle2); // Назва товару

let productTitle3 = "";
productTitle3 ||= "Назва товару";
console.log("productTitle3", productTitle3); // Назва товару

let productTitle31 = null;
productTitle31 ||= "Назва товару";
console.log("productTitle31", productTitle31); // Назва товару

let productTitle4 = "Навушники";
productTitle4 &&= "Назва товару";
console.log("productTitle4", productTitle4); // Назва товару

let productTitle5 = null;
productTitle5 &&= "Назва товару";
console.log("productTitle5", productTitle5); // null

let productTitle6 = "";
productTitle6 &&= "Назва товару";
console.log("productTitle6", productTitle6); // empty

let productTitle7 = "";
productTitle6 ??= "Назва товару";
console.log("productTitle7", productTitle7); // empty

let productTitle8 = null;
productTitle8 ??= "Назва товару";
console.log("productTitle8", productTitle8); // Назва товару

let x = (1 && 2) ?? 3;
console.log("x", x); // 2

let a = null;
let b = 10;
a ||= b;
console.log("a", a); // в змінну a запишеться перший позитивний або останній операнд // видасть: 10
