// const buttonType = "secondary";

// if (buttonType === "primary") {
//   console.log("primary button");
// } else if (buttonType === "secondary") {
//   console.log("secondary button");
// } else if (buttonType === "basic") {
//   console.log("basic button");
// } else {
//   console.log("default button");
// }

const buttonType = "primary";

switch (buttonType) {
  case "primary":
    console.log("primary");
  // break;
  case "main":
    console.log("main");
  case "global":
    console.log("global");
    break;
  // ===================================== як варіант, ця конструкція можлива в середині коду, але потрібно ставити break
  // default:
  // 	console.log("default button"); //run if const buttonType = NOT "primary"
  // 	break;
  // =====================================
  case "secondary":
    console.log("secondary");
    break;
  default:
    console.log("default button"); //run if const buttonType = NOT "primary"
}
