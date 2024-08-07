const getMinSum = (arr, k) => {
  let left = 0;
  let total = 0;
  let minSum = Infinity;
  for (let index = 0; index < arr.length - k; index++) {
    total += arr[index];
    while (index - left + 1 === k) {
      minSum = Math.min(minSum, total);
      total -= arr[left];
      left += 1;
    }
  }
  return minSum;
};

console.log(getMinSum([10, 4, 2, 5, 6, 3, 8, 1], 3));
