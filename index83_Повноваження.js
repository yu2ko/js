const login = "user";
const password = "12121weqeeqweq";
const isAdmin = true;
const isLoggedIn = null;

if (isLoggedIn === true) {
  if (isAdmin) {
    console.log("Переходимо на сторінку /admin");
  } else if (login === "demo") {
    console.log("Переходимо на сторінку /demo");
  } else {
    console.log("Переходимо на сторінку /home");
  }
} else if (isLoggedIn === false) {
  if (login && password) {
    console.log("Token:", 121124424242);

    if (isAdmin) {
      console.log("Переходимо на сторінку /admin");
    } else {
      console.log("Переходимо на сторінку /home");
    }
  }
} else if (isLoggedIn === null) {
  console.log("Помилка");
}
