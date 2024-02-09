console.log("===1===============================");
function loadFile() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Дані файлу"), 2000);
  });
}

function sendFileToData(fileData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(true), 1500);
  });
}

// // 1variant
// function loadAndSendFile() {
//   return loadFile()
//     .then((data) => {
//       console.log(data);
//       return sendFileToData(data);
//     })
//     .finally(() => console.log("Файл відправлен"));
// }
// // Дані файлу
// // Файл відправлен

// // 2variant
// function loadAndSendFile() {
//   return loadFile()
//     .then((data) => sendFileToData(data))
//     .finally(() => console.log("Файл відправлен"));
// }
// // Файл відправлен

// // 3variant
// const loadAndSendFile = () => {
//   loadFile()
//     .then((data) => sendFileToData(data))
//     .finally(() => console.log("Файл відправлен"));
// };
// // Файл відправлен

// 4variant
// const loadAndSendFile = () =>
//   loadFile()
//     .then((data) => sendFileToData(data))
//     .finally(() => console.log("Файл відправлен"));
// // Файл відправлен

// // 5variant
// const loadAndSendFile = async () => {
//   try {
//     const data = await loadFile();
//     await sendFileToData(data);
//   } catch (e) {
//     console.log(e);
//   } finally {
//     console.log("Файл відправлен");
//   }
// };

// //Порівняння з нижче наведеним
// const loadAndSendFile = () =>
//   loadFile()
//     .then((data) => sendFileToData(data))
//     .finally(() => console.log("Файл відправлен"));

// //Порівняння з вище наведеним
const loadAndSendFile = async () => {
  const data = await loadFile();
  await sendFileToData(data);
  console.log("end send file");
};

// loadAndSendFile();
// Файл відправлен

loadAndSendFile().then(() => {
  console.log("End");
});
// end send file
// End
