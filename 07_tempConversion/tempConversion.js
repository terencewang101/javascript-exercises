const convertToCelsius = function(fTemp) {
  let celciusNew;
  if (typeof fTemp == "number") {
    celciusNew = (fTemp-32)*5/9;
    celciusRounded = Math.round(celciusNew * 10) / 10;
  }
  return celciusRounded;
};

const convertToFahrenheit = function(cTemp) {
  if (typeof cTemp == "number") {
    fahrenheitNew = cTemp * 9 / 5 + 32;
    fahrenheitRounded = Math.round(fahrenheitNew * 10) / 10;
  }
  return fahrenheitRounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
