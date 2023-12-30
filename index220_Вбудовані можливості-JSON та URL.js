console.log("===1.1=====================================");
const data = {
  id: 1043,
  login: "user3431",
  password: "123451we@",
  role: "Admin",
};
const jsonData = JSON.stringify(data);
console.log(jsonData); //{"id":1043,"login":"user3431","password":"123451we@","role":"Admin"}

console.log("===1.2=====================================");
const data2 = {
  id: 1043,
  login: "user3431",
  password: "123451we@",
  role: "Admin",
  go() {
    console.log("go");
  },
};
const jsonData2 = JSON.stringify(data2);
console.log(jsonData2); //{"id":1043,"login":"user3431","password":"123451we@","role":"Admin"} - функція go() не з'являється,
// у json тільки дані, функцій немає

console.log("===1.3=====================================");
const data21 = {
  id: 1043,
  login: "user3431",
  password: "123451we@",
  role: "Admin",
  go() {
    console.log("go");
  },
};
const jsonData21 = JSON.stringify(data21, (key, value) => {
  console.log(key, value);
  // 	{
  //   id: 1043,
  //   login: 'user3431',
  //   password: '123451we@',
  //   role: 'Admin',
  //   go: [Function: go]
  // }
  return "123";
});
console.log(jsonData21); //"123"

console.log("===1.4=====================================");
const data22 = {
  id: 1043,
  login: "user3431",
  password: "123451we@",
  role: "Admin",
  go() {
    console.log("go");
  },
};
const jsonData22 = JSON.stringify(data22, (key, value) => {
  console.log(key); //не прийшов

  return "123";
});
console.log(jsonData22);

console.log("===1.5=====================================");
const data23 = {
  id: 1043,
  login: "user3431",
  password: "123451we@",
  role: "Admin",
  go() {
    console.log("go");
  },
};
const jsonData23 = JSON.stringify(data23, (key, value) => {
  console.log(key, value);
  // 	 {
  //   id: 1043,
  //   login: 'user3431',
  //   password: '123451we@',
  //   role: 'Admin',
  //   go: [Function: go]
  // }
  // id 1043
  // login user3431
  // password 123451we@
  // role Admin
  // go [Function: go]

  return value;
});
console.log(jsonData23); //{"id":1043,"login":"user3431","password":"123451we@","role":"Admin"}

console.log("===1.6=====================================");
const data24 = {
  id: 1043,
  login: "user3431",
  password: "123451we@",
  role: "Admin",
  go() {
    console.log("go");
  },
  test1: {
    test2: 123,
  },
};
const jsonData24 = JSON.stringify(data24, (key, value) => {
  console.log(key, value);
  //    {
  //   id: 1043,
  //   login: 'user3431',
  //   password: '123451we@',
  //   role: 'Admin',
  //   go: [Function: go],
  //   test1: { test2: 123 }
  // }
  // id 1043
  // login user3431
  // password 123451we@
  // role Admin
  // go [Function: go]
  // test1 { test2: 123 }
  // test2 123

  return value;
});
console.log(jsonData24); //{"id":1043,"login":"user3431","password":"123451we@","role":"Admin","test1":{"test2":123}}

console.log("===1.7=====================================");
const roleField = "roleName";

const data27 = {
  id: 1043,
  login: "user3431",
  password: "123451we@",
  [roleField]: "Admin",
  go() {
    console.log("go");
  },
  test1: {
    test2: 123,
  },
};
const jsonData27 = JSON.stringify(data27, (key, value) => {
  if (key === roleField) {
    return null;
  }
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  if (typeof value === "number") {
    return value * 10;
  }
  return value;
});
console.log(jsonData27); // {"id":10430,"login":"USER3431","password":"123451WE@","roleName":null,"test1":{"test2":1230}}

console.log("===1.8=====================================");
const roleField8 = "roleName";

const data28 = {
  id: 1043,
  login: "user3431",
  password: "123451we@",
  [roleField8]: "Admin",
  go() {
    console.log("go");
  },
  test1: {
    test2: 123,
  },
};
const jsonData28 = JSON.stringify(
  data28,
  (key, value) => {
    if (key === roleField) {
      return null;
    }
    if (typeof value === "string") {
      return value.toUpperCase();
    }
    if (typeof value === "number") {
      return value * 10;
    }
    return value;
  },
  8 //відповідає за пробіли
);
console.log(jsonData28);
// 1 пробіл:
// {
//  "id": 10430,
//  "login": "USER3431",
//  "password": "123451WE@",
//  "roleName": null,
//  "test1": {
//   "test2": 1230
//  }
// }

// 4 пробіла:
// {
//     "id": 10430,
//     "login": "USER3431",
//     "password": "123451WE@",
//     "roleName": null,
//     "test1": {
//         "test2": 1230
//     }
// }

// 8 пробілів:
// {
//         "id": 10430,
//         "login": "USER3431",
//         "password": "123451WE@",
//         "roleName": null,
//         "test1": {
//                 "test2": 1230
//         }
// }

console.log("===1.9=====================================");
const parseData = JSON.parse(jsonData28);
console.log(parseData);
// {
//   id: 10430,
//   login: 'USER3431',
//   password: '123451WE@',
//   roleName: null,
//   test1: { test2: 1230 }
// }

console.log("===1.10=====================================");
const parseData2 = JSON.parse(jsonData28, (key, value) => {
  if (key === roleField) {
    return "Admin";
  }
  if (typeof value === "string") {
    return value.toLowerCase();
  }
  if (typeof value === "number") {
    return value / 10;
  }
  return value;
});
console.log(parseData2);
// {
//   id: 1043,
//   login: 'user3431',
//   password: '123451we@',
//   roleName: 'Admin',
//   test1: { test2: 123 }
// }

console.log("===2.1=====================================");
const url = new URL("/path", "https://www.example.com");
console.log(url);
// URL {
//   href: 'https://www.example.com/path',
//   origin: 'https://www.example.com',
//   protocol: 'https:',
//   username: '',
//   password: '',
//   host: 'www.example.com',
//   hostname: 'www.example.com',
//   port: '',
//   pathname: '/path',
//   search: '',
//   searchParams: URLSearchParams {},
//   hash: ''
// }

console.log("===2.2=====================================");
const url2 = new URL("https://www.example.com/path");
console.log(url2);
// URL {
//   href: 'https://www.example.com/path',
//   origin: 'https://www.example.com',
//   protocol: 'https:',
//   username: '',
//   password: '',
//   host: 'www.example.com',
//   hostname: 'www.example.com',
//   port: '',
//   pathname: '/path',
//   search: '',
//   searchParams: URLSearchParams {},
//   hash: ''
// }

console.log("===2.3=====================================");
// const url2 = new URL("https://www.example.com/path");
console.log(url2.href); // https://www.example.com/path

console.log("===2.4=====================================");
// const url2 = new URL("https://www.example.com/path");
console.log(url2.protocol); // https:

console.log("===2.5=====================================");
const url3 = new URL("mailto:user@gmail.com");
console.log(url3.protocol); // mailto:

console.log("===2.6=====================================");
const url4 = new URL("https://www.example.com/catalog/info-1");
console.log(url4.pathname); // catalog/info-1

console.log("===2.7.1=====================================");
console.log(url4.origin); // https://www.example.com

console.log("===2.7.2=====================================");
const url5 = new URL("https://www.example.com/catalog/info-1").origin;
console.log(url5); // https://www.example.com

console.log("===2.8=====================================");
const url8 = new URL("https://www.example.com:4000/catalog/info-1").host;
console.log(url8); // www.example.com:4000

console.log("===2.9=====================================");
const url9 = new URL("https://www.example.com:4000/catalog/info-1").hostname;
console.log(url9); // www.example.com

console.log("===2.10=====================================");
const url10 = new URL("https://www.example.com:4000/catalog/info-1#how-to-do")
  .hash;
console.log(url10); // #how-to-do

console.log("===2.11=====================================");
const url11 = new URL("https://www.example.com:4000/catalog/info-1#how-to-do")
  .hash;
console.log(url11.slice(1)); // how-to-do

console.log("===2.12=====================================");
const url12 = new URL(
  "https://admin:4510qwerty@www.example.com:4000/catalog/info-1#how-to-do"
).password;
console.log(url12); // 4510qwerty

console.log("===2.13=====================================");
const url13 = new URL(
  "https://admin:4510qwerty@www.example.com:4000/catalog/info-1#how-to-do"
).port;
console.log(url13); // 4000

console.log("===2.14=====================================");
const url14 = new URL(
  "https://admin:4510qwerty@www.example.com:4000/catalog/info-1#how-to-do"
).username;
console.log(url14); // admin

console.log("===2.15=====================================");
const url15 = new URL(
  "https://https://www.google.com/search?q=hello&oq=hello&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyBwgBEC4YgAQyBwgCEC4YgAQyBwgDEC4YgAQyBwgEEC4YgAQyBwgFEC4YgAQyBggGEEUYPDIGCAcQRRg80gEIMTczMGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8"
).search;
console.log(url15);
// ?q=hello&oq=hello&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyBwgBEC4YgAQyBwgCEC4YgAQyBwgDEC4YgAQyBwgEEC4YgAQyBwgFEC4YgAQyBggGEEUYPDIGCAcQRRg80gEIMTczMGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8

console.log("===2.16=====================================");
const url16 = new URL(
  "https://https://www.google.com/search?q=hello&oq=hello&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyBwgBEC4YgAQyBwgCEC4YgAQyBwgDEC4YgAQyBwgEEC4YgAQyBwgFEC4YgAQyBggGEEUYPDIGCAcQRRg80gEIMTczMGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8"
).searchParams;
console.log(url16);
// URLSearchParams {
//   'q' => 'hello',
//   'oq' => 'hello',
//   'gs_lcrp' => 'EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyBwgBEC4YgAQyBwgCEC4YgAQyBwgDEC4YgAQyBwgEEC4YgAQyBwgFEC4YgAQyBggGEEUYPDIGCAcQRRg80gEIMTczMGowajeoAgCwAgA',
//   'sourceid' => 'chrome',
//   'ie' => 'UTF-8' }

console.log("===2.17=====================================");
console.log(url16.has("q")); // true

console.log("===2.18=====================================");
console.log(url16.append("name", "google")); // undefined
console.log(url16);
// URLSearchParams {
//   'q' => 'hello',
//   'oq' => 'hello',
//   'gs_lcrp' => 'EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyBwgBEC4YgAQyBwgCEC4YgAQyBwgDEC4YgAQyBwgEEC4YgAQyBwgFEC4YgAQyBggGEEUYPDIGCAcQRRg80gEIMTczMGowajeoAgCwAgA',
//   'sourceid' => 'chrome',
//   'ie' => 'UTF-8',
//   'name' => 'google' }

console.log("===2.19=====================================");
console.log(url16.get("name")); // google

console.log("===2.20=====================================");
console.log(url16.getAll("q")); // [ 'hello' ]

console.log("===2.21=====================================");
url16.sort();
console.log(url16);
// URLSearchParams {
//   'gs_lcrp' => 'EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyBwgBEC4YgAQyBwgCEC4YgAQyBwgDEC4YgAQyBwgEEC4YgAQyBwgFEC4YgAQyBggGEEUYPDIGCAcQRRg80gEIMTczMGowajeoAgCwAgA',
//   'ie' => 'UTF-8',
//   'name' => 'google',
//   'oq' => 'hello',
//   'q' => 'hello',
//   'sourceid' => 'chrome' }

console.log("===3=====================================");
const mainUrl = new URL(
  "https://www.google.com/search?q=hello&oq=hello&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyBwgBEC4YgAQyBwgCEC4YgAQyBwgDEC4YgAQyBwgEEC4YgAQyBwgFEC4YgAQyBggGEEUYPDIGCAcQRRg80gEIMTczMGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8"
);
const url30 = mainUrl.searchParams;
console.log(mainUrl);
// URL {
//   href: 'https://www.google.com/search?q=hello&oq=hello&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyBwgBEC4YgAQyBwgCEC4YgAQyBwgDEC4YgAQyBwgEEC4YgAQyBwgFEC4YgAQyBggGEEUYPDIGCAcQRRg80gEIMTczMGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8',
//   origin: 'https://www.google.com',
//   protocol: 'https:',
//   username: '',
//   password: '',
//   host: 'www.google.com',
//   hostname: 'www.google.com',
//   port: '',
//   pathname: '/search',
//   search: '?q=hello&oq=hello&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyBwgBEC4YgAQyBwgCEC4YgAQyBwgDEC4YgAQyBwgEEC4YgAQyBwgFEC4YgAQyBggGEEUYPDIGCAcQRRg80gEIMTczMGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8',
//   searchParams: URLSearchParams {
//     'q' => 'hello',
//     'oq' => 'hello',
//     'gs_lcrp' => 'EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyBwgBEC4YgAQyBwgCEC4YgAQyBwgDEC4YgAQyBwgEEC4YgAQyBwgFEC4YgAQyBggGEEUYPDIGCAcQRRg80gEIMTczMGowajeoAgCwAgA',
//     'sourceid' => 'chrome',
//     'ie' => 'UTF-8' },
//   hash: ''
// }

console.log("===4=====================================");
const url41 = new URL("https://www.google.com/search");
url41.searchParams.append("q", "cat photo");
console.log(url41.href); // https://www.google.com/search?q=cat+photo=
