//Велотренажер
let start = 40; //початок відліку
let goal = 100; //обороти - ціль

let step = 0; //поточні значення
let set = 8; //через скільки збір даних
let rest = 10; //коли відпочинок

do {
  if (step === 0) {
    console.log("Початок тренування");
  }

  start++;
  step++;

  if (step === goal || start === goal) {
    console.log("Кінець тренування");
    break;
  }

  if (step % rest === 0) {
    console.log(`Зробіть перерву`);
    continue;
  }

  if (step % set === 0) {
    console.log(`Ви зробили ${step / set} сет(ів)`);
  }

  if (step === goal / 2) {
    console.log("Половина тренування");
  }

  console.log(`Поточний прогрес`, step);
} while (step < goal && start < goal);
