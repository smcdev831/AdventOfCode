const readFileSync = require("fs").readFileSync;
var input = readFileSync("./Day1-1.txt", {
  encoding: "utf8",
  flag: "r",
}).trim();

let splitInput = input.split("\n");

function CalorieCounter(splitInput) {
  let sum = 0;
  let greatestNumber = 0;
  for (let i = 0; i < splitInput.length; ++i) {
    if (Boolean(splitInput[i]) === true) {
      sum += splitInput[i] * 1;
    } else if (Boolean(splitInput[i]) === false) {
      greatestNumber = Math.max(sum, greatestNumber);
      sum = 0;
    }
  }
  return [sum, greatestNumber];
}

console.log(CalorieCounter(splitInput));
