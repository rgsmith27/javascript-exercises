const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numbers) {
	let sum = 0;
  numbers.forEach(num => {
    sum += num;
  });
  return sum;
};

const multiply = function(numbers) {
  let product = 1;
  numbers.forEach(num => {
    product *= num;
  });
  return product
};

const power = function(base, exp) {
  let value = 1;
	for(let i = 0; i < exp; i++){
    value *= base;
  }
  return value;
};

const factorial = function(num) {
	let value = 1;
  for(let i = 1; i <= num; i++){
    value *= i;
  }
  return value;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
