const missingNumber = (nums) => {
  nums.sort((a, b) => a - b);
  for (let index = 0; index < nums.length; index++) {
    if (!nums.includes(index)) {
      return index;
      break;
    }
  }
  return nums[nums.length - 1] + 1;
};
console.log(missingNumber([1, 0]));
