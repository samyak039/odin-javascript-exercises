const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  let sum = 0;
  for (let num of arr) sum += num;
  return sum;
};

const multiply = function (arr) {
  let multiply = 1;
  for (let num of arr) multiply *= num;
  return multiply;
};

const power = function (num, pow) {
  let power = 1;
  for (let i = 1; i <= pow; i++) power *= num;
  return power;
};

const factorial = function (num) {
  let fact = 1;
  let i = 1;
  while (i <= num) fact *= i++;
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
