const findTheOldest = function (peopleArr) {
  let ageArr = [];
  let maxAge = 0;
  let maxAgeIndex = 0;

  for (const people of peopleArr) {
    if (people["yearOfDeath"] != null) {
      ageArr.push(people["yearOfDeath"] - people["yearOfBirth"]);
    } else {
      ageArr.push(2023 - people["yearOfBirth"]);
    }
  }

  for (let i = 0; i < ageArr.length; i++) {
    if (maxAge < ageArr[i]) {
      maxAge = ageArr[i];
      maxAgeIndex = i;
    }
  }

  return peopleArr[maxAgeIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
