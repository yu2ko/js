// function calcSpace(amount, unit = "px") {
//   return `${amount * 4}${unit}`;
// }

function playTrackById(trackId) {
  /// отримати файл пісні та її запустити
}

function stopTrackById(trackId) {
  /// отримати файл пісні та поставити її на паузу
}

function play(trackName, trackId) {
  console.log(`Запускаємо ${trackName}`);
  playTrackById(trackId);
}

function end(oldTrackName, newTrackName) {
  console.log(`Завершили грати ${oldTrackName}`);
  console.log(`Наступний трек ${newTrackName}`);
}

function pauseStop(currentTrackName) {
  console.log(`Tрек ${currentTrackName} на паузі`);
}

function pausePlay(currentTrackName) {
  console.log(`Tрек ${currentTrackName} на паузі`);
  reloadDataTrack();
  play();
}

function reloadDataTrack(amount) {
  if (amount <= 0) {
    console.log(`Дані оновлено вказану кількість разів`); // Дані оновлено вказану кількість разів
  } else {
    console.log(`Повторне оновлення`);
    // певний код для оновлення даних
    reloadDataTrack(amount - 1);
  }
}

reloadDataTrack(5);

// =======================================================
function pauseStopByTrack(trackName, trackId) {
  let originTrackname = trackName;
  let originTrackId = trackId;

  return function pauseStop() {
    stopTrackById(originTrackId);
    console.log(`Tрек ${originTrackname} на паузі`); // Tрек IT-Hello World! на паузі √ Tрек IT-Console log! на паузі
  };
}

const pauseStop123 = pauseStopByTrack("IT-Hello World!");
// const pauseStop123 = function pauseStop(originTracId, originTrackname) {
//   stopTrackById(originTrackId);
//   console.log(`Tрек ${originTrackname} на паузі`); // Tрек IT-Hello World! на паузі √ Tрек IT-Console log! на паузі
// }; // у змінну константу поклали функцію!

pauseStop123();

const pauseStop456 = pauseStopByTrack("IT-Console log");

pauseStop456();
// =======================================================
