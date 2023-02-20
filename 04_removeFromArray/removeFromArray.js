const removeFromArray = function (array, ...removeItems) {
  return array.filter((x) => !removeItems.includes(x));
};

// Do not edit below this line
module.exports = removeFromArray;
