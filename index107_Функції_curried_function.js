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

// =======================================================
// curried function
// =======================================================
function pauseStopByTrack(trackName, trackId) {
  // let originTrackname = trackName;
  // let originTrackId = trackId;

  return () => {
    stopTrackById(trackId);
    console.log(`Tрек ${trackName} на паузі`); // Tрек IT-Hello World! на паузі √ Tрек IT-Console log! на паузі
  };
}

const pauseStop456 = pauseStopByTrack("IT-Console log", 10);

pauseStop456();
pauseStop456();
pauseStop456();
