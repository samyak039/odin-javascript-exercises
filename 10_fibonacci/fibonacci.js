const fibonacci = function (fib) {
  if (fib < 0) return "OOPS";

  let fibArr = [1, 1];
  for (let i = 2; i < fib; i++) fibArr[i] = fibArr[i - 1] + fibArr[i - 2];

  return fibArr.at(fib - 1);
};

// Do not edit below this line
module.exports = fibonacci;
