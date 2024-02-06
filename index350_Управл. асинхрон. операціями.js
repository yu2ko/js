console.log("===1===============================");
// function loadFile(filename, callback) {
//   try {
//     console.log(`Завантаження файлу ${filename}...`);
//     setTimeout(() => callback(null, `Вміст файлу ${filename}`), 2000);
//   } catch (e) {
//     callback(e);
//   }
// }

// loadFile("example.txt", (error, content) => {
//   if (error) {
//     console.error("Помилка завантаження файлу:", error);
//   } else {
//     console.log("Файл завантажено успішно!");
//     console.log("Вміст файлу:", content);
//   }
// });

// ****************************************
// // Завантаження файлу example.txt...
// // Файл завантажено успішно!
// // Вміст файлу: Вміст файлу example.txt

console.log("===2===============================");
// function loadFile(filename, callback) {
//   try {
//     console.log(`Завантаження файлу ${filename}...`);
//     setTimeout(() => callback(null, `Вміст файлу ${filename}`), 2000);
//   } catch (e) {
//     callback(e);
//   }
// }

// //=====================================================

// function convertFile(content, callback) {
//   setTimeout(function () {
//     //Конвертація файлу...
//     callback(null, `Конвертований вміст: ${content.toUpperСase()}`);
//   }, 1000);
// }

// function saveFile(convertedContent, callback) {
//   setTimeout(function () {
//     //Збереження файлу...
//     callback();
//   }, 1500);
// }

// function sendFileToClient(callback) {
//   setTimeout(function () {
//     //Відправка даних в інтерфейс...
//     callback();
//   }, 500);
// }

// //=====================================================
// loadFile("example.txt", (error, content) => {
//   if (error) {
//     console.log("Помилка завантаження файлу:", error);
//   } else {
//     console.log("Файл завантажено успішно!");
//     console.log("Вміст файлу:", content);

//     convertFile(content, (error, convertedContent) => {
//       if (error) {
//         console.error("Помилка конвертації файлу:", error);
//       } else {
//         console.log("Файл успішно сконвертовано!");
//         console.log("Конвертований вміст:", convertedContent);

//         saveFile(convertedContent, (error) => {
//           if (error) {
//             console.log("Помилка збереження файлу:", error);
//           } else {
//             console.log("Файл успішно збережено!");

//             sendFileToClient((error) => {
//               if (error) {
//                 console.error("Помилка відправлення файлу клієнту:", error);
//               } else {
//                 console.log("Файл успішно відправлено клієнту!");
//               }
//             });
//           }
//         });
//       }
//     });
//   }
// });

// *********************************
// видає помилку

console.log("===3===============================");
// const loadFile = new Promise((resolve, reject) => {
//   console.log(`Завантаження файлу ${filename}...`);
//   setTimeout(() => resolve(`Вміст файлу ${filename}`), 2000);
//   reject(new Error());
//   // reject("Test")
// });

console.log("===4===============================");
// const loadFile = (filename) =>
//   new Promise((resolve) => {
//     console.log(`Завантаження файлу ${filename}...`);
//     setTimeout(() => resolve(`Вміст файлу ${filename}`), 2000);
//   });

// const result = loadFile("image.png");
// console.log(result);
// setTimeout(() => console.log(result), 3000);

// ***************************************
// // Завантаження файлу image.png...
// // Promise { <pending> }
// // Promise { 'Вміст файлу image.png' }

console.log("===5===============================");
// const loadFile5 = (filename) =>
//   new Promise((resolve, reject) => {
//     console.log(`Завантаження файлу ${filename}...`);

//     reject("Error");

//     setTimeout(() => resolve(`Вміст файлу ${filename}`), 2000);
//   });

// const result5 = loadFile5("image.png");
// console.log(result5);
// setTimeout(() => console.log(result5), 3000);

// *********************************************************
// // Завантаження файлу image.png...
// // Promise { <rejected> 'Error' }
// // node:internal/process/promises:289
// //             triggerUncaughtException(err, true /* fromPromise */);
// //             ^

// // [UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "Error".] {
// //   code: 'ERR_UNHANDLED_REJECTION'
// // }

// // Node.js v20.3.1

console.log("===6===============================");
// const loadFile = (filename) =>
//   new Promise((resolve, reject) => {
//     console.log(`Завантаження файлу ${filename}...`);

//     // reject("Error");

//     setTimeout(() => resolve(`Вміст файлу ${filename}`), 2000);
//   });

// const result = loadFile("image.png");

// result.then(
//   (data) => {
//     console.log(data);
//   },
//   (error) => {
//     console.log(error);
//   }
// );

//************************************
// // Завантаження файлу image.png...
// // Вміст файлу image.png

console.log("===7===============================");
// const loadFile = (filename) =>
//   new Promise((resolve, reject) => {
//     console.log(`Завантаження файлу ${filename}...`);

//     reject("Error");

//     setTimeout(() => resolve(`Вміст файлу ${filename}`), 2000);
//   });

// const result = loadFile("image.png");

// result.then(
//   (data) => {
//     console.log(data);
//   },
//   (error) => {
//     console.log(error);
//   }
// );

// *****************************************
// // Завантаження файлу image.png...
// // Error

console.log("===8===============================");
// const loadFile = (filename) =>
//   new Promise((resolve, reject) => {
//     console.log(`Завантаження файлу ${filename}...`);

//     setTimeout(() => resolve(`Вміст файлу ${filename}`), 2000);
//   });

// const result = loadFile("image.png");

// result
//   .then((data) => {
//     return data.toUpperCase();
//   })
//   .then((data) => {
//     console.log(data);
//   });

//**************************************
// Завантаження файлу image.png...
// ВМІСТ ФАЙЛУ IMAGE.PNG

console.log("===9===============================");
// const loadFile = (filename) =>
//   new Promise((resolve, reject) => {
//     console.log(`Завантаження файлу ${filename}...`);

//     setTimeout(() => resolve(`Вміст файлу ${filename}`), 2000);
//   });

// loadFile("image.png")
//   .then((data) => {
//     return data.toUpperCase();
//   })
//   .then((data) => {
//     console.log(data);
//   });

//****************************************
// // Завантаження файлу image.png...
// // ВМІСТ ФАЙЛУ IMAGE.PNG

console.log("===10===============================");
// const loadFile = (filename) =>
//   new Promise((resolve, reject) => {
//     console.log(`Завантаження файлу ${filename}...`);

//     setTimeout(() => resolve(`Вміст файлу ${filename}`), 2000);
//   });

// loadFile("image.png")
//   .then((data) => {
//     return data.toUpperCase();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log("Error", error);
//   })
//   .finally(() => {
//     console.log("End");
//   });

//****************************************
// // Завантаження файлу image.png...
// // ВМІСТ ФАЙЛУ IMAGE.PNG
// // End

console.log("===11===============================");
// const loadFile = (filename) =>
//   new Promise((resolve, reject) => {
//     console.log(`Завантаження файлу ${filename}...`);

//     reject("Error");

//     setTimeout(() => resolve(`Вміст файлу ${filename}`), 2000);
//   });

// loadFile("image.png")
//   .then((data) => {
//     return data.toUpperCase();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log("Error", error);
//   })
//   .finally(() => {
//     console.log("End");
//   });

//******************************************
// // 	Завантаження файлу image.png...
// // Error Error
// // End

console.log("===12===============================");
// const loadFile = (filename) =>
//   new Promise((resolve, reject) => {
//     console.log(`Завантаження файлу ${filename}...`);

//     setTimeout(() => resolve(`Вміст файлу ${filename}`), 2000);
//   });

// //====================================

// loadFile("image.png")
//   .then((data) => {
//     return data.toUpperCase();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log("Error", error);
//   })
//   .finally(() => {
//     console.log("End");
//   });

// const result = loadFile("photo.jpg");

// result.then((data) => {
//   console.log(data, 1);
//   return null;
// });

// result.then((data) => {
//   console.log(data, 2);
//   return null;
// });

// result.then((data) => {
//   console.log(data, 3);
//   return null;
// });

//*************************************
// // Завантаження файлу image.png...
// // Завантаження файлу photo.jpg...
// // ВМІСТ ФАЙЛУ IMAGE.PNG
// // End
// // Вміст файлу photo.jpg 1
// // Вміст файлу photo.jpg 2
// // Вміст файлу photo.jpg 3

console.log("===13===============================");
// function loadFile(filename) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Вміст файлу ${filename}`);
//     }, 2000);
//   });
// }

// function convertFile(content) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Конвертований вміст: ${content.toUpperCase()}`);
//     }, 1000);
//   });
// }

// function saveFile(convertedContent) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//     }, 1500);
//   });
// }

// function sendFileToClient(convertedContent) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//     }, 500);
//   });
// }

// loadFile("example.txt")
//   .then((content) => {
//     console.log("Файл завантажено успішно!");
//     console.log("Вміст файлу:", content);
//     return convertFile(content);
//   })
//   .then((convertedContent) => {
//     console.log("Файл успішно сконвертовано!");
//     console.log("Конвертований вміст:", convertedContent);
//     return saveFile(convertedContent);
//   })
//   .then(() => {
//     console.log("Файл успішно збережено!");
//     return sendFileToClient();
//   })
//   .catch((error) => {
//     console.log("Сталася помилка:", error);
//   })
//   .finally(() => {
//     console.log("Файл успішно відправлено клієнту!");
//   });

//***********************************************
// // Файл завантажено успішно!
// // Вміст файлу: Вміст файлу example.txt
// // Файл успішно сконвертовано!
// // Конвертований вміст: Конвертований вміст: ВМІСТ ФАЙЛУ EXAMPLE.TXT
// // Файл успішно збережено!
// // Файл успішно відправлено клієнту!

console.log("===14===============================");
// function loadFile(filename) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Вміст файлу ${filename}`);
//     }, 2000);
//   });
// }

// function convertFile(content) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Конвертований вміст: ${content.toUpperCase()}`);
//     }, 1000);
//   });
// }

// function saveFile(convertedContent) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//     }, 1500);
//   });
// }

// function sendFileToClient(convertedContent) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//     }, 500);
//   });
// }

// function getInfoFromFile(file) {
//   console.log(file, 111111);

//   return Promise.resolve(file);
// }

// loadFile("example.txt")
//   .then((content) => {
//     console.log("Файл завантажено успішно!");
//     console.log("Вміст файлу:", content);
//     return convertFile(content);
//   })
//   .then((data) => {
//     return getInfoFromFile(data);
//   })
//   .then((convertedContent) => {
//     console.log("Файл успішно сконвертовано!");
//     console.log("Конвертований вміст:", convertedContent);
//     return saveFile(convertedContent);
//   })
//   .then(() => {
//     console.log("Файл успішно збережено!");
//     return sendFileToClient();
//   })
//   .catch((error) => {
//     console.log("Сталася помилка:", error);
//   })
//   .finally(() => {
//     console.log("Файл успішно відправлено клієнту!");
//   });

//***********************************************************
// // Файл завантажено успішно!
// // Вміст файлу: Вміст файлу example.txt
// // Конвертований вміст: ВМІСТ ФАЙЛУ EXAMPLE.TXT 111111
// // Файл успішно сконвертовано!
// // Конвертований вміст: Конвертований вміст: ВМІСТ ФАЙЛУ EXAMPLE.TXT
// // Файл успішно збережено!
// // Файл успішно відправлено клієнту!

console.log("===15===============================");
// function loadFile(filename) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Вміст файлу ${filename}`);
//     }, 2000);
//   });
// }

// function convertFile(content) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Конвертований вміст: ${content.toUpperCase()}`);
//     }, 1000);
//   });
// }

// function saveFile(convertedContent) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//     }, 1500);
//   });
// }

// function sendFileToClient(convertedContent) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//     }, 500);
//   });
// }

// function getInfoFromFile(file) {
//   console.log(file, 111111);

//   return file;
// }

// loadFile("example.txt")
//   .then((content) => {
//     console.log("Файл завантажено успішно!");
//     console.log("Вміст файлу:", content);
//     return convertFile(content);
//   })
//   .then((data) => {
//     return getInfoFromFile(data);
//   })
//   .then((convertedContent) => {
//     console.log("Файл успішно сконвертовано!");
//     console.log("Конвертований вміст:", convertedContent);
//     return saveFile(convertedContent);
//   })
//   .then(() => {
//     console.log("Файл успішно збережено!");
//     return sendFileToClient();
//   })
//   .catch((error) => {
//     console.log("Сталася помилка:", error);
//   })
//   .finally(() => {
//     console.log("Файл успішно відправлено клієнту!");
//   });

//*******************************************************
// // Файл завантажено успішно!
// // Вміст файлу: Вміст файлу example.txt
// // Конвертований вміст: ВМІСТ ФАЙЛУ EXAMPLE.TXT 111111
// // Файл успішно сконвертовано!
// // Конвертований вміст: Конвертований вміст: ВМІСТ ФАЙЛУ EXAMPLE.TXT
// // Файл успішно збережено!
// // Файл успішно відправлено клієнту!

console.log("===16===============================");
// function loadFile(filename) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Вміст файлу ${filename}`);
//     }, 2000);
//   });
// }

// function convertFile(content) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Конвертований вміст: ${content.toUpperCase()}`);
//     }, 1000);
//   });
// }

// function saveFile(convertedContent) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//     }, 1500);
//   });
// }

// function sendFileToClient(convertedContent) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//     }, 500);
//   });
// }

// function getInfoFromFile(file) {
//   console.log(file, 111111);

//   return Promise.resolve(file);
// }

// getInfoFromFile("example.txt")
//   .then((content) => {
//     console.log("Файл завантажено успішно!");
//     console.log("Вміст файлу:", content);
//     return convertFile(content);
//   })
//   .then((data) => {
//     return getInfoFromFile(data);
//   })
//   .then((convertedContent) => {
//     console.log("Файл успішно сконвертовано!");
//     console.log("Конвертований вміст:", convertedContent);
//     return saveFile(convertedContent);
//   })
//   .then(() => {
//     console.log("Файл успішно збережено!");
//     return sendFileToClient();
//   })
//   .catch((error) => {
//     console.log("Сталася помилка:", error);
//   })
//   .finally(() => {
//     console.log("Файл успішно відправлено клієнту!");
//   });

//********************************************************
// // example.txt 111111
// // Файл завантажено успішно!
// // Вміст файлу: example.txt
// // Конвертований вміст: EXAMPLE.TXT 111111
// // Файл успішно сконвертовано!
// // Конвертований вміст: Конвертований вміст: EXAMPLE.TXT
// // Файл успішно збережено!
// // Файл успішно відправлено клієнту!

console.log("===17===============================");
// function loadFile(filename) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Вміст файлу ${filename}`);
//     }, 2000);
//   });
// }

// function convertFile(content) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Конвертований вміст: ${content.toUpperCase()}`);
//     }, 1000);
//   });
// }

// function saveFile(convertedContent) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//     }, 1500);
//   });
// }

// function sendFileToClient(convertedContent) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//     }, 500);
//   });
// }

// function getInfoFromFile(file) {
//   console.log(file, 111111);

//   return Promise.resolve(file);
// }

// Promise.all([
//   loadFile("example.txt"),
//   getInfoFromFile("example.txt"),
//   saveFile(),
//   sendFileToClient(),
//   convertFile("file"),
// ]).then((data) => {
//   console.log(data);
// });

//****************************************
// // example.txt 111111
// // [
// //   'Вміст файлу example.txt',
// //   'example.txt',
// //   undefined,
// //   undefined,
// //   'Конвертований вміст: FILE'
// // ]

console.log("===18===============================");
// function loadFile(filename) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("2222222");
//       resolve(`Вміст файлу ${filename}`);
//     }, 2000);
//   });
// }

// function convertFile(content) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Конвертований вміст: ${content.toUpperCase()}`);
//     }, 1000);
//   });
// }

// function saveFile(convertedContent) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//     }, 1500);
//   });
// }

// function sendFileToClient(convertedContent) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("Error");
//     }, 500);
//   });
// }

// function getInfoFromFile(file) {
//   console.log(file, 111111);

//   return Promise.resolve(file);
// }

// Promise.all([
//   loadFile("example.txt"),
//   getInfoFromFile("example.txt"),
//   saveFile(),
//   sendFileToClient(),
//   convertFile("file"),
// ])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// // example.txt 111111
// // [
// //   'Вміст файлу example.txt',
// //   'example.txt',
// //   undefined,
// //   undefined,
// //   'Конвертований вміст: FILE'
// // ]

// // ******************************************
// // example.txt 111111
// // Error
// // 2222222

console.log("===19===============================");
// function loadFile(filename) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("2222222");
//       resolve(`Вміст файлу ${filename}`);
//     }, 2000);
//   });
// }

// function convertFile(content) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Конвертований вміст: ${content.toUpperCase()}`);
//     }, 1000);
//   });
// }

// function saveFile(convertedContent) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//     }, 1500);
//   });
// }

// function sendFileToClient(convertedContent) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // reject("Error");
//     }, 500);
//   });
// }

// function getInfoFromFile(file) {
//   console.log(file, 111111);

//   return Promise.resolve(file);
// }

// Promise.all([
//   loadFile("example.txt"),
//   getInfoFromFile("example.txt"),
//   saveFile(),
//   sendFileToClient(),
//   convertFile("file"),
// ])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// // 	*********************
// // 	example.txt 111111
// //  2222222

console.log("===20===============================");
// function loadFile(filename) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("2222222");
//       resolve(`Вміст файлу ${filename}`);
//     }, 2000);
//   });
// }

// function convertFile(content) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Конвертований вміст: ${content.toUpperCase()}`);
//     }, 1000);
//   });
// }

// function saveFile(convertedContent) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//     }, 1500);
//   });
// }

// function sendFileToClient(convertedContent) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Error");
//     }, 500);
//   });
// }

// function getInfoFromFile(file) {
//   console.log(file, 111111);

//   return Promise.resolve(file);
// }

// const test = Promise.all([
//   loadFile("example.txt"),
//   getInfoFromFile("example.txt"),
//   saveFile(),
//   sendFileToClient(),
//   convertFile("file"),
// ])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// console.log(test);

// // **********************************
// // example.txt 111111
// // Promise { <pending> }
// // 2222222
// // [
// //   'Вміст файлу example.txt',
// //   'example.txt',
// //   undefined,
// //   'Error',
// //   'Конвертований вміст: FILE'
// // ]

console.log("===21===============================");
// function loadFile(filename) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("2222222");
//       resolve(`Вміст файлу ${filename}`);
//     }, 2000);
//   });
// }

// function convertFile(content) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Конвертований вміст: ${content.toUpperCase()}`);
//     }, 1000);
//   });
// }

// function saveFile(convertedContent) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // resolve();
//     }, 1500);
//   });
// }

// function sendFileToClient(convertedContent) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Error");
//     }, 500);
//   });
// }

// function getInfoFromFile(file) {
//   console.log(file, 111111);

//   return Promise.resolve(file);
// }

// const test = Promise.all([
//   loadFile("example.txt"),
//   getInfoFromFile("example.txt"),
//   saveFile(),
//   sendFileToClient(),
//   convertFile("file"),
// ])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// console.log(test);

// // *******************************
// // example.txt 111111
// // Promise { <pending> }
// // 2222222

console.log("===22===============================");
// function loadFile(filename) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("2222222");
//       resolve(`Вміст файлу ${filename}`);
//     }, 2000);
//   });
// }

// function convertFile(content) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Конвертований вміст: ${content.toUpperCase()}`);
//     }, 1000);
//   });
// }

// function saveFile(convertedContent) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("Error test");
//     }, 1500);
//   });
// }

// function sendFileToClient(convertedContent) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//     }, 500);
//   });
// }

// function getInfoFromFile(file) {
//   console.log(file, 111111);

//   return Promise.resolve(file);
// }

// const test = Promise.allSettled([
//   loadFile("example.txt"),
//   getInfoFromFile("example.txt"),
//   saveFile(),
//   sendFileToClient(),
//   convertFile("file"),
// ])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// console.log(test);

// // ******************************
// // example.txt 111111
// // Promise { <pending> }
// // 2222222
// // [
// //   { status: 'fulfilled', value: 'Вміст файлу example.txt' },
// //   { status: 'fulfilled', value: 'example.txt' },
// //   { status: 'rejected', reason: 'Error test' },
// //   { status: 'fulfilled', value: undefined },
// //   { status: 'fulfilled', value: 'Конвертований вміст: FILE' }
// // ]

console.log("===23===============================");
// function loadFile(filename) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("2222222");
//       resolve(`Вміст файлу ${filename}`);
//     }, 2000);
//   });
// }

// function convertFile(content) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Конвертований вміст: ${content.toUpperCase()}`);
//     }, 1000);
//   });
// }

// function saveFile(convertedContent) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("Error test");
//     }, 1500);
//   });
// }

// function sendFileToClient(convertedContent) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("Error test 2");
//     }, 500);
//   });
// }

// function getInfoFromFile(file) {
//   console.log(file, 111111);

//   return Promise.resolve(file);
// }

// const test = Promise.all([
//   loadFile("example.txt"),
//   getInfoFromFile("example.txt"),
//   saveFile(),
//   sendFileToClient(),
//   convertFile("file"),
// ])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// console.log(test);

// // *********************************
// // example.txt 111111
// // Promise { <pending> }
// // Error test 2
// // 2222222

console.log("===24===============================");
// function loadFile(filename) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("2222222");
//       resolve(`Вміст файлу ${filename}`);
//     }, 2000);
//   });
// }

// function convertFile(content) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Конвертований вміст: ${content.toUpperCase()}`);
//     }, 1000);
//   });
// }

// function saveFile(convertedContent) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("saveFile");
//       reject("Error test");
//     }, 1500);
//   });
// }

// function sendFileToClient(convertedContent) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("sendFileToClient");
//       reject("Error test 2");
//     }, 500);
//   });
// }

// function getInfoFromFile(file) {
//   console.log(file, 111111);

//   return Promise.resolve(file);
// }

// const test = Promise.all([
//   loadFile("example.txt"),
//   getInfoFromFile("example.txt"),
//   saveFile(),
//   sendFileToClient(),
//   convertFile("file"),
// ])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// console.log(test);

// // ************************************
// // example.txt 111111
// // Promise { <pending> }
// // sendFileToClient
// // Error test 2
// // saveFile
// // 2222222

console.log("===25===============================");
// function loadFile(filename) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("2222222");
//       resolve(`Вміст файлу ${filename}`);
//     }, 2000);
//   });
// }

// function convertFile(content) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Конвертований вміст: ${content.toUpperCase()}`);
//     }, 1000);
//   });
// }

// function saveFile(convertedContent) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("saveFile");
//       reject("Error test");
//     }, 1500);
//   });
// }

// function sendFileToClient(convertedContent) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("sendFileToClient");
//       reject("Error test 2");
//     }, 500);
//   });
// }

// function getInfoFromFile(file) {
//   console.log(file, 111111);

//   return Promise.resolve(file);
// }

// const test = Promise.allSettled([
//   loadFile("example.txt"),
//   getInfoFromFile("example.txt"),
//   saveFile(),
//   sendFileToClient(),
//   convertFile("file"),
// ])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// console.log(test);

// // ****************************************
// // example.txt 111111
// // Promise { <pending> }
// // sendFileToClient
// // saveFile
// // 2222222
// // [
// //   { status: 'fulfilled', value: 'Вміст файлу example.txt' },
// //   { status: 'fulfilled', value: 'example.txt' },
// //   { status: 'rejected', reason: 'Error test' },
// //   { status: 'rejected', reason: 'Error test 2' },
// //   { status: 'fulfilled', value: 'Конвертований вміст: FILE' }
// // ]

console.log("===26===============================");
// function loadFile(filename) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("2222222");
//       resolve(`Вміст файлу ${filename}`);
//     }, 2000);
//   });
// }

// function convertFile(content) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Конвертований вміст: ${content.toUpperCase()}`);
//     }, 1000);
//   });
// }

// function saveFile(convertedContent) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("saveFile");
//       reject("Error test");
//     }, 1500);
//   });
// }

// function sendFileToClient(convertedContent) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("sendFileToClient");
//       reject("Error test 2");
//     }, 500);
//   });
// }

// function getInfoFromFile(file) {
//   console.log(file, 111111);

//   return Promise.resolve(file + 100);
// }

// const test = Promise.any([
//   loadFile("example.txt"),
//   getInfoFromFile("example.txt"),
//   saveFile(),
//   sendFileToClient(),
//   convertFile("file"),
// ])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// console.log(test);

// // ******************************
// // example.txt 111111
// // Promise { <pending> }
// // example.txt100
// // sendFileToClient
// // saveFile
// // 2222222

console.log("===27===============================");
// function loadFile(filename) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("2222222");
//       resolve(`Вміст файлу ${filename}`);
//     }, 2000);
//   });
// }

// function convertFile(content) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Конвертований вміст: ${content.toUpperCase()}`);
//     }, 1000);
//   });
// }

// function saveFile(convertedContent) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("saveFile");
//       reject("Error test");
//     }, 1500);
//   });
// }

// function sendFileToClient(convertedContent) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("sendFileToClient");
//       reject("Error test 2");
//     }, 500);
//   });
// }

// function getInfoFromFile(file) {
//   console.log(file, 111111);

//   return Promise.resolve(file + 100);
// }

// const test = Promise.any([
//   loadFile("example.txt"),
//   // getInfoFromFile("example.txt"),
//   saveFile(),
//   sendFileToClient(),
//   convertFile("file"),
// ])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// console.log(test);

// // **************************
// // Promise { <pending> }
// // sendFileToClient
// // Конвертований вміст: FILE
// // saveFile
// // 2222222

console.log("===28===============================");
// function loadFile(filename) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("2222222");
//       resolve(`Вміст файлу ${filename}`);
//     }, 2000);
//   });
// }

// function convertFile(content) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Конвертований вміст: ${content.toUpperCase()}`);
//     }, 1000);
//   });
// }

// function saveFile(convertedContent) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("saveFile");
//       reject("Error test");
//     }, 1500);
//   });
// }

// function sendFileToClient(convertedContent) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("sendFileToClient");
//       reject("Error test 2");
//     }, 500);
//   });
// }

// function getInfoFromFile(file) {
//   console.log(file, 111111);

//   return Promise.resolve(file + 100);
// }

// const test = Promise.race([
//   loadFile("example.txt"),
//   // getInfoFromFile("example.txt"),
//   saveFile(),
//   sendFileToClient(),
//   convertFile("file"),
// ])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// console.log(test);

// // ***************************
// // Promise { <pending> }
// // sendFileToClient
// // Error test 2
// // saveFile
// // 2222222

console.log("===29===============================");
// function loadFile(filename) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // console.log("2222222");
//       resolve(`Вміст файлу ${filename}`);
//     }, 2000);
//   });
// }

// function convertFile(content) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Конвертований вміст: ${content.toUpperCase()}`);
//     }, 1000);
//   });
// }

// function saveFile(convertedContent) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // console.log("saveFile");
//       reject("Error test");
//     }, 1500);
//   });
// }

// function sendFileToClient(convertedContent) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // console.log("sendFileToClient");
//       reject("Error test 2");
//     }, 500);
//   });
// }

// function getInfoFromFile(file) {
//   // console.log(file, 111111);

//   return Promise.resolve(file + 100);
// }

// const test = Promise.race([
//   loadFile("example.txt"),
//   // getInfoFromFile("example.txt"),
//   saveFile(),
//   sendFileToClient(),
//   convertFile("file"),
// ])
//   .then((data) => {
//     console.log("Data", data);
//   })
//   .catch((error) => {
//     console.log("Error!", error);
//   });

// // console.log(test);

// // *******************************
// // Error! Error test 2

console.log("===30===============================");
function loadFile(filename) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // console.log("2222222");
      resolve(`Вміст файлу ${filename}`);
    }, 2000);
  });
}

function convertFile(content) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Конвертований вміст: ${content.toUpperCase()}`);
    }, 1000);
  });
}

function saveFile(convertedContent) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // console.log("saveFile");
      reject("Error test");
    }, 1500);
  });
}

function sendFileToClient(convertedContent) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // console.log("sendFileToClient");
      reject("Error test 2");
      //змінено з 500 на 5000
    }, 5000);
  });
}

function getInfoFromFile(file) {
  // console.log(file, 111111);

  return Promise.resolve(file + 100);
}

const test = Promise.race([
  loadFile("example.txt"),
  // getInfoFromFile("example.txt"),
  saveFile(),
  sendFileToClient(),
  convertFile("file"),
])
  .then((data) => {
    console.log("Data", data);
  })
  .catch((error) => {
    console.log("Error!", error);
  });

// ****************************
// Data Конвертований вміст: FILE
