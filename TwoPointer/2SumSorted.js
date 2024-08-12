const twoSum = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;
  while (arr[start] + arr[end] !== target) {
    if (arr[start] + arr[end] > target) {
      end--;
    } else {
      start++;
    }
  }
  return [start + 1, end + 1];
};

console.log(twoSum([-1, 0], -1));
