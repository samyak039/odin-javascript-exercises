const repeatString = function (sentence, times) {
  if (times < 0) return 'ERROR';

  let str = "";
  for (let i = 0; i < times; ++i) {
    str += sentence;
  }
  return str;
};

// Do not edit below this line
module.exports = repeatString;
