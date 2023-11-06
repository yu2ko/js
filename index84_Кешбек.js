const price = 100;
const useCashback = true;

let cashbackLevel = 4;
let totalPrice = null;
let cashbackAmount = null;

if (price < 100) {
  console.log("Кешбек-система достопна для товарів з ціною від 100грн.");
  cashbackAmount = 0;
} else {
  if (cashbackLevel > 0) {
    cashbackAmount = price * (cashbackLevel * 0.01); //*0.01 - щоб перетворити у %
  }
  cashbackLevel++;

  if (cashbackLevel > 5) {
    cashbackLevel = 1;
  }

  if (useCashback > 0 && useCashback) {
    totalPrice = price - cashbackAmount;
  }
}

console.log(totalPrice, "грн."); //96(грн.) - з урахуванням кешбеку (загальна ціна - 100(грн.))
