const twoSum = (nums, target) => {
  const map = new Map();
  for (let index = 0; index < nums.length; index++) {
    if (map.has(target - nums[index])) {
      return [map.get(target - nums[index]), index];
    } else {
      map.set(nums[index], index);
    }
  }
  return [];
};

console.log(twoSum([2, 7, 11, 15], 9));
