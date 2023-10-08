const leapYears = function (isLeapYear) {
  if (isLeapYear % 100 === 0 && isLeapYear % 400 != 0) {
    return false;
  } else if (
    isLeapYear % 100 === 0 ||
    isLeapYear % 400 === 0 ||
    isLeapYear % 4 === 0
  ) {
    return true;
  } else {
    return false;
  }
};
leapYears(1996);
// Do not edit below this line
module.exports = leapYears;
