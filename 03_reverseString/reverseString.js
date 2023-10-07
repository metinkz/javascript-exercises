const reverseString = function (normalString) {
  let word = "";

  for (let i = normalString.length - 1; i >= 0; i--) {
    word += normalString[i];
  }
  return word;
};
reverseString("");
// Do not edit below this line
module.exports = reverseString;
