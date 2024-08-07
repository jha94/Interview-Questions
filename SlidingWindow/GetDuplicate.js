const getDuplicates = (arr, range) => {
  let left = 0;
  let unique = [];
  for (let index = 0; index < arr.length; index++) {
    if (unique.indexOf(arr[index]) > -1) {
      return true;
    } else {
      unique.push(arr[index]);
      if ((index + 1) % range === 0) {
        unique.shift();
      }
    }
  }
  return false;
};

console.log(getDuplicates([5, 5, 5, 2, 4, 6, 9], 2));
