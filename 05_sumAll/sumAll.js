// My code:
const sumAll = function (startingNumber, endingNumber) {
  let sum = 0;
  if (typeof startingNumber != "number" || typeof endingNumber != "number") {
    return "ERROR";
  }
  if (startingNumber < 0 || endingNumber < 0) {
    return "ERROR";
  }
  if (startingNumber < endingNumber) {
    for (let i = startingNumber; i <= endingNumber; i++) {
      sum += i;
    }
    return sum;
  }
  if (startingNumber > endingNumber) {
    for (let i = startingNumber; i >= endingNumber; i--) {
      sum += i;
    }
    return sum;
  }
};
sumAll(4, 1);
// Solution:

// Do not edit below this line
module.exports = sumAll;
