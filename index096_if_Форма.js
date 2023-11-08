let age = 25;
let hasExp = true;
let hasEdu = true;

let JS = true;
let HTML = true;

let result = null;

form: {
  if (age >= 18) {
    if (hasExp) {
      // if (hasExp || hasEdu) {
      console.log("1st variant", "Ви підходите");
      result = true;

      // if (!hasEdu) {
      //   console.log("Ви не підходите.Нема освіти");
      // }

      if (result === null && JS) {
        console.log("1st variant", "Ви підходите");
      }

      if (result === null && HTML) {
        console.log("1st variant", "Ви підходите");
      }
    }
    // =====================================================
    if (result === null && hasEdu) {
      console.log("1st variant", "Ви підходите");
      result = false;
    }
    // =====================================================

    // if (!hasExp) {
    //   console.log("Ви не підходите.Нема досвіду");
    // }
  }

  if (age < 18) {
    console.log("1st variant", "Ви не підходите.Маленькій вік");
    result = false;
  }
}

// =========================================================
// =========================================================
// =========================================================

let age2 = 25;
let hasExp2 = false;
let hasEdu2 = true;

let JS2 = true;
let HTML2 = true;

let result2 = null;

form2: {
  if (age2 >= 18) {
    if (hasExp2) {
      console.log("2nd variant", "Ви підходите");
      break form2;

      if (JS2) {
        console.log("2nd variant", "Ви підходите");
      }

      if (HTML2) {
        console.log("2nd variant", "Ви підходите");
      }
    }

    if (hasEdu2) {
      console.log("2nd variant", "Ви підходите");
      break form2;
    }
  }

  if (age2 < 18) {
    console.log("2nd variant", "Ви не підходите.Маленькій вік");
    break form2;
  }
}
