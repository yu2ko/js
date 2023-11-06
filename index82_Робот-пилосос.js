const CUSTOM_NAME = "My robot";
const MODE = 0; //0-off, 2-прибирання
const ROOM = "Вітальня";

const COMMAND = "change name";
// const COMMAND2 = "work";

if (COMMAND === "change name" && MODE !== 0) {
  const name = CUSTOM_NAME || "Robot v134t1";
  console.log(`Start ${name}`); //Start My robot
}

if (MODE === 0) {
  console.log(`Robot is offline`);
}
if (COMMAND === "work") {
  const room = ROOM;
  const mode = MODE;

  console.log(`Mode: ${mode}; Прибираю кімнату: ${room}`); //Mode: 2; Прибираю кімнату: Вітальня
}
