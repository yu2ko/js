// Вбудовані функції
// ===============================================
console.log("#1=eval==============================");
const code = "(5+5)%5===0";

console.log(eval(code)); //true

// ===============================================
console.log("#2=eval==============================");
const code2 = `console.log("Hello")`;
eval(code2);

// ===============================================
console.log("#3===============================");
function calcScreenRatio(w, h) {
  return w / h;
}

console.log(calcScreenRatio(1920, 1080)); // 1.7777777777777777	is Infinity
console.log(calcScreenRatio(1920, 0)); // Infinity
console.log(calcScreenRatio(1920, "123f")); // NaN Error
console.log(calcScreenRatio(1920, "123")); // 15.609756097560975	is Infinity

// ===============================================
console.log("#4=isFinite==============================");
function calcScreenRatio(w, h) {
  let result = w / h;
  return isFinite(result) ? result : null;
}

console.log(calcScreenRatio(1920, "123f")); // null	Error
console.log(calcScreenRatio(1920, "123")); // 15.609756097560975	is Infinity

// ===============================================
console.log("#5!!!=isNaN==============================");
function calcScreenRatio(w, h) {
  let result = w / h;

  if (isNaN(result)) {
    return "Error";
  } else if (!isFinite(result)) {
    return "is Infinity";
  } else {
    return result;
  }
}

console.log(calcScreenRatio(1920, "123f")); // Error
console.log(calcScreenRatio(1920, 0)); // is Infinity
console.log(calcScreenRatio(1920, "123")); // 15.609756097560975

// ===============================================
console.log("#6=parseFInt==============================");

const num = 10;
const num2 = "10";
const num3 = parseInt("10");
const num4 = parseInt("10 fffff");
const num5 = parseInt("10fffff 30");
const num6 = parseInt("fffff30");

console.log(10 + num); //20
console.log("10", 10 + num2); //1010

console.log(10 + num3); //20
console.log("10 fffff", 10 + num4); //20
console.log("10fffff 30", 10 + num5); //20
console.log("fffff30", num6); //NaN

// ===============================================
console.log("#7=======================================");
function calcScreenRatio2(w1, h1) {
  w1 = parseInt(w1);
  h1 = parseInt(h1);
  let result = w1 / h1;

  if (isNaN(result)) {
    return "Error";
  } else if (!isFinite(result)) {
    return "is Infinity";
  } else {
    return result;
  }
}

console.log(calcScreenRatio2("1920px", "1000px")); //1.92

const num8 = parseInt("1010", 2);
console.log(num8); //10

const num9 = parseInt("1.55");
console.log(num9); //1

const num10 = parseFloat("1.55");
console.log(num10); //1.55

// ===============================================
console.log("#7=======================================");

const domain = "it-brains.com.ua";

function redirectToPath(path) {
  const link1 = `https://${domain}/${path}`;
  console.log(link1); //https://it-brains.com.ua/product/Мікрофон рожевий/info

  const link2 = encodeURI(`https://${domain}/${path}`);
  console.log(link2); // https://it-brains.com.ua/product/%D0%9C%D1%96%D0%BA%D1%80%D0%BE%D1%84%D0%BE%D0%BD%20%D1%80%D0%BE%D0%B6%D0%B5%D0%B2%D0%B8%D0%B9/info

  const link3 = encodeURIComponent(`https://${domain}/${path}`);
  console.log(link3); // https%3A%2F%2Fit-brains.com.ua%2Fproduct%2F%D0%9C%D1%96%D0%BA%D1%80%D0%BE%D1%84%D0%BE%D0%BD%20%D1%80%D0%BE%D0%B6%D0%B5%D0%B2%D0%B8%D0%B9%2Finfo
}

redirectToPath("product/Мікрофон рожевий/info");

console.log("#8=======================================");

const domain2 = "it-brains.com.ua";

function redirectToPath2(path) {
  path = encodeURIComponent(path);

  const link22 = `https://${domain}/${path}`;
  console.log(link22); // https://it-brains.com.ua/product%2F%D0%9C%D1%96%D0%BA%D1%80%D0%BE%D1%84%D0%BE%D0%BD%20%D1%80%D0%BE%D0%B6%D0%B5%D0%B2%D0%B8%D0%B9%2Finfo
}

redirectToPath2("product/Мікрофон рожевий/info");

console.log("#9=======================================");

const domain3 = "it-brains.com.ua";

function redirectToPath(path) {
  const link33 = encodeURI(`https://${domain}/${path}`);
  console.log(link33); // https://it-brains.com.ua/product/%D0%9C%D1%96%D0%BA%D1%80%D0%BE%D1%84%D0%BE%D0%BD%20%D1%80%D0%BE%D0%B6%D0%B5%D0%B2%D0%B8%D0%B9/info
  return link33;
}

const URI =
  "https://it-brains.com.ua/product/%D0%9C%D1%96%D0%BA%D1%80%D0%BE%D1%84%D0%BE%D0%BD%20%D1%80%D0%BE%D0%B6%D0%B5%D0%B2%D0%B8%D0%B9/info";

function getUrl(urlInURI) {
  urlInURI = decodeURI(urlInURI);
  // urlInURI = decodeURIComponent(urlInURI);
  console.log(urlInURI);
  return urlInURI;
}

const path = "product/Мікрофон рожевий/info";
const link90 = `https://${domain}/${path}`;

const link91 = redirectToPath(path); // URI

const link92 = getUrl(link91); //Decode URI

console.log(link90 === link92);
// https://it-brains.com.ua/product/%D0%9C%D1%96%D0%BA%D1%80%D0%BE%D1%84%D0%BE%D0%BD%20%D1%80%D0%BE%D0%B6%D0%B5%D0%B2%D0%B8%D0%B9/info
// https://it-brains.com.ua/product/Мікрофон рожевий/info
// true
