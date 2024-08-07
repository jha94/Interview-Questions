const minSubArrayLen = (sum, arr) => {
  let left = 0;
  let total = 0;
  let result = Infinity;
  for (let index = 0; index < arr.length; index++) {
    total += arr[index];
    while (total >= sum) {
      result = Math.min(result, index - left + 1);
      total -= arr[left];
      left += 1;
    }
  }
  return result;
};

console.log(minSubArrayLen(4, [1, 4, 4]));
