// ============================================================
//Дискаунт
// ============================================================
// const PRODUCT_AMOUNT = 6;

// let discountAmount = 0;

// discountAmount = 6 * 2;

// console.log("Знижка:", discountAmount, "%	"); //Знижка: 12%

// ============================================================

const PRODUCT_AMOUNT = 6;
const DISCOUNT_ADDITIONAL = 2;

let discountAmount = 0;
let productCount = 0;

while (
  productCount < PRODUCT_AMOUNT &&
  DISCOUNT_ADDITIONAL <= 10 &&
  discountAmount <= 10
) {
  productCount++;

  if (productCount <= 0) {
    break;
  }

  if (productCount <= 3) {
    discountAmount += 1;
  } else if (productCount > 3 && productCount <= 5) {
    discountAmount += 1.5;
  } else if (productCount > 5 && productCount <= 8) {
    discountAmount += 2;
  } else if (productCount > 8) {
    discountAmount += 2.5;
  }

  if (DISCOUNT_ADDITIONAL) {
    discountAmount += DISCOUNT_ADDITIONAL;
  }

  console.log(productCount, discountAmount);
}

if (discountAmount > 10) {
  discountAmount = 10;
}

console.log("Знижка:", discountAmount, "%	");

console.log("Знижка для товарів:", productCount);

console.log("Товарів не мають знижки:", PRODUCT_AMOUNT - productCount);
