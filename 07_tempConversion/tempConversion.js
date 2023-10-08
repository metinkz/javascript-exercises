const convertToCelsius = function (tempFahrenheit) {
  const tempCelcius = (tempFahrenheit - 32) / 1.8;
  const roundedTempCelcius = Math.round(tempCelcius * 10) / 10;
  return roundedTempCelcius;
};

const convertToFahrenheit = function (tempCelcius) {
  const tempFahrenheit = tempCelcius * 1.8 + 32;
  const roundedTempFahrenheit = Math.round(tempFahrenheit * 10) / 10;
  return roundedTempFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
