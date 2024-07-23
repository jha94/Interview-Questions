const firstMissing = (arr) => {
  arr.sort((a, b) => a - b);
  let missingPositive;
  for (let index = 1; index <= arr.length - 1; index++) {
    if (arr.indexOf(index) === -1) {
      missingPositive = index;
      break;
    }
  }
  return missingPositive || arr[arr.length - 1] + 1;
};

console.log(firstMissing([-8, -7, -6]));
