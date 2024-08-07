const maxSumSubArr = (arr, size) => {
  let left = 0;
  let total = 0;
  let maxSum = 0;
  for (let index = 0; index < arr.length; index++) {
    total += arr[index];
    while (index - left + 1 === size) {
      maxSum = Math.max(total, maxSum);
      total -= arr[left];
      left += 1;
    }
  }
  return maxSum;
};

console.log(maxSumSubArr([-1, 2, 3, 1, 2], 3));
