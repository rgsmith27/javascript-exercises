const convertToCelsius = function(fahrenheit) {
  return round(((fahrenheit - 32) * 5/9), 1);
};

const convertToFahrenheit = function(celsius) {
  return round(((celsius * 9/5) + 32), 1)
};

function round(value, precision){
  let multiplier = Math.pow(10, precision);
  return Math.round(value * multiplier) / multiplier;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
