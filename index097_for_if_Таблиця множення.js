table: for (let i = 1; i < 10; i++) {
  console.log("1st variant", `Число ${i} ============================`);
  for (j = 1; j < 10; j++) {
    if (i === 9) {
      break table;
    }
    console.log("1st variant", `${i}*${j}=${i * j}`);
  }
}

// ===========================================================================

table2: for (let i = 1; i < 10; i++) {
  if (i === 1) {
    continue;
  }

  console.log("2nd variant", `Число ${i} ============================`);
  for (j = 1; j < 10; j++) {
    if (j === 1) {
      continue;
    }
    console.log("2nd variant", `${i}*${j}=${i * j}`);
  }
}
