function playTrackById(trackId) {
  /// отримати файл пісні та її запустити
}

function stopTrackById(trackId) {
  /// отримати файл пісні та поставити її на паузу
  console.log(`отримати файл пісні з ID ${trackId} i поставити на паузу`);
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
// curried function + memoization
// =======================================================
function pauseStopByTrack(trackName, trackId) {
  let isPause = null;

  return () => {
    if (isPause == true) {
      return;
    }
    stopTrackById(trackId);
    console.log(`Tрек ${trackName} на паузі`); // Tрек IT-Hello World! на паузі √ Tрек IT-Console log! на паузі
    isPause = true;
  };
}

const pauseStop456 = pauseStopByTrack("IT-Console log", 10);

pauseStop456();
pauseStop456();
pauseStop456();

// =======================================================
// curried function + memoization
// =======================================================
const memoCalcSpace = (oldAmount = null, oldUnit = null, oldResult = null) => {
  return (amount, unit = "px") => {
    if (oldAmount === amount && unit === oldUnit) {
      console.log("Memo");
      return oldResult;
    }

    oldResult = `${amount * 4}${unit}`;
    oldAmount = amount;
    oldUnit = unit;

    return oldResult;
  };
};

const calcSpace = memoCalcSpace();

console.log(calcSpace(4));
console.log(calcSpace(4));

// =======================================================
// композиція функцій
// =======================================================
const getSpaceFromDesign = (componentName) => {
  switch (componentName) {
    case "button":
      return 4;
    case "card":
      return 3;
    default:
      return 2;
  }
};

const isMobile = true;

const amount = getSpaceFromDesign("button");
const amountMobile = isMobile ? amount / 2 : amount;
const amountInPx = calcSpace(amountMobile);

// const calcSpaceFromDesign = (componentName) => {
//   return calcSpace(getSpaceFromDesign(componentName));
// };

const calcSpaceFromDesign = (componentName) => {
  const result = getSpaceFromDesign(componentName);
  return calcSpace(isMobile ? result / 2 : result);
};

console.log("//////////////////");
console.log(calcSpaceFromDesign("button"));
