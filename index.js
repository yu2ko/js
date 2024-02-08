console.log("===1====================================");
// console.log("Test");
// console.log(new Date().getTime());

console.log("===2====================================");
// const request = new Request("https://jsonplaceholder.typicode.com/todos/1", {
//   method: "DELETE",
// });

// request.method = "POST";
// console.log(request.method);
// fetch(request)

// fetch("https://jsonplaceholder.typicode.com/todos/1", {
//   method: "POST",
// });

// const data = {
//   id: 1,
//   name: "User",
//   age: 50,
// };

// fetch("https://jsonplaceholder.typicode.com/todos/1", {
//   method: "POST",
//   body: JSON.stringify(data),

//   headers: {
//     "Content-Type": "application/json",
//     Authorization: "Beareer your_token",
//   },
// }).then((res) => {
//   console.log(res);
// });

console.log("===3====================================");
// const data3 = {
//   id: 1,
//   name: "User",
//   age: 50,
// };

// async function getData3() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
//     method: "POST",
//     body: JSON.stringify(data3),

//     headers: {
//       "Content-Type": "application/json",
//       Authorization: "Beareer your_token",
//     },
//   });
//   console.log(res);
// }
// getData3();

console.log("===4====================================");
// const data4 = {
//   id: 1,
//   name: "User",
//   age: 50,
// };

// async function getData4() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
//     method: "GET",
//     // body: JSON.stringify(data4),

//     headers: {
//       "Content-Type": "application/json",
//       Authorization: "Beareer your_token",
//     },
//   });
//   console.log(res);
// }
// getData4();

console.log("===5====================================");
// async function getData4() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
//     method: "GET",
//     // body: JSON.stringify(data4),

//     headers: {
//       "Content-Type": "application/json",
//       Authorization: "Beareer your_token",
//     },
//   });

//   const data4 = await res.json();

//   console.log(data4);
// }
// getData4();

console.log("===6====================================");
// async function getData4() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
//     method: "GET",
//     // body: JSON.stringify(data4),

//     headers: {
//       "Content-Type": "application/json",
//       Authorization: "Beareer your_token",
//     },
//   });

//   const data4 = await res.text();

//   console.log(JSON.parse(data4));
// }
// getData4();

console.log("===7====================================");
// async function getData4() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
//     method: "GET",
//     // body: JSON.stringify(data4),

//     headers: {
//       "Content-Type": "application/json",
//       Authorization: "Beareer your_token",
//     },
//   });

//   const data4 = await res.json();

//   console.log(data4);
// }
// getData4();

console.log("===8====================================");
// async function getData4() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
//     method: "GET",
//     // body: JSON.stringify(data4),

//     headers: {
//       "Content-Type": "application/json",
//       Authorization: "Beareer your_token",
//     },
//   }).then((res) => res.json());

//   // del // const data4 = await res.json();

//   console.log(res);
// }
// getData4();

console.log("===9====================================");
// async function getData4() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
//     method: "GET",
//     // body: JSON.stringify(data4),

//     headers: {
//       "Content-Type": "application/json",
//       Authorization: "Beareer your_token",
//     },
//   });

//   console.log(res.bodyUsed);

//   const data4 = await res.json();

//   console.log(res.bodyUsed);

//   console.log(data4);
// }
// getData4();

console.log("===10====================================");
async function getData4() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
    method: "GET",
    // body: JSON.stringify(data4),

    headers: {
      "Content-Type": "application/json",
      Authorization: "Beareer your_token",
    },
  });

  console.log(res.bodyUsed);

  const data4 = await res.json();

  console.log(res.bodyUsed);

  console.log(data4);

  console.log(res);

  console.log(res.status);

  console.log(res.statusText);

  console.log(res.ok);
}
getData4();
