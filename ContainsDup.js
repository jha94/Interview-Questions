var containsNearbyDuplicate = function (nums, k) {
  const hashMap = new Map();
  for (let index = 0; index < nums.length; index++) {
    if (index - hashMap.get(nums[index]) <= k) {
      return true;
    }
    hashMap.set(nums[index], index);
  }
  return false;
};

console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2));
