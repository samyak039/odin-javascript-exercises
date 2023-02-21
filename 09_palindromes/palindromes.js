const palindromes = function (str) {
  let removeItems = [" ", "!", ",", "."];

  let arr = str.split("");
  arr = arr.map((e) => e.toLowerCase());
  arr = arr.filter((x) => !removeItems.includes(x));

  let i = arr.length;
  const a = [...arr];
  const b = arr.reverse();

  while (i--) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
