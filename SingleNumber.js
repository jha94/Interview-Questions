const singleNumber = (nums) => {
  const map = new Map();
  for (let index = 0; index < nums.length; index++) {
    if (map.has(nums[index])) {
      map.set(nums[index], map.get(nums[index]) + 1);
    } else {
      map.set(nums[index], 1);
    }
  }
  let result;
  map.forEach((key, value) => {
    if (key === 1) {
      result = value;
    }
  });
  return result;
};

console.log(singleNumber([3, 2, 3]));
