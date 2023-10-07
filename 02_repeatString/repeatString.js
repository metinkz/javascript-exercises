const repeatString = function (greetingMessage, timesRepeated) {
  if (timesRepeated === -1) {
    return "ERROR";
  }
  string = "";
  for (let i = 0; i < timesRepeated; i++) {
    string += greetingMessage;
  }
  return string;
};
const number = Math.floor(Math.random() * 1000);

console.log(repeatString("", number));
// Do not edit below this line
module.exports = repeatString;
