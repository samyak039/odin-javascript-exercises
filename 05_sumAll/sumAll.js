const sumAll = function (x, y) {
  if (x < 0 || y < 0 || typeof x != "number" || typeof y != "number") {
    return "ERROR";
  }

  let a = Math.min(x, y);
  let b = Math.max(x, y);

  let sum = 0;
  for (let i = a; i <= b; i++) sum += i;

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
