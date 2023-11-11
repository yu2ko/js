function calcSpace(amount, unit = "px") {
  return `${amount * 4}${unit}`;
}

function playTrackById(trackId) {
  /// отримати файл пісні та її запустити
}
console.log(calcSpace(5));

function play(trackName, trackId) {
  console.log(`Запускаємо ${trackName}`);
  playTrackById(trackId);
}

function end(oldTrackName, newTrackName) {
  console.log(`Завершили грати ${oldTrackName}`);
  console.log(`Наступний трек ${newTrackName}`);
}

function pause(currentTrackName) {
  console.log(`Tрек ${currentTrackName} на паузі`);
}
