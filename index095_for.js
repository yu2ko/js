// let start = 40; //початок відліку
// let goal = 100; //обороти - ціль

// for (let i = start, j = goal; i <= j; i++) {
//   console.log("Test", i, j);
// }

let q = 0;

main: for (let i = 0, j = 5; i <= j; i++) {
  console.log("Test", i, j);
  if (i === 3) {
    j++;
  }

  // ============================================
  ////// for (let q = 0; q < i; q++) {
  // ============================================
  // for (; q < i; q++) {
  //   console.log("Q", q);
  // }
  // ============================================

  // for (; ; q++) {
  //   console.log("Q", q);
  //   if (q >= i) {
  //     break;
  //   }
  // }

  // ============================================
  for (;;) {
    console.log("Q", q);

    q++; //правільніше

    if (q >= i) {
      break;
      break main;
    }
  }
  // ============================================
  // for (;;) {
  //   console.log("Q", q);

  //   if (q >= i) {
  //     break main;
  //   }
  //   q++; //не бажанно
  // }
  // ============================================
}
