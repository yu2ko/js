// function calcSpace(amount, unit = "px") {
//   return `${amount * 4}${unit}`;
// }

function playTrackById(trackId) {
  /// отримати файл пісні та її запустити
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

// =======================================================
function reloadDataTrack(amount) {
  if (amount <= 0) {
    console.log(`Дані оновлено вказану кількість разів`);
  } else {
    console.log(`Повторне оновлення`);
    // певний код для оновлення даних
    reloadDataTrack(amount - 1);
  }
}

reloadDataTrack(5);
// =======================================================
